
import React from 'react';
import { X, Globe, Moon, Sun, Bell } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, darkMode, onDarkModeToggle }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  if (!isOpen) return null;

  const languages = [
    { code: 'ar' as const, name: t('arabic'), flag: '🇩🇿' },
    { code: 'fr' as const, name: t('french'), flag: '🇫🇷' },
    { code: 'en' as const, name: t('english'), flag: '🇺🇸' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('settings')}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-8">
          {/* Language Selection */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-800">{t('language')}</span>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                    language === lang.code
                      ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg scale-105'
                      : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-semibold">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-xl">
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-600" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-600" />
                )}
              </div>
              <span className="font-semibold text-gray-800">
                {darkMode ? t('darkMode') : t('lightMode')}
              </span>
            </div>
            <button
              onClick={onDarkModeToggle}
              className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                darkMode ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 absolute top-1 ${
                  darkMode ? 'transform translate-x-7' : 'transform translate-x-1'
                }`}
              />
            </button>
          </div>
          
          {/* Notifications */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-xl">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-semibold text-gray-800">{t('notifications')}</span>
            </div>
            <button className="w-14 h-8 bg-green-500 rounded-full relative">
              <div className="w-6 h-6 bg-white rounded-full shadow-lg transform translate-x-7 absolute top-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
