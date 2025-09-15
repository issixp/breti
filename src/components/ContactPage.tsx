import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Award, Truck, Shield } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Täname teid pöördumise eest!\n\nSaadame teile vastuse 24 tunni jooksul.\n\nTellimuste kohta võtame ühendust telefoni teel.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#faf9f7'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Võtke Ühendust
          </h1>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed mb-6">
            Oleme siin, et aidata teil leida täiuslikud juustud või vastata kõikidele teie küsimustele
          </p>
          <p className="text-base text-stone-500 font-light max-w-4xl mx-auto leading-relaxed">
            Luke Juustuvabrik OÜ - Eesti ainuke hallitusjuustude tootja alates 2004. aastast
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-10 border border-stone-200 shadow-sm">
            <h2 className="text-3xl font-serif font-light text-stone-900 mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
              Saatke Meile Sõnum
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-stone-700 mb-2 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
                    Nimi *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light bg-stone-50/30"
                      placeholder="Teie nimi"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-stone-700 mb-2 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
                    E-post *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light bg-stone-50/30"
                      placeholder="teie@email.ee"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-stone-700 mb-2 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
                  Telefon
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light bg-stone-50/30"
                    placeholder="+372 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-light text-stone-700 mb-2 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
                  Teema *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light bg-stone-50/30"
                >
                  <option value="">Valige teema</option>
                  <option value="tellimus">Tellimuse esitamine</option>
                  <option value="tooted">Küsimused toodete kohta</option>
                  <option value="hulgimyyk">Hulgimüük</option>
                  <option value="koostoo">Koostöö pakkumine</option>
                  <option value="tagasiside">Tagasiside</option>
                  <option value="muu">Muu küsimus</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-stone-700 mb-2 uppercase tracking-wide" style={{letterSpacing: '0.1em'}}>
                  Sõnum *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-stone-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light bg-stone-50/30 resize-none"
                    placeholder="Kirjutage oma sõnum siia..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-4 font-light hover:bg-stone-800 transition-all duration-500 transform hover:scale-105 text-sm uppercase tracking-wide border border-stone-900 flex items-center justify-center space-x-3"
                style={{letterSpacing: '0.1em'}}
              >
                <Send className="h-5 w-5" />
                <span>Saada Sõnum</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-2xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Kontaktandmed
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-stone-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-stone-900 mb-1">Aadress</h4>
                    <p className="text-stone-600 font-light">
                      Aia 1, Luke<br />
                      Nõo vald, Tartumaa<br />
                      Eesti
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-stone-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-stone-900 mb-1">Telefon</h4>
                    <p className="text-stone-600 font-light">+372 566 88878</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-stone-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-stone-900 mb-1">E-post</h4>
                    <p className="text-stone-600 font-light">info@breti.ee</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-stone-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-stone-900 mb-1">Tööaeg</h4>
                    <div className="text-stone-600 font-light space-y-1">
                      <p>Esmaspäev - Reede: 9:00 - 18:00</p>
                      <p>Laupäev: 9:00 - 15:00</p>
                      <p>Pühapäev: Suletud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-2xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Ettevõtte Andmed
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500 font-light">Ettevõte:</span>
                  <span className="text-stone-900 font-light">Luke Juustuvabrik OÜ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-light">Reg. nr:</span>
                  <span className="text-stone-900 font-light">11043567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-light">KMKR nr:</span>
                  <span className="text-stone-900 font-light">EE100935541</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-light">Tootmislitsents:</span>
                  <span className="text-stone-900 font-light">EE/EÜ 159</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-light">Asutatud:</span>
                  <span className="text-stone-900 font-light">2004. aastal</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-2xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Meie Teenused
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-stone-700" />
                  <span className="text-stone-600 font-light">Käsitööna valmistatud juustud</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-stone-700" />
                  <span className="text-stone-600 font-light">Kiire tarne üle Eesti</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-stone-700" />
                  <span className="text-stone-600 font-light">Hulgimüük restoranidele</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-stone-700" />
                  <span className="text-stone-600 font-light">Personaalne nõustamine</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-100 p-8 border border-stone-200 shadow-sm text-center">
              <MapPin className="h-12 w-12 text-stone-400 mx-auto mb-4" />
              <h3 className="text-lg font-serif font-light text-stone-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                Külastage Meid
              </h3>
              <p className="text-stone-600 font-light mb-4">
                Asume Tartumaal Luke külas, kus saate tutvuda meie tootmisprotsessiga ja degusteerida värskeid juuste.
              </p>
              <p className="text-sm text-stone-500 font-light">
                Külastus ainult eelneval kokkuleppel
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Korduma Kippuvad Küsimused
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
              Leiate vastused kõige sagedamini esitatud küsimustele
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Millised on koostisosad?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Kõik Breti juustud on valmistatud täispiimast ja ainuke säilitusaine on sool. 
                Kasutame ainult looduslikke koostisosi ilma kunstlike lisanditeta.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Kust tuleb piim?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Ostame piima naabertalust Vello Breti Lahkaja talust. See tagab piima värskuse 
                ja kvaliteedi ning toetab kohalikku põllumajandust.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Kas olete ainuke hallitusjuustude tootja?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Jah, oleme Eesti ainuke hallitusjuustude tootja. Alustasime 2004. aastal 
                sinihallitusjuustu tootmist ja oleme seda traditsiooni hoidnud üle 20 aasta.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Kuidas juustu õigesti säilitada?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Juust säilib kauem fooliumisse mässituna. Säilitage külmkapis terve tükina 
                ja võtke tund aega enne serveerimist külmikust välja parema maitse saamiseks.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Kas pakute hulgimüüki?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Jah, pakume spetsiaalseid tingimusi restoranidele ja kauplustele. 
                Minimaalne tellimuse maht on 50kg. Võtke ühendust personaalse pakkumise saamiseks.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-serif font-light text-stone-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Mis saab juustuvadakust?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Kogu juustuvadaku joovad ära Breti sead, mis tagab täieliku ökoloogilise ringluse. 
                See on osa meie jätkusuutlikust tootmisfilosoofiast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}