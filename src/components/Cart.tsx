import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Gift } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = React.useState('');
  const [appliedPromo, setAppliedPromo] = React.useState<string | null>(null);
  const [promoDiscount, setPromoDiscount] = React.useState(0);

  const subtotal = getTotalPrice();
  const freeShippingThreshold = 50;
  const isEligibleForFreeShipping = subtotal >= freeShippingThreshold;
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = isEligibleForFreeShipping ? 0 : 4.99;
  const discountAmount = (subtotal * promoDiscount) / 100;
  const finalTotal = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = () => {
    const validPromoCodes = {
      'ESIMENE15': { discount: 15, minOrder: 30, description: 'Esmaostjate 15% allahindus' },
      'TALV2025': { discount: 10, minOrder: 25, description: 'Talvine 10% allahindus' },
      'TASUTA50': { discount: 0, minOrder: 50, description: 'Tasuta tarne' }
    };

    const promo = validPromoCodes[promoCode.toUpperCase() as keyof typeof validPromoCodes];
    
    if (promo && subtotal >= promo.minOrder) {
      setAppliedPromo(promoCode.toUpperCase());
      setPromoDiscount(promo.discount);
      alert(`Promokood rakendatud! ${promo.description}`);
    } else if (promo) {
      alert(`Promokood kehtib alates €${promo.minOrder} tellimuse väärtusest`);
    } else {
      alert('Vigane promokood');
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoDiscount(0);
    setPromoCode('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-stone-900 bg-opacity-60" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-8 border-b border-stone-200">
            <h2 className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>Ostukorv</h2>
            <button
              onClick={onClose}
              className="p-3 hover:bg-stone-100 transition-colors duration-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8">
            {items.length === 0 ? (
              <p className="text-stone-500 text-center mt-12 font-light">Teie ostukorv on tühi</p>
            ) : (
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-contain p-3 border border-stone-200"
                      style={{backgroundColor: '#faf9f7'}}
                    />
                    <div className="flex-1">
                      <h4 className="font-serif font-light text-stone-900 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>{item.product.name}</h4>
                      <p className="text-stone-700 font-light">€{item.product.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-stone-100 transition-colors duration-500 border border-stone-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center font-light text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-stone-100 transition-colors duration-500 border border-stone-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-red-500 hover:bg-red-50 transition-colors duration-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Free Shipping Progress */}
          {!isEligibleForFreeShipping && items.length > 0 && (
            <div className="border-t border-stone-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-light text-stone-700">Tasuta tarne €50+</span>
                <span className="text-sm font-light text-stone-900">€{amountForFreeShipping.toFixed(2)} puudu</span>
              </div>
              <div className="w-full bg-stone-200 h-2 mb-2">
                <div 
                  className="bg-green-500 h-2 transition-all duration-500"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-stone-500 font-light">
                Lisa veel €{amountForFreeShipping.toFixed(2)} ja saad tasuta tarne!
              </p>
            </div>
          )}

          {/* Promo Code Section */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 p-6">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Promokood
              </h3>
              
              {!appliedPromo ? (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Sisesta promokood"
                    className="flex-1 px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light text-sm"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-stone-900 text-white px-6 py-3 font-light hover:bg-stone-800 transition-colors duration-500 text-sm uppercase tracking-wide"
                    style={{letterSpacing: '0.1em'}}
                  >
                    Rakenda
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-green-50 p-4 border border-green-200">
                  <div className="flex items-center space-x-2">
                    <Gift className="h-4 w-4 text-green-600" />
                    <span className="text-green-800 font-light text-sm">
                      Promokood "{appliedPromo}" rakendatud (-{promoDiscount}%)
                    </span>
                  </div>
                  <button
                    onClick={removePromo}
                    className="text-green-600 hover:text-green-800 text-sm underline"
                  >
                    Eemalda
                  </button>
                </div>
              )}
              
              <div className="mt-4 text-xs text-stone-500 font-light">
                <p>Kehtivad promokoodid:</p>
                <p>• ESIMENE15 - 15% allahindus esmaostjatele (min €30)</p>
                <p>• TALV2025 - 10% talvine allahindus (min €25)</p>
              </div>
            </div>
          )}

          {/* Order Summary */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 p-8">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Tellimuse kokkuvõte
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-light text-stone-700">Tooted:</span>
                  <span className="font-light text-stone-900">€{subtotal.toFixed(2)}</span>
                </div>
                
                {appliedPromo && promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="font-light">Allahindus ({appliedPromo}):</span>
                    <span className="font-light">-€{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="font-light text-stone-700">Tarne:</span>
                  <span className="font-light text-stone-900">
                    {isEligibleForFreeShipping ? (
                      <span className="text-green-600">TASUTA</span>
                    ) : (
                      `€${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="border-t border-stone-200 pt-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>Kokku:</span>
                    <span className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>€{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    const orderSummary = `
TELLIMUS VORMISTATUD! 📦

Tellimuse kokkuvõte:
• Tooted: €${subtotal.toFixed(2)}
${appliedPromo && promoDiscount > 0 ? `• Allahindus (${appliedPromo}): -€${discountAmount.toFixed(2)}` : ''}
• Tarne: ${isEligibleForFreeShipping ? 'TASUTA' : `€${shippingCost.toFixed(2)}`}
• KOKKU: €${finalTotal.toFixed(2)}

Võtame teiega 24h jooksul ühendust!
Täname tellimuse eest! 🙏`;
                    alert(orderSummary);
                    clearCart();
                    onClose();
                  }}
                  className="w-full bg-stone-900 text-white py-4 font-light hover:bg-stone-800 transition-all duration-500 transform hover:scale-105 text-sm uppercase tracking-wide border border-stone-900"
                  style={{letterSpacing: '0.1em'}}
                >
                  Vormista tellimus - €{finalTotal.toFixed(2)}
                </button>
                <button
                  onClick={clearCart}
                  className="w-full border border-stone-300 text-stone-700 py-4 font-light hover:bg-stone-50 transition-colors duration-500 text-sm uppercase tracking-wide"
                  style={{letterSpacing: '0.1em'}}
                >
                  Tühjenda korv
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}