const { validationResult } = require('express-validator');

// Reject unexpected fields to reduce attack surface and avoid hidden payloads.
function allowedFields(allowed = []) {
  return (req, res, next) => {
    const bodyKeys = Object.keys(req.body || {});
    const queryKeys = Object.keys(req.query || {});
    const unexpectedBody = bodyKeys.filter((key) => !allowed.includes(key));
    const unexpectedQuery = queryKeys.filter((key) => !allowed.includes(key));
    const unexpectedFields = [...unexpectedBody, ...unexpectedQuery];

    if (unexpectedFields.length) {
      return res.status(400).json({
        success: false,
        message: `Unexpected field(s): ${unexpectedFields.join(', ')}`,
      });
    }
    next();
  };
}

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.array().map((err) => err.msg).join(', ');
    return res.status(400).json({ success: false, message });
  }
  next();
}

module.exports = { allowedFields, validateRequest };
