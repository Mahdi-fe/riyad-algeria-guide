
import React from 'react';
import { Bell, Menu, Shield, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SearchBar from './SearchBar';

const Header = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Professional government gradient background */}
      <div className="absolute inset-0 gradient-government">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 via-transparent to-blue-700/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-12 left-12 w-28 h-28 bg-white/4 rounded-full blur-xl animate-gentle-float"></div>
          <div className="absolute top-16 right-20 w-20 h-20 bg-blue-300/6 rounded-full blur-lg animate-professional-pulse"></div>
          <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-indigo-300/5 rounded-full blur-md animate-gentle-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <div className="relative z-10 p-6 pb-8">
        {/* Professional top bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 glass-elevated rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Menu className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <Shield className="w-5 h-5 text-white animate-professional-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-wide">AdminFiles</h1>
                <p className="text-blue-100 text-xs font-medium">المنصة الرسمية</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="p-3 glass-elevated rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <Bell className="w-5 h-5 text-white transition-transform group-hover:scale-110 duration-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center animate-professional-pulse shadow-lg">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced search bar */}
        <SearchBar />
        
        {/* Professional status bar */}
        <div className="mt-6 flex items-center justify-center gap-4 text-white/80 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-professional-pulse"></div>
            <span>متصل</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-300" />
            <span>خدمة معتمدة</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-blue-300" />
            <span>آمن 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
