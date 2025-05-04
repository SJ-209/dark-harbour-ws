
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-10 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>We look forward to working with you.</p>
          <p className="mt-4 md:mt-0">© {new Date().getFullYear()} DHS. All Rights Reserved Since 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
