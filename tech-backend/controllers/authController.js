const bcrypt = require('bcryptjs');
const { prisma } = require('../config/db');
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshTokenCookie
} = require('../utils/generateToken');
const jwt = require('jsonwebtoken');

// ─────────────────────────────────────
// SIGNUP
// ─────────────────────────────────────
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already in use'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    // Generate tokens
    const accessToken  = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save refresh token in database
    await prisma.user.update({
      where: { id: user.id },
      data:  { refreshToken }
    });

    // Send refresh token as httpOnly cookie
    sendRefreshTokenCookie(res, refreshToken);

    // Send response
    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      accessToken,
      user: {
        id:    user.id,
        name:  user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.error('❌ Signup error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// LOGIN
// ─────────────────────────────────────
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate tokens
    const accessToken  = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save refresh token in database
    await prisma.user.update({
      where: { id: user.id },
      data:  { refreshToken }
    });

    // Send refresh token as httpOnly cookie
    sendRefreshTokenCookie(res, refreshToken);

    // Send response
    res.json({
      success: true,
      message: 'Logged in successfully',
      accessToken,
      user: {
        id:           user.id,
        name:         user.name,
        email:        user.email,
        isSubscriber: user.isSubscriber
      }
    });

  } catch (err) {
    console.error('❌ Login error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// REFRESH TOKEN
// ─────────────────────────────────────
const refresh = async (req, res) => {
  try {
    // Get refresh token from cookie
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: 'No refresh token found'
      });
    }

    // Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // Find user and check token matches
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({
        success: false,
        message: 'Invalid refresh token'
      });
    }

    // Generate new tokens (rotation)
    const newAccessToken  = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    // Save new refresh token in database
    await prisma.user.update({
      where: { id: user.id },
      data:  { refreshToken: newRefreshToken }
    });

    // Send new refresh token cookie
    sendRefreshTokenCookie(res, newRefreshToken);

    res.json({
      success: true,
      accessToken: newAccessToken
    });

  } catch (err) {
    console.error('❌ Refresh error:', err.message);
    res.status(401).json({
      success: false,
      message: 'Invalid or expired refresh token'
    });
  }
};

// ─────────────────────────────────────
// LOGOUT
// ─────────────────────────────────────
const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (refreshToken) {
      // Remove refresh token from database
      await prisma.user.updateMany({
        where: { refreshToken },
        data:  { refreshToken: null }
      });
    }

    // Clear cookie
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    res.json({
      success: true,
      message: 'Logged out successfully'
    });

  } catch (err) {
    console.error('❌ Logout error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// GET PROFILE
// ─────────────────────────────────────
const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id:           true,
        name:         true,
        email:        true,
        isSubscriber: true,
        createdAt:    true
      }
    });

    res.json({
      success: true,
      data: user
    });

  } catch (err) {
    console.error('❌ Get profile error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { signup, login, refresh, logout, getProfile };