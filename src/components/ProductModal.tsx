import React from 'react';
import { X, Plus, Minus, ShoppingCart, Star, Award, Truck } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedWeight, setSelectedWeight] = React.useState('250g');

  // Reset quantity when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setSelectedWeight('250g');
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    alert(`${quantity}x ${product.name} (${selectedWeight}) lisatud korvi!`);
    onClose();
  };

  const weights = ['250g', '500g', '1kg'];
  const getPriceForWeight = (weight: string) => {
    const multiplier = weight === '250g' ? 1 : weight === '500g' ? 1.8 : 3.5;
    return (product.price * multiplier).toFixed(2);
  };

  // Get related products (same category or complementary)
  const getRelatedProducts = (currentProduct: Product) => {
    return products
      .filter(p => p.id !== currentProduct.id)
      .filter(p => p.category === currentProduct.category || 
                   (currentProduct.category.includes('Sinihallitusjuust') && p.category.includes('Valgehallitusjuust')) ||
                   (currentProduct.category.includes('Valgehallitusjuust') && p.category.includes('Sinihallitusjuust')))
      .slice(0, 3);
  };

  // Get cheese pairing suggestions
  const getPairingSuggestions = (currentProduct: Product) => {
    const pairings: { [key: string]: string[] } = {
      'Sinihallitusjuust': ['Punane vein', 'Mesi', 'Pähklid', 'Pärnid', 'Port vein'],
      'Valgehallitusjuust': ['Valge vein', 'Šampanja', 'Viigimarmelad', 'Baguette', 'Õunad'],
      'Punane Brie': ['Pinot Noir', 'Cranberry kaste', 'Kreekerid', 'Viigid', 'Chardonnay'],
      'Toorjuust': ['Värske leib', 'Tomatid', 'Basilikum', 'Oliiviõli', 'Sauvignon Blanc'],
      'Pinnahallitusjuust': ['Riesling', 'Kuivatatud puuviljad', 'Tummine leib', 'Mesi', 'Gewürztraminer']
    };
    
    return pairings[currentProduct.category] || ['Kvaliteetne leib', 'Vein', 'Puuviljad', 'Pähklid'];
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="absolute inset-0 bg-stone-900 bg-opacity-60" onClick={onClose}></div>
        <div className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-stone-200">
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 p-4 bg-white/95 backdrop-blur-sm shadow-sm hover:bg-white transition-all duration-500 border border-stone-200"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative" style={{backgroundColor: '#faf9f7'}}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 lg:h-full object-contain p-12 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/5 to-transparent"></div>
              {product.featured && (
                <span className="absolute top-8 left-8 bg-stone-900 text-white px-6 py-3 text-xs font-light uppercase tracking-widest shadow-sm flex items-center space-x-2" style={{letterSpacing: '0.15em'}}>
                  <Star className="h-4 w-4 fill-current" />
                  <span>Soovitatud</span>
                </span>
              )}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 shadow-sm border border-stone-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="h-4 w-4 text-stone-700" />
                  <span className="font-light text-stone-800 uppercase tracking-wide text-xs" style={{letterSpacing: '0.1em'}}>Käsitöö Kvaliteet</span>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-12">
              <div className="mb-6">
                <h2 className="text-5xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>{product.name}</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">{product.description}</p>
                <div className="flex items-center space-x-6 text-sm text-stone-500">
                  <div className="flex items-center space-x-1">
                    <Truck className="h-4 w-4" />
                    <span className="font-light">Kiire tarne 24-48h</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span className="font-light">Eesti käsitöö</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-5 border border-stone-200" style={{backgroundColor: 'rgba(250, 249, 247, 0.5)'}}>
                  <span className="text-stone-500 text-xs block uppercase tracking-wide font-light mb-2" style={{letterSpacing: '0.1em'}}>Päritolu</span>
                  <span className="font-serif font-light text-stone-900 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>{product.origin}</span>
                </div>
                <div className="p-5 border border-stone-200" style={{backgroundColor: 'rgba(250, 249, 247, 0.5)'}}>
                  <span className="text-stone-500 text-xs block uppercase tracking-wide font-light mb-2" style={{letterSpacing: '0.1em'}}>Piima tüüp</span>
                  <span className="font-serif font-light text-stone-900 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>{product.milkType}</span>
                </div>
                <div className="p-5 border border-stone-200" style={{backgroundColor: 'rgba(250, 249, 247, 0.5)'}}>
                  <span className="text-stone-500 text-xs block uppercase tracking-wide font-light mb-2" style={{letterSpacing: '0.1em'}}>Tekstuur</span>
                  <span className="font-serif font-light text-stone-900 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>{product.texture}</span>
                </div>
                <div className="p-5 border border-stone-200" style={{backgroundColor: 'rgba(250, 249, 247, 0.5)'}}>
                  <span className="text-stone-500 text-xs block uppercase tracking-wide font-light mb-2" style={{letterSpacing: '0.1em'}}>Kategooria</span>
                  <span className="font-serif font-light text-stone-900 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>{product.category}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Vali kogus:</h3>
                <div className="flex space-x-4 mb-6">
                  {weights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-6 py-3 font-light transition-all duration-500 border text-sm uppercase tracking-wide ${
                        selectedWeight === weight
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                      }`} style={{letterSpacing: '0.1em'}}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-5xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>€{getPriceForWeight(selectedWeight)}</span>
                  <span className="text-stone-500 ml-3 font-light">/ {selectedWeight}</span>
                </div>
                <span className={`px-4 py-2 text-xs font-light uppercase tracking-wide border ${
                  product.inStock 
                    ? 'bg-green-50 text-green-800 border-green-200' 
                    : 'bg-red-50 text-red-800 border-red-200'
                }`} style={{letterSpacing: '0.1em'}}>
                  {product.inStock ? 'Laos' : 'Otsas'}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Kogus:</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 bg-stone-100 hover:bg-stone-200 transition-colors duration-500 border border-stone-200"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-3xl font-serif font-light text-stone-900 min-w-[4rem] text-center" style={{fontFamily: 'Playfair Display, serif'}}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 bg-stone-100 hover:bg-stone-200 transition-colors duration-500 border border-stone-200"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-8 mb-8 border border-stone-200" style={{backgroundColor: 'rgba(250, 249, 247, 0.7)'}}>
                <h4 className="font-serif font-light text-stone-900 mb-4 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>Tellimuse kokkuvõte:</h4>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-light text-stone-700">{quantity}x {product.name} ({selectedWeight})</span>
                  <span className="font-serif font-light text-stone-900 text-xl" style={{fontFamily: 'Playfair Display, serif'}}>€{(parseFloat(getPriceForWeight(selectedWeight)) * quantity).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-5 font-light transition-all duration-500 transform flex items-center justify-center space-x-3 shadow-sm text-sm uppercase tracking-wide border ${
                  product.inStock 
                    ? 'bg-stone-900 text-white border-stone-900 hover:bg-stone-800 hover:scale-105 cursor-pointer' 
                    : 'bg-stone-300 text-stone-500 border-stone-300 cursor-not-allowed'
                }`} style={{letterSpacing: '0.1em'}}
              >
                <ShoppingCart className="h-6 w-6" />
                <span>
                  {product.inStock 
                    ? `Lisa korvi - €${(parseFloat(getPriceForWeight(selectedWeight)) * quantity).toFixed(2)}`
                    : 'Toode pole saadaval'
                  }
                </span>
              </button>
              
              <p className="text-center text-sm text-stone-500 mt-6 font-light">
                Tasuta tarne tellimustele üle €50. Eksklusiivne tarne 24-48 tunni jooksul.
              </p>

              {/* Cheese Pairing Suggestions */}
              <div className="mt-8 p-6 border border-stone-200" style={{backgroundColor: 'rgba(250, 249, 247, 0.5)'}}>
                <h4 className="font-serif font-light text-stone-900 mb-4 text-lg flex items-center" style={{fontFamily: 'Playfair Display, serif'}}>
                  <Star className="h-5 w-5 text-stone-700 mr-2" />
                  Soovitatud Paaritamised:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {getPairingSuggestions(product).map((pairing, index) => (
                    <span key={index} className="bg-stone-100 px-3 py-2 text-xs text-stone-700 font-light border border-stone-200">
                      {pairing}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-stone-500 mt-3 font-light italic">
                  Meie juustumeistrite soovitused täiusliku maitseelamuse saamiseks
                </p>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {getRelatedProducts(product).length > 0 && (
            <div className="border-t border-stone-200 p-8" style={{backgroundColor: '#faf9f7'}}>
              <h3 className="text-2xl font-serif font-light text-stone-900 mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
                Kliendid Ostsid Ka
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getRelatedProducts(product).map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white border border-stone-200 hover:border-stone-300 transition-all duration-500 cursor-pointer group shadow-sm hover:shadow-md">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-32 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        style={{backgroundColor: '#faf9f7'}}
                      />
                      {relatedProduct.featured && (
                        <span className="absolute top-2 left-2 bg-stone-900 text-white px-2 py-1 text-xs font-light uppercase tracking-wide">
                          Soovitatud
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif font-light text-stone-900 mb-2 text-sm" style={{fontFamily: 'Playfair Display, serif'}}>
                        {relatedProduct.name}
                      </h4>
                      <p className="text-stone-600 text-xs mb-3 line-clamp-2 font-light">
                        {relatedProduct.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
                          €{relatedProduct.price}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(relatedProduct);
                            alert(`${relatedProduct.name} lisatud korvi!`);
                          }}
                          className="bg-stone-900 text-white p-2 hover:bg-stone-800 transition-all duration-500 text-xs"
                          disabled={!relatedProduct.inStock}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-stone-500 mt-6 font-light italic">
                Sarnased juustud, mida meie kliendid sageli koos ostavad
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}