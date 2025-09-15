import React from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';

interface FeaturedSectionProps {
  onProductClick: (product: Product) => void;
}

export function FeaturedSection({ onProductClick }: FeaturedSectionProps) {
  const { products } = useProducts();
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="section-padding fade-in-section" style={{backgroundColor: '#f5f4f1'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center content-spacing">
          <h2 className="text-display font-serif font-light text-stone-900 content-spacing animate-fade-in-up" style={{fontFamily: 'Playfair Display, serif'}}>Meistrite Valik</h2>
          <p className="text-2xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed mb-4 animate-slide-in-left">Meie klientide lemmikud ja juustumeistrite soovitused</p>
          <p className="text-lg text-stone-500 font-light max-w-3xl mx-auto leading-relaxed animate-slide-in-right">Need erilised juustud esindavad meie kõrgeimat meisterlikkust ja on pälvinud tunnustuse nii kohalikelt gurmeedelt kui ka rahvusvahelistelt ekspertidelt</p>
        </div>
        
        <div className="masonry-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}