const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

function buildDigestHtml(articles) {
  const items = articles
    .map(
      (article, index) => `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong>${index + 1}. ${article.title}</strong><br />
          <span style="color: #6b7280;">${article.summary}</span><br />
          <a href="${article.sourceUrl}" style="color: #2563eb; text-decoration: none;">Read full article</a>
        </td>
      </tr>`,
    )
    .join('');

  return `
    <html>
      <body style="font-family: Arial, sans-serif; background: #0f172a; color: #e2e8f0; padding: 24px;">
        <div style="max-width: 700px; margin: auto; background: #111827; border-radius: 16px; padding: 32px;">
          <h1 style="color: #e7ff47;">TechPulse Weekly Digest</h1>
          <p style="color: #cbd5e1;">Here are the latest technology stories summarized for your weekly read.</p>
          <table width="100%" role="presentation" style="border-collapse: collapse; margin-top: 24px;">
            ${items}
          </table>
          <p style="color: #9ca3af; margin-top: 32px;">Thank you for subscribing to TechPulse Weekly Digest.</p>
        </div>
      </body>
    </html>`;
}

async function sendWeeklyDigestEmail(subscriberEmails, articles) {
  const html = buildDigestHtml(articles);
  const from = process.env.RESEND_FROM_EMAIL;
  const subject = 'TechPulse Weekly Digest';

  const sendPromises = subscriberEmails.map((email) =>
    resend.emails.send({
      from,
      to: email,
      subject,
      html,
    }),
  );

  return Promise.all(sendPromises);
}

module.exports = { sendWeeklyDigestEmail };
