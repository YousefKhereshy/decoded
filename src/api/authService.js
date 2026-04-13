import api from './axios';

// Signup user
export const signup = async (userData) => {
  const response = await api.post('/auth/signup', userData);
  return response.data;
};

// Login user
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);

  // Store tokens
  if (response.data.data.accessToken) {
    localStorage.setItem('accessToken', response.data.data.accessToken);
  }

  return response.data;
};

// Logout user
export const logout = async () => {
  const response = await api.post('/auth/logout');

  // Clear tokens
  localStorage.removeItem('accessToken');

  return response.data;
};

// Get user profile
export const getProfile = async () => {
  const response = await api.get('/auth/profile');
  return response.data;
};

// Refresh token
export const refreshToken = async () => {
  const response = await api.post('/auth/refresh');
  return response.data;
};