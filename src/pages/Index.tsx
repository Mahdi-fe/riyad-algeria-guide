
import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '../hooks/useLanguage';
import SplashScreen from '../components/SplashScreen';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import ServiceTypeSelection from '../components/ServiceTypeSelection';
import Header from '../components/Header';
import SectorGrid from '../components/SectorGrid';
import QuickActions from '../components/QuickActions';
import BottomNavigation from '../components/BottomNavigation';
import SettingsModal from '../components/SettingsModal';
import SectorDetail from '../components/SectorDetail';
import LegalConsultationPayment from '../components/LegalConsultationPayment';
import LocationSearch from '../components/LocationSearch';
import DocumentTemplates from '../components/DocumentTemplates';
import DocumentViewer from '../components/DocumentViewer';
import AdministrativeConsultation from '../components/AdministrativeConsultation';
import LegalConsultationBox from '../components/LegalConsultationBox';
import ConsultationInterface from '../components/ConsultationInterface';

type AppState = 'splash' | 'login' | 'signup' | 'main';

const MainContent = ({
  appState,
  userType,
  activeTab,
  activeSector,
  isSettingsModalOpen,
  isLocationSearchOpen,
  isDocumentTemplatesOpen,
  isDocumentViewerOpen,
  isAdministrativeConsultationOpen,
  isLegalConsultationOpen,
  isLegalConsultationBoxOpen,
  isConsultationInterfaceOpen,
  selectedDocument,
  darkMode,
  handleSplashComplete,
  handleLogin,
  handleSignUpClick,
  handleSignUp,
  handleBackToLogin,
  handleSectorClick,
  handleActionClick,
  handleTabChange,
  toggleDarkMode,
  setIsSettingsModalOpen,
  setIsLocationSearchOpen,
  setIsDocumentTemplatesOpen,
  setIsDocumentViewerOpen,
  setIsAdministrativeConsultationOpen,
  setIsLegalConsultationOpen,
  setIsLegalConsultationBoxOpen,
  setIsConsultationInterfaceOpen,
  setActiveSector,
  handleLogout
}: any) => {
  const { t } = useLanguage();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {appState === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      
      {appState === 'login' && (
        <LoginScreen onLogin={handleLogin} onSignUp={handleSignUpClick} />
      )}
      
      {appState === 'signup' && (
        <SignUpScreen onSignUp={handleSignUp} onBack={handleBackToLogin} />
      )}
      
      {appState === 'main' && (
        <>
          {activeSector ? (
            <SectorDetail 
              sector={activeSector} 
              userType={userType}
              onBack={() => setActiveSector(null)} 
            />
          ) : (
            <div className="w-full glass-card min-h-screen flex flex-col shadow-2xl bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 safe-area-padding">
              <Header userType={userType} onLogout={handleLogout} />
              
              <div className="flex-1 overflow-y-auto mobile-scroll scrollbar-professional">
                {activeTab === 'home' && (
                  <>
                    <SectorGrid onSectorClick={handleSectorClick} userType={userType} />
                    <QuickActions onActionClick={handleActionClick} userType={userType} />
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
                          م
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">محمد فتاح</h3>
                        <p className="text-gray-500 text-base mb-4">mohamed.fattah@email.com</p>
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 mb-4">
                          <p className="text-blue-700 font-semibold text-base">نوع المستخدم</p>
                          <p className="text-blue-600 text-sm mt-1">
                            {userType === 'citizen' && 'مواطن عادي'}
                            {userType === 'lawyer' && 'محامي'}
                            {userType === 'officer' && 'موظف إداري'}
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

      <DocumentViewer
        isOpen={isDocumentViewerOpen}
        onClose={() => setIsDocumentViewerOpen(false)}
        service={selectedDocument}
      />

      <AdministrativeConsultation
        isOpen={isAdministrativeConsultationOpen}
        onClose={() => setIsAdministrativeConsultationOpen(false)}
        userType={userType}
      />

      <LegalConsultationPayment
        isOpen={isLegalConsultationOpen}
        onClose={() => setIsLegalConsultationOpen(false)}
        serviceType="legal"
      />

      <LegalConsultationBox
        isOpen={isLegalConsultationBoxOpen}
        onClose={() => setIsLegalConsultationBoxOpen(false)}
      />

      <ConsultationInterface
        isOpen={isConsultationInterfaceOpen}
        onClose={() => setIsConsultationInterfaceOpen(false)}
      />
    </div>
  );
};

const Index = () => {
  const [appState, setAppState] = useState<AppState>('splash');
  const [userType, setUserType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLocationSearchOpen, setIsLocationSearchOpen] = useState(false);
  const [isDocumentTemplatesOpen, setIsDocumentTemplatesOpen] = useState(false);
  const [isDocumentViewerOpen, setIsDocumentViewerOpen] = useState(false);
  const [isAdministrativeConsultationOpen, setIsAdministrativeConsultationOpen] = useState(false);
  const [isLegalConsultationOpen, setIsLegalConsultationOpen] = useState(false);
  const [isLegalConsultationBoxOpen, setIsLegalConsultationBoxOpen] = useState(false);
  const [isConsultationInterfaceOpen, setIsConsultationInterfaceOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved user data on app load
  useEffect(() => {
    const savedUserType = localStorage.getItem('adminfiles_user_type');
    const isLoggedIn = localStorage.getItem('adminfiles_is_logged_in');
    
    if (savedUserType && isLoggedIn === 'true') {
      setUserType(savedUserType);
      // Skip onboarding for returning users
      setTimeout(() => setAppState('main'), 2500);
    }
  }, []);

  const handleSplashComplete = () => {
    const isLoggedIn = localStorage.getItem('adminfiles_is_logged_in');
    if (isLoggedIn === 'true') {
      setAppState('main');
    } else {
      setAppState('login');
    }
  };

  const handleLogin = () => {
    localStorage.setItem('adminfiles_is_logged_in', 'true');
    setAppState('main');
  };

  const handleSignUpClick = () => {
    setAppState('signup');
  };

  const handleSignUp = (selectedUserType: string) => {
    setUserType(selectedUserType);
    localStorage.setItem('adminfiles_user_type', selectedUserType);
    localStorage.setItem('adminfiles_is_logged_in', 'true');
    setAppState('main');
  };

  const handleBackToLogin = () => {
    setAppState('login');
  };

  const handleSectorClick = (sector: string) => {
    setActiveSector(sector);
  };

  const handleActionClick = (action: string) => {
    switch (action) {
      case 'consultation':
        setIsConsultationInterfaceOpen(true);
        break;
      case 'templates':
        setIsDocumentTemplatesOpen(true);
        break;
      case 'location':
        setIsLocationSearchOpen(true);
        break;
      case 'legal-consultation':
        setIsLegalConsultationOpen(true);
        break;
      case 'legal-consultation-box':
        setIsLegalConsultationBoxOpen(true);
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

  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem('adminfiles_user_type');
    localStorage.removeItem('adminfiles_is_logged_in');
    
    // Reset app state
    setAppState('login');
    setUserType(null);
    setActiveTab('home');
    setActiveSector(null);
    
    // Close any open modals
    setIsSettingsModalOpen(false);
    setIsLocationSearchOpen(false);
    setIsDocumentTemplatesOpen(false);
    setIsDocumentViewerOpen(false);
    setIsAdministrativeConsultationOpen(false);
    setIsLegalConsultationOpen(false);
    setIsLegalConsultationBoxOpen(false);
    setIsConsultationInterfaceOpen(false);
  };

  return (
    <LanguageProvider>
      <MainContent
        appState={appState}
        userType={userType}
        activeTab={activeTab}
        activeSector={activeSector}
        isSettingsModalOpen={isSettingsModalOpen}
        isLocationSearchOpen={isLocationSearchOpen}
        isDocumentTemplatesOpen={isDocumentTemplatesOpen}
        isDocumentViewerOpen={isDocumentViewerOpen}
        isAdministrativeConsultationOpen={isAdministrativeConsultationOpen}
        isLegalConsultationOpen={isLegalConsultationOpen}
        isLegalConsultationBoxOpen={isLegalConsultationBoxOpen}
        isConsultationInterfaceOpen={isConsultationInterfaceOpen}
        selectedDocument={selectedDocument}
        darkMode={darkMode}
        handleSplashComplete={handleSplashComplete}
        handleLogin={handleLogin}
        handleSignUpClick={handleSignUpClick}
        handleSignUp={handleSignUp}
        handleBackToLogin={handleBackToLogin}
        handleSectorClick={handleSectorClick}
        handleActionClick={handleActionClick}
        handleTabChange={handleTabChange}
        toggleDarkMode={toggleDarkMode}
        setIsSettingsModalOpen={setIsSettingsModalOpen}
        setIsLocationSearchOpen={setIsLocationSearchOpen}
        setIsDocumentTemplatesOpen={setIsDocumentTemplatesOpen}
        setIsDocumentViewerOpen={setIsDocumentViewerOpen}
        setIsAdministrativeConsultationOpen={setIsAdministrativeConsultationOpen}
        setIsLegalConsultationOpen={setIsLegalConsultationOpen}
        setIsLegalConsultationBoxOpen={setIsLegalConsultationBoxOpen}
        setIsConsultationInterfaceOpen={setIsConsultationInterfaceOpen}
        setActiveSector={setActiveSector}
        handleLogout={handleLogout}
      />
    </LanguageProvider>
  );
};

export default Index;
