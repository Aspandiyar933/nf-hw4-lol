"use client"

import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createProduct } from '../services/productsService';
import { Product } from '@/types/types';

interface ProductFormProps {
  onSuccess?: (data: any) => void; // Optional callback for success
  onError?: (error: any) => void;   // Optional callback for error
}

const ProductForm: React.FC<ProductFormProps> = ({ onSuccess, onError }) => {
  const [product, setProduct] = useState<Product>({
    id: 0, // Placeholder, might be auto-generated on server-side
    title: '',
    price: 0,
    description: '',
    image: '', // Adjust if image field is not provided by the API
    category: '',
    rating: { rate: 0, count: 0 }, // Placeholder for rating structure
  });

  const createProductMutation = useMutation(createProduct, {
    onSuccess: (data) => {
      setProduct({ ...product, id: data.id }); // Update product with ID
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError, // Handle errors if provided
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createProductMutation.mutate(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for title, price, description, image (if applicable), category */}
      <button type="submit" disabled={createProductMutation.isLoading}>
        {createProductMutation.isLoading ? 'Creating...' : 'Create Product'}
      </button>
    </form>
  );
};

export default ProductForm;
