
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
    { id: 'local', title: t('localAdmin'), icon: <Building2 />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200', notifications: 2 },
    { id: 'justice', title: t('justice'), icon: <Scale />, color: 'bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200', notifications: 1 },
    { id: 'education', title: t('education'), icon: <GraduationCap />, color: 'bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200' },
    { id: 'health', title: t('health'), icon: <Heart />, color: 'bg-gradient-to-br from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200' },
    { id: 'postal', title: t('postal'), icon: <Mail />, color: 'bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200' },
    { id: 'social', title: t('socialSecurity'), icon: <Shield />, color: 'bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200' },
    { id: 'employment', title: t('employment'), icon: <Briefcase />, color: 'bg-gradient-to-br from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200' },
    { id: 'civil', title: t('civilStatus'), icon: <Users />, color: 'bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200' },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
      <h2 className={`text-xl font-bold text-gray-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('governmentSectors')}
      </h2>
      
      <div className="space-y-5">
        <div className={`flex gap-4 overflow-x-auto pb-3 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-hide`}>
          {sectors.slice(0, 4).map((sector) => (
            <SectorCard
              key={sector.id}
              title={sector.title}
              icon={sector.icon}
              color={sector.color}
              notifications={sector.notifications}
              onClick={() => onSectorClick(sector.id)}
            />
          ))}
        </div>
        
        <div className={`flex gap-4 overflow-x-auto pb-3 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-hide`}>
          {sectors.slice(4).map((sector) => (
            <SectorCard
              key={sector.id}
              title={sector.title}
              icon={sector.icon}
              color={sector.color}
              onClick={() => onSectorClick(sector.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorGrid;
