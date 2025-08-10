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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
        >
          <X className="h-6 w-6" />
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
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Digital Service Technologie
          </h3>
          <p className="text-gray-600">
            Découvrez notre approche unique et nos solutions digitales innovantes pour propulser votre entreprise vers le succès.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;