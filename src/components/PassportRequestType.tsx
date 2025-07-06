
import React from 'react';

interface PassportRequestTypeProps {
  selectedRequestType: 'first_time' | 'renewal' | 'replacement';
  onRequestTypeChange: (type: 'first_time' | 'renewal' | 'replacement') => void;
}

const PassportRequestType: React.FC<PassportRequestTypeProps> = ({
  selectedRequestType,
  onRequestTypeChange
}) => {
  return (
    <div className="mb-4 p-4 bg-blue-50 rounded-xl">
      <div className="text-center">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white mb-4">
          <h3 className="text-lg font-bold mb-2">جواز السفر البيومتري</h3>
          <p className="text-sm opacity-90">
            سيتم تحديد نوع الطلب تلقائياً حسب الوثائق المقدمة من طرف الإدارة
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-amber-800 text-sm font-medium">
            ملاحظة: نوع الطلب (أول مرة، تجديد، أو بدل ضائع) يحدده الموظف المختص تلقائياً بناءً على الوثائق والحالة المقدمة
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassportRequestType;
