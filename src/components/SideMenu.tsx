
import React from 'react';
import { X, Globe, Moon, Sun, Phone, AlertCircle, LogOut, User, Bell, Settings } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userType?: string;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ 
  isOpen, 
  onClose, 
  userType, 
  darkMode, 
  onDarkModeToggle 
}) => {
  const { language, setLanguage, isRTL } = useLanguage();

  if (!isOpen) return null;

  const getUserTypeLabel = () => {
    switch (userType) {
      case 'lawyer':
        return 'محامي مرخص';
      case 'officer':
        return 'موظف إداري';
      case 'business':
        return 'صاحب مؤسسة';
      default:
        return 'مواطن';
    }
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'ar' ? 'fr' : 'ar');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminfiles_is_logged_in');
    localStorage.removeItem('adminfiles_user_type');
    window.location.reload();
  };

  const menuItems = [
    {
      icon: User,
      label: 'الملف الشخصي',
      action: () => console.log('Profile clicked')
    },
    {
      icon: Bell,
      label: 'الإشعارات',
      action: () => console.log('Notifications clicked')
    },
    {
      icon: Settings,
      label: 'الإعدادات',
      action: () => console.log('Settings clicked')
    },
    {
      icon: Globe,
      label: language === 'ar' ? 'Français' : 'العربية',
      action: handleLanguageToggle
    },
    {
      icon: darkMode ? Sun : Moon,
      label: darkMode ? 'الوضع العادي' : 'الوضع الليلي',
      action: onDarkModeToggle
    },
    {
      icon: Phone,
      label: 'اتصل بنا',
      action: () => console.log('Contact us clicked')
    },
    {
      icon: AlertCircle,
      label: 'الإبلاغ عن مشكلة',
      action: () => console.log('Report issue clicked')
    }
  ];

  return (
    <div className="fixed inset-0 z-50 animate-fade-in">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-80 bg-white shadow-2xl animate-slide-in-${isRTL ? 'right' : 'left'}`}>
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">القائمة الرئيسية</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">محمد فتاح</h3>
              <p className="text-blue-200 text-sm">{getUserTypeLabel()}</p>
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="p-6 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors text-right group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </div>
                <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50 transition-colors text-right text-red-600 border border-red-200"
          >
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <span className="font-medium">تسجيل الخروج</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
