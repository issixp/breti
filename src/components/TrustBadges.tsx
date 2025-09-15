import React from 'react';
import { Shield, Award, Truck, Clock, Star, CheckCircle, Lock, CreditCard } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="py-12 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Miks Valida Breti?
          </h3>
          <p className="text-stone-600 font-light">Usaldus ja kvaliteet alates 2004. aastast</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="text-center p-4 hover:bg-stone-50 transition-colors duration-500">
            <Award className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <div className="text-sm font-light text-stone-900 mb-1">EE/EÜ Litsents</div>
            <div className="text-xs text-stone-500">Nr. 159</div>
          </div>
          
          <div className="text-center p-4 hover:bg-stone-50 transition-colors duration-500">
            <Shield className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <div className="text-sm font-light text-stone-900 mb-1">ISO 22000</div>
            <div className="text-xs text-stone-500">Sertifitseeritud</div>
          </div>
          
          <div className="text-center p-4 hover:bg-stone-50 transition-colors duration-500">
            <Truck className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <div className="text-sm font-light text-stone-900 mb-1">Tasuta Tarne</div>
            <div className="text-xs text-stone-500">Üle €50</div>
          </div>
          
          <div className="text-center p-4 hover:bg-stone-50 transition-colors duration-500">
            <Clock className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <div className="text-sm font-light text-stone-900 mb-1">24-48h Tarne</div>
            <div className="text-xs text-stone-500">Üle Eesti</div>
          </div>
          
          <div className="text-center p-4 hover:bg-stone-50 transition-colors duration-500">
            <Lock className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <div className="text-sm font-light text-stone-900 mb-1">Turvaline Makse</div>
            <div className="text-xs text-stone-500">SSL krüpteeritud</div>
          </div>
          
          <div className="text-center p-4 hover:bg-stone-50 transition-colors duration-500">
            <CheckCircle className="h-8 w-8 text-stone-700 mx-auto mb-3" />
            <div className="text-sm font-light text-stone-900 mb-1">21+ Aastat</div>
            <div className="text-xs text-stone-500">Kogemust</div>
          </div>
        </div>
      </div>
    </section>
  );
}