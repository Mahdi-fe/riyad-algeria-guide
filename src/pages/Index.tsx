
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
      <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 ${darkMode ? 'dark' : ''}`}>
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-lg shadow-2xl min-h-screen flex flex-col">
          <Header />
          
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'home' && (
              <>
                <SectorGrid onSectorClick={handleSectorClick} />
                <QuickActions onActionClick={handleActionClick} />
              </>
            )}
            
            {activeTab === 'files' && (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Files</h2>
                <div className="text-center text-gray-500 mt-12 bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-6xl mb-4">📁</div>
                  <p className="font-semibold">No files yet. Start by selecting a government sector.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      A
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ahmed Benali</h3>
                    <p className="text-gray-500 text-lg">ahmed.benali@email.com</p>
                    <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
                      <p className="text-blue-700 font-semibold">مواطن جزائري</p>
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
