import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Kuidas Õigesti Säilitada Hallitusjuuste',
    excerpt: 'Õppige meie ekspertidelt, kuidas hoida oma kallihinnalisi hallitusjuuste värskena ja maitsvana kauem.',
    author: 'Meie Juustumeister',
    date: '2024-12-15',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg',
    category: 'Nõuanded'
  },
  {
    id: '2',
    title: 'Sinise Juustu ja Veini Ideaalsed Paarid',
    excerpt: 'Avastage, millised veinid sobivad kõige paremini meie kuulsa sinise juustuga täiusliku maitseelamuse saamiseks.',
    author: 'Sommeljee Partner',
    date: '2024-12-10',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg',
    category: 'Paaritamine'
  },
  {
    id: '3',
    title: 'Luke Juustuvabriku 20 Aastat: Meie Teekond',
    excerpt: 'Tagasivaade meie teekonnale alates 2004. aastast, kui alustasime Eesti esimese hallitusjuustude tootmisega.',
    author: 'Luke Juustuvabrik',
    date: '2024-12-05',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg',
    category: 'Ettevõte'
  }
];

export function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-8 w-8 text-stone-700 mr-3" />
            <h2 className="text-4xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
              Juustu Blogi
            </h2>
          </div>
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
            Lugege meie ekspertide nõuandeid, retsepte ja huvitavaid lugusid juustude maailmast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white border border-stone-200 hover:border-stone-300 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group shadow-sm hover:shadow-md">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-stone-900 text-white px-3 py-1 text-xs font-light uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-light text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-500" style={{fontFamily: 'Playfair Display, serif'}}>
                  {post.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-stone-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span className="font-light">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-light">{new Date(post.date).toLocaleDateString('et-EE')}</span>
                    </div>
                  </div>
                  <span className="font-light">{post.readTime} lugemist</span>
                </div>
                
                <button className="flex items-center space-x-2 text-stone-700 hover:text-stone-900 transition-colors duration-500 font-light group">
                  <span>Loe edasi</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert('Blog tuleb peagi! Praegu saate lugeda meie sotsiaalmeedia kanaleid.')}
            className="bg-stone-900 text-white px-8 py-4 font-light hover:bg-stone-800 transition-all duration-500 text-sm uppercase tracking-wide border border-stone-900"
            style={{letterSpacing: '0.1em'}}
          >
            Vaata kõiki artikleid
          </button>
        </div>
      </div>
    </section>
  );
}