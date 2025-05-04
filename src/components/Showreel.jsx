
import React from 'react';

const Showreel = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
        alt="Snowy mountain landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <h2 className="relative z-10 font-mono text-5xl md:text-7xl font-bold text-white tracking-wider">
        SHOWREEL
      </h2>
    </section>
  );
};

export default Showreel;
