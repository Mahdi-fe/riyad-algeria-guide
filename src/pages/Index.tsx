
import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '../hooks/useLanguage';
import SplashScreen from '../components/SplashScreen';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import UserTypeSelection from '../components/UserTypeSelection';
import ServiceTypeSelection from '../components/ServiceTypeSelection';
import Header from '../components/Header';
import SectorGrid from '../components/SectorGrid';
import QuickActions from '../components/QuickActions';
import BottomNavigation from '../components/BottomNavigation';
import EmergencyModal from '../components/EmergencyModal';
import SettingsModal from '../components/SettingsModal';
import SectorDetail from '../components/SectorDetail';
import LegalConsultationPayment from '../components/LegalConsultationPayment';
import LocationSearch from '../components/LocationSearch';
import DocumentTemplates from '../components/DocumentTemplates';
import AppointmentBooking from '../components/AppointmentBooking';
import DocumentViewer from '../components/DocumentViewer';

type AppState = 'splash' | 'userType' | 'login' | 'signup' | 'serviceType' | 'main';

const MainContent = ({
  appState,
  serviceType,
  userType,
  activeTab,
  activeSector,
  isEmergencyModalOpen,
  isSettingsModalOpen,
  isLocationSearchOpen,
  isDocumentTemplatesOpen,
  isAppointmentBookingOpen,
  isDocumentViewerOpen,
  selectedDocument,
  darkMode,
  handleSplashComplete,
  handleUserTypeSelect,
  handleLogin,
  handleSignUpClick,
  handleSignUp,
  handleBackToLogin,
  handleServiceTypeSelect,
  handleSectorClick,
  handleActionClick,
  handleTabChange,
  toggleDarkMode,
  setIsEmergencyModalOpen,
  setIsSettingsModalOpen,
  setIsLocationSearchOpen,
  setIsDocumentTemplatesOpen,
  setIsAppointmentBookingOpen,
  setIsDocumentViewerOpen,
  setActiveSector
}: any) => {
  const { t } = useLanguage();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {appState === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      
      {appState === 'userType' && (
        <UserTypeSelection onUserTypeSelect={handleUserTypeSelect} />
      )}
      
      {appState === 'login' && (
        <LoginScreen onLogin={handleLogin} onSignUp={handleSignUpClick} />
      )}
      
      {appState === 'signup' && (
        <SignUpScreen onSignUp={handleSignUp} onBack={handleBackToLogin} />
      )}
      
      {appState === 'serviceType' && (
        <ServiceTypeSelection onServiceTypeSelect={handleServiceTypeSelect} />
      )}
      
      {appState === 'main' && (
        <>
          {activeSector ? (
            <SectorDetail 
              sector={activeSector} 
              onBack={() => setActiveSector(null)} 
            />
          ) : (
            <div className="w-full glass-card min-h-screen flex flex-col shadow-2xl bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 safe-area-padding">
              <Header />
              
              <div className="flex-1 overflow-y-auto mobile-scroll scrollbar-professional">
                {activeTab === 'home' && (
                  <>
                    {serviceType === 'government' && (
                      <SectorGrid onSectorClick={handleSectorClick} />
                    )}
                    <QuickActions onActionClick={handleActionClick} />
                  </>
                )}
                
                {activeTab === 'files' && (
                  <div className="p-4 animate-slide-in-up">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-2">ملفاتي</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="professional-card p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-sm">01</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-1 text-base">طلب شهادة الميلاد</h3>
                            <p className="text-sm text-gray-600 mb-3">مقدم إلى بلدية الجزائر الوسطى</p>
                            <div className="flex items-center gap-4 text-xs">
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">قيد المعالجة</span>
                              <span className="text-gray-500">باقي يومين</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="professional-card p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-sm">02</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-1 text-base">طلب صحيفة السوابق</h3>
                            <p className="text-sm text-gray-600 mb-3">مقدم إلى المحكمة الابتدائية</p>
                            <div className="flex items-center gap-4 text-xs">
                              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">جاهز للاستلام</span>
                              <span className="text-gray-500">منذ 3 أيام</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'profile' && (
                  <div className="p-4 animate-slide-in-up">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-2">الملف الشخصي</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    </div>
                    <div className="professional-card p-6">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-xl animate-professional-pulse">
                          ف
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{t('userName')}</h3>
                        <p className="text-gray-500 text-base mb-4">mahdi.fettache@email.com</p>
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 mb-4">
                          <p className="text-blue-700 font-semibold text-base">{t('userType')}</p>
                          <p className="text-blue-600 text-sm mt-1">
                            {userType === 'citizen' && 'مواطن عادي'}
                            {userType === 'lawyer' && 'محامي'}
                            {userType === 'officer' && 'موظف إداري'}
                            {userType === 'business' && 'صاحب مؤسسة'}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <button 
                            onClick={() => setIsLocationSearchOpen(true)}
                            className="w-full government-button mobile-button"
                          >
                            البحث عن أقرب إدارة
                          </button>
                          <button 
                            onClick={() => setIsDocumentTemplatesOpen(true)}
                            className="w-full secondary-button mobile-button"
                          >
                            تحميل النماذج
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
          )}
        </>
      )}
      
      {/* Modals */}
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

      <LocationSearch
        isOpen={isLocationSearchOpen}
        onClose={() => setIsLocationSearchOpen(false)}
      />

      <DocumentTemplates
        isOpen={isDocumentTemplatesOpen}
        onClose={() => setIsDocumentTemplatesOpen(false)}
      />

      <AppointmentBooking
        isOpen={isAppointmentBookingOpen}
        onClose={() => setIsAppointmentBookingOpen(false)}
      />

      <DocumentViewer
        isOpen={isDocumentViewerOpen}
        onClose={() => setIsDocumentViewerOpen(false)}
        service={selectedDocument}
      />
    </div>
  );
};

const Index = () => {
  const [appState, setAppState] = useState<AppState>('splash');
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLocationSearchOpen, setIsLocationSearchOpen] = useState(false);
  const [isDocumentTemplatesOpen, setIsDocumentTemplatesOpen] = useState(false);
  const [isAppointmentBookingOpen, setIsAppointmentBookingOpen] = useState(false);
  const [isDocumentViewerOpen, setIsDocumentViewerOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved user preferences on app load
  useEffect(() => {
    const savedUserType = localStorage.getItem('adminfiles_user_type');
    const savedServiceType = localStorage.getItem('adminfiles_service_type');
    const isReturningUser = localStorage.getItem('adminfiles_is_returning_user');
    
    if (savedUserType && savedServiceType && isReturningUser) {
      setUserType(savedUserType);
      setServiceType(savedServiceType);
      // Skip onboarding for returning users
      setTimeout(() => setAppState('main'), 2500);
    }
  }, []);

  const handleSplashComplete = () => {
    const isReturningUser = localStorage.getItem('adminfiles_is_returning_user');
    if (isReturningUser) {
      setAppState('main');
    } else {
      setAppState('userType');
    }
  };

  const handleUserTypeSelect = (selectedUserType: string) => {
    setUserType(selectedUserType);
    localStorage.setItem('adminfiles_user_type', selectedUserType);
    setAppState('login');
  };

  const handleLogin = () => {
    setAppState('serviceType');
  };

  const handleSignUpClick = () => {
    setAppState('signup');
  };

  const handleSignUp = (selectedUserType: string) => {
    setUserType(selectedUserType);
    localStorage.setItem('adminfiles_user_type', selectedUserType);
    setAppState('serviceType');
  };

  const handleBackToLogin = () => {
    setAppState('login');
  };

  const handleServiceTypeSelect = (selectedServiceType: string) => {
    setServiceType(selectedServiceType);
    localStorage.setItem('adminfiles_service_type', selectedServiceType);
    localStorage.setItem('adminfiles_is_returning_user', 'true');
    setAppState('main');
  };

  const handleSectorClick = (sector: string) => {
    setActiveSector(sector);
  };

  const handleActionClick = (action: string) => {
    switch (action) {
      case 'emergency':
        setIsEmergencyModalOpen(true);
        break;
      case 'templates':
        setIsDocumentTemplatesOpen(true);
        break;
      case 'location':
        setIsLocationSearchOpen(true);
        break;
      case 'appointment':
        setIsAppointmentBookingOpen(true);
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
      <MainContent
        appState={appState}
        serviceType={serviceType}
        userType={userType}
        activeTab={activeTab}
        activeSector={activeSector}
        isEmergencyModalOpen={isEmergencyModalOpen}
        isSettingsModalOpen={isSettingsModalOpen}
        isLocationSearchOpen={isLocationSearchOpen}
        isDocumentTemplatesOpen={isDocumentTemplatesOpen}
        isAppointmentBookingOpen={isAppointmentBookingOpen}
        isDocumentViewerOpen={isDocumentViewerOpen}
        selectedDocument={selectedDocument}
        darkMode={darkMode}
        handleSplashComplete={handleSplashComplete}
        handleUserTypeSelect={handleUserTypeSelect}
        handleLogin={handleLogin}
        handleSignUpClick={handleSignUpClick}
        handleSignUp={handleSignUp}
        handleBackToLogin={handleBackToLogin}
        handleServiceTypeSelect={handleServiceTypeSelect}
        handleSectorClick={handleSectorClick}
        handleActionClick={handleActionClick}
        handleTabChange={handleTabChange}
        toggleDarkMode={toggleDarkMode}
        setIsEmergencyModalOpen={setIsEmergencyModalOpen}
        setIsSettingsModalOpen={setIsSettingsModalOpen}
        setIsLocationSearchOpen={setIsLocationSearchOpen}
        setIsDocumentTemplatesOpen={setIsDocumentTemplatesOpen}
        setIsAppointmentBookingOpen={setIsAppointmentBookingOpen}
        setIsDocumentViewerOpen={setIsDocumentViewerOpen}
        setActiveSector={setActiveSector}
      />
    </LanguageProvider>
  );
};

export default Index;
