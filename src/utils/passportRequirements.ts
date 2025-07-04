
export const getPassportRequirements = (requestType: string): string[] => {
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
