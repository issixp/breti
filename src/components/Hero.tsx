import React, { useState } from 'react';
import { User, Heart, Package, Settings, LogOut, Eye, EyeOff } from 'lucide-react';

interface UserAccountProps {
  isOpen: boolean;
  onClose: () => void;
  onAdminLogin?: () => void;
  onAdminLogout?: () => void;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Töötlemisel' | 'Saadetud' | 'Kohale jõudnud';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const mockOrders: Order[] = [
  {
    id: 'BR-2024-001',
    date: '2024-12-15',
    total: 45.80,
    status: 'Kohale jõudnud',
    items: [
      { name: 'Sinihallitusjuust', quantity: 2, price: 14.50 },
      { name: 'Valgehallitusjuust Kreeka Pähklitega', quantity: 1, price: 14.90 }
    ]
  },
  {
    id: 'BR-2024-002',
    date: '2024-12-10',
    total: 32.40,
    status: 'Saadetud',
    items: [
      { name: 'Punane Brie Juust', quantity: 1, price: 16.20 },
      { name: 'Toorjuust Ürtidega', quantity: 1, price: 11.80 }
    ]
  }
];

export function UserAccount({ isOpen, onClose, onAdminLogin, onAdminLogout }: UserAccountProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'profile' | 'orders' | 'wishlist'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (formData.email === 'admin@breti.ee' && formData.password === 'breti2024') {
      setIsLoggedIn(true);
      setActiveTab('profile');
      if (onAdminLogin) {
        onAdminLogin();
      }
      alert('🔑 Admin edukalt sisse logitud!\n\nAdmin nupp on nüüd nähtav headeris (punane nupp).\nKliki "ADMIN" nuppu admin paneeli avamiseks.');
    } else {
      setIsLoggedIn(true);
      setActiveTab('profile');
      alert('✅ Edukalt sisse logitud!\n\nTere tulemast tagasi!');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsLoggedIn(true);
    setActiveTab('profile');
    alert('Konto edukalt loodud!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('login');
    const wasAdmin = formData.email === 'admin@breti.ee';
    setFormData({ email: '', password: '', name: '', phone: '' });
    if (wasAdmin) {
      onAdminLogout?.();
      alert('🔓 Admin välja logitud!\n\nAdmin nupp on nüüd peidetud.');
    } else {
      alert('👋 Edukalt välja logitud!\n\nHead aega!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-stone-900 bg-opacity-60" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-stone-200">
            <h2 className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
              {isLoggedIn ? 'Minu Konto' : 'Sisselogimine'}
            </h2>
            <button
              onClick={onClose}
              className="p-3 hover:bg-stone-100 transition-colors duration-500"
            >
              ✕
            </button>
          </div>

          {/* Navigation Tabs */}
          {isLoggedIn && (
            <div className="flex border-b border-stone-200">
              {[
                { id: 'profile', label: 'Profiil', icon: User },
                { id: 'orders', label: 'Tellimused', icon: Package },
                { id: 'wishlist', label: 'Lemmikud', icon: Heart }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-4 font-light transition-colors duration-500 ${
                    activeTab === id
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            {!isLoggedIn && activeTab === 'login' && (
              <div>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-light text-stone-700 mb-2">E-post</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
                      placeholder="admin@breti.ee"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-stone-700 mb-2">Parool</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        autoComplete="current-password"
                        className="w-full px-4 py-3 pr-12 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
                        placeholder="breti2024"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-stone-900 text-white py-4 font-light hover:bg-stone-800 transition-colors duration-500 uppercase tracking-wide text-sm"
                    style={{letterSpacing: '0.1em'}}
                  >
                    Logi sisse
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setActiveTab('register')}
                    className="text-stone-600 hover:text-stone-900 font-light underline"
                  >
                    Pole veel kontot? Registreeru siin
                  </button>
                </div>
              </div>
            )}

            {!isLoggedIn && activeTab === 'register' && (
              <div>
                <form onSubmit={handleRegister} className="space-y-6">
                  <div>
                    <label className="block text-sm font-light text-stone-700 mb-2">Nimi</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-stone-700 mb-2">E-post</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-stone-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-stone-700 mb-2">Parool</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        className="w-full px-4 py-3 pr-12 border border-stone-200 focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-colors duration-500 font-light"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-stone-900 text-white py-4 font-light hover:bg-stone-800 transition-colors duration-500"
                  >
                    Loo konto
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setActiveTab('login')}
                    className="text-stone-600 hover:text-stone-900 font-light underline"
                  >
                    Juba on konto? Logi sisse
                  </button>
                </div>
              </div>
            )}

            {isLoggedIn && activeTab === 'profile' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
                    Tere tulemast tagasi!
                  </h3>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors duration-500"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="font-light">Logi välja</span>
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-stone-50 p-6 border border-stone-200">
                    <h4 className="font-light text-stone-900 mb-4">Kontaktandmed</h4>
                    <div className="space-y-3">
                      <p><span className="text-stone-500">Nimi:</span> {formData.name || 'Maria Kask'}</p>
                      <p><span className="text-stone-500">E-post:</span> {formData.email || 'maria@example.com'}</p>
                      <p><span className="text-stone-500">Telefon:</span> {formData.phone || '+372 123 4567'}</p>
                    </div>
                  </div>
                  
                  <div className="bg-stone-50 p-6 border border-stone-200">
                    <h4 className="font-light text-stone-900 mb-4">Statistika</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
                          {mockOrders.length}
                        </div>
                        <div className="text-sm text-stone-500">Tellimust</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-serif font-light text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
                          €{mockOrders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                        </div>
                        <div className="text-sm text-stone-500">Kokku ostetud</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isLoggedIn && activeTab === 'orders' && (
              <div>
                <h3 className="text-xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                  Tellimuste ajalugu
                </h3>
                <div className="space-y-6">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="bg-stone-50 p-6 border border-stone-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-light text-stone-900">Tellimus #{order.id}</h4>
                          <p className="text-sm text-stone-500">{new Date(order.date).toLocaleDateString('et-EE')}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-light uppercase tracking-wide ${
                          order.status === 'Kohale jõudnud' ? 'bg-green-100 text-green-800' :
                          order.status === 'Saadetud' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="font-light">{item.quantity}x {item.name}</span>
                            <span className="font-light">€{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-stone-200 pt-2">
                        <div className="flex justify-between font-light">
                          <span>Kokku:</span>
                          <span className="font-serif" style={{fontFamily: 'Playfair Display, serif'}}>€{order.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isLoggedIn && activeTab === 'wishlist' && (
              <div>
                <h3 className="text-xl font-serif font-light text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                  Lemmikud
                </h3>
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 text-stone-300 mx-auto mb-4" />
                  <p className="text-stone-500 font-light">Teie lemmikute list on tühi</p>
                  <p className="text-stone-400 font-light text-sm mt-2">
                    Lisage tooteid lemmikutesse, klõpsates südame ikoonil
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}