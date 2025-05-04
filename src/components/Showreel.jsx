
import React from 'react';

const Showreel = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Showreel</h2>
          <p className="text-gray-600 max-w-2xl">
            Take a look at some of our best work from the past year. We've worked with brands and organizations across various industries.
          </p>
        </div>

        {/* Video placeholder */}
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-12">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500">Showreel Video Placeholder</p>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Project Image {item}</p>
                </div>
              </div>
              <h3 className="font-medium text-lg mb-1">Project Title {item}</h3>
              <p className="text-gray-600 text-sm">Brand name • Type of project</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showreel;
