import axios from 'axios';

// Create an axios instance with a base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

// Authentication API calls
export const loginUser = async (credentials) => {
  const response = await api.post('/api/auth/login', credentials);
  return response.data;
};

export const loginAdmin = async (credentials) => {
  const response = await api.post('/api/auth/admin/login', credentials);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await api.post('/api/auth/register', data);
  return response.data;
};

// Product API calls
export const getProducts = async () => {
  const response = await api.get('/api/products');
  return response.data;
};

export const getProduct = async (id) => {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await api.post('/api/products', productData);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/api/products/${id}`, productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/api/products/${id}`);
  return response.data;
};

// Feedback API calls
export const getFeedbacks = async () => {
  const response = await api.get('/api/feedback');
  return response.data;
};

export const submitFeedback = async (feedbackData) => {
  const response = await api.post('/api/feedback', feedbackData);
  return response.data;
};

// User API calls
export const fetchUsers = async () => {
  const response = await api.get('/api/users');
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/api/users/${id}`);
  return response.data;
};

// Export the configured axios instance and additional methods
export default api;