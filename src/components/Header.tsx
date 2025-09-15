import React from 'react';
import { ShoppingCart, Search, Menu, X, User, Phone, Mail, MapPin, Heart, Scale, Bell } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onAccountClick: () => void;
  onAdminClick: () => void;
  onAboutClick: () => void;
  onProductsClick: () => void;
  onRecipesClick: () => void;
  onContactClick: () => void;
  onHomeClick: () => void;
  currentPage: 'home' | 'about' | 'products' | 'recipes' | 'contact';
  isAdmin: boolean;
}

export function Header({ 
  onCartClick, 
  onAccountClick, 
  onAdminClick, 
  onAboutClick,
  onProductsClick,
  onRecipesClick,
  onContactClick, 
  onHomeClick, 
  currentPage, 
  isAdmin 
}: HeaderProps) {
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const itemCount = getTotalItems();

  const handleContactClick = () => {
    onContactClick();
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    onHomeClick();
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    onAboutClick();
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    onProductsClick();
    setIsMobileMenuOpen(false);
  };

  const handleRecipesClick = () => {
    onRecipesClick();
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    onHomeClick();
    // Scroll to top if already on home page
    if (currentPage === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const notifications = [
    { id: 1, text: 'Uus tellimus #BR-2024-003', time: '5 min tagasi', type: 'order' },
    { id: 2, text: 'Laoseis madal: Sinihallitusjuust', time: '1 tund tagasi', type: 'warning' },
    { id: 3, text: 'Uus klient registreerus', time: '2 tundi tagasi', type: 'user' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-stone-800 text-white py-1 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 hidden sm:block" />
                <span className="font-light">+372 566 88878</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span className="font-light">info@breti.ee</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span className="font-light">Aia 1, Luke, Nõo vald, Tartumaa</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="font-light text-xs hidden sm:block">Tasuta tarne üle €50</span>
              <div className="hidden md:flex items-center space-x-2">
                <span className="font-light text-xs">E-R: 9-18, L: 9-15</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-cream/98 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-stone-200 smooth-transition" style={{backgroundColor: 'rgba(252, 251, 247, 0.98)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <button 
                onClick={handleLogoClick} 
                className="flex items-center space-x-4 hover:opacity-80 smooth-transition hover-scale group"
              >
                <img 
                  src="https://breti.ee/pildid/LogoBr.png" 
                  alt="Breti Logo" 
                  className="h-8 md:h-12 w-auto filter drop-shadow-sm smooth-transition group-hover:scale-105"
                />
                <div className="hidden sm:block">
                  <h1 className="text-xl md:text-3xl font-serif font-light tracking-wide text-stone-800 mb-1 group-hover:text-stone-600 smooth-transition" style={{fontFamily: 'Playfair Display, serif'}}>
                    Breti.ee
                  </h1>
                  <p className="text-xs text-stone-500 font-light tracking-widest uppercase hidden md:block" style={{letterSpacing: '0.15em'}}>
                    Luke Juustuvabrik OÜ
                  </p>
                </div>
              </button>

              {/* Main Navigation */}
              <nav className="hidden lg:flex space-x-4">
                <button 
                  onClick={handleAboutClick} 
                  className={`smooth-transition font-light tracking-wide relative group text-xs md:text-sm uppercase hover-scale px-2 md:px-3 py-2 ${currentPage === 'about' ? 'text-stone-900 bg-stone-100' : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'}`} 
                  style={{letterSpacing: '0.1em'}}
                >
                  Meist
                  <span className={`absolute -bottom-1 left-0 h-px bg-stone-800 smooth-transition ${currentPage === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
                <button 
                  onClick={handleProductsClick} 
                  className={`smooth-transition font-light tracking-wide relative group text-xs md:text-sm uppercase hover-scale px-2 md:px-3 py-2 ${currentPage === 'products' ? 'text-stone-900 bg-stone-100' : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'}`} 
                  style={{letterSpacing: '0.1em'}}
                >
                  Tooted
                  <span className={`absolute -bottom-1 left-0 h-px bg-stone-800 smooth-transition ${currentPage === 'products' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
                <button 
                  onClick={handleRecipesClick} 
                  className={`smooth-transition font-light tracking-wide relative group text-xs md:text-sm uppercase hover-scale px-2 md:px-3 py-2 ${currentPage === 'recipes' ? 'text-stone-900 bg-stone-100' : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'}`} 
                  style={{letterSpacing: '0.1em'}}
                >
                  Retseptid
                  <span className={`absolute -bottom-1 left-0 h-px bg-stone-800 smooth-transition ${currentPage === 'recipes' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
                <button 
                  onClick={handleContactClick}
                  className={`smooth-transition font-light tracking-wide relative group text-xs md:text-sm uppercase hover-scale px-2 md:px-3 py-2 ${currentPage === 'contact' ? 'text-stone-900 bg-stone-100' : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'}`} 
                  style={{letterSpacing: '0.1em'}}
                >
                  Kontakt
                  <span className={`absolute -bottom-1 left-0 h-px bg-stone-800 smooth-transition ${currentPage === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
                {isAdmin && (
                  <>
                    {console.log('Rendering admin button, isAdmin:', isAdmin)}
                  <button 
                    onClick={onAdminClick} 
                    className="text-red-700 hover:text-red-900 smooth-transition font-light tracking-wide relative group text-xs md:text-sm uppercase hover-scale px-2 md:px-3 py-2 hover:bg-red-50" 
                    style={{letterSpacing: '0.1em'}}
                  >
                    Admin
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-800 smooth-transition group-hover:w-full"></span>
                  </button>
                  </>
                )}
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-1 md:space-x-2">

              {/* Action Buttons */}
              <div className="flex items-center space-x-1 md:space-x-1">
                {/* Wishlist Button */}
                <button className="hidden sm:block"
                  onClick={() => alert('Lemmikute funktsioon tuleb peagi!')}
                  className="relative p-2 md:p-3 text-stone-700 hover:text-red-600 smooth-transition hover:bg-stone-50 group hover-scale rounded-md"
                  title="Lemmikud"
                >
                  <Heart className="h-4 md:h-5 w-4 md:w-5 group-hover:scale-105 smooth-transition" />
                </button>

                {/* Compare Button */}
                <button className="hidden sm:block"
                  onClick={() => alert('Võrdluse funktsioon on saadaval toodete lehel!')}
                  className="relative p-2 md:p-3 text-stone-700 hover:text-blue-600 smooth-transition hover:bg-stone-50 group hover-scale rounded-md"
                  title="Võrdle tooteid"
                >
                  <Scale className="h-4 md:h-5 w-4 md:w-5 group-hover:scale-105 smooth-transition" />
                </button>

                {/* Notifications (Admin only) */}
                {isAdmin && (
                  <div className="relative">
                    <button
                      onClick={() => setShowNotifications(!showNotifications)}
                      className="relative p-2 md:p-3 text-stone-700 hover:text-orange-600 smooth-transition hover:bg-stone-50 group hover-scale rounded-md"
                      title="Teated"
                    >
                      <Bell className="h-4 md:h-5 w-4 md:w-5 group-hover:scale-105 smooth-transition" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3 md:h-4 w-3 md:w-4 flex items-center justify-center font-light">
                        3
                      </span>
                    </button>

                    {/* Notifications Dropdown */}
                    {showNotifications && (
                      <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white border border-stone-200 shadow-lg z-50 rounded-md">
                        <div className="p-4 border-b border-stone-200">
                          <h3 className="font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
                            Teated
                          </h3>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {notifications.map((notification) => (
                            <div key={notification.id} className="p-4 border-b border-stone-100 hover:bg-stone-50 smooth-transition">
                              <p className="text-sm font-light text-stone-900">{notification.text}</p>
                              <p className="text-xs text-stone-500 mt-1">{notification.time}</p>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 text-center">
                          <button 
                            onClick={() => setShowNotifications(false)}
                            className="text-sm text-stone-600 hover:text-stone-900 font-light"
                          >
                            Sulge
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Account Button */}
                <button
                  onClick={onAccountClick}
                  className="relative p-2 md:p-3 text-stone-700 hover:text-green-600 smooth-transition hover:bg-stone-50 group hover-scale rounded-md"
                  title="Minu konto"
                >
                  <User className="h-4 md:h-5 w-4 md:w-5 group-hover:scale-105 smooth-transition" />
                </button>
                
                {/* Cart Button */}
                <button
                  onClick={onCartClick}
                  className="relative p-2 md:p-3 text-stone-700 hover:text-stone-900 smooth-transition hover:bg-stone-50 group hover-scale rounded-md"
                  title="Ostukorv"
                >
                  <ShoppingCart className="h-4 md:h-5 w-4 md:w-5 group-hover:scale-105 smooth-transition" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-xs rounded-full h-4 md:h-5 w-4 md:w-5 flex items-center justify-center font-light shadow-sm animate-pulse-hover">
                      {itemCount}
                    </span>
                  )}
                </button>
                
                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 md:p-3 text-stone-700 hover:text-stone-900 smooth-transition hover-scale rounded-md hover:bg-stone-50"
                >
                  <Menu className="h-4 md:h-5 w-4 md:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-stone-900 bg-opacity-60" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-stone-200">
                <button onClick={handleLogoClick} className="flex items-center space-x-3">
                  <img 
                    src="https://breti.ee/pildid/LogoBr.png" 
                    alt="Breti Logo" 
                    className="h-8 w-auto filter drop-shadow-sm"
                  />
                  <h2 className="text-xl font-serif font-light text-stone-800" style={{fontFamily: 'Playfair Display, serif'}}>
                    Breti.ee
                  </h2>
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-stone-100 transition-colors duration-500 rounded-md"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>


              {/* Mobile Navigation */}
              <nav className="flex-1 p-6">
                <div className="space-y-4">
                  <button 
                    onClick={handleAboutClick}
                    className="flex items-center w-full text-left text-stone-700 hover:text-stone-900 transition-all duration-500 font-light text-base uppercase tracking-wide py-3 px-4 hover:bg-stone-50 rounded-md" 
                    style={{letterSpacing: '0.1em'}}
                  >
                    Meist
                  </button>
                  <button 
                    onClick={handleProductsClick}
                    className="flex items-center w-full text-left text-stone-700 hover:text-stone-900 transition-all duration-500 font-light text-base uppercase tracking-wide py-3 px-4 hover:bg-stone-50 rounded-md" 
                    style={{letterSpacing: '0.1em'}}
                  >
                    Tooted
                  </button>
                  <button 
                    onClick={handleRecipesClick}
                    className="flex items-center w-full text-left text-stone-700 hover:text-stone-900 transition-all duration-500 font-light text-base uppercase tracking-wide py-3 px-4 hover:bg-stone-50 rounded-md" 
                    style={{letterSpacing: '0.1em'}}
                  >
                    Retseptid
                  </button>
                  <button 
                    onClick={handleContactClick}
                    className="flex items-center w-full text-left text-stone-700 hover:text-stone-900 transition-all duration-500 font-light text-base uppercase tracking-wide py-3 px-4 hover:bg-stone-50 rounded-md" 
                    style={{letterSpacing: '0.1em'}}
                  >
                    Kontakt
                  </button>
                  {isAdmin && (
                    <button 
                      onClick={() => {
                        onAdminClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center w-full text-left text-red-700 hover:text-red-900 transition-all duration-500 font-light text-base uppercase tracking-wide py-3 px-4 hover:bg-red-50 rounded-md" 
                      style={{letterSpacing: '0.1em'}}
                    >
                      Admin
                    </button>
                  )}
                 {/* Debug: Always show admin button for testing */}
                 <button 
                   onClick={() => {
                     onAdminClick();
                     setIsMobileMenuOpen(false);
                   }}
                   className="flex items-center w-full text-left text-red-700 hover:text-red-900 transition-all duration-500 font-light text-base uppercase tracking-wide py-3 px-4 hover:bg-red-50 rounded-md" 
                   style={{letterSpacing: '0.1em'}}
                 >
                   🔐 Admin (Debug)
                 </button>
                </div>
                 {/* Debug: Always show admin button for testing */}
                 <button 
                   onClick={onAdminClick} 
                   className="text-red-700 hover:text-red-900 smooth-transition font-light tracking-wide relative group text-xs md:text-sm uppercase hover-scale px-2 md:px-3 py-2 hover:bg-red-50" 
                   style={{letterSpacing: '0.1em'}}
                 >
                   🔐 Admin (Debug)
                   <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-800 smooth-transition group-hover:w-full"></span>
                 </button>
              </nav>

              {/* Mobile Action Buttons */}
              <div className="p-6 border-t border-stone-200 space-y-3">
                <button
                  onClick={() => {
                    onAccountClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-3 bg-stone-100 text-stone-700 py-3 font-light hover:bg-stone-200 transition-all duration-500 text-sm uppercase tracking-wide rounded-md"
                  style={{letterSpacing: '0.1em'}}
                >
                  <User className="h-5 w-5" />
                  <span>Minu Konto</span>
                </button>
                <button
                  onClick={() => {
                    onCartClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-stone-900 text-white py-3 font-light hover:bg-stone-800 transition-all duration-500 text-sm uppercase tracking-wide border border-stone-900 flex items-center justify-center space-x-3 rounded-md"
                  style={{letterSpacing: '0.1em'}}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Ostukorv ({itemCount})</span>
                </button>
              </div>

              {/* Mobile Footer Info */}
              <div className="p-6 bg-stone-50 text-center border-t border-stone-200">
                <p className="text-xs text-stone-500 font-light mb-1">Luke Juustuvabrik OÜ</p>
                <p className="text-xs text-stone-400 font-light mb-2">Eesti käsitöö juustud alates 2004</p>
                <div className="flex items-center justify-center space-x-4 text-xs text-stone-500">
                  <div className="flex items-center space-x-1">
                    <Phone className="h-3 w-3" />
                    <span>+372 566 88878</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="h-3 w-3" />
                    <span>info@breti.ee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}