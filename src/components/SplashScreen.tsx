
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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Clean background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/3 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="text-center px-8 animate-fade-in-scale">
        {/* Modern app logo */}
        <div className="w-28 h-28 mx-auto mb-8 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
          <Shield className="w-16 h-16 text-blue-600" />
        </div>

        {/* Clean app branding */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">AdminFiles</h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
            <p className="text-xl text-blue-100 font-medium">بوابتك الإدارية الرقمية</p>
            <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
          <p className="text-blue-200 text-base">Votre Portail Administratif Numérique</p>
        </div>

        {/* Government identification */}
        <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8">
          <p className="text-white font-semibold text-base">الجمهورية الجزائرية الديمقراطية الشعبية</p>
          <p className="text-blue-100 text-sm mt-1">République Algérienne Démocratique et Populaire</p>
        </div>

        {/* Modern loading dots */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
