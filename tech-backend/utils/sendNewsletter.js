const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendNewsletter = async (subscribers, articles) => {
  try {
    // Build articles HTML
    const articlesHTML = articles.map((article, index) => `
      <div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #1e1e2e;">
        <div style="display: inline-block; padding: 4px 12px; background: #1a1a2e; border: 1px solid #e8ff47; color: #e8ff47; font-size: 11px; font-family: monospace; letter-spacing: 2px; margin-bottom: 12px;">
          ${article.category}
        </div>
        <h2 style="font-size: 20px; color: #e8e8f0; margin: 0 0 12px 0; line-height: 1.4;">
          ${article.title}
        </h2>
        <p style="font-size: 14px; color: #6b6b88; line-height: 1.7; margin: 0 0 16px 0;">
          ${article.summary}
        </p>
        <a href="${article.sourceUrl || '#'}" 
           style="color: #e8ff47; font-size: 12px; font-family: monospace; text-decoration: none; letter-spacing: 1px;">
          READ FULL STORY →
        </a>
      </div>
    `).join('');

    // Build email HTML
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Decoded Weekly Digest</title>
      </head>
      <body style="margin: 0; padding: 0; background: #0a0a0f; font-family: 'DM Sans', Arial, sans-serif;">
        
        <div style="max-width: 640px; margin: 0 auto; padding: 40px 24px;">
          
          <!-- Header -->
          <div style="border-bottom: 1px solid #1e1e2e; padding-bottom: 32px; margin-bottom: 40px;">
            <div style="font-family: monospace; font-size: 20px; font-weight: bold; letter-spacing: 4px; color: #e8ff47;">
              TECH<span style="color: #6b6b88;">PULSE</span>
            </div>
            <div style="font-family: monospace; font-size: 11px; color: #6b6b88; letter-spacing: 2px; margin-top: 8px;">
              WEEKLY DIGEST — ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }).toUpperCase()}
            </div>
          </div>

          <!-- Intro -->
          <div style="margin-bottom: 40px;">
            <h1 style="font-size: 32px; color: #e8e8f0; margin: 0 0 16px 0; line-height: 1.2;">
              This Week in <em style="color: #e8ff47;">Technology</em>
            </h1>
            <p style="font-size: 14px; color: #6b6b88; line-height: 1.7; margin: 0;">
              Your weekly AI-summarized digest of the biggest tech stories. 
              Catch up on everything that mattered this week in under 10 minutes.
            </p>
          </div>

          <!-- Articles -->
          ${articlesHTML}

          <!-- Footer -->
          <div style="border-top: 1px solid #1e1e2e; padding-top: 32px; margin-top: 8px;">
            <p style="font-size: 12px; color: #6b6b88; font-family: monospace; letter-spacing: 1px; margin: 0 0 8px 0;">
              YOU ARE RECEIVING THIS BECAUSE YOU SUBSCRIBED TO Decoded
            </p>
            <p style="font-size: 12px; color: #6b6b88; margin: 0;">
              © ${new Date().getFullYear()} Decoded. All rights reserved.
            </p>
          </div>

        </div>
      </body>
      </html>
    `;

    // Send to all subscribers
    const emailPromises = subscribers.map(subscriber =>
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: subscriber.email,
        subject: `⚡ Decoded Weekly — ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
        html: emailHTML
      })
    );

    await Promise.all(emailPromises);

    console.log(`📧 Newsletter sent to ${subscribers.length} subscribers`);

  } catch (err) {
    console.error('❌ Failed to send newsletter:', err.message);
    throw new Error('Failed to send newsletter');
  }
};

module.exports = sendNewsletter;
