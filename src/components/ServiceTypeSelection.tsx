
import React from 'react';
import { Building2, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface ServiceTypeSelectionProps {
  onServiceTypeSelect: (serviceType: string) => void;
}

const ServiceTypeSelection: React.FC<ServiceTypeSelectionProps> = ({ onServiceTypeSelect }) => {
  const { isRTL } = useLanguage();

  const serviceTypes = [
    {
      id: 'government',
      title: 'الخدمات الحكومية الرسمية',
      titleFr: 'Services Gouvernementaux Officiels',
      description: 'جميع الخدمات الإدارية الحكومية الجزائرية',
      descriptionFr: 'Tous les services administratifs gouvernementaux algériens',
      features: [
        'الإدارة المحلية (البلدية والولاية)',
        'قطاع الصحة والضمان الاجتماعي',
        'قطاع العدالة والقضاء',
        'قطاع التعليم والتكوين',
        'البريد الجزائري والخدمات المالية'
      ],
      icon: <Shield className="w-12 h-12" />,
      gradient: 'from-blue-600 to-indigo-700',
      bgGradient: 'from-blue-50 to-indigo-100',
      recommended: true
    },
    {
      id: 'private',
      title: 'الخدمات الخاصة والاستشارات',
      titleFr: 'Services Privés et Consultations',
      description: 'الخدمات المهنية والاستشارات القانونية',
      descriptionFr: 'Services professionnels et consultations juridiques',
      features: [
        'الاستشارات القانونية المدفوعة',
        'خدمات المحاماة والتوثيق',
        'الخدمات المصرفية الخاصة',
        'التأمين والخدمات المالية'
      ],
      icon: <Building2 className="w-12 h-12" />,
      gradient: 'from-emerald-600 to-green-700',
      bgGradient: 'from-emerald-50 to-green-100',
      recommended: false
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="w-full min-h-screen flex flex-col safe-area-padding">
        {/* Mobile header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-8 pb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/5 rounded-full blur-lg animate-gentle-float"></div>
          <div className="absolute top-12 right-12 w-20 h-20 bg-indigo-300/10 rounded-full blur-md animate-professional-pulse"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">AdminFiles</h1>
            <p className="text-blue-100 text-base font-medium">اختر نوع الخدمة المطلوبة</p>
            <p className="text-blue-200 text-xs mt-1">Choisissez le type de service souhaité</p>
          </div>
        </div>

        {/* Mobile-optimized content */}
        <div className="flex-1 px-6 py-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">نوع الخدمة</h2>
            <p className="text-gray-600 text-sm">اختر نوع الخدمات التي تحتاجها</p>
          </div>

          <div className="space-y-6">
            {serviceTypes.map((service, index) => (
              <button
                key={service.id}
                onClick={() => onServiceTypeSelect(service.id)}
                className={`w-full bg-gradient-to-r ${service.bgGradient} border-2 border-transparent hover:border-blue-200 active:border-blue-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg active:scale-95 group animate-slide-up relative overflow-hidden`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Recommended badge */}
                {service.recommended && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    مُوصى به
                  </div>
                )}

                <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`p-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl shadow-lg group-hover:scale-105 group-active:scale-100 transition-transform duration-300 mx-auto mb-4 w-fit`}>
                    {service.icon}
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{service.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{service.titleFr}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                    <span>اختر هذا النوع</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-200 rounded-lg">
                <Shield className="w-4 h-4 text-green-700" />
              </div>
              <div>
                <h4 className="font-semibold text-green-800 text-sm mb-1">أمان وموثوقية</h4>
                <p className="text-green-700 text-xs">جميع الخدمات معتمدة ومصرح بها من الجهات الحكومية المختصة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeSelection;
