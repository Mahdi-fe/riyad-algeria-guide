
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Download, FileText, CheckCircle, Eye, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface Service {
  id: string;
  name: string;
  location: string;
  requirements: string[];
}

interface DocumentViewerProps {
  isOpen: boolean;
  onClose: () => void;
  service?: Service;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ isOpen, onClose, service }) => {
  const { isRTL } = useLanguage();
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Default service if none provided
  const defaultService: Service = {
    id: 'default',
    name: 'نموذج عام',
    location: 'الإدارة المحلية',
    requirements: [
      'نسخة من بطاقة التعريف الوطنية',
      'شهادة الإقامة',
      'صورة شمسية'
    ]
  };

  const currentService = service || defaultService;

  if (!isOpen) return null;

  const handleDownload = () => {
    // Simulate download process
    setIsDownloaded(true);
    
    // Create a simple PDF-like download simulation
    const element = window.document.createElement('a');
    const file = new Blob([`نموذج ${currentService.name}\n\nالمتطلبات:\n${currentService.requirements.join('\n')}\n\nالمكان: ${currentService.location}`], 
      { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `نموذج_${currentService.name.replace(/\s+/g, '_')}.txt`;
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
    
    setTimeout(() => {
      setIsDownloaded(false);
    }, 2000);
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  if (showPreview) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6">
            <div className="flex items-center gap-4 relative z-10">
              <button
                onClick={() => setShowPreview(false)}
                className="p-3 glass rounded-2xl shadow-lg hover-lift"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex-1">
                <h1 className="text-xl font-bold text-white mb-1">معاينة النموذج</h1>
                <p className="text-blue-200 text-sm">{currentService.name}</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 glass rounded-2xl shadow-lg hover-lift"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Document Preview */}
          <div className="p-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                <FileText className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">نموذج {currentService.name}</h3>
                <p className="text-gray-600 text-sm mb-6">
                  هذا نموذج رسمي من الإدارة الجزائرية
                </p>
                
                <div className="bg-gray-50 rounded-xl p-4 text-right space-y-2">
                  <h4 className="font-bold text-gray-800 mb-3">المتطلبات:</h4>
                  {currentService.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    المكان: {currentService.location}
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleDownload}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                تحميل النموذج
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6">
          <div className="flex items-center gap-4 relative z-10">
            <button
              onClick={onClose}
              className="p-3 glass rounded-2xl shadow-lg hover-lift"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white mb-1">تحميل النموذج</h1>
              <p className="text-blue-200 text-sm">{currentService.name}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Document Info */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-800">معلومات النموذج</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-semibold text-blue-800 mb-2">{currentService.name}</h3>
                <p className="text-blue-700 text-sm">
                  نموذج رسمي معتمد من الإدارة الجزائرية
                </p>
              </div>
              <div className="text-sm text-gray-600">
                <p><strong>المكان:</strong> {currentService.location}</p>
                <p><strong>الصيغة:</strong> PDF</p>
                <p><strong>الحجم:</strong> 2.5 MB تقريباً</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">المتطلبات قبل التحميل:</h3>
            <div className="space-y-2">
              {currentService.requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handlePreview}
              className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              معاينة النموذج
            </button>

            <button
              onClick={handleDownload}
              disabled={isDownloaded}
              className={`w-full font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 ${
                isDownloaded 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
              }`}
            >
              {isDownloaded ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  تم التحميل بنجاح
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  تحميل النموذج الآن
                </>
              )}
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">تعليمات:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• املأ النموذج بالبيانات الصحيحة</li>
              <li>• تأكد من وضوح الخط والكتابة</li>
              <li>• أرفق جميع الوثائق المطلوبة</li>
              <li>• قدم الطلب في المكان المحدد</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
