
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { cn } from '../utils/cn';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "glass-header shadow-lg py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center space-x-2">
          <span className={cn(
            "text-2xl md:text-3xl font-montserrat font-extrabold italic tracking-tighter transition-colors duration-300",
            isScrolled ? "text-brandTeal" : "text-white"
          )}>
            AKTIVATE
          </span>
          <div className={cn(
            "w-2 h-2 rounded-full transition-transform duration-500 group-hover:scale-150",
            isScrolled ? "bg-brandTeal" : "bg-white"
          )} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  "relative text-[15px] font-montserrat font-bold transition-all duration-300 hover:text-brandTeal",
                  isScrolled ? (isActive ? "text-brandTeal" : "text-deepBlack") : (isActive ? "text-brandTeal" : "text-white")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-brandTeal transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/contact">
            <Button 
              variant={isScrolled ? 'primary' : 'outline'} 
              className="py-2.5 px-6 !text-sm whitespace-nowrap"
            >
              GET IN TOUCH
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden flex flex-col justify-between w-6 h-4 group"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <span className={cn("w-full h-0.5 transition-all", isScrolled ? "bg-deepBlack" : "bg-white")} />
          <span className={cn("w-2/3 h-0.5 transition-all self-end", isScrolled ? "bg-deepBlack" : "bg-white")} />
          <span className={cn("w-full h-0.5 transition-all", isScrolled ? "bg-deepBlack" : "bg-white")} />
        </button>
      </div>

      {/* Mobile Menu Overlay - Smooth Slide-in from Right */}
      <div 
        className={cn(
          "fixed inset-0 bg-deepBlack/40 z-[90] transition-opacity duration-500",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-deepBlack z-[100] transition-transform duration-500 ease-in-out flex flex-col p-10 shadow-2xl",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-16">
          <span className="text-2xl font-montserrat font-extrabold italic text-white tracking-tighter">AKTIVATE</span>
          <button 
            className="text-white text-4xl leading-none"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
        </div>
        
        <nav className="flex flex-col space-y-8">
          {navLinks.map((link, i) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-white text-4xl font-montserrat font-bold hover:text-brandTeal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button variant="primary" className="w-full text-xl py-6">
              GET IN TOUCH
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
