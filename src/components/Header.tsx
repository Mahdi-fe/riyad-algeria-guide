
import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-xl border-b border-blue-500/20 p-6 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl">
            <Menu className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">AdminFiles</h1>
        </div>
        <div className="relative">
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">3</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <Search className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          className={`w-full bg-white/95 backdrop-blur-sm border-0 rounded-2xl py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:bg-white transition-all duration-300 shadow-lg ${
            isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'
          }`}
        />
      </div>
    </div>
  );
};

export default Header;
