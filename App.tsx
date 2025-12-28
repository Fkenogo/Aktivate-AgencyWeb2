
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import ServiceDetail from './pages/ServiceDetail.tsx';
import Work from './pages/Work.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from './pages/BlogPost.tsx';
import Contact from './pages/Contact.tsx';
import LegalPage from './pages/LegalPage.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Preview Mode Overlay to indicate active preview session
const PreviewBanner = () => {
  const { pathname } = useLocation();
  if (pathname !== '/preview') return null;
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-brandTeal z-[100] animate-pulse">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-brandTeal text-white px-4 py-1 rounded-b-lg text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">
        Preview Mode Active
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <PreviewBanner />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preview" element={<Home isPreview={true} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
            <Route path="/terms" element={<LegalPage title="Terms of Service" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-brandTeal text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-hoverTeal transition-all z-40"
          title="Scroll to Top"
        >
          <span className="text-xl font-bold">↑</span>
        </button>
      </div>
    </HashRouter>
  );
};

export default App;
