
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, FileText, MapPin, Phone, AlertCircle, Download, Calendar } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SectorDetailProps {
  sector: string;
  onBack: () => void;
}

const SectorDetail: React.FC<SectorDetailProps> = ({ sector, onBack }) => {
  const { t, isRTL } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  const sectorData = {
    local: {
      title: 'الإدارة المحلية',
      titleFr: 'Administration Locale',
      icon: '🏛️',
      services: [
        {
          id: 'birth_certificate',
          name: 'شهادة الميلاد',
          nameFr: 'Acte de Naissance',
          description: 'استخراج نسخة من شهادة الميلاد',
          requirements: ['بطاقة التعريف الوطنية', 'صورة شمسية', 'دفع الرسوم'],
          deadline: '24 ساعة',
          fee: '200 دج',
          location: 'مكتب الحالة المدنية - البلدية'
        },
        {
          id: 'residence_certificate',
          name: 'شهادة الإقامة',
          nameFr: 'Certificat de Résidence',
          description: 'إثبات محل الإقامة',
          requirements: ['بطاقة التعريف', 'فاتورة كهرباء حديثة', 'شاهدين'],
          deadline: '48 ساعة',
          fee: '150 دج',
          location: 'مصلحة الشؤون الإدارية'
        }
      ]
    },
    justice: {
      title: 'قطاع العدالة',
      titleFr: 'Secteur Justice',
      icon: '⚖️',
      services: [
        {
          id: 'criminal_record',
          name: 'صحيفة السوابق العدلية',
          nameFr: 'Casier Judiciaire',
          description: 'استخراج صحيفة السوابق العدلية',
          requirements: ['بطاقة التعريف', 'صورة شمسية', 'طابع جبائي'],
          deadline: '7 أيام',
          fee: '300 دج',
          location: 'المحكمة الابتدائية'
        },
        {
          id: 'legal_consultation',
          name: 'الاستشارة القانونية المدفوعة',
          nameFr: 'Consultation Juridique Payante',
          description: 'استشارة قانونية متخصصة مع محامي مؤهل',
          requirements: ['وثائق القضية', 'بطاقة التعريف'],
          deadline: 'فوري',
          fee: 'حسب نوع الخدمة',
          location: 'عبر التطبيق أو مكتب المحامي',
          isPaid: true
        }
      ]
    },
    health: {
      title: 'قطاع الصحة',
      titleFr: 'Secteur Santé',
      icon: '🏥',
      services: [
        {
          id: 'medical_appointment',
          name: 'حجز موعد طبي',
          nameFr: 'Rendez-vous Médical',
          description: 'حجز موعد مع طبيب مختص',
          requirements: ['بطاقة التأمين الصحي', 'بطاقة التعريف'],
          deadline: 'حسب التوفر',
          fee: 'مجاني للمؤمنين',
          location: 'المستشفى أو العيادة المختارة'
        },
        {
          id: 'health_certificate',
          name: 'شهادة طبية',
          nameFr: 'Certificat Médical',
          description: 'استخراج شهادة طبية للعمل أو الدراسة',
          requirements: ['بطاقة التعريف', 'فحص طبي'],
          deadline: '2-3 أيام',
          fee: '500 دج',
          location: 'المستشفى العمومي'
        }
      ]
    }
  };

  const currentSector = sectorData[sector as keyof typeof sectorData];

  if (!currentSector) {
    return <div>قطاع غير موجود</div>;
  }

  const handlePaymentForLegalConsultation = (serviceType: string) => {
    // This would open payment modal for legal consultation only
    console.log(`Opening payment for legal consultation: ${serviceType}`);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md mx-auto glass-card min-h-screen">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6">
          <div className="flex items-center gap-4 relative z-10">
            <button
              onClick={onBack}
              className="p-3 glass rounded-2xl shadow-lg hover-lift"
            >
              {isRTL ? (
                <ArrowRight className="w-6 h-6 text-white" />
              ) : (
                <ArrowLeft className="w-6 h-6 text-white" />
              )}
            </button>
            <div className="flex-1">
              <div className="text-4xl mb-2">{currentSector.icon}</div>
              <h1 className="text-2xl font-bold text-white">{currentSector.title}</h1>
              <p className="text-blue-200 text-sm">{currentSector.titleFr}</p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">الخدمات المتاحة</h2>
          
          {currentSector.services.map((service, index) => (
            <div
              key={service.id}
              className="card-enhanced p-6 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{service.nameFr}</p>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                {service.isPaid && (
                  <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-semibold">
                    مدفوع
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">{service.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">{service.fee}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-600">{service.location}</span>
              </div>

              <button
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className="w-full btn-primary text-sm py-3"
              >
                {activeService === service.id ? 'إخفاء التفاصيل' : 'عرض المتطلبات والتفاصيل'}
              </button>

              {activeService === service.id && (
                <div className="mt-4 p-4 bg-gray-50 rounded-2xl animate-slide-up">
                  <h4 className="font-semibold text-gray-800 mb-3">المتطلبات:</h4>
                  <ul className="space-y-2 mb-4">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 btn-secondary text-sm py-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      حجز موعد
                    </button>
                    {service.isPaid ? (
                      <button
                        onClick={() => handlePaymentForLegalConsultation(service.id)}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm"
                      >
                        دفع وحجز
                      </button>
                    ) : (
                      <button className="flex-1 btn-primary text-sm py-3">
                        <Download className="w-4 h-4 mr-2" />
                        تحميل النموذج
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="p-6">
          <div className="card-enhanced p-4 bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-red-800">حالة طارئة؟</h4>
                <p className="text-red-600 text-sm">اتصل برقم الطوارئ المناسب</p>
              </div>
              <button className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorDetail;
