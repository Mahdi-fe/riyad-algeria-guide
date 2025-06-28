
import React, { useState } from 'react';
import { X, Search, FileText, CreditCard, CheckCircle, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface AdministrativeConsultationProps {
  isOpen: boolean;
  onClose: () => void;
  userType?: string;
}

const AdministrativeConsultation: React.FC<AdministrativeConsultationProps> = ({ 
  isOpen, 
  onClose, 
  userType 
}) => {
  const { isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState('topics'); // topics, content, payment, success
  const [selectedTopic, setSelectedTopic] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [consultationText, setConsultationText] = useState('');
  const [paymentPlan, setPaymentPlan] = useState('basic');

  if (!isOpen) return null;

  const consultationTopics = [
    { id: 'documents', name: 'الوثائق الإدارية', description: 'استفسارات حول الوثائق المطلوبة والإجراءات' },
    { id: 'procedures', name: 'الإجراءات الإدارية', description: 'كيفية إتمام المعاملات الحكومية' },
    { id: 'rights', name: 'الحقوق الإدارية', description: 'حقوقك في التعامل مع الإدارات العمومية' },
    { id: 'complaints', name: 'الشكاوى الإدارية', description: 'كيفية تقديم الشكاوى والطعون' },
    { id: 'services', name: 'الخدمات العامة', description: 'معلومات حول الخدمات الحكومية المتاحة' },
    { id: 'general', name: 'استشارة عامة', description: 'أسئلة عامة حول الإدارة العمومية' }
  ];

  const paymentPlans = [
    {
      id: 'basic',
      name: 'استشارة أساسية',
      price: '1,500',
      features: ['رد خلال 24 ساعة', 'استشارة مكتوبة', 'متابعة لمدة أسبوع']
    },
    {
      id: 'premium',
      name: 'استشارة متقدمة',
      price: '2,500',
      features: ['رد خلال 6 ساعات', 'استشارة مفصلة', 'مكالمة هاتفية', 'متابعة لشهر'],
      popular: true
    }
  ];

  const filteredTopics = consultationTopics.filter(topic =>
    topic.name.includes(searchQuery) || topic.description.includes(searchQuery)
  );

  const handlePayment = () => {
    // معالجة الدفع
    setTimeout(() => {
      setCurrentStep('success');
    }, 1000);
  };

  const renderOfficerInterface = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">الاستشارات الإدارية الواردة</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">استشارة حول الوثائق الإدارية</h3>
              <p className="text-sm text-gray-500 mt-1">منذ ساعتين • أحمد محمد</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">قيد المراجعة</span>
          </div>
          <p className="text-gray-700 text-sm mb-4">
            أحتاج معرفة الوثائق المطلوبة لاستخراج شهادة إقامة جديدة...
          </p>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
              الرد على الاستشارة
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
              طلب توضيح
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">الإجراءات الإدارية</h3>
              <p className="text-sm text-gray-500 mt-1">منذ 4 ساعات • فاطمة علي</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">تم الرد</span>
          </div>
          <p className="text-gray-700 text-sm mb-4">
            كيف يمكنني تقديم طلب للحصول على رخصة تجارية...
          </p>
          <button className="text-blue-600 text-sm font-medium">
            عرض التفاصيل والرد
          </button>
        </div>
      </div>
    </div>
  );

  if (userType === 'officer') {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className={`glass-card w-full max-w-2xl animate-scale-in max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">لوحة تحكم الاستشارات الإدارية</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>
          {renderOfficerInterface()}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-md animate-scale-in max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">الاستشارات الإدارية</h2>
                <p className="text-gray-500 text-sm">خدمة مدفوعة متخصصة</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Topics Selection */}
          {currentStep === 'topics' && (
            <div>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="ابحث عن موضوع الاستشارة..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {filteredTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`w-full text-right p-4 rounded-xl border-2 transition-all ${
                      selectedTopic === topic.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-800 mb-1">{topic.name}</h3>
                    <p className="text-sm text-gray-600">{topic.description}</p>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentStep('content')}
                disabled={!selectedTopic}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                متابعة
              </button>
            </div>
          )}

          {/* Content Input */}
          {currentStep === 'content' && (
            <div>
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-4">اكتب استشارتك</h3>
                <textarea
                  value={consultationText}
                  onChange={(e) => setConsultationText(e.target.value)}
                  placeholder="اكتب تفاصيل استشارتك هنا... كن مفصلاً قدر الإمكان للحصول على أفضل إجابة."
                  className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep('topics')}
                  className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl"
                >
                  السابق
                </button>
                <button
                  onClick={() => setCurrentStep('payment')}
                  disabled={!consultationText.trim()}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  متابعة
                </button>
              </div>
            </div>
          )}

          {/* Payment Selection */}
          {currentStep === 'payment' && (
            <div>
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-4">اختر خطة الاستشارة</h3>
                <div className="space-y-3">
                  {paymentPlans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setPaymentPlan(plan.id)}
                      className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all ${
                        paymentPlan === plan.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          الأكثر طلباً
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800">{plan.name}</h4>
                          <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-gray-800">{plan.price}</span>
                            <span className="text-gray-500 text-sm">دج</span>
                          </div>
                        </div>
                        <div className={`w-5 h-5 border-2 rounded-full ${
                          paymentPlan === plan.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                        }`}>
                          {paymentPlan === plan.id && (
                            <CheckCircle className="w-3 h-3 text-white m-0.5" />
                          )}
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep('content')}
                  className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl"
                >
                  السابق
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  دفع واستشارة
                </button>
              </div>
            </div>
          )}

          {/* Success */}
          {currentStep === 'success' && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">تم إرسال استشارتك!</h3>
              <p className="text-gray-600 mb-6">
                سيقوم فريق الخبراء الإداريين بمراجعة استشارتك والرد عليها خلال المدة المحددة.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl"
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

export default AdministrativeConsultation;
