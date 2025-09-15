import React from 'react';
import { Award, Users, Heart, Leaf, Clock, MapPin, Phone, Mail, Shield, Truck } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#faf9f7'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Meie Lugu
          </h1>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed mb-6">
            Luke Juustuvabrik OÜ - Eesti ainuke hallitusjuustude tootja alates 2004. aastast
          </p>
          <p className="text-base text-stone-500 font-light max-w-4xl mx-auto leading-relaxed">
            Heatujulises kollektiivis stressivaba talukarja piimast käsitööna valmistatud tujutõstvad delikatessjuustud
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Heritage */}
        <div className="mb-16 p-8 bg-white border border-stone-200 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Luke Juustuvabrik OÜ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-stone-700 mx-auto mb-4" />
                <div className="text-3xl font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>2004</div>
                <div className="text-sm text-stone-600 uppercase tracking-wide">Asutamisaasta</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-stone-700 mx-auto mb-4" />
                <div className="text-3xl font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>21+</div>
                <div className="text-sm text-stone-600 uppercase tracking-wide">Aastat Kogemust</div>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-stone-700 mx-auto mb-4" />
                <div className="text-3xl font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>100%</div>
                <div className="text-sm text-stone-600 uppercase tracking-wide">Käsitöö</div>
              </div>
              <div className="text-center">
                <Leaf className="h-12 w-12 text-stone-700 mx-auto mb-4" />
                <div className="text-3xl font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>EE/EÜ</div>
                <div className="text-sm text-stone-600 uppercase tracking-wide">Litsentseeritud</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 border border-stone-200 shadow-sm">
            <h3 className="text-2xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Meie Ajalugu
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-stone-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-light">
                  2004
                </div>
                <div>
                  <h4 className="font-light text-stone-900 mb-1">Algus</h4>
                  <p className="text-stone-600 font-light text-sm">Alustasime sinihallitusjuustu tootmist Luke külas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-stone-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-light">
                  2007
                </div>
                <div>
                  <h4 className="font-light text-stone-900 mb-1">Laienemine</h4>
                  <p className="text-stone-600 font-light text-sm">Lisandus valgehallitusjuust detsembris</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-stone-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-light">
                  2010
                </div>
                <div>
                  <h4 className="font-light text-stone-900 mb-1">Uuendus</h4>
                  <p className="text-stone-600 font-light text-sm">Hakkas valmima punane brie juust</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-stone-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-light">
                  2011
                </div>
                <div>
                  <h4 className="font-light text-stone-900 mb-1">Meisterlikkus</h4>
                  <p className="text-stone-600 font-light text-sm">Alustasime pinnahallitusega pressjuustu tootmist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-stone-200 shadow-sm">
            <h3 className="text-2xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Meie Filosoofia
            </h3>
            <blockquote className="text-lg text-stone-600 font-light italic leading-relaxed mb-6 border-l-4 border-stone-300 pl-6">
              "Heatujulises kollektiivis stressivaba talukarja piimast käsitööna valmistatud tujutõstvad delikatessjuustud"
            </blockquote>
            <p className="text-stone-600 font-light leading-relaxed mb-4">
              Kõik Breti juustud on valmistatud täispiimast ja ainuke säilitusaine on sool. 
              Meie talumeierei ostab piima naabertalust Vello Breti Lahkaja talust.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              Oleme uhked, et saame pakkuda autentseid, käsitööna valmistatud juuste, 
              mis on tunnustatud nii kohalike kui ka rahvusvaheliste ekspertide poolt.
            </p>
          </div>
        </div>

        {/* Ecological Circle */}
        <div className="bg-white p-8 border border-stone-200 shadow-sm mb-16">
          <h3 className="text-2xl font-serif font-light text-stone-900 mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
            Ökoloogiline Ringlus
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-stone-600 font-light leading-relaxed text-center mb-8">
              Kogu juustuvadaku joovad ära Breti sead, mis tagab täieliku ökoloogilise ringluse 
              ja jätkusuutliku tootmise. See on osa meie keskkonnasõbralikust filosoofiast.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥛</span>
                </div>
                <h4 className="font-light text-stone-900 mb-2">Piim</h4>
                <p className="text-stone-600 font-light text-sm">Naabertalust Vello Breti Lahkaja talust</p>
              </div>
              <div className="text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧀</span>
                </div>
                <h4 className="font-light text-stone-900 mb-2">Juust</h4>
                <p className="text-stone-600 font-light text-sm">Käsitööna valmistatud delikatessjuustud</p>
              </div>
              <div className="text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐷</span>
                </div>
                <h4 className="font-light text-stone-900 mb-2">Ringlus</h4>
                <p className="text-stone-600 font-light text-sm">Vadak läheb Breti sigadele</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-stone-200 shadow-sm text-center">
            <Heart className="h-12 w-12 text-stone-700 mx-auto mb-4" />
            <h4 className="text-xl font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Kvaliteet
            </h4>
            <p className="text-stone-600 font-light leading-relaxed">
              Kasutame ainult parimaid koostisosi ja järgime traditsioonilisi valmistamismeetodeid, 
              et tagada iga juustu erakordne kvaliteet.
            </p>
          </div>
          
          <div className="bg-white p-8 border border-stone-200 shadow-sm text-center">
            <Leaf className="h-12 w-12 text-stone-700 mx-auto mb-4" />
            <h4 className="text-xl font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Jätkusuutlikkus
            </h4>
            <p className="text-stone-600 font-light leading-relaxed">
              Meie ökoloogiline ringlus ja kohalike tootjate toetamine tagab 
              keskkonnasõbraliku ja jätkusuutliku tootmise.
            </p>
          </div>
          
          <div className="bg-white p-8 border border-stone-200 shadow-sm text-center">
            <Users className="h-12 w-12 text-stone-700 mx-auto mb-4" />
            <h4 className="text-xl font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Kogukond
            </h4>
            <p className="text-stone-600 font-light leading-relaxed">
              Toetame kohalikku kogukonda ja oleme uhked oma panuse üle 
              Eesti toidukultuuri arengusse.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 border border-stone-200 shadow-sm">
          <h3 className="text-2xl font-serif font-light text-stone-900 mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
            Külastage Meid
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-stone-700 mx-auto mb-4" />
              <h4 className="font-light text-stone-900 mb-2">Aadress</h4>
              <p className="text-stone-600 font-light text-sm">
                Aia 1, Luke<br />
                Nõo vald, Tartumaa<br />
                Eesti
              </p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-stone-700 mx-auto mb-4" />
              <h4 className="font-light text-stone-900 mb-2">Telefon</h4>
              <p className="text-stone-600 font-light text-sm">+372 566 88878</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-stone-700 mx-auto mb-4" />
              <h4 className="font-light text-stone-900 mb-2">E-post</h4>
              <p className="text-stone-600 font-light text-sm">info@breti.ee</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-stone-500 font-light text-sm">
              Külastus ainult eelneval kokkuleppel. Võtke meiega ühendust, et kokku leppida sobiv aeg.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-stone-50 p-8 border border-stone-200">
          <h3 className="text-2xl font-serif font-light text-stone-900 mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
            Sertifikaadid ja Litsentsid
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-stone-700 mx-auto mb-3" />
              <div className="font-light text-stone-900 mb-1">EE/EÜ Litsents</div>
              <div className="text-xs text-stone-500">Nr. 159</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-stone-700 mx-auto mb-3" />
              <div className="font-light text-stone-900 mb-1">ISO 22000</div>
              <div className="text-xs text-stone-500">Sertifitseeritud</div>
            </div>
            <div className="text-center">
              <Truck className="h-8 w-8 text-stone-700 mx-auto mb-3" />
              <div className="font-light text-stone-900 mb-1">Veterinaar- ja Toiduamet</div>
              <div className="text-xs text-stone-500">Litsentseeritud</div>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-stone-700 mx-auto mb-3" />
              <div className="font-light text-stone-900 mb-1">HACCP</div>
              <div className="text-xs text-stone-500">Sertifitseeritud</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}