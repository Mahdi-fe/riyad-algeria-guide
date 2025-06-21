
import React from 'react';
import { Search, Bell, Menu, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Enhanced gradient background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-20 right-16 w-24 h-24 bg-indigo-300/10 rounded-full blur-lg animate-pulse-soft"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-purple-300/8 rounded-full blur-md animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="relative z-10 p-6 pb-8">
        {/* Top bar with enhanced styling */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-2xl shadow-lg hover-lift">
              <Menu className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse-soft" />
              <h1 className="text-2xl font-bold text-white tracking-wide">AdminFiles</h1>
            </div>
          </div>
          
          <div className="relative">
            <div className="p-3 glass rounded-2xl shadow-lg hover-lift cursor-pointer group">
              <Bell className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced search bar */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
          <div className="relative glass-card rounded-3xl p-1 shadow-xl">
            <div className="flex items-center">
              <div className={`p-4 ${isRTL ? 'mr-2' : 'ml-2'}`}>
                <Search className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
              </div>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className={`flex-1 bg-transparent border-0 py-4 text-gray-700 placeholder-gray-500 focus:outline-none font-medium ${
                  isRTL ? 'pr-4 text-right' : 'pl-0 text-left'
                }`}
              />
              <div className={`p-2 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                  <Search className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
