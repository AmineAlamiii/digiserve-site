import React from 'react';
import { Code, Smartphone, Share2, Palette, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web modernes, rapides et optimisés SEO. Développement sur mesure avec les dernières technologies.',
      features: ['React & Vue.js', 'Performance optimisée', 'Design responsive', 'SEO intégré']
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Applications iOS et Android natives et cross-platform pour une expérience utilisateur exceptionnelle.',
      features: ['iOS & Android', 'Interface intuitive', 'Performance native', 'Maintenance incluse']
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Gestion complète de vos réseaux sociaux pour augmenter votre visibilité et engagement.',
      features: ['Stratégie de contenu', 'Community management', 'Analytics détaillés', 'Publicité ciblée']
    },
    {
      icon: Palette,
      title: 'Branding & Identité',
      description: 'Création d\'identité visuelle forte et mémorable qui reflète parfaitement vos valeurs.',
      features: ['Logo & charte graphique', 'Identité visuelle', 'Supports marketing', 'Brand guidelines']
    },
    {
      icon: Camera,
      title: 'Shooting Photo Pro',
      description: 'Photographie professionnelle pour valoriser votre entreprise et vos produits.',
      features: ['Photos corporate', 'Produits & services', 'Retouche professionnelle', 'Usage commercial']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Des solutions digitales complètes pour propulser votre entreprise vers le succès
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-4 sm:mt-6 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 flex items-center group text-sm sm:text-base">
                  En savoir plus
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;