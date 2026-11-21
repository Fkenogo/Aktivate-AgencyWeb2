import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TransitionLink from './TransitionLink';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (drawer) {
      drawer.inert = !isMobileMenuOpen;
    }

    if (isMobileMenuOpen) {
      wasOpenRef.current = true;
      document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
          return;
        }
        if (e.key === 'Tab' && drawer) {
          const focusables = drawer.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.documentElement.style.overflow = '';
      };
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      document.documentElement.style.overflow = '';
      openButtonRef.current?.focus();
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLightHeader = isScrolled;

  return (
    <header
      data-surface={isLightHeader ? 'light' : 'dark'}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-200 flex items-center border-b ${
        isLightHeader
          ? 'bg-white/95 backdrop-blur-md border-[#1B252B]/10 shadow-xs'
          : 'bg-[#102D38]/95 backdrop-blur-md border-white/10'
      }`}
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <TransitionLink
          to="/"
          aria-current={location.pathname === '/' ? 'page' : undefined}
          className="inline-flex items-center shrink-0 rounded-sm"
          aria-label="Aktivate Home"
        >
          <img
            src={
              isLightHeader
                ? '/assets/aistudio/aktivate_logo_transparent.png'
                : '/assets/aistudio/aktivate_logo_white.png'
            }
            alt="Aktivate"
            className="h-6 md:h-7 w-auto object-contain"
          />
        </TransitionLink>

        {/* Zone 2: Primary Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <TransitionLink
                key={link.path}
                to={link.path}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 rounded-sm transition-colors duration-150 ${
                  isLightHeader
                    ? isActive
                      ? 'text-[#0D7A6E]'
                      : 'text-[#1B252B] hover:text-[#0D7A6E]'
                    : isActive
                      ? 'text-[#15B8A6]'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#15B8A6] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </TransitionLink>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <TransitionLink
            to="/contact"
            className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 min-h-[40px] transition-colors duration-150 ${
              isLightHeader
                ? 'bg-[#102D38] text-white hover:bg-[#1B252B]'
                : 'bg-[#15B8A6] text-[#102D38] hover:bg-[#1FD0BC]'
            }`}
          >
            Let&apos;s Talk
          </TransitionLink>

          <button
            ref={openButtonRef}
            type="button"
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors ${
              isLightHeader ? 'text-[#1B252B] hover:bg-[#F4F3EE]' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        ref={drawerRef}
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        data-surface="dark"
        className={`fixed inset-0 h-[100dvh] bg-[#102D38] z-[60] flex flex-col justify-between p-6 transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between">
          <TransitionLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-current={location.pathname === '/' ? 'page' : undefined}
            aria-label="Aktivate Home"
            className="inline-flex items-center rounded-sm"
          >
            <img
              src="/assets/aistudio/aktivate_logo_white.png"
              alt="Aktivate"
              className="h-6 w-auto object-contain"
            />
          </TransitionLink>
          <button
            ref={closeButtonRef}
            type="button"
            className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={26} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col space-y-5 my-auto" aria-label="Mobile Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <TransitionLink
                key={link.path}
                to={link.path}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-heading text-3xl font-bold tracking-tight py-1 transition-colors rounded-sm ${
                  isActive ? 'text-[#15B8A6]' : 'text-white hover:text-[#15B8A6]'
                }`}
              >
                {link.name}
              </TransitionLink>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-white/15 flex flex-col gap-4">
          <TransitionLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center bg-[#15B8A6] text-[#102D38] font-semibold text-base py-3.5 px-6 rounded-lg min-h-[48px] hover:bg-[#1FD0BC] transition-colors"
          >
            Start a Conversation
          </TransitionLink>
          <p className="text-xs text-white/60 tracking-wide">
            Imagine. Dare. Create. · Bujumbura, Burundi
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
