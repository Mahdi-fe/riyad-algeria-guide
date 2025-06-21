
import React, { useState } from 'react';
import { LanguageProvider } from '../hooks/useLanguage';
import UserTypeSelection from '../components/UserTypeSelection';
import Header from '../components/Header';
import SectorGrid from '../components/SectorGrid';
import QuickActions from '../components/QuickActions';
import BottomNavigation from '../components/BottomNavigation';
import EmergencyModal from '../components/EmergencyModal';
import SettingsModal from '../components/SettingsModal';
import SectorDetail from '../components/SectorDetail';
import LegalConsultationPayment from '../components/LegalConsultationPayment';

const Index = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSectorClick = (sector: string) => {
    setActiveSector(sector);
  };

  const handleActionClick = (action: string) => {
    switch (action) {
      case 'emergency':
        setIsEmergencyModalOpen(true);
        break;
      case 'consultation':
        setIsPaymentModalOpen(true);
        break;
      case 'templates':
        console.log('Opening document templates');
        break;
      default:
        console.log(`Action clicked: ${action}`);
    }
  };

  const handleTabChange = (tab: string) => {
    if (tab === 'settings') {
      setIsSettingsModalOpen(true);
    } else {
      setActiveTab(tab);
      setActiveSector(null);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${darkMode ? 'dark' : ''}`}>
        {!userType ? (
          <UserTypeSelection onUserTypeSelect={setUserType} />
        ) : activeSector ? (
          <SectorDetail 
            sector={activeSector} 
            onBack={() => setActiveSector(null)} 
          />
        ) : (
          <div className="max-w-md mx-auto glass-card min-h-screen flex flex-col shadow-2xl">
            <Header />
            
            <div className="flex-1 overflow-y-auto scrollbar-thin">
              {activeTab === 'home' && (
                <>
                  <SectorGrid onSectorClick={handleSectorClick} />
                  <QuickActions onActionClick={handleActionClick} />
                </>
              )}
              
              {activeTab === 'files' && (
                <div className="p-6 animate-slide-up">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">ملفاتي</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <div className="text-center text-gray-500 mt-12 card-enhanced p-8">
                    <div className="text-6xl mb-4 animate-float">📁</div>
                    <p className="font-semibold text-lg mb-2">لا توجد ملفات حتى الآن</p>
                    <p className="text-sm text-gray-400">ابدأ بتحديد قطاع حكومي لإدارة ملفاتك</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'profile' && (
                <div className="p-6 animate-slide-up">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">الملف الشخصي</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <div className="card-enhanced p-8">
                    <div className="text-center">
                      <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl animate-pulse-soft">
                        أ
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">أحمد بن علي</h3>
                      <p className="text-gray-500 text-lg mb-6">ahmed.benali@email.com</p>
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 mb-4">
                        <p className="text-blue-700 font-semibold text-lg">مواطن جزائري</p>
                        <p className="text-blue-600 text-sm mt-1">
                          {userType === 'citizen' && 'مواطن عادي'}
                          {userType === 'lawyer' && 'محامي'}
                          {userType === 'officer' && 'موظف إداري'}
                          {userType === 'business' && 'صاحب مؤسسة'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
        )}
        
        <EmergencyModal 
          isOpen={isEmergencyModalOpen} 
          onClose={() => setIsEmergencyModalOpen(false)} 
        />
        
        <SettingsModal
          isOpen={isSettingsModalOpen}
          onClose={() => setIsSettingsModalOpen(false)}
          darkMode={darkMode}
          onDarkModeToggle={toggleDarkMode}
        />

        <LegalConsultationPayment
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          serviceType="general"
        />
      </div>
    </LanguageProvider>
  );
};

export default Index;
