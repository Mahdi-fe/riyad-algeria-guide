
import React from 'react';
import { X, Globe, Moon, Sun, Bell, Palette } from 'lucide-react';
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
    { code: 'ar' as const, name: t('arabic'), flag: '🇩🇿', gradient: 'from-green-500 to-red-500' },
    { code: 'fr' as const, name: t('french'), flag: '🇫🇷', gradient: 'from-blue-500 to-red-500' },
    { code: 'en' as const, name: t('english'), flag: '🇺🇸', gradient: 'from-blue-500 to-red-600' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-sm animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-thin ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-8">
          {/* Header with enhanced styling */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('settings')}
              </h2>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
          
          <div className="space-y-8">
            {/* Language Selection with enhanced design */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-xl">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-800">{t('language')}</span>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 group hover-lift ${
                      language === lang.code
                        ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-lg scale-105'
                        : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    } ${isRTL ? 'flex-row-reverse' : ''} animate-slide-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">{lang.flag}</div>
                    <span className="font-semibold flex-1 text-left">{lang.name}</span>
                    {language === lang.code && (
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse-soft"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Dark Mode Toggle with enhanced design */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-inner animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-md">
                  {darkMode ? (
                    <Moon className="w-5 h-5 text-indigo-600" />
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
                className={`w-16 h-8 rounded-full transition-all duration-300 relative shadow-inner ${
                  darkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-7 h-7 bg-white rounded-full shadow-lg transition-all duration-300 absolute top-0.5 flex items-center justify-center ${
                    darkMode ? 'transform translate-x-8' : 'transform translate-x-0.5'
                  }`}
                >
                  {darkMode ? (
                    <Moon className="w-3 h-3 text-indigo-600" />
                  ) : (
                    <Sun className="w-3 h-3 text-yellow-600" />
                  )}
                </div>
              </button>
            </div>
            
            {/* Notifications with enhanced design */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-inner animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-md">
                  <Bell className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">{t('notifications')}</span>
              </div>
              <button className="w-16 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full relative shadow-lg">
                <div className="w-7 h-7 bg-white rounded-full shadow-md transform translate-x-8 absolute top-0.5 flex items-center justify-center">
                  <Bell className="w-3 h-3 text-green-600" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
