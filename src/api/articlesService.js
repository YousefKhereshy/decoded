import api from './axios';

// Get all articles
export const getArticles = async (page = 1, limit = 10) => {
  const response = await api.get('/articles', {
    params: { page, limit }
  });
  return response.data;
};

// Get single article
export const getArticle = async (id) => {
  const response = await api.get(`/articles/${id}`);
  return response.data;
};

// Search articles
export const searchArticles = async (keyword, category, page = 1) => {
  const response = await api.get('/articles/search', {
    params: { keyword, category, page }
  });
  return response.data;
};