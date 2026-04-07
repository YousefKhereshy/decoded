const express = require('express');
const { body, param } = require('express-validator');
const { getSavedArticles, saveArticle, unsaveArticle } = require('../controllers/savedController');
const { protect } = require('../middleware/authMiddleware');
const { validateRequest, allowedFields } = require('../middleware/validate');

const router = express.Router();

router.use(protect);

router.get('/', getSavedArticles);

router.post(
  '/',
  allowedFields(['articleId']),
  body('articleId').isInt().withMessage('Article ID is required and must be an integer.'),
  validateRequest,
  saveArticle,
);

router.delete(
  '/:articleId',
  param('articleId').isInt().withMessage('Article ID must be an integer.'),
  validateRequest,
  unsaveArticle,
);

module.exports = router;
