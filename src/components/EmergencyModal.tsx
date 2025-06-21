
import React from 'react';
import { X, Phone, Shield, Truck, Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  if (!isOpen) return null;

  const emergencyNumbers = [
    { 
      service: t('police'), 
      number: '17', 
      gradient: 'from-blue-500 to-blue-600', 
      icon: <Shield className="w-6 h-6" />,
      shadowColor: 'shadow-blue-500/25'
    },
    { 
      service: t('gendarmerie'), 
      number: '1055', 
      gradient: 'from-emerald-500 to-emerald-600', 
      icon: <Shield className="w-6 h-6" />,
      shadowColor: 'shadow-emerald-500/25'
    },
    { 
      service: t('ambulance'), 
      number: '14', 
      gradient: 'from-red-500 to-red-600', 
      icon: <Heart className="w-6 h-6" />,
      shadowColor: 'shadow-red-500/25'
    },
    { 
      service: t('civilProtection'), 
      number: '14', 
      gradient: 'from-orange-500 to-orange-600', 
      icon: <Truck className="w-6 h-6" />,
      shadowColor: 'shadow-orange-500/25'
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-sm animate-scale-in max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-8">
          {/* Header with enhanced styling */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('emergencyNumbers')}
              </h2>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
          
          {/* Emergency numbers with enhanced design */}
          <div className="space-y-4">
            {emergencyNumbers.map((emergency, index) => (
              <a
                key={index}
                href={`tel:${emergency.number}`}
                className={`bg-gradient-to-r ${emergency.gradient} text-white rounded-2xl p-6 flex items-center justify-between hover-lift group shadow-lg ${emergency.shadowColor} transition-all duration-300 animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                    {emergency.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm opacity-90">اتصال سريع</span>
                    </div>
                    <span className="font-semibold text-base">{emergency.service}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-3xl group-hover:scale-110 transition-transform duration-200">
                    {emergency.number}
                  </span>
                </div>
              </a>
            ))}
          </div>
          
          {/* Footer message with better styling */}
          <div className="text-center mt-8 p-4 bg-gray-50 rounded-2xl">
            <p className="text-gray-600 text-sm font-medium">
              اضغط على الرقم للاتصال مباشرة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
