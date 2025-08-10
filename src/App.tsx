import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;