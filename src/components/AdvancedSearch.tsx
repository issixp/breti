import React from 'react';
import { Search, Filter as FilterIcon, X } from 'lucide-react';

interface SearchFilters {
  priceRange: [number, number];
  categories: string[];
  sortBy: 'popularity' | 'price-low' | 'price-high' | 'name';
  inStockOnly: boolean;
}

interface AdvancedSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  searchSuggestions: string[];
  showSuggestions: boolean;
  onSuggestionClick: (suggestion: string) => void;
  onHideSuggestions: () => void;
  priceRange: [number, number];
  categories: string[];
}

export function AdvancedSearch({
  searchTerm,
  onSearchChange,
  filters,
  onFiltersChange,
  searchSuggestions,
  showSuggestions,
  onSuggestionClick,
  onHideSuggestions,
  priceRange,
  categories
}: AdvancedSearchProps) {
  return (
    <div className="bg-white border border-stone-200 p-8 mb-12 shadow-sm">
      <h3 className="text-lg font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
        Otsi ja filtreeri
      </h3>
      
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Otsi juuste..."
            className="w-full pl-12 pr-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {/* Search Suggestions */}
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-stone-200 shadow-lg z-10 mt-1">
            {searchSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  onSuggestionClick(suggestion);
                  onHideSuggestions();
                }}
                className="w-full text-left px-4 py-2 hover:bg-stone-50 transition-colors duration-300 font-light"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Categories */}
        <div>
          <label className="block text-sm font-light text-stone-700 mb-3 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
            Kategooriad
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...filters.categories, category]
                      : filters.categories.filter(c => c !== category);
                    onFiltersChange({ ...filters, categories: newCategories });
                  }}
                  className="text-stone-600"
                />
                <span className="text-sm font-light text-stone-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-light text-stone-700 mb-3 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
            Hind (€{filters.priceRange[0]} - €{filters.priceRange[1]})
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min={priceRange[0]}
              max={priceRange[1]}
              value={filters.priceRange[0]}
              onChange={(e) => onFiltersChange({
                ...filters,
                priceRange: [parseInt(e.target.value), filters.priceRange[1]]
              })}
              className="w-full"
            />
            <input
              type="range"
              min={priceRange[0]}
              max={priceRange[1]}
              value={filters.priceRange[1]}
              onChange={(e) => onFiltersChange({
                ...filters,
                priceRange: [filters.priceRange[0], parseInt(e.target.value)]
              })}
              className="w-full"
            />
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-light text-stone-700 mb-3 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
            Sorteeri
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFiltersChange({ ...filters, sortBy: e.target.value as SearchFilters['sortBy'] })}
            className="w-full px-3 py-2 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
          >
            <option value="popularity">Populaarsuse järgi</option>
            <option value="price-low">Hind: madal → kõrge</option>
            <option value="price-high">Hind: kõrge → madal</option>
            <option value="name">Nime järgi</option>
          </select>
        </div>

        {/* Stock Filter */}
        <div>
          <label className="block text-sm font-light text-stone-700 mb-3 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
            Saadavus
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.inStockOnly}
              onChange={(e) => onFiltersChange({ ...filters, inStockOnly: e.target.checked })}
              className="text-stone-600"
            />
            <span className="text-sm font-light text-stone-700">Ainult laos olevad</span>
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => onFiltersChange({
            priceRange,
            categories: [],
            sortBy: 'popularity',
            inStockOnly: false
          })}
          className="text-stone-600 hover:text-stone-900 font-light text-sm underline"
        >
          Tühista filtrid
        </button>
      </div>
    </div>
  );
}