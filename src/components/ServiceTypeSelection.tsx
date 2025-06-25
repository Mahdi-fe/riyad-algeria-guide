
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
      gradient: 'bg-gradient-to-br from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
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
      gradient: 'bg-gradient-to-br from-emerald-600 to-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      recommended: false
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
            <p className="text-blue-100 text-lg font-medium">اختر نوع الخدمة المطلوبة</p>
            <p className="text-blue-200 text-sm mt-1">Choisissez le type de service souhaité</p>
          </div>
        </div>

        {/* Service type cards */}
        <div className="flex-1 px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">نوع الخدمة</h2>
            <p className="text-gray-600 text-base">اختر نوع الخدمات التي تحتاجها</p>
          </div>

          <div className="space-y-6">
            {serviceTypes.map((service, index) => (
              <button
                key={service.id}
                onClick={() => onServiceTypeSelect(service.id)}
                className={`w-full ${service.bgColor} border-2 ${service.borderColor} hover:shadow-lg active:scale-95 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Recommended badge */}
                {service.recommended && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3" />
                    مُوصى به
                  </div>
                )}

                <div className="text-center">
                  <div className={`${service.gradient} text-white rounded-3xl shadow-xl p-6 mx-auto mb-6 w-fit`}>
                    {service.icon}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{service.titleFr}</p>
                    <p className="text-gray-700 text-base leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-right">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-3 text-blue-600 font-bold text-lg">
                    <span>اختر هذا النوع</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-200 rounded-xl">
                <Shield className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-base mb-2">أمان وموثوقية</h4>
                <p className="text-green-700 text-sm leading-relaxed">جميع الخدمات معتمدة ومصرح بها من الجهات الحكومية المختصة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeSelection;
