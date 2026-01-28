
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
  ];

  // Dynamic classes for the nav container
  const navStyles = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-sm h-[70px]' 
    : 'bg-transparent h-[90px]';

  const textStyles = isScrolled ? 'text-[#0A0A0A]' : 'text-white';
  const logoStyles = isScrolled ? 'text-[#1AB69D]' : 'text-white';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex items-center border-b ${
        isScrolled ? 'border-black/5' : 'border-transparent'
      } ${navStyles}`}
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-[120px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span 
            className={`text-2xl md:text-3xl font-black italic transition-colors duration-500 tracking-tighter ${logoStyles}`}
          >
            AKTIVATE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path}
                className={`font-bold text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#1AB69D] relative group py-2 ${
                  isActive ? 'text-[#1AB69D]' : textStyles
                }`}
              >
                {link.name}
                {/* Subtle Animated Underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#1AB69D] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 w-full'
                  }`}
                  style={{ width: '100%' }}
                ></span>
              </Link>
            );
          })}
          <Link 
            to="/contact"
            className={`px-7 py-2.5 rounded-[4px] font-bold text-[11px] uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] active:scale-95 ${
              isScrolled 
                ? 'bg-[#1AB69D] text-white hover:bg-[#158F7C] shadow-sm' 
                : 'bg-white text-[#0A0A0A] hover:bg-[#1AB69D] hover:text-white shadow-lg'
            }`}
          >
            GET AKTIVATED
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors ${textStyles}`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0A0A0A] z-[60] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-white p-2 hover:rotate-90 transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col items-center space-y-6">
          <span className="text-[#1AB69D] text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Menu</span>
          {navLinks.map((link) => {
             const isActive = location.pathname === link.path;
             return (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-3xl font-black uppercase tracking-tighter transition-colors ${
                  isActive ? 'text-[#1AB69D]' : 'text-white hover:text-[#1AB69D]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-8">
            <Link 
              to="/contact"
              className="bg-[#1AB69D] text-white px-10 py-4 rounded-full text-lg font-black tracking-widest hover:bg-[#158F7C] shadow-2xl transition-all active:scale-95 uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
