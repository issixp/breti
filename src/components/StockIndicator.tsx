import React from 'react';
import { AlertTriangle, Package } from 'lucide-react';

interface StockIndicatorProps {
  stock: number;
  className?: string;
}

export function StockIndicator({ stock, className = '' }: StockIndicatorProps) {
  const getStockStatus = () => {
    if (stock === 0) return { text: 'Otsas', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
    if (stock <= 3) return { text: `Ainult ${stock} tükki laos!`, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
    if (stock <= 10) return { text: `${stock} tükki laos`, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
    return { text: 'Laos', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
  };

  const status = getStockStatus();

  return (
    <div className={`flex items-center space-x-2 px-3 py-2 ${status.bg} ${status.border} border ${className}`}>
      {stock === 0 ? (
        <AlertTriangle className="h-4 w-4 text-red-600" />
      ) : (
        <Package className="h-4 w-4 text-stone-600" />
      )}
      <span className={`text-sm font-light ${status.color}`}>
        {status.text}
      </span>
    </div>
  );
}