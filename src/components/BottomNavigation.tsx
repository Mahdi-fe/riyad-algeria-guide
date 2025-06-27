
import React from 'react';
import { Home, FileText, User, Settings } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const { t, isRTL } = useLanguage();

  const tabs = [
    { id: 'home', title: t('home'), icon: Home },
    { id: 'files', title: t('myFiles'), icon: FileText },
    { id: 'profile', title: t('profile'), icon: User },
    { id: 'settings', title: t('settings'), icon: Settings },
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 safe-area-pb z-40 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Indicator bar */}
      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-2 opacity-30"></div>
      
      <div className="flex justify-around items-center px-4 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 relative group min-w-0 flex-1 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50/80 shadow-lg scale-105' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/80'
              }`}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg animate-pulse-soft"></div>
              )}
              
              {/* Icon with enhanced animation */}
              <div className={`mb-1 transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:scale-110'}`}>
                <Icon className="w-6 h-6" />
              </div>
              
              {/* Label with better typography */}
              <span className={`text-xs font-semibold tracking-wide truncate max-w-full ${isActive ? 'text-blue-700' : ''}`}>
                {tab.title}
              </span>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300 ${isActive ? 'from-blue-500/10 to-indigo-500/10' : ''}`}></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
