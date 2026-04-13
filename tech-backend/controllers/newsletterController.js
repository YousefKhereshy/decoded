const { prisma } = require('../config/db');

// ─────────────────────────────────────
// SUBSCRIBE
// ─────────────────────────────────────
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email }
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed'
      });
    }

    // Add subscriber
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email }
    });

    // If user is logged in — update their isSubscriber flag
    if (req.user) {
      await prisma.user.update({
        where: { id: req.user.id },
        data:  { isSubscriber: true }
      });
    }

    res.status(201).json({
      success: true,
      message: 'Subscribed successfully! You will receive your first digest next Monday.',
      data: { email: subscriber.email }
    });

  } catch (err) {
    console.error('❌ Subscribe error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// UNSUBSCRIBE
// ─────────────────────────────────────
const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in subscribers list'
      });
    }

    // Remove subscriber
    await prisma.newsletterSubscriber.delete({
      where: { email }
    });

    // If user is logged in — update their isSubscriber flag
    if (req.user) {
      await prisma.user.update({
        where: { id: req.user.id },
        data:  { isSubscriber: false }
      });
    }

    res.json({
      success: true,
      message: 'Unsubscribed successfully'
    });

  } catch (err) {
    console.error('❌ Unsubscribe error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ─────────────────────────────────────
// GET SUBSCRIBERS COUNT (public)
// ─────────────────────────────────────
const getSubscribersCount = async (req, res) => {
  try {
    const count = await prisma.newsletterSubscriber.count();

    res.json({
      success: true,
      data: { count }
    });

  } catch (err) {
    console.error('❌ Get subscribers count error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { subscribe, unsubscribe, getSubscribersCount };