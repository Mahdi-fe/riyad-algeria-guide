
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
    { service: t('police'), number: '17', color: 'bg-blue-500' },
    { service: t('gendarmerie'), number: '1055', color: 'bg-green-500' },
    { service: t('ambulance'), number: '14', color: 'bg-red-500' },
    { service: t('civilProtection'), number: '14', color: 'bg-orange-500' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-xl p-6 w-full max-w-sm ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('emergencyNumbers')}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-3">
          {emergencyNumbers.map((emergency, index) => (
            <a
              key={index}
              href={`tel:${emergency.number}`}
              className={`${emergency.color} text-white rounded-lg p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="font-medium">{emergency.service}</span>
              </div>
              <span className="font-bold text-lg">{emergency.number}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
