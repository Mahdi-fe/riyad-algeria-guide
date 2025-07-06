
import React from 'react';
import { User, Scale, Shield, CheckCircle, ArrowRight } from 'lucide-react';
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
      description: 'للوصول إلى الخدمات الحكومية العامة والاستعلامات الشخصية',
      descriptionFr: 'Accès aux services gouvernementaux généraux',
      icon: <User className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: ['الوثائق المدنية', 'الاستعلامات', 'الخدمات المجانية']
    },
    {
      id: 'lawyer',
      title: 'محامي',
      titleFr: 'Avocat',
      description: 'للوصول إلى الخدمات القانونية المتخصصة والاستشارات القانونية المدفوعة',
      descriptionFr: 'Accès aux services juridiques spécialisés',
      icon: <Scale className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      features: ['الاستشارات القانونية', 'متابعة القضايا', 'المحاكم']
    },
    {
      id: 'officer',
      title: 'موظف إداري',
      titleFr: 'Agent Administratif',
      description: 'للوصول إلى أدوات الإدارة والمتابعة والرد على الاستشارات الإدارية',
      descriptionFr: 'Accès aux outils d\'administration et de suivi',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: ['إدارة الطلبات', 'الرد على الاستشارات', 'التقارير']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-md mx-auto min-h-screen flex flex-col safe-area-padding">
        {/* Enhanced header */}
        <div className="gradient-government px-8 py-16 rounded-b-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-transparent to-blue-800/10"></div>
          <div className="absolute top-12 left-12 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-gentle-float"></div>
          <div className="absolute bottom-8 right-16 w-24 h-24 bg-blue-300/8 rounded-full blur-lg animate-professional-pulse"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 glass-elevated rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
              <Shield className="w-12 h-12 text-blue-700 animate-professional-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">AdminFiles</h1>
            <div className="space-y-2 mb-4">
              <p className="text-blue-100 text-xl font-semibold">اختر نوع حسابك</p>
              <p className="text-blue-200 text-base">Choisissez votre type de compte</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block">
              <p className="text-white font-medium text-sm">خطوة واحدة للبدايه</p>
            </div>
          </div>
        </div>

        {/* User type selection cards */}
        <div className="flex-1 px-6 py-8 space-y-6">
          {/* First row - Citizen and Lawyer */}
          <div className="flex gap-4">
            {userTypes.slice(0, 2).map((type, index) => (
              <button
                key={type.id}
                onClick={() => onUserTypeSelect(type.id)}
                className={`flex-1 ${type.bgColor} border-2 ${type.borderColor} hover:shadow-xl active:scale-95 rounded-2xl p-4 transition-all duration-300 animate-fade-in group`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="text-center space-y-3">
                  <div className={`${type.gradient} text-white rounded-xl shadow-lg p-3 mx-auto w-fit group-hover:scale-105 transition-transform duration-300`}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{type.title}</h3>
                    <p className="text-xs text-gray-500 font-medium mb-2">{type.titleFr}</p>
                    <p className="text-gray-700 text-xs leading-relaxed mb-3">{type.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {type.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/80 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Second row - Administrative Officer */}
          <button
            onClick={() => onUserTypeSelect(userTypes[2].id)}
            className={`w-full ${userTypes[2].bgColor} border-2 ${userTypes[2].borderColor} hover:shadow-xl active:scale-95 rounded-2xl p-6 transition-all duration-300 animate-fade-in group`}
            style={{animationDelay: '0.3s'}}
          >
            <div className="flex items-center gap-5 text-right">
              <div className={`${userTypes[2].gradient} text-white rounded-2xl shadow-xl p-4 group-hover:scale-105 transition-transform duration-300`}>
                {userTypes[2].icon}
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{userTypes[2].title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{userTypes[2].titleFr}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{userTypes[2].description}</p>
                <div className="flex flex-wrap gap-2">
                  {userTypes[2].features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/80 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-2 group-hover:text-blue-600 transition-colors duration-300">
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
              </div>
            </div>
          </button>
        </div>

        {/* Enhanced security notice */}
        <div className="px-6 pb-8">
          <div className="glass-government rounded-2xl p-6 border border-blue-200/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 text-base mb-2">الأمان والحماية المضمونة</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  جميع بياناتك محمية ومشفرة وفقاً لأعلى معايير الأمان الحكومية المعتمدة
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 text-xs font-medium">معتمد من الحكومة الجزائرية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
