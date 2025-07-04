
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
      <p className="text-sm font-semibold text-blue-800 mb-3">نوع الطلب:</p>
      <div className="grid grid-cols-1 gap-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="requestType"
            value="first_time"
            checked={selectedRequestType === 'first_time'}
            onChange={(e) => onRequestTypeChange(e.target.value as any)}
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
            onChange={(e) => onRequestTypeChange(e.target.value as any)}
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
            onChange={(e) => onRequestTypeChange(e.target.value as any)}
            className="text-blue-600"
          />
          <span className="text-sm text-blue-700">بدل ضائع أو مسروق</span>
        </label>
      </div>
    </div>
  );
};

export default PassportRequestType;
