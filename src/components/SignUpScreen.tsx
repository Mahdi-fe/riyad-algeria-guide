
import React, { useState } from 'react';
import { Shield, Mail, Phone, Lock, Eye, EyeOff, User, ArrowRight, ArrowLeft, Scale, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SignUpScreenProps {
  onSignUp: (userType: string) => void;
  onBack: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onSignUp, onBack }) => {
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userTypes = [
    {
      id: 'citizen',
      title: 'مواطن',
      description: 'للخدمات الحكومية العامة',
      icon: <User className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'lawyer',
      title: 'محامي',
      description: 'للخدمات القانونية المتخصصة',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'officer',
      title: 'موظف إداري',
      description: 'لأدوات الإدارة والمتابعة',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'business',
      title: 'صاحب مؤسسة',
      description: 'لخدمات الأعمال والتجارة',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    if (!formData.userType) {
      alert('يرجى اختيار نوع المستخدم');
      return;
    }
    onSignUp(formData.userType);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md mx-auto glass-government min-h-screen flex flex-col">
        {/* Header */}
        <div className="relative overflow-hidden gradient-government p-8 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-transparent to-blue-800/10"></div>
          <div className="absolute top-12 left-12 w-28 h-28 bg-white/5 rounded-full blur-xl animate-gentle-float"></div>
          <div className="absolute top-16 right-20 w-20 h-20 bg-blue-300/8 rounded-full blur-lg animate-professional-pulse"></div>
          
          <div className="relative z-10">
            <button
              onClick={onBack}
              className="mb-6 p-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300"
            >
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 glass-elevated rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                <User className="w-10 h-10 text-blue-700 animate-professional-pulse" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">إنشاء حساب جديد</h1>
              <p className="text-blue-100 text-lg">انضم إلى منصة الخدمات الرسمية</p>
              <p className="text-blue-200 text-sm mt-1">Créez votre compte officiel</p>
            </div>
          </div>
        </div>

        {/* Sign up Form */}
        <div className="flex-1 p-8 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full name */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm block">الاسم الكامل</label>
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pr-12 pl-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-right"
                  placeholder="أحمد بن علي"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm block">البريد الإلكتروني</label>
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pr-12 pl-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-right"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm block">رقم الهاتف</label>
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pr-12 pl-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-right"
                  placeholder="+213 XX XX XX XX"
                  required
                />
              </div>
            </div>

            {/* Password */}
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

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm block">تأكيد كلمة المرور</label>
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pr-12 pl-12 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-right"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* User Type Selection */}
            <div className="space-y-3">
              <label className="text-gray-700 font-medium text-sm block">نوع المستخدم</label>
              <div className="grid grid-cols-2 gap-3">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: type.id })}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                      formData.userType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white`}>
                      {type.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{type.title}</h3>
                    <p className="text-xs text-gray-600">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Sign up button */}
            <button
              type="submit"
              className="w-full government-button py-4 text-lg flex items-center justify-center gap-3"
            >
              <span>إنشاء الحساب</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Terms and security */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-200 rounded-lg">
                  <Shield className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm mb-1">الشروط والأحكام</h4>
                  <p className="text-blue-700 text-xs leading-relaxed">
                    بإنشاء حساب، أنت توافق على شروط الاستخدام وسياسة الخصوصية للخدمات الحكومية الرسمية
                  </p>
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
