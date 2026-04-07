const { Anthropic } = require('@anthropic-ai/sdk');

const model = 'claude-3.5-mini';

const categoryMapping = {
  ai: 'AI',
  hardware: 'HARDWARE',
  software: 'SOFTWARE',
  crypto: 'CRYPTO',
  startups: 'STARTUPS',
  science: 'SCIENCE',
};

function normalizeCategory(rawCategory) {
  if (!rawCategory) return 'AI';
  const normalized = rawCategory.trim().toLowerCase();
  return categoryMapping[normalized] || 'AI';
}

function extractSummaryResponse(text) {
  const categoryMatch = text.match(/category[:\s]*([a-zA-Z]+)/i);
  const category = categoryMatch ? normalizeCategory(categoryMatch[1]) : null;

  const sentences = text
    .replace(/\n/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .join(' ')
    .trim();

  return {
    summary: sentences || text,
    category: category || 'AI',
  };
}

// Send each article to Claude AI and extract the category and a concise summary.
async function summarizeWithClaude(article) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const prompt = `Summarize this tech article in 3 sentences, explain why it matters, and categorize it as one of: ai, hardware, software, crypto, startups, science.\n\nTitle: ${article.title}\nDescription: ${article.description}`;

  const response = await client.responses.create({
    model,
    input: prompt,
    max_tokens_to_sample: 800,
    temperature: 0.2,
  });

  const outputText = response?.output?.[0]?.content?.find((item) => item.type === 'output_text')?.text || response?.completion || '';
  const summaryData = extractSummaryResponse(outputText);

  return {
    title: article.title,
    summary: summaryData.summary,
    detail: article.content || article.description,
    category: summaryData.category,
    sourceUrl: article.sourceUrl,
    imageUrl: article.imageUrl,
    publishedAt: new Date(article.publishedAt),
  };
}

module.exports = summarizeWithClaude;
