
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
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      id: 'lawyer',
      title: 'محامي',
      titleFr: 'Avocat',
      description: 'للوصول إلى الخدمات القانونية المتخصصة',
      descriptionFr: 'Accès aux services juridiques spécialisés',
      icon: <Scale className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100'
    },
    {
      id: 'officer',
      title: 'موظف إداري',
      titleFr: 'Agent Administratif',
      description: 'للوصول إلى أدوات الإدارة والمتابعة',
      descriptionFr: 'Accès aux outils d\'administration et de suivi',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      id: 'business',
      title: 'صاحب مؤسسة',
      titleFr: 'Propriétaire d\'Entreprise',
      description: 'للوصول إلى خدمات الأعمال والتجارة',
      descriptionFr: 'Accès aux services d\'entreprise et de commerce',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md mx-auto glass-card min-h-screen flex flex-col">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 pb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-20 right-16 w-24 h-24 bg-indigo-300/10 rounded-full blur-lg animate-pulse-soft"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-3xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">AdminFiles</h1>
            <p className="text-blue-100 text-lg font-medium">الخدمات الحكومية الرقمية</p>
            <p className="text-blue-200 text-sm mt-1">Services Gouvernementaux Numériques</p>
          </div>
        </div>

        {/* User Type Selection */}
        <div className="flex-1 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">اختر نوع المستخدم</h2>
            <p className="text-gray-600">حدد نوع حسابك للحصول على تجربة مخصصة</p>
          </div>

          <div className="space-y-4">
            {userTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => onUserTypeSelect(type.id)}
                className={`w-full bg-gradient-to-r ${type.bgGradient} border-2 border-transparent hover:border-blue-200 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  <div className={`p-4 bg-gradient-to-r ${type.gradient} text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{type.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{type.titleFr}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  </div>
                  <div className="p-2">
                    <CheckCircle className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-200 rounded-xl">
                <Shield className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">أمان وحماية البيانات</h4>
                <p className="text-amber-700 text-sm">جميع بياناتك محمية ومشفرة وفقاً لمعايير الأمان الحكومية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
