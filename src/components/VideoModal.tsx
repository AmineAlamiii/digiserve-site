import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh]">
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-10 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          aria-label="Fermer la vidéo"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>
        
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
            title="Digital Service Web - Présentation"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="p-3 sm:p-4 md:p-6">
          <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
            Digital Service Web
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Découvrez notre approche unique et nos solutions digitales innovantes pour propulser votre entreprise vers le succès.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;