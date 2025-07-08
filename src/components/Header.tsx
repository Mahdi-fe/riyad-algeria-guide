
import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
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

  const getUserTypeTitle = () => {
    switch (userType) {
      case 'lawyer':
        return 'المحامي';
      case 'officer':
        return 'الموظف الإداري';
      default:
        return 'المواطن';
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutDialog(false);
    onLogout();
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-3 py-2">
          {/* Top row - Logo and user info */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">AF</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-gray-900">AdminFiles</h1>
                <p className="text-xs text-blue-600 font-medium">{getUserTypeTitle()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button 
                onClick={handleLogoutClick}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                title="تسجيل الخروج"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <SearchBar />
        </div>
      </header>

      <LogoutConfirmDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default Header;
