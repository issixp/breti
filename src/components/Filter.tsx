import React from 'react';

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Filter({ categories, selectedCategory, onCategoryChange }: FilterProps) {
  return (
    <div className="bg-white border border-stone-200 p-8 mb-12 shadow-sm">
      <h3 className="text-lg font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Filtreeri kategooria järgi</h3>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-6 py-3 text-xs font-light uppercase tracking-wide transition-colors duration-500 border ${
            selectedCategory === 'all'
              ? 'bg-stone-900 text-white border-stone-900'
              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
          }`} style={{letterSpacing: '0.1em'}}
        >
          Kõik Juustud
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 text-xs font-light uppercase tracking-wide transition-colors duration-500 border ${
              selectedCategory === category
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
            }`} style={{letterSpacing: '0.1em'}}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}