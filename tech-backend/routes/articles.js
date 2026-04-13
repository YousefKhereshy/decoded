const express = require('express');
const router  = express.Router();

const {
  getArticles,
  getArticle,
  searchArticles
} = require('../controllers/articlesController');

// ─── Get all articles ─────────────────
router.get('/', getArticles);

// ─── Search articles ──────────────────
router.get('/search', searchArticles);

// ─── Get single article ───────────────
router.get('/:id', getArticle);

module.exports = router;