
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, MapPin, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface Service {
  id: string;
  name: string;
  location: string;
  fee: string;
}

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
  service?: Service;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ isOpen, onClose, service }) => {
  const { isRTL } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isBooked, setIsBooked] = useState(false);

  // Default service if none provided
  const defaultService: Service = {
    id: 'default',
    name: 'حجز موعد عام',
    location: 'الإدارة المحلية',
    fee: 'مجاني'
  };

  const currentService = service || defaultService;

  if (!isOpen) return null;

  // Generate next 14 days for appointment booking
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Fridays (5) and Saturdays (6) for government services
      if (date.getDay() !== 5 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('ar-DZ', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    return dates;
  };

  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30'
  ];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime && fullName && phoneNumber) {
      setIsBooked(true);
      // Here you would normally send the booking to a backend
      setTimeout(() => {
        setIsBooked(false);
        onClose();
      }, 3000);
    }
  };

  if (isBooked) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-sm w-full animate-fade-in-scale">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">تم الحجز بنجاح!</h2>
          <p className="text-gray-600 mb-6">
            تم حجز موعدك بنجاح. ستتلقى رسالة تأكيد قريباً.
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>الخدمة:</strong> {currentService.name}
            </p>
            <p className="text-sm text-gray-700">
              <strong>التاريخ:</strong> {selectedDate}
            </p>
            <p className="text-sm text-gray-700">
              <strong>الوقت:</strong> {selectedTime}
            </p>
          </div>
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

        <div className="p-6 space-y-6">
          {/* Service Info */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-800">تفاصيل الخدمة</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">{currentService.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">الرسوم: {currentService.fee}</span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-800">المعلومات الشخصية</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="0555 123 456"
                />
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-800">اختر التاريخ</h2>
            </div>
            <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
              {getAvailableDates().map((date) => (
                <button
                  key={date.value}
                  onClick={() => setSelectedDate(date.value)}
                  className={`p-3 text-right rounded-xl border transition-all ${
                    selectedDate === date.value 
                      ? 'bg-blue-500 text-white border-blue-500' 
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-800">اختر الوقت</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-xl border transition-all ${
                    selectedTime === time 
                      ? 'bg-blue-500 text-white border-blue-500' 
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">تنبيه مهم:</p>
                <p>يرجى الحضور في الموعد المحدد مع جميع الوثائق المطلوبة. في حالة التأخير أكثر من 15 دقيقة، قد يتم إلغاء الموعد.</p>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBookAppointment}
            disabled={!selectedDate || !selectedTime || !fullName || !phoneNumber}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out disabled:transform-none disabled:shadow-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            تأكيد الحجز
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
