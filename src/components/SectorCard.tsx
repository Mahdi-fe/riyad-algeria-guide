
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
  onClick 
}) => {
  const { isRTL } = useLanguage();
  
  return (
    <div 
      onClick={onClick}
      className={`relative min-w-[200px] h-[200px] p-6 cursor-pointer group overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${color}`}
      style={{
        background: gradientBg ? `linear-gradient(135deg, var(--tw-gradient-stops))` : 'white'
      }}
    >
      {/* Enhanced background decorations */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-white/5 to-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 transition-transform duration-1000"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className={`p-4 bg-gradient-to-r ${iconBg || 'from-blue-500 to-indigo-600'} text-white rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <div className="text-3xl">
              {icon}
            </div>
          </div>
          {notifications && (
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-pulse-glow font-bold group-hover:scale-110 transition-transform duration-300">
              {notifications}
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className={`font-bold text-gray-800 text-base leading-tight ${isRTL ? 'text-right' : 'text-left'} group-hover:text-gray-900 transition-colors duration-300`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`text-xs text-gray-600 mt-2 ${isRTL ? 'text-right' : 'text-left'} group-hover:text-gray-700 transition-colors duration-300`}>
                {subtitle}
              </p>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1"></div>
            <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
              {isRTL ? (
                <ChevronLeft className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

export default SectorCard;
