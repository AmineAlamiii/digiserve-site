import React from 'react';
import { TrendingUp, Users, Target, Award, Zap, Globe } from 'lucide-react';

const DigitalExpertise = () => {
  const expertise = [
    {
      icon: TrendingUp,
      title: 'Transformation DIGITALE',
      description: 'Accompagnement complet dans votre transformation DIGITALE pour moderniser votre business et améliorer votre compétitivité.',
      benefits: ['Stratégie DIGITALE sur mesure', 'Optimisation des processus', 'Formation des équipes', 'Suivi des performances']
    },
    {
      icon: Users,
      title: 'Expertise DIGITALE',
      description: 'Équipe d\'experts DIGITAUX expérimentés pour vous guider dans tous vos projets DIGITAUX avec une approche personnalisée.',
      benefits: ['Consultants DIGITAUX certifiés', 'Méthodologies éprouvées', 'Support technique 24/7', 'Résultats garantis']
    },
    {
      icon: Target,
      title: 'Solutions DIGITALES',
      description: 'Développement de solutions DIGITALES innovantes adaptées à vos besoins spécifiques et à votre secteur d\'activité.',
      benefits: ['Technologies de pointe', 'Architecture scalable', 'Sécurité renforcée', 'Maintenance proactive']
    },
    {
      icon: Award,
      title: 'Innovation DIGITALE',
      description: 'Pionnier de l\'innovation DIGITALE au Maroc, nous intégrons les dernières technologies pour vous donner un avantage concurrentiel.',
      benefits: ['IA & Machine Learning', 'Cloud Computing', 'IoT & Smart Solutions', 'Blockchain & Web3']
    },
    {
      icon: Zap,
      title: 'Performance DIGITALE',
      description: 'Optimisation de vos performances DIGITALES pour maximiser votre ROI et atteindre vos objectifs business rapidement.',
      benefits: ['Audit de performance', 'Optimisation continue', 'Monitoring avancé', 'Reporting détaillé']
    },
    {
      icon: Globe,
      title: 'Présence DIGITALE',
      description: 'Création et gestion de votre présence DIGITALE complète pour maximiser votre visibilité en ligne et votre impact.',
      benefits: ['Stratégie de marque DIGITALE', 'Gestion des réseaux sociaux', 'Content Marketing', 'E-réputation']
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Notre Expertise <span className="text-blue-600">DIGITALE</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4">
            Leader de l'innovation <strong>DIGITALE</strong> au Maroc, nous vous accompagnons dans votre transformation <strong>DIGITALE</strong> 
            avec des solutions <strong>DIGITALES</strong> sur mesure et une expertise <strong>DIGITALE</strong> reconnue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                  {item.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs sm:text-sm text-gray-500">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Prêt pour votre transformation <span className="text-yellow-300">DIGITALE</span> ?
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez les entreprises qui ont déjà transformé leur business avec nos solutions <strong>DIGITALES</strong> innovantes. 
              Contactez nos experts <strong>DIGITAUX</strong> dès aujourd'hui !
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Démarrer votre projet DIGITAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalExpertise; 