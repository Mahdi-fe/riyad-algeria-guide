
import React, { useState } from 'react';
import { X, Search, Filter, MessageSquare, Clock, CheckCircle2, AlertCircle, Scale, Calendar, User, FileText, Reply, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface LegalConsultationBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Consultation {
  id: string;
  clientName: string;
  title: string;
  content: string;
  type: 'administrative' | 'civil' | 'commercial' | 'family' | 'criminal';
  status: 'new' | 'in-progress' | 'answered';
  date: string;
  priority: 'low' | 'medium' | 'high';
}

const LegalConsultationBox: React.FC<LegalConsultationBoxProps> = ({ isOpen, onClose }) => {
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [response, setResponse] = useState('');
  const [showResponseForm, setShowResponseForm] = useState(false);

  // Sample data
  const consultations: Consultation[] = [
    {
      id: '1',
      clientName: 'أحمد محمد علي',
      title: 'استشارة حول عقد العمل',
      content: 'أحتاج استشارة قانونية حول حقوقي في عقد العمل الحالي وإمكانية إنهاء العقد دون تحمل أي تبعات قانونية...',
      type: 'civil',
      status: 'new',
      date: '2024-01-15',
      priority: 'high'
    },
    {
      id: '2',
      clientName: 'فاطمة الزهراء',
      title: 'قضية ميراث',
      content: 'لدي قضية ميراث معقدة وأحتاج إلى استشارة قانونية حول كيفية تقسيم التركة وفقاً للشريعة الإسلامية...',
      type: 'family',
      status: 'in-progress',
      date: '2024-01-14',
      priority: 'medium'
    },
    {
      id: '3',
      clientName: 'خالد بن سعد',
      title: 'تأسيس شركة تجارية',
      content: 'أرغب في تأسيس شركة تجارية وأحتاج إلى معرفة الإجراءات القانونية والمتطلبات اللازمة...',
      type: 'commercial',
      status: 'answered',
      date: '2024-01-13',
      priority: 'low'
    }
  ];

  const getTypeLabel = (type: string) => {
    const types = {
      administrative: 'إدارية',
      civil: 'مدنية',
      commercial: 'تجارية',
      family: 'أسرية',
      criminal: 'جنائية'
    };
    return types[type as keyof typeof types] || type;
  };

  const getStatusLabel = (status: string) => {
    const statuses = {
      new: 'جديدة',
      'in-progress': 'قيد المعالجة',
      answered: 'تمت الإجابة'
    };
    return statuses[status as keyof typeof statuses] || status;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-red-100 text-red-700';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700';
      case 'answered': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'medium': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'low': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  const filteredConsultations = consultations.filter(consultation => {
    const matchesSearch = consultation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultation.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || consultation.status === statusFilter;
    const matchesType = typeFilter === 'all' || consultation.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleSendResponse = () => {
    if (response.trim()) {
      console.log('إرسال رد:', response);
      setResponse('');
      setShowResponseForm(false);
      // Update consultation status to answered
      setSelectedConsultation(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">صندوق الاستشارات القانونية</h2>
              <p className="text-amber-600 font-medium">إدارة الاستشارات القانونية</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Consultations List */}
          <div className={`${selectedConsultation ? 'w-1/2' : 'w-full'} border-r border-gray-200 flex flex-col`}>
            {/* Filters */}
            <div className="p-4 border-b border-gray-100 space-y-4">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="البحث في الاستشارات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الحالات</SelectItem>
                    <SelectItem value="new">جديدة</SelectItem>
                    <SelectItem value="in-progress">قيد المعالجة</SelectItem>
                    <SelectItem value="answered">تمت الإجابة</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأنواع</SelectItem>
                    <SelectItem value="administrative">إدارية</SelectItem>
                    <SelectItem value="civil">مدنية</SelectItem>
                    <SelectItem value="commercial">تجارية</SelectItem>
                    <SelectItem value="family">أسرية</SelectItem>
                    <SelectItem value="criminal">جنائية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Consultations Table */}
            <div className="flex-1 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>العميل</TableHead>
                    <TableHead>العنوان</TableHead>
                    <TableHead>النوع</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>الأولوية</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredConsultations.map((consultation) => (
                    <TableRow
                      key={consultation.id}
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => setSelectedConsultation(consultation)}
                    >
                      <TableCell className="font-medium">{consultation.clientName}</TableCell>
                      <TableCell className="max-w-xs truncate">{consultation.title}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {getTypeLabel(consultation.type)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(consultation.status)}`}>
                          {getStatusLabel(consultation.status)}
                        </span>
                      </TableCell>
                      <TableCell>{consultation.date}</TableCell>
                      <TableCell>{getPriorityIcon(consultation.priority)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Right Panel - Consultation Details */}
          {selectedConsultation && (
            <div className="w-1/2 flex flex-col">
              {/* Consultation Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{selectedConsultation.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {selectedConsultation.clientName}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedConsultation.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedConsultation.status)}`}>
                        {getStatusLabel(selectedConsultation.status)}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {getTypeLabel(selectedConsultation.type)}
                      </span>
                    </div>
                  </div>
                  {getPriorityIcon(selectedConsultation.priority)}
                </div>
              </div>

              {/* Consultation Content */}
              <div className="flex-1 p-6 overflow-auto">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    محتوى الاستشارة
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
                    {selectedConsultation.content}
                  </div>
                </div>

                {/* Response Form */}
                {!showResponseForm ? (
                  <Button
                    onClick={() => setShowResponseForm(true)}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                  >
                    <Reply className="w-4 h-4 mr-2" />
                    الرد على الاستشارة
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      كتابة الرد القانوني
                    </h4>
                    <Textarea
                      placeholder="اكتب ردك القانوني المفصل هنا..."
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      className="min-h-[200px] resize-none"
                    />
                    <div className="flex gap-3">
                      <Button
                        onClick={handleSendResponse}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        إرسال الرد
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowResponseForm(false)}
                        className="flex-1"
                      >
                        إلغاء
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalConsultationBox;
