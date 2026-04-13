const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const summarizeWithClaude = async (article) => {
  try {
    const prompt = `
You are a tech journalist. Summarize this tech article and return ONLY a valid JSON object with no markdown, no backticks, no preamble.

Article Title: ${article.title}
Article Description: ${article.description}

Return this exact JSON structure:
{
  "summary": "2-3 sentence summary of the article",
  "detail": "4-5 sentence detailed explanation and why it matters",
  "category": "one of: AI, HARDWARE, SOFTWARE, CRYPTO, STARTUPS, SCIENCE",
  "readTime": a number between 1 and 10
}
    `;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    // Extract text from response
    const text = response.content
      .map(block => block.text || '')
      .join('');

    // Clean and parse JSON
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    console.log(`✅ Summarized: ${article.title.slice(0, 50)}...`);

    return parsed;

  } catch (err) {
    console.error('❌ Failed to summarize article:', err.message);

    // Return default values if Claude fails
    return {
      summary: article.description,
      detail: article.description,
      category: 'SOFTWARE',
      readTime: 3
    };
  }
};

module.exports = summarizeWithClaude;