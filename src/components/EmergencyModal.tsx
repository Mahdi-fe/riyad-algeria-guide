
import React from 'react';
import { X, Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  if (!isOpen) return null;

  const emergencyNumbers = [
    { service: t('police'), number: '17', color: 'bg-gradient-to-r from-blue-500 to-blue-600', icon: '🚔' },
    { service: t('gendarmerie'), number: '1055', color: 'bg-gradient-to-r from-emerald-500 to-emerald-600', icon: '🛡️' },
    { service: t('ambulance'), number: '14', color: 'bg-gradient-to-r from-red-500 to-red-600', icon: '🚑' },
    { service: t('civilProtection'), number: '14', color: 'bg-gradient-to-r from-orange-500 to-orange-600', icon: '🔥' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl animate-scale-in ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('emergencyNumbers')}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          {emergencyNumbers.map((emergency, index) => (
            <a
              key={index}
              href={`tel:${emergency.number}`}
              className={`${emergency.color} text-white rounded-2xl p-5 flex items-center justify-between hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{emergency.icon}</span>
                <div>
                  <Phone className="w-5 h-5 mb-1" />
                  <span className="font-semibold text-sm">{emergency.service}</span>
                </div>
              </div>
              <span className="font-bold text-2xl">{emergency.number}</span>
            </a>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          اضغط على الرقم للاتصال مباشرة
        </p>
      </div>
    </div>
  );
};

export default EmergencyModal;
