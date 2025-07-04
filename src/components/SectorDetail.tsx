import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, FileText, MapPin, Phone, AlertCircle, Download, Star, Users, CreditCard, Info } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import DocumentViewer from './DocumentViewer';

interface SectorDetailProps {
  sector: string;
  userType?: string;
  onBack: () => void;
}

interface Service {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  deadline: string;
  location: string;
  rating: number;
  completionRate: number;
  isPaid?: boolean;
  hasDownload?: boolean;
  hasTracking?: boolean;
  paymentMethods?: string[];
  requestType?: 'first_time' | 'renewal' | 'replacement';
  specialNotes?: string[];
}

interface SectorData {
  title: string;
  titleFr: string;
  icon: string;
  services: Service[];
}

const SectorDetail: React.FC<SectorDetailProps> = ({ sector, userType, onBack }) => {
  const { t, isRTL } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedRequestType, setSelectedRequestType] = useState<'first_time' | 'renewal' | 'replacement'>('first_time');

  const sectorData: Record<string, SectorData> = {
    local: {
      title: 'الإدارة المحلية - البلدية',
      titleFr: 'Administration Locale - Commune',
      icon: '🏛️',
      services: [
        {
          id: 'birth_certificate',
          name: 'شهادة الميلاد',
          description: 'استخراج شهادة ميلاد بالعربية أو الفرنسية',
          requirements: ['بطاقة التعريف الوطنية', 'صورة شمسية', 'وصل دفع الطابع'],
          deadline: '24-48 ساعة',
          location: 'مكتب الحالة المدنية - البلدية',
          rating: 4.5,
          completionRate: 95,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
        },
        {
          id: 'biometric_passport',
          name: 'طلب جواز السفر البيومتري',
          description: 'استخراج أو تجديد جواز السفر البيومتري الجديد',
          requirements: [],
          deadline: '15-30 يوم عمل',
          location: 'مصلحة جوازات السفر - الولاية',
          rating: 4.4,
          completionRate: 91,
          isPaid: true,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['وصل دفع 6,000 دج من قباضة الضرائب'],
          requestType: 'first_time',
          specialNotes: [
            'لا تُطلب شهادة الجنسية في حالة التجديد أو الضياع أو السرقة',
            'لا تُطلب شهادة الجنسية لحاملي بطاقة التعريف البيومترية'
          ]
        },
        {
          id: 'biometric_id_card',
          name: 'بطاقة التعريف البيومترية',
          description: 'استخراج أو تجديد بطاقة التعريف البيومترية',
          requirements: [
            'شهادة الميلاد S12',
            'شهادة إقامة',
            '2 صور شمسية حديثة',
            'شهادة مدرسية / عمل / بطالة حسب الحالة',
            'بطاقة فصيلة الدم'
          ],
          deadline: '10-15 يوم عمل',
          location: 'المصلحة البيومترية - البلدية',
          rating: 4.3,
          completionRate: 89,
          hasDownload: true,
          hasTracking: true,
          specialNotes: ['مجانية للطلبة والبطالين']
        },
        {
          id: 'social_housing',
          name: 'طلب السكن الاجتماعي',
          description: 'تقديم طلب للاستفادة من السكن الاجتماعي',
          requirements: [
            'استمارة طلب محررة ومصادق عليها',
            'بطاقة التعريف الوطنية',
            'شهادة عائلية',
            'شهادة دخل أو عدم العمل',
            'شهادة إقامة',
            'شهادة عدم امتلاك سكن',
            'كشف نقاط الأطفال المتمدرسين (إن وجد)'
          ],
          deadline: '30-60 يوم للدراسة الأولية',
          location: 'مصلحة السكن - البلدية',
          rating: 3.9,
          completionRate: 76,
          hasDownload: true,
          hasTracking: true,
          specialNotes: [
            'يجب أن يكون الدخل الشهري أقل من 6 أضعاف الأجر الوطني الأدنى المضمون',
            'عدم امتلاك سكن أو قطعة أرض صالحة للبناء',
            'الأولوية للعائلات الكبيرة والحالات الاجتماعية الصعبة'
          ]
        },
        {
          id: 'death_certificate',
          name: 'شهادة الوفاة',
          description: 'استخراج شهادة وفاة للمتوفى',
          requirements: ['بطاقة التعريف لطالب الشهادة', 'شهادة طبية بالوفاة', 'دفتر العائلة'],
          deadline: '24 ساعة',
          location: 'مكتب الحالة المدنية',
          rating: 4.6,
          completionRate: 98,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'residence_certificate',
          name: 'شهادة الإقامة',
          description: 'إثبات محل الإقامة للاستعمال الإداري',
          requirements: ['بطاقة التعريف', 'فاتورة كهرباء أو ماء حديثة', 'شاهدين مع بطاقاتهم'],
          deadline: '24-72 ساعة',
          location: 'مصلحة الشؤون الإدارية',
          rating: 4.3,
          completionRate: 92,
          hasDownload: true,
          hasTracking: true
        }
      ]
    },
    health: {
      title: 'قطاع الصحة',
      titleFr: 'Secteur Santé',
      icon: '🏥',
      services: [
        {
          id: 'chifa_card',
          name: 'بطاقة الشفاء',
          description: 'استخراج أو تجديد بطاقة الشفاء للتأمين الصحي',
          requirements: ['بطاقة التعريف', 'شهادة عمل أو تقاعد', 'صورة شمسية', 'استمارة محررة'],
          deadline: '10-15 يوم',
          location: 'صندوق الضمان الاجتماعي',
          rating: 4.3,
          completionRate: 91,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'medical_certificate',
          name: 'الشهادة الطبية',
          description: 'شهادة طبية للعمل أو الدراسة أو الإعفاءات',
          requirements: ['بطاقة التعريف', 'فحص طبي', 'صور طبية إن وجدت'],
          deadline: '24-48 ساعة',
          location: 'المستشفى أو العيادة المعتمدة',
          rating: 4.1,
          completionRate: 88,
          isPaid: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'medical_transfer',
          name: 'ملف النقل الصحي',
          description: 'طلب نقل صحي للعلاج في ولاية أخرى أو الخارج',
          requirements: ['ملف طبي كامل', 'تقرير طبي مفصل', 'طلب محرر', 'بطاقة الشفاء'],
          deadline: '15-30 يوم',
          location: 'مديرية الصحة - الولاية',
          rating: 3.7,
          completionRate: 68,
          hasTracking: true
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
          description: 'استخراج صحيفة السوابق العدلية رقم 3',
          requirements: ['بطاقة التعريف', 'صورة شمسية', 'طابع جبائي'],
          deadline: '3-7 أيام',
          location: 'المحكمة الابتدائية',
          rating: 4.4,
          completionRate: 89,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'نقدي']
        },
        {
          id: 'nationality_certificate',
          name: 'شهادة الجنسية الجزائرية',
          description: 'شهادة تثبت الجنسية الجزائرية',
          requirements: ['بطاقة التعريف', 'شهادة ميلاد', 'وثائق الوالدين', 'رسوم الطوابع'],
          deadline: '15-30 يوم',
          location: 'المحكمة الابتدائية',
          rating: 4.1,
          completionRate: 82,
          isPaid: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'legal_consultation',
          name: 'الاستشارة القانونية',
          description: 'استشارة قانونية متخصصة مع محامي مؤهل',
          requirements: ['وثائق القضية', 'بطاقة التعريف', 'وصف المشكلة القانونية'],
          deadline: '24-48 ساعة',
          location: 'استشارة إلكترونية أو مكتب المحاماة',
          isPaid: true,
          rating: 4.7,
          completionRate: 96,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
        },
        {
          id: 'court_sessions',
          name: 'مواعيد الجلسات',
          description: 'معرفة مواعيد الجلسات والقضايا المبرمجة',
          requirements: ['رقم القضية', 'بطاقة التعريف'],
          deadline: 'فوري',
          location: 'كتابة ضبط المحكمة',
          rating: 4.2,
          completionRate: 91,
          hasTracking: true
        },
        {
          id: 'divorce_certificate',
          name: 'شهادة الطلاق',
          description: 'استخراج شهادة طلاق معتمدة',
          requirements: ['حكم الطلاق', 'بطاقة التعريف', 'وصل دفع الطوابع'],
          deadline: '5-7 أيام',
          location: 'كتابة ضبط المحكمة',
          rating: 4.2,
          completionRate: 89,
          hasDownload: true,
          hasTracking: true
        }
      ]
    },
    education: {
      title: 'قطاع التعليم',
      titleFr: 'Secteur Éducation',
      icon: '🎓',
      services: [
        {
          id: 'school_certificate',
          name: 'الشهادة المدرسية',
          description: 'شهادة مدرسية للتلاميذ في جميع الأطوار',
          requirements: ['بطاقة التعريف للولي', 'دفتر التلميذ', 'طلب محرر'],
          deadline: '3-7 أيام',
          location: 'المؤسسة التعليمية',
          rating: 4.4,
          completionRate: 94,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'university_registration',
          name: 'شهادة التسجيل الجامعي',
          description: 'شهادة تسجيل في الجامعة أو المعهد العالي',
          requirements: ['بطاقة الطالب', 'شهادة البكالوريا', 'وصل دفع الرسوم'],
          deadline: '2-5 أيام',
          location: 'الجامعة أو المعهد',
          rating: 4.2,
          completionRate: 88,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'baccalaureate_certificate',
          name: 'شهادة البكالوريا',
          description: 'استخراج نسخة من شهادة البكالوريا',
          requirements: ['بطاقة التعريف', 'وصل دفع الطوابع', 'طلب محرر'],
          deadline: '7-15 يوم',
          location: 'مديرية التربية',
          rating: 4.3,
          completionRate: 91,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'scholarship',
          name: 'طلب المنحة الجامعية',
          description: 'التقديم للمنح الدراسية الداخلية أو الخارجية',
          requirements: ['استمارة المنحة', 'كشف النقاط', 'شهادة دخل الولي', 'ملف اجتماعي'],
          deadline: 'حسب فترات التقديم',
          location: 'الديوان الوطني للمنح الجامعية',
          rating: 4.0,
          completionRate: 65,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'diploma_equivalence',
          name: 'معادلة الشهادات',
          description: 'معادلة الشهادات الأجنبية بالشهادات الجزائرية',
          requirements: ['الشهادة الأصلية مترجمة', 'كشف النقاط مترجم', 'بطاقة التعريف', 'رسوم المعادلة'],
          deadline: '30-60 يوم',
          location: 'وزارة التعليم العالي',
          rating: 3.8,
          completionRate: 79,
          isPaid: true,
          hasDownload: true,
          hasTracking: true
        }
      ]
    },
    employment: {
      title: 'قطاع التشغيل',
      titleFr: 'Secteur Emploi',
      icon: '💼',
      services: [
        {
          id: 'anem_registration',
          name: 'التسجيل في وكالة التشغيل ANEM',
          description: 'تسجيل الباحثين عن العمل في ANEM',
          requirements: ['بطاقة التعريف', 'الشهادات', 'CV', 'صورة شمسية'],
          deadline: 'فوري',
          location: 'وكالة التشغيل المحلية',
          rating: 4.1,
          completionRate: 89,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'unemployment_certificate',
          name: 'شهادة البطالة',
          description: 'شهادة رسمية تثبت حالة البطالة',
          requirements: ['تسجيل في ANEM', 'بطاقة التعريف', 'شهادة عدم العمل'],
          deadline: '5-7 أيام',
          location: 'وكالة التشغيل',
          rating: 4.0,
          completionRate: 85,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'job_offers',
          name: 'متابعة عروض العمل',
          description: 'الاطلاع على عروض العمل المتاحة والتقديم عليها',
          requirements: ['تسجيل سابق في ANEM', 'CV محدث'],
          deadline: 'مستمر',
          location: 'موقع ANEM أو الوكالة',
          rating: 3.9,
          completionRate: 74,
          hasTracking: true
        },
        {
          id: 'professional_integration',
          name: 'برامج الإدماج المهني',
          description: 'الاستفادة من برامج التكوين والإدماج المهني',
          requirements: ['تسجيل في ANEM', 'مستوى تعليمي معين', 'سن محددة'],
          deadline: 'حسب دورات التكوين',
          location: 'مراكز التكوين المهني',
          rating: 4.2,
          completionRate: 81,
          hasDownload: true,
          hasTracking: true
        }
      ]
    },
    social: {
      title: 'الضمان الاجتماعي',
      titleFr: 'Sécurité Sociale',
      icon: '🛡️',
      services: [
        {
          id: 'cnas_registration',
          name: 'التسجيل في CNAS',
          description: 'تسجيل العمال الأجراء في صندوق الضمان الاجتماعي',
          requirements: ['عقد العمل', 'بطاقة التعريف', 'شهادة طبية', 'صور شمسية'],
          deadline: '7-10 أيام',
          location: 'وكالة CNAS المحلية',
          rating: 4.3,
          completionRate: 92,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'casnos_registration',
          name: 'التسجيل في CASNOS',
          description: 'تسجيل غير الأجراء في صندوق الضمان الاجتماعي',
          requirements: ['السجل التجاري', 'بطاقة التعريف', 'تصريح النشاط', 'صور شمسية'],
          deadline: '7-10 أيام',
          location: 'وكالة CASNOS المحلية',
          rating: 4.1,
          completionRate: 88,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'retirement_file',
          name: 'ملف التقاعد',
          description: 'تحضير ملف التقاعد والاستفادة من المعاش',
          requirements: ['شهادة عمل', 'كشف الأجور', 'بطاقة التعريف', 'شهادة ميلاد'],
          deadline: '30-60 يوم',
          location: 'صندوق التقاعد CNR',
          rating: 4.1,
          completionRate: 87,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'sick_leave',
          name: 'العطل المرضية',
          description: 'تعويض العطل المرضية والعجز المؤقت',
          requirements: ['شهادة طبية', 'تصريح العجز', 'بطاقة الشفاء'],
          deadline: '15-30 يوم',
          location: 'صندوق الضمان الاجتماعي',
          rating: 4.0,
          completionRate: 83,
          hasDownload: true,
          hasTracking: true
        }
      ]
    },
    postal: {
      title: 'البريد الجزائري',
      titleFr: 'Algérie Poste',
      icon: '📮',
      services: [
        {
          id: 'ccp_account',
          name: 'فتح حساب بريدي CCP',
          description: 'فتح حساب جاري بريدي للمعاملات المالية',
          requirements: ['بطاقة التعريف', 'شهادة إقامة', 'صورة شمسية', 'إيداع أولي'],
          deadline: '24-48 ساعة',
          location: 'مكتب البريد المحلي',
          rating: 4.2,
          completionRate: 94,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'golden_card',
          name: 'البطاقة الذهبية',
          description: 'بطاقة سحب إلكترونية للحساب البريدي',
          requirements: ['حساب CCP نشط', 'بطاقة التعريف', 'صورة شمسية'],
          deadline: '7-10 أيام',
          location: 'مكتب البريد',
          rating: 4.1,
          completionRate: 89,
          isPaid: true,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['Edahabia', 'BaridiMob', 'نقدي']
        },
        {
          id: 'checkbook',
          name: 'دفتر الشيكات',
          description: 'طلب دفتر شيكات للحساب البريدي',
          requirements: ['حساب CCP نشط', 'بطاقة التعريف', 'رصيد كافي'],
          deadline: '3-5 أيام',
          location: 'مكتب البريد',
          rating: 4.0,
          completionRate: 92,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'money_transfer',
          name: 'التحويلات المالية',
          description: 'إرسال واستقبال الأموال داخل الوطن وخارجه',
          requirements: ['بطاقة التعريف', 'رقم الحساب المستفيد', 'المبلغ + العمولة'],
          deadline: 'فوري',
          location: 'مكتب البريد',
          rating: 4.3,
          completionRate: 96,
          hasTracking: true,
          paymentMethods: ['Edahabia', 'BaridiMob', 'نقدي']
        }
      ]
    }
  };

  const getPassportRequirements = (requestType: string) => {
    const baseRequirements = [
      '2 صور شمسية حديثة بخلفية بيضاء',
      'بطاقة فصيلة الدم أو نسخة من رخصة السياقة',
      'شهادة عمل / بطالة / مدرسية حسب الحالة',
      'وصل دفع 6,000 دج من قباضة الضرائب'
    ];

    switch (requestType) {
      case 'first_time':
        return [
          'شهادة الجنسية (إلزامية لأول طلب)',
          'شهادة الإقامة (لمن تجاوز 19 سنة)',
          ...baseRequirements
        ];
      case 'renewal':
        return [
          'جواز السفر القديم',
          ...baseRequirements
        ];
      case 'replacement':
        return [
          'تصريح بالضياع أو السرقة من الشرطة',
          ...baseRequirements
        ];
      default:
        return baseRequirements;
    }
  };

  const currentSector = sectorData[sector];

  if (!currentSector) {
    return <div>قطاع غير موجود</div>;
  }

  const handleDownloadClick = (service: Service) => {
    setSelectedService(service);
    setShowDocumentViewer(true);
  };

  const handlePayment = (service: Service) => {
    alert(`تم تفعيل نظام الدفع الإلكتروني للخدمة: ${service.name}\nوسائل الدفع المتاحة: ${service.paymentMethods?.join(', ') || 'CIB, Edahabia'}`);
  };

  const handleTracking = (service: Service) => {
    alert(`تتبع الملف للخدمة: ${service.name}\nالحالة: قيد المعالجة\nالمدة المتبقية: ${service.deadline}`);
  };

  const renderService = (service: Service, index: number) => (
    <div
      key={service.id}
      className="card-enhanced p-6 animate-slide-up bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{service.name}</h3>
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
          <MapPin className="w-4 h-4 text-red-600" />
          <span className="text-sm text-gray-600">{service.location}</span>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-4 p-3 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{service.rating}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-gray-600">معدل الإنجاز {service.completionRate}%</span>
        </div>
      </div>

      {service.id === 'biometric_passport' && (
        <div className="mb-4 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm font-semibold text-blue-800 mb-3">نوع الطلب:</p>
          <div className="grid grid-cols-1 gap-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requestType"
                value="first_time"
                checked={selectedRequestType === 'first_time'}
                onChange={(e) => setSelectedRequestType(e.target.value as any)}
                className="text-blue-600"
              />
              <span className="text-sm text-blue-700">طلب أول مرة</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requestType"
                value="renewal"
                checked={selectedRequestType === 'renewal'}
                onChange={(e) => setSelectedRequestType(e.target.value as any)}
                className="text-blue-600"
              />
              <span className="text-sm text-blue-700">تجديد</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requestType"
                value="replacement"
                checked={selectedRequestType === 'replacement'}
                onChange={(e) => setSelectedRequestType(e.target.value as any)}
                className="text-blue-600"
              />
              <span className="text-sm text-blue-700">بدل ضائع أو مسروق</span>
            </label>
          </div>
        </div>
      )}

      <button
        onClick={() => setActiveService(activeService === service.id ? null : service.id)}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-base flex items-center justify-center gap-2 mb-3"
      >
        <Info className="w-5 h-5" />
        {activeService === service.id ? 'إخفاء التفاصيل' : 'عرض المتطلبات والتفاصيل'}
      </button>

      {activeService === service.id && (
        <div className="mt-4 p-4 bg-gray-50 rounded-2xl animate-slide-up">
          <h4 className="font-semibold text-gray-800 mb-3">المتطلبات:</h4>
          <ul className="space-y-2 mb-4">
            {(service.id === 'biometric_passport' ? getPassportRequirements(selectedRequestType) : service.requirements).map((req, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-700">{req}</span>
              </li>
            ))}
          </ul>

          {service.specialNotes && (
            <div className="mb-4 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-sm font-semibold text-yellow-800 mb-2">ملاحظات مهمة:</p>
              {service.specialNotes.map((note, i) => (
                <p key={i} className="text-sm text-yellow-700 mb-1">• {note}</p>
              ))}
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-3">
            {service.hasDownload && (
              <button 
                onClick={() => handleDownloadClick(service)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                تحميل النموذج
              </button>
            )}
            
            {service.hasTracking && (
              <button 
                onClick={() => handleTracking(service)}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                تتبع الملف
              </button>
            )}
            
            {service.isPaid && (
              <button 
                onClick={() => handlePayment(service)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2 col-span-2"
              >
                <CreditCard className="w-4 h-4" />
                دفع إلكتروني
              </button>
            )}
          </div>
          
          {service.paymentMethods && service.paymentMethods.length > 0 && (
            <div className="mt-3 p-3 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800 font-semibold mb-2">وسائل الدفع المتاحة:</p>
              <div className="flex flex-wrap gap-2">
                {service.paymentMethods.map((method, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (showDocumentViewer && selectedService) {
    return (
      <DocumentViewer
        isOpen={true}
        onClose={() => {
          setShowDocumentViewer(false);
          setSelectedService(null);
        }}
        service={selectedService}
      />
    );
  }

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
              <h1 className="text-2xl font-bold text-white mb-1">{currentSector.title}</h1>
              <p className="text-blue-200 text-sm">{currentSector.titleFr}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">الخدمات المتاحة</h2>
          {currentSector.services.map((service, index) => renderService(service, index))}
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
