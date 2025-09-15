import React, { useState } from 'react';
import { ProductGrid } from './ProductGrid';
import { AdvancedSearch } from './AdvancedSearch';
import { ProductModal } from './ProductModal';
import { useAdvancedSearch } from '../hooks/useAdvancedSearch';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import { useProductComparison } from '../hooks/useProductComparison';
import { useProducts } from '../context/ProductContext';
import { ProductComparison } from './ProductComparison';
import { Product } from '../types';
import { Package, Star, Filter } from 'lucide-react';

export function ProductsPage() {
  const { products: productData } = useProducts();
  const { 
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
  } = useAdvancedSearch(productData);

  const { addToRecentlyViewed } = useRecentlyViewed();
  const { 
    compareProducts, 
    isCompareOpen, 
    addToCompare, 
    removeFromCompare, 
    openCompare, 
    closeCompare 
  } = useProductComparison();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    addToRecentlyViewed(product);
    setSelectedProduct(product);
  };

  const handleAddToCompare = (product: Product) => {
    return addToCompare(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const featuredProducts = productData.filter(product => product.featured);
  const totalProducts = productData.length;
  const inStockProducts = productData.filter(product => product.inStock).length;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#faf9f7'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Meie Juustud
          </h1>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed mb-6">
            Avasta meie käsitööna valmistatud juustude mitmekesist valikut
          </p>
          <p className="text-base text-stone-500 font-light max-w-4xl mx-auto leading-relaxed">
            Kõik juustud on valmistatud täispiimast ja ainuke säilitusaine on sool
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Package className="h-8 w-8 text-stone-700 mx-auto mb-3" />
              <div className="text-3xl font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                {totalProducts}
              </div>
              <div className="text-sm text-stone-600 uppercase tracking-wide">Erinevat Juustu</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-stone-700 mx-auto mb-3" />
              <div className="text-3xl font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                {featuredProducts.length}
              </div>
              <div className="text-sm text-stone-600 uppercase tracking-wide">Soovitatud Toodet</div>
            </div>
            <div className="text-center">
              <Filter className="h-8 w-8 text-stone-700 mx-auto mb-3" />
              <div className="text-3xl font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                {categories.length}
              </div>
              <div className="text-sm text-stone-600 uppercase tracking-wide">Kategooriat</div>
            </div>
            <div className="text-center">
              <Package className="h-8 w-8 text-green-700 mx-auto mb-3" />
              <div className="text-3xl font-serif font-light text-green-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                {inStockProducts}
              </div>
              <div className="text-sm text-green-600 uppercase tracking-wide">Laos Saadaval</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Advanced Search */}
        <AdvancedSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filters={filters}
          onFiltersChange={setFilters}
          searchSuggestions={searchSuggestions}
          showSuggestions={showSuggestions}
          onSuggestionClick={setSearchTerm}
          onHideSuggestions={() => setShowSuggestions(false)}
          priceRange={priceRange}
          categories={categories}
        />

        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-stone-600 font-light">
              Leitud {filteredProducts.length} toodet {totalProducts}-st
              {searchTerm && (
                <span className="ml-2">
                  otsingule "<strong>{searchTerm}</strong>"
                </span>
              )}
            </p>
            
            {/* Compare Products Button */}
            {compareProducts.length > 0 && (
              <button
                onClick={openCompare}
                className="bg-stone-900 text-white px-6 py-3 font-light hover:bg-stone-800 transition-colors duration-500 text-sm uppercase tracking-wide"
                style={{letterSpacing: '0.1em'}}
              >
                Võrdle tooteid ({compareProducts.length})
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid 
          products={filteredProducts}
          onProductClick={handleProductClick}
          onAddToCompare={handleAddToCompare}
        />

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-stone-300 mx-auto mb-6" />
            <h3 className="text-2xl font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Tooteid ei leitud
            </h3>
            <p className="text-stone-600 font-light mb-6">
              Teie otsingukriteeriumitele vastavaid juuste ei leitud.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilters({
                  priceRange: priceRange,
                  categories: [],
                  sortBy: 'popularity',
                  inStockOnly: false
                });
              }}
              className="bg-stone-900 text-white px-6 py-3 font-light hover:bg-stone-800 transition-colors duration-500 text-sm uppercase tracking-wide"
              style={{letterSpacing: '0.1em'}}
            >
              Tühista filtrid
            </button>
          </div>
        )}
      </div>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Meistrite Soovitused
              </h2>
              <p className="text-lg text-stone-600 font-light">
                Meie kõige populaarsemad ja klientide poolt kõige rohkem hinnatud juustud
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="relative">
                  <div 
                    className="card-enhanced cursor-pointer group hover-lift"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-52 object-contain p-6 group-hover:scale-110 smooth-transition"
                        style={{backgroundColor: '#faf9f7'}}
                      />
                      <span className="absolute top-4 left-4 bg-stone-900 text-white px-4 py-2 text-xs font-light uppercase tracking-widest shadow-sm" style={{letterSpacing: '0.15em'}}>
                        Soovitatud
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-serif font-light text-stone-900 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                        {product.name}
                      </h3>
                      <p className="text-stone-600 text-sm mb-4 line-clamp-2 font-light leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
                          €{product.price}
                        </span>
                        <span className={`px-3 py-1 text-xs font-light uppercase tracking-wide ${
                          product.inStock 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.inStock ? 'Laos' : 'Otsas'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modals */}
      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeProductModal}
      />
      
      <ProductComparison
        products={compareProducts}
        isOpen={isCompareOpen}
        onClose={closeCompare}
        onRemoveProduct={removeFromCompare}
      />
    </div>
  );
}