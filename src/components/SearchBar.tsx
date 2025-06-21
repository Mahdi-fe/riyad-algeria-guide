
import React, { useState } from 'react';
import { Search, MapPin, Clock, FileText } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SearchResult {
  id: string;
  title: string;
  type: 'service' | 'deadline' | 'document';
  sector: string;
  description: string;
  deadline?: string;
  location?: string;
}

const SearchBar: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const mockSearchData: SearchResult[] = [
    {
      id: '1',
      title: 'شهادة الميلاد',
      type: 'service',
      sector: 'البلدية',
      description: 'استخراج نسخة من شهادة الميلاد',
      deadline: '24 ساعة',
      location: 'مكتب الحالة المدنية'
    },
    {
      id: '2',
      title: 'تجديد جواز السفر',
      type: 'deadline',
      sector: 'الأمن الوطني',
      description: 'آخر موعد لتجديد جواز السفر',
      deadline: '15 يوم',
      location: 'مصلحة جوازات السفر'
    },
    {
      id: '3',
      title: 'طلب بطاقة الشفاء',
      type: 'document',
      sector: 'الضمان الاجتماعي',
      description: 'نموذج طلب بطاقة الشفاء للمؤمن اجتماعياً',
      location: 'صندوق الضمان الاجتماعي'
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setIsSearching(true);
      // محاكاة البحث
      setTimeout(() => {
        const filtered = mockSearchData.filter(item =>
          item.title.includes(query) || item.description.includes(query)
        );
        setSearchResults(filtered);
        setIsSearching(false);
      }, 500);
    } else {
      setSearchResults([]);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return <FileText className="w-4 h-4 text-blue-600" />;
      case 'deadline': return <Clock className="w-4 h-4 text-orange-600" />;
      case 'document': return <FileText className="w-4 h-4 text-green-600" />;
      default: return <Search className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="relative">
      <div className="relative glass-card rounded-3xl p-1 shadow-xl">
        <div className="flex items-center">
          <div className={`p-4 ${isRTL ? 'mr-2' : 'ml-2'}`}>
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="ابحث عن الملفات والمواعيد والخدمات..."
            className={`flex-1 bg-transparent border-0 py-4 text-gray-700 placeholder-gray-500 focus:outline-none font-medium ${
              isRTL ? 'pr-4 text-right' : 'pl-0 text-left'
            }`}
          />
          {isSearching && (
            <div className="p-2 mr-3">
              <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          )}
        </div>
      </div>

      {/* نتائج البحث */}
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="p-4 hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100 last:border-0 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                {getTypeIcon(result.type)}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{result.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {result.sector}
                    </span>
                    {result.deadline && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {result.deadline}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
