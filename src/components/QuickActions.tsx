
import React from 'react';
import { MessageCircle, Phone, Download, CreditCard } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  const { t, isRTL } = useLanguage();

  const actions = [
    { id: 'consultation', title: t('legalConsultation'), icon: <MessageCircle />, color: 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' },
    { id: 'emergency', title: t('emergency'), icon: <Phone />, color: 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' },
    { id: 'templates', title: t('downloadTemplates'), icon: <Download />, color: 'bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700' },
    { id: 'payment', title: t('onlinePayment'), icon: <CreditCard />, color: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className={`text-xl font-bold text-gray-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('quickActions')}
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <div
            key={action.id}
            onClick={() => onActionClick(action.id)}
            className={`${action.color} text-white rounded-2xl p-5 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm`}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl p-2 bg-white/20 rounded-xl backdrop-blur-sm">{action.icon}</div>
              <span className={`font-semibold text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                {action.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
