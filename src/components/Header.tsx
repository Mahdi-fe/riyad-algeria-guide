import React, { useState } from 'react';
import { Search, Bell, Menu, X, Settings, LogOut, Globe, Info, HelpCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import LogoutConfirmDialog from './LogoutConfirmDialog';
import { useToast } from '../hooks/use-toast';
import { sectorData } from '../data/sectorData';

interface HeaderProps {
  userType?: string;
  onSearch?: (query: string) => void;
  onLogout?: () => void;
  onServiceSelect?: (serviceId: string, sectorId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ userType, onSearch, onLogout, onServiceSelect }) => {
  const { isRTL } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'تذكير: استلام جواز السفر',
      message: 'تبقّى يومان لاستلام جواز السفر من مصلحة الجوازات',
      time: 'منذ ساعة',
      type: 'reminder'
    },
    {
      id: 2,
      title: 'تحديث حالة الملف',
      message: 'تم الانتهاء من معالجة طلب شهادة الميلاد',
      time: 'منذ 3 ساعات',
      type: 'update'
    },
    {
      id: 3,
      title: 'موعد قريب',
      message: 'موعد استلام بطاقة التعريف البيومترية غداً',
      time: 'منذ يوم',
      type: 'appointment'
    }
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results: any[] = [];
    const searchTerm = query.toLowerCase();

    // البحث في جميع القطاعات والخدمات
    Object.entries(sectorData).forEach(([sectorId, sector]) => {
      sector.services.forEach(service => {
        if (
          service.name.toLowerCase().includes(searchTerm) ||
          service.description.toLowerCase().includes(searchTerm) ||
          searchTerm.includes('جواز') && service.id === 'biometric_passport' ||
          searchTerm.includes('بطاقة') && service.id === 'biometric_id' ||
          searchTerm.includes('شهادة') && (service.id === 'birth_certificate' || service.id === 'residence_certificate') ||
          searchTerm.includes('منحة') && service.id === 'social_housing'
        ) {
          results.push({
            id: service.id,
            name: service.name,
            description: service.description,
            sector: sector.title,
            sectorId: sectorId,
            location: service.location,
            deadline: service.deadline
          });
        }
      });
    });

    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    performSearch(value);
  };

  const handleSearchResultClick = (result: any) => {
    setShowSearchResults(false);
    setSearchQuery('');
    if (onServiceSelect) {
      onServiceSelect(result.id, result.sectorId);
    }
  };

  const handleNotificationClick = (notification: any) => {
    console.log('تم النقر على الإشعار:', notification);
    alert(`${notification.title}\n${notification.message}`);
    setShowNotifications(false);
  };

  const handleMenuAction = (action: string) => {
    console.log('إجراء القائمة:', action);
    setShowMenu(false);
    
    switch (action) {
      case 'settings':
        alert('الإعدادات\n• تغيير كلمة المرور\n• إعدادات الإشعارات\n• تحديث البيانات الشخصية');
        break;
      case 'language':
        alert('تغيير اللغة\nاللغة الحالية: العربية\nاللغات المتاحة:\n• العربية\n• الفرنسية\n• الإنجليزية');
        break;
      case 'about':
        alert('حول التطبيق\nAdminFiles - تطبيق الخدمات الإدارية الرقمية\nالإصدار 2.0\nمطور من طرف الحكومة الجزائرية\nجميع الحقوق محفوظة 2024');
        break;
      case 'help':
        alert('المساعدة والدعم\n• دليل الاستخدام متاح في التطبيق\n• خدمة العملاء: 3033\n• البريد الإلكتروني: support@adminfiles.dz\n• أوقات العمل: الأحد-الخميس 8:00-16:00');
        break;
      case 'account':
        alert('إدارة الحساب\n• عرض الملف الشخصي\n• تحديث البيانات\n• عرض سجل العمليات\n• إعدادات الخصوصية');
        break;
      case 'logout':
        setShowLogoutDialog(true);
        break;
    }
  };

  const handleLogoutConfirm = () => {
    setShowLogoutDialog(false);
    
    // Show success toast
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "شكراً لاستخدامك AdminFiles",
      duration: 3000,
    });
    
    // Call the logout function
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
        <div className="px-4 py-3">
          {/* Header Top Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                {showMenu ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5 text-blue-600" />}
              </button>
              <div>
                <h1 className="text-lg font-bold text-gray-800">AdminFiles</h1>
                <p className="text-xs text-blue-600">الخدمات الإدارية الرقمية</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <Bell className="w-5 h-5 text-blue-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="ابحث عن الخدمات، الوثائق، أو الإجراءات..."
                className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Search Results Dropdown */}
            {showSearchResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800 text-sm">نتائج البحث ({searchResults.length})</h3>
                </div>
                {searchResults.map((result, index) => (
                  <button
                    key={result.id + index}
                    onClick={() => handleSearchResultClick(result)}
                    className="w-full p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors text-right"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">{result.name}</h4>
                        <p className="text-gray-600 text-xs mt-1">{result.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                          <span>🏛️ {result.sector}</span>
                          <span>📍 {result.location}</span>
                          <span>⏱️ {result.deadline}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </form>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">الإشعارات</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <button
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    className="w-full p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors text-right"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'reminder' ? 'bg-orange-500' :
                        notification.type === 'update' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">{notification.title}</h4>
                        <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                        <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Hamburger Menu */}
          {showMenu && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
              <div className="p-4">
                <div className="space-y-2">
                  <button 
                    onClick={() => handleMenuAction('account')}
                    className="w-full text-right p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-800 font-medium">إدارة الحساب</span>
                  </button>
                  <button 
                    onClick={() => handleMenuAction('settings')}
                    className="w-full text-right p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-800 font-medium">الإعدادات</span>
                  </button>
                  <button 
                    onClick={() => handleMenuAction('language')}
                    className="w-full text-right p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <Globe className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-800 font-medium">تغيير اللغة</span>
                  </button>
                  <button 
                    onClick={() => handleMenuAction('help')}
                    className="w-full text-right p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <HelpCircle className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-800 font-medium">المساعدة والدعم</span>
                  </button>
                  <button 
                    onClick={() => handleMenuAction('about')}
                    className="w-full text-right p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <Info className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-800 font-medium">حول التطبيق</span>
                  </button>
                  <div className="border-t border-gray-200 my-2"></div>
                  <button 
                    onClick={() => handleMenuAction('logout')}
                    className="w-full text-right p-3 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-3"
                  >
                    <LogOut className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-medium">تسجيل الخروج</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Click outside to close dropdowns */}
        {(showNotifications || showMenu || showSearchResults) && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              setShowNotifications(false);
              setShowMenu(false);
              setShowSearchResults(false);
            }}
          />
        )}
      </div>

      {/* Logout Confirmation Dialog */}
      <LogoutConfirmDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default Header;
