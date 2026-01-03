
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  ChevronRight, 
  ChevronLeft, 
  Minus, 
  Plus, 
  Search, 
  Share2, 
  Linkedin, 
  Twitter, 
  Copy, 
  X,
  CheckCircle2
} from 'lucide-react';

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  const [animateGrid, setAnimateGrid] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  
  // Share Modal State
  const [sharingProject, setSharingProject] = useState<{title: string, client: string} | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const filters = ['All', 'Branding', 'Campaigns', 'Digital', 'Activations', 'Strategy'];

  const projects = [
    { id: 1, client: 'Akeza Sports', category: 'Branding', image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format,compress&fit=crop&q=70&w=800&fm=webp' },
    { id: 2, client: 'Lumitel', category: 'Campaigns', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format,compress&fit=crop&q=70&w=800&fm=webp' },
    { id: 3, client: 'KFC Uganda', category: 'Activations', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format,compress&fit=crop&q=70&w=800&fm=webp' },
    { id: 4, client: 'Primus', category: 'Campaigns', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format,compress&fit=crop&q=70&w=800&fm=webp' },
    { id: 5, client: 'ILO/UN', category: 'Strategy', image: 'https://images.unsplash.com/photo-1454165833767-02750849147d?auto=format,compress&fit=crop&q=70&w=800&fm=webp' },
    { id: 6, client: 'Vital-O', category: 'Digital', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format,compress&fit=crop&q=70&w=800&fm=webp' },
  ];

  const caseStudies = [
    {
      id: 0,
      client: 'LUMITEL',
      title: 'Dominating the 4G Horizon',
      challenge: 'In a saturated telecom market, Lumitel needed to launch their 4G network not just as a service, but as a lifestyle essential for the youth of Burundi.',
      solution: 'We engineered a nationwide "Ignite Your Speed" activation campaign, blending high-energy street festivals with localized digital influencer storytelling.',
      results: '30% increase in data subscribers within 3 months and a 45% lift in brand sentiment among Gen Z users.',
      category: 'Telecom & Activation',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format,compress&fit=crop&q=70&w=1000&fm=webp',
      deepDive: 'Our team deployed 50+ localized activations across 18 provinces. We leveraged the AKTIVATE "Decode" process to identify micro-influencers in rural regions, ensuring the message wasn\'t just heard, but trusted. The campaign culminated in a 12-hour digital festival streamed to over 200,000 unique viewers.'
    },
    {
      id: 1,
      client: 'KFC UGANDA',
      title: 'The Great Kampala Crunch',
      challenge: 'Competing with established local fast-food players, KFC needed to build "local love" and drive footfall for their newest city-center branch.',
      solution: 'AKTIVATE developed a "Soul of the City" campaign, partnering with local street artists and musicians to create an immersive cultural crossover event.',
      results: 'Record-breaking opening week sales (20% higher than forecast) and 1.2M digital impressions across East Africa.',
      category: 'F&B & Creative',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format,compress&fit=crop&q=70&w=1000&fm=webp',
      deepDive: 'We transformed the KFC facade into a live canvas for 72 hours. Local street artists created a mural that integrated the Colonel with Kampala icons. This wasn\'t just a store opening; it was a cultural takeover that utilized hyper-local PR to bypass traditional ad fatigue.'
    },
    {
      id: 2,
      client: 'AKEZA SPORTS',
      title: 'Digital Rebirth of an Icon',
      challenge: 'A legacy sports brand was losing relevance among a digital-first audience due to an outdated visual identity and fragmented social presence.',
      solution: 'A total brand alchemy project: we rebuilt the visual ID from the ground up and deployed a content engine that focused on raw, behind-the-scenes athlete stories.',
      results: '50% growth in organic web traffic and 200% increase in social media engagement within the first quarter.',
      category: 'Rebranding & Content',
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format,compress&fit=crop&q=70&w=1000&fm=webp',
      deepDive: 'The "Evolve" phase of our project involved a complete technical SEO overhaul alongside the visual rebrand. We developed a proprietary "Athlete Storytelling Framework" that empowered individual players to become brand ambassadors, resulting in a sustainable content ecosystem that continues to perform today.'
    },
    {
      id: 3,
      client: 'PRIMUS',
      title: 'Refining the Brew',
      challenge: 'Primus needed to maintain its status as Burundi\'s choice beer while reaching a new generation of drinkers.',
      solution: 'A nationwide campaign focusing on heritage and modern refreshment.',
      results: 'Market share maintained at 85% despite new entrants.',
      category: 'FMCG & Strategy',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format,compress&fit=crop&q=70&w=1000&fm=webp',
      deepDive: 'By blending traditional messaging with high-tech experiential bars, we bridged the gap between old-world loyalty and new-world excitement.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setAnimateGrid(false);
    setActiveFilter(filter);
    setTimeout(() => setAnimateGrid(true), 50);
  };

  useEffect(() => {
    setAnimateGrid(true);
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  const nextCaseStudy = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleShare = (client: string, title: string) => {
    setSharingProject({ client, title });
    setCopySuccess(false);
  };

  const closeShareModal = () => {
    setSharingProject(null);
  };

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shareOnLinkedIn = () => {
    if (!sharingProject) return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(`Check out ${sharingProject.client}: ${sharingProject.title} by AKTIVATE`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    if (!sharingProject) return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this AKTIVATE case study: ${sharingProject.client} - ${sharingProject.title}`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A0A0A] py-24 md:py-40 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-[40px] md:text-[56px] font-[800] leading-tight mb-8 uppercase animate-fade-in-up-bounce">Proof in the Portfolio</h1>
          <p className="text-[18px] md:text-[24px] max-w-[800px] mx-auto text-[#F5F5F5] leading-relaxed">
            Real brands. Real results. Real impact. <br />
            Explore how we transform business goals into market domination.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20 md:py-[120px] px-6 md:px-[120px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#1AB69D] font-bold tracking-widest uppercase text-sm mb-4 block">Deep Dives</span>
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#0A0A0A] leading-tight uppercase">The Case Studies</h2>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={prevCaseStudy}
                className="w-12 h-12 rounded-full border-2 border-[#F5F5F5] flex items-center justify-center hover:border-[#1AB69D] hover:text-[#1AB69D] transition-all bg-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextCaseStudy}
                className="w-12 h-12 rounded-full border-2 border-[#F5F5F5] flex items-center justify-center hover:border-[#1AB69D] hover:text-[#1AB69D] transition-all bg-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => setIsHoveringCarousel(true)}
            onMouseLeave={() => setIsHoveringCarousel(false)}
          >
            <div 
              className={`absolute top-1/2 -left-16 -translate-y-1/2 z-20 transition-all duration-300 hidden xl:block ${
                isHoveringCarousel ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              <button 
                onClick={prevCaseStudy}
                className="w-14 h-14 rounded-full bg-white border border-[#1AB69D]/20 flex items-center justify-center text-[#1AB69D] hover:bg-[#1AB69D] hover:text-white shadow-xl transition-all"
              >
                <ChevronLeft size={32} />
              </button>
            </div>

            <div 
              className={`absolute top-1/2 -right-16 -translate-y-1/2 z-20 transition-all duration-300 hidden xl:block ${
                isHoveringCarousel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            >
              <button 
                onClick={nextCaseStudy}
                className="w-14 h-14 rounded-full bg-white border border-[#1AB69D]/20 flex items-center justify-center text-[#1AB69D] hover:bg-[#1AB69D] hover:text-white shadow-xl transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.23, 1, 0.32, 1)]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {caseStudies.map((study) => (
                  <div key={study.id} className="w-full flex-shrink-0 px-4">
                    <div className={`bg-[#F5F5F5] rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 border border-transparent hover:border-[#1AB69D]/20 transition-all duration-500 shadow-sm ${expandedStudy === study.id ? 'bg-white ring-2 ring-[#1AB69D]/10' : ''}`}>
                      <div className="flex-1 space-y-8">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs font-bold text-[#1AB69D] uppercase tracking-widest bg-[#1AB69D]/10 px-3 py-1 rounded-full">{study.category}</span>
                            <h3 className="text-3xl md:text-5xl font-black text-[#0A0A0A] mt-4 tracking-tighter italic">{study.client}</h3>
                          </div>
                          <div className={`p-4 rounded-2xl shadow-lg transition-colors duration-300 hidden md:block ${expandedStudy === study.id ? 'bg-[#1AB69D] text-white' : 'bg-white text-[#1AB69D]'}`}>
                            <Target size={32} />
                          </div>
                        </div>

                        <h4 className="text-2xl font-bold text-[#0A0A0A] leading-tight">{study.title}</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2 text-[#0A0A0A] font-black text-sm uppercase tracking-wider">
                              <Target size={16} className="text-[#1AB69D]" />
                              <span>The Challenge</span>
                            </div>
                            <p className="text-[15px] text-[#2D2D2D] leading-[1.8] opacity-80 italic">{study.challenge}</p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center space-x-2 text-[#0A0A0A] font-black text-sm uppercase tracking-wider">
                              <Lightbulb size={16} className="text-[#1AB69D]" />
                              <span>Our Solution</span>
                            </div>
                            <p className="text-[15px] text-[#2D2D2D] leading-[1.8] opacity-80 italic">{study.solution}</p>
                          </div>
                        </div>

                        <div 
                          className={`overflow-hidden transition-all duration-[700ms] cubic-bezier(0.16, 1, 0.3, 1) ${
                            expandedStudy === study.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className={`pt-8 border-t border-[#0A0A0A]/5 mt-4 space-y-4 transition-all duration-[800ms] delay-100 ${
                              expandedStudy === study.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                          >
                            <div className="flex items-center space-x-2 text-[#0A0A0A] font-black text-sm uppercase">
                              <ChevronRight size={14} className="text-[#1AB69D]" />
                              <span>Deep Dive Methodology</span>
                            </div>
                            <div className="bg-white/70 p-8 rounded-2xl border border-[#F5F5F5] text-[#2D2D2D] text-lg leading-relaxed shadow-inner italic">
                              {study.deepDive}
                            </div>
                          </div>
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
                           <button 
                            onClick={() => toggleExpand(study.id)}
                            className={`group/acc px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 flex items-center gap-3 shadow-lg active:scale-95 ${
                              expandedStudy === study.id 
                              ? 'bg-[#0A0A0A] text-white hover:bg-[#1A1A1A]' 
                              : 'bg-[#1AB69D] text-white hover:bg-[#158F7C] hover:shadow-[#1AB69D]/20'
                            }`}
                          >
                            <span>{expandedStudy === study.id ? 'Collapse Case' : 'View Full Case Study'}</span>
                            <div className={`transition-transform duration-500 ${expandedStudy === study.id ? 'rotate-180' : 'rotate-0'}`}>
                              {expandedStudy === study.id ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </button>

                          <button 
                            onClick={() => handleShare(study.client, study.title)}
                            className="bg-white text-[#0A0A0A] border-2 border-[#0A0A0A]/10 p-4 rounded-full hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl active:scale-90"
                          >
                            <Share2 size={20} />
                          </button>

                          <div className="flex items-center space-x-4 bg-white px-6 py-4 rounded-full border border-[#F5F5F5] shadow-sm ml-auto sm:ml-0">
                            <TrendingUp size={20} className="text-[#1AB69D]" />
                            <span className="text-[#1AB69D] font-bold text-[15px] leading-[1.8] tracking-tight italic">{study.results}</span>
                          </div>
                        </div>
                      </div>

                      <div className="hidden lg:flex w-1/3 bg-[#151515] rounded-[24px] overflow-hidden items-center justify-center relative">
                        <img 
                          src={study.image} 
                          alt={`${study.client}`}
                          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
                        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-black italic opacity-5 select-none z-0">{study.id + 1}</h2>
                        <div className="relative z-10 text-center px-6">
                          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.5em] mb-4">Project Alpha</p>
                          <div className="w-16 h-1 bg-[#1AB69D] mx-auto mb-6"></div>
                          <span className="text-white font-black text-3xl block leading-tight tracking-tighter uppercase">{study.client}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-12">
              <div className="text-sm font-black text-[#0A0A0A] tracking-[0.3em] flex items-center bg-[#F5F5F5] px-6 py-2 rounded-full border border-[#0A0A0A]/5">
                <span className="text-[#1AB69D]">0{currentSlide + 1}</span>
                <span className="mx-3 opacity-20">/</span>
                <span className="opacity-40">0{caseStudies.length}</span>
              </div>
              
              <div className="flex space-x-3">
                {caseStudies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 transition-all duration-500 rounded-full border border-transparent ${
                      currentSlide === i 
                        ? 'w-16 bg-[#1AB69D] shadow-[0_4px_12px_rgba(26,182,157,0.3)]' 
                        : 'w-2 bg-[#F5F5F5] hover:bg-[#1AB69D]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      {sharingProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 animate-fade-in">
          <div 
            className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm"
            onClick={closeShareModal}
          ></div>
          <div className="relative bg-white w-full max-w-md rounded-[24px] overflow-hidden shadow-2xl p-8 transform animate-scale-in">
            <button 
              onClick={closeShareModal}
              className="absolute top-4 right-4 p-2 text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <span className="text-[#1AB69D] text-xs font-black uppercase tracking-[0.3em] mb-4 block">Share Movement</span>
              <h3 className="text-2xl font-black text-[#0A0A0A] uppercase italic tracking-tighter">
                {sharingProject.client}
              </h3>
              <p className="text-[#2D2D2D] text-sm mt-2 opacity-60">{sharingProject.title}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <button 
                onClick={shareOnLinkedIn}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0A66C2]/5 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 group"
              >
                <Linkedin size={32} className="mb-3 transition-transform group-hover:scale-110" />
                <span className="font-bold text-xs uppercase tracking-widest">LinkedIn</span>
              </button>
              <button 
                onClick={shareOnTwitter}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#000000]/5 text-[#000000] hover:bg-[#000000] hover:text-white transition-all duration-300 group"
              >
                <Twitter size={32} className="mb-3 transition-transform group-hover:scale-110" />
                <span className="font-bold text-xs uppercase tracking-widest">Twitter</span>
              </button>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]/40">Copy Direct Link</span>
              <div className="flex items-center bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#0A0A0A]/5 p-2">
                <input 
                  type="text" 
                  readOnly 
                  value={window.location.href}
                  className="bg-transparent border-none outline-none flex-grow px-3 text-xs font-medium text-[#2D2D2D] truncate"
                />
                <button 
                  onClick={copyLink}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                    copySuccess 
                    ? 'bg-[#1AB69D] text-white' 
                    : 'bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
                  }`}
                >
                  {copySuccess ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                  <span>{copySuccess ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <div className="sticky top-[70px] z-40 bg-white/80 backdrop-blur-xl shadow-md py-6 px-6 overflow-x-auto border-b border-[#F5F5F5] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex justify-center items-center space-x-3 md:space-x-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all whitespace-nowrap border-2 ${
                activeFilter === f 
                  ? 'bg-[#1AB69D] text-white border-[#1AB69D]' 
                  : 'bg-transparent text-[#2D2D2D] border-transparent hover:border-[#1AB69D] hover:text-[#1AB69D]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="bg-[#F5F5F5] py-20 px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto min-h-[400px]">
          <SectionHeader align="left" title="OUR WORK" subtitle={`Showing ${activeFilter === 'All' ? 'all' : activeFilter} projects.`} />
          
          {filteredProjects.length > 0 ? (
            <div 
              key={activeFilter}
              className={`columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 transition-all duration-500 ${animateGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {filteredProjects.map((p) => (
                <div 
                  key={p.id} 
                  className="relative group overflow-hidden rounded-[24px] bg-white break-inside-avoid shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#E5E5E5] relative">
                    <img 
                      src={p.image} 
                      alt={p.client} 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] cubic-bezier(0.165, 0.84, 0.44, 1) group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-all duration-500 flex flex-col justify-end" />
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-8 text-white pointer-events-none group-hover:pointer-events-auto">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <h3 className="text-4xl font-black mb-3 italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tracking-tighter">{p.client}</h3>
                      <div className="delay-75 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-block bg-[#1AB69D] px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-10 shadow-xl border border-white/10">
                          {p.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search size={64} className="text-[#1AB69D]/20 mb-6" />
              <h3 className="text-2xl font-bold text-[#0A0A0A]">Coming Soon</h3>
              <p className="text-[#2D2D2D] max-w-xs mt-2">We're currently documenting more projects in the {activeFilter} category.</p>
              <button 
                onClick={() => handleFilterChange('All')}
                className="mt-8 text-[#1AB69D] font-bold underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0A0A0A] py-24 px-6 text-center">
        <h2 className="text-white text-[32px] md:text-[48px] font-bold mb-10">
          Want to be our next <br />
          <span className="text-[#1AB69D]">Success Story?</span>
        </h2>
        <Link 
          to="/contact"
          className="inline-block bg-[#1AB69D] text-white px-16 py-5 rounded-full font-black text-lg hover:bg-[#158F7C] transition-all transform hover:scale-105 active:scale-95 shadow-xl"
        >
          START YOUR PROJECT
        </Link>
      </section>
    </div>
  );
};

export default Work;
