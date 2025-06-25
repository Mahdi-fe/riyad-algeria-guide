
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
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Modern header */}
        <div className="bg-blue-600 px-8 py-12 rounded-b-3xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">تسجيل الدخول</h1>
            <p className="text-blue-100 text-lg">ادخل إلى حسابك الرسمي</p>
            <p className="text-blue-200 text-sm mt-1">Connectez-vous à votre compte officiel</p>
          </div>
        </div>

        {/* Login form */}
        <div className="flex-1 px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Login method toggle */}
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-4 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'email' 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'text-gray-600'
                }`}
              >
                <Mail className="w-4 h-4" />
                البريد الإلكتروني
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-4 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'phone' 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'text-gray-600'
                }`}
              >
                <Phone className="w-4 h-4" />
                رقم الهاتف
              </button>
            </div>

            {/* Input fields */}
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 font-semibold text-base block mb-3">
                  {loginMethod === 'email' ? 'البريد الإلكتروني' : 'رقم الهاتف'}
                </label>
                <div className="relative">
                  <input
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-lg text-right bg-white"
                    placeholder={loginMethod === 'email' ? 'example@email.com' : '+213 XX XX XX XX'}
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    {loginMethod === 'email' ? (
                      <Mail className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Phone className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-gray-800 font-semibold text-base block mb-3">كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-6 py-5 pr-14 pl-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-lg text-right bg-white"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-left">
              <button type="button" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                نسيت كلمة المرور؟
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-5 rounded-2xl text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
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
                <span className="bg-white px-6 text-gray-500 font-medium">أو</span>
              </div>
            </div>

            {/* Sign up */}
            <div className="text-center space-y-4">
              <p className="text-gray-600 font-medium">ليس لديك حساب؟</p>
              <button
                type="button"
                onClick={onSignUp}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-5 rounded-2xl text-lg transition-colors flex items-center justify-center gap-3"
              >
                <User className="w-5 h-5" />
                <span>إنشاء حساب جديد</span>
              </button>
            </div>
          </form>

          {/* Security notice */}
          <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-200 rounded-xl">
                <Shield className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-base mb-2">أمان وحماية البيانات</h4>
                <p className="text-green-700 text-sm leading-relaxed">
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
