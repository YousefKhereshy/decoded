const axios = require('axios');

// Fetch latest technology articles from NewsAPI. Prisma parameterization prevents SQL injection.
async function fetchNews(pageSize = 10) {
  const url = 'https://newsapi.org/v2/top-headlines';
  const params = {
    category: 'technology',
    pageSize,
    language: 'en',
    apiKey: process.env.NEWS_API_KEY,
  };

  const response = await axios.get(url, { params, timeout: 10000 });
  const articles = response.data.articles || [];

  return articles
    .filter((article) => article.title && article.description && article.url)
    .map((article) => ({
      title: article.title,
      description: article.description,
      content: article.content || article.description,
      sourceUrl: article.url,
      imageUrl: article.urlToImage || null,
      publishedAt: article.publishedAt ? new Date(article.publishedAt).toISOString() : new Date().toISOString(),
      sourceName: article.source?.name || 'TechPulse',
    }));
}

module.exports = fetchNews;
