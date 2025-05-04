import React from 'react';

const Showreel = () => {
  return (
    <section id="showReel" className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/9N2dj1jWJD0?si=pbGpLqGlXuSLpEFw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-2xl"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <h2 className="relative z-10 font-mono text-5xl md:text-7xl font-bold text-white tracking-wider">
        SHOWREEL
      </h2>
    </section>
  );
};

export default Showreel;
