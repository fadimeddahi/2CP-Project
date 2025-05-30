import axios from 'axios';

// Update this to point to your Vercel deployment
const API_URL = 'https://gym-js40.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response || {};
    
    // Handle token expiration
    if (status === 401) {
      localStorage.removeItem('token');
      // Redirect to login if token is invalid
      window.location.href = '/connexion';
    }
    
    return Promise.reject(error);
  }
);

export default api;