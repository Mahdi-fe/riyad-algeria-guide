
import React from 'react';
import { Download, Zap, MapPin, MessageSquare, Scale } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
  userType?: string;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick, userType }) => {
  const { t, isRTL } = useLanguage();

  const commonActions = [
    { 
      id: 'consultation', 
      title: 'الاستشارات الإدارية', 
      icon: <MessageSquare className="w-6 h-6" />, 
      gradient: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      shadowColor: 'shadow-green-500/25 hover:shadow-green-500/40'
    },
    { 
      id: 'templates', 
      title: 'تحميل النماذج', 
      icon: <Download className="w-6 h-6" />, 
      gradient: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      shadowColor: 'shadow-blue-500/25 hover:shadow-blue-500/40'
    },
    { 
      id: 'location', 
      title: 'البحث عن أقرب إدارة', 
      icon: <MapPin className="w-6 h-6" />, 
      gradient: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      shadowColor: 'shadow-purple-500/25 hover:shadow-purple-500/40'
    },
  ];

  const lawyerActions = [
    { 
      id: 'legal-consultation-box', 
      title: 'صندوق الاستشارات القانونية', 
      icon: <Scale className="w-6 h-6" />, 
      gradient: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
      shadowColor: 'shadow-amber-500/25 hover:shadow-amber-500/40'
    },
    ...commonActions
  ];

  const actions = userType === 'lawyer' ? lawyerActions : commonActions;

  return (
    <div className="px-6 py-8 bg-white">
      {/* Section header with icon */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h2 className={`text-2xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
            الإجراءات السريعة
          </h2>
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
      </div>
      
      {/* Enhanced action grid */}
      <div className="grid grid-cols-1 gap-5">
        {actions.map((action, index) => (
          <div
            key={action.id}
            onClick={() => onActionClick(action.id)}
            className={`bg-gradient-to-r ${action.gradient} text-white rounded-2xl p-6 cursor-pointer hover-lift group relative overflow-hidden shadow-lg ${action.shadowColor} transition-all duration-300 animate-slide-up`}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110 transform transition-transform duration-300">
                {action.icon}
              </div>
              <div className="flex-1">
                <span className={`font-semibold text-base leading-tight ${isRTL ? 'text-right' : 'text-left'} group-hover:text-white/90 transition-colors duration-200`}>
                  {action.title}
                </span>
              </div>
              {action.id === 'legal-consultation-box' && (
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  3 جديد
                </div>
              )}
            </div>
            
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
