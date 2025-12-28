
import React from 'react';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us | The AKTIVATORS - Renegade Strategists in Burundi</title>
        <meta name="description" content="Discover the story of AKTIVATE. We are renegade strategists and creatives focused on blending strategic insights with bold creative ideas." />
      </Helmet>
      
      {/* 2.1 Hero */}
      <section className="bg-gradient-to-b from-deepBlack to-brandTeal py-[160px] text-center text-white">
        <div className="max-w-content mx-auto px-6 reveal">
          <h1 className="text-[36px] md:text-[64px] font-extrabold mb-8 uppercase tracking-tighter italic">
            WE ARE AKTIVATORS
          </h1>
          <p className="text-[18px] md:text-[24px] text-lightGrey/90 max-w-3xl mx-auto leading-relaxed font-light">
            The renegade strategists of Burundi. The ones who turn products into movements. The ones who don't ask for permission.
          </p>
        </div>
      </section>

      {/* 2.2 Our Story */}
      <section className="py-120 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-120 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="rounded-[16px] overflow-hidden aspect-[4/3] shadow-subtle reveal">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Creative Workspace" />
          </div>
          <div className="space-y-8 reveal">
            <h2 className="text-[32px] md:text-[40px] font-bold text-deepBlack uppercase tracking-tight">OUR STORY</h2>
            <div className="space-y-6 text-charcoalGrey/80 leading-relaxed text-[18px]">
              <p>
                We're not your average Burundi-based branding and communications agency. We're a band of renegade strategists and creatives who are passionate about blending strategic insights with captivating ideas to craft result-driven activations.
              </p>
              <p>
                We believe in pushing Boundaries and Exploring Possibilities, driven by three words: <span className="text-brandTeal font-bold">Imagine, Dare, Create.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 Our Difference */}
      <section className="py-120 bg-lightGrey">
        <div className="max-w-content mx-auto px-6 md:px-120">
          <h2 className="text-center text-[32px] md:text-[48px] font-bold text-deepBlack mb-20 uppercase tracking-tight reveal">OUR DIFFERENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'STRATEGIC ALCHEMY', desc: 'We transform market insights and client goals into brand gold. No guesswork. No fluff. Just results.' },
              { id: '02', title: 'UNHINGED CREATIVITY', desc: 'We push boundaries with a healthy dose of "let\'s try this." Safe never changed anything.' },
              { id: '03', title: 'EMBEDDED PARTNERSHIP', desc: 'We\'re not vendors. We\'re your team. Your success is our obsession.' }
            ].map(item => (
              <div key={item.id} className="bg-white p-12 rounded-[16px] border-l-4 border-brandTeal relative overflow-hidden group hover:shadow-strong transition-all reveal">
                <span className="absolute top-4 right-4 text-[72px] font-extrabold text-brandTeal/10 group-hover:text-brandTeal/30 transition-colors">
                  {item.id}
                </span>
                <h4 className="text-[24px] font-bold text-deepBlack mb-4 relative z-10 uppercase tracking-tight">{item.title}</h4>
                <p className="text-charcoalGrey/80 leading-relaxed text-[16px] relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 What We Are (Icon Blocks) */}
      <section className="py-120 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-120">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[32px] md:text-[40px] font-bold text-deepBlack uppercase tracking-tight">WE ARE AKTIVATORS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: '🎯', title: 'Experience Makers', desc: 'Crafting activations that move markets.' },
              { icon: '⚡', title: 'Brand Activators', desc: 'Igniting connections that matter.' },
              { icon: '🎨', title: 'Content Creators', desc: 'Stories that captivate and convert.' }
            ].map((block, i) => (
              <div key={i} className="space-y-6 group reveal">
                <div className="text-[64px] mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">{block.icon}</div>
                <h3 className="text-[24px] font-bold text-deepBlack uppercase tracking-tight">{block.title}</h3>
                <p className="text-charcoalGrey/80 text-[16px] leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Why AKTIVATE? */}
      <section className="bg-deepBlack text-white py-120">
        <div className="max-w-content mx-auto px-6 text-center space-y-10 reveal">
          <h2 className="text-[32px] md:text-[48px] font-bold uppercase tracking-tight">Why AKTIVATE?</h2>
          <div className="space-y-4">
            <p className="text-[28px] md:text-[36px] font-bold text-brandTeal">Simple. We deliver.</p>
            <p className="text-[18px] md:text-[20px] text-lightGrey/70 max-w-2xl mx-auto leading-relaxed font-light">
              We're Burundi's most sought-after agency because we go above and beyond to get results—not just presentations.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="primary" className="mt-8 px-14 py-5">GET IN TOUCH</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
