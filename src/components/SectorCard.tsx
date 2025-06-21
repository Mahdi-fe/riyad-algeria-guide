
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
      className={`card-enhanced min-w-[200px] h-[160px] p-6 cursor-pointer group relative overflow-hidden ${color}`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-6 -translate-x-6"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top section with icon and notification */}
        <div className="flex items-start justify-between">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
            {icon}
          </div>
          {notifications && (
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center shadow-lg animate-pulse-glow font-semibold">
              {notifications}
            </div>
          )}
        </div>
        
        {/* Bottom section with title and arrow */}
        <div className="space-y-3">
          <h3 className={`font-semibold text-gray-800 text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'} group-hover:text-gray-900 transition-colors duration-300`}>
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex-1"></div>
            <div className="p-2 rounded-full bg-gray-100/60 group-hover:bg-blue-100 group-hover:shadow-md transition-all duration-300">
              {isRTL ? (
                <ChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300 rounded-2xl"></div>
    </div>
  );
};

export default SectorCard;
