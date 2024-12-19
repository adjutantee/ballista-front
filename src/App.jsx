import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechnologySection from './components/TechnologySection';
import TelegramSection from './components/TelegramSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <TechnologySection />
      <TelegramSection />
      <Footer />
    </div>
  );
}

export default App;