import api from './axios';

export const authAPI = {
  // Change this line from '/users/register' to '/auth/register'
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, password) => api.patch(`/auth/reset-password/${token}`, { password }),
  updateProfile: (userData) => api.patch('/auth/update-profile', userData),
  logout: () => api.get('/auth/logout'),
};

export default authAPI;