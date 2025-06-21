
import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface Location {
  id: string;
  name: string;
  type: string;
  address: string;
  distance: string;
  rating: number;
  workingHours: string;
  phone: string;
  services: string[];
}

interface LocationSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ isOpen, onClose }) => {
  const { isRTL } = useLanguage();
  const [searchLocation, setSearchLocation] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);

  const mockLocations: Location[] = [
    {
      id: '1',
      name: 'بلدية الجزائر الوسطى',
      type: 'بلدية',
      address: 'شارع الأمير عبد القادر، الجزائر العاصمة',
      distance: '0.8 كم',
      rating: 4.2,
      workingHours: '08:00 - 16:00',
      phone: '021-23-45-67',
      services: ['شهادات الميلاد', 'شهادات الإقامة', 'رخص البناء']
    },
    {
      id: '2',
      name: 'المحكمة الابتدائية',
      type: 'محكمة',
      address: 'ساحة الشهداء، الجزائر العاصمة',
      distance: '1.2 كم',
      rating: 4.0,
      workingHours: '08:00 - 16:30',
      phone: '021-34-56-78',
      services: ['صحيفة السوابق', 'التوثيق', 'الدعاوى المدنية']
    },
    {
      id: '3',
      name: 'صندوق الضمان الاجتماعي',
      type: 'ضمان اجتماعي',
      address: 'حي بن عكنون، الجزائر العاصمة',
      distance: '2.1 كم',
      rating: 3.8,
      workingHours: '08:00 - 15:30',
      phone: '021-45-67-89',
      services: ['بطاقة الشفاء', 'التعويضات', 'المعاشات']
    }
  ];

  const handleSearch = () => {
    // محاكاة البحث عن المواقع
    setLocations(mockLocations);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-md animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-thin ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">البحث عن إدارة</h2>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              ✕
            </button>
          </div>

          {/* Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="ابحث عن نوع الإدارة أو الخدمة..."
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
            <button
              onClick={handleSearch}
              className="absolute left-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transition-all duration-200"
            >
              بحث
            </button>
          </div>

          {/* Mock Map */}
          <div className="mb-6 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-300">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <p className="text-blue-600 font-medium">خريطة الموقع</p>
              <p className="text-blue-500 text-sm">سيتم عرض الخريطة التفاعلية هنا</p>
            </div>
          </div>

          {/* Location Results */}
          {locations.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800 text-lg">الإدارات القريبة</h3>
              {locations.map((location) => (
                <div key={location.id} className="card-enhanced p-4 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{location.name}</h4>
                      <p className="text-sm text-blue-600 mb-2">{location.type}</p>
                      <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {location.address}
                      </p>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{location.rating}</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">{location.distance}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{location.workingHours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{location.phone}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">الخدمات المتاحة:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 btn-primary text-sm py-2 flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      الاتجاهات
                    </button>
                    <button className="flex-1 btn-secondary text-sm py-2">
                      تفاصيل أكثر
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationSearch;
