export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string; // Assuming image URL is provided by the API
    category: string;
    rating: { rate: number; count: number };
  }