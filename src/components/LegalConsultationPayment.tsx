
import React, { useState } from 'react';
import { X, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface LegalConsultationPaymentProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

const LegalConsultationPayment: React.FC<LegalConsultationPaymentProps> = ({ 
  isOpen, 
  onClose, 
  serviceType 
}) => {
  const { t, isRTL } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState('basic');

  if (!isOpen) return null;

  const consultationPlans = [
    {
      id: 'basic',
      name: 'استشارة أساسية',
      nameFr: 'Consultation de Base',
      price: '2,500',
      duration: '30 دقيقة',
      features: ['استشارة هاتفية', 'تقرير مكتوب', 'متابعة لمدة أسبوع'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'premium',
      name: 'استشارة متقدمة',
      nameFr: 'Consultation Avancée',
      price: '4,500',
      duration: '60 دقيقة',
      features: ['اجتماع بالفيديو', 'مراجعة الوثائق', 'خطة عمل قانونية', 'متابعة لشهر'],
      gradient: 'from-emerald-500 to-emerald-600',
      popular: true
    },
    {
      id: 'expert',
      name: 'استشارة خبير',
      nameFr: 'Consultation Expert',
      price: '7,500',
      duration: '90 دقيقة',
      features: ['محامي متخصص', 'لقاء شخصي', 'دراسة شاملة للقضية', 'متابعة لثلاثة أشهر'],
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const handlePayment = () => {
    // Here would be the actual payment processing
    console.log(`Processing payment for ${selectedPlan} consultation`);
    // Simulate successful payment
    setTimeout(() => {
      alert('تم الدفع بنجاح! سيتم التواصل معك قريباً');
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-md animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-thin ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">الاستشارة القانونية</h2>
                <p className="text-gray-500 text-sm">اختر نوع الخدمة المناسبة</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Plans */}
          <div className="space-y-4 mb-8">
            {consultationPlans.map((plan, index) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative cursor-pointer transition-all duration-300 rounded-2xl border-2 p-6 ${
                  selectedPlan === plan.id
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                } animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    الأكثر طلباً
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{plan.nameFr}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-500 text-sm">دج</span>
                      <span className="text-gray-400 text-xs">/ {plan.duration}</span>
                    </div>
                  </div>
                  <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center ${
                    selectedPlan === plan.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                  }`}>
                    {selectedPlan === plan.id && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Security Notice */}
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-xl">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-1">دفع آمن ومحمي</h4>
                <p className="text-green-700 text-sm">جميع المعاملات مشفرة ومحمية بأعلى معايير الأمان</p>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out"
          >
            متابعة الدفع - {consultationPlans.find(p => p.id === selectedPlan)?.price} دج
          </button>

          <p className="text-center text-gray-500 text-xs mt-4">
            بالمتابعة، أنت توافق على شروط الخدمة وسياسة الخصوصية
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalConsultationPayment;
