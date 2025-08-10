import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah El Amrani',
      position: 'Directrice Marketing',
      company: 'Atlas Fashion',
      content: 'L\'équipe de Digital Service Technologie a transformé notre présence en ligne. Leur approche professionnelle et leur créativité ont dépassé nos attentes.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Mohammed Benali',
      position: 'CEO',
      company: 'TechStart Solutions',
      content: 'Un partenaire de confiance qui comprend nos besoins. Le développement de notre application mobile s\'est déroulé parfaitement, dans les temps et le budget.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Fatima Zahra',
      position: 'Fondatrice',
      company: 'Bloom Beauty',
      content: 'Excellente gestion de nos réseaux sociaux ! Nos ventes ont augmenté de 150% en 6 mois grâce à leur stratégie digitale personnalisée.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Youssef Alami',
      position: 'Directeur Commercial',
      company: 'Maroc Export Plus',
      content: 'Notre nouveau site e-commerce est un véritable succès ! Interface intuitive, performance excellente et accompagnement top. Je recommande vivement.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-blue-500/20">
              <Quote className="h-12 w-12 sm:h-16 sm:w-16" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium mb-6 sm:mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {testimonials[currentIndex].position} chez {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-50"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>

            <div className="flex space-x-1.5 sm:space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-50"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* All Testimonials Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`bg-white rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-blue-500 shadow-lg transform scale-105'
                  : 'shadow hover:shadow-lg hover:transform hover:scale-105'
              }`}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover mr-2 sm:mr-3"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-xs sm:text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-gray-600 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;