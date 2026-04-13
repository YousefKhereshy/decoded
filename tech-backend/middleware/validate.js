const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  // Check if there are any validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg, // Return first error only
      errors: errors.array()
    });
  }

  next();
};

module.exports = validate;