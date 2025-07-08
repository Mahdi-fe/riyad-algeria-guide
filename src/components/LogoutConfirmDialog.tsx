
import React from 'react';
import { LogOut, X } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface LogoutConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutConfirmDialog: React.FC<LogoutConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="w-[90%] max-w-md mx-auto rounded-2xl">
        <AlertDialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <LogOut className="w-8 h-8 text-red-600" />
          </div>
          <AlertDialogTitle className="text-xl font-bold text-gray-900">
            تسجيل الخروج
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 text-base mt-2">
            هل أنت متأكد من تسجيل الخروج؟
            <br />
            سيتم إنهاء الجلسة الحالية وإعادتك إلى الصفحة الرئيسية.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <AlertDialogFooter className="flex flex-col gap-3 mt-6">
          <AlertDialogAction asChild>
            <Button
              onClick={onConfirm}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4 ml-2" />
              نعم، تسجيل الخروج
            </Button>
          </AlertDialogAction>
          
          <AlertDialogCancel asChild>
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <X className="w-4 h-4 ml-2" />
              إلغاء
            </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutConfirmDialog;
