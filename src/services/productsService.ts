import { Product } from '@/types/types';
import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/products';

export const productsService = axios.create({
  baseURL: baseUrl,
});

export const axiosUploadInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
});

export const fetchProducts = async () => {
  const response = await productsService.get('/');
  return response.data;
};

export const createProduct = async (newProduct: Product) => {
  const response = await productsService.post('/', newProduct);
  return response.data;
};

// Define your Product interface (adjust based on your API response)

