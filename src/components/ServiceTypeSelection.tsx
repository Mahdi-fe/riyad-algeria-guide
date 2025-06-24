
import React from 'react';
import { Building2, Users, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface ServiceTypeSelectionProps {
  onServiceTypeSelect: (serviceType: 'government' | 'private') => void;
}

const ServiceTypeSelection: React.FC<ServiceTypeSelectionProps> = ({ onServiceTypeSelect }) => {
  const { isRTL } = useLanguage();

  const serviceTypes = [
    {
      id: 'government',
      title: 'الخدمات الحكومية',
      titleFr: 'Services Gouvernementaux',
      description: 'الوصول إلى جميع القطاعات الحكومية والخدمات الإدارية الرسمية',
      descriptionFr: 'Accès à tous les secteurs gouvernementaux et services administratifs officiels',
      icon: <Building2 className="w-12 h-12" />,
      gradient: 'from-blue-500 via-indigo-600 to-purple-700',
      bgGradient: 'from-blue-50/80 to-indigo-100/60',
      features: ['وثائق رسمية', 'خدمات البلدية والولاية', 'العدالة والضمان الاجتماعي', 'التعليم والصحة']
    },
    {
      id: 'private',
      title: 'الخدمات الخاصة والعامة',
      titleFr: 'Services Privés et Généraux',
      description: 'الخدمات الخاصة، الاستشارات، والمساعدة في الإجراءات الإدارية',
      descriptionFr: 'Services privés, consultations et assistance administrative',
      icon: <Users className="w-12 h-12" />,
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      bgGradient: 'from-emerald-50/80 to-teal-100/60',
      features: ['استشارات قانونية', 'خدمات الكاتب العمومي', 'مساعدة إدارية', 'استشارات متخصصة']
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-lg mx-auto glass-card min-h-screen flex flex-col">
        {/* Enhanced Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-8 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-24 right-16 w-28 h-28 bg-indigo-300/10 rounded-full blur-xl animate-pulse-soft"></div>
          <div className="absolute bottom-8 left-1/3 w-24 h-24 bg-purple-300/8 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-3xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm shadow-lg">
              <Sparkles className="w-12 h-12 text-white animate-pulse-soft" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">AdminFiles</h1>
            <p className="text-blue-100 text-xl font-medium mb-2">منصة الخدمات الرقمية</p>
            <p className="text-blue-200 text-sm">Plateforme de Services Numériques</p>
          </div>
        </div>

        {/* Service Type Selection */}
        <div className="flex-1 p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">اختر نوع الخدمة</h2>
            <p className="text-gray-600 text-lg leading-relaxed">حدد نوع الخدمات التي تحتاجها للحصول على تجربة مخصصة</p>
          </div>

          <div className="space-y-6">
            {serviceTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => onServiceTypeSelect(type.id as 'government' | 'private')}
                className={`w-full bg-gradient-to-r ${type.bgGradient} border-2 border-transparent hover:border-blue-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-slide-up relative overflow-hidden`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className={`relative z-10 flex items-start gap-6 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  <div className={`p-5 bg-gradient-to-r ${type.gradient} text-white rounded-3xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {type.icon}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">{type.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{type.titleFr}</p>
                      <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{type.description}</p>
                    </div>
                    
                    {/* Features list */}
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    {isRTL ? (
                      <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    ) : (
                      <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    )}
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
          </div>

          {/* Info section */}
          <div className="mt-12 p-6 bg-gradient-to-r from-amber-50/80 to-orange-50/60 rounded-3xl border border-amber-200/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-200/70 rounded-2xl backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h4 className="font-bold text-amber-800 mb-2 text-lg">مرحباً بك في AdminFiles</h4>
                <p className="text-amber-700 text-sm leading-relaxed">منصة شاملة تجمع جميع الخدمات الحكومية والخاصة في مكان واحد، مع واجهة سهلة الاستخدام وآمنة تماماً</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeSelection;
