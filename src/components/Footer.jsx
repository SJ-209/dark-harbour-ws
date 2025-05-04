
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 font-mono">WRKSHRT</h2>
            <p className="text-gray-400 mb-6">
              Creating powerful visual stories that connect and inspire.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Street Name</p>
              <p className="mb-2">City, ST 12345</p>
              <p className="mb-2">
                <a href="mailto:hello@wrkshrt.com" className="hover:text-white">hello@wrkshrt.com</a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-white">+1 (123) 456-7890</a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Vimeo</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WRKSHRT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
