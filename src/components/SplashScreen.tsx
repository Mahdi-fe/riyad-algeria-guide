
import React, { useEffect } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

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
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-300/8 rounded-full blur-xl animate-professional-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="text-center px-8 animate-fade-in-scale relative z-10">
        {/* App logo with the new AdminFiles logo */}
        <div className="w-40 h-40 mx-auto mb-8 bg-white/95 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl animate-gentle-float border border-white/20">
          <img 
            src="/lovable-uploads/e07eb29a-fa9e-4606-87ca-b0f92e4ba0ef.png" 
            alt="AdminFiles Logo" 
            className="w-32 h-32 object-contain drop-shadow-sm"
          />
        </div>

        {/* Enhanced app branding */}
        <div className="mb-12 space-y-6">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">AdminFiles</h1>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <p className="text-2xl text-blue-100 font-semibold drop-shadow-sm">بوابتك الإدارية الرقمية</p>
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <p className="text-blue-200 text-lg font-medium drop-shadow-sm">Votre Portail Administratif Numérique</p>
          </div>
        </div>

        {/* Enhanced government identification */}
        <div className="glass-elevated rounded-3xl px-8 py-6 mb-10 border border-white/20 backdrop-blur-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white font-bold text-base">رسمي ومعتمد</span>
            </div>
            <p className="text-white font-bold text-lg">الجمهورية الجزائرية الديمقراطية الشعبية</p>
            <p className="text-blue-100 text-base font-medium">République Algérienne Démocratique et Populaire</p>
          </div>
        </div>

        {/* Enhanced loading animation */}
        <div className="flex justify-center items-center gap-3">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.1s'}}></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        <p className="text-blue-200 text-sm mt-6 font-medium">جاري التحميل...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
