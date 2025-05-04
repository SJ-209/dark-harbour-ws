
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Showreel from '../components/Showreel';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Showreel />
      <Clients />
      <Footer />
    </div>
  );
};

export default Index;
