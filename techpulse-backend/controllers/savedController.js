const prisma = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');

exports.getSavedArticles = asyncHandler(async (req, res) => {
  const savedArticles = await prisma.savedArticle.findMany({
    where: { userId: req.user.id },
    include: { article: true },
    orderBy: { savedAt: 'desc' },
  });

  return res.status(200).json({ success: true, data: { savedArticles } });
});

exports.saveArticle = asyncHandler(async (req, res) => {
  const articleId = parseInt(req.body.articleId, 10);
  const article = await prisma.article.findUnique({ where: { id: articleId } });

  if (!article) {
    return res.status(404).json({ success: false, message: 'Article not found.' });
  }

  const existing = await prisma.savedArticle.findUnique({
    where: { userId_articleId: { userId: req.user.id, articleId } },
  });

  if (existing) {
    return res.status(409).json({ success: false, message: 'Article already saved.' });
  }

  const savedArticle = await prisma.savedArticle.create({
    data: {
      userId: req.user.id,
      articleId,
    },
    include: { article: true },
  });

  return res.status(201).json({ success: true, data: { savedArticle } });
});

exports.unsaveArticle = asyncHandler(async (req, res) => {
  const articleId = parseInt(req.params.articleId, 10);
  const savedRecord = await prisma.savedArticle.findUnique({
    where: { userId_articleId: { userId: req.user.id, articleId } },
  });

  if (!savedRecord) {
    return res.status(404).json({ success: false, message: 'Saved article not found.' });
  }

  await prisma.savedArticle.delete({
    where: { id: savedRecord.id },
  });

  return res.status(200).json({ success: true, data: { message: 'Article removed from saved articles.' } });
});
