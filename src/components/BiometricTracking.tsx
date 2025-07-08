
import React, { useState } from 'react';
import { Search, Clock, CheckCircle, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface BiometricTrackingProps {
  serviceType: 'passport' | 'id';
  onBack: () => void;
}

const BiometricTracking: React.FC<BiometricTrackingProps> = ({ serviceType, onBack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const serviceName = serviceType === 'passport' ? 'جواز السفر البيومتري' : 'بطاقة التعريف البيومترية';
  
  const mockTrackingData = {
    'PP123456789': {
      status: 'ready',
      statusText: 'جاهز للاستلام',
      submittedDate: '2024-06-15',
      expectedDate: '2024-07-08',
      location: 'مديرية الجوازات - الجزائر الوسطى',
      steps: [
        { id: 1, title: 'تم استلام الطلب', date: '2024-06-15', completed: true },
        { id: 2, title: 'قيد المراجعة', date: '2024-06-18', completed: true },
        { id: 3, title: 'تم التصديق', date: '2024-06-25', completed: true },
        { id: 4, title: 'قيد الطباعة', date: '2024-07-02', completed: true },
        { id: 5, title: 'جاهز للاستلام', date: '2024-07-08', completed: true }
      ]
    },
    'ID987654321': {
      status: 'processing',
      statusText: 'قيد المعالجة',
      submittedDate: '2024-07-01',
      expectedDate: '2024-07-12',
      location: 'مركز الحالة المدنية - بئر مراد رايس',
      steps: [
        { id: 1, title: 'تم استلام الطلب', date: '2024-07-01', completed: true },
        { id: 2, title: 'قيد المراجعة', date: '2024-07-03', completed: true },
        { id: 3, title: 'تم التصديق', date: '2024-07-08', completed: false },
        { id: 4, title: 'قيد الطباعة', date: '', completed: false },
        { id: 5, title: 'جاهز للاستلام', date: '', completed: false }
      ]
    }
  };

  const handleSearch = () => {
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      const result = mockTrackingData[trackingNumber as keyof typeof mockTrackingData];
      setTrackingResult(result || null);
      setIsSearching(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'processing':
        return <Clock className="w-6 h-6 text-orange-500" />;
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'processing':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-md mx-auto glass-card min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-lg border-b border-gray-200">
          <div className="flex items-center gap-4 p-4">
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-gray-800">تتبع {serviceName}</h1>
              <p className="text-sm text-gray-600">تابع حالة طلبك</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Search Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4">البحث برقم التتبع</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رقم التتبع
                </label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder={serviceType === 'passport' ? "PP123456789" : "ID987654321"}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={isSearching || !trackingNumber.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSearching ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <Search className="w-5 h-5" />
                )}
                {isSearching ? 'جاري البحث...' : 'بحث'}
              </button>
            </div>
          </div>

          {/* Results Section */}
          {trackingResult && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                {getStatusIcon(trackingResult.status)}
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{serviceName}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(trackingResult.status)}`}>
                    {trackingResult.statusText}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">تاريخ التقديم</p>
                  <p className="font-semibold text-gray-800">{trackingResult.submittedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">التاريخ المتوقع</p>
                  <p className="font-semibold text-gray-800">{trackingResult.expectedDate}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">مكان الاستلام</p>
                <p className="font-semibold text-gray-800">{trackingResult.location}</p>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">مراحل المعالجة</h4>
                {trackingResult.steps.map((step: any, index: number) => (
                  <div key={step.id} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : index === trackingResult.steps.findIndex((s: any) => !s.completed)
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.id}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${step.completed ? 'text-gray-800' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                      {step.date && (
                        <p className="text-sm text-gray-500">{step.date}</p>
                      )}
                    </div>
                    {step.completed && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                ))}
              </div>

              {trackingResult.status === 'ready' && (
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="font-bold text-green-800">جاهز للاستلام!</p>
                  </div>
                  <p className="text-sm text-green-700">
                    يرجى الحضور إلى {trackingResult.location} لاستلام وثيقتك مع إحضار بطاقة التعريف الأصلية.
                  </p>
                </div>
              )}
            </div>
          )}

          {trackingResult === null && trackingNumber && !isSearching && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">لم يتم العثور على الطلب</h3>
              <p className="text-gray-600">
                تأكد من رقم التتبع المدخل أو تواصل مع الإدارة المختصة.
              </p>
            </div>
          )}

          {/* Demo Numbers */}
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">للتجربة استخدم:</h4>
            <div className="space-y-1 text-sm">
              <p className="text-blue-700">• PP123456789 (جواز جاهز)</p>
              <p className="text-blue-700">• ID987654321 (بطاقة قيد المعالجة)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiometricTracking;
