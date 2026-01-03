
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { COLORS, SHADOWS, TRANSITIONS } from '../constants';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full 
          bg-[#1AB69D] text-white shadow-lg transition-all duration-300
          hover:bg-[#158F7C] hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#1AB69D]/30
          ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        style={{ boxShadow: isVisible ? SHADOWS.strong : 'none' }}
        aria-label="Back to Top"
      >
        <ArrowUp size={24} strokeWidth={3} />
      </button>
    </div>
  );
};

export default BackToTop;
