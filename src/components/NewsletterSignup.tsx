import React, { useState } from 'react';
import { Mail, Gift, Bell, Check } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <Check className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-light text-green-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
          Täname liitumise eest!
        </h3>
        <p className="text-green-700 font-light">
          Saadame teile peagi 10% allahinduse koodi ja uusimad uudised meie juustude kohta.
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Mail className="h-8 w-8 text-stone-300 mr-3" />
          <h2 className="text-4xl font-serif font-light" style={{fontFamily: 'Playfair Display, serif'}}>
            Liituge Meie Uudiskirjaga
          </h2>
        </div>
        
        <p className="text-xl text-stone-300 font-light mb-8 max-w-2xl mx-auto">
          Saage esimesena teada uutest toodetetest, eksklusiivstest pakkumistest ja juustu valmistamise saladustest
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center space-x-3">
            <Gift className="h-6 w-6 text-stone-400" />
            <span className="font-light">10% allahindus esimesele tellimisele</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Bell className="h-6 w-6 text-stone-400" />
            <span className="font-light">Uued tooted ja pakkumised</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Mail className="h-6 w-6 text-stone-400" />
            <span className="font-light">Juustu retseptid ja nõuanded</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Teie e-posti aadress"
              required
              className="flex-1 px-6 py-4 text-stone-900 font-light focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-stone-700 hover:bg-stone-600 px-8 py-4 font-light transition-colors duration-500 disabled:opacity-50"
            >
              {isLoading ? 'Liitun...' : 'Liitu'}
            </button>
          </div>
        </form>

        <p className="text-xs text-stone-400 mt-4 font-light">
          Saadame uudiskirja maksimaalselt kord nädalas. Saate alati tellimuse tühistada.
        </p>
      </div>
    </section>
  );
}