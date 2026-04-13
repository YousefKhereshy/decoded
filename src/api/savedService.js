import api from './axios';

// Get saved articles
export const getSavedArticles = async () => {
  const response = await api.get('/saved');
  return response.data;
};

// Save article
export const saveArticle = async (articleId) => {
  const response = await api.post('/saved', { articleId });
  return response.data;
};

// Unsave article
export const unsaveArticle = async (articleId) => {
  const response = await api.delete(`/saved/${articleId}`);
  return response.data;
};