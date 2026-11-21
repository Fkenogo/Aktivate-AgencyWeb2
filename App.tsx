import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
import RouteSeo from './components/RouteSeo';
import { prefersReducedMotion } from './utils/viewTransitions';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const handleSkipToMain = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.focus({ preventScroll: true });
      mainEl.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Router>
      <RouteSeo />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <a href="#main-content" onClick={handleSkipToMain} className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            {/* Blog is unapproved legacy content and is intentionally not routed.
                Unknown paths redirect to the homepage. */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
