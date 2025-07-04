
import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import DocumentViewer from './DocumentViewer';
import SectorHeader from './SectorHeader';
import ServiceCard from './ServiceCard';
import EmergencyContact from './EmergencyContact';
import { Service, SectorDetailProps } from '../types/sector';
import { sectorData } from '../data/sectorData';
import { getPassportRequirements } from '../utils/passportRequirements';

const SectorDetail: React.FC<SectorDetailProps> = ({ sector, userType, onBack }) => {
  const { isRTL } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedRequestType, setSelectedRequestType] = useState<'first_time' | 'renewal' | 'replacement'>('first_time');

  const currentSector = sectorData[sector];

  if (!currentSector) {
    return <div>قطاع غير موجود</div>;
  }

  const handleDownloadClick = (service: Service) => {
    setSelectedService(service);
    setShowDocumentViewer(true);
  };

  const handlePayment = (service: Service) => {
    alert(`تم تفعيل نظام الدفع الإلكتروني للخدمة: ${service.name}\nوسائل الدفع المتاحة: ${service.paymentMethods?.join(', ') || 'CIB, Edahabia'}`);
  };

  const handleTracking = (service: Service) => {
    alert(`تتبع الملف للخدمة: ${service.name}\nالحالة: قيد المعالجة\nالمدة المتبقية: ${service.deadline}`);
  };

  const handleToggleDetails = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

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
        <SectorHeader currentSector={currentSector} onBack={onBack} />

        <div className="p-6 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">الخدمات المتاحة</h2>
          {currentSector.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              activeService={activeService}
              selectedRequestType={selectedRequestType}
              onToggleDetails={handleToggleDetails}
              onRequestTypeChange={setSelectedRequestType}
              onDownload={handleDownloadClick}
              onTracking={handleTracking}
              onPayment={handlePayment}
              getPassportRequirements={getPassportRequirements}
            />
          ))}
        </div>

        <EmergencyContact />
      </div>
    </div>
  );
};

export default SectorDetail;
