
import React from 'react';
import { Clock, MapPin, Info } from 'lucide-react';
import { Service } from '../types/sector';
import PassportRequestType from './PassportRequestType';

interface ServiceCardProps {
  service: Service;
  index: number;
  activeService: string | null;
  selectedRequestType: 'first_time' | 'renewal' | 'replacement';
  onToggleDetails: (serviceId: string) => void;
  onRequestTypeChange: (type: 'first_time' | 'renewal' | 'replacement') => void;
  onDownload: (service: Service) => void;
  onTracking: (service: Service) => void;
  onPayment: (service: Service) => void;
  onConsultation?: () => void;
  getPassportRequirements: (requestType: string) => string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  activeService,
  selectedRequestType,
  onToggleDetails,
  onRequestTypeChange,
  onDownload,
  onTracking,
  onPayment,
  onConsultation,
  getPassportRequirements
}) => {
  // Only show consultation services differently
  if (service.id === 'legal_consultation' || service.id === 'administrative_consultation') {
    return (
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
          <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs rounded-full font-semibold">
            خدمة مدفوعة
          </div>
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

        <button
          onClick={onConsultation}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-base flex items-center justify-center gap-2 mb-4"
        >
          <Info className="w-5 h-5" />
          طلب استشارة
        </button>

        {service.paymentMethods && service.paymentMethods.length > 0 && (
          <div className="p-3 bg-blue-50 rounded-xl">
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
    );
  }

  return (
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

      {service.id === 'biometric_passport' && (
        <PassportRequestType
          selectedRequestType={selectedRequestType}
          onRequestTypeChange={onRequestTypeChange}
        />
      )}

      <button
        onClick={() => onToggleDetails(service.id)}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-base flex items-center justify-center gap-2 mb-3"
      >
        <Info className="w-5 h-5" />
        {activeService === service.id ? 'إخفاء التفاصيل' : 'عرض المتطلبات والتفاصيل'}
      </button>

      {activeService === service.id && (
        <ServiceDetails
          service={service}
          selectedRequestType={selectedRequestType}
          onDownload={onDownload}
          onTracking={onTracking}
          onPayment={onPayment}
          getPassportRequirements={getPassportRequirements}
        />
      )}
    </div>
  );
};

interface ServiceDetailsProps {
  service: Service;
  selectedRequestType: 'first_time' | 'renewal' | 'replacement';
  onDownload: (service: Service) => void;
  onTracking: (service: Service) => void;
  onPayment: (service: Service) => void;
  getPassportRequirements: (requestType: string) => string[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  service,
  selectedRequestType,
  onDownload,
  onTracking,
  onPayment,
  getPassportRequirements
}) => {
  return (
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
      
      <ServiceActions
        service={service}
        onDownload={onDownload}
        onTracking={onTracking}
        onPayment={onPayment}
      />
    </div>
  );
};

interface ServiceActionsProps {
  service: Service;
  onDownload: (service: Service) => void;
  onTracking: (service: Service) => void;
  onPayment: (service: Service) => void;
}

const ServiceActions: React.FC<ServiceActionsProps> = ({
  service,
  onDownload,
  onTracking,
  onPayment
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {service.hasDownload && (
          <button 
            onClick={() => onDownload(service)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
          >
            <span className="text-sm">📥</span>
            تحميل النموذج
          </button>
        )}
        
        {service.hasTracking && (
          <button 
            onClick={() => onTracking(service)}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2"
          >
            <span className="text-sm">📋</span>
            تتبع الملف
          </button>
        )}
        
        {service.isPaid && (
          <button 
            onClick={() => onPayment(service)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out text-sm flex items-center justify-center gap-2 col-span-2"
          >
            <span className="text-sm">💳</span>
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
    </>
  );
};

export default ServiceCard;
