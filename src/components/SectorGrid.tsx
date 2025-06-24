
import React from 'react';
import { Building2, Scale, GraduationCap, Heart, Mail, Shield, Briefcase, Users, MapPin, FileText, Hospital, Stethoscope } from 'lucide-react';
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
      title: 'الإدارة المحلية', 
      icon: <Building2 className="text-blue-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-100', 
      notifications: 3,
      subtitle: 'البلدية والولاية',
      gradientBg: 'from-blue-100/80 to-sky-50/60',
      iconBg: 'from-blue-500 to-sky-600'
    },
    { 
      id: 'justice', 
      title: 'قطاع العدالة', 
      icon: <Scale className="text-amber-700" />, 
      color: 'hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-100', 
      notifications: 1,
      subtitle: 'المحاكم والخدمات القضائية',
      gradientBg: 'from-amber-100/80 to-yellow-50/60',
      iconBg: 'from-amber-600 to-yellow-600'
    },
    { 
      id: 'health', 
      title: 'قطاع الصحة', 
      icon: <Stethoscope className="text-rose-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-rose-50 hover:to-pink-100',
      notifications: 2,
      subtitle: 'بطاقة الشفاء والخدمات الطبية',
      gradientBg: 'from-rose-100/80 to-pink-50/60',
      iconBg: 'from-rose-500 to-pink-600'
    },
    { 
      id: 'education', 
      title: 'قطاع التعليم', 
      icon: <GraduationCap className="text-violet-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-violet-50 hover:to-purple-100',
      subtitle: 'التسجيل والشهادات',
      gradientBg: 'from-violet-100/80 to-purple-50/60',
      iconBg: 'from-violet-500 to-purple-600'
    },
    { 
      id: 'employment', 
      title: 'قطاع التشغيل', 
      icon: <Briefcase className="text-emerald-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-100',
      notifications: 1,
      subtitle: 'وكالة التشغيل ANEM',
      gradientBg: 'from-emerald-100/80 to-teal-50/60',
      iconBg: 'from-emerald-500 to-teal-600'
    },
    { 
      id: 'social', 
      title: 'الضمان الاجتماعي', 
      icon: <Shield className="text-indigo-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-100',
      subtitle: 'CNAS/CASNOS',
      gradientBg: 'from-indigo-100/80 to-blue-50/60',
      iconBg: 'from-indigo-500 to-blue-600'
    },
    { 
      id: 'postal', 
      title: 'البريد الجزائري', 
      icon: <Mail className="text-orange-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-100',
      subtitle: 'الحسابات البريدية CCP',
      gradientBg: 'from-orange-100/80 to-amber-50/60',
      iconBg: 'from-orange-500 to-amber-600'
    },
    { 
      id: 'civil', 
      title: 'الحالة المدنية', 
      icon: <Users className="text-pink-600" />, 
      color: 'hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-100',
      subtitle: 'شهادات الحالة المدنية',
      gradientBg: 'from-pink-100/80 to-rose-50/60',
      iconBg: 'from-pink-500 to-rose-600'
    },
  ];

  return (
    <div className="px-6 py-8 bg-gradient-to-b from-transparent to-white/30">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          <h2 className={`text-2xl font-bold text-gray-800 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            القطاعات الحكومية
          </h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">اختر القطاع المناسب للحصول على الخدمات المطلوبة</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>
      
      <div className="space-y-6">
        <div className={`flex gap-5 overflow-x-auto pb-4 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-thin`}>
          {sectors.slice(0, 4).map((sector, index) => (
            <div key={sector.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <SectorCard
                title={sector.title}
                subtitle={sector.subtitle}
                icon={sector.icon}
                color={sector.color}
                notifications={sector.notifications}
                gradientBg={sector.gradientBg}
                iconBg={sector.iconBg}
                onClick={() => onSectorClick(sector.id)}
              />
            </div>
          ))}
        </div>
        
        <div className={`flex gap-5 overflow-x-auto pb-4 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-thin`}>
          {sectors.slice(4).map((sector, index) => (
            <div key={sector.id} className="animate-slide-up" style={{animationDelay: `${(index + 4) * 0.1}s`}}>
              <SectorCard
                title={sector.title}
                subtitle={sector.subtitle}
                icon={sector.icon}
                color={sector.color}
                notifications={sector.notifications}
                gradientBg={sector.gradientBg}
                iconBg={sector.iconBg}
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
