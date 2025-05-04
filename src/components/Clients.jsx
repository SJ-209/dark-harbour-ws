
import React from 'react';

const Clients = () => {
  // Array of placeholder client logos
  const clients = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by leading brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've had the pleasure of working with some amazing companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <div key={client} className="flex items-center justify-center p-4">
              <div className="bg-gray-200 h-12 w-36 rounded flex items-center justify-center">
                <span className="text-gray-500">Logo {client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
