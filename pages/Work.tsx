
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PORTFOLIO } from '../constants';

const Work: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Branding', 'Campaign', 'Digital', 'Activations', 'Strategy'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Portfolio | Proof in the Impact - AKTIVATE Case Studies</title>
        <meta name="description" content="View AKTIVATE's portfolio of branding, digital campaigns, and experiential activations that deliver real results for top African brands." />
      </Helmet>
      
      {/* 4.1 Hero */}
      <section className="bg-deepBlack text-white py-[160px] text-center">
        <div className="max-w-content mx-auto px-6">
          <h1 className="text-4xl md:text-[56px] font-extrabold mb-6 uppercase">PROOF IN THE PORTFOLIO</h1>
          <p className="text-lg md:text-2xl text-lightGrey max-w-2xl mx-auto">
            Real brands. Real results. Real impact.
          </p>
        </div>
      </section>

      {/* 4.2 Filter Bar */}
      <div className="sticky top-20 bg-white z-40 border-b border-lightGrey py-8">
        <div className="max-w-content mx-auto px-6 flex flex-wrap justify-center gap-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full border-2 transition-all font-montserrat font-semibold ${filter === f ? 'bg-brandTeal text-white border-brandTeal' : 'bg-transparent text-charcoalGrey border-lightGrey hover:border-brandTeal hover:text-brandTeal'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* 4.3 Portfolio Grid */}
      <section className="bg-lightGrey py-20">
        <div className="max-w-content mx-auto px-6 md:px-80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[16px] overflow-hidden group relative cursor-pointer shadow-subtle hover:shadow-strong transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto h-[400px] md:h-[500px]">
                   <img 
                    src={item.imageUrl} 
                    alt={item.client} 
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" 
                  />
                   <div className="absolute inset-0 bg-brandTeal/90 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.client}</h3>
                      <span className="bg-white/20 px-4 py-1.5 rounded-full text-white text-sm mb-8">{item.category}</span>
                      <button className="border-2 border-white px-8 py-3 rounded-[8px] text-white font-bold hover:bg-white hover:text-brandTeal transition-all">
                        View Project →
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
