const { prisma } = require('../config/db');

// ─────────────────────────────────────
// GET ALL ARTICLES
// ─────────────────────────────────────
const getArticles = async (req, res) => {
  try {
    const page  = parseInt(req.query.page)  || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip  = (page - 1) * limit;

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        skip,
        take:    limit,
        orderBy: { publishedAt: 'desc' }
      }),
      prisma.article.count()
    ]);

    res.json({
      success: true,
      data: {
        articles,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });

  } catch (err) {
    console.error('❌ Get articles error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// GET SINGLE ARTICLE
// ─────────────────────────────────────
const getArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) }
    });

    if (!article) {
      return res.status(404).json({
        success: false,
        message: 'Article not found'
      });
    }

    res.json({
      success: true,
      data: article
    });

  } catch (err) {
    console.error('❌ Get article error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// SEARCH ARTICLES
// ─────────────────────────────────────
const searchArticles = async (req, res) => {
  try {
    const { keyword, category } = req.query;
    const page  = parseInt(req.query.page)  || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip  = (page - 1) * limit;

    // Build filters dynamically
    const where = {};

    if (keyword) {
      where.OR = [
        { title:   { contains: keyword, mode: 'insensitive' } },
        { summary: { contains: keyword, mode: 'insensitive' } }
      ];
    }

    if (category) {
      where.category = category.toUpperCase();
    }

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where,
        skip,
        take:    limit,
        orderBy: { publishedAt: 'desc' }
      }),
      prisma.article.count({ where })
    ]);

    res.json({
      success: true,
      data: {
        articles,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });

  } catch (err) {
    console.error('❌ Search articles error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { getArticles, getArticle, searchArticles };