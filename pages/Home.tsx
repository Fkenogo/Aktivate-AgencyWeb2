import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Palette, Megaphone, Sparkles, ChevronLeft, ArrowRight, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Home: React.FC = () => {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setVisibleWords((prev) => (prev < 3 ? prev + 1 : prev));
    }, 600);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (servicesSectionRef.current) {
      setSectionTop(servicesSectionRef.current.offsetTop);
    }

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
      list: ['Strategy Development', 'Branding & Identity', 'Market Research'],
      speed: -0.03
    },
    {
      id: '02',
      icon: <Megaphone size={48} />,
      title: 'AMPLIFICATION',
      tagline: 'We get your message to the right people.',
      list: ['Media & PR', 'Advertising', 'Content Production'],
      speed: 0.02
    },
    {
      id: '03',
      icon: <Sparkles size={48} />,
      title: 'ENGAGEMENT',
      tagline: 'We create experiences that leave a mark.',
      list: ['Digital Marketing', 'Social Media', 'Activations'],
      speed: 0.06
    }
  ];

  const steps = [
    { id: '01', name: 'DEEP DIVE', desc: 'Discovery & Context', detail: 'We immerse ourselves in your brand world to find the hidden gems through internal auditing.' },
    { id: '02', name: 'DECODE', desc: 'Research & Insights', detail: 'Data-driven analysis to understand the pulse of your audience and market opportunities.' },
    { id: '03', name: 'BLUEPRINT', desc: 'Strategic Planning', detail: 'The architectural plan for your market domination, outlining every touchpoint.' },
    { id: '04', name: 'CREATE', desc: 'Design & Development', detail: 'Where unhinged creativity meets strategic constraints to build visual and narrative assets.' },
    { id: '05', name: 'IGNITE', desc: 'Execution', detail: 'Launching your brand into the atmosphere with precision media buying and activations.' },
    { id: '06', name: 'EVOLVE', desc: 'Measure & Optimize', detail: 'Continuous learning through performance tracking to ensure long-term brand health.' },
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
  
  const scrollingClients = [...clients, ...clients];

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);

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
        <div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-125"
            poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&w=1920&fm=webp"
          >
            <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=4934d63234d318e8df639c05878a2e5414d4850d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,10,10,0.3)_0%,_rgba(10,10,10,0.6)_40%,_rgba(10,10,10,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[#1AB69D]/5 mix-blend-color" />
        </div>

        <div className="z-10 relative">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20 animate-fade-in shadow-xl">
            <span className="w-2 h-2 bg-[#1AB69D] rounded-full animate-pulse"></span>
            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Burundi's Premier Agency</span>
          </div>

          <h1 className="text-[52px] md:text-[96px] font-[900] text-white leading-[0.95] tracking-[-0.04em] mb-8 select-none">
            <span className={getWordClasses(1)}>IMAGINE.</span><br />
            <span className={getWordClasses(2)}>DARE.</span><br />
            <span className={getWordClasses(3)}>CREATE.</span>
          </h1>
          
          <p className="text-[18px] md:text-[24px] text-[#F5F5F5] max-w-[700px] mx-auto mb-12 animate-fade-in-up leading-relaxed delay-1000">
            We are <span className="text-[#1AB69D] font-black">Aktivate.</span> <br />
            The alchemists of experience and brand evangelists of Burundi.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in delay-[1200ms]">
            <Link to="/contact" className="group relative inline-flex items-center justify-center bg-[#1AB69D] text-white px-12 py-5 rounded-[8px] font-bold text-lg hover:bg-[#158F7C] transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 uppercase tracking-widest">GET STARTED</span>
            </Link>
            <Link to="/work" className="text-white px-12 py-5 rounded-[8px] font-bold text-lg border-2 border-white/30 backdrop-blur-sm hover:border-white hover:bg-white/10 transition-all uppercase tracking-widest">
              Our Work
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10 flex flex-col items-center opacity-80">
          <ChevronDown size={24} className="text-[#1AB69D]" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#0A0A0A] py-20 md:py-[120px] px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionHeader dark title="WE ARE NOT YOUR AVERAGE AGENCY." />
          <p className="text-[#F5F5F5] text-[18px] md:text-[20px] leading-[1.8] max-w-[900px] mx-auto mb-12 opacity-80">
            We're strategists who think like creatives, and creatives who think strategically. We blend data-fueled insights with unhinged creativity to craft result-driven activations that dominate the market.
          </p>
          <p className="text-[#1AB69D] text-[24px] md:text-[32px] font-bold tracking-tight italic">
            "We don't follow the trends. We spark them."
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section ref={servicesSectionRef} className="bg-white py-20 md:py-[120px] px-6 md:px-[120px] relative">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <SectionHeader title="WHAT WE DO" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const parallaxOffset = sectionTop ? (scrollY - sectionTop + 400) * service.speed : 0;
              return (
                <div 
                  key={i} 
                  className="bg-[#F5F5F5] p-12 rounded-[16px] transition-all duration-300 group hover:bg-white border border-transparent hover:border-[#1AB69D]/10 shadow-sm hover:shadow-xl will-change-transform"
                  style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
                >
                  <div className="mb-6 text-[#1AB69D] transition-transform group-hover:scale-110 group-hover:rotate-3 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-[#0A0A0A] text-2xl font-bold mb-4">{service.id}. {service.title}</h3>
                  <p className="text-[#1AB69D] text-lg font-medium mb-8">{service.tagline}</p>
                  <ul className="space-y-3">
                    {service.list.map((item, j) => (
                      <li key={j} className="text-[#2D2D2D] flex items-center text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-[#1AB69D] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE AKTIVATE */}
      <section className="bg-[#F9F9F9] py-24 md:py-[120px] px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1AB69D] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Proven Process</span>
            <h2 className="text-[36px] md:text-[52px] font-[900] text-[#0A0A0A] leading-none mb-12 tracking-tight uppercase text-center">HOW WE AKTIVATE</h2>
          </div>

          <div className="relative mb-20 px-4">
            <div className="absolute top-[22px] left-[5%] right-[5%] h-px bg-[#0A0A0A]/10" />
            <div 
              className="absolute top-[22px] left-[5%] h-px bg-[#1AB69D] transition-all duration-700 ease-in-out" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
            />
            <div className="relative flex justify-between items-start">
              {steps.map((step, i) => {
                const isActive = activeStep === i;
                const isPast = activeStep > i;
                return (
                  <button key={step.id} onClick={() => setActiveStep(i)} className="flex flex-col items-center group relative z-10 w-12">
                    <div className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-500 mb-4 bg-white ${isActive ? 'border-[#1AB69D] scale-125 shadow-xl ring-4 ring-[#1AB69D]/10' : isPast ? 'border-[#1AB69D] bg-[#1AB69D]' : 'border-[#E5E5E5]'}`}>
                      {isPast ? <Check size={20} className="text-white" /> : <span className={`text-xs font-black ${isActive ? 'text-[#1AB69D]' : 'text-[#0A0A0A]/40'}`}>{step.id}</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-[#0A0A0A]/5 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
              <div className="lg:col-span-5 relative bg-[#0A0A0A] overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${['1517245386807-bb43f82c33c4', '1460925895917-afdab827c52f', '1552664730-d307ca884978', '1522202176988-66273c2fd55f', '1531482615713-2afd69097998', '1454165833767-02750849147d'][activeStep]}?auto=format&fit=crop&q=80&w=800`}
                  alt={steps[activeStep].name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-4xl font-black tracking-tighter italic uppercase">{steps[activeStep].name}</h3>
                </div>
              </div>
              <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                <p className="text-[#0A0A0A] text-2xl md:text-3xl font-bold leading-tight mb-6">{steps[activeStep].desc}</p>
                <p className="text-[#2D2D2D] text-[16px] md:text-lg leading-relaxed opacity-70 italic mb-10">"{steps[activeStep].detail}"</p>
                <div className="flex items-center space-x-6">
                  <button onClick={prevStep} className="p-4 rounded-full border border-[#0A0A0A]/10 text-[#0A0A0A]/40 hover:text-[#1AB69D] transition-all"><ChevronLeft size={24} /></button>
                  <button onClick={nextStep} className="p-4 rounded-full bg-[#0A0A0A] text-white hover:bg-[#1AB69D] transition-all"><ArrowRight size={24} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-[#F5F5F5] py-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 mb-12"><SectionHeader title="TRUSTED BY" /></div>
        <div className="relative">
          <div className="flex animate-marquee space-x-8 w-fit px-4">
            {scrollingClients.map((client, i) => (
              <div key={i} className="flex-shrink-0 w-[200px] md:w-[250px] bg-white h-[100px] md:h-[120px] rounded-[16px] flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500 shadow-sm">
                <span className="font-black text-xl md:text-2xl opacity-40 hover:opacity-100 transition-opacity" style={{ color: client.color }}>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;