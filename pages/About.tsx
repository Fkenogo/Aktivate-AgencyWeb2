
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const About: React.FC = () => {
  const differences = [
    {
      id: '01',
      title: 'STRATEGIC ALCHEMY',
      desc: 'We transform market insights and client goals into brand gold. No guesswork. No fluff. Just results.'
    },
    {
      id: '02',
      title: 'UNHINGED CREATIVITY',
      desc: 'We push boundaries with a healthy dose of "let\'s try this." Safe never changed anything.'
    },
    {
      id: '03',
      title: 'EMBEDDED PARTNERSHIP',
      desc: 'We\'re not vendors. We\'re your team. Your success is our obsession.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#1AB69D] py-24 md:py-40 px-6 text-center text-white">
        <h1 className="text-[40px] md:text-[64px] font-[800] leading-tight mb-8 uppercase tracking-tighter">WE ARE AKTIVATORS</h1>
        <p className="text-[18px] md:text-[24px] max-w-[800px] mx-auto text-[#F5F5F5] leading-relaxed">
          The renegade strategists of Burundi. <br />
          The ones who turn products into movements. <br />
          The ones who don't ask for permission.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 md:py-[120px] px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-[#F5F5F5] rounded-[16px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=75&w=800&fm=webp" 
              alt="Team creative workspace" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0A0A0A] mb-8">Our Story</h2>
            <div className="space-y-6 text-[#2D2D2D] text-lg leading-[1.8]">
              <p>
                We're not your average Burundi-based branding and communications agency. 
                We're a band of renegade strategists and creatives who are passionate about 
                blending strategic insights with captivating ideas to craft result-driven activations.
              </p>
              <p>
                We believe in pushing Boundaries and Exploring Possibilities, driven by three words: 
                <span className="text-[#1AB69D] font-bold"> Imagine, Dare, Create.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="bg-[#F5F5F5] py-20 md:py-[120px] px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader title="OUR DIFFERENCE" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((diff, i) => (
              <div key={i} className="bg-white p-10 rounded-[16px] border-l-4 border-[#1AB69D] relative overflow-hidden group shadow-lg">
                <span className="absolute top-[-10px] right-[-10px] text-[100px] font-black text-[#1AB69D]/5 leading-none group-hover:text-[#1AB69D]/10 transition-colors">
                  {diff.id}
                </span>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-6 relative z-10">{diff.title}</h3>
                <p className="text-[#2D2D2D] leading-[1.8] relative z-10">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aktivate? */}
      <section className="bg-[#0A0A0A] py-24 px-6 text-center text-white">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-8">Why AKTIVATE?</h2>
          <p className="text-[28px] md:text-[36px] font-bold text-[#1AB69D] mb-6">Simple. We deliver.</p>
          <p className="text-[#F5F5F5] text-lg md:text-xl leading-relaxed mb-12">
            We're Burundi's most sought-after agency because we go above and beyond to 
            get results—not just presentations.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#1AB69D] text-white px-16 py-5 rounded-[8px] font-black text-lg hover:bg-[#158F7C] transition-all transform hover:scale-105 active:scale-95 shadow-2xl uppercase tracking-widest"
          >
            GET STARTED
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
