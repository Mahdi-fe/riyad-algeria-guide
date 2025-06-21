
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
      <div className={`min-h-screen bg-gray-50 ${darkMode ? 'dark' : ''}`}>
        <div className="max-w-md mx-auto bg-white shadow-lg min-h-screen flex flex-col">
          <Header />
          
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'home' && (
              <>
                <SectorGrid onSectorClick={handleSectorClick} />
                <QuickActions onActionClick={handleActionClick} />
              </>
            )}
            
            {activeTab === 'files' && (
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">My Files</h2>
                <div className="text-center text-gray-500 mt-8">
                  <p>No files yet. Start by selecting a government sector.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile</h2>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      A
                    </div>
                    <h3 className="font-semibold text-gray-800">Ahmed Benali</h3>
                    <p className="text-gray-500">ahmed.benali@email.com</p>
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
