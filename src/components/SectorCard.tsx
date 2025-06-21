
import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SectorCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  notifications?: number;
  onClick: () => void;
}

const SectorCard: React.FC<SectorCardProps> = ({ title, icon, color, notifications, onClick }) => {
  const { isRTL } = useLanguage();
  
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl p-5 shadow-lg border border-gray-100/50 min-w-[180px] h-[140px] flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 ${color} group backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between">
        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
        {notifications && (
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
            {notifications}
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <h3 className={`font-semibold text-gray-800 text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'} group-hover:text-gray-900 transition-colors duration-300`}>
          {title}
        </h3>
        <div className="p-1 rounded-full bg-gray-100/50 group-hover:bg-gray-200 transition-colors duration-300">
          {isRTL ? (
            <ChevronLeft className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectorCard;
