
import React, { useState } from 'react';
import { X, CreditCard, Download, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    price: number;
    code: string;
  };
}

type PaymentMethod = 'cib' | 'edahabia' | 'baridimob' | 'ccp';
type PaymentStep = 'details' | 'method' | 'payment' | 'result';

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, service }) => {
  const { t, isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState<PaymentStep>('details');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('cib');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<'success' | 'failed' | null>(null);

  const [formData, setFormData] = useState({
    cardNumber: '',
    holderName: '',
    expiryDate: '',
    cvv: '',
    ccpNumber: '',
    pin: ''
  });

  if (!isOpen) return null;

  const paymentMethods = [
    { id: 'cib', name: 'بطاقة CIB', icon: '💳' },
    { id: 'edahabia', name: 'بطاقة الذهبية', icon: '🏛️' },
    { id: 'baridimob', name: 'BaridiMob', icon: '📱' },
    { id: 'ccp', name: 'حساب CCP', icon: '🏦' }
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentResult(Math.random() > 0.2 ? 'success' : 'failed');
      setCurrentStep('result');
    }, 3000);
  };

  const handleDownloadReceipt = () => {
    // Simulate PDF download
    const receiptData = `
      إيصال دفع - AdminFiles
      ========================
      الخدمة: ${service.name}
      المبلغ: ${service.price} دج
      رمز الطلب: ${service.code}
      طريقة الدفع: ${paymentMethods.find(m => m.id === selectedMethod)?.name}
      التاريخ: ${new Date().toLocaleDateString('ar-DZ')}
      الحالة: مدفوع
    `;
    
    const blob = new Blob([receiptData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${service.code}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderStepDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">تأكيد تفاصيل الخدمة</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
      </div>
      
      <div className="professional-card p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">اسم الخدمة:</span>
          <span className="font-semibold text-gray-800">{service.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">المبلغ:</span>
          <span className="font-bold text-2xl text-green-600">{service.price} دج</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">رمز الطلب:</span>
          <span className="font-mono text-blue-600">{service.code}</span>
        </div>
      </div>
      
      <button
        onClick={() => setCurrentStep('method')}
        className="w-full government-button mobile-button"
      >
        متابعة إلى الدفع
      </button>
    </div>
  );

  const renderStepMethod = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">اختيار وسيلة الدفع</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
      </div>
      
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id as PaymentMethod)}
            className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 ${
              selectedMethod === method.id
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <span className="text-2xl">{method.icon}</span>
            <span className="font-semibold text-right flex-1">{method.name}</span>
            {selectedMethod === method.id && (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            )}
          </button>
        ))}
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep('details')}
          className="flex-1 secondary-button mobile-button"
        >
          السابق
        </button>
        <button
          onClick={() => setCurrentStep('payment')}
          className="flex-1 government-button mobile-button"
        >
          التالي
        </button>
      </div>
    </div>
  );

  const renderStepPayment = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">معلومات الدفع</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
      </div>
      
      <div className="professional-card p-6 space-y-4">
        {selectedMethod === 'ccp' ? (
          <>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">رقم حساب CCP</label>
              <input
                type="text"
                value={formData.ccpNumber}
                onChange={(e) => setFormData({...formData, ccpNumber: e.target.value})}
                placeholder="مثال: 1234567890"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">الرقم السري</label>
              <input
                type="password"
                value={formData.pin}
                onChange={(e) => setFormData({...formData, pin: e.target.value})}
                placeholder="••••"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">اسم حامل البطاقة</label>
              <input
                type="text"
                value={formData.holderName}
                onChange={(e) => setFormData({...formData, holderName: e.target.value})}
                placeholder="محمد فتاح"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">رقم البطاقة</label>
              <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                dir="ltr"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-2">تاريخ الانتهاء</label>
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  dir="ltr"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                <input
                  type="password"
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                  placeholder="123"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  dir="ltr"
                />
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep('method')}
          className="flex-1 secondary-button mobile-button"
        >
          السابق
        </button>
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="flex-1 government-button mobile-button disabled:opacity-50"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              جاري المعالجة...
            </div>
          ) : (
            'دفع الآن'
          )}
        </button>
      </div>
    </div>
  );

  const renderStepResult = () => (
    <div className="space-y-6 text-center">
      {paymentResult === 'success' ? (
        <>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">تم الدفع بنجاح!</h3>
            <p className="text-gray-600">تم تسجيل دفعتك وسيتم معالجة طلبك قريباً</p>
          </div>
          <div className="professional-card p-4 bg-green-50 border border-green-200">
            <p className="text-green-700 font-semibold">رقم المعاملة: TXN-{Date.now()}</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={handleDownloadReceipt}
              className="w-full flex items-center justify-center gap-2 secondary-button mobile-button"
            >
              <Download className="w-5 h-5" />
              تحميل الإيصال
            </button>
            <button
              onClick={onClose}
              className="w-full government-button mobile-button"
            >
              إغلاق
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">فشل في الدفع</h3>
            <p className="text-gray-600">حدث خطأ أثناء معالجة دفعتك، يرجى المحاولة مرة أخرى</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => {
                setCurrentStep('payment');
                setPaymentResult(null);
              }}
              className="w-full government-button mobile-button"
            >
              إعادة المحاولة
            </button>
            <button
              onClick={onClose}
              className="w-full secondary-button mobile-button"
            >
              إلغاء
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-100 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-gray-800">الدفع الإلكتروني</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          {currentStep === 'details' && renderStepDetails()}
          {currentStep === 'method' && renderStepMethod()}
          {currentStep === 'payment' && renderStepPayment()}
          {currentStep === 'result' && renderStepResult()}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
