const bcrypt = require('bcrypt');
const prisma = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  setRefreshCookie,
} = require('../utils/generateToken');

const logAuth = (req, status, message) => {
  console.info(`[AUTH] ${new Date().toISOString()} ${status} ${req.ip} ${req.method} ${req.originalUrl} ${message}`);
};

function safeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isSubscriber: user.isSubscriber,
  };
}

exports.signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!passwordPattern.test(password)) {
    logAuth(req, 'FAILURE', 'Password policy validation failed');
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.',
    });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    logAuth(req, 'FAILURE', 'Email already registered');
    return res.status(409).json({ success: false, message: 'Email already in use.' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);
  await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });
  setRefreshCookie(res, refreshToken);

  logAuth(req, 'SUCCESS', 'User registered');
  return res.status(201).json({ success: true, data: { user: safeUser(user), accessToken } });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    logAuth(req, 'FAILURE', 'Invalid login credentials');
    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    logAuth(req, 'FAILURE', 'Invalid login credentials');
    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);
  await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });
  setRefreshCookie(res, refreshToken);

  logAuth(req, 'SUCCESS', 'User logged in');
  return res.status(200).json({ success: true, data: { user: safeUser(user), accessToken } });
});

exports.refresh = asyncHandler(async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(401).json({ success: false, message: 'Refresh token missing.' });
  }

  try {
    const decoded = verifyRefreshToken(token);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user || user.refreshToken !== token) {
      return res.status(401).json({ success: false, message: 'Refresh token invalid or rotated.' });
    }

    const newRefreshToken = generateRefreshToken(user.id);
    const newAccessToken = generateAccessToken(user.id);

    await prisma.$transaction([
      prisma.tokenBlacklist.create({
        data: {
          token,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      }),
      prisma.user.update({ where: { id: user.id }, data: { refreshToken: newRefreshToken } }),
    ]);

    setRefreshCookie(res, newRefreshToken);
    logAuth(req, 'SUCCESS', 'Refresh token rotated');
    return res.status(200).json({ success: true, data: { accessToken: newAccessToken } });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Failed to refresh access token.' });
  }
});

exports.logout = asyncHandler(async (req, res) => {
  const token = req.cookies.refreshToken;
  if (token) {
    await prisma.tokenBlacklist.create({
      data: {
        token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
    await prisma.user.updateMany({
      where: { refreshToken: token },
      data: { refreshToken: null },
    });
  }

  res.clearCookie('refreshToken', { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
  logAuth(req, 'SUCCESS', 'User logged out');
  return res.status(200).json({ success: true, data: { message: 'Logged out successfully.' } });
});

exports.profile = asyncHandler(async (req, res) => {
  return res.status(200).json({ success: true, data: { user: safeUser(req.user) } });
});
