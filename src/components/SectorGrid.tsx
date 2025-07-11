import React from 'react';
import { Building2, Scale, GraduationCap, Heart, Mail, Shield, Briefcase, Users, MapPin, FileText, Hospital, Stethoscope, Landmark, University, Car, CreditCard, BookOpen, Gavel, UserCheck } from 'lucide-react';
import SectorCard from './SectorCard';
import { useLanguage } from '../hooks/useLanguage';

interface SectorGridProps {
  onSectorClick: (sector: string) => void;
  userType?: string;
}

const SectorGrid: React.FC<SectorGridProps> = ({ onSectorClick, userType }) => {
  const { t, isRTL } = useLanguage();

  const sectors = [
    { 
      id: 'local_admin',
      title: 'الإدارة المحلية والحالة المدنية', 
      icon: <Landmark className="w-6 h-6" />, 
      color: 'hover:shadow-md', 
      notifications: 5,
      subtitle: 'البلدية والدائرة وشهادات الحالة المدنية',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-700',
      borderColor: 'border-blue-200'
    },
    { 
      id: 'justice', 
      title: 'قطاع العدالة', 
      icon: <Gavel className="w-6 h-6" />, 
      color: 'hover:shadow-md', 
      notifications: 1,
      subtitle: 'المحاكم والنيابة العامة والاستشارات القانونية',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-gradient-to-br from-amber-600 to-amber-700',
      borderColor: 'border-amber-200'
    },
    { 
      id: 'health', 
      title: 'قطاع الصحة', 
      icon: <Hospital className="w-6 h-6" />, 
      color: 'hover:shadow-md',
      notifications: 2,
      subtitle: 'بطاقة الشفاء والمستشفيات',
      bgColor: 'bg-rose-50',
      iconBg: 'bg-gradient-to-br from-rose-600 to-rose-700',
      borderColor: 'border-rose-200'
    },
    { 
      id: 'education', 
      title: 'قطاع التعليم', 
      icon: <BookOpen className="w-6 h-6" />, 
      color: 'hover:shadow-md',
      subtitle: 'المدارس والجامعات',
      bgColor: 'bg-violet-50',
      iconBg: 'bg-gradient-to-br from-violet-600 to-violet-700',
      borderColor: 'border-violet-200'
    }
  ];

  const getUserTypeTitle = () => {
    switch (userType) {
      case 'lawyer':
        return 'المنصة القانونية للمحامين';
      case 'officer':
        return 'لوحة تحكم الموظف الإداري';
      default:
        return 'القطاعات الحكومية الرسمية';
    }
  };

  const getUserTypeDescription = () => {
    switch (userType) {
      case 'lawyer':
        return 'الخدمات القانونية والقضائية المتخصصة';
      case 'officer':
        return 'أدوات الإدارة والمتابعة والإشراف';
      default:
        return 'الخدمات الإدارية المعتمدة';
    }
  };

  const handleSectorClick = (sectorId: string) => {
    console.log('Sector clicked:', sectorId);
    onSectorClick(sectorId);
  };

  return (
    <div className="px-4 py-5 bg-gradient-to-b from-white to-gray-50">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-0.5">
              {getUserTypeTitle()}
            </h2>
            <p className="text-blue-600 font-semibold text-sm">{getUserTypeDescription()}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
          {userType === 'lawyer' 
            ? 'منصة متخصصة للمحامين لتقديم الاستشارات القانونية والخدمات القضائية'
            : 'اختر القطاع المناسب للحصول على الخدمات المطلوبة والوثائق الرسمية'
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-3 mb-6">
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
              onClick={() => handleSectorClick(sector.id)}
            />
          </div>
        ))}
      </div>

      {/* Status footer - تم تقليل الحجم */}
      <div className="p-4 bg-green-50 rounded-xl border border-green-200">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-green-800 font-bold text-sm">جميع الخدمات متاحة ومحدثة</p>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-green-700 text-xs leading-relaxed">
            منصة AdminFiles تربطك مباشرة بالإدارات الحكومية لضمان الحصول على خدمات سريعة وموثوقة
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorGrid;
