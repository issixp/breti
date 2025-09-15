import React from 'react';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface PersonalizedRecommendationsProps {
  onProductClick: (product: Product) => void;
}

export const PersonalizedRecommendations: React.FC<PersonalizedRecommendationsProps> = ({ 
  onProductClick
}) => {
  const { products: productData } = useProducts();
  
  const getRecommendedProducts = () => {
    return productData
      .filter(product => product.rating >= 4.0)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
  };

  const recommendedProducts = getRecommendedProducts();

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Soovitused Teile
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meie eksperdid soovitavad neid kvaliteetseid juuste, mis võiksid teile meeldida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
              <ProductCard product={product} onProductClick={onProductClick} />
              <div className="mt-2 text-center">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Soovitatud
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};