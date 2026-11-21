import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { prefersReducedMotion } from '../utils/viewTransitions';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        tabIndex={isVisible ? 0 : -1}
        aria-hidden={!isVisible}
        className={`flex items-center justify-center w-11 h-11 rounded-full bg-[#102D38] text-white border border-white/15 shadow-lg transition-all duration-200 hover:bg-[#15B8A6] hover:text-[#102D38] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </div>
  );
};

export default BackToTop;
