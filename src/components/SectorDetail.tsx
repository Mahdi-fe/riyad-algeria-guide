import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, FileText, MapPin, Phone, AlertCircle, Download, Calendar, Star, Users, Building, CreditCard, Info } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import AppointmentBooking from './AppointmentBooking';
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
  fee: string;
  location: string;
  rating: number;
  completionRate: number;
  isPaid?: boolean;
  hasAppointment?: boolean;
  hasDownload?: boolean;
}

interface Subsection {
  id: string;
  name: string;
  services: Service[];
}

interface SectorWithSubsections {
  title: string;
  titleFr: string;
  icon: string;
  subsections: Subsection[];
}

interface SectorWithServices {
  title: string;
  titleFr: string;
  icon: string;
  services: Service[];
}

type SectorData = SectorWithSubsections | SectorWithServices;

const SectorDetail: React.FC<SectorDetailProps> = ({ sector, userType, onBack }) => {
  const { t, isRTL } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [showAppointmentBooking, setShowAppointmentBooking] = useState(false);
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const sectorData: Record<string, SectorData> = {
    local: {
      title: 'الإدارة المحلية',
      titleFr: 'Administration Locale',
      icon: '🏛️',
      subsections: [
        {
          id: 'biometric',
          name: 'المصلحة البيومترية',
          services: [
            {
              id: 'passport_biometric',
              name: 'جواز السفر البيومتري',
              description: 'استخراج أو تجديد جواز السفر البيومتري الجديد',
              requirements: ['بطاقة التعريف', '4 صور بيومترية', 'شهادة ميلاد S12', 'وصل دفع (6000 دج)'],
              deadline: '15 يوم عمل',
              fee: '6000 دج',
              location: 'المصلحة البيومترية - الولاية',
              rating: 4.5,
              completionRate: 92,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'national_id_biometric',
              name: 'بطاقة التعريف الوطنية البيومترية',
              description: 'استخراج أو تجديد بطاقة التعريف البيومترية الجديدة',
              requirements: ['شهادة ميلاد', '2 صورة بيومترية', 'شهادة إقامة', 'وصل دفع (1000 دج)'],
              deadline: '10 أيام عمل',
              fee: '1000 دج',
              location: 'المصلحة البيومترية - الولاية',
              rating: 4.3,
              completionRate: 89,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'birth_certificate_s12',
              name: 'شهادة الميلاد S12',
              description: 'شهادة ميلاد خاصة بالمعاملات البيومترية',
              requirements: ['بطاقة التعريف', 'طلب محرر', 'وصل دفع (200 دج)'],
              deadline: '48-72 ساعة',
              fee: '200 دج',
              location: 'مكتب الحالة المدنية - البلدية',
              rating: 4.6,
              completionRate: 95,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'biometric_status',
              name: 'تتبع حالة الطلب البيومتري',
              description: 'متابعة حالة طلبات الوثائق البيومترية',
              requirements: ['رقم الوصل', 'بطاقة التعريف'],
              deadline: 'فوري',
              fee: 'مجاني',
              location: 'عبر التطبيق أو المصلحة',
              rating: 4.7,
              completionRate: 98,
              hasDownload: false
            },
            {
              id: 'biometric_appointment',
              name: 'حجز موعد للإيداع البيومتري',
              description: 'حجز موعد لإيداع ملف الوثائق البيومترية',
              requirements: ['الملف كاملاً', 'بطاقة التعريف'],
              deadline: 'حسب التوفر',
              fee: 'مجاني',
              location: 'المصلحة البيومترية',
              rating: 4.4,
              completionRate: 85,
              hasAppointment: true,
              hasDownload: false
            }
          ]
        },
        {
          id: 'commune',
          name: 'البلدية (Commune)',
          services: [
            {
              id: 'birth_certificate',
              name: 'شهادة الميلاد',
              description: 'استخراج شهادة ميلاد بالعربية أو الفرنسية',
              requirements: ['بطاقة التعريف الوطنية', 'صورة شمسية', 'وصل دفع الطابع (100 دج)'],
              deadline: '24-48 ساعة',
              fee: '100 دج',
              location: 'مكتب الحالة المدنية - البلدية',
              rating: 4.5,
              completionRate: 95,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'residence_certificate',
              name: 'شهادة الإقامة',
              description: 'إثبات محل الإقامة للاستعمال الإداري',
              requirements: ['بطاقة التعريف', 'فاتورة كهرباء أو ماء حديثة', 'شاهدين مع بطاقاتهم'],
              deadline: '24-72 ساعة',
              fee: '150 دج',
              location: 'مصلحة الشؤون الإدارية',
              rating: 4.3,
              completionRate: 92,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'death_certificate',
              name: 'شهادة الوفاة',
              description: 'استخراج شهادة وفاة للمتوفى',
              requirements: ['بطاقة التعريف لطالب الشهادة', 'شهادة طبية بالوفاة', 'دفتر العائلة'],
              deadline: '24 ساعة',
              fee: '100 دج',
              location: 'مكتب الحالة المدنية',
              rating: 4.6,
              completionRate: 98,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'marriage_certificate',
              name: 'شهادة الزواج أو العزوبة',
              description: 'شهادة تثبت الحالة الاجتماعية',
              requirements: ['بطاقة التعريف', 'صورة شمسية', 'شاهدين (للعزوبة)'],
              deadline: '48 ساعة',
              fee: '150 دج',
              location: 'مكتب الحالة المدنية',
              rating: 4.4,
              completionRate: 93,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'social_housing',
              name: 'ملف السكن الاجتماعي',
              description: 'تقديم طلب سكن اجتماعي',
              requirements: ['استمارة محررة', 'بطاقة التعريف', 'شهادة دخل', 'شهادة إقامة', 'شهادة عائلية'],
              deadline: '30 يوم للدراسة',
              fee: 'مجاني',
              location: 'مصلحة السكن - البلدية',
              rating: 3.8,
              completionRate: 75,
              hasAppointment: true,
              hasDownload: false
            }
          ]
        },
        {
          id: 'wilaya',
          name: 'الولاية (Wilaya)',
          services: [
            {
              id: 'passport',
              name: 'جواز السفر البيومتري',
              description: 'استخراج أو تجديد جواز السفر',
              requirements: ['بطاقة التعريف', '4 صور بيومترية', 'شهادة ميلاد S12', 'وصل دفع (6000 دج)'],
              deadline: '15 يوم عمل',
              fee: '6000 دج',
              location: 'مصلحة جوازات السفر - الولاية',
              rating: 4.2,
              completionRate: 89,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'national_id',
              name: 'بطاقة التعريف الوطنية',
              description: 'استخراج أو تجديد بطاقة التعريف البيومترية',
              requirements: ['شهادة ميلاد', '2 صورة بيومترية', 'شهادة إقامة', 'وصل دفع (1000 دج)'],
              deadline: '10 أيام عمل',
              fee: '1000 دج',
              location: 'مصلحة بطاقات التعريف - الولاية',
              rating: 4.1,
              completionRate: 87,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'driving_license',
              name: 'رخصة السياقة',
              description: 'استخراج رخصة سياقة جديدة أو تجديد',
              requirements: ['بطاقة التعريف', 'شهادة طبية', '4 صور', 'شهادة تكوين', 'وصل دفع (3500 دج)'],
              deadline: '7-15 يوم',
              fee: '3500 دج',
              location: 'مصلحة رخص السياقة',
              rating: 4.0,
              completionRate: 82,
              hasAppointment: true,
              hasDownload: true
            },
            {
              id: 'gray_card',
              name: 'البطاقة الرمادية',
              description: 'بطاقة تسجيل السيارة',
              requirements: ['عقد البيع', 'بطاقة التعريف', 'التأمين', 'الفحص التقني', 'وصل دفع (5000 دج)'],
              deadline: '5-10 أيام',
              fee: '5000 دج',
              location: 'مصلحة المركبات',
              rating: 3.9,
              completionRate: 86,
              hasAppointment: true,
              hasDownload: true
            }
          ]
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
          fee: '200 دج',
          location: 'صندوق الضمان الاجتماعي',
          rating: 4.3,
          completionRate: 91,
          hasAppointment: true,
          hasDownload: true
        },
        {
          id: 'medical_appointment',
          name: 'حجز موعد طبي',
          description: 'حجز موعد مع طبيب مختص أو عام',
          requirements: ['بطاقة الشفاء', 'بطاقة التعريف', 'وصفة طبية (عند الحاجة)'],
          deadline: 'حسب التوفر (1-30 يوم)',
          fee: 'مجاني مع بطاقة الشفاء',
          location: 'المستشفى أو العيادة المختارة',
          rating: 4.0,
          completionRate: 78,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'medical_transfer',
          name: 'ملف النقل الصحي',
          description: 'طلب نقل صحي للعلاج في ولاية أخرى أو الخارج',
          requirements: ['ملف طبي كامل', 'تقرير طبي مفصل', 'طلب محرر', 'بطاقة الشفاء'],
          deadline: '15-30 يوم',
          fee: 'حسب نوع النقل',
          location: 'مديرية الصحة - الولاية',
          rating: 3.7,
          completionRate: 68,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'free_treatment',
          name: 'ملف العلاج المجاني',
          description: 'طلب الاستفادة من العلاج المجاني للأمراض المزمنة',
          requirements: ['تشخيص طبي معتمد', 'بطاقة الشفاء', 'ملف اجتماعي', 'استمارة خاصة'],
          deadline: '30-45 يوم',
          fee: 'مجاني',
          location: 'لجنة العلاج المجاني - المستشفى',
          rating: 4.1,
          completionRate: 73,
          hasAppointment: true,
          hasDownload: false
        }
      ]
    },
    education: {
      title: 'قطاع التعليم',
      titleFr: 'Secteur Éducation',
      icon: '🎓',
      services: [
        {
          id: 'school_registration',
          name: 'التسجيل المدرسي',
          description: 'تسجيل التلاميذ في المدارس الابتدائية والمتوسطة والثانوية',
          requirements: ['شهادة ميلاد', 'دفتر التلقيحات', 'صور شمسية', 'شهادة إقامة'],
          deadline: 'خلال فترة التسجيلات',
          fee: 'مجاني',
          location: 'المؤسسة التعليمية المختارة',
          rating: 4.4,
          completionRate: 94,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'university_registration',
          name: 'التسجيل الجامعي',
          description: 'تسجيل الطلاب في الجامعات والمعاهد العليا',
          requirements: ['شهادة البكالوريا', 'بطاقة التعريف', 'صور شمسية', 'شهادة طبية'],
          deadline: 'حسب فترات التسجيل',
          fee: 'رسوم التسجيل حسب التخصص',
          location: 'الجامعة أو المعهد المختار',
          rating: 4.2,
          completionRate: 88,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'diploma_extraction',
          name: 'استخراج الشهادات',
          description: 'الحصول على نسخ من الشهادات المدرسية أو الجامعية',
          requirements: ['بطاقة التعريف', 'طلب محرر', 'وصل دفع الطوابع'],
          deadline: '7-15 يوم',
          fee: '500-1000 دج',
          location: 'مديرية التربية أو الجامعة',
          rating: 4.3,
          completionRate: 91,
          hasAppointment: true,
          hasDownload: true
        },
        {
          id: 'diploma_equivalence',
          name: 'معادلة الشهادات',
          description: 'معادلة الشهادات الأجنبية بالشهادات الجزائرية',
          requirements: ['الشهادة الأصلية مترجمة', 'كشف النقاط مترجم', 'بطاقة التعريف', 'رسوم المعادلة'],
          deadline: '30-60 يوم',
          fee: '3000-5000 دج',
          location: 'وزارة التعليم العالي',
          rating: 3.8,
          completionRate: 79,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'scholarship',
          name: 'المنح الدراسية',
          description: 'التقديم للمنح الدراسية الداخلية أو الخارجية',
          requirements: ['استمارة المنحة', 'كشف النقاط', 'شهادة دخل الولي', 'ملف اجتماعي'],
          deadline: 'حسب فترات التقديم',
          fee: 'مجاني',
          location: 'الديوان الوطني للمنح الجامعية',
          rating: 4.0,
          completionRate: 65,
          hasAppointment: true,
          hasDownload: false
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
          name: 'التسجيل في وكالة التشغيل',
          description: 'تسجيل الباحثين عن العمل في ANEM',
          requirements: ['بطاقة التعريف', 'الشهادات', 'CV', 'صورة شمسية'],
          deadline: 'فوري',
          fee: 'مجاني',
          location: 'وكالة التشغيل المحلية',
          rating: 4.1,
          completionRate: 89,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'job_offers',
          name: 'متابعة عروض العمل',
          description: 'الاطلاع على عروض العمل المتاحة والتقديم عليها',
          requirements: ['تسجيل سابق في ANEM', 'CV محدث', 'رغبة في العمل'],
          deadline: 'مستمر',
          fee: 'مجاني',
          location: 'موقع ANEM أو الوكالة',
          rating: 3.9,
          completionRate: 74,
          hasAppointment: false,
          hasDownload: false
        },
        {
          id: 'professional_integration',
          name: 'برامج الإدماج المهني',
          description: 'الاستفادة من برامج التكوين والإدماج المهني',
          requirements: ['تسجيل في ANEM', 'مستوى تعليمي معين', 'سن محددة'],
          deadline: 'حسب دورات التكوين',
          fee: 'مجاني مع منحة',
          location: 'مراكز التكوين المهني',
          rating: 4.2,
          completionRate: 81,
          hasAppointment: true,
          hasDownload: false
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
          fee: 'مجاني',
          location: 'وكالة CNAS المحلية',
          rating: 4.3,
          completionRate: 92,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'retirement_file',
          name: 'ملف التقاعد',
          description: 'تحضير ملف التقاعد والاستفادة من المعاش',
          requirements: ['شهادة عمل', 'كشف الأجور', 'بطاقة التعريف', 'شهادة ميلاد'],
          deadline: '30-60 يوم',
          fee: 'مجاني',
          location: 'صندوق التقاعد CNR',
          rating: 4.1,
          completionRate: 87,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'sick_leave',
          name: 'العطل المرضية',
          description: 'تعويض العطل المرضية والعجز المؤقت',
          requirements: ['شهادة طبية', 'تصريح العجز', 'بطاقة الشفاء'],
          deadline: '15-30 يوم',
          fee: 'مجاني',
          location: 'صندوق الضمان الاجتماعي',
          rating: 4.0,
          completionRate: 83,
          hasAppointment: true,
          hasDownload: false
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
          requirements: ['بطاقة التعريف', 'شهادة إقامة', 'صورة شمسية', 'إيداع أولي (1000 دج)'],
          deadline: '24-48 ساعة',
          fee: '500 دج',
          location: 'مكتب البريد المحلي',
          rating: 4.2,
          completionRate: 94,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'golden_card',
          name: 'البطاقة الذهبية',
          description: 'بطاقة سحب إلكترونية للحساب البريدي',
          requirements: ['حساب CCP نشط', 'بطاقة التعريف', 'صورة شمسية'],
          deadline: '7-10 أيام',
          fee: '300 دج سنوياً',
          location: 'مكتب البريد',
          rating: 4.1,
          completionRate: 89,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'money_transfer',
          name: 'التحويلات المالية',
          description: 'إرسال واستقبال الأموال داخل الوطن وخارجه',
          requirements: ['بطاقة التعريف', 'رقم الحساب المستفيد', 'المبلغ + العمولة'],
          deadline: 'فوري',
          fee: 'حسب المبلغ والوجهة',
          location: 'مكتب البريد',
          rating: 4.3,
          completionRate: 96,
          hasAppointment: true,
          hasDownload: false
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
          requirements: ['بطاقة التعريف', 'صورة شمسية', 'طابع جبائي (300 دج)'],
          deadline: '3-7 أيام',
          fee: '300 دج',
          location: 'المحكمة الابتدائية',
          rating: 4.4,
          completionRate: 89,
          hasAppointment: true,
          hasDownload: true
        },
        {
          id: 'legal_consultation',
          name: 'طلب استشارة قانونية عبر الإنترنت',
          description: 'استشارة قانونية متخصصة مع محامي مؤهل عبر التطبيق',
          requirements: ['وثائق القضية', 'بطاقة التعريف', 'وصف مفصل للمشكلة القانونية'],
          deadline: 'خلال 24-48 ساعة',
          fee: 'حسب نوع الاستشارة (2000-5000 دج)',
          location: 'استشارة إلكترونية عبر التطبيق',
          isPaid: true,
          rating: 4.7,
          completionRate: 96,
          hasAppointment: true
        },
        {
          id: 'court_sessions',
          name: 'مواعيد الجلسات',
          description: 'معرفة مواعيد الجلسات والقضايا المبرمجة',
          requirements: ['رقم القضية', 'بطاقة التعريف'],
          deadline: 'فوري',
          fee: 'مجاني',
          location: 'كتابة ضبط المحكمة',
          rating: 4.2,
          completionRate: 91,
          hasAppointment: true,
          hasDownload: false
        },
        {
          id: 'legal_documents',
          name: 'الوثائق القضائية',
          description: 'استخراج نسخ من الأحكام والقرارات القضائية',
          requirements: ['طلب محرر', 'بطاقة التعريف', 'رسوم الطوابع'],
          deadline: '5-10 أيام',
          fee: '500-1000 دج',
          location: 'كتابة ضبط المحكمة',
          rating: 4.1,
          completionRate: 86,
          hasAppointment: true,
          hasDownload: true
        }
      ]
    },
    civil: {
      title: 'الحالة المدنية',
      titleFr: 'État Civil',
      icon: '📋',
      services: [
        {
          id: 'birth_certificate_s12',
          name: 'شهادة الميلاد S12',
          description: 'شهادة ميلاد خاصة بجواز السفر',
          requirements: ['بطاقة التعريف', 'طلب محرر', 'وصل دفع (200 دج)'],
          deadline: '48-72 ساعة',
          fee: '200 دج',
          location: 'مكتب الحالة المدنية - البلدية',
          rating: 4.5,
          completionRate: 95,
          hasAppointment: true,
          hasDownload: true
        },
        {
          id: 'family_booklet',
          name: 'دفتر العائلة',
          description: 'استخراج أو تحديث دفتر العائلة',
          requirements: ['عقد الزواج', 'شهادات الميلاد للأطفال', 'بطاقات التعريف'],
          deadline: '7-10 أيام',
          fee: '300 دج',
          location: 'مكتب الحالة المدنية',
          rating: 4.3,
          completionRate: 92,
          hasAppointment: true,
          hasDownload: true
        },
        {
          id: 'divorce_certificate',
          name: 'شهادة الطلاق',
          description: 'استخراج شهادة طلاق معتمدة',
          requirements: ['حكم الطلاق', 'بطاقة التعريف', 'وصل دفع الطوابع'],
          deadline: '5-7 أيام',
          fee: '400 دج',
          location: 'مكتب الحالة المدنية',
          rating: 4.2,
          completionRate: 89,
          hasAppointment: true,
          hasDownload: true
        }
      ]
    }
  };

  const currentSector = sectorData[sector];

  if (!currentSector) {
    return <div>قطاع غير موجود</div>;
  }

  const hasSubsections = (sector: SectorData): sector is SectorWithSubsections => {
    return 'subsections' in sector;
  };

  const hasServices = (sector: SectorData): sector is SectorWithServices => {
    return 'services' in sector;
  };

  const handleAppointmentClick = (service: Service) => {
    setSelectedService(service);
    setShowAppointmentBooking(true);
  };

  const handleDownloadClick = (service: Service) => {
    setSelectedService(service);
    setShowDocumentViewer(true);
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
          <CreditCard className="w-4 h-4 text-green-600" />
          <span className="text-sm text-gray-600">{service.fee}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-4 h-4 text-red-600" />
        <span className="text-sm text-gray-600">{service.location}</span>
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
            {service.requirements.map((req, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-3">
            {service.hasAppointment && (
              <button 
                onClick={() => handleAppointmentClick(service)}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                حجز موعد
              </button>
            )}
            
            {service.hasDownload && (
              <button 
                onClick={() => handleDownloadClick(service)}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                تحميل النموذج
              </button>
            )}
            
            {service.isPaid && (
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2">
                <CreditCard className="w-4 h-4" />
                دفع وحجز
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (showAppointmentBooking && selectedService) {
    return (
      <AppointmentBooking
        isOpen={true}
        onClose={() => {
          setShowAppointmentBooking(false);
          setSelectedService(null);
        }}
        service={selectedService}
      />
    );
  }

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
              <h1 className="text-2xl font-bold text-white">{currentSector.title}</h1>
              <p className="text-blue-200 text-sm">{currentSector.titleFr}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {hasSubsections(currentSector) ? (
            currentSector.subsections.map((subsection) => (
              <div key={subsection.id} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">{subsection.name}</h2>
                </div>
                
                {subsection.services.map((service, index) => renderService(service, index))}
              </div>
            ))
          ) : hasServices(currentSector) ? (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-4">الخدمات المتاحة</h2>
              {currentSector.services.map((service, index) => renderService(service, index))}
            </>
          ) : null}
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
