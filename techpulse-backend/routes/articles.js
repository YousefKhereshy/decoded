const express = require('express');
const { query, param } = require('express-validator');
const { getArticles, getArticleById, searchArticles } = require('../controllers/articlesController');
const { validateRequest, allowedFields } = require('../middleware/validate');

const router = express.Router();

router.get(
  '/',
  allowedFields(['page', 'pageSize', 'search', 'category']),
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer.'),
  query('pageSize').optional().isInt({ min: 1, max: 50 }).withMessage('Page size must be between 1 and 50.'),
  query('search').optional().trim().escape(),
  query('category').optional().trim().isIn(['AI', 'HARDWARE', 'SOFTWARE', 'CRYPTO', 'STARTUPS', 'SCIENCE']).withMessage('Invalid category.'),
  validateRequest,
  getArticles,
);

router.get(
  '/search',
  allowedFields(['search', 'category', 'page', 'pageSize']),
  query('search').optional().trim().escape(),
  query('category').optional().trim().isIn(['AI', 'HARDWARE', 'SOFTWARE', 'CRYPTO', 'STARTUPS', 'SCIENCE']).withMessage('Invalid category.'),
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer.'),
  query('pageSize').optional().isInt({ min: 1, max: 50 }).withMessage('Page size must be between 1 and 50.'),
  validateRequest,
  searchArticles,
);

router.get(
  '/:id',
  param('id').isInt().withMessage('Article ID must be an integer.'),
  validateRequest,
  getArticleById,
);

module.exports = router;
