import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const expertiseItems = [
    'Brand Intelligence & Research',
    'Brand Strategy & Development',
    'Brand Management & Advisory',
    'Creative & Communications',
    'Brand Experiences & Activations',
  ];

  return (
    <footer className="bg-[#1B252B] text-white border-t border-white/10 w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block" aria-label="Aktivate Home">
              <img
                src="/assets/aistudio/aktivate_logo_white.png"
                alt="Aktivate"
                className="h-6 md:h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-[32ch]">
              Building stronger brands. Managing them better.
            </p>
            <p className="text-[#15B8A6] text-xs font-semibold tracking-wide">
              Imagine. Dare. Create.
            </p>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.16em] mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/75 hover:text-[#15B8A6] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.16em] mb-4">
              Expertise
            </h3>
            <ul className="space-y-2.5">
              {expertiseItems.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-white/75 hover:text-[#15B8A6] text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.16em] mb-4">
              Connect
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/85">
                <Phone size={15} className="text-[#15B8A6] shrink-0" aria-hidden="true" />
                <a href="tel:+25766511150" className="hover:text-[#15B8A6] transition-colors tabular-nums">
                  (+257) 66 511 150
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <Mail size={15} className="text-[#15B8A6] shrink-0" aria-hidden="true" />
                <a href="mailto:info@aktivate.bi" className="hover:text-[#15B8A6] transition-colors">
                  info@aktivate.bi
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/75">
                <MapPin size={15} className="text-[#15B8A6] shrink-0" aria-hidden="true" />
                <span>Bujumbura, Burundi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/55">
          <p>&copy; {currentYear} Aktivate. All rights reserved.</p>
          <p>Branding &amp; Brand Management Agency · Bujumbura, Burundi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;