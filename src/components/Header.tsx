
import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`bg-white shadow-sm border-b border-gray-200 p-4 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 text-gray-600" />
          <h1 className="text-xl font-bold text-blue-600">AdminFiles</h1>
        </div>
        <Bell className="w-6 h-6 text-gray-600" />
      </div>
      
      <div className="relative">
        <Search className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          className={`w-full bg-gray-50 border border-gray-200 rounded-xl py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'
          }`}
        />
      </div>
    </div>
  );
};

export default Header;
