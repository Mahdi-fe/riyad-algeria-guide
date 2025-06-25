
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
      icon: <Landmark className="w-8 h-8" />, 
      color: 'hover:shadow-lg', 
      notifications: 3,
      subtitle: 'البلدية، الولاية، والدائرة',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-700',
      borderColor: 'border-blue-200'
    },
    { 
      id: 'justice', 
      title: 'قطاع العدالة', 
      icon: <Scale className="w-8 h-8" />, 
      color: 'hover:shadow-lg', 
      notifications: 1,
      subtitle: 'المحاكم والنيابة العامة',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-gradient-to-br from-amber-600 to-amber-700',
      borderColor: 'border-amber-200'
    },
    { 
      id: 'health', 
      title: 'قطاع الصحة', 
      icon: <Hospital className="w-8 h-8" />, 
      color: 'hover:shadow-lg',
      notifications: 2,
      subtitle: 'بطاقة الشفاء والمستشفيات',
      bgColor: 'bg-rose-50',
      iconBg: 'bg-gradient-to-br from-rose-600 to-rose-700',
      borderColor: 'border-rose-200'
    },
    { 
      id: 'education', 
      title: 'قطاع التعليم', 
      icon: <University className="w-8 h-8" />, 
      color: 'hover:shadow-lg',
      subtitle: 'المدارس والجامعات',
      bgColor: 'bg-violet-50',
      iconBg: 'bg-gradient-to-br from-violet-600 to-violet-700',
      borderColor: 'border-violet-200'
    },
    { 
      id: 'employment', 
      title: 'قطاع التشغيل', 
      icon: <Briefcase className="w-8 h-8" />, 
      color: 'hover:shadow-lg',
      notifications: 1,
      subtitle: 'وكالة التشغيل ANEM',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-gradient-to-br from-emerald-600 to-emerald-700',
      borderColor: 'border-emerald-200'
    },
    { 
      id: 'social', 
      title: 'الضمان الاجتماعي', 
      icon: <Shield className="w-8 h-8" />, 
      color: 'hover:shadow-lg',
      subtitle: 'CNAS و CASNOS',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-gradient-to-br from-indigo-600 to-indigo-700',
      borderColor: 'border-indigo-200'
    },
    { 
      id: 'postal', 
      title: 'البريد الجزائري', 
      icon: <Mail className="w-8 h-8" />, 
      color: 'hover:shadow-lg',
      subtitle: 'الحسابات البريدية والخدمات',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-gradient-to-br from-orange-600 to-orange-700',
      borderColor: 'border-orange-200'
    },
    { 
      id: 'civil', 
      title: 'الحالة المدنية', 
      icon: <Users className="w-8 h-8" />, 
      color: 'hover:shadow-lg',
      subtitle: 'شهادات الحالة المدنية',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-gradient-to-br from-pink-600 to-pink-700',
      borderColor: 'border-pink-200'
    },
    { 
      id: 'transport', 
      title: 'النقل والمرور', 
      icon: <Car className="w-8 h-8" />, 
      color: 'hover:shadow-lg',
      subtitle: 'رخص السياقة والمركبات',
      bgColor: 'bg-cyan-50',
      iconBg: 'bg-gradient-to-br from-cyan-600 to-cyan-700',
      borderColor: 'border-cyan-200'
    },
  ];

  return (
    <div className="px-6 py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-12 bg-blue-600 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              القطاعات الحكومية الرسمية
            </h2>
            <p className="text-blue-600 font-semibold">الخدمات الإدارية المعتمدة</p>
          </div>
        </div>
        <p className="text-gray-600 text-base mb-4 leading-relaxed">
          اختر القطاع المناسب للحصول على الخدمات المطلوبة والوثائق الرسمية
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-8">
        {sectors.map((sector, index) => (
          <div key={sector.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <SectorCard
              title={sector.title}
              subtitle={sector.subtitle}
              icon={sector.icon}
              color={sector.color}
              notifications={sector.notifications}
              bgColor={sector.bgColor}
              iconBg={sector.iconBg}
              borderColor={sector.borderColor}
              onClick={() => onSectorClick(sector.id)}
            />
          </div>
        ))}
      </div>

      {/* Status footer */}
      <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-green-800 font-bold text-base">جميع الخدمات متاحة ومحدثة</p>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-green-700 text-sm leading-relaxed">
            منصة AdminFiles تربطك مباشرة بالإدارات الحكومية لضمان الحصول على خدمات سريعة وموثوقة
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorGrid;
