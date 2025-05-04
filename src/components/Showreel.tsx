import React from 'react';

const Showreel = () => {
  return (
    <section id="showReel" className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative w-full max-w-[960px] aspect-video">
          <iframe
            src="https://www.youtube.com/embed/9N2dj1jWJD0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
      
      <h2 className="relative z-30 font-mono text-5xl md:text-7xl font-bold text-white tracking-wider pointer-events-none">
        {/* SHOWREEL */}
      </h2>
    </section>
  );
};

export default Showreel;
