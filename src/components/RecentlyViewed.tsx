import React from 'react';
import { Clock, Eye } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface RecentlyViewedProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function RecentlyViewed({ products, onProductClick }: RecentlyViewedProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Clock className="h-6 w-6 text-stone-700 mr-3" />
          <h2 className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
            Hiljuti Vaadatud
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="relative">
              <ProductCard
                product={product}
                onProductClick={onProductClick}
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 shadow-sm border border-stone-200">
                <Eye className="h-4 w-4 text-stone-600" />
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-stone-500 mt-6 font-light italic">
          Viimati vaadatud tooted säilitatakse teie seadmes
        </p>
      </div>
    </section>
  );
}