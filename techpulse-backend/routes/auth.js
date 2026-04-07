const express = require('express');
const { body } = require('express-validator');
const { signup, login, refresh, logout, profile } = require('../controllers/authController');
const { authLimiter } = require('../middleware/rateLimiter');
const { validateRequest, allowedFields } = require('../middleware/validate');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
  '/signup',
  authLimiter,
  allowedFields(['name', 'email', 'password']),
  body('name').trim().isLength({ min: 1, max: 50 }).withMessage('Name is required and must be 50 characters or fewer.'),
  body('email').trim().isEmail().withMessage('Valid email is required.').normalizeEmail(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
    .withMessage('Password must include uppercase, lowercase, number, and special character.'),
  validateRequest,
  signup,
);

router.post(
  '/login',
  authLimiter,
  allowedFields(['email', 'password']),
  body('email').trim().isEmail().withMessage('Valid email is required.').normalizeEmail(),
  body('password').exists().withMessage('Password is required.'),
  validateRequest,
  login,
);

router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/profile', protect, profile);

module.exports = router;
