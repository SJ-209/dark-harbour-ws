
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Showreel from '../components/Showreel';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Showreel />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
