import axios from 'axios';

export const fetchProducts = (params) => {
  return axios.get('/api/products', { params });
};

export const fetchProductById = (id) => {
  return axios.get(`/api/products/${id}`);
};
