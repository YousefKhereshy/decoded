const axios = require('axios');

const fetchNews = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: 'technology',
        language: 'en',
        pageSize: 10,
        apiKey: process.env.NEWS_API_KEY
      }
    });

    // Filter out articles with missing data
    const articles = response.data.articles.filter(article =>
      article.title &&
      article.description &&
      article.url
    );

    console.log(`📰 Fetched ${articles.length} articles from NewsAPI`);

    return articles;

  } catch (err) {
    console.error('❌ Failed to fetch news:', err.message);
    throw new Error('Failed to fetch news from NewsAPI');
  }
};

module.exports = fetchNews;