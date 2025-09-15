import React from 'react';
import { X, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductComparisonProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
}

export function ProductComparison({ products, isOpen, onClose, onRemoveProduct }: ProductComparisonProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="absolute inset-0 bg-stone-900 bg-opacity-60" onClick={onClose}></div>
        <div className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <h2 className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
              Toodete Võrdlus
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 transition-colors duration-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-stone-50 border border-stone-200 relative">
                  <button
                    onClick={() => onRemoveProduct(product.id)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-4"
                    style={{backgroundColor: '#faf9f7'}}
                  />
                  
                  <div className="p-4">
                    <h3 className="font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                      {product.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Hind:</span>
                        <span className="font-light">€{product.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Kategooria:</span>
                        <span className="font-light">{product.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Päritolu:</span>
                        <span className="font-light">{product.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Tekstuur:</span>
                        <span className="font-light">{product.texture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Saadavus:</span>
                        <span className={`font-light ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                          {product.inStock ? 'Laos' : 'Otsas'}
                        </span>
                      </div>
                      {product.rating && (
                        <div className="flex justify-between">
                          <span className="text-stone-500">Hinnang:</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-light">{product.rating}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-stone-600 text-xs mt-3 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}