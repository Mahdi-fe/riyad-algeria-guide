
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'ar' | 'fr';
  setLanguage: (lang: 'ar' | 'fr') => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    home: 'الرئيسية',
    myFiles: 'ملفاتي',
    profile: 'الملف الشخصي',
    settings: 'الإعدادات',
    userName: 'محمد فتاح',
    userType: 'نوع المستخدم',
    welcome: 'مرحباً',
    services: 'الخدمات',
    notifications: 'الإشعارات',
    logout: 'تسجيل الخروج'
  },
  fr: {
    home: 'Accueil',
    myFiles: 'Mes Dossiers',
    profile: 'Profil',
    settings: 'Paramètres',
    userName: 'Mohamed Fattah',
    userType: 'Type d\'utilisateur',
    welcome: 'Bienvenue',
    services: 'Services',
    notifications: 'Notifications',
    logout: 'Déconnexion'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'fr'>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
