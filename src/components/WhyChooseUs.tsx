import React from 'react';
import { Award, Clock, Users, Brain, Palette, Camera } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Brain,
      title: 'Expertise Technique',
      description: 'Notre équipe maîtrise les dernières technologies pour vous offrir des solutions innovantes et performantes.'
    },
    {
      icon: Clock,
      title: 'Livraison Rapide',
      description: 'Méthodologie agile et processus optimisés pour respecter vos délais sans compromis sur la qualité.'
    },
    {
      icon: Users,
      title: 'Support Personnalisé',
      description: 'Accompagnement sur mesure et support technique réactif pour assurer votre réussite digitale.'
    },
    {
      icon: Award,
      title: 'Qualité Garantie',
      description: 'Standards de qualité élevés et processus de validation rigoureux pour des résultats exceptionnels.'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Des avantages concrets qui font la différence pour votre succès digital
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-2 sm:gap-3 md:gap-4 lg:gap-6 pb-4">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 flex-shrink-0"
                style={{ minWidth: '200px', width: '25%' }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-2 sm:mb-3 md:mb-6 h-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-xs md:text-sm lg:text-base">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
              Discutons de vos besoins et créons ensemble la solution digitale parfaite pour votre entreprise.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Parlons de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;