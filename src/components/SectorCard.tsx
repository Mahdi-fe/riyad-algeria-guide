
import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SectorCardProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  color: string;
  notifications?: number;
  gradientBg?: string;
  iconBg?: string;
  borderColor?: string;
  onClick: () => void;
}

const SectorCard: React.FC<SectorCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  color, 
  notifications, 
  gradientBg,
  iconBg,
  borderColor,
  onClick 
}) => {
  const { isRTL } = useLanguage();
  
  return (
    <div 
      onClick={onClick}
      className={`relative min-w-[200px] h-[200px] p-6 cursor-pointer group overflow-hidden rounded-2xl transition-all duration-400 professional-card ${borderColor || 'border-blue-100/50'} ${color}`}
      style={{
        background: gradientBg ? `linear-gradient(135deg, var(--tw-gradient-stops))` : 'white'
      }}
    >
      {/* Professional background decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-6 translate-x-6 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/8 to-transparent rounded-full translate-y-6 -translate-x-6 group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-r from-white/3 to-white/6 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:rotate-90 transition-transform duration-700"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className={`p-3 bg-gradient-to-r ${iconBg || 'from-blue-600 to-indigo-700'} text-white rounded-xl shadow-lg group-hover:scale-105 group-hover:rotate-2 transition-all duration-400`}>
            <div className="text-2xl">
              {icon}
            </div>
          </div>
          {notifications && (
            <div className="notification-badge">
              {notifications}
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className={`font-bold text-blue-900 text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'} group-hover:text-blue-800 transition-colors duration-300`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`text-xs text-slate-600 mt-2 ${isRTL ? 'text-right' : 'text-left'} group-hover:text-slate-700 transition-colors duration-300`}>
                {subtitle}
              </p>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1"></div>
            <div className="p-2.5 rounded-xl glass-elevated group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              {isRTL ? (
                <ChevronLeft className="w-4 h-4 text-blue-700 group-hover:text-blue-800 transition-colors duration-300" />
              ) : (
                <ChevronRight className="w-4 h-4 text-blue-700 group-hover:text-blue-800 transition-colors duration-300" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

export default SectorCard;
