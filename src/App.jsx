
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Clients from './components/Clients';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default App;
