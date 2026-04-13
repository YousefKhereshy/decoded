const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const { connectDB } = require('./config/db');
const corsOptions = require('./config/corsOptions');
const { globalLimiter } = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(globalLimiter);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Decoded backend is running' });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/articles', require('./routes/articles'));
app.use('/api/saved', require('./routes/saved'));
app.use('/api/newsletter', require('./routes/newsletter'));

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Decoded backend running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Backend failed to start:', err);
    process.exit(1);
  });

