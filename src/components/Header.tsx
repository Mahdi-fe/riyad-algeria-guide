
import React, { useState } from 'react';
import { Bell, Menu, Shield } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SideMenu from './SideMenu';

interface HeaderProps {
  userType?: string;
  darkMode?: boolean;
  onDarkModeToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ userType, darkMode, onDarkModeToggle }) => {
  const { isRTL } = useLanguage();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'تم قبول طلبك',
      message: 'طلب شهادة الميلاد جاهز للاستلام',
      time: 'منذ ساعتين',
      type: 'success'
    },
    {
      id: 2,
      title: 'موعد قادم',
      message: 'موعدك غداً في تمام الساعة 10:00',
      time: 'منذ 5 ساعات',
      type: 'reminder'
    },
    {
      id: 3,
      title: 'تحديث النظام',
      message: 'متوفر إصدار جديد من التطبيق',
      time: 'منذ يوم',
      type: 'info'
    }
  ];

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

  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          {/* Menu Button */}
          <button 
            onClick={() => setShowSideMenu(true)}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 ring-2 ring-white/20"
          >
            <Menu className="w-6 h-6 text-white drop-shadow-lg" />
          </button>

          {/* Logo and Title */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center ring-2 ring-white/30">
                <Shield className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white drop-shadow-lg">AdminFiles</h1>
                <p className="text-blue-200 text-xs drop-shadow-sm">الخدمات الحكومية الرقمية</p>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ring-2 ring-white/20"
            >
              <Bell className="w-6 h-6 text-white drop-shadow-lg" />
              {notifications.length > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center ring-2 ring-white/50">
                  <span className="text-white text-xs font-bold drop-shadow-sm">{notifications.length}</span>
                </div>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fade-in-scale">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-800">الإشعارات</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'reminder' ? 'bg-blue-500' : 'bg-gray-500'
                        }`}></div>
                        <div className="flex-1 text-right">
                          <h4 className="font-semibold text-gray-800 text-sm">{notification.title}</h4>
                          <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                          <span className="text-gray-400 text-xs">{notification.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 text-center">
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                    عرض جميع الإشعارات
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* User Type Badge */}
        <div className="mt-4 flex justify-center">
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-2 border border-white/20">
            <p className="text-white font-medium text-sm">{getUserTypeLabel()}</p>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <SideMenu
        isOpen={showSideMenu}
        onClose={() => setShowSideMenu(false)}
        userType={userType}
        darkMode={darkMode || false}
        onDarkModeToggle={onDarkModeToggle || (() => {})}
      />

      {/* Click outside to close notifications */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowNotifications(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
