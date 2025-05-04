
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        <div className="font-mono font-bold text-xl">WRKSHRT</div>
        <div className="hidden md:flex space-x-6 text-xs">
          <a href="#" className="hover:underline">SHOW REEL</a>
          <a href="#" className="hover:underline">CLIENT WORK</a>
          <a href="#" className="hover:underline">SHOP</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
