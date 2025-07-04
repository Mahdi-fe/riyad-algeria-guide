
import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SearchBar from './SearchBar';

interface HeaderProps {
  userType?: string;
}

const Header: React.FC<HeaderProps> = ({ userType }) => {
  const { t, isRTL } = useLanguage();

  const getUserTypeLabel = () => {
    switch (userType) {
      case 'lawyer':
        return 'محامي معتمد';
      case 'officer':
        return 'موظف إداري';
      default:
        return 'مواطن';
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-6 pb-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">مرحباً بك</h1>
            <p className="text-blue-100 text-sm">{getUserTypeLabel()}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell className="w-6 h-6 text-white" />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </div>
          <Settings className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <SearchBar />
      </div>

      {/* Notifications Panel */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
        <h3 className="text-white font-semibold mb-2 text-sm">تنبيهات مهمة</h3>
        <div className="space-y-2">
          <div className="bg-orange-500/20 border border-orange-300/30 rounded-xl p-3">
            <p className="text-orange-100 text-sm font-medium">تبقّى يومان لاستلام بطاقة تعريفك البيومترية</p>
            <p className="text-orange-200 text-xs mt-1">من بلدية الجزائر الوسطى</p>
          </div>
          <div className="bg-green-500/20 border border-green-300/30 rounded-xl p-3">
            <p className="text-green-100 text-sm font-medium">جواز السفر البيومتري جاهز للاستلام</p>
            <p className="text-green-200 text-xs mt-1">من مصلحة جوازات السفر - الولاية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
