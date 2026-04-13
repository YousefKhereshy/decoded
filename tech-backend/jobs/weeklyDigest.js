const cron = require('node-cron');
const { prisma } = require('../config/db');
const fetchNews = require('../utils/fetchNews');
const summarizeWithClaude = require('../utils/summarizeWithClaude');
const sendNewsletter = require('../utils/sendNewsletter');

const runWeeklyDigest = async () => {
  console.log('⚡ Weekly digest job started...');

  try {
    // Step 1 — Fetch news from NewsAPI
    console.log('📰 Fetching news...');
    const rawArticles = await fetchNews();

    // Step 2 — Summarize each article with Claude AI
    console.log('🤖 Summarizing articles with Claude...');
    const summarizedArticles = [];

    for (const rawArticle of rawArticles) {
      const summary = await summarizeWithClaude(rawArticle);

      summarizedArticles.push({
        title:      rawArticle.title,
        summary:    summary.summary,
        detail:     summary.detail,
        category:   summary.category,
        sourceUrl:  rawArticle.url,
        imageUrl:   rawArticle.urlToImage,
        readTime:   summary.readTime,
        weekStart:  getMonday(new Date()),
        publishedAt: new Date(rawArticle.publishedAt)
      });
    }

    // Step 3 — Save articles to database
    console.log('💾 Saving articles to database...');
    await prisma.article.createMany({
      data: summarizedArticles,
      skipDuplicates: true
    });

    console.log(`✅ Saved ${summarizedArticles.length} articles to database`);

    // Step 4 — Fetch all newsletter subscribers
    console.log('📋 Fetching subscribers...');
    const subscribers = await prisma.newsletterSubscriber.findMany();

    if (subscribers.length === 0) {
      console.log('⚠️  No subscribers found, skipping email send');
      return;
    }

    // Step 5 — Send newsletter to all subscribers
    console.log(`📧 Sending newsletter to ${subscribers.length} subscribers...`);
    await sendNewsletter(subscribers, summarizedArticles);

    console.log('✅ Weekly digest job completed successfully!');

  } catch (err) {
    console.error('❌ Weekly digest job failed:', err.message);
  }
};

// Helper — get Monday of current week
const getMonday = (date) => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

// Schedule — every Monday at 8:00 AM
const scheduleWeeklyDigest = () => {
  cron.schedule('0 8 * * 1', () => {
    console.log('⏰ Running scheduled weekly digest...');
    runWeeklyDigest();
  });

  console.log('📅 Weekly digest scheduled for every Monday at 8:00 AM');
};

module.exports = { scheduleWeeklyDigest, runWeeklyDigest };