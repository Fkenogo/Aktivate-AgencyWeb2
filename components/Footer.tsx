
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deepBlack text-white pt-20 pb-10">
      <div className="max-w-content mx-auto px-6 md:px-120">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="text-2xl font-montserrat font-extrabold italic text-white tracking-tighter">AKTIVATE</h2>
            <p className="text-lightGrey/70 text-[16px] leading-relaxed font-sans">
              Imagine. Dare. Create.<br />
              The alchemists of experience and brand evangelists of Burundi.
            </p>
          </div>

          {/* Navigate Col */}
          <div className="space-y-6">
            <h4 className="text-[16px] font-montserrat font-semibold text-white uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-lightGrey hover:text-brandTeal transition-colors">About</Link></li>
              <li><Link to="/services" className="text-lightGrey hover:text-brandTeal transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-lightGrey hover:text-brandTeal transition-colors">Work</Link></li>
              <li><Link to="/blog" className="text-lightGrey hover:text-brandTeal transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-lightGrey hover:text-brandTeal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-6">
            <h4 className="text-[16px] font-montserrat font-semibold text-white uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/01" className="text-lightGrey hover:text-brandTeal transition-colors">Brand Foundation</Link></li>
              <li><Link to="/services/02" className="text-lightGrey hover:text-brandTeal transition-colors">Amplification</Link></li>
              <li><Link to="/services/03" className="text-lightGrey hover:text-brandTeal transition-colors">Engagement</Link></li>
              <li className="text-lightGrey/40 text-sm">Media & PR</li>
            </ul>
          </div>

          {/* Connect Col */}
          <div className="space-y-6">
            <h4 className="text-[16px] font-montserrat font-semibold text-white uppercase tracking-widest">Connect</h4>
            <div className="space-y-2 text-lightGrey">
              <p>T: <a href="tel:+25766511150" className="hover:text-brandTeal transition-colors">(+257) 66 511 150</a></p>
              <p>E: <a href="mailto:info@aktivate.bi" className="hover:text-brandTeal transition-colors">info@aktivate.bi</a></p>
              <p>Bujumbura, Burundi</p>
            </div>
            <div className="flex space-x-4 pt-4">
              {[
                { name: 'Instagram', url: 'https://instagram.com/aktivate' },
                { name: 'Facebook', url: 'https://facebook.com/aktivate' },
                { name: 'LinkedIn', url: 'https://linkedin.com/company/aktivate' }
              ].map((platform) => (
                <a 
                  key={platform.name} 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-charcoalGrey flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-white hover:border-white group"
                >
                  <span className="sr-only">{platform.name}</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-brandTeal group-hover:scale-150 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-charcoalGrey flex flex-col md:flex-row justify-between items-center text-sm text-lightGrey/50 space-y-4 md:space-y-0">
          <p>© 2024 AKTIVATE. All rights reserved.</p>
          <div className="flex space-x-6 font-medium">
            <Link to="/privacy" className="hover:text-brandTeal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brandTeal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
