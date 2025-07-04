
import { SectorData } from '../types/sector';

export const sectorData: Record<string, SectorData> = {
  "local_admin": {
    title: "الإدارة المحلية",
    titleFr: "Administration Locale",
    icon: "🏛️",
    services: [
      {
        id: "biometric_passport",
        name: "جواز السفر البيومتري",
        description: "طلب أو تجديد جواز السفر البيومتري",
        requirements: [], // Will be dynamically set based on request type
        deadline: "15-20 يوم عمل",
        location: "مديرية الجوازات",
        completionRate: 92,
        hasDownload: true,
        hasTracking: true,
        requestType: 'first_time',
        specialNotes: [
          "يُرجى التأكد من صحة جميع البيانات المدخلة",
          "الحضور شخصياً مطلوب لأخذ البصمات والصورة",
          "مدة الصلاحية: 10 سنوات للبالغين، 5 سنوات للأطفال"
        ]
      },
      {
        id: "biometric_id",
        name: "بطاقة التعريف البيومترية",
        description: "طلب أو تجديد بطاقة التعريف الوطنية البيومترية",
        requirements: [
          "شهادة الميلاد S12",
          "شهادة إقامة",
          "صورتان شمسيتان حديثتان بخلفية بيضاء",
          "شهادة مدرسية/عمل/بطالة حسب الحالة",
          "بطاقة فصيلة الدم أو نسخة من رخصة السياقة"
        ],
        deadline: "7-10 أيام عمل",
        location: "مركز الحالة المدنية",
        completionRate: 95,
        hasDownload: true,
        hasTracking: true,
        specialNotes: [
          "الخدمة مجانية للطلبة والبطالين",
          "لا تُطلب شهادة الجنسية لهذه الخدمة",
          "صالحة لمدة 10 سنوات"
        ]
      },
      {
        id: "birth_certificate",
        name: "شهادة الميلاد",
        description: "طلب نسخة من شهادة الميلاد",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية"
        ],
        deadline: "فوري - 24 ساعة",
        location: "مركز الحالة المدنية",
        completionRate: 98,
        hasDownload: true,
        specialNotes: [
          "الخدمة مجانية بالكامل",
          "متاحة إلكترونياً في بعض البلديات"
        ]
      },
      {
        id: "residence_certificate",
        name: "شهادة الإقامة",
        description: "شهادة تثبت عنوان الإقامة",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية",
          "شاهدان مع بطاقات تعريفهما"
        ],
        deadline: "فوري - 48 ساعة",
        location: "البلدية",
        completionRate: 96,
        hasDownload: true,
        specialNotes: [
          "صالحة لمدة 3 أشهر من تاريخ الإصدار",
          "الخدمة مجانية"
        ]
      },
      {
        id: "single_certificate",
        name: "شهادة العزوبة",
        description: "شهادة تثبت الحالة الاجتماعية (أعزب/عزباء)",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية"
        ],
        deadline: "فوري - 24 ساعة",
        location: "مركز الحالة المدنية",
        completionRate: 97,
        hasDownload: true,
        specialNotes: [
          "صالحة لمدة 3 أشهر",
          "مطلوبة للزواج والسفر أحياناً"
        ]
      },
      {
        id: "social_housing",
        name: "طلب سكن اجتماعي",
        description: "تقديم طلب للحصول على سكن اجتماعي",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية",
          "شهادة عمل أو شهادة بطالة",
          "كشف راتب آخر 6 أشهر",
          "شهادة عائلية",
          "تصريح بعدم امتلاك سكن"
        ],
        deadline: "حسب توفر السكنات",
        location: "مديرية السكن والتعمير",
        completionRate: 45,
        hasDownload: true,
        hasTracking: true,
        specialNotes: [
          "يُشترط عدم امتلاك سكن",
          "الأولوية للعائلات ذات الدخل المحدود",
          "قائمة الانتظار قد تكون طويلة"
        ]
      }
    ]
  },
  "health": {
    title: "الصحة",
    titleFr: "Santé",
    icon: "🏥",
    services: [
      {
        id: "health_certificate",
        name: "الشهادة الطبية",
        description: "شهادة طبية للعمل أو الدراسة",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية",
          "فحص طبي"
        ],
        deadline: "فوري",
        location: "المستشفى أو العيادة متعددة الخدمات",
        completionRate: 94,
        hasDownload: true
      },
      {
        id: "vaccination_certificate",
        name: "شهادة التلقيح",
        description: "شهادة تثبت التلقيح ضد الأمراض",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية",
          "كارنيه التلقيحات"
        ],
        deadline: "فوري",
        location: "مركز الصحة",
        completionRate: 96,
        hasDownload: true
      }
    ]
  },
  "education": {
    title: "التعليم",
    titleFr: "Éducation",
    icon: "🎓",
    services: [
      {
        id: "school_certificate",
        name: "الشهادة المدرسية",
        description: "شهادة تثبت التمدرس",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية أو شهادة الميلاد"
        ],
        deadline: "3-5 أيام عمل",
        location: "المؤسسة التعليمية",
        completionRate: 97,
        hasDownload: true
      },
      {
        id: "bac_certificate",
        name: "شهادة البكالوريا",
        description: "نسخة من شهادة البكالوريا",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية",
          "وصل دفع الرسوم"
        ],
        deadline: "7-10 أيام عمل",
        location: "مديرية التربية",
        completionRate: 93,
        hasDownload: true,
        hasTracking: true
      }
    ]
  },
  "justice": {
    title: "العدالة",
    titleFr: "Justice",
    icon: "⚖️",
    services: [
      {
        id: "criminal_record",
        name: "صحيفة السوابق العدلية",
        description: "وثيقة تثبت عدم وجود سوابق عدلية",
        requirements: [
          "بطاقة التعريف الوطنية البيومترية",
          "تصريح شرفي"
        ],
        deadline: "3-7 أيام عمل",
        location: "المحكمة",
        completionRate: 91,
        hasDownload: true,
        hasTracking: true
      }
    ]
  },
  "consultations": {
    title: "الاستشارات",
    titleFr: "Consultations",
    icon: "💼",
    services: [
      {
        id: "legal_consultation",
        name: "الاستشارة القانونية",
        description: "استشارة قانونية مع محام مختص",
        requirements: [
          "وصف المشكلة القانونية",
          "الوثائق ذات الصلة (اختياري)"
        ],
        deadline: "24-48 ساعة",
        location: "عبر التطبيق",
        completionRate: 88,
        isPaid: true,
        paymentMethods: ["BaridiMob", "Edahabia", "CIB"]
      },
      {
        id: "administrative_consultation",
        name: "الاستشارة الإدارية",
        description: "استشارة إدارية مع موظف مختص",
        requirements: [
          "وصف المشكلة الإدارية",
          "تحديد نوع الإجراء المطلوب"
        ],
        deadline: "6-24 ساعة",
        location: "عبر التطبيق",
        completionRate: 92,
        isPaid: true,
        paymentMethods: ["BaridiMob", "Edahabia", "CIB"]
      }
    ]
  }
};
