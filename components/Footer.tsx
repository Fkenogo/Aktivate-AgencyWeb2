
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceItems = [
    'Brand Strategy',
    'Creative & Design',
    'Digital Marketing',
    'Activations',
    'Media & PR'
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6 md:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
          {/* Column 1: Brand Identity */}
          <div className="space-y-8">
            <Link to="/" className="text-4xl font-black italic text-[#1AB69D] tracking-tighter">
              AKTIVATE
            </Link>
            <p className="text-[#F5F5F5] text-lg leading-relaxed max-w-xs opacity-80">
              Imagine. Dare. Create. <br />
              The alchemists of experience and brand evangelists of Burundi.
            </p>
            <div className="flex space-x-5 pt-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#1AB69D] hover:border-[#1AB69D] transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Social Media"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div className="flex flex-col">
            <h4 className="text-[#1AB69D] text-sm font-black uppercase tracking-[0.2em] mb-10">Navigate</h4>
            <ul className="space-y-5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-[#F5F5F5] text-lg hover:text-[#1AB69D] transition-all flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#1AB69D]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h4 className="text-[#1AB69D] text-sm font-black uppercase tracking-[0.2em] mb-10">Services</h4>
            <ul className="space-y-5">
              {serviceItems.map((item) => (
                <li key={item} className="text-[#F5F5F5] text-lg hover:text-[#1AB69D] transition-all cursor-default flex items-center group">
                  <div className="w-1.5 h-1.5 bg-[#1AB69D] rounded-full mr-3 opacity-40 group-hover:opacity-100 transition-opacity"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h4 className="text-[#1AB69D] text-sm font-black uppercase tracking-[0.2em] mb-10">Connect</h4>
            <ul className="space-y-8">
              <li className="flex items-start group">
                <div className="bg-white/5 p-3 rounded-lg mr-4 group-hover:bg-[#1AB69D]/20 transition-colors">
                  <Phone size={20} className="text-[#1AB69D]" />
                </div>
                <div>
                  <span className="block text-xs uppercase text-white/40 font-bold mb-1">Call Us</span>
                  <a href="tel:+25766511150" className="text-[#F5F5F5] hover:text-[#1AB69D] transition-colors font-medium">
                    (+257) 66 511 150
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-3 rounded-lg mr-4 group-hover:bg-[#1AB69D]/20 transition-colors">
                  <Mail size={20} className="text-[#1AB69D]" />
                </div>
                <div>
                  <span className="block text-xs uppercase text-white/40 font-bold mb-1">Email Us</span>
                  <a href="mailto:info@aktivate.bi" className="text-[#F5F5F5] hover:text-[#1AB69D] transition-colors font-medium">
                    info@aktivate.bi
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-3 rounded-lg mr-4 group-hover:bg-[#1AB69D]/20 transition-colors">
                  <MapPin size={20} className="text-[#1AB69D]" />
                </div>
                <div>
                  <span className="block text-xs uppercase text-white/40 font-bold mb-1">Visit Us</span>
                  <span className="text-[#F5F5F5] font-medium">Bujumbura, Burundi</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm text-[#F5F5F5]/60">
          <p>© {currentYear} AKTIVATE. Crafted for market domination.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
