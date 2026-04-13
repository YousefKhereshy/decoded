const errorHandler = (err, req, res, next) => {
  // Log error with timestamp
  console.error(`❌ [${new Date().toISOString()}] ${err.message}`);

  // Default error values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal server error';

  // Prisma errors
  if (err.code === 'P2002') {
    statusCode = 409;
    message = 'This email is already in use';
  }

  if (err.code === 'P2025') {
    statusCode = 404;
    message = 'Record not found';
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
  }

  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expired, please login again';
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
  }

  // Hide error details in production
  const response = {
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  };

  res.status(statusCode).json(response);
};

module.exports = errorHandler;