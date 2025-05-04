
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <nav className="container-custom py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-2xl font-mono">WRKSHRT</a>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#work" className="font-medium hover:text-gray-600">Work</a></li>
          <li><a href="#about" className="font-medium hover:text-gray-600">About</a></li>
          <li><a href="#contact" className="font-medium hover:text-gray-600">Contact</a></li>
        </ul>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-50 border-b border-gray-200 md:hidden">
            <ul className="flex flex-col py-4 px-4 container-custom">
              <li className="py-2"><a href="#work" className="font-medium hover:text-gray-600">Work</a></li>
              <li className="py-2"><a href="#about" className="font-medium hover:text-gray-600">About</a></li>
              <li className="py-2"><a href="#contact" className="font-medium hover:text-gray-600">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
