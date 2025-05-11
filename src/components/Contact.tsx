import React from 'react';

const Contact = () => {
    const handleEmailClick = () => {
        const email = 'Info@darkharbourstudios.com';
        const subject = 'Inquiry from Dark Harbour Studios Website';
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        
        window.open(mailtoUrl, '_blank');
    };

  return (
    <div id="contact" className="py-20 px-6 md:px-10 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-8 tracking-wider">
          CONTACT US
        </h2>
        <button
          onClick={handleEmailClick}
          className="bg-white text-black cursor-pointer hover:underline px-8 py-3 rounded-lg font-mono 
                   hover:bg-gray-200 transition-colors duration-300"
        >
          SEND US AN EMAIL
        </button>
      </div>
    </div>
  );
};

export default Contact;