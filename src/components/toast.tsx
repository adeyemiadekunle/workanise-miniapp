import { useToast } from '../hooks/ToastContext';
import { CheckCircle, XCircle, Info, AlertCircle } from 'lucide-react';

export default function ToastNotification() {
  const { toast, hideToast } = useToast();

  if (!toast.isVisible) return null;

  const getToastConfig = () => {
    switch (toast.type) {
      case 'success':
        return { bgColor: 'bg-green-400', Icon: CheckCircle };
      case 'error':
        return { bgColor: 'bg-red-400', Icon: XCircle };
      case 'info':
        return { bgColor: 'bg-blue-400', Icon: Info };
      default:
        return { bgColor: 'bg-gray-400', Icon: AlertCircle };
    }
  };

  const { bgColor, Icon } = getToastConfig();

  return (
    <div className={`fixed top-5 inset-x-4 z-99 flex items-center justify-between py-3 px-4 rounded-full shadow-lg text-white ${bgColor}`}>
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
        <span className="text-sm">{toast.message}</span>
      </div>
      <button 
        onClick={hideToast} 
        className="ml-3 text-white focus:outline-none hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
        aria-label="Close notification"
      >
        <XCircle className="w-5 h-5" />
      </button>
    </div>
  );
}