import React from 'react';
import { Mail, Phone, MapPin, Award, Truck, Shield, Clock } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    alert('Kontakt:\n\nE-post: info@breti.ee\nTelefon: +372 566 88878\nAadress: Aia 1, Luke, Nõo vald, Tartumaa\n\nReg. nr: 11043567\nKMKR nr: EE100935541\nTootmislitsents: EE/EÜ 159');
  };

  const handleAboutClick = () => {
    scrollToSection('about-section');
  };

  const handleDeliveryClick = () => {
    alert('TARNEINFO & EDASIMÜÜJAD:\n\n• Meie tooteid võib leida:\n  - Stockmanni ja Kaubamaja toiduosakonnast\n  - Rimi Hüpermarketitest\n  - Selveritest ja Prismadest\n  - ETK Maksimarketitest\n  - Solarise Comarketist\n\n• Peame pidevalt läbirääkimisi erinevate edasimüüjatega\n• Ootame alati uusi pakkumisi koostööks');
  };

  const handleReturnsClick = () => {
    alert('TAGASTAMISE TINGIMUSED:\n\n• 14-päevane tagastamise õigus\n• Toode peab olema originaalpakendis\n• Külmutatud toodete puhul kehtivad erinõuded\n• Tagastamise kulu kannab klient\n• Raha tagastatakse 3-5 tööpäeva jooksul');
  };

  const handleFAQClick = () => {
    alert('KORDUMA KIPPUVAD KÜSIMUSED:\n\n• Millised on koostisosad? - Kõik Breti juustud on valmistatud täispiimast ja ainuke säilitusaine on sool\n• Kust tuleb piim? - Ostame piima naabertalust Vello Breti Lahkaja talust\n• Kas olete ainuke hallitusjuustude tootja? - Jah, oleme ainuke hallitusjuustude tootja Eestis\n• Millal alustasid tootmist? - 2004. aastal alustasime sinihallitusjuustu tootmist\n• Mis saab juustuvadakust? - Kogu juustuvadaku joovad ära Breti sead');
  };

  const handleWholesaleClick = () => {
    alert('HULGIMÜÜK:\n\n• Spetsiaalsed hinnad restoranidele ja kauplustele\n• Minimaalne tellimuse maht: 50kg\n• Regulaarsed tarned kokkuleppel\n• Personaalne müügiesindaja\n• Kontakt: hulgi@breti.ee | +372 123 4568');
  };

  const handleCheesecareClick = () => {
    alert('JUUSTU HOOLDUS:\n\n• Juust säilib kauem, kui ta on mässitud fooliumisse\n• Juustu tuleb külmkapis säilitada terve tükina, mitte lahtilõigatult\n• Juust on palju maitsvam ja aroomikam, kui võtad ta tund aega enne laualepanekut külmikust välja\n• Pehmed juustud muutuvad külmkapis kiiresti kibedaks\n• Kuivanud juust muutub pehmeks, kui lasta sel veidi piimas liguneda\n• Juustu on parem lõigata eelnevalt kuumutatud noaga');
  };

  return (
    <footer className="bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Heritage Section */}
        <div className="mb-12 p-8 bg-stone-800 border border-stone-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-light text-stone-100 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Luke Juustuvabrik OÜ - Eesti Juustutraditsiooni Hoidja
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-stone-300 mx-auto mb-2" />
                <div className="text-2xl font-serif font-light text-stone-200" style={{fontFamily: 'Playfair Display, serif'}}>2004</div>
                <div className="text-xs text-stone-400 uppercase tracking-wide">Asutamisaasta</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-stone-300 mx-auto mb-2" />
                <div className="text-2xl font-serif font-light text-stone-200" style={{fontFamily: 'Playfair Display, serif'}}>EE/EÜ</div>
                <div className="text-xs text-stone-400 uppercase tracking-wide">Litsentseeritud</div>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-stone-300 mx-auto mb-2" />
                <div className="text-2xl font-serif font-light text-stone-200" style={{fontFamily: 'Playfair Display, serif'}}>24h</div>
                <div className="text-xs text-stone-400 uppercase tracking-wide">Kiire Tarne</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-stone-300 mx-auto mb-2" />
                <div className="text-2xl font-serif font-light text-stone-200" style={{fontFamily: 'Playfair Display, serif'}}>21+</div>
                <div className="text-xs text-stone-400 uppercase tracking-wide">Aastat Kogemust</div>
              </div>
            </div>
            <p className="text-stone-300 font-light leading-relaxed max-w-4xl mx-auto text-sm">
              Luke Juustuvabrik OÜ on Eesti ainuke hallitusjuustude tootja, kes tegutseb aastast 2004. Asutatud täielikult Eesti kapitalil, 
              kasutame ainult naabertalust pärit täispiima ja käsitööna valmistame tujutõstvaid delikatessjuuste. 
              Meie tootmisprotsess järgib EE/EÜ standardeid (litsents 159) ja kõik juustud sisaldavad ainult piima ja soola.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-stone-900/50 border border-stone-700">
              <h4 className="font-serif font-light text-stone-200 mb-3 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>Meie Missioon</h4>
              <p className="text-stone-400 font-light text-sm leading-relaxed">
                Olla Eesti ainuke hallitusjuustude tootja, valmistades heatujulises kollektiivis stressivaba talukarja piimast 
                käsitööna tujutõstvaid delikatessjuuste, mis rõõmustavad iga gurmeed.
              </p>
            </div>
            <div className="p-6 bg-stone-900/50 border border-stone-700">
              <h4 className="font-serif font-light text-stone-200 mb-3 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>Meie Väärtused</h4>
              <p className="text-stone-400 font-light text-sm leading-relaxed">
                Kasutame ainult täispiima ja soola, toetame kohalikke tootjaid ning järgime ökoloogilist ringlust - 
                kogu juustuvadaku joovad ära Breti sead. Kvaliteet ja loodussõbralikkus on meie prioriteedid.
              </p>
            </div>
            <div className="p-6 bg-stone-900/50 border border-stone-700">
              <h4 className="font-serif font-light text-stone-200 mb-3 text-lg" style={{fontFamily: 'Playfair Display, serif'}}>Meie Tulevik</h4>
              <p className="text-stone-400 font-light text-sm leading-relaxed">
                Jätkame Eesti ainsa hallitusjuustude tootjana uute maitsete arendamist, säilitades käsitöö traditsioone 
                ja laiendades oma toodete kättesaadavust üle kogu Eesti.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://breti.ee/pildid/LogoBr.png" 
                alt="Breti Logo" 
                className="h-10 w-auto mr-4 filter brightness-0 invert"
              />
              <h3 className="text-3xl font-serif font-light text-stone-100" style={{fontFamily: 'Playfair Display, serif'}}>Breti.ee</h3>
            </div>
            <p className="text-stone-300 mb-6 leading-relaxed font-light max-w-lg">
              Luke Juustuvabrik OÜ on Eesti ainuke hallitusjuustude tootja, kes ühendab traditsioonilise käsitöö kohaliku toorainega. 
              Meie EE/EÜ litsentseeritud tootmisprotsess tagab iga juustu erakordse kvaliteedi ja autentse maitse.
            </p>
            <div className="text-sm text-stone-400 mb-6 font-light">
              <p>Reg. nr: 11043567</p>
              <p>KMKR nr: EE100935541</p>
              <p>Tootmislitsents: EE/EÜ 159</p>
              <p>Aadress: Aia 1, Luke, Nõo vald, Tartumaa</p>
              <p>Tel: +372 566 88878</p>
            </div>
            <div className="flex space-x-4">
              <button onClick={handleContactClick} className="text-stone-400 hover:text-stone-200 transition-colors duration-500">
                <Mail className="h-6 w-6" />
              </button>
              <button onClick={handleContactClick} className="text-stone-400 hover:text-stone-200 transition-colors duration-500">
                <Phone className="h-6 w-6" />
              </button>
              <button onClick={handleContactClick} className="text-stone-400 hover:text-stone-200 transition-colors duration-500">
                <MapPin className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-light mb-6 text-stone-100" style={{fontFamily: 'Playfair Display, serif'}}>Kiirlingid</h4>
            <ul className="space-y-2">
              <li><button onClick={handleAboutClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">Meist</button></li>
              <li><button onClick={handleAboutClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">Meie lugu</button></li>
              <li><button onClick={handleCheesecareClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">Juustu hooldus</button></li>
              <li><button onClick={handleWholesaleClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">Hulgimüük</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-light mb-6 text-stone-100" style={{fontFamily: 'Playfair Display, serif'}}>Klienditeenindus</h4>
            <ul className="space-y-2">
              <li><button onClick={handleDeliveryClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">Tarneinfo</button></li>
              <li><button onClick={handleReturnsClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">Tagastused</button></li>
              <li><button onClick={handleFAQClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">KKK</button></li>
              <li><button onClick={handleContactClick} className="text-stone-300 hover:text-stone-100 transition-colors duration-500 font-light text-left">Kontakt</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-stone-400 font-light mb-2">&copy; 2025 Luke Juustuvabrik OÜ. Kõik õigused kaitstud.</p>
          <p className="text-stone-500 font-light text-xs">
            Eesti traditsiooniline juustuvalmistamine | ISO 22000:2018 sertifitseeritud | 
            Veterinaar- ja Toiduamet litsentseeritud
          </p>
        </div>
      </div>
    </footer>
  );
}