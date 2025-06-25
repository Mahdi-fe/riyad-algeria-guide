
import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SectorCardProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  color: string;
  notifications?: number;
  bgColor?: string;
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
  bgColor,
  iconBg,
  borderColor,
  onClick 
}) => {
  const { isRTL } = useLanguage();
  
  return (
    <div 
      onClick={onClick}
      className={`w-full p-6 cursor-pointer group overflow-hidden rounded-3xl transition-all duration-300 ${bgColor || 'bg-white'} border-2 ${borderColor || 'border-gray-200'} ${color} active:scale-95`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 flex-1">
          <div className={`p-4 ${iconBg || 'bg-blue-600'} text-white rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300`}>
            {icon}
          </div>
          
          <div className="flex-1 text-right">
            <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            {subtitle && (
              <p className="text-gray-600 text-sm">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {notifications && (
            <div className="bg-red-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-pulse">
              {notifications}
            </div>
          )}
          
          <div className="p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            {isRTL ? (
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorCard;
