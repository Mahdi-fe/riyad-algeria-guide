
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectorData } from '../types/sector';

interface SectorHeaderProps {
  currentSector: SectorData;
  onBack: () => void;
}

const SectorHeader: React.FC<SectorHeaderProps> = ({ currentSector, onBack }) => {
  const { isRTL } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6">
      <div className="flex items-center gap-4 relative z-10">
        <button
          onClick={onBack}
          className="p-3 glass rounded-2xl shadow-lg hover-lift"
        >
          {isRTL ? (
            <ArrowRight className="w-6 h-6 text-white" />
          ) : (
            <ArrowLeft className="w-6 h-6 text-white" />
          )}
        </button>
        <div className="flex-1">
          <div className="text-4xl mb-2">{currentSector.icon}</div>
          <h1 className="text-2xl font-bold text-white mb-1">{currentSector.title}</h1>
          <p className="text-blue-200 text-sm">{currentSector.titleFr}</p>
        </div>
      </div>
    </div>
  );
};

export default SectorHeader;
