import React, { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-sm border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        <div className="font-mono font-bold text-xl">DARK HARBOUR STUDIOS</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#showReel" className="hover:underline">REEL</a>
          <a href="#clientWork" className="hover:underline">CLIENTS</a>
          <Link to="/work" className="hover:underline">WORK</Link>
          <a href="#contact" className="hover:underline">CONTACT</a>
          <ThemeSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 border-b bg-white dark:bg-black
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-half pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center burgerMenu space-y-4 py-4">
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#showReel" className="hover:underline">SHOW REEL</a>
          <a href="#clientWork" className="hover:underline">CLIENTS</a>
          <Link to="/work" className="hover:underline">WORK</Link>
          <a href="#contact" className="hover:underline">CONTACT</a>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
