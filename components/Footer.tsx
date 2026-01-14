import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/5 w-full h-auto">
      {/* Main Footer Strip */}
      <div 
        className="max-w-[1200px] mx-auto px-[48px] pt-[32px] pb-[24px]"
      >
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start"
          style={{ gridTemplateColumns: window.innerWidth >= 1024 ? '28% 18% 27% 27%' : undefined }}
        >
          
          {/* Column 1: Brand (28%) */}
          <div className="space-y-[12px]">
            <Link to="/" className="text-[18px] font-[900] italic text-[#1AB69D] tracking-tighter block leading-none">
              AKTIVATE
            </Link>
            <p className="text-white/50 text-[12px] leading-[1.35] max-w-[200px]">
              Alchemists of experience and brand evangelists of Burundi.
            </p>
            <div className="flex space-x-3 pt-1">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="text-white/30 hover:text-[#1AB69D] transition-colors duration-300"
                  aria-label="Social Media"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigate (18%) */}
          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-[10px]">Navigate</h4>
            <ul className="space-y-[6px]">
              {['About', 'Services', 'Work', 'Blog', 'Contact'].map((name) => (
                <li key={name}>
                  <Link 
                    to={`/${name.toLowerCase()}`} 
                    className="text-white/50 hover:text-[#1AB69D] text-[12px] transition-colors leading-[1.35]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (27%) */}
          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-[10px]">Services</h4>
            <ul className="space-y-[6px]">
              {['Brand Strategy', 'Creative & Design', 'Digital Marketing', 'Activations'].map((item) => (
                <li key={item} className="text-white/50 text-[12px] leading-[1.35]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect (27%) */}
          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-[10px]">Connect</h4>
            <ul className="space-y-[8px]">
              <li className="flex items-center text-white font-bold text-[12px] leading-[1.35]">
                <Phone size={14} className="text-[#1AB69D] mr-3 flex-shrink-0" />
                <a href="tel:+25766511150" className="hover:text-[#1AB69D] transition-colors">
                  (+257) 66 511 150
                </a>
              </li>
              <li className="flex items-center text-white/60 font-bold text-[12px] leading-[1.35]">
                <Mail size={14} className="text-[#1AB69D] mr-3 flex-shrink-0" />
                <a href="mailto:info@aktivate.bi" className="hover:text-white transition-colors">
                  info@aktivate.bi
                </a>
              </li>
              <li className="flex items-center text-white/60 font-bold text-[12px] leading-[1.35]">
                <MapPin size={14} className="text-[#1AB69D] mr-3 flex-shrink-0" />
                <span>Bujumbura, Burundi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-[24px] pt-[16px] border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 font-bold tracking-widest uppercase">
          <p>© {currentYear} AKTIVATE. Market Domination.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;