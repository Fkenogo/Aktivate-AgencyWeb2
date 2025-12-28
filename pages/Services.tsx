
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import { SERVICE_CATEGORIES } from '../constants';

const Services: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(SERVICE_CATEGORIES[0].name);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Services | Expertise & Brand Activations - AKTIVATE</title>
        <meta name="description" content="Explore AKTIVATE's full-service branding solutions. From brand foundation and amplification to customer engagement and digital strategy." />
      </Helmet>
      
      {/* 3.1 Hero */}
      <section className="bg-deepBlack text-white py-[160px] text-center">
        <div className="max-w-content mx-auto px-6 reveal">
          <h1 className="text-[40px] md:text-[56px] font-extrabold mb-6 uppercase tracking-tight">FROM INSIGHT TO IGNITION</h1>
          <p className="text-[18px] md:text-[24px] text-lightGrey/70 max-w-2xl mx-auto font-light leading-relaxed">
            Full-service solutions that transform brands at every touchpoint.
          </p>
        </div>
      </section>

      {/* 3.2 Service Categories */}
      {SERVICE_CATEGORIES.map((cat, idx) => (
        <section key={cat.name} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-lightGrey'}`}>
          <div className="max-w-content mx-auto px-6 md:px-120">
            <button 
              onClick={() => setOpenCategory(openCategory === cat.name ? null : cat.name)}
              className="w-full text-left border-b-3 border-brandTeal pb-6 mb-12 flex justify-between items-center group transition-colors hover:border-deepBlack"
            >
              <h2 className="text-[28px] md:text-[40px] font-bold text-deepBlack uppercase tracking-tight">{cat.name}</h2>
              <span className={`text-4xl text-brandTeal transition-transform duration-500 ${openCategory === cat.name ? 'rotate-180' : ''}`}>↓</span>
            </button>
            
            {openCategory === cat.name && (
              <div className="space-y-16 animate-[fadeInUp_0.5s_ease-out_forwards]">
                {cat.services.map((service) => (
                  <div key={service.title} className="space-y-6 reveal">
                    <div className="flex items-center gap-4">
                      <span 
                        className="text-3xl filter saturate-0 hover:saturate-100 transition-all cursor-help"
                        data-tooltip={service.title}
                      >
                        {idx === 0 ? '📊' : idx === 1 ? '🎨' : '🤝'}
                      </span>
                      <h3 className="text-[24px] md:text-[28px] font-bold text-deepBlack uppercase tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[18px] text-charcoalGrey/80 max-w-3xl leading-relaxed">{service.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map(tag => (
                        <Link 
                          key={tag} 
                          to={`/services/detail/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="bg-white px-6 py-4 rounded-[8px] border-2 border-transparent hover:border-brandTeal text-charcoalGrey text-[14px] transition-all shadow-sm hover:shadow-subtle hover:text-brandTeal font-bold uppercase tracking-tight"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* 3.3 CTA */}
      <section className="bg-brandTeal text-white py-120 text-center">
        <div className="max-w-content mx-auto px-6 space-y-8 reveal">
          <h2 className="text-[28px] md:text-[36px] font-bold uppercase tracking-tight">Not sure what you need?</h2>
          <p className="text-[20px] max-w-xl mx-auto opacity-90 font-light">Let's figure it out together and activate your brand.</p>
          <Link to="/contact">
            <Button variant="white" className="px-16 py-6 text-xl">START A CONVERSATION</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
