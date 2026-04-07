const jwt = require('jsonwebtoken');
const prisma = require('../config/db');

// Protect routes by validating the access token and ensuring it is not blacklisted.
async function protect(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authorization header missing or malformed.' });
    }

    const token = authHeader.split(' ')[1];
    const blacklistedToken = await prisma.tokenBlacklist.findUnique({ where: { token } });
    if (blacklistedToken) {
      return res.status(401).json({ success: false, message: 'Token is invalidated. Please log in again.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, name: true, email: true, isSubscriber: true },
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid token payload.' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
}

module.exports = { protect };
