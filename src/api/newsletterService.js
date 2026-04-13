import api from './axios';

// Subscribe
export const subscribe = async (email) => {
  const response = await api.post('/newsletter/subscribe', { email });
  return response.data;
};

// Unsubscribe
export const unsubscribe = async (email) => {
  const response = await api.post('/newsletter/unsubscribe', { email });
  return response.data;
};

// Get subscribers count
export const getSubscribersCount = async () => {
  const response = await api.get('/newsletter/count');
  return response.data;
};