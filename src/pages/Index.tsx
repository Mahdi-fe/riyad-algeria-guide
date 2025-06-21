
import React, { useState } from 'react';
import { LanguageProvider } from '../hooks/useLanguage';
import Header from '../components/Header';
import SectorGrid from '../components/SectorGrid';
import QuickActions from '../components/QuickActions';
import BottomNavigation from '../components/BottomNavigation';
import EmergencyModal from '../components/EmergencyModal';
import SettingsModal from '../components/SettingsModal';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSectorClick = (sector: string) => {
    console.log(`Navigating to ${sector} sector`);
    // Here you would navigate to the specific sector page
  };

  const handleActionClick = (action: string) => {
    switch (action) {
      case 'emergency':
        setIsEmergencyModalOpen(true);
        break;
      case 'consultation':
        console.log('Opening legal consultation');
        break;
      case 'templates':
        console.log('Opening document templates');
        break;
      case 'payment':
        console.log('Opening payment options');
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
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${darkMode ? 'dark' : ''}`}>
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">My Files</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
                <div className="text-center text-gray-500 mt-12 card-enhanced p-8">
                  <div className="text-6xl mb-4 animate-float">📁</div>
                  <p className="font-semibold text-lg mb-2">No files yet</p>
                  <p className="text-sm text-gray-400">Start by selecting a government sector to manage your files</p>
                </div>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div className="p-6 animate-slide-up">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
                <div className="card-enhanced p-8">
                  <div className="text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl animate-pulse-soft">
                      A
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ahmed Benali</h3>
                    <p className="text-gray-500 text-lg mb-6">ahmed.benali@email.com</p>
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                      <p className="text-blue-700 font-semibold text-lg">مواطن جزائري</p>
                      <p className="text-blue-600 text-sm mt-1">Algerian Citizen</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
        
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
      </div>
    </LanguageProvider>
  );
};

export default Index;
