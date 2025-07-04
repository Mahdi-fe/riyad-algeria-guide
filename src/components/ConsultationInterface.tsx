
import React, { useState } from 'react';
import { X, MessageSquare, Scale, FileText, CreditCard, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface ConsultationInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationInterface: React.FC<ConsultationInterfaceProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const { isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState('type'); // type, details, payment, success
  const [consultationType, setConsultationType] = useState<'legal' | 'administrative' | ''>('');
  const [consultationTitle, setConsultationTitle] = useState('');
  const [consultationDetails, setConsultationDetails] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('basic');

  if (!isOpen) return null;

  const consultationTypes = [
    {
      id: 'legal',
      name: 'الاستشارة القانونية',
      description: 'استشارة مع محام مختص في القانون الجزائري',
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'administrative',
      name: 'الاستشارة الإدارية',
      description: 'استشارة مع موظف إداري خبير في الإجراءات الحكومية',
      icon: <FileText className="w-8 h-8 text-green-600" />,
      color: 'from-green-500 to-green-600'
    }
  ];

  const paymentPlans = {
    legal: [
      {
        id: 'basic',
        name: 'استشارة أساسية',
        price: '2,500',
        duration: '30 دقيقة',
        features: ['استشارة هاتفية', 'تقرير مكتوب', 'متابعة لمدة أسبوع']
      },
      {
        id: 'premium',
        name: 'استشارة متقدمة',
        price: '4,500',
        duration: '60 دقيقة',
        features: ['اجتماع بالفيديو', 'مراجعة الوثائق', 'خطة عمل قانونية', 'متابعة لشهر'],
        popular: true
      }
    ],
    administrative: [
      {
        id: 'basic',
        name: 'استشارة أساسية',
        price: '1,500',
        duration: '30 دقيقة',
        features: ['رد خلال 24 ساعة', 'استشارة مكتوبة', 'متابعة لمدة أسبوع']
      },
      {
        id: 'premium',
        name: 'استشارة متقدمة',
        price: '2,500',
        duration: '45 دقيقة',
        features: ['رد خلال 6 ساعات', 'استشارة مفصلة', 'مكالمة هاتفية', 'متابعة لشهر'],
        popular: true
      }
    ]
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setCurrentStep('success');
    }, 1000);
  };

  const getCurrentPlans = () => {
    return consultationType ? paymentPlans[consultationType] : [];
  };

  const canProceedToDetails = consultationType && consultationTitle.trim() && consultationDetails.trim();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-2xl animate-scale-in max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">خدمة الاستشارات</h2>
                <p className="text-gray-500 text-sm">استشارات قانونية وإدارية مدفوعة</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Step 1: Type Selection */}
          {currentStep === 'type' && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">اختر نوع الاستشارة</h3>
              <div className="grid gap-4 mb-6">
                {consultationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConsultationType(type.id as 'legal' | 'administrative')}
                    className={`p-6 rounded-2xl border-2 transition-all text-right ${
                      consultationType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${type.color} bg-opacity-10`}>
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{type.name}</h4>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                      <div className={`w-6 h-6 border-2 rounded-full ${
                        consultationType === type.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                      }`}>
                        {consultationType === type.id && (
                          <CheckCircle className="w-4 h-4 text-white m-0.5" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-gray-800 font-semibold mb-2">عنوان الاستشارة</label>
                <input
                  type="text"
                  value={consultationTitle}
                  onChange={(e) => setConsultationTitle(e.target.value)}
                  placeholder="مثال: استفسار حول إجراءات الطلاق أو طلب شهادة الميلاد..."
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-800 font-semibold mb-2">تفاصيل الاستشارة</label>
                <textarea
                  value={consultationDetails}
                  onChange={(e) => setConsultationDetails(e.target.value)}
                  placeholder="اكتب تفاصيل مشكلتك أو استفسارك بوضوح... كلما كانت التفاصيل أكثر دقة، كانت الاستشارة أفضل."
                  rows={5}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                onClick={() => setCurrentStep('payment')}
                disabled={!canProceedToDetails}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                متابعة إلى الدفع
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2: Payment Selection */}
          {currentStep === 'payment' && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setCurrentStep('type')}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h3 className="text-lg font-bold text-gray-800">اختر خطة الاستشارة</h3>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <h4 className="font-bold text-gray-800 mb-2">ملخص الاستشارة:</h4>
                <p className="text-sm text-gray-600 mb-1"><strong>النوع:</strong> {consultationTypes.find(t => t.id === consultationType)?.name}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>العنوان:</strong> {consultationTitle}</p>
                <p className="text-sm text-gray-600"><strong>التفاصيل:</strong> {consultationDetails.substring(0, 100)}...</p>
              </div>

              <div className="space-y-4 mb-6">
                {getCurrentPlans().map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative cursor-pointer border-2 rounded-xl p-6 transition-all ${
                      selectedPlan === plan.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                        الأكثر طلباً
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{plan.name}</h4>
                        <p className="text-gray-500 text-sm mb-2">{plan.duration}</p>
                        <div className="flex items-center gap-1">
                          <span className="text-2xl font-bold text-gray-800">{plan.price}</span>
                          <span className="text-gray-500 text-sm">دج</span>
                        </div>
                      </div>
                      <div className={`w-6 h-6 border-2 rounded-full ${
                        selectedPlan === plan.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                      }`}>
                        {selectedPlan === plan.id && (
                          <CheckCircle className="w-4 h-4 text-white m-0.5" />
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-green-50 rounded-xl mb-6">
                <h4 className="font-bold text-green-800 mb-2">وسائل الدفع المتاحة:</h4>
                <div className="flex flex-wrap gap-2">
                  {['BaridiMob', 'Edahabia', 'CIB'].map((method) => (
                    <span key={method} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                دفع واستشارة - {getCurrentPlans().find(p => p.id === selectedPlan)?.price} دج
              </button>
            </div>
          )}

          {/* Step 3: Success */}
          {currentStep === 'success' && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">تم إرسال استشارتك بنجاح!</h3>
              <p className="text-gray-600 mb-6">
                سيقوم {consultationType === 'legal' ? 'المحامي المختص' : 'الموظف الإداري'} بمراجعة استشارتك والرد عليها في أقرب وقت ممكن.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>رقم الاستشارة:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <p className="text-blue-800 text-sm mt-1">
                  <strong>وقت الرد المتوقع:</strong> {consultationType === 'legal' ? '24-48 ساعة' : '6-24 ساعة'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-4 rounded-xl"
              >
                إغلاق
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationInterface;
