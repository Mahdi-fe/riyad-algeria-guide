
import React, { useState } from 'react';
import { Shield, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, User, CheckCircle, ArrowLeft, Scale } from 'lucide-react';
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
    { 
      id: 'citizen', 
      label: 'مواطن عادي',
      labelFr: 'Citoyen',
      icon: <User className="w-5 h-5" />,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      id: 'lawyer', 
      label: 'محامي',
      labelFr: 'Avocat',
      icon: <Scale className="w-5 h-5" />,
      gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    { 
      id: 'officer', 
      label: 'موظف إداري',
      labelFr: 'Agent Administratif',
      icon: <Shield className="w-5 h-5" />,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-md mx-auto min-h-screen flex flex-col safe-area-padding">
        {/* Header - تم تقليل الحجم */}
        <div className="gradient-government px-6 py-10 rounded-b-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-transparent to-blue-800/10"></div>
          <div className="absolute top-8 left-8 w-20 h-20 bg-white/5 rounded-full blur-xl animate-gentle-float"></div>
          <div className="absolute bottom-6 right-10 w-16 h-16 bg-blue-300/8 rounded-full blur-md animate-professional-pulse"></div>
          
          <div className="relative z-10">
            <button
              onClick={onBack}
              className="mb-4 p-2 glass rounded-xl shadow-md hover-lift"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 glass-elevated rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                <img 
                  src="/lovable-uploads/e07eb29a-fa9e-4606-87ca-b0f92e4ba0ef.png" 
                  alt="AdminFiles Logo" 
                  className="w-10 h-10 object-contain drop-shadow-sm"
                />
              </div>
              <h1 className="text-2xl font-bold text-white mb-3 tracking-tight">إنشاء حساب جديد</h1>
              <div className="space-y-1">
                <p className="text-blue-100 text-lg font-semibold">انضم إلى AdminFiles</p>
                <p className="text-blue-200 text-sm">Créez votre compte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign up form - تم تقليل المسافات */}
        <div className="flex-1 px-5 py-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-gray-800 font-bold text-sm block mb-2">الاسم الكامل</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 pr-10 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-base text-right bg-white shadow-sm"
                  placeholder="محمد فتاح"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* User Type Selection - تم تحسين التخطيط والأحجام */}
            <div>
              <label className="text-gray-800 font-bold text-sm block mb-3">نوع المستخدم</label>
              
              {/* First row - Citizen and Lawyer */}
              <div className="flex gap-3 mb-3">
                {userTypes.slice(0, 2).map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: type.id })}
                    className={`flex-1 ${type.bgColor} border-2 ${
                      formData.userType === type.id ? type.borderColor : 'border-gray-200'
                    } rounded-xl p-3 transition-all duration-300 ${
                      formData.userType === type.id ? 'shadow-md' : 'hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center space-y-2">
                      <div className={`${type.gradient} text-white rounded-lg shadow-md p-2 mx-auto w-fit`}>
                        {type.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 mb-0.5">{type.label}</div>
                        <div className="text-xs text-gray-500 font-medium">{type.labelFr}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Second row - Administrative Officer */}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, userType: userTypes[2].id })}
                className={`w-full ${userTypes[2].bgColor} border-2 ${
                  formData.userType === userTypes[2].id ? userTypes[2].borderColor : 'border-gray-200'
                } rounded-xl p-3 transition-all duration-300 ${
                  formData.userType === userTypes[2].id ? 'shadow-md' : 'hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 text-center justify-center">
                  <div className={`${userTypes[2].gradient} text-white rounded-lg shadow-md p-2`}>
                    {userTypes[2].icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 mb-0.5">{userTypes[2].label}</div>
                    <div className="text-xs text-gray-500 font-medium">{userTypes[2].labelFr}</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Login method toggle - تم تقليل الحجم */}
            <div className="glass-government rounded-xl p-1.5 mb-4 border border-blue-200/50">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setLoginMethod('email')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    loginMethod === 'email' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  البريد الإلكتروني
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('phone')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    loginMethod === 'phone' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  رقم الهاتف
                </button>
              </div>
            </div>

            {/* Input fields - تم تقليل الأحجام */}
            <div className="space-y-4">
              <div>
                <label className="text-gray-800 font-bold text-sm block mb-2">
                  {loginMethod === 'email' ? 'البريد الإلكتروني' : 'رقم الهاتف'}
                </label>
                <div className="relative">
                  <input
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                    className="w-full px-4 py-3 pr-10 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-base text-right bg-white shadow-sm"
                    placeholder={loginMethod === 'email' ? 'example@email.com' : '+213 XX XX XX XX'}
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {loginMethod === 'email' ? (
                      <Mail className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Phone className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-gray-800 font-bold text-sm block mb-2">كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 pr-10 pl-10 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-base text-right bg-white shadow-sm"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-blue-50"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-gray-800 font-bold text-sm block mb-2">تأكيد كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 pr-10 pl-10 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-base text-right bg-white shadow-sm"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-blue-50"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Sign up button - تم تقليل الحجم */}
            <button
              type="submit"
              className="w-full government-button py-3 text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>إنشاء الحساب</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Security notice - تم تقليل الحجم */}
          <div className="mt-5 glass-government rounded-xl p-4 border border-green-200/50">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-md">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-800 text-sm mb-1">الأمان والحماية المضمونة</h4>
                <p className="text-green-700 text-xs leading-relaxed mb-2">
                  جميع بياناتك محمية ومشفرة وفقاً لأعلى معايير الأمان الحكومية المعتمدة
                </p>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-green-600" />
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
