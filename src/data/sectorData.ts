
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
        requirements: ['بطاقة التعريف الوطنية البيومترية'],
        deadline: '24-48 ساعة',
        location: 'مكتب الحالة المدنية - البلدية',
        completionRate: 95,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'biometric_passport',
        name: 'طلب جواز السفر البيومتري',
        description: 'استخراج أو تجديد جواز السفر البيومتري الجديد',
        requirements: [],
        deadline: '15-30 يوم عمل',
        location: 'مصلحة جوازات السفر - الولاية',
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
          'بطاقة التعريف الوطنية البيومترية',
          'استمارة طلب محررة ومصادق عليها',
          'شهادة عائلية',
          'شهادة دخل أو عدم العمل',
          'شهادة إقامة',
          'شهادة عدم امتلاك سكن',
          'كشف نقاط الأطفال المتمدرسين (إن وجد)'
        ],
        deadline: '30-60 يوم للدراسة الأولية',
        location: 'مصلحة السكن - البلدية',
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
        requirements: ['بطاقة التعريف الوطنية البيومترية لطالب الشهادة', 'شهادة طبية بالوفاة', 'دفتر العائلة'],
        deadline: '24 ساعة',
        location: 'مكتب الحالة المدنية',
        completionRate: 98,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'residence_certificate',
        name: 'شهادة الإقامة',
        description: 'إثبات محل الإقامة للاستعمال الإداري',
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'فاتورة كهرباء أو ماء حديثة', 'شاهدين مع بطاقاتهم'],
        deadline: '24-72 ساعة',
        location: 'مصلحة الشؤون الإدارية',
        completionRate: 92,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'single_certificate',
        name: 'شهادة العزوبة',
        description: 'شهادة تثبت الحالة المدنية للشخص الأعزب',
        requirements: ['بطاقة التعريف الوطنية البيومترية'],
        deadline: '24-48 ساعة',
        location: 'مكتب الحالة المدنية - البلدية',
        completionRate: 94,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'marriage_certificate',
        name: 'عقد الزواج',
        description: 'تسجيل عقد الزواج رسمياً',
        requirements: [
          'بطاقة التعريف الوطنية البيومترية للزوجين',
          'شهادة عزوبة للزوجين',
          'شهادة طبية للزوجين',
          'شاهدين مع بطاقاتهم',
          'الصداق المتفق عليه'
        ],
        deadline: 'فوري عند اكتمال الوثائق',
        location: 'مكتب الحالة المدنية - البلدية',
        completionRate: 97,
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
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'شهادة عمل أو تقاعد', 'صورة شمسية', 'استمارة محررة'],
        deadline: '10-15 يوم',
        location: 'صندوق الضمان الاجتماعي',
        completionRate: 91,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'medical_certificate',
        name: 'الشهادة الطبية',
        description: 'شهادة طبية للعمل أو الدراسة أو الإعفاءات',
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'فحص طبي', 'صور طبية إن وجدت'],
        deadline: '24-48 ساعة',
        location: 'المستشفى أو العيادة المعتمدة',
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
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'صورة شمسية', 'طابع جبائي'],
        deadline: '3-7 أيام',
        location: 'المحكمة الابتدائية',
        completionRate: 89,
        hasDownload: true,
        hasTracking: true,
        paymentMethods: ['CIB', 'Edahabia', 'نقدي']
      },
      {
        id: 'nationality_certificate',
        name: 'شهادة الجنسية الجزائرية',
        description: 'شهادة تثبت الجنسية الجزائرية',
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'شهادة ميلاد', 'وثائق الوالدين', 'رسوم الطوابع'],
        deadline: '15-30 يوم',
        location: 'المحكمة الابتدائية',
        completionRate: 82,
        isPaid: true,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'legal_consultation',
        name: 'الاستشارة القانونية',
        description: 'استشارة قانونية متخصصة مع محامي مؤهل',
        requirements: ['وثائق القضية', 'بطاقة التعريف الوطنية البيومترية', 'وصف المشكلة القانونية'],
        deadline: '24-48 ساعة',
        location: 'استشارة إلكترونية أو مكتب المحاماة',
        isPaid: true,
        completionRate: 96,
        hasTracking: true,
        paymentMethods: ['CIB', 'Edahabia', 'BaridiMob']
      },
      {
        id: 'court_sessions',
        name: 'مواعيد الجلسات',
        description: 'معرفة مواعيد الجلسات والقضايا المبرمجة',
        requirements: ['رقم القضية', 'بطاقة التعريف الوطنية البيومترية'],
        deadline: 'فوري',
        location: 'كتابة ضبط المحكمة',
        completionRate: 91,
        hasTracking: true
      },
      {
        id: 'divorce_certificate',
        name: 'شهادة الطلاق',
        description: 'استخراج شهادة طلاق معتمدة',
        requirements: ['حكم الطلاق', 'بطاقة التعريف الوطنية البيومترية', 'وصل دفع الطوابع'],
        deadline: '5-7 أيام',
        location: 'كتابة ضبط المحكمة',
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
        requirements: ['بطاقة التعريف الوطنية البيومترية للولي', 'دفتر التلميذ', 'طلب محرر'],
        deadline: '3-7 أيام',
        location: 'المؤسسة التعليمية',
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
        completionRate: 88,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'baccalaureate_certificate',
        name: 'شهادة البكالوريا',
        description: 'استخراج نسخة من شهادة البكالوريا',
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'وصل دفع الطوابع', 'طلب محرر'],
        deadline: '7-15 يوم',
        location: 'مديرية التربية',
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
        completionRate: 65,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'diploma_equivalence',
        name: 'معادلة الشهادات',
        description: 'معادلة الشهادات الأجنبية بالشهادات الجزائرية',
        requirements: ['الشهادة الأصلية مترجمة', 'كشف النقاط مترجم', 'بطاقة التعريف الوطنية البيومترية', 'رسوم المعادلة'],
        deadline: '30-60 يوم',
        location: 'وزارة التعليم العالي',
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
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'الشهادات', 'CV', 'صورة شمسية'],
        deadline: 'فوري',
        location: 'وكالة التشغيل المحلية',
        completionRate: 89,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'unemployment_certificate',
        name: 'شهادة البطالة',
        description: 'شهادة رسمية تثبت حالة البطالة',
        requirements: ['تسجيل في ANEM', 'بطاقة التعريف الوطنية البيومترية', 'شهادة عدم العمل'],
        deadline: '5-7 أيام',
        location: 'وكالة التشغيل',
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
        requirements: ['عقد العمل', 'بطاقة التعريف الوطنية البيومترية', 'شهادة طبية', 'صور شمسية'],
        deadline: '7-10 أيام',
        location: 'وكالة CNAS المحلية',
        completionRate: 92,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'casnos_registration',
        name: 'التسجيل في CASNOS',
        description: 'تسجيل غير الأجراء في صندوق الضمان الاجتماعي',
        requirements: ['السجل التجاري', 'بطاقة التعريف الوطنية البيومترية', 'تصريح النشاط', 'صور شمسية'],
        deadline: '7-10 أيام',
        location: 'وكالة CASNOS المحلية',
        completionRate: 88,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'retirement_file',
        name: 'ملف التقاعد',
        description: 'تحضير ملف التقاعد والاستفادة من المعاش',
        requirements: ['شهادة عمل', 'كشف الأجور', 'بطاقة التعريف الوطنية البيومترية', 'شهادة ميلاد'],
        deadline: '30-60 يوم',
        location: 'صندوق التقاعد CNR',
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
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'شهادة إقامة', 'صورة شمسية', 'إيداع أولي'],
        deadline: '24-48 ساعة',
        location: 'مكتب البريد المحلي',
        completionRate: 94,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'golden_card',
        name: 'البطاقة الذهبية',
        description: 'بطاقة سحب إلكترونية للحساب البريدي',
        requirements: ['حساب CCP نشط', 'بطاقة التعريف الوطنية البيومترية', 'صورة شمسية'],
        deadline: '7-10 أيام',
        location: 'مكتب البريد',
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
        requirements: ['حساب CCP نشط', 'بطاقة التعريف الوطنية البيومترية', 'رصيد كافي'],
        deadline: '3-5 أيام',
        location: 'مكتب البريد',
        completionRate: 92,
        hasDownload: true,
        hasTracking: true
      },
      {
        id: 'money_transfer',
        name: 'التحويلات المالية',
        description: 'إرسال واستقبال الأموال داخل الوطن وخارجه',
        requirements: ['بطاقة التعريف الوطنية البيومترية', 'رقم الحساب المستفيد', 'المبلغ + العمولة'],
        deadline: 'فوري',
        location: 'مكتب البريد',
        completionRate: 96,
        hasTracking: true,
        paymentMethods: ['Edahabia', 'BaridiMob', 'نقدي']
      }
    ]
  }
};
