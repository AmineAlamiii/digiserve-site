import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openVideo = () => {
    setIsVideoOpen(true);
  };
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-blue-500/10 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-purple-500/10 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Votre vision,
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline"> notre expertise</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Agence digitale innovante au Maroc, nous transformons vos idées en solutions digitales performantes et sur mesure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Contactez-nous maintenant
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={openVideo}
              className="flex items-center justify-center gap-3 text-white hover:text-blue-400 transition-colors duration-300 w-full sm:w-auto"
            >
              <div className="bg-white/20 p-2 sm:p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                <Play className="h-5 w-5 sm:h-6 sm:w-6 ml-0.5 sm:ml-1" />
              </div>
              <span className="text-base sm:text-lg font-medium">Voir notre présentation</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-300">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base text-gray-300">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">3+</div>
              <div className="text-sm sm:text-base text-gray-300">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
      </div>
    </section>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
};

export default Hero;