const { prisma } = require('../config/db');

// ─────────────────────────────────────
// GET SAVED ARTICLES
// ─────────────────────────────────────
const getSavedArticles = async (req, res) => {
  try {
    const savedArticles = await prisma.savedArticle.findMany({
      where: { userId: req.user.id },
      include: {
        article: true
      },
      orderBy: { savedAt: 'desc' }
    });

    res.json({
      success: true,
      data: savedArticles.map(saved => ({
        savedId:   saved.id,
        savedAt:   saved.savedAt,
        ...saved.article
      }))
    });

  } catch (err) {
    console.error('❌ Get saved articles error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// SAVE ARTICLE
// ─────────────────────────────────────
const saveArticle = async (req, res) => {
  try {
    const { articleId } = req.body;
    const userId = req.user.id;

    // Check if article exists
    const article = await prisma.article.findUnique({
      where: { id: parseInt(articleId) }
    });

    if (!article) {
      return res.status(404).json({
        success: false,
        message: 'Article not found'
      });
    }

    // Check if already saved
    const alreadySaved = await prisma.savedArticle.findUnique({
      where: {
        userId_articleId: {
          userId,
          articleId: parseInt(articleId)
        }
      }
    });

    if (alreadySaved) {
      return res.status(409).json({
        success: false,
        message: 'Article already saved'
      });
    }

    // Save article
    const saved = await prisma.savedArticle.create({
      data: {
        userId,
        articleId: parseInt(articleId)
      }
    });

    res.status(201).json({
      success: true,
      message: 'Article saved successfully',
      data: saved
    });

  } catch (err) {
    console.error('❌ Save article error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// UNSAVE ARTICLE
// ─────────────────────────────────────
const unsaveArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const userId = req.user.id;

    // Check if saved
    const saved = await prisma.savedArticle.findUnique({
      where: {
        userId_articleId: {
          userId,
          articleId: parseInt(articleId)
        }
      }
    });

    if (!saved) {
      return res.status(404).json({
        success: false,
        message: 'Saved article not found'
      });
    }

    // Delete saved article
    await prisma.savedArticle.delete({
      where: {
        userId_articleId: {
          userId,
          articleId: parseInt(articleId)
        }
      }
    });

    res.json({
      success: true,
      message: 'Article removed from saved'
    });

  } catch (err) {
    console.error('❌ Unsave article error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { getSavedArticles, saveArticle, unsaveArticle };