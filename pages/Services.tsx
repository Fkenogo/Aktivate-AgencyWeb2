
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const Services: React.FC = () => {
  const categories = [
    {
      title: 'BRAND FOUNDATION',
      bg: 'bg-white',
      items: [
        { name: 'Market Research', desc: 'We spy the market, gathering intelligence to inform every strategic decision.', details: 'Brand Health Trackers | Surveys | Competitor Analysis | Retail Audits' },
        { name: 'Strategy Development', desc: 'We craft the roadmap for your brand\'s domination.', details: 'Marketing Strategy | Brand Strategy | Sales Strategy' },
        { name: 'Branding & Identity', desc: 'We build brands that resonate and endure.', details: 'Positioning | Identity Development | Corporate Branding' }
      ]
    },
    {
      title: 'BRAND AMPLIFICATION',
      bg: 'bg-[#F5F5F5]',
      items: [
        { name: 'Creative & Design', desc: 'Visuals and messaging that stop the scroll.', details: 'Graphic Design | Illustrations | Branding Identity' },
        { name: 'Content Production', desc: 'High-quality content that maximizes impact.', details: 'Audio Visual | TV Commercials | Video Animations | Photography' },
        { name: 'Advertising', desc: 'Campaigns that generate results, not just impressions.', details: 'Campaign Concepts | Planning | Media Buying | Monitoring' }
      ]
    },
    {
      title: 'CUSTOMER ENGAGEMENT',
      bg: 'bg-white',
      items: [
        { name: 'Digital Marketing', desc: 'We craft digital experiences that connect.', details: 'Digital Strategy | Social Media | Web Development | SEO' },
        { name: 'Experiential Events', desc: 'Immersive experiences that create brand advocates.', details: 'Brand Activations | Corporate Events | Product Launches' },
        { name: 'Media & PR', desc: 'We manage your reputation and amplify your voice.', details: 'Crisis Management | Press Engagements | Influencer Marketing' }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A0A0A] py-24 md:py-40 px-6 text-center text-white">
        <h1 className="text-[40px] md:text-[56px] font-[800] leading-tight mb-8 uppercase tracking-tight">From Insight to Ignition</h1>
        <p className="text-[18px] md:text-[24px] max-w-[800px] mx-auto text-[#F5F5F5] leading-relaxed">
          Full-service solutions that transform brands at every touchpoint.
        </p>
      </section>

      {/* Categories */}
      {categories.map((cat, i) => (
        <section key={i} className={`${cat.bg} py-20 md:py-[100px] px-6 md:px-[120px]`}>
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#0A0A0A] border-b-[3px] border-[#1AB69D] pb-4 mb-16 inline-block">
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cat.items.map((service, j) => (
                <div key={j} className="space-y-4">
                  <h3 className="text-[24px] font-bold text-[#0A0A0A]">{service.name}</h3>
                  <p className="text-[#2D2D2D] text-lg leading-relaxed">{service.desc}</p>
                  <div className="bg-[#F5F5F5] p-6 rounded-[8px] border-l-2 border-[#1AB69D]/30">
                    <p className="text-sm text-[#2D2D2D] leading-relaxed italic">{service.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Rebuilt CTA Section to match provided image */}
      <section className="bg-[#1AB69D] py-32 px-6 text-center text-white flex flex-col items-center">
        <h2 className="text-[42px] md:text-[64px] font-extrabold mb-6 tracking-tight leading-none drop-shadow-sm">
          Not sure what you need?
        </h2>
        <p className="text-xl md:text-2xl mb-12 font-medium opacity-90 tracking-wide">
          Let's figure it out together.
        </p>
        <Link 
          to="/contact"
          className="bg-white text-[#1AB69D] px-14 py-6 rounded-xl font-black text-lg tracking-[0.1em] hover:bg-white/95 transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(0,0,0,0.15)] uppercase"
        >
          START A CONVERSATION
        </Link>
      </section>
    </div>
  );
};

export default Services;
