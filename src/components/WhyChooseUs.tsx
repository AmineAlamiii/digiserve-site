import React from 'react';
import { Award, Clock, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Zap,
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des avantages concrets qui font la différence pour votre succès digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-600 mb-6">
              Discutons de vos besoins et créons ensemble la solution digitale parfaite pour votre entreprise.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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