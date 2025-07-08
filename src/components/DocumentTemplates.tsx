
import React, { useState } from 'react';
import { Download, FileText, Search, Filter } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface DocumentTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  fileSize: string;
  downloads: number;
  type: 'pdf' | 'doc' | 'form';
}

interface DocumentTemplatesProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentTemplates: React.FC<DocumentTemplatesProps> = ({ isOpen, onClose }) => {
  const { isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mockTemplates: DocumentTemplate[] = [
    {
      id: '3',
      name: 'طلب رخصة البناء',
      category: 'التعمير',
      description: 'ملف كامل لطلب رخصة البناء مع المرفقات المطلوبة',
      fileSize: '1.2 MB',
      downloads: 450,
      type: 'form'
    },
    {
      id: '4',
      name: 'طلب المعاش التقاعدي',
      category: 'الضمان الاجتماعي',
      description: 'نموذج طلب المعاش التقاعدي للموظفين',
      fileSize: '320 KB',
      downloads: 750,
      type: 'doc'
    },
    {
      id: '5',
      name: 'شكوى إدارية',
      category: 'شكاوى',
      description: 'نموذج موحد لتقديم الشكاوى الإدارية',
      fileSize: '180 KB',
      downloads: 650,
      type: 'pdf'
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع الفئات' },
    { id: 'social', name: 'الضمان الاجتماعي' },
    { id: 'urban', name: 'التعمير' },
    { id: 'complaints', name: 'الشكاوى' }
  ];

  const getTypeIcon = (type: string) => {
    return <FileText className="w-5 h-5 text-blue-600" />;
  };

  const filteredTemplates = mockTemplates.filter(template => {
    const matchesSearch = template.name.includes(searchQuery) || template.description.includes(searchQuery);
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'social' && template.category === 'الضمان الاجتماعي') ||
      (selectedCategory === 'urban' && template.category === 'التعمير') ||
      (selectedCategory === 'complaints' && template.category === 'شكاوى');
    
    return matchesSearch && matchesCategory;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className={`glass-card w-full max-w-2xl animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-thin ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">النماذج والوثائق</h2>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              ✕
            </button>
          </div>

          {/* Search and Filter */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن النماذج والوثائق..."
                className="w-full p-4 pr-12 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="space-y-4">
            {filteredTemplates.map((template, index) => (
              <div
                key={template.id}
                className="card-enhanced p-5 hover:shadow-lg transition-all duration-200 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    {getTypeIcon(template.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{template.name}</h3>
                        <p className="text-sm text-blue-600 mb-2">{template.category}</p>
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-gray-500">{template.fileSize}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{template.downloads.toLocaleString()} تحميل</span>
                      </div>
                      <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        تحميل
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">لا توجد نماذج مطابقة للبحث</p>
              <p className="text-gray-400 text-sm mt-1">جرب تغيير كلمات البحث أو الفئة</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentTemplates;
