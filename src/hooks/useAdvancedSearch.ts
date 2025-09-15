import { useState, useMemo } from 'react';
import { Product } from '../types';

interface SearchFilters {
  priceRange: [number, number];
  categories: string[];
  sortBy: 'popularity' | 'price-low' | 'price-high' | 'name';
  inStockOnly: boolean;
}

export function useAdvancedSearch(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Calculate price range from products
  const priceRange = useMemo((): [number, number] => {
    const prices = products.map(p => p.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, [products]);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, [products]);

  const [filters, setFilters] = useState<SearchFilters>({
    priceRange,
    categories: [],
    sortBy: 'popularity',
    inStockOnly: false
  });

  // Generate search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchTerm) return [];
    
    const suggestions = new Set<string>();
    
    products.forEach(product => {
      // Add product names that match
      if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        suggestions.add(product.name);
      }
      
      // Add categories that match
      if (product.category.toLowerCase().includes(searchTerm.toLowerCase())) {
        suggestions.add(product.category);
      }
    });
    
    return Array.from(suggestions).slice(0, 5);
  }, [searchTerm, products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Text search
      const matchesSearch = !searchTerm || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      
      // Price filter
      const matchesPrice = product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1];
      
      // Stock filter
      const matchesStock = !filters.inStockOnly || product.inStock;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    return filtered;
  }, [products, searchTerm, filters]);

  return {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    filteredProducts,
    searchSuggestions,
    showSuggestions,
    setShowSuggestions,
    priceRange,
    categories
  };
}