import React, { useState, useEffect } from 'react';
import { Gift, Percent, Star, Clock, X } from 'lucide-react';

interface Promotion {
  id: string;
  type: 'discount' | 'free-shipping' | 'loyalty' | 'seasonal';
  title: string;
  description: string;
  code?: string;
  discount?: number;
  minOrder?: number;
  validUntil: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const promotions: Promotion[] = [
  {
    id: 'first-time',
    type: 'discount',
    title: 'Esmaostjate Allahindus',
    description: 'Saage 15% allahindust oma esimesele tellimisele',
    code: 'ESIMENE15',
    discount: 15,
    minOrder: 30,
    validUntil: '2025-03-31',
    icon: <Gift className="h-5 w-5" />,
    bgColor: 'bg-green-50',
    textColor: 'text-green-800'
  },
  {
    id: 'winter-special',
    type: 'seasonal',
    title: 'Talvine Eripakkumine',
    description: 'Tasuta tarne kõikidele tellimustele üle €35',
    minOrder: 35,
    validUntil: '2025-02-28',
    icon: <Star className="h-5 w-5" />,
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800'
  }
];

export function PromotionalBanner() {
  const [currentPromotion, setCurrentPromotion] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateTimeLeft = () => {
      const promotion = promotions[currentPromotion];
      const endDate = new Date(promotion.validUntil);
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days}p ${hours}h`);
      } else {
        setTimeLeft('Lõppenud');
      }
    };

    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [currentPromotion]);

  if (!isVisible) return null;

  const promotion = promotions[currentPromotion];

  return (
    <div className={`${promotion.bgColor} border-b border-stone-200 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4 flex-1">
            <div className={`${promotion.textColor} flex-shrink-0`}>
              {promotion.icon}
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <h3 className={`font-serif font-light ${promotion.textColor} text-sm md:text-base`} style={{fontFamily: 'Playfair Display, serif'}}>
                  {promotion.title}
                </h3>
                <span className={`text-xs md:text-sm font-light ${promotion.textColor} opacity-80`}>
                  {promotion.description}
                </span>
                
                {promotion.code && (
                  <div className="flex items-center space-x-1 md:space-x-2 mt-1 md:mt-0">
                    <span className={`text-xs font-light ${promotion.textColor} opacity-80 hidden md:inline`}>Kood:</span>
                    <code className={`bg-white ${promotion.textColor} px-2 py-1 text-xs font-mono border border-current border-opacity-20`}>
                      {promotion.code}
                    </code>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(promotion.code || '');
                        alert('Promokood kopeeritud!');
                      }}
                      className={`text-xs ${promotion.textColor} opacity-80 hover:opacity-100 underline hidden md:inline`}
                    >
                      Kopeeri
                    </button>
                  </div>
                )}
              </div>
              
              {promotion.minOrder && (
                <p className={`text-xs ${promotion.textColor} opacity-70 mt-1 hidden md:block`}>
                  Minimaalne tellimus: €{promotion.minOrder}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-1 md:space-x-2 ${promotion.textColor} opacity-80`}>
              <Clock className="h-4 w-4" />
              <span className="text-xs md:text-sm font-light">{timeLeft}</span>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className={`${promotion.textColor} opacity-60 hover:opacity-100 transition-opacity duration-300`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPromotion(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPromotion 
                  ? `${promotion.textColor.replace('text-', 'bg-')} opacity-100` 
                  : `${promotion.textColor.replace('text-', 'bg-')} opacity-30`
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}