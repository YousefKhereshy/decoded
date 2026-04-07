const allowedOrigins = [process.env.FRONTEND_URL];

// Strict CORS configuration to allow only the known frontend origin and credentials.
module.exports = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy violation: origin not allowed'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};
