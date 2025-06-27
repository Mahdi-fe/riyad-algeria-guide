
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
  hasTracking?: boolean;
  paymentMethods?: string[];
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
  const [showAppointmentBooking, setShowAppointmentBooking] = useState(false);
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
          requirements: ['بطاقة التعريف الوطنية', 'صورة شمسية', 'وصل دفع الطابع (100 دج)'],
          deadline: '24-48 ساعة',
          fee: '100 دج',
          location: 'مكتب الحالة المدنية - البلدية',
          rating: 4.5,
          completionRate: 95,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
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
          hasDownload: true,
          hasTracking: true
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
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'celibacy_certificate',
          name: 'شهادة العزوبة',
          description: 'شهادة تثبت الحالة الاجتماعية العزوبة',
          requirements: ['بطاقة التعريف', 'صورة شمسية', 'شاهدين مع بطاقاتهم'],
          deadline: '48 ساعة',
          fee: '150 دج',
          location: 'مكتب الحالة المدنية',
          rating: 4.4,
          completionRate: 93,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'unemployment_certificate',
          name: 'شهادة عدم العمل',
          description: 'شهادة تثبت عدم امتلاك عمل أو مهنة',
          requirements: ['بطاقة التعريف', 'تصريح بعدم العمل', 'شاهدين'],
          deadline: '2-3 أيام',
          fee: '200 دج',
          location: 'مصلحة الشؤون الإدارية',
          rating: 4.1,
          completionRate: 87,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'loss_declaration',
          name: 'تصريح بالضياع',
          description: 'تصريح رسمي بضياع وثيقة أو بطاقة',
          requirements: ['بطاقة التعريف', 'تصريح مكتوب بالضياع', 'صورة شمسية'],
          deadline: '24 ساعة',
          fee: '100 دج',
          location: 'مصلحة الشؤون الإدارية',
          rating: 4.2,
          completionRate: 94,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'social_housing',
          name: 'طلب السكن الاجتماعي',
          description: 'تقديم طلب سكن اجتماعي',
          requirements: ['استمارة محررة', 'بطاقة التعريف', 'شهادة دخل', 'شهادة إقامة', 'شهادة عائلية'],
          deadline: '30 يوم للدراسة',
          fee: 'مجاني',
          location: 'مصلحة السكن - البلدية',
          rating: 3.8,
          completionRate: 75,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'building_permit',
          name: 'رخصة البناء البسيطة',
          description: 'رخصة بناء للمشاريع البسيطة والتوسعات',
          requirements: ['مخطط البناء', 'عقد الملكية', 'بطاقة التعريف', 'رسوم الرخصة'],
          deadline: '15-30 يوم',
          fee: '5000-15000 دج',
          location: 'مصلحة التعمير - البلدية',
          rating: 3.9,
          completionRate: 78,
          isPaid: true,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'نقدي']
        }
      ]
    },
    civil: {
      title: 'الحالة المدنية',
      titleFr: 'État Civil',
      icon: '📋',
      services: [
        {
          id: 'national_id_biometric',
          name: 'بطاقة التعريف الوطنية البيومترية',
          description: 'استخراج أو تجديد بطاقة التعريف البيومترية الجديدة',
          requirements: ['شهادة ميلاد', '2 صورة بيومترية', 'شهادة إقامة', 'وصل دفع (1000 دج)'],
          deadline: '10 أيام عمل',
          fee: '1000 دج',
          location: 'المصلحة البيومترية - البلدية',
          rating: 4.3,
          completionRate: 89,
          isPaid: true,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
        },
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
          isPaid: true,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
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
          hasDownload: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
        },
        {
          id: 'residence_card',
          name: 'بطاقة الإقامة',
          description: 'بطاقة إقامة للأجانب أو المقيمين',
          requirements: ['جواز السفر', 'صور شمسية', 'عقد إيجار أو ملكية', 'شهادة طبية'],
          deadline: '15-30 يوم',
          fee: '2000 دج',
          location: 'مصلحة الأجانب - الولاية',
          rating: 4.0,
          completionRate: 85,
          isPaid: true,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
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
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'marriage_contract',
          name: 'عقد الزواج',
          description: 'استخراج نسخة من عقد الزواج',
          requirements: ['بطاقات التعريف للزوجين', 'دفتر العائلة', 'وصل دفع الرسوم'],
          deadline: '3-5 أيام',
          fee: '500 دج',
          location: 'مكتب الحالة المدنية',
          rating: 4.4,
          completionRate: 94,
          hasAppointment: true,
          hasDownload: true,
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
          requirements: ['بطاقة التعريف', 'صورة شمسية', 'طابع جبائي (300 دج)'],
          deadline: '3-7 أيام',
          fee: '300 دج',
          location: 'المحكمة الابتدائية',
          rating: 4.4,
          completionRate: 89,
          hasAppointment: true,
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
          fee: '1000 دج',
          location: 'المحكمة الابتدائية',
          rating: 4.1,
          completionRate: 82,
          isPaid: true,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'legal_consultation',
          name: 'الاستشارة القانونية',
          description: 'استشارة قانونية متخصصة مع محامي مؤهل',
          requirements: ['وثائق القضية', 'بطاقة التعريف', 'وصف المشكلة القانونية'],
          deadline: '24-48 ساعة',
          fee: '2000-5000 دج',
          location: 'استشارة إلكترونية أو مكتب المحاماة',
          isPaid: true,
          rating: 4.7,
          completionRate: 96,
          hasAppointment: true,
          hasTracking: true,
          paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
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
          hasTracking: true
        },
        {
          id: 'divorce_certificate',
          name: 'شهادة الطلاق',
          description: 'استخراج شهادة طلاق معتمدة',
          requirements: ['حكم الطلاق', 'بطاقة التعريف', 'وصل دفع الطوابع'],
          deadline: '5-7 أيام',
          fee: '400 دج',
          location: 'كتابة ضبط المحكمة',
          rating: 4.2,
          completionRate: 89,
          hasAppointment: true,
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
          fee: '200 دج',
          location: 'صندوق الضمان الاجتماعي',
          rating: 4.3,
          completionRate: 91,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'medical_certificate',
          name: 'الشهادة الطبية',
          description: 'شهادة طبية للعمل أو الدراسة أو الإعفاءات',
          requirements: ['بطاقة التعريف', 'فحص طبي', 'صور طبية إن وجدت'],
          deadline: '24-48 ساعة',
          fee: '500-1500 دج',
          location: 'المستشفى أو العيادة المعتمدة',
          rating: 4.1,
          completionRate: 88,
          isPaid: true,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'medical_appointment',
          name: 'حجز موعد طبي',
          description: 'حجز موعد مع طبيب مختص أو عام',
          requirements: ['بطاقة الشفاء', 'بطاقة التعريف', 'وصفة طبية (إن وجدت)'],
          deadline: 'حسب التوفر (1-30 يوم)',
          fee: 'مجاني مع بطاقة الشفاء',
          location: 'المستشفى أو العيادة المختارة',
          rating: 4.0,
          completionRate: 78,
          hasAppointment: true,
          hasTracking: true
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
          fee: '200 دج',
          location: 'المؤسسة التعليمية',
          rating: 4.4,
          completionRate: 94,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'university_registration',
          name: 'شهادة التسجيل الجامعي',
          description: 'شهادة تسجيل في الجامعة أو المعهد العالي',
          requirements: ['بطاقة الطالب', 'شهادة البكالوريا', 'وصل دفع الرسوم'],
          deadline: '2-5 أيام',
          fee: '300 دج',
          location: 'الجامعة أو المعهد',
          rating: 4.2,
          completionRate: 88,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'baccalaureate_certificate',
          name: 'شهادة البكالوريا',
          description: 'استخراج نسخة من شهادة البكالوريا',
          requirements: ['بطاقة التعريف', 'وصل دفع الطوابع', 'طلب محرر'],
          deadline: '7-15 يوم',
          fee: '500 دج',
          location: 'مديرية التربية',
          rating: 4.3,
          completionRate: 91,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'scholarship',
          name: 'طلب المنحة الجامعية',
          description: 'التقديم للمنح الدراسية الداخلية أو الخارجية',
          requirements: ['استمارة المنحة', 'كشف النقاط', 'شهادة دخل الولي', 'ملف اجتماعي'],
          deadline: 'حسب فترات التقديم',
          fee: 'مجاني',
          location: 'الديوان الوطني للمنح الجامعية',
          rating: 4.0,
          completionRate: 65,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
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
          isPaid: true,
          hasAppointment: true,
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
          fee: 'مجاني',
          location: 'وكالة التشغيل المحلية',
          rating: 4.1,
          completionRate: 89,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'unemployment_certificate',
          name: 'شهادة البطالة',
          description: 'شهادة رسمية تثبت حالة البطالة',
          requirements: ['تسجيل في ANEM', 'بطاقة التعريف', 'شهادة عدم العمل'],
          deadline: '5-7 أيام',
          fee: 'مجاني',
          location: 'وكالة التشغيل',
          rating: 4.0,
          completionRate: 85,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'job_offers',
          name: 'متابعة عروض العمل',
          description: 'الاطلاع على عروض العمل المتاحة والتقديم عليها',
          requirements: ['تسجيل سابق في ANEM', 'CV محدث'],
          deadline: 'مستمر',
          fee: 'مجاني',
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
          fee: 'مجاني مع منحة',
          location: 'مراكز التكوين المهني',
          rating: 4.2,
          completionRate: 81,
          hasAppointment: true,
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
          fee: 'مجاني',
          location: 'وكالة CNAS المحلية',
          rating: 4.3,
          completionRate: 92,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
        },
        {
          id: 'casnos_registration',
          name: 'التسجيل في CASNOS',
          description: 'تسجيل غير الأجراء في صندوق الضمان الاجتماعي',
          requirements: ['السجل التجاري', 'بطاقة التعريف', 'تصريح النشاط', 'صور شمسية'],
          deadline: '7-10 أيام',
          fee: 'مجاني',
          location: 'وكالة CASNOS المحلية',
          rating: 4.1,
          completionRate: 88,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
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
          hasDownload: true,
          hasTracking: true
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
          requirements: ['بطاقة التعريف', 'شهادة إقامة', 'صورة شمسية', 'إيداع أولي (1000 دج)'],
          deadline: '24-48 ساعة',
          fee: '500 دج',
          location: 'مكتب البريد المحلي',
          rating: 4.2,
          completionRate: 94,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
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
          isPaid: true,
          hasAppointment: true,
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
          fee: '200 دج',
          location: 'مكتب البريد',
          rating: 4.0,
          completionRate: 92,
          hasAppointment: true,
          hasDownload: true,
          hasTracking: true
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
          hasTracking: true,
          paymentMethods: ['Edahabia', 'BaridiMob', 'نقدي']
        }
      ]
    }
  };

  const currentSector = sectorData[sector];

  if (!currentSector) {
    return <div>قطاع غير موجود</div>;
  }

  const handleAppointmentClick = (service: Service) => {
    setSelectedService(service);
    setShowAppointmentBooking(true);
  };

  const handleDownloadClick = (service: Service) => {
    setSelectedService(service);
    setShowDocumentViewer(true);
  };

  const handlePayment = (service: Service) => {
    // Simulate payment process
    alert(`تم تفعيل نظام الدفع الإلكتروني للخدمة: ${service.name}\nوسائل الدفع المتاحة: ${service.paymentMethods?.join(', ') || 'CIB, Edahabia'}`);
  };

  const handleTracking = (service: Service) => {
    // Simulate tracking
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
          
          <div className="grid grid-cols-2 gap-3">
            {service.hasAppointment && (
              <button 
                onClick={() => handleAppointmentClick(service)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                حجز موعد
              </button>
            )}
            
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
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
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
