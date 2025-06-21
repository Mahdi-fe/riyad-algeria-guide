
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
      className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 min-w-[160px] h-[120px] flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow ${color}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl">{icon}</div>
        {notifications && (
          <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notifications}
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <h3 className={`font-medium text-gray-800 text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
          {title}
        </h3>
        {isRTL ? (
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default SectorCard;
