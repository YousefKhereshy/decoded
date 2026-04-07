require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions');
const { globalLimiter } = require('./middleware/rateLimiter');
const { errorHandler } = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articles');
const savedRoutes = require('./routes/saved');
const newsletterRoutes = require('./routes/newsletter');
const { startWeeklyDigest } = require('./jobs/weeklyDigest');

const requiredEnvs = [
  'PORT',
  'NODE_ENV',
  'DATABASE_URL',
  'JWT_SECRET',
  'REFRESH_TOKEN_SECRET',
  'FRONTEND_URL',
  'NEWS_API_KEY',
  'ANTHROPIC_API_KEY',
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
];

const missing = requiredEnvs.filter((key) => !process.env[key]);
if (missing.length) {
  throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
}

const app = express();
app.disable('x-powered-by');

const cspDirectives = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:'],
    connectSrc: ["'self'"],
    fontSrc: ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
    objectSrc: ["'none'"],
    frameAncestors: ["'none'"],
    upgradeInsecureRequests: [],
  },
};

app.use(helmet({
  contentSecurityPolicy: cspDirectives,
  crossOriginEmbedderPolicy: false,
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  frameguard: { action: 'deny' },
  noSniff: true,
  xssFilter: true,
}));
app.use(cors(corsOptions));
app.use(xss());
app.use(hpp());
app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));
app.use(globalLimiter);

app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/saved', savedRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.get('/api/health', (req, res) => res.status(200).json({ success: true, data: { message: 'TechPulse API is healthy.' } }));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.info(`TechPulse backend running on port ${PORT}`);
});

startWeeklyDigest();

process.on('unhandledRejection', (reason) => {
  console.error(`[UNHANDLED REJECTION] ${new Date().toISOString()} -`, reason);
  server.close(() => process.exit(1));
});

process.on('uncaughtException', (error) => {
  console.error(`[UNCAUGHT EXCEPTION] ${new Date().toISOString()} -`, error);
  process.exit(1);
});
