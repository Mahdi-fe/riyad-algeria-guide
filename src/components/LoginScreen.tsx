
import React, { useState } from 'react';
import { Shield, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface LoginScreenProps {
  onLogin: () => void;
  onSignUp: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSignUp }) => {
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate credentials
    onLogin();
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md mx-auto glass-government min-h-screen flex flex-col">
        {/* Header */}
        <div className="relative overflow-hidden gradient-government p-8 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-transparent to-blue-800/10"></div>
          <div className="absolute top-12 left-12 w-28 h-28 bg-white/5 rounded-full blur-xl animate-gentle-float"></div>
          <div className="absolute top-16 right-20 w-20 h-20 bg-blue-300/8 rounded-full blur-lg animate-professional-pulse"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 glass-elevated rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
              <Shield className="w-10 h-10 text-blue-700 animate-professional-pulse" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">تسجيل الدخول</h1>
            <p className="text-blue-100 text-lg">ادخل إلى حسابك للوصول للخدمات</p>
            <p className="text-blue-200 text-sm mt-1">Connectez-vous à votre compte</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex-1 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Login method selection */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'email' 
                    ? 'bg-white text-blue-800 shadow-md' 
                    : 'text-gray-600 hover:text-blue-800'
                }`}
              >
                <Mail className="w-4 h-4" />
                البريد الإلكتروني
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'phone' 
                    ? 'bg-white text-blue-800 shadow-md' 
                    : 'text-gray-600 hover:text-blue-800'
                }`}
              >
                <Phone className="w-4 h-4" />
                رقم الهاتف
              </button>
            </div>

            {/* Identifier input */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm block">
                {loginMethod === 'email' ? 'البريد الإلكتروني' : 'رقم الهاتف'}
              </label>
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {loginMethod === 'email' ? (
                    <Mail className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Phone className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <input
                  type={loginMethod === 'email' ? 'email' : 'tel'}
                  value={formData.identifier}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  className="w-full pr-12 pl-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-right"
                  placeholder={loginMethod === 'email' ? 'example@email.com' : '+213 XX XX XX XX'}
                  required
                />
              </div>
            </div>

            {/* Password input */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm block">كلمة المرور</label>
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pr-12 pl-12 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-right"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-left">
              <button type="button" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                نسيت كلمة المرور؟
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full government-button py-4 text-lg flex items-center justify-center gap-3"
            >
              <span>تسجيل الدخول</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-gray-500 text-sm">أو</span>
              </div>
            </div>

            {/* Sign up */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">ليس لديك حساب؟</p>
              <button
                type="button"
                onClick={onSignUp}
                className="w-full secondary-button py-4 text-lg flex items-center justify-center gap-3"
              >
                <User className="w-5 h-5" />
                <span>إنشاء حساب جديد</span>
              </button>
            </div>
          </form>

          {/* Security notice */}
          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-200 rounded-lg">
                <Shield className="w-4 h-4 text-green-700" />
              </div>
              <div>
                <h4 className="font-semibold text-green-800 text-sm mb-1">أمان وحماية البيانات</h4>
                <p className="text-green-700 text-xs leading-relaxed">
                  جميع بياناتك محمية ومشفرة وفقاً لأعلى معايير الأمان الحكومية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
