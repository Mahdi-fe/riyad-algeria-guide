
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-xl p-6 w-full max-w-sm ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('settings')}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Language Selection */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-800">{t('language')}</span>
            </div>
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                    language === lang.code
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:bg-gray-50'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Dark Mode Toggle */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-600" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600" />
                )}
                <span className="font-medium text-gray-800">
                  {darkMode ? t('darkMode') : t('lightMode')}
                </span>
              </div>
              <button
                onClick={onDarkModeToggle}
                className={`w-12 h-6 rounded-full transition-colors ${
                  darkMode ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                    darkMode ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
          
          {/* Notifications */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">{t('notifications')}</span>
              </div>
              <button className="w-12 h-6 bg-blue-500 rounded-full">
                <div className="w-5 h-5 bg-white rounded-full shadow-sm transform translate-x-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
