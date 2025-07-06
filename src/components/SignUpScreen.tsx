
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
      icon: <User className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      id: 'lawyer', 
      label: 'محامي',
      labelFr: 'Avocat',
      icon: <Scale className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    { 
      id: 'officer', 
      label: 'موظف إداري',
      labelFr: 'Agent Administratif',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
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
                <img 
                  src="/lovable-uploads/e07eb29a-fa9e-4606-87ca-b0f92e4ba0ef.png" 
                  alt="AdminFiles Logo" 
                  className="w-16 h-16 object-contain drop-shadow-sm"
                />
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

            {/* User Type Selection with improved layout */}
            <div>
              <label className="text-gray-800 font-bold text-base block mb-4">نوع المستخدم</label>
              
              {/* First row - Citizen and Lawyer */}
              <div className="flex gap-4 mb-4">
                {userTypes.slice(0, 2).map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: type.id })}
                    className={`flex-1 ${type.bgColor} border-2 ${
                      formData.userType === type.id ? type.borderColor : 'border-gray-200'
                    } rounded-2xl p-4 transition-all duration-300 ${
                      formData.userType === type.id ? 'shadow-lg' : 'hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center space-y-3">
                      <div className={`${type.gradient} text-white rounded-xl shadow-lg p-3 mx-auto w-fit`}>
                        {type.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-1">{type.label}</div>
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
                } rounded-2xl p-4 transition-all duration-300 ${
                  formData.userType === userTypes[2].id ? 'shadow-lg' : 'hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4 text-center justify-center">
                  <div className={`${userTypes[2].gradient} text-white rounded-xl shadow-lg p-3`}>
                    {userTypes[2].icon}
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900 mb-1">{userTypes[2].label}</div>
                    <div className="text-sm text-gray-500 font-medium">{userTypes[2].labelFr}</div>
                  </div>
                </div>
              </button>
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
