import React from 'react';
import { Camera, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Main content */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Camera size={24} className="text-yellow-400" />
              <h3 className="text-2xl font-bold">Ashutosh Ojha</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Professional photographer capturing life's most precious moments with creativity and passion.
              Based in Delhi, India.
            </p>

            <p className="text-gray-400 text-sm">
              © {currentYear} Ashutosh Ojha Photography. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Crafted with passion for visual storytelling
            </p> <br/>
              <a href="https://www.instagram.com/iykyk_dev/" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="text-pink-500 mb-4" />
            </a>
            <p className="text-gray-400 font-bold text-sm mt-4">
              Managed by Dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
