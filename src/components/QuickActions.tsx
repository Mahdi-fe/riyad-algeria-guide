
import React from 'react';
import { Download, Zap, MapPin, MessageSquare, Bell, Settings } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
  userType?: string;
  onSettingsClick: () => void;
  onNotificationsClick: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ 
  onActionClick, 
  userType, 
  onSettingsClick, 
  onNotificationsClick 
}) => {
  const { t, isRTL } = useLanguage();

  const actions = [
    { 
      id: 'administrative_consultation', 
      title: 'الاستشارات الإدارية', 
      icon: <MessageSquare className="w-4 h-4" />, 
      gradient: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      shadowColor: 'shadow-green-500/25 hover:shadow-green-500/40'
    },
    { 
      id: 'templates', 
      title: 'تحميل النماذج', 
      icon: <Download className="w-4 h-4" />, 
      gradient: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      shadowColor: 'shadow-blue-500/25 hover:shadow-blue-500/40'
    },
    { 
      id: 'location', 
      title: 'البحث عن أقرب إدارة', 
      icon: <MapPin className="w-4 h-4" />, 
      gradient: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      shadowColor: 'shadow-purple-500/25 hover:shadow-purple-500/40'
    },
    { 
      id: 'settings', 
      title: 'الإعدادات', 
      icon: <Settings className="w-4 h-4" />, 
      gradient: 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700',
      shadowColor: 'shadow-gray-500/25 hover:shadow-gray-500/40'
    },
    { 
      id: 'notifications', 
      title: 'الإشعارات', 
      icon: <Bell className="w-4 h-4" />, 
      gradient: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      shadowColor: 'shadow-red-500/25 hover:shadow-red-500/40'
    },
  ];

  const handleActionClick = (actionId: string) => {
    if (actionId === 'settings') {
      onSettingsClick();
    } else if (actionId === 'notifications') {
      onNotificationsClick();
    } else {
      onActionClick(actionId);
    }
  };

  return (
    <div className="px-3 py-4 bg-white">
      {/* Section header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-md">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <h2 className={`text-base font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
            الإجراءات السريعة
          </h2>
        </div>
        <div className="w-10 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
      </div>
      
      {/* Action grid */}
      <div className="grid grid-cols-1 gap-2">
        {actions.map((action, index) => (
          <div
            key={action.id}
            onClick={() => handleActionClick(action.id)}
            className={`bg-gradient-to-r ${action.gradient} text-white rounded-xl p-3 cursor-pointer hover-lift group relative overflow-hidden shadow-md ${action.shadowColor} transition-all duration-300 animate-slide-up`}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-full -translate-y-2 translate-x-2 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10 flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110 transform transition-transform duration-300">
                {action.icon}
              </div>
              <div className="flex-1">
                <span className={`font-semibold text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'} group-hover:text-white/90 transition-colors duration-200`}>
                  {action.title}
                </span>
              </div>
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
