"use client"

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/productsService';
import { Product } from '@/types/types';
import Post from './post-card';
import { NewProduct } from '@/services/createProduct';
import AddProduct from './AddProduct';
import ProductCard from './product-card';
import { LoadingPage } from './loading-page';
import { Navbar } from './navbar';


const ProductList: React.FC = () => {
  const { isLoading, error, data: products } = useQuery('/products', fetchProducts);
  const [modalOpen, setModalOpen] = useState<boolean | null>(false);
  const [newProducts, setNewProducts] = useState<NewProduct[]>([]);

  const handleAddButton = () => {
    setModalOpen(true);
    console.log(modalOpen)
    }

  if (isLoading) return <LoadingPage />;

  if (error) return <div>Error</div>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div></div>
        <div>
            <Navbar handleAddButton={handleAddButton} />

                {modalOpen ?
                    <AddProduct setModalOpen={setModalOpen} newProducts={newProducts} setNewProducts={setNewProducts} /> : null
                }
                {newProducts.map((products) => (
                    <ProductCard 
                        key={products.id}
                        price={products.price}
                        title={products.title}
                        image={products.image}
                    />
                ))}
                {products.map((product: Product) => (
                    <Post key={product.id} title={product.title} id={product.id} category={product.category} ratingCount={product.rating.count} ratingRate={product.rating.rate} image={product.image} price={product.price} />
                ))}
        </div>
    </div>
  );
};

export default ProductList;
