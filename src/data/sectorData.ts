
import { SectorData } from '../types/sector';

export const sectorData: Record<string, SectorData> = {
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
        requirements: ['بطاقة التعريف', 'وصل دفع الطوابع', 'طلب محرr'],
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
