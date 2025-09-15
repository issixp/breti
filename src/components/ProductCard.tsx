import React, { useState } from 'react';
import { Plus, Eye, Scale } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { StockIndicator } from './StockIndicator';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onAddToCompare?: (product: Product) => void;
}

export function ProductCard({ product, onProductClick, onAddToCompare }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isQuickViewVisible, setIsQuickViewVisible] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onProductClick(product);
  };

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCompare) {
      const success = onAddToCompare(product);
      if (success) {
        alert(`${product.name} lisatud võrdlusesse!`);
      }
    }
  };

  return (
    <div
      className="card-enhanced cursor-pointer group hover-lift masonry-item animate-fade-in-up"
      onClick={() => onProductClick(product)}
      onMouseEnter={() => setIsQuickViewVisible(true)}
      onMouseLeave={() => setIsQuickViewVisible(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain p-6 group-hover:scale-110 smooth-transition"
          style={{backgroundColor: '#faf9f7'}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
        
        {/* Quick View Overlay */}
        <div className={`quick-view-overlay ${isQuickViewVisible ? 'show' : ''}`}>
          <div className="flex space-x-2">
            <button
              onClick={handleQuickView}
              className="btn-primary flex items-center space-x-2 animate-scale-in"
            >
              <Eye className="h-4 w-4" />
              <span>Kiire Vaade</span>
            </button>
            {onAddToCompare && (
              <button
                onClick={handleAddToCompare}
                className="btn-secondary flex items-center space-x-2 animate-scale-in"
              >
                <Scale className="h-4 w-4" />
                <span>Võrdle</span>
              </button>
            )}
          </div>
        </div>
        
        {product.featured && (
          <span className="absolute top-4 left-4 bg-stone-900 text-white px-4 py-2 text-xs font-light uppercase tracking-widest shadow-sm animate-slide-in-left" style={{letterSpacing: '0.15em'}}>
            Soovitatud
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-headline font-serif font-light text-stone-900 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>{product.name}</h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-2 font-light leading-relaxed">{product.description}</p>
        
        {/* Stock Indicator */}
        <StockIndicator stock={product.stock || 0} className="mb-4" />
        
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
          <span className="bg-stone-100 px-3 py-2 uppercase tracking-wide font-light" style={{letterSpacing: '0.1em'}}>{product.origin}</span>
          <span className="bg-stone-100 px-3 py-2 uppercase tracking-wide font-light" style={{letterSpacing: '0.1em'}}>{product.milkType} piim</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-3xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>€{product.price}</span>
          <button
            onClick={handleAddToCart}
            className="btn-primary p-3 hover-scale animate-pulse-hover"
            disabled={!product.inStock}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        
        {!product.inStock && (
          <span className="text-red-500 text-xs mt-3 block uppercase tracking-wide font-light animate-fade-in" style={{letterSpacing: '0.1em'}}>Otsas</span>
        )}
      </div>
    </div>
  );
}