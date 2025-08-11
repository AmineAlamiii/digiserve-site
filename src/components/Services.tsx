import React from 'react';
import { Code, Smartphone, Share2, Palette, Camera, Database } from 'lucide-react';

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
    },
    {
      icon: Database,
      title: 'Digital Marketing',
      description: 'Stratégies marketing digital complètes pour augmenter votre visibilité et générer des leads qualifiés.',
      features: ['SEO & SEM', 'Content Marketing', 'Email Marketing', 'Analytics & ROI']
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nos Services
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Des solutions digitales complètes pour propulser votre entreprise vers le succès
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                  {service.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-500">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;