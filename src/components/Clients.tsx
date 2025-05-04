
import React from 'react';

// Array of placeholder company names for logos
const clients = [
  "TEMPUR-PEDIC", "XTRATUF", "TETON", "VIDE SPORTS", "ARBOR",
  "YETI", "PATAGONIA", "PATHFINDER", "SPERRY", "NORTH FACE",
  "JACKSON HOLE", "BRAINFORM", "OLYMPIC CHANNEL", "PYRENEX", "KEEN",
  "BUD LIGHT", "SNOWBOARDING", "UNION", "SNOW BOARDER", "VOLCOM",
  "LABOUR", "RED BULL", "ANDTHEDOPE TOO", "WILDCARD", "ROCKY MOUNTAIN",
  "VICE NEWS", "CITY", "HANAH", "REVISION", "STAR",
  "METAL", "ROARK", "QUIKSILVER", "ARIAT", "MIZU"
];

const Clients = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-gray-100 px-4 py-2 w-full text-center">
                <p className="text-xs text-gray-500">{client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
