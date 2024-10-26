import { useToast } from '../../../hooks/use-toast';
import { CheckCircle, XCircle, Info, AlertCircle } from 'lucide-react';

export default function ToastNotification() {
  const { toast, hideToast } = useToast();

  if (!toast.isVisible) return null;

  const getToastConfig = () => {
    switch (toast.type) {
      case 'success':
        return { iconColor: 'text-green-500', textColor: 'text-green-800', Icon: CheckCircle };
      case 'error':
        return { iconColor: 'text-red-500', textColor: 'text-red-800', Icon: XCircle };
      case 'info':
        return { iconColor: 'text-blue-500', textColor: 'text-blue-800', Icon: Info };
      default:
        return { iconColor: 'text-gray-500', textColor: 'text-gray-800', Icon: AlertCircle };
    }
  };

  const { iconColor, textColor, Icon } = getToastConfig();

  return (
    <div 
      className="fixed top-5 inset-x-4 z-[100] flex items-center justify-between py-3 px-4 rounded-full shadow-lg bg-white"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center">
        <Icon  className={`size-6 mr-2 ${iconColor}`} aria-hidden="true" />
        <span className={`text-base font-medium ${textColor}`}>
          {toast.message}
        </span>
      </div>
      <button 
        onClick={hideToast} 
        className="ml-3 focus:outline-none rounded-full p-1 transition-colors duration-200 hover:bg-gray-200"
        aria-label="Close notification"
      >
        <XCircle className="size-6 text-black" />
      </button>
    </div>
  );
}
