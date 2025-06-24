
import React from 'react';
import { Building2, Scale, GraduationCap, Heart, Mail, Shield, Briefcase, Users, MapPin, FileText, Hospital, Stethoscope, Landmark, University, Car } from 'lucide-react';
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
      icon: <Landmark className="text-blue-700" />, 
      color: 'hover:shadow-blue-200/50', 
      notifications: 3,
      subtitle: 'البلدية، الولاية، والدائرة',
      gradientBg: 'from-blue-50/95 to-indigo-50/80',
      iconBg: 'from-blue-600 to-indigo-700',
      borderColor: 'border-blue-200/40'
    },
    { 
      id: 'justice', 
      title: 'قطاع العدالة', 
      icon: <Scale className="text-amber-700" />, 
      color: 'hover:shadow-amber-200/50', 
      notifications: 1,
      subtitle: 'المحاكم والنيابة العامة',
      gradientBg: 'from-amber-50/95 to-yellow-50/80',
      iconBg: 'from-amber-600 to-yellow-700',
      borderColor: 'border-amber-200/40'
    },
    { 
      id: 'health', 
      title: 'قطاع الصحة', 
      icon: <Hospital className="text-rose-600" />, 
      color: 'hover:shadow-rose-200/50',
      notifications: 2,
      subtitle: 'بطاقة الشفاء والمستشفيات',
      gradientBg: 'from-rose-50/95 to-pink-50/80',
      iconBg: 'from-rose-600 to-pink-700',
      borderColor: 'border-rose-200/40'
    },
    { 
      id: 'education', 
      title: 'قطاع التعليم', 
      icon: <University className="text-violet-600" />, 
      color: 'hover:shadow-violet-200/50',
      subtitle: 'المدارس والجامعات',
      gradientBg: 'from-violet-50/95 to-purple-50/80',
      iconBg: 'from-violet-600 to-purple-700',
      borderColor: 'border-violet-200/40'
    },
    { 
      id: 'employment', 
      title: 'قطاع التشغيل', 
      icon: <Briefcase className="text-emerald-600" />, 
      color: 'hover:shadow-emerald-200/50',
      notifications: 1,
      subtitle: 'وكالة التشغيل ANEM',
      gradientBg: 'from-emerald-50/95 to-teal-50/80',
      iconBg: 'from-emerald-600 to-teal-700',
      borderColor: 'border-emerald-200/40'
    },
    { 
      id: 'social', 
      title: 'الضمان الاجتماعي', 
      icon: <Shield className="text-indigo-600" />, 
      color: 'hover:shadow-indigo-200/50',
      subtitle: 'CNAS و CASNOS',
      gradientBg: 'from-indigo-50/95 to-blue-50/80',
      iconBg: 'from-indigo-600 to-blue-700',
      borderColor: 'border-indigo-200/40'
    },
    { 
      id: 'postal', 
      title: 'البريد الجزائري', 
      icon: <Mail className="text-orange-600" />, 
      color: 'hover:shadow-orange-200/50',
      subtitle: 'الحسابات البريدية والخدمات',
      gradientBg: 'from-orange-50/95 to-amber-50/80',
      iconBg: 'from-orange-600 to-amber-700',
      borderColor: 'border-orange-200/40'
    },
    { 
      id: 'civil', 
      title: 'الحالة المدنية', 
      icon: <Users className="text-pink-600" />, 
      color: 'hover:shadow-pink-200/50',
      subtitle: 'شهادات الحالة المدنية',
      gradientBg: 'from-pink-50/95 to-rose-50/80',
      iconBg: 'from-pink-600 to-rose-700',
      borderColor: 'border-pink-200/40'
    },
    { 
      id: 'transport', 
      title: 'النقل والمرور', 
      icon: <Car className="text-cyan-600" />, 
      color: 'hover:shadow-cyan-200/50',
      subtitle: 'رخص السياقة والمركبات',
      gradientBg: 'from-cyan-50/95 to-blue-50/80',
      iconBg: 'from-cyan-600 to-blue-700',
      borderColor: 'border-cyan-200/40'
    },
  ];

  return (
    <div className="px-6 py-8 bg-gradient-to-b from-white/80 to-blue-50/30">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-10 gradient-government rounded-full shadow-lg"></div>
          <div>
            <h2 className={`title-government mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              القطاعات الحكومية الرسمية
            </h2>
            <p className="text-xs text-blue-600 font-medium">الخدمات الإدارية المعتمدة</p>
          </div>
        </div>
        <p className="text-muted-government text-sm mb-4 leading-relaxed">
          اختر القطاع المناسب للحصول على الخدمات المطلوبة والوثائق الرسمية
        </p>
        <div className="w-24 h-1 gradient-government rounded-full shadow-sm"></div>
      </div>
      
      <div className="space-y-6">
        <div className={`flex gap-4 overflow-x-auto pb-4 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-professional`}>
          {sectors.slice(0, 3).map((sector, index) => (
            <div key={sector.id} className="animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <SectorCard
                title={sector.title}
                subtitle={sector.subtitle}
                icon={sector.icon}
                color={sector.color}
                notifications={sector.notifications}
                gradientBg={sector.gradientBg}
                iconBg={sector.iconBg}
                borderColor={sector.borderColor}
                onClick={() => onSectorClick(sector.id)}
              />
            </div>
          ))}
        </div>
        
        <div className={`flex gap-4 overflow-x-auto pb-4 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-professional`}>
          {sectors.slice(3, 6).map((sector, index) => (
            <div key={sector.id} className="animate-slide-in-up" style={{animationDelay: `${(index + 3) * 0.1}s`}}>
              <SectorCard
                title={sector.title}
                subtitle={sector.subtitle}
                icon={sector.icon}
                color={sector.color}
                notifications={sector.notifications}
                gradientBg={sector.gradientBg}
                iconBg={sector.iconBg}
                borderColor={sector.borderColor}
                onClick={() => onSectorClick(sector.id)}
              />
            </div>
          ))}
        </div>

        <div className={`flex gap-4 overflow-x-auto pb-4 ${isRTL ? 'flex-row-reverse' : ''} scrollbar-professional`}>
          {sectors.slice(6).map((sector, index) => (
            <div key={sector.id} className="animate-slide-in-up" style={{animationDelay: `${(index + 6) * 0.1}s`}}>
              <SectorCard
                title={sector.title}
                subtitle={sector.subtitle}
                icon={sector.icon}
                color={sector.color}
                notifications={sector.notifications}
                gradientBg={sector.gradientBg}
                iconBg={sector.iconBg}
                borderColor={sector.borderColor}
                onClick={() => onSectorClick(sector.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Professional footer section */}
      <div className="mt-10 p-6 glass-government rounded-2xl border border-blue-100/50">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-professional-pulse"></div>
            <p className="text-blue-800 font-semibold text-sm">جميع الخدمات متاحة ومحدثة</p>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-professional-pulse"></div>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            منصة AdminFiles تربطك مباشرة بالإدارات الحكومية لضمان الحصول على خدمات سريعة وموثوقة
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorGrid;
