import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Maria Kask',
    location: 'Tallinn',
    rating: 5,
    comment: 'Sinine juust on lihtsalt fenomenaalne! Maitse on rikkalik ja tekstuur täiuslik. Tellin regulaarselt juba 3 aastat.',
    product: 'Sinihallitusjuust',
    date: '2024-12-15',
    verified: true
  },
  {
    id: '2',
    name: 'Toomas Rebane',
    location: 'Tartu',
    rating: 5,
    comment: 'Parim juust, mida olen kunagi maitsnud! Kvaliteet on alati stabiilne ja tarne kiire. Soovitan kõigile!',
    product: 'Luke Mõisa Juust',
    date: '2024-12-10',
    verified: true
  },
  {
    id: '3',
    name: 'Liisa Tamm',
    location: 'Pärnu',
    rating: 5,
    comment: 'Tšillijuust on täiuslik tasakaal vürtsikuse ja kreemjasuse vahel. Kasutan kõikides oma retseptides.',
    product: 'Sinihallitusjuust Tšillipipraga',
    date: '2024-12-08',
    verified: true
  },
  {
    id: '4',
    name: 'Andres Saar',
    location: 'Viljandi',
    rating: 5,
    comment: 'Valge juust kreeka pähklitega on mu lemmik! Ideaalne kombinatsioon veini kõrvale.',
    product: 'Valgehallitusjuust Kreeka Pähklitega',
    date: '2024-12-05',
    verified: true
  },
  {
    id: '5',
    name: 'Kadri Mets',
    location: 'Rakvere',
    rating: 5,
    comment: 'Olen proovinud paljusid juuste, aga Breti kvaliteet on lihtsalt erakordne. Käsitöö on tunda!',
    product: 'Punane Brie Juust',
    date: '2024-12-01',
    verified: true
  },
  {
    id: '6',
    name: 'Peeter Kivi',
    location: 'Narva',
    rating: 5,
    comment: 'Tarne oli kiire ja pakend ideaalne. Juust jõudis täiesti värskena kohale. Aitäh!',
    product: 'Valgehallitusjuust',
    date: '2024-11-28',
    verified: true
  }
];

export function CustomerReviews() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Klientide Arvustused
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
              {averageRating.toFixed(1)}
            </span>
            <span className="text-stone-600 font-light">({totalReviews} arvustust)</span>
          </div>
          <p className="text-lg text-stone-600 font-light">
            Meie kliendid on meie parim reklaam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-stone-300'}`} 
                    />
                  ))}
                </div>
                {review.verified && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-light uppercase tracking-wide">
                    Kinnitatud ost
                  </span>
                )}
              </div>
              
              <div className="mb-4">
                <Quote className="h-6 w-6 text-stone-300 mb-2" />
                <p className="text-stone-700 font-light leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>
              
              <div className="border-t border-stone-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-light text-stone-900">{review.name}</div>
                    <div className="text-sm text-stone-500">{review.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-light text-stone-700">{review.product}</div>
                    <div className="text-xs text-stone-500">{new Date(review.date).toLocaleDateString('et-EE')}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert('Arvustuste süsteem tuleb peagi! Praegu saate tagasisidet anda e-posti teel: info@breti.ee')}
            className="bg-stone-900 text-white px-8 py-4 font-light hover:bg-stone-800 transition-all duration-500 text-sm uppercase tracking-wide border border-stone-900"
            style={{letterSpacing: '0.1em'}}
          >
            Jäta Arvustus
          </button>
        </div>
      </div>
    </section>
  );
}