const express = require('express');
const { body } = require('express-validator');
const { subscribe } = require('../controllers/newsletterController');
const { newsletterLimiter } = require('../middleware/rateLimiter');
const { validateRequest, allowedFields } = require('../middleware/validate');

const router = express.Router();

router.post(
  '/subscribe',
  newsletterLimiter,
  allowedFields(['email']),
  body('email').trim().isEmail().withMessage('Valid email is required.').normalizeEmail(),
  validateRequest,
  subscribe,
);

module.exports = router;
