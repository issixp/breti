import React, { useState } from 'react';
import { Truck, Calculator, MapPin, Clock, Package } from 'lucide-react';

interface DeliveryOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

const deliveryOptions: DeliveryOption[] = [
  {
    id: 'standard',
    name: 'Tavaline Tarne',
    price: 4.99,
    duration: '2-3 tööpäeva',
    description: 'Eesti Post pakiautomaat või kullerteenuse',
    icon: <Package className="h-5 w-5" />
  },
  {
    id: 'express',
    name: 'Kiire Tarne',
    price: 9.99,
    duration: '24-48 tundi',
    description: 'Kiire kullerteenuse või prioriteetne tarne',
    icon: <Truck className="h-5 w-5" />
  },
  {
    id: 'same-day',
    name: 'Sama Päeva Tarne',
    price: 15.99,
    duration: '4-8 tundi',
    description: 'Ainult Tallinna ja Tartu piirkonnas',
    icon: <Clock className="h-5 w-5" />
  }
];

const regions = [
  { name: 'Tallinn', multiplier: 1 },
  { name: 'Tartu', multiplier: 1 },
  { name: 'Pärnu', multiplier: 1.2 },
  { name: 'Narva', multiplier: 1.3 },
  { name: 'Viljandi', multiplier: 1.1 },
  { name: 'Rakvere', multiplier: 1.1 },
  { name: 'Kuressaare', multiplier: 1.5 },
  { name: 'Võru', multiplier: 1.2 },
  { name: 'Valga', multiplier: 1.2 },
  { name: 'Muu Eesti', multiplier: 1.3 }
];

export function DeliveryCalculator() {
  const [selectedRegion, setSelectedRegion] = useState('Tallinn');
  const [orderValue, setOrderValue] = useState(35);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');

  const regionMultiplier = regions.find(r => r.name === selectedRegion)?.multiplier || 1;
  const baseDeliveryPrice = deliveryOptions.find(d => d.id === selectedDelivery)?.price || 0;
  const deliveryPrice = baseDeliveryPrice * regionMultiplier;
  const isFreeDelivery = orderValue >= 50;
  const finalDeliveryPrice = isFreeDelivery ? 0 : deliveryPrice;
  const amountForFreeDelivery = Math.max(0, 50 - orderValue);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="h-8 w-8 text-stone-700 mr-3" />
            <h2 className="text-4xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
              Tarnekulu Kalkulaator
            </h2>
          </div>
          <p className="text-lg text-stone-600 font-light">
            Arvutage oma tellimuse tarnekulu ja valige sobiv tarneviis
          </p>
        </div>

        <div className="bg-stone-50 p-8 border border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Value */}
            <div>
              <label className="block text-sm font-light text-stone-700 mb-3 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
                Tellimuse Väärtus (€)
              </label>
              <input
                type="number"
                value={orderValue}
                onChange={(e) => setOrderValue(Number(e.target.value))}
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light bg-white"
              />
            </div>

            {/* Region Selection */}
            <div>
              <label className="block text-sm font-light text-stone-700 mb-3 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
                <MapPin className="h-4 w-4 inline mr-2" />
                Sihtkoht
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light bg-white"
              >
                {regions.map((region) => (
                  <option key={region.name} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="mt-8">
            <h3 className="text-lg font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Valige Tarneviis
            </h3>
            <div className="space-y-4">
              {deliveryOptions.map((option) => {
                const optionPrice = option.price * regionMultiplier;
                const finalPrice = isFreeDelivery ? 0 : optionPrice;
                
                return (
                  <label key={option.id} className="flex items-center p-4 border border-stone-200 hover:border-stone-300 transition-colors duration-500 cursor-pointer bg-white">
                    <input
                      type="radio"
                      name="delivery"
                      value={option.id}
                      checked={selectedDelivery === option.id}
                      onChange={(e) => setSelectedDelivery(e.target.value)}
                      className="mr-4"
                    />
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="text-stone-700">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-light text-stone-900">{option.name}</div>
                        <div className="text-sm text-stone-600 font-light">{option.description}</div>
                        <div className="text-sm text-stone-500 font-light">{option.duration}</div>
                      </div>
                      <div className="text-right">
                        {isFreeDelivery ? (
                          <span className="text-green-600 font-light">TASUTA</span>
                        ) : (
                          <span className="font-serif font-light text-stone-900 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>
                            €{optionPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 p-6 bg-white border border-stone-200">
            <h4 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Tellimuse Kokkuvõte
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-light text-stone-700">Tooted:</span>
                <span className="font-light text-stone-900">€{orderValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-light text-stone-700">Tarne ({selectedRegion}):</span>
                <span className="font-light text-stone-900">
                  {isFreeDelivery ? (
                    <span className="text-green-600">TASUTA</span>
                  ) : (
                    `€${finalDeliveryPrice.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="border-t border-stone-200 pt-2 mt-4">
                <div className="flex justify-between text-lg">
                  <span className="font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>Kokku:</span>
                  <span className="font-serif font-light text-stone-900 text-xl" style={{fontFamily: 'Playfair Display, serif'}}>
                    €{(orderValue + finalDeliveryPrice).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {!isFreeDelivery && amountForFreeDelivery > 0 && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200">
                <p className="text-green-800 font-light text-sm">
                  💡 Lisa veel €{amountForFreeDelivery.toFixed(2)} juurde ja saad tasuta tarne!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-stone-50 border border-stone-200">
            <Truck className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <h4 className="font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              Tasuta Tarne
            </h4>
            <p className="text-stone-600 font-light text-sm">
              Tellimustele üle €50 kogu Eestis
            </p>
          </div>
          
          <div className="text-center p-6 bg-stone-50 border border-stone-200">
            <Package className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <h4 className="font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              Turvaline Pakend
            </h4>
            <p className="text-stone-600 font-light text-sm">
              Spetsiaalne külmutatud toodete pakend
            </p>
          </div>
          
          <div className="text-center p-6 bg-stone-50 border border-stone-200">
            <Clock className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <h4 className="font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              Kiire Tarne
            </h4>
            <p className="text-stone-600 font-light text-sm">
              24-48h tarne üle kogu Eesti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}