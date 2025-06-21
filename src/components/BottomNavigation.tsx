
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
    <div className={`bg-white border-t border-gray-200 px-4 py-2 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{tab.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
