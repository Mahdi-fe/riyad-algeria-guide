
import React from 'react';
import { User, Scale, Shield, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface UserTypeSelectionProps {
  onUserTypeSelect: (userType: string) => void;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ onUserTypeSelect }) => {
  const { t, isRTL } = useLanguage();

  const userTypes = [
    {
      id: 'citizen',
      title: 'مواطن عادي',
      titleFr: 'Citoyen',
      description: 'للوصول إلى الخدمات الحكومية العامة',
      descriptionFr: 'Accès aux services gouvernementaux généraux',
      icon: <User className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'lawyer',
      title: 'محامي',
      titleFr: 'Avocat',
      description: 'للوصول إلى الخدمات القانونية المتخصصة',
      descriptionFr: 'Accès aux services juridiques spécialisés',
      icon: <Scale className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      id: 'officer',
      title: 'موظف إداري',
      titleFr: 'Agent Administratif',
      description: 'للوصول إلى أدوات الإدارة والمتابعة',
      descriptionFr: 'Accès aux outils d\'administration et de suivi',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'business',
      title: 'صاحب مؤسسة',
      titleFr: 'Propriétaire d\'Entreprise',
      description: 'للوصول إلى خدمات الأعمال والتجارة',
      descriptionFr: 'Accès aux services d\'entreprise et de commerce',
      icon: <Users className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Modern header */}
        <div className="bg-blue-600 px-8 py-12 rounded-b-3xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">AdminFiles</h1>
            <p className="text-blue-100 text-lg font-medium">الخدمات الحكومية الرقمية</p>
            <p className="text-blue-200 text-sm mt-1">Services Gouvernementaux Numériques</p>
          </div>
        </div>

        {/* User type selection */}
        <div className="flex-1 px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">اختر نوع المستخدم</h2>
            <p className="text-gray-600 text-base">حدد نوع حسابك للحصول على تجربة مخصصة</p>
          </div>

          <div className="space-y-4">
            {userTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => onUserTypeSelect(type.id)}
                className={`w-full ${type.bgColor} border-2 ${type.borderColor} hover:shadow-lg active:scale-95 rounded-3xl p-6 transition-all duration-300 animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center gap-6 text-right">
                  <div className={`${type.gradient} text-white rounded-2xl shadow-lg p-4`}>
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{type.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{type.titleFr}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
                  </div>
                  <div className="p-2">
                    <CheckCircle className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-200 rounded-xl">
                <Shield className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h4 className="font-bold text-amber-800 text-base mb-2">أمان وحماية البيانات</h4>
                <p className="text-amber-700 text-sm leading-relaxed">جميع بياناتك محمية ومشفرة وفقاً لمعايير الأمان الحكومية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
