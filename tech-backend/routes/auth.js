const express = require('express');
const router  = express.Router();
const { body } = require('express-validator');

const {
  signup,
  login,
  refresh,
  logout,
  getProfile
} = require('../controllers/authController');

const authMiddleware = require('../middleware/authMiddleware');
const validate       = require('../middleware/validate');
const { authLimiter } = require('../middleware/rateLimiter');

// ─── Signup ───────────────────────────
router.post('/signup',
  authLimiter,
  [
    body('name')
      .notEmpty()
      .withMessage('Name is required')
      .trim(),

    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail(),

    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
      .withMessage('Password must contain uppercase, lowercase, number and special character'),

    validate
  ],
  signup
);

// ─── Login ────────────────────────────
router.post('/login',
  authLimiter,
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail(),

    body('password')
      .notEmpty()
      .withMessage('Password is required'),

    validate
  ],
  login
);

// ─── Refresh Token ────────────────────
router.post('/refresh', refresh);

// ─── Logout ───────────────────────────
router.post('/logout', logout);

// ─── Get Profile ──────────────────────
router.get('/profile', authMiddleware, getProfile);

module.exports = router;