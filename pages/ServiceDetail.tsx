
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SERVICES } from '../constants';
import Button from '../components/Button';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.number === id);

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="pt-20">
      <Helmet>
        <title>{service.title} | Our Expertise - AKTIVATE</title>
        <meta name="description" content={service.tagline} />
      </Helmet>
      
      <section className="bg-deepBlack text-white py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-120">
          <Link to="/services" className="text-brandTeal font-bold mb-8 inline-block hover:translate-x-[-5px] transition-transform">
            ← Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
            <span className="text-6xl md:text-8xl">{service.icon}</span>
            <div>
              <span className="text-brandTeal font-montserrat font-bold text-2xl mb-2 block">{service.number}</span>
              <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-3xl font-light text-lightGrey/80 max-w-4xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-120 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-10 text-deepBlack uppercase">What's Included</h2>
            <ul className="space-y-8">
              {service.list.map((item, idx) => (
                <li key={idx} className="flex gap-6 group">
                  <span className="w-12 h-12 rounded-full bg-lightGrey flex items-center justify-center shrink-0 text-brandTeal font-bold group-hover:bg-brandTeal group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-deepBlack mb-2">{item.split(':')[0]}</h4>
                    <p className="text-charcoalGrey/80">{item.split(':')[1] || "Comprehensive strategy tailored to your specific market needs and brand goals."}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-lightGrey p-10 rounded-[20px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-deepBlack">Typical Outcomes</h3>
            <div className="space-y-4">
              {['Increased Market Share', 'Enhanced Brand Recognition', 'Data-Driven ROI', 'Sustainable Growth'].map(outcome => (
                <div key={outcome} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandTeal rounded-full" />
                  <span className="font-medium text-charcoalGrey">{outcome}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/contact">
                <Button variant="primary" className="w-full">Book a Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGrey">
        <div className="max-w-content mx-auto px-6 md:px-120">
          <h2 className="text-3xl font-bold mb-16 text-deepBlack uppercase text-center">Success in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map(i => (
              <div key={i} className="bg-white rounded-[16px] overflow-hidden shadow-sm group">
                <div className="aspect-video overflow-hidden">
                  <img src={`https://picsum.photos/800/600?random=${i + 50}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Case Study" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2">Project Success Story {i}</h4>
                  <p className="text-charcoalGrey text-sm mb-6">How we transformed a local startup into a market leader in just 12 weeks through strategic {service.title.toLowerCase()}.</p>
                  <Link to="/work" className="text-brandTeal font-bold hover:underline">View Results →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
