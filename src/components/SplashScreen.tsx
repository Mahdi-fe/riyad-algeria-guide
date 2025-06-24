
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
      {/* Mobile-optimized background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-gentle-float"></div>
        <div className="absolute top-32 right-24 w-20 h-20 bg-blue-300/10 rounded-full blur-lg animate-professional-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-indigo-300/8 rounded-full blur-xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-24 right-16 w-16 h-16 bg-white/3 rounded-full blur-md animate-professional-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="text-center animate-fade-in-scale px-6">
        {/* Mobile-sized national emblem */}
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-gentle-float">
          <Shield className="w-12 h-12 text-white" />
        </div>

        {/* Mobile-optimized logo and title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">AdminFiles</h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-4 h-4 text-yellow-300" />
            <p className="text-xl text-blue-100 font-medium">بوابتك الإدارية الرسمية</p>
            <Star className="w-4 h-4 text-yellow-300" />
          </div>
          <p className="text-blue-200 text-base">Votre Portail Administratif Officiel</p>
        </div>

        {/* Mobile-friendly government identification */}
        <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl inline-block mb-6">
          <p className="text-white font-semibold text-base">الجمهورية الجزائرية الديمقراطية الشعبية</p>
          <p className="text-blue-100 text-xs mt-1">République Algérienne Démocratique et Populaire</p>
        </div>

        {/* Mobile welcome message */}
        <div className="max-w-xs mx-auto mb-8">
          <p className="text-lg text-blue-100 leading-relaxed">
            مرحبًا بك في منصة الخدمات الحكومية الرقمية
          </p>
          <p className="text-blue-200 text-sm mt-2">
            جميع خدماتك الإدارية في مكان واحد آمن وموثوق
          </p>
        </div>

        {/* Mobile loading indicator */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-professional-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-professional-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-professional-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
