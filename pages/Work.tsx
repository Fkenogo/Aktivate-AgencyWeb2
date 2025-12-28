
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PORTFOLIO } from '../constants.tsx';
import { PortfolioItem } from '../types.ts';
import Button from '../components/Button.tsx';

const Work: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filters = ['All', 'Branding', 'Campaign', 'Digital', 'Activations', 'Strategy'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const openProject = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeProject = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Portfolio | Proof in the Impact - AKTIVATE Case Studies</title>
        <meta name="description" content="View AKTIVATE's portfolio of branding, digital campaigns, and experiential activations that deliver real results for top African brands." />
      </Helmet>
      
      {/* 4.1 Hero */}
      <section className="bg-deepBlack text-white py-[160px] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-6 grid-rows-2 h-full gap-4 p-4">
             {PORTFOLIO.slice(0, 12).map((item, i) => (
               <img key={i} src={item.imageUrl} className="w-full h-full object-cover grayscale" alt="Background item" />
             ))}
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 relative z-10 reveal">
          <h1 className="text-4xl md:text-[72px] font-extrabold mb-6 uppercase tracking-tighter italic">PROOF IN THE IMPACT</h1>
          <p className="text-lg md:text-2xl text-lightGrey max-w-2xl mx-auto font-light">
            Real brands. Real results. <span className="text-brandTeal font-bold">Unapologetic creativity.</span>
          </p>
        </div>
      </section>

      {/* 4.2 Filter Bar */}
      <div className="sticky top-20 bg-white/80 backdrop-blur-md z-40 border-b border-lightGrey py-8">
        <div className="max-w-content mx-auto px-6 flex flex-wrap justify-center gap-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setVisibleCount(6);
              }}
              className={`px-8 py-3 rounded-full border-2 transition-all font-montserrat font-bold text-[14px] uppercase tracking-tight ${filter === f ? 'bg-brandTeal text-white border-brandTeal shadow-lg scale-105' : 'bg-transparent text-charcoalGrey border-lightGrey hover:border-brandTeal hover:text-brandTeal'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* 4.3 Portfolio Grid */}
      <section className="bg-lightGrey py-20 min-h-screen">
        <div className="max-w-content mx-auto px-6 md:px-80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedItems.map((item, i) => (
              <div 
                key={item.id} 
                onClick={() => openProject(item)}
                className="bg-white rounded-[24px] overflow-hidden group relative cursor-pointer shadow-subtle hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 reveal"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                   <img 
                    src={item.imageUrl} 
                    alt={item.client} 
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                   
                   <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="bg-brandTeal text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 inline-block shadow-sm">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-none mb-1">{item.client}</h3>
                      <p className="text-white/60 text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Case Study →</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-20 flex justify-center reveal">
              <Button 
                onClick={handleLoadMore} 
                variant="outline" 
                className="!text-deepBlack !border-charcoalGrey hover:!bg-deepBlack hover:!text-white !px-16"
              >
                LOAD MORE PROJECTS
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 4.4 Project Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 px-4 md:px-0 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-deepBlack/90 backdrop-blur-xl"
            onClick={closeProject}
          />
          
          {/* Modal Container */}
          <div className={`relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[32px] shadow-2xl overflow-y-auto transform transition-all duration-500 ease-out flex flex-col md:flex-row ${isModalOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}>
            
            {/* Close Button */}
            <button 
              onClick={closeProject}
              className="absolute top-8 right-8 z-50 w-12 h-12 bg-white text-deepBlack flex items-center justify-center rounded-full text-3xl font-light hover:bg-brandTeal hover:text-white transition-all shadow-xl"
            >
              &times;
            </button>

            {/* Left Side: Images */}
            <div className="w-full md:w-3/5 bg-lightGrey overflow-y-auto max-h-[500px] md:max-h-full scrollbar-hide">
              <img src={selectedProject.imageUrl} className="w-full object-cover" alt={selectedProject.client} />
              {selectedProject.moreImages?.map((img, idx) => (
                <img key={idx} src={img} className="w-full object-cover mt-2" alt={`${selectedProject.client} gallery ${idx}`} />
              ))}
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col justify-center">
              <div className="mb-12">
                <span className="text-brandTeal font-black text-xs uppercase tracking-[0.3em] mb-4 block">{selectedProject.category}</span>
                <h2 className="text-4xl md:text-6xl font-black text-deepBlack uppercase tracking-tighter leading-none mb-6">
                  {selectedProject.client}
                </h2>
                <p className="text-xl italic text-charcoalGrey/60 font-light leading-relaxed">
                  "{selectedProject.tagline || selectedProject.description}"
                </p>
              </div>

              <div className="space-y-10">
                {selectedProject.challenge && (
                  <div>
                    <h4 className="text-[12px] font-black uppercase tracking-widest text-brandTeal mb-3">The Challenge</h4>
                    <p className="text-charcoalGrey leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                )}
                
                {selectedProject.solution && (
                  <div>
                    <h4 className="text-[12px] font-black uppercase tracking-widest text-brandTeal mb-3">The Alchemy</h4>
                    <p className="text-charcoalGrey leading-relaxed">{selectedProject.solution}</p>
                  </div>
                )}

                {selectedProject.results && (
                  <div className="bg-brandTeal/5 p-6 rounded-2xl border-l-4 border-brandTeal">
                    <h4 className="text-[12px] font-black uppercase tracking-widest text-brandTeal mb-3">The Impact</h4>
                    <p className="text-deepBlack font-bold leading-relaxed">{selectedProject.results}</p>
                  </div>
                )}
              </div>

              <div className="mt-16 pt-8 border-t border-lightGrey flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-brandTeal" />
                  <div className="w-3 h-3 rounded-full bg-brandTeal opacity-40" />
                  <div className="w-3 h-3 rounded-full bg-brandTeal opacity-20" />
                </div>
                <Button variant="primary" onClick={closeProject}>NEXT PROJECT</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
