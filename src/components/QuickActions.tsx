
import React from 'react';
import { MessageCircle, Phone, Download, CreditCard } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  const { t, isRTL } = useLanguage();

  const actions = [
    { id: 'consultation', title: t('legalConsultation'), icon: <MessageCircle />, color: 'bg-blue-500' },
    { id: 'emergency', title: t('emergency'), icon: <Phone />, color: 'bg-red-500' },
    { id: 'templates', title: t('downloadTemplates'), icon: <Download />, color: 'bg-green-500' },
    { id: 'payment', title: t('onlinePayment'), icon: <CreditCard />, color: 'bg-purple-500' },
  ];

  return (
    <div className="p-4">
      <h2 className={`text-lg font-semibold text-gray-800 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('quickActions')}
      </h2>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <div
            key={action.id}
            onClick={() => onActionClick(action.id)}
            className={`${action.color} text-white rounded-xl p-4 cursor-pointer hover:opacity-90 transition-opacity`}
          >
            <div className="flex items-center gap-3">
              <div className="text-xl">{action.icon}</div>
              <span className={`font-medium text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
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
