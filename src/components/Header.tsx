
import React, { useState } from 'react';
import { Bell, Settings, LogOut, User, Scale, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SearchBar from './SearchBar';
import LogoutConfirmDialog from './LogoutConfirmDialog';

interface HeaderProps {
  userType?: string;
  onLogout: () => void;
  onServiceSelect: (serviceId: string, sectorId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ userType, onLogout, onServiceSelect }) => {
  const { t, isRTL } = useLanguage();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutDialog(false);
    onLogout();
  };

  const handleLogoutCancel = () => {
    setShowLogoutDialog(false);
  };

  const getHeaderTitle = () => {
    switch (userType) {
      case 'citizen':
        return 'مرحباً بك في منصة الخدمات الإدارية';
      case 'lawyer':
        return 'المنصة الخاصة بالمحامين';
      case 'officer':
        return 'لوحة تحكم الموظف';
      default:
        return 'منصة الخدمات الإدارية';
    }
  };

  const getUserIcon = () => {
    switch (userType) {
      case 'lawyer':
        return <Scale className="w-5 h-5 text-amber-600" />;
      case 'officer':
        return <User className="w-5 h-5 text-green-600" />;
      default:
        return <User className="w-5 h-5 text-blue-600" />;
    }
  };

  const getQuickActions = () => {
    if (userType === 'lawyer') {
      return [
        {
          id: 'lawyer_consultations',
          label: 'الاستشارات المرسلة',
          icon: <MessageSquare className="w-4 h-4" />,
          color: 'text-amber-600'
        }
      ];
    }
    return [];
  };

  return (
    <>
      <div className={`sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="px-4 py-3">
          {/* Top row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-xl shadow-lg">
                {getUserIcon()}
              </div>
              <div>
                <h1 className="text-base font-bold text-gray-800 leading-tight">
                  {getHeaderTitle()}
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  الجمهورية الجزائرية الديمقراطية الشعبية
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  3
                </div>
              </button>
              
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                <Settings className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleLogoutClick}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <SearchBar />

          {/* Quick actions for lawyers */}
          {getQuickActions().length > 0 && (
            <div className="mt-3 flex gap-2">
              {getQuickActions().map((action) => (
                <button
                  key={action.id}
                  className="flex items-center gap-2 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl text-sm font-medium transition-all duration-200"
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <LogoutConfirmDialog
        isOpen={showLogoutDialog}
        onConfirm={handleLogoutConfirm}
        onClose={handleLogoutCancel}
      />
    </>
  );
};

export default Header;
