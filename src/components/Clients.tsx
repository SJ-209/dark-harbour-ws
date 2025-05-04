
import React from 'react';
import TacLogo from 'public/assets/511.png';
import RavenLogo from 'public/assets/RMG.png';
import StirlingLogo from 'public/assets/stirling.png';
import BritishArmyLogo from 'public/assets/BA.png';
import ChallengeCoinLogo from 'public/assets/cc.png';
import EsoterrecLogo from 'public/assets/esoterrec.png';
import MogGlovesLogo from 'public/assets/mog.png';
import ParcilsafetyLogo from 'public/assets/parcil.png';
import SunrayLogo from 'public/assets/sunray.png';
import C2RLogo from 'public/assets/c2r.png';
import RevealLogo from 'public/assets/reveal.png';




// Array of placeholder company names for logos
const clients = [
  "5.11 TACTICAL", 
  "RAVEN MEDIA GROUP", 
  "STIRLING TIMEPIECES", 
  "BRITISH ARMY", 
  "CHALLENGE COIN",
  "ESOTERREC", 
  "MOG GLOVES", 
  "PARCIL SAFETY", 
  "SUNRAY", 
  "IRON CLAD", 
  "DFCO", 
  "C2R", 
  "REVEAL"
];

const Clients = () => {
  return (
    <section id="clientWork" className="py-20 px-6 md:px-10 bg-white">
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
