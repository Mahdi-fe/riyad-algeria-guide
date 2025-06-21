
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
    { id: 'local', title: t('localAdmin'), icon: <Building2 />, color: 'bg-blue-50', notifications: 2 },
    { id: 'justice', title: t('justice'), icon: <Scale />, color: 'bg-green-50', notifications: 1 },
    { id: 'education', title: t('education'), icon: <GraduationCap />, color: 'bg-purple-50' },
    { id: 'health', title: t('health'), icon: <Heart />, color: 'bg-red-50' },
    { id: 'postal', title: t('postal'), icon: <Mail />, color: 'bg-yellow-50' },
    { id: 'social', title: t('socialSecurity'), icon: <Shield />, color: 'bg-indigo-50' },
    { id: 'employment', title: t('employment'), icon: <Briefcase />, color: 'bg-teal-50' },
    { id: 'civil', title: t('civilStatus'), icon: <Users />, color: 'bg-pink-50' },
  ];

  return (
    <div className="p-4">
      <h2 className={`text-lg font-semibold text-gray-800 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('governmentSectors')}
      </h2>
      
      <div className="space-y-4">
        <div className={`flex gap-3 overflow-x-auto pb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
        
        <div className={`flex gap-3 overflow-x-auto pb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
