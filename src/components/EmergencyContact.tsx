
import React from 'react';
import { AlertCircle, Phone } from 'lucide-react';

const EmergencyContact: React.FC = () => {
  return (
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
  );
};

export default EmergencyContact;
