
import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We create powerful visual stories that connect and inspire
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl">
            WRKSHRT is a full-service production company specializing in commercial, narrative, and documentary filmmaking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#work" className="inline-block bg-white text-black px-6 py-3 font-medium rounded-md hover:bg-gray-100 transition duration-200">
              See our work
            </a>
            <a href="#contact" className="inline-block border border-white px-6 py-3 font-medium rounded-md hover:bg-white hover:text-black transition duration-200">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
