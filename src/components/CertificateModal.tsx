import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imagePath: string;
}

export function CertificateModal({ isOpen, onClose, title, imagePath }: CertificateModalProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={`relative max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden ${
          theme === 'dark' ? 'bg-slate-900' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <h3 className="text-xl font-semibold heading-font">{title}</h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'hover:bg-slate-800'
                : 'hover:bg-slate-100'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image */}
        <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23334155" width="800" height="600"/%3E%3Ctext fill="%2394a3b8" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ECertificate Image Not Found%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
      </div>
    </div>
  );
}
