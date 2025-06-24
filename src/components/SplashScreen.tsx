
import React, { useEffect } from 'react';
import { Shield, Star } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-gentle-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300/10 rounded-full blur-lg animate-professional-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-indigo-300/8 rounded-full blur-xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/3 rounded-full blur-md animate-professional-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="text-center animate-fade-in-scale">
        {/* National emblem placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-gentle-float">
          <Shield className="w-16 h-16 text-white" />
        </div>

        {/* Logo and title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">AdminFiles</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-300" />
            <p className="text-2xl text-blue-100 font-medium">بوابتك الإدارية الرسمية</p>
            <Star className="w-5 h-5 text-yellow-300" />
          </div>
          <p className="text-blue-200 text-lg">Votre Portail Administratif Officiel</p>
        </div>

        {/* Government identification */}
        <div className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl inline-block mb-8">
          <p className="text-white font-semibold text-lg">الجمهورية الجزائرية الديمقراطية الشعبية</p>
          <p className="text-blue-100 text-sm mt-1">République Algérienne Démocratique et Populaire</p>
        </div>

        {/* Welcome message */}
        <div className="max-w-md mx-auto">
          <p className="text-xl text-blue-100 leading-relaxed">
            مرحبًا بك في منصة الخدمات الحكومية الرقمية
          </p>
          <p className="text-blue-200 text-base mt-2">
            جميع خدماتك الإدارية في مكان واحد آمن وموثوق
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-12">
          <div className="w-2 h-2 bg-white rounded-full mx-auto animate-professional-pulse"></div>
          <div className="flex justify-center items-center gap-1 mt-4">
            <div className="w-3 h-3 bg-blue-300 rounded-full animate-professional-pulse"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-professional-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-professional-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
