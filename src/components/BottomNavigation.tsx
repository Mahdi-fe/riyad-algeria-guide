
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
    <div className={`bg-white/95 backdrop-blur-md border-t border-gray-200/50 px-4 py-3 shadow-2xl ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50 transform scale-105 shadow-lg' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? 'animate-bounce' : ''}`} />
              <span className="text-xs font-semibold">{tab.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
