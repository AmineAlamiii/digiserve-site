import React from 'react';
import { Zap, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Développement Web',
    'Applications Mobiles',
    'Social Media',
    'Branding & Design',
    'Shooting Photo'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4 md:mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 sm:p-2 rounded-lg">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold">DigiServWeb</span>
            </div>
            
            <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 max-w-md leading-relaxed text-xs sm:text-sm md:text-base">
              Votre partenaire digital au Maroc. Nous transformons vos idées en solutions digitales performantes 
              qui propulsent votre business vers le succès.
            </p>

            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">contact@digiservweb.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">+212 6 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">Fès, Maroc</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-6">Navigation</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs sm:text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-6">Nos Services</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer text-xs sm:text-sm md:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Suivez-nous</h3>
              <div className="flex space-x-2 sm:space-x-3 md:space-x-4 justify-center lg:justify-start">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-gray-800 p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Prêt à démarrer ?</h3>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
              >
                Contactez-nous maintenant
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
          <div className="text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">Restez informé</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
              Recevez nos dernières actualités et conseils digitaux
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm md:text-base"
              />
              <button className="bg-white text-gray-900 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm space-y-2 sm:space-y-3 md:space-y-0">
          <div className="text-center sm:text-left">
            <p>&copy; {currentYear} Digital Service Web. Tous droits réservés.</p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 md:gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              CGV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
        aria-label="Retour en haut"
      >
        <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;