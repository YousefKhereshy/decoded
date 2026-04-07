const prisma = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');
const { sendWeeklyDigestEmail } = require('../utils/sendNewsletter');

exports.subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } });
  if (existing) {
    return res.status(409).json({ success: false, message: 'Email already subscribed.' });
  }

  await prisma.newsletterSubscriber.create({ data: { email } });
  await prisma.user.updateMany({ where: { email }, data: { isSubscriber: true } });

  return res.status(201).json({ success: true, data: { message: 'Subscribed successfully.' } });
});

exports.sendWeeklyDigest = asyncHandler(async (req, res) => {
  const subscribers = await prisma.newsletterSubscriber.findMany({ select: { email: true } });
  const articles = await prisma.article.findMany({
    orderBy: { publishedAt: 'desc' },
    take: 10,
  });

  const emails = subscribers.map((subscriber) => subscriber.email);
  if (emails.length === 0) {
    return res.status(200).json({ success: true, data: { message: 'No subscribers to send newsletter.' } });
  }

  await sendWeeklyDigestEmail(emails, articles);
  return res.status(200).json({ success: true, data: { message: 'Weekly digest sent.' } });
});
