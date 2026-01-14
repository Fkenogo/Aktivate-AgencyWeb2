import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  ChevronRight, 
  ChevronLeft
} from 'lucide-react';

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateGrid, setAnimateGrid] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      challenge: 'In a saturated telecom market, Lumitel needed to launch their 4G network as a lifestyle essential.',
      solution: 'We engineered a nationwide activation blending street festivals with digital influencers.',
      results: '30% increase in data subscribers.',
      category: 'Telecom & Activation',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format,compress&fit=crop&q=70&w=1000&fm=webp'
    },
    {
      id: 1,
      client: 'KFC UGANDA',
      title: 'The Great Kampala Crunch',
      challenge: 'KFC needed to build "local love" for their newest city-center branch.',
      solution: 'Soul of the City campaign partnering with local street artists.',
      results: 'Record-breaking opening week sales.',
      category: 'F&B & Creative',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format,compress&fit=crop&q=70&w=1000&fm=webp'
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

  const nextCaseStudy = () => setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  const prevCaseStudy = () => setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A0A0A] py-24 md:py-40 px-6 text-center text-white relative">
        <h1 className="text-[40px] md:text-[56px] font-[800] leading-tight mb-8 uppercase">Proof in the Portfolio</h1>
        <p className="text-[18px] md:text-[24px] max-w-[800px] mx-auto text-[#F5F5F5] leading-relaxed">
          Real brands. Real results.
        </p>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20 px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#0A0A0A] uppercase">The Case Studies</h2>
            <div className="flex space-x-2">
              <button onClick={prevCaseStudy} className="w-12 h-12 rounded-full border-2 border-[#F5F5F5] flex items-center justify-center hover:border-[#1AB69D]"><ChevronLeft size={24} /></button>
              <button onClick={nextCaseStudy} className="w-12 h-12 rounded-full border-2 border-[#F5F5F5] flex items-center justify-center hover:border-[#1AB69D]"><ChevronRight size={24} /></button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {caseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#F5F5F5] rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 border border-transparent">
                    <div className="flex-1 space-y-8">
                      <h3 className="text-3xl md:text-5xl font-black italic">{study.client}</h3>
                      <h4 className="text-2xl font-bold leading-tight">{study.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div><div className="flex items-center space-x-2 text-sm uppercase font-bold mb-2"><Target size={16} className="text-[#1AB69D]" /><span>Challenge</span></div><p className="text-sm italic">{study.challenge}</p></div>
                        <div><div className="flex items-center space-x-2 text-sm uppercase font-bold mb-2"><Lightbulb size={16} className="text-[#1AB69D]" /><span>Solution</span></div><p className="text-sm italic">{study.solution}</p></div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white px-6 py-4 rounded-full border border-[#F5F5F5] w-fit">
                        <TrendingUp size={20} className="text-[#1AB69D]" />
                        <span className="text-[#1AB69D] font-bold text-sm italic">{study.results}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[70px] z-40 bg-white shadow-md py-6 px-6 overflow-x-auto border-b border-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto flex justify-center space-x-4">
          {filters.map((f) => (
            <button key={f} onClick={() => handleFilterChange(f)} className={`px-8 py-2 rounded-full font-bold text-xs border-2 ${activeFilter === f ? 'bg-[#1AB69D] text-white border-[#1AB69D]' : 'bg-transparent text-[#2D2D2D] border-transparent hover:border-[#1AB69D]'}`}>{f}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="bg-[#F5F5F5] py-20 px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto min-h-[400px]">
          <SectionHeader align="left" title="OUR WORK" />
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${animateGrid ? 'opacity-100' : 'opacity-0'}`}>
            {filteredProjects.map((p) => (
              <div key={p.id} className="relative group overflow-hidden rounded-[24px] bg-white shadow-lg transition-transform hover:-translate-y-3">
                <div className="aspect-[4/5] relative overflow-hidden"><img src={p.image} alt={p.client} className="absolute inset-0 w-full h-full object-cover grayscale transition-transform group-hover:scale-110" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-black italic tracking-tighter">{p.client}</h3>
                  <span className="text-[#1AB69D] text-xs font-black uppercase">{p.category}</span>
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