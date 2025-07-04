
export interface Service {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  deadline: string;
  location: string;
  completionRate: number;
  isPaid?: boolean;
  hasDownload?: boolean;
  hasTracking?: boolean;
  paymentMethods?: string[];
  requestType?: 'first_time' | 'renewal' | 'replacement';
  specialNotes?: string[];
}

export interface SectorData {
  title: string;
  titleFr: string;
  icon: string;
  services: Service[];
}

export interface SectorDetailProps {
  sector: string;
  userType?: string;
  onBack: () => void;
}
