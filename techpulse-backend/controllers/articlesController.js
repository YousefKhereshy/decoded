const prisma = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');

function buildSearchFilter(search, category) {
  const filter = {};
  if (category) {
    filter.category = category;
  }
  if (search) {
    filter.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { summary: { contains: search, mode: 'insensitive' } },
      { detail: { contains: search, mode: 'insensitive' } },
    ];
  }
  return filter;
}

exports.getArticles = asyncHandler(async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const pageSize = Math.min(50, Math.max(1, parseInt(req.query.pageSize, 10) || 10));
  const search = req.query.search?.trim();
  const category = req.query.category?.trim().toUpperCase();

  const where = buildSearchFilter(search, category);
  const total = await prisma.article.count({ where });
  const articles = await prisma.article.findMany({
    where,
    orderBy: { publishedAt: 'desc' },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return res.status(200).json({
    success: true,
    data: {
      total,
      page,
      pageSize,
      articles,
    },
  });
});

exports.getArticleById = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const article = await prisma.article.findUnique({ where: { id } });

  if (!article) {
    return res.status(404).json({ success: false, message: 'Article not found.' });
  }

  return res.status(200).json({ success: true, data: { article } });
});

exports.searchArticles = asyncHandler(async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const pageSize = Math.min(50, Math.max(1, parseInt(req.query.pageSize, 10) || 10));
  const search = req.query.search?.trim();
  const category = req.query.category?.trim().toUpperCase();

  const where = buildSearchFilter(search, category);
  const total = await prisma.article.count({ where });
  const articles = await prisma.article.findMany({
    where,
    orderBy: { publishedAt: 'desc' },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return res.status(200).json({
    success: true,
    data: {
      total,
      page,
      pageSize,
      articles,
    },
  });
});
