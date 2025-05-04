import React from 'react';
import TacLogo from '../assets/511.png';
import RavenLogo from '../assets/RMG.png';
import StirlingLogo from '../assets/stirling.png';
import BritishArmyLogo from '../assets/BA.png';
import ChallengeCoinLogo from '../assets/cc.png';
import EsoterrecLogo from '../assets/esoterrec.png';
import MogGlovesLogo from '../assets/mog.png';
import ParcilsafetyLogo from '../assets/parcil.png';
import SunrayLogo from '../assets/sunray.png';
import C2RLogo from '../assets/c2r.png';
import RevealLogo from '../assets/reveal.png';

// Array of placeholder company names for logos
const clients = [
  {name: "5.11 TACTICAL", logo: TacLogo},
  {name: "RAVEN MEDIA GROUP", logo: RavenLogo},
  {name: "STIRLING TIMEPIECES", logo: StirlingLogo},
  {name: "BRITISH ARMY", logo: BritishArmyLogo},
  {name: "CHALLENGE COIN", logo: ChallengeCoinLogo},
  {name: "ESOTERREC", logo: EsoterrecLogo},
  {name: "MOG GLOVES", logo: MogGlovesLogo},
  {name: "PARCIL SAFETY", logo: ParcilsafetyLogo},
  {name: "SUNRAY", logo: SunrayLogo},
  {name: "C2R", logo: C2RLogo},
  {name: "REVEAL", logo: RevealLogo}, 
  // "RAVEN MEDIA GROUP", 
  // "STIRLING TIMEPIECES", 
  // "BRITISH ARMY", 
  // "CHALLENGE COIN",
  // "ESOTERREC", 
  // "MOG GLOVES", 
  // "PARCIL SAFETY", 
  // "SUNRAY", 
  // "IRON CLAD", 
  // "DFCO", 
  // "C2R", 
  // "REVEAL"
];

const Clients = () => {
  return (
    <section id="clientWork" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-8">
          {clients.map((client, index) => (
            <div key={client.name} className="flex items-center justify-center">
              <div className=" px-4 py-2 w-full text-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 rounded-lg w-auto mx-auto mb-2 filter grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-xs text-gray-500 ">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
