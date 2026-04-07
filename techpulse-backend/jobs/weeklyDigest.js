const cron = require('node-cron');
const prisma = require('../config/db');
const fetchNews = require('../utils/fetchNews');
const summarizeWithClaude = require('../utils/summarizeWithClaude');
const { sendWeeklyDigestEmail } = require('../utils/sendNewsletter');

function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setUTCDate(diff));
  monday.setUTCHours(0, 0, 0, 0);
  return monday;
}

async function runWeeklyDigest() {
  const start = new Date();
  console.info(`[WEEKLY DIGEST] Starting job at ${start.toISOString()}`);

  try {
    const rawArticles = await fetchNews(10);
    const savedArticles = [];

    for (const rawArticle of rawArticles) {
      const articleExists = await prisma.article.findFirst({ where: { sourceUrl: rawArticle.sourceUrl } });
      if (articleExists) {
        continue;
      }

      const summary = await summarizeWithClaude(rawArticle);
      const weekStart = getWeekStart(summary.publishedAt);
      const readTime = Math.max(1, Math.ceil((summary.detail.length || 300) / 180));

      const article = await prisma.article.create({
        data: {
          title: summary.title,
          summary: summary.summary,
          detail: summary.detail,
          category: summary.category,
          sourceUrl: summary.sourceUrl,
          imageUrl: summary.imageUrl,
          readTime,
          publishedAt: summary.publishedAt,
          weekStart,
        },
      });

      savedArticles.push(article);
    }

    const subscribers = await prisma.newsletterSubscriber.findMany({ select: { email: true } });
    const subscriberEmails = subscribers.map((subscriber) => subscriber.email);

    if (subscriberEmails.length > 0 && savedArticles.length > 0) {
      await sendWeeklyDigestEmail(subscriberEmails, savedArticles);
    }

    console.info(`[WEEKLY DIGEST] Completed successfully at ${new Date().toISOString()}`);
  } catch (error) {
    console.error(`[WEEKLY DIGEST] Failed at ${new Date().toISOString()}:`, error);
  }
}

function startWeeklyDigest() {
  cron.schedule('0 8 * * 1', () => {
    runWeeklyDigest();
  }, {
    timezone: 'UTC',
  });

  console.info('[WEEKLY DIGEST] Scheduler registered for every Monday at 08:00 UTC');
}

module.exports = { startWeeklyDigest, runWeeklyDigest };
