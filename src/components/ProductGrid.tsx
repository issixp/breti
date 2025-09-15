import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCompare?: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick, onAddToCompare }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Teie kriteeriumitele vastavaid juuste ei leitud.</p>
      </div>
    );
  }

  return (
    <div className="masonry-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={onProductClick}
          onAddToCompare={onAddToCompare}
        />
      ))}
    </div>
  );
}