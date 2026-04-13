const rateLimit = require('express-rate-limit');

// Global rate limiter — applies to all routes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // max 100 requests per 15 minutes
  message: {
    success: false,
    message: 'Too many requests, please try again after 15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Auth rate limiter — stricter, applies to login/signup
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,                   // max 10 requests per 15 minutes
  message: {
    success: false,
    message: 'Too many auth attempts, please try again after 15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Newsletter rate limiter — very strict
const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,                    // max 3 requests per hour
  message: {
    success: false,
    message: 'Too many subscribe attempts, please try again after 1 hour'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { globalLimiter, authLimiter, newsletterLimiter };