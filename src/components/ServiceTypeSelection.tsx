
import React from 'react';
import { Building2, Users, Shield, ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface ServiceTypeSelectionProps {
  onServiceTypeSelect: (serviceType: 'government' | 'private') => void;
}

const ServiceTypeSelection: React.FC<ServiceTypeSelectionProps> = ({ onServiceTypeSelect }) => {
  const { isRTL } = useLanguage();

  const serviceTypes = [
    {
      id: 'government',
      title: 'الخدمات الحكومية الرسمية',
      titleFr: 'Services Gouvernementaux Officiels',
      description: 'الوصول المباشر إلى جميع القطاعات الحكومية والخدمات الإدارية الرسمية للدولة الجزائرية',
      descriptionFr: 'Accès direct à tous les secteurs gouvernementaux et services administratifs officiels',
      icon: <Building2 className="w-8 h-8" />,
      gradient: 'from-blue-700 via-blue-800 to-blue-900',
      bgGradient: 'from-blue-50/90 to-indigo-50/70',
      borderColor: 'border-blue-200/50',
      features: [
        'وثائق رسمية معتمدة',
        'خدمات البلدية والولاية',
        'قطاعات العدالة والصحة',
        'التعليم والضمان الاجتماعي',
        'خدمات البريد والتشغيل',
        'الحالة المدنية والإدارة'
      ],
      badge: 'رسمي',
      priority: true
    },
    {
      id: 'private',
      title: 'الخدمات العامة والمساعدة',
      titleFr: 'Services Généraux et Assistance',
      description: 'خدمات الدعم والمساعدة الإدارية، الاستشارات، والخدمات التكميلية للمواطنين',
      descriptionFr: 'Services de soutien administratif, consultations et services complémentaires',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
      bgGradient: 'from-emerald-50/90 to-teal-50/70',
      borderColor: 'border-emerald-200/50',
      features: [
        'استشارات قانونية متخصصة',
        'خدمات الكاتب العمومي',
        'مساعدة في الإجراءات الإدارية',
        'خدمات الترجمة والتوثيق',
        'دعم تقني وإرشادات',
        'خدمات النقل والتوصيل'
      ],
      badge: 'مساعد',
      priority: false
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-lg mx-auto glass-government min-h-screen flex flex-col">
        {/* Professional Header */}
        <div className="relative overflow-hidden gradient-government p-8 pb-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-transparent to-blue-800/10"></div>
          <div className="absolute top-16 left-12 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-gentle-float"></div>
          <div className="absolute top-28 right-20 w-24 h-24 bg-blue-300/8 rounded-full blur-xl animate-professional-pulse"></div>
          <div className="absolute bottom-12 left-1/3 w-20 h-20 bg-indigo-300/6 rounded-full blur-lg animate-gentle-float" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 glass-elevated rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
              <Shield className="w-10 h-10 text-blue-700 animate-professional-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">AdminFiles</h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <p className="text-blue-100 text-lg font-medium">منصة الخدمات الإدارية الرقمية</p>
              <Star className="w-4 h-4 text-yellow-300" />
            </div>
            <p className="text-blue-200 text-sm">Plateforme de Services Administratifs Numériques</p>
            <div className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full inline-block">
              <p className="text-white text-xs font-medium">الجمهورية الجزائرية الديمقراطية الشعبية</p>
            </div>
          </div>
        </div>

        {/* Service Selection Section */}
        <div className="flex-1 p-8">
          <div className="text-center mb-10">
            <h2 className="title-government mb-3">اختر نوع الخدمة المطلوبة</h2>
            <p className="text-muted-government text-base leading-relaxed">حدد القطاع المناسب للحصول على الخدمات المطلوبة بسرعة وسهولة</p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            {serviceTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => onServiceTypeSelect(type.id as 'government' | 'private')}
                className={`w-full professional-card ${type.borderColor} p-6 relative overflow-hidden animate-slide-in-up group`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Priority badge */}
                {type.priority && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                    {type.badge}
                  </div>
                )}
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-50/30 to-transparent rounded-full translate-y-6 -translate-x-6 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className={`relative z-10 flex items-start gap-6 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  <div className={`p-4 bg-gradient-to-r ${type.gradient} text-white rounded-2xl shadow-xl group-hover:scale-105 group-hover:rotate-1 transition-all duration-400`}>
                    {type.icon}
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                        {type.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 font-medium">{type.titleFr}</p>
                      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {type.description}
                      </p>
                    </div>
                    
                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${type.gradient} rounded-full`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 glass-elevated rounded-xl group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    {isRTL ? (
                      <ArrowLeft className="w-5 h-5 text-blue-700 group-hover:text-blue-800 transition-colors duration-300" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-blue-700 group-hover:text-blue-800 transition-colors duration-300" />
                    )}
                  </div>
                </div>
                
                {/* Hover shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
          </div>

          {/* Professional info section */}
          <div className="mt-10 p-6 gradient-government-light rounded-2xl border border-blue-200/30 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/10 backdrop-blur-sm rounded-xl">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-blue-800 mb-2 text-base">منصة آمنة وموثوقة</h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  منصة AdminFiles هي خدمة رقمية آمنة ومتطورة تجمع جميع الخدمات الحكومية والإدارية 
                  في مكان واحد، مع ضمان الحماية الكاملة لبياناتك الشخصية
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-blue-600">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    آمن 100%
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    معتمد رسمياً
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    سهل الاستخدام
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeSelection;
