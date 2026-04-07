function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const response = {
    success: false,
    message: err.message || 'Internal Server Error',
  };

  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
    response.error = err;
  }

  console.error(`[${new Date().toISOString()}] ${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  res.status(statusCode).json(response);
}

module.exports = { errorHandler };
