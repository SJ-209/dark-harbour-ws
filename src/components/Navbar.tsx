
import React from 'react';
// import dhsLogo from '../assets/dhs.png';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        <div className="font-mono font-bold text-xl">DARK HARBOUR</div>
        <div className="hidden md:flex space-x-6 text-xs">
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#showReel" className="hover:underline">SHOW REEL</a>
          <a href="#clientWork" className="hover:underline">CLIENT WORK</a>
          <a href="#contact" className="hover:underline">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
