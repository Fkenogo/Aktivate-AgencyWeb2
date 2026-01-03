
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Palette, Megaphone, Sparkles, ChevronLeft } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SHADOWS } from '../constants';

const Home: React.FC = () => {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Staggered reveal timer
    const wordTimer = setInterval(() => {
      setVisibleWords((prev) => (prev < 3 ? prev + 1 : prev));
    }, 600);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearInterval(wordTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      id: '01',
      icon: <Palette size={48} />,
      title: 'BRAND FOUNDATION',
      tagline: 'We craft the story and plot the course.',
      list: ['Strategy Development', 'Branding & Identity', 'Market Research']
    },
    {
      id: '02',
      icon: <Megaphone size={48} />,
      title: 'AMPLIFICATION',
      tagline: 'We get your message to the right people.',
      list: ['Media & PR', 'Advertising', 'Content Production']
    },
    {
      id: '03',
      icon: <Sparkles size={48} />,
      title: 'ENGAGEMENT',
      tagline: 'We create experiences that leave a mark.',
      list: ['Digital Marketing', 'Social Media', 'Activations']
    }
  ];

  const steps = [
    { id: '01', name: 'DEEP DIVE', desc: 'Discovery & Context', detail: 'We immerse ourselves in your brand world to find the hidden gems.' },
    { id: '02', name: 'DECODE', desc: 'Research & Insights', detail: 'Data-driven analysis to understand the pulse of your audience.' },
    { id: '03', name: 'BLUEPRINT', desc: 'Strategic Planning', detail: 'The architectural plan for your market domination.' },
    { id: '04', name: 'CREATE', desc: 'Design & Development', detail: 'Where unhinged creativity meets strategic constraints.' },
    { id: '05', name: 'IGNITE', desc: 'Execution', detail: 'Launching your brand into the atmosphere with precision.' },
    { id: '06', name: 'EVOLVE', desc: 'Measure & Optimize', detail: 'Continuous learning to ensure long-term brand health.' },
  ];

  const clients = [
    { name: 'PRIMUS', color: '#E41E26' },
    { name: 'LUMITEL', color: '#EF3340' },
    { name: 'ILO/UN', color: '#008AD2' },
    { name: 'BGF', color: '#1AB69D' },
    { name: 'SERENITY', color: '#8E44AD' },
    { name: 'INTERPETROL', color: '#F39C12' },
    { name: 'AKEZA', color: '#2ECC71' },
    { name: 'KFC', color: '#E4002B' },
  ];
  
  // Double the clients to ensure seamless loop
  const scrollingClients = [...clients, ...clients];

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);

  // Helper for word animation classes
  const getWordClasses = (index: number) => {
    const isVisible = visibleWords >= index;
    return `
      inline-block transition-all duration-[1000ms] cubic-bezier(0.34, 1.56, 0.64, 1) transform
      ${isVisible 
        ? 'opacity-100 translate-y-0 scale-100 rotate-0 blur-0' 
        : 'opacity-0 translate-y-16 scale-50 rotate-[-8deg] blur-xl'
      }
    `;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Parallax Video Container */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ 
            transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-125"
            poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&w=1920&fm=webp"
          >
            <source 
              src="https://player.vimeo.com/external/494252666.sd.mp4?s=4934d63234d318e8df639c05878a2e5414d4850d&profile_id=165&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
          </video>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,10,10,0.3)_0%,_rgba(10,10,10,0.6)_40%,_rgba(10,10,10,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[#1AB69D]/5 mix-blend-color" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        </div>

        <div className="z-10 relative">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20 animate-fade-in shadow-xl">
            <span className="w-2 h-2 bg-[#1AB69D] rounded-full animate-pulse"></span>
            <span className="text-white text-xs font-black uppercase tracking-[0.3em] drop-shadow-sm">Burundi's Premier Agency</span>
          </div>

          <h1 className="text-[52px] md:text-[96px] font-[900] text-white leading-[0.95] tracking-[-0.04em] mb-8 select-none drop-shadow-2xl">
            <span className={getWordClasses(1)}>IMAGINE.</span><br />
            <span className={getWordClasses(2)}>DARE.</span><br />
            <span className={getWordClasses(3)}>CREATE.</span>
          </h1>
          
          <p className="text-[18px] md:text-[24px] text-[#F5F5F5] font-[400] max-w-[700px] mx-auto mb-12 animate-fade-in-up leading-relaxed delay-1000 drop-shadow-md">
            We are <span className="text-[#1AB69D] font-black">Aktivate.</span> <br />
            The alchemists of experience and brand evangelists of Burundi.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in delay-[1200ms]">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center bg-[#1AB69D] text-white px-12 py-5 rounded-[8px] font-bold text-lg hover:bg-[#158F7C] transition-all transform hover:scale-105 active:scale-95 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest">GET STARTED</span>
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              to="/work" 
              className="text-white px-12 py-5 rounded-[8px] font-bold text-lg border-2 border-white/30 backdrop-blur-sm hover:border-white hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest"
            >
              Our Work
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10 flex flex-col items-center opacity-80">
          <span className="text-white text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">Scroll to explore</span>
          <ChevronDown size={24} className="text-[#1AB69D]" />
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="bg-[#0A0A0A] py-20 md:py-[120px] px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionHeader 
            dark
            title="WE ARE NOT YOUR AVERAGE AGENCY."
            subtitle="We're not your average Burundi-based agency. We're strategists who think like creatives, and creatives who think strategically. The result? Brands that don't just exist—they activate."
          />
          <p className="text-[#F5F5F5] text-[18px] md:text-[20px] leading-[1.8] max-w-[900px] mx-auto mb-12">
            We don't just market; we ignite. We blend data-fueled insights with unhinged creativity to craft result-driven activations that dominate the market.
          </p>
          <p className="text-[#1AB69D] text-[24px] md:text-[32px] font-bold">
            We don't follow the trends. <br />
            We spark them.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20 md:py-[120px] px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader title="WHAT WE DO" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                style={{ transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                className="bg-[#F5F5F5] p-12 rounded-[16px] transform hover:-translate-y-3 hover:scale-[1.02] group border border-transparent hover:border-[#1AB69D]/20 hover:bg-white cursor-default"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = SHADOWS.cardHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="mb-6 text-[#1AB69D] transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6 inline-block drop-shadow-sm group-hover:drop-shadow-[0_8px_16px_rgba(26,182,157,0.25)]">
                  {service.icon}
                </div>
                <h3 className="text-[#0A0A0A] text-2xl font-bold mb-4">{service.id}. {service.title}</h3>
                <p className="text-[#1AB69D] text-lg font-medium mb-8 group-hover:text-[#158F7C] transition-colors">{service.tagline}</p>
                <ul className="space-y-3">
                  {service.list.map((item, j) => (
                    <li key={j} className="text-[#2D2D2D] flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#1AB69D] rounded-full mr-3 group-hover:w-2 transition-all group-hover:bg-[#158F7C]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Link to="/services" className="text-[#1AB69D] font-bold flex items-center space-x-2 text-sm uppercase tracking-wider hover:text-[#158F7C]">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Aktivate */}
      <section className="bg-white py-24 md:py-[120px] px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader title="HOW WE AKTIVATE" subtitle="Our proven methodology for transforming brands from stagnant to unstoppable." />
          
          <div className="relative mt-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#F5F5F5] -translate-y-1/2 hidden lg:block" />
            
            <div 
              className="absolute top-1/2 left-0 h-1 bg-[#1AB69D] -translate-y-1/2 transition-all duration-700 ease-in-out hidden lg:block"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            <div className="relative flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 overflow-visible px-4">
              {steps.map((step, i) => {
                const isActive = activeStep === i;
                const isPast = activeStep > i;
                
                return (
                  <div 
                    key={step.id}
                    onClick={() => setActiveStep(i)}
                    className={`relative z-10 w-full lg:w-56 cursor-pointer transition-all duration-500 group ${
                      isActive ? 'scale-105' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100 scale-100'
                    }`}
                  >
                    <div className={`h-full bg-white border-2 p-8 rounded-[24px] text-center transition-all duration-500 flex flex-col items-center justify-center relative overflow-hidden ${
                      isActive ? 'border-[#1AB69D] shadow-xl' : 'border-[#F5F5F5]'
                    }`}>
                      <span className={`absolute top-4 left-0 right-0 text-[100px] font-black leading-none pointer-events-none transition-colors duration-500 ${
                        isActive ? 'text-[#1AB69D]/10' : 'text-[#F5F5F5]'
                      }`}>
                        {step.id}
                      </span>

                      <div className="relative z-10 mt-12">
                        <h4 className={`text-[18px] font-black mb-2 transition-colors ${
                          isActive ? 'text-[#0A0A0A]' : 'text-[#2D2D2D]'
                        }`}>
                          {step.name}
                        </h4>
                        <p className={`text-sm font-medium transition-colors ${
                          isActive ? 'text-[#1AB69D]' : 'text-[#2D2D2D]/60'
                        }`}>
                          {step.desc}
                        </p>
                      </div>

                      <div className={`mt-6 transition-all duration-500 overflow-hidden ${
                        isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs text-[#2D2D2D] leading-relaxed italic">{step.detail}</p>
                      </div>
                    </div>

                    {i < steps.length - 1 && (
                      <div className={`hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 transition-all duration-500 ${
                        isPast ? 'text-[#1AB69D]' : 'text-[#F5F5F5]'
                      }`}>
                        <ArrowRight size={24} className={isPast ? 'animate-pulse' : ''} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex lg:hidden justify-center items-center space-x-6 mt-12">
              <button 
                onClick={prevStep}
                className="w-14 h-14 rounded-full border-2 border-[#F5F5F5] flex items-center justify-center hover:bg-[#1AB69D] hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeStep === i ? 'bg-[#1AB69D] w-8' : 'bg-[#F5F5F5]'}`} 
                  />
                ))}
              </div>
              <button 
                onClick={nextStep}
                className="w-14 h-14 rounded-full border-2 border-[#F5F5F5] flex items-center justify-center hover:bg-[#1AB69D] hover:text-white transition-all"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-[#F5F5F5] py-20 md:py-[100px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader title="TRUSTED BY" />
        </div>
        
        <div className="relative mt-8">
          <div className="flex animate-marquee space-x-8 w-fit px-4">
            {scrollingClients.map((client, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-[250px] bg-white h-[120px] rounded-[16px] flex items-center justify-center p-8 grayscale transition-all duration-[500ms] cubic-bezier(0.4, 0, 0.2, 1) hover:grayscale-0 hover:scale-110 shadow-sm hover:shadow-xl border border-transparent hover:border-[#1AB69D]/20 group cursor-default overflow-hidden relative"
              >
                <span 
                  className="font-black text-2xl opacity-20 group-hover:opacity-100 transition-all duration-500 tracking-tighter"
                  style={{ color: client.color }}
                >
                  {client.name}
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: client.color }}
                ></div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#0A0A0A] py-20 md:py-[120px] px-6 text-center">
        <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-10">
          Don't just exist. <br />
          <span className="text-[#1AB69D]">Dominate.</span>
        </h2>
        <Link 
          to="/contact"
          className="inline-block bg-[#1AB69D] text-white px-12 py-5 rounded-[8px] font-bold text-lg hover:bg-[#158F7C] transition-all transform hover:scale-105"
        >
          GET STARTED
        </Link>
      </section>
    </div>
  );
};

export default Home;
