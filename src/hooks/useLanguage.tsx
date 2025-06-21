import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    searchPlaceholder: 'ابحث عن الملفات والمواعيد والخدمات...',
    governmentSectors: 'القطاعات الحكومية',
    localAdmin: 'الإدارة المحلية',
    justice: 'قطاع العدالة',
    education: 'التعليم',
    health: 'الصحة',
    postal: 'البريد',
    socialSecurity: 'الضمان الاجتماعي',
    employment: 'التشغيل',
    civilStatus: 'الحالة المدنية',
    quickActions: 'الإجراءات السريعة',
    legalConsultation: 'الاستشارة القانونية المدفوعة',
    emergency: 'حالات الطوارئ',
    downloadTemplates: 'تحميل النماذج',
    home: 'الرئيسية',
    myFiles: 'ملفاتي',
    profile: 'الملف الشخصي',
    settings: 'الإعدادات',
    language: 'اللغة',
    arabic: 'العربية',
    french: 'الفرنسية',
    english: 'الإنجليزية',
    lightMode: 'الوضع الفاتح',
    darkMode: 'الوضع الداكن',
    notifications: 'الإشعارات',
    emergencyNumbers: 'أرقام الطوارئ',
    police: 'الشرطة',
    gendarmerie: 'الدرك الوطني',
    ambulance: 'الإسعاف',
    civilProtection: 'الحماية المدنية'
  },
  fr: {
    searchPlaceholder: 'Rechercher des dossiers, délais et services...',
    governmentSectors: 'Secteurs Gouvernementaux',
    localAdmin: 'Administration Locale',
    justice: 'Justice',
    education: 'Éducation',
    health: 'Santé',
    postal: 'Poste',
    socialSecurity: 'Sécurité Sociale',
    employment: 'Emploi',
    civilStatus: 'État Civil',
    quickActions: 'Actions Rapides',
    legalConsultation: 'Consultation Juridique Payante',
    emergency: 'Urgence',
    downloadTemplates: 'Télécharger Modèles',
    home: 'Accueil',
    myFiles: 'Mes Dossiers',
    profile: 'Profil',
    settings: 'Paramètres',
    language: 'Langue',
    arabic: 'Arabe',
    french: 'Français',
    english: 'Anglais',
    lightMode: 'Mode Clair',
    darkMode: 'Mode Sombre',
    notifications: 'Notifications',
    emergencyNumbers: 'Numéros d\'Urgence',
    police: 'Police',
    gendarmerie: 'Gendarmerie',
    ambulance: 'Ambulance',
    civilProtection: 'Protection Civile'
  },
  en: {
    searchPlaceholder: 'Search for files, deadlines and services...',
    governmentSectors: 'Government Sectors',
    localAdmin: 'Local Administration',
    justice: 'Justice',
    education: 'Education',
    health: 'Health',
    postal: 'Postal Services',
    socialSecurity: 'Social Security',
    employment: 'Employment',
    civilStatus: 'Civil Status',
    quickActions: 'Quick Actions',
    legalConsultation: 'Paid Legal Consultation',
    emergency: 'Emergency',
    downloadTemplates: 'Download Templates',
    home: 'Home',
    myFiles: 'My Files',
    profile: 'Profile',
    settings: 'Settings',
    language: 'Language',
    arabic: 'Arabic',
    french: 'French',
    english: 'English',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    notifications: 'Notifications',
    emergencyNumbers: 'Emergency Numbers',
    police: 'Police',
    gendarmerie: 'Gendarmerie',
    ambulance: 'Ambulance',
    civilProtection: 'Civil Protection'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
