import { useState } from 'react';
import { Product } from '../types';

export function useProductComparison() {
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const addToCompare = (product: Product): boolean => {
    if (compareProducts.length >= 3) {
      alert('Võite võrrelda kuni 3 toodet korraga');
      return false;
    }
    
    if (compareProducts.find(p => p.id === product.id)) {
      alert('See toode on juba võrdluses');
      return false;
    }
    
    setCompareProducts(prev => [...prev, product]);
    return true;
  };

  const removeFromCompare = (productId: string) => {
    setCompareProducts(prev => prev.filter(p => p.id !== productId));
  };

  const openCompare = () => {
    if (compareProducts.length < 2) {
      alert('Võrdlemiseks valige vähemalt 2 toodet');
      return;
    }
    setIsCompareOpen(true);
  };

  const closeCompare = () => {
    setIsCompareOpen(false);
  };

  const clearCompare = () => {
    setCompareProducts([]);
    setIsCompareOpen(false);
  };

  return {
    compareProducts,
    isCompareOpen,
    addToCompare,
    removeFromCompare,
    openCompare,
    closeCompare,
    clearCompare
  };
}