const express = require('express');
const router  = express.Router();
const { body } = require('express-validator');

const {
  getSavedArticles,
  saveArticle,
  unsaveArticle
} = require('../controllers/savedController');

const authMiddleware = require('../middleware/authMiddleware');
const validate       = require('../middleware/validate');

// All saved routes require login
router.use(authMiddleware);

// ─── Get saved articles ───────────────
router.get('/', getSavedArticles);

// ─── Save article ─────────────────────
router.post('/',
  [
    body('articleId')
      .notEmpty()
      .withMessage('Article ID is required')
      .isNumeric()
      .withMessage('Article ID must be a number'),

    validate
  ],
  saveArticle
);

// ─── Unsave article ───────────────────
router.delete('/:articleId', unsaveArticle);

module.exports = router;