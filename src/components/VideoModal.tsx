import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          aria-label="Fermer la vidéo"
        >
          <X className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
            title="Digital Service Technologie - Présentation"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
            Digital Service Technologie
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Découvrez notre approche unique et nos solutions digitales innovantes pour propulser votre entreprise vers le succès.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;