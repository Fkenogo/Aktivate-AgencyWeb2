import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

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
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={`flex items-center justify-center w-11 h-11 rounded-full bg-[#102D38] text-white border border-white/15 shadow-lg transition-all duration-200 hover:bg-[#15B8A6] hover:text-[#102D38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B8A6] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default BackToTop;
