
import React, { useState } from 'react';
import { Shield, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, User, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SignUpScreenProps {
  onSignUp: (userType: string) => void;
  onBack: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onSignUp, onBack }) => {
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    userType: 'citizen'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('كلمة المرور غير متطابقة');
      return;
    }
    onSignUp(formData.userType);
  };

  const userTypes = [
    { id: 'citizen', label: 'مواطن عادي', icon: '🧍' },
    { id: 'lawyer', label: 'محامي مرخص', icon: '⚖️' },
    { id: 'officer', label: 'موظف إداري', icon: '🧑‍💼' },
    { id: 'business', label: 'صاحب مؤسسة', icon: '🏢' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-md mx-auto min-h-screen flex flex-col safe-area-padding">
        {/* Enhanced header */}
        <div className="gradient-government px-8 py-16 rounded-b-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-transparent to-blue-800/10"></div>
          <div className="absolute top-12 left-12 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-gentle-float"></div>
          <div className="absolute bottom-8 right-16 w-24 h-24 bg-blue-300/8 rounded-full blur-lg animate-professional-pulse"></div>
          
          <div className="relative z-10">
            <button
              onClick={onBack}
              className="mb-6 p-3 glass rounded-2xl shadow-lg hover-lift"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="text-center">
              <div className="w-24 h-24 glass-elevated rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <Shield className="w-12 h-12 text-blue-700 animate-professional-pulse" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">إنشاء حساب جديد</h1>
              <div className="space-y-2">
                <p className="text-blue-100 text-xl font-semibold">انضم إلى AdminFiles</p>
                <p className="text-blue-200 text-base">Créez votre compte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign up form */}
        <div className="flex-1 px-6 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-gray-800 font-bold text-base block mb-4">الاسم الكامل</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-6 py-5 pr-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg text-right bg-white shadow-sm"
                  placeholder="محمد فتاح"
                  required
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>

            {/* User Type Selection */}
            <div>
              <label className="text-gray-800 font-bold text-base block mb-4">نوع المستخدم</label>
              <div className="grid grid-cols-2 gap-3">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: type.id })}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      formData.userType === type.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="text-sm font-semibold">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Login method toggle */}
            <div className="glass-government rounded-2xl p-2 mb-8 border border-blue-200/50">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setLoginMethod('email')}
                  className={`flex-1 py-4 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                    loginMethod === 'email' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  البريد الإلكتروني
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('phone')}
                  className={`flex-1 py-4 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                    loginMethod === 'phone' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  رقم الهاتف
                </button>
              </div>
            </div>

            {/* Input fields */}
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 font-bold text-base block mb-4">
                  {loginMethod === 'email' ? 'البريد الإلكتروني' : 'رقم الهاتف'}
                </label>
                <div className="relative">
                  <input
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                    className="w-full px-6 py-5 pr-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg text-right bg-white shadow-sm"
                    placeholder={loginMethod === 'email' ? 'example@email.com' : '+213 XX XX XX XX'}
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    {loginMethod === 'email' ? (
                      <Mail className="w-6 h-6 text-gray-400" />
                    ) : (
                      <Phone className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-gray-800 font-bold text-base block mb-4">كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-6 py-5 pr-14 pl-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg text-right bg-white shadow-sm"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-lg hover:bg-blue-50"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-gray-800 font-bold text-base block mb-4">تأكيد كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-6 py-5 pr-14 pl-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg text-right bg-white shadow-sm"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-lg hover:bg-blue-50"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Sign up button */}
            <button
              type="submit"
              className="w-full government-button py-5 text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
            >
              <span>إنشاء الحساب</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>

          {/* Enhanced security notice */}
          <div className="mt-8 glass-government rounded-2xl p-6 border border-green-200/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-800 text-base mb-2">الأمان والحماية المضمونة</h4>
                <p className="text-green-700 text-sm leading-relaxed mb-3">
                  جميع بياناتك محمية ومشفرة وفقاً لأعلى معايير الأمان الحكومية المعتمدة
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 text-xs font-medium">معتمد من الحكومة الجزائرية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
