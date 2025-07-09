
import React from 'react';
import { X, Bell, CheckCircle, AlertCircle, FileText, MessageSquare, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({ isOpen, onClose }) => {
  const { isRTL } = useLanguage();

  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'document_ready',
      title: 'وثيقة جاهزة للاستلام',
      message: 'شهادة الميلاد الخاصة بك جاهزة للاستلام من بلدية الجزائر الوسطى',
      time: 'منذ ساعتين',
      icon: <FileText className="w-5 h-5 text-green-600" />,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 2,
      type: 'consultation_reply',
      title: 'رد على استشارة قانونية',
      message: 'تم الرد على استشارتك القانونية حول قضية الميراث',
      time: 'منذ 4 ساعات',
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 3,
      type: 'appointment_reminder',
      title: 'تذكير بموعد',
      message: 'موعدك لاستلام بطاقة الشفاء غداً الساعة 10:00 صباحاً',
      time: 'منذ يوم',
      icon: <Clock className="w-5 h-5 text-orange-600" />,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 4,
      type: 'status_update',
      title: 'تحديث حالة طلب',
      message: 'تم قبول طلب رخصة السياقة وهو قيد المعالجة',
      time: 'منذ يومين',
      icon: <CheckCircle className="w-5 h-5 text-indigo-600" />,
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-md animate-scale-in max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">الإشعارات</h2>
                <p className="text-gray-500 text-sm">{notifications.length} إشعارات جديدة</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`${notification.bgColor} border ${notification.borderColor} rounded-xl p-4 transition-all duration-200 hover:shadow-md animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">
                      {notification.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                      {notification.message}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg"
            >
              إغلاق
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition-all duration-200 hover:bg-gray-50">
              تحديد الكل كمقروء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
