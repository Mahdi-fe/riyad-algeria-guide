
import React from 'react';
import { Building2, Scale, GraduationCap, Heart, Mail, Shield, Briefcase, Users } from 'lucide-react';
import SectorCard from './SectorCard';
import { useLanguage } from '../hooks/useLanguage';

interface SectorGridProps {
  onSectorClick: (sector: string) => void;
}

const SectorGrid: React.FC<SectorGridProps> = ({ onSectorClick }) => {
  const { t, isRTL } = useLanguage();

  const sectors = [
    { 
      id: 'local', 
      title: t('localAdmin'), 
      icon: <Building2 className="text-blue-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100', 
      notifications: 2 
    },
    { 
      id: 'justice', 
      title: t('justice'), 
      icon: <Scale className="text-emerald-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100', 
      notifications: 1 
    },
    { 
      id: 'education', 
      title: t('education'), 
      icon: <GraduationCap className="text-purple-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100' 
    },
    { 
      id: 'health', 
      title: t('health'), 
      icon: <Heart className="text-rose-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-rose-50 hover:to-rose-100' 
    },
    { 
      id: 'postal', 
      title: t('postal'), 
      icon: <Mail className="text-amber-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100' 
    },
    { 
      id: 'social', 
      title: t('socialSecurity'), 
      icon: <Shield className="text-indigo-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100' 
    },
    { 
      id: 'employment', 
      title: t('employment'), 
      icon: <Briefcase className="text-teal-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-teal-50 hover:to-teal-100' 
    },
    { 
      id: 'civil', 
      title: t('civilStatus'), 
      icon: <Users className="text-pink-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100' 
    },
  ];

  return (
    <div className="px-6 py-8 bg-gradient-to-b from-transparent to-white/50">
      {/* Section header with enhanced styling */}
      <div className="mb-8">
        <h2 className={`text-2xl font-bold text-gray-800 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('governmentSectors')}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>
      
      {/* Enhanced grid layout */}
      <div className="space-y-6">
        {/* First row */}
        <div className={`flex gap-5 overflow-x-auto pb-4 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-thin`}>
          {sectors.slice(0, 4).map((sector, index) => (
            <div key={sector.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <SectorCard
                title={sector.title}
                icon={sector.icon}
                color={sector.color}
                notifications={sector.notifications}
                onClick={() => onSectorClick(sector.id)}
              />
            </div>
          ))}
        </div>
        
        {/* Second row */}
        <div className={`flex gap-5 overflow-x-auto pb-4 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-thin`}>
          {sectors.slice(4).map((sector, index) => (
            <div key={sector.id} className="animate-slide-up" style={{animationDelay: `${(index + 4) * 0.1}s`}}>
              <SectorCard
                title={sector.title}
                icon={sector.icon}
                color={sector.color}
                onClick={() => onSectorClick(sector.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorGrid;
