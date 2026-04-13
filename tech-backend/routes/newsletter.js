const express = require('express');
const router  = express.Router();
const { body } = require('express-validator');

const {
  subscribe,
  unsubscribe,
  getSubscribersCount
} = require('../controllers/newsletterController');

const { newsletterLimiter } = require('../middleware/rateLimiter');
const validate              = require('../middleware/validate');

// ─── Subscribe ────────────────────────
router.post('/subscribe',
  newsletterLimiter,
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail(),

    validate
  ],
  subscribe
);

// ─── Unsubscribe ──────────────────────
router.post('/unsubscribe',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail(),

    validate
  ],
  unsubscribe
);

// ─── Get subscribers count ────────────
router.get('/count', getSubscribersCount);

module.exports = router;