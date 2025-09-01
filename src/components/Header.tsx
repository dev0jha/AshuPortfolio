import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="8" fill="url(#logoGradient)" />
    <path
      d="M12 28L20 12L28 28H24L22 24H18L16 28H12ZM19 20L21 16L23 20H19Z"
      fill="#030303"
      fillOpacity="0.9"
    />
    <circle cx="20" cy="30" r="2" fill="#030303" fillOpacity="0.6" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#030303]/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo />
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              witthashu
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-sm border-b border-white/10">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
