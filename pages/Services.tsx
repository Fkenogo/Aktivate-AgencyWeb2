import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Services: React.FC = () => {
  const categories = [
    {
      title: 'BRAND FOUNDATION',
      bg: 'bg-white',
      items: [
        { name: 'Market Research', desc: 'We gather intelligence to inform strategic decisions.', details: 'Brand Health Trackers | Surveys | Retail Audits' },
        { name: 'Strategy Development', desc: 'The roadmap for your brand\'s domination.', details: 'Marketing Strategy | Brand Strategy' },
        { name: 'Branding & Identity', desc: 'We build brands that resonate and endure.', details: 'Positioning | Identity Development' }
      ]
    },
    {
      title: 'BRAND AMPLIFICATION',
      bg: 'bg-[#F5F5F5]',
      items: [
        { name: 'Creative & Design', desc: 'Visuals and messaging that stop the scroll.', details: 'Graphic Design | Illustrations' },
        { name: 'Content Production', desc: 'High-quality content that maximizes impact.', details: 'Audio Visual | Video Animations' },
        { name: 'Advertising', desc: 'Campaigns that generate results.', details: 'Campaign Concepts | Media Buying' }
      ]
    },
    {
      title: 'CUSTOMER ENGAGEMENT',
      bg: 'bg-white',
      items: [
        { name: 'Digital Marketing', desc: 'We craft digital experiences that connect.', details: 'Digital Strategy | Social Media' },
        { name: 'Experiential Events', desc: 'Immersive experiences that create brand advocates.', details: 'Brand Activations | Corporate Events' },
        { name: 'Media & PR', desc: 'Managing your reputation and voice.', details: 'Crisis Management | PR' }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A0A0A] py-24 md:py-40 px-6 text-center text-white">
        <h1 className="text-[40px] md:text-[56px] font-[800] leading-tight mb-8 uppercase tracking-tight">From Insight to Ignition</h1>
        <p className="text-[18px] md:text-[24px] max-w-[800px] mx-auto text-[#F5F5F5] leading-relaxed">
          Full-service solutions that transform brands.
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
                  <p className="text-[#2D2D2D] text-[15px] leading-[1.4]">{service.desc}</p>
                  <div className="bg-black/5 p-6 rounded-[8px] border-l-2 border-[#1AB69D]/30">
                    <p className="text-sm text-[#2D2D2D]/70 leading-relaxed italic">{service.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;