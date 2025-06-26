
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface Service {
  id: string;
  name: string;
  location: string;
  requirements: string[];
}

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
  service?: Service;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ isOpen, onClose, service }) => {
  const { isRTL } = useLanguage();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Default service if none provided
  const defaultService: Service = {
    id: 'default',
    name: 'خدمة عامة',
    location: 'الإدارة المحلية',
    requirements: ['بطاقة التعريف الوطنية']
  };

  const currentService = service || defaultService;

  const availableDates = [
    '2024-01-15',
    '2024-01-16',
    '2024-01-17',
    '2024-01-18',
    '2024-01-19'
  ];

  const availableTimes = [
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00'
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && fullName && phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">تم حجز الموعد بنجاح!</h2>
          <p className="text-gray-600 mb-2">موعدك محجوز ليوم {selectedDate}</p>
          <p className="text-gray-600 mb-4">الساعة {selectedTime}</p>
          <p className="text-sm text-gray-500">سيتم إرسال تأكيد عبر الرسائل النصية</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6">
          <div className="flex items-center gap-4 relative z-10">
            <button
              onClick={onClose}
              className="p-3 glass rounded-2xl shadow-lg hover-lift"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white mb-1">حجز موعد</h1>
              <p className="text-blue-200 text-sm">{currentService.name}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Service Info */}
          <div className="bg-blue-50 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800">الخدمة المطلوبة</h3>
            </div>
            <p className="text-blue-700 text-sm mb-1">{currentService.name}</p>
            <p className="text-blue-600 text-xs">{currentService.location}</p>
          </div>

          {/* Date Selection */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <label className="font-semibold text-gray-800">اختر التاريخ</label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {availableDates.map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    selectedDate === date
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {new Date(date).toLocaleDateString('ar-DZ')}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <label className="font-semibold text-gray-800">اختر الوقت</label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">المعلومات الشخصية</h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <label className="text-sm font-medium text-gray-700">الاسم الكامل</label>
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <label className="text-sm font-medium text-gray-700">رقم الهاتف</label>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0xxxxxxxxx"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <label className="text-sm font-medium text-gray-700">البريد الإلكتروني (اختياري)</label>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>
          </div>

          {/* Requirements Reminder */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">تذكير: يرجى إحضار</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              {currentService.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-yellow-600">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!selectedDate || !selectedTime || !fullName || !phone}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            تأكيد حجز الموعد
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
