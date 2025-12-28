
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { GoogleGenAI } from '@google/genai';
import Button from '../components/Button.tsx';
import { SERVICES, CLIENT_LOGOS, PROCESS_STEPS } from '../constants.tsx';

interface AtmosphereVersion {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}

interface HomeProps {
  isPreview?: boolean;
}

const Home: React.FC<HomeProps> = ({ isPreview = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  
  const [backgroundUrl, setBackgroundUrl] = useState('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showGenUI, setShowGenUI] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [history, setHistory] = useState<AtmosphereVersion[]>([]);
  const [activeTab, setActiveTab] = useState<'generate' | 'history'>('generate');

  useEffect(() => {
    const savedHistory = localStorage.getItem('aktivate_atmosphere_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
    
    if (isPreview) {
      setShowGenUI(true);
    }
  }, [isPreview]);

  useEffect(() => {
    localStorage.setItem('aktivate_atmosphere_history', JSON.stringify(history));
  }, [history]);

  const handleGenerateBackground = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `A professional, high-end agency background image for a branding firm. Concept: ${prompt}. The style should be cinematic, moody, and sophisticated, using deep blacks and brand teal accents if possible. High resolution, high detail.` }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const newUrl = `data:image/png;base64,${base64EncodeString}`;
          
          const newVersion: AtmosphereVersion = {
            id: Math.random().toString(36).substring(2, 11),
            url: newUrl,
            prompt: prompt,
            timestamp: Date.now()
          };
          
          setHistory(prev => [newVersion, ...prev].slice(0, 10));
          setBackgroundUrl(newUrl);
          foundImage = true;
          setShowGenUI(false);
          setPrompt('');
          break;
        }
      }
      
      if (!foundImage) {
        throw new Error("No image was returned from the AI.");
      }
    } catch (err) {
      console.error("Image generation failed:", err);
      setError("Failed to generate image. Please try again with a different prompt.");
    } finally {
      setIsGenerating(false);
    }
  };

  const restoreVersion = (version: AtmosphereVersion) => {
    setBackgroundUrl(version.url);
    setShowGenUI(false);
  };

  const deleteVersion = (id: string) => {
    setHistory(prev => prev.filter(v => v.id !== id));
  };

  const scrollToManifesto = () => {
    const el = document.getElementById('manifesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
  };

  const heroEasing = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>AKTIVATE | Imagine. Dare. Create. - Brand Agency in Burundi</title>
        <meta name="description" content="AKTIVATE is the alchemists of experience and brand evangelists of Burundi. We blend strategic insights with creativity to activate brands." />
      </Helmet>
      
      <section className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center bg-deepBlack text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-deepBlack z-10" />
          <img 
            key={backgroundUrl}
            src={backgroundUrl} 
            className={`w-full h-full object-cover grayscale opacity-40 scale-105 transition-all duration-1000 ${isGenerating ? 'animate-pulse blur-sm' : 'animate-[pulse_10s_infinite_alternate]'}`} 
            alt="Agency Background" 
          />
        </div>

        <button 
          onClick={() => setShowGenUI(!showGenUI)}
          className={`absolute top-28 right-8 z-40 backdrop-blur-md border p-4 rounded-full transition-all group overflow-hidden ${showGenUI ? 'bg-brandTeal border-brandTeal' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
          title="Customize Atmosphere"
        >
          <span className={`text-xl transition-transform inline-block ${showGenUI ? 'rotate-45' : 'group-hover:rotate-90'}`}>
            {showGenUI ? '+' : '✨'}
          </span>
          <span className="max-w-0 group-hover:max-w-[200px] group-hover:ml-3 transition-all inline-block whitespace-nowrap overflow-hidden text-xs font-bold tracking-widest uppercase">
            {showGenUI ? 'Close Controls' : 'Customize Atmosphere'}
          </span>
        </button>

        {showGenUI && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 animate-fadeIn">
            <div className="bg-deepBlack border border-white/10 rounded-[24px] max-w-2xl w-full relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="flex border-b border-white/10">
                <button 
                  onClick={() => setActiveTab('generate')}
                  className={`flex-1 py-6 text-[11px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === 'generate' ? 'text-brandTeal bg-white/5' : 'text-white/40 hover:text-white'}`}
                >
                  Generate
                </button>
                <button 
                  onClick={() => setActiveTab('history')}
                  className={`flex-1 py-6 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === 'history' ? 'text-brandTeal bg-white/5' : 'text-white/40 hover:text-white'}`}
                >
                  History {history.length > 0 && <span className="ml-2 bg-brandTeal text-white px-2 py-0.5 rounded-full text-[9px]">{history.length}</span>}
                </button>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                {activeTab === 'generate' ? (
                  <div className="space-y-6 animate-[fadeInUp_0.4s_ease-out]">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Redefine Your Reality</h3>
                    <p className="text-lightGrey/60 text-sm mb-8">Tell our AI alchemist what background you imagine for AKTIVATE.</p>
                    
                    <textarea 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., Abstract cinematic lights in deep teal and charcoal, motion blur, premium feel..."
                      className="w-full bg-white/5 border border-white/10 rounded-[12px] p-4 text-white placeholder:text-white/20 focus:border-brandTeal outline-none transition-all resize-none h-32"
                      disabled={isGenerating}
                    />
                    
                    {error && <p className="text-red-500 text-xs font-bold uppercase tracking-wide">{error}</p>}
                    
                    <Button 
                      onClick={handleGenerateBackground}
                      variant="primary" 
                      className="w-full py-4 text-sm"
                      disabled={isGenerating || !prompt.trim()}
                    >
                      {isGenerating ? 'ALCHEMY IN PROGRESS...' : 'ACTIVATE NEW ATMOSPHERE'}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6 animate-[fadeInUp_0.4s_ease-out]">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Version Explorer</h3>
                    <p className="text-lightGrey/60 text-sm mb-8">Restore previous atmospheres and changes.</p>
                    
                    {history.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {history.map((v) => (
                          <div key={v.id} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden relative">
                            <img src={v.url} className="w-full h-32 object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="History version" />
                            <div className="p-3">
                              <p className="text-[10px] text-white/40 mb-2 truncate">"{v.prompt}"</p>
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => restoreVersion(v)}
                                  className="flex-1 bg-brandTeal text-white text-[10px] font-bold py-2 rounded uppercase tracking-wider hover:bg-hoverTeal transition-colors"
                                >
                                  Restore
                                </button>
                                <button 
                                  onClick={() => deleteVersion(v.id)}
                                  className="w-8 h-8 flex items-center justify-center bg-white/5 text-white/40 hover:text-red-500 rounded transition-colors"
                                >
                                  ×
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 border-2 border-dashed border-white/5 rounded-2xl">
                        <p className="text-white/20 text-sm font-medium uppercase tracking-widest">No previous versions yet</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-12 pt-8 border-t border-white/10">
                  <button 
                    onClick={() => {
                      setBackgroundUrl('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070');
                      setShowGenUI(false);
                    }}
                    className="w-full text-xs font-bold text-white/40 hover:text-brandTeal transition-colors uppercase tracking-widest"
                  >
                    Reset to Default Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`relative z-20 text-center max-w-5xl px-6 flex flex-col items-center transition-all duration-500 ${isGenerating ? 'opacity-20 blur-md' : 'opacity-100'}`}>
          <h1 className="flex flex-col items-center font-montserrat font-extrabold italic tracking-tighter leading-none mb-10">
            <span className={`text-[40px] md:text-[72px] opacity-0 animate-[fadeInUp_0.8s_0s_${heroEasing}_forwards]`}>
              IMAGINE.
            </span>
            <span className={`text-[40px] md:text-[72px] text-brandTeal opacity-0 animate-[fadeInUp_0.8s_0.18s_${heroEasing}_forwards]`}>
              DARE.
            </span>
            <span className={`text-[40px] md:text-[72px] opacity-0 animate-[fadeInUp_0.8s_0.36s_${heroEasing}_forwards]`}>
              CREATE.
            </span>
          </h1>
          
          <div className="max-w-2xl opacity-0 animate-[fadeIn_1s_0.7s_forwards] flex flex-col items-center">
            <p className="text-[18px] md:text-[24px] font-light text-lightGrey/80 leading-relaxed mb-12">
              We are <span className="text-white font-bold">AKTIVATE</span>. The alchemists of experience and brand evangelists of Burundi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button variant="primary" onClick={scrollToManifesto}>
                THE MANIFESTO
              </Button>
              <Link to="/work">
                <Button variant="outline">VIEW OUR WORK</Button>
              </Link>
            </div>
          </div>
        </div>

        {isGenerating && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
             <div className="text-center space-y-4">
                <div className="text-brandTeal text-5xl animate-spin mb-4 inline-block">◌</div>
                <div className="text-sm font-bold tracking-[0.5em] uppercase text-brandTeal animate-pulse">Generating New Vision</div>
             </div>
          </div>
        )}

        <div className="absolute bottom-12 flex flex-col items-center space-y-2 opacity-0 animate-[fadeIn_0.8s_1.5s_forwards]">
          <div 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-[10px] tracking-[0.3em] font-bold text-white/40 uppercase mb-2">Scroll</span>
            <div className="text-brandTeal text-3xl animate-bounce">↓</div>
          </div>
        </div>
      </section>

      <section id="manifesto" className="bg-deepBlack text-white py-120 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-120 text-center reveal">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-10 uppercase tracking-tight">
            WE ARE NOT YOUR AVERAGE AGENCY.
          </h2>
          <div className="max-w-[900px] mx-auto space-y-10">
            <p className="text-[18px] md:text-[20px] text-lightGrey/90 leading-relaxed font-light">
              We're not your average Burundi-based agency. We're strategists who think like creatives, and creatives who think strategically. The result? Brands that don't just exist—they <span className="text-brandTeal font-bold">activate</span>.
            </p>
            <p className="text-[18px] md:text-[20px] text-lightGrey/90 leading-relaxed font-light">
              We don't just market; we ignite. We blend data-fueled insights with unhinged creativity to craft result-driven activations that dominate the market.
            </p>
            <div className="pt-10">
              <p className="text-[24px] md:text-[32px] font-bold text-brandTeal italic">
                We don't follow the trends.<br />We spark them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-120 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-24">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[32px] md:text-[48px] font-extrabold text-deepBlack uppercase tracking-tighter">OUR EXPERTISE</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 reveal">
            <div className="w-full lg:w-1/3 flex flex-col space-y-4">
              {SERVICES.map((service, idx) => (
                <button
                  key={service.number}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`group flex items-center p-8 rounded-2xl transition-all duration-500 text-left border-2 ${activeServiceIdx === idx ? 'bg-brandTeal border-brandTeal text-white shadow-xl translate-x-4' : 'bg-lightGrey border-transparent text-charcoalGrey hover:bg-white hover:border-brandTeal/20'}`}
                >
                  <span className={`text-[32px] font-black mr-6 transition-colors ${activeServiceIdx === idx ? 'text-white/40' : 'text-brandTeal/20'}`}>
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-[20px] font-bold uppercase tracking-tight leading-tight">{service.title}</h3>
                    <p className={`text-[14px] mt-1 transition-opacity ${activeServiceIdx === idx ? 'opacity-80' : 'opacity-50'}`}>
                      {service.tagline}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="w-full lg:w-2/3 relative min-h-[500px] bg-deepBlack rounded-3xl overflow-hidden shadow-2xl">
              {SERVICES.map((service, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeServiceIdx === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-105 pointer-events-none'}`}
                >
                  <div className="absolute inset-0">
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/80 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-8 md:p-16 text-white space-y-8">
                    <div className="space-y-4">
                      <div className="text-[64px] mb-4">{service.icon}</div>
                      <h3 className="text-[32px] md:text-[48px] font-black uppercase tracking-tighter leading-none">
                        {service.title}
                      </h3>
                      <p className="text-[18px] md:text-[22px] text-lightGrey/80 max-w-2xl font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      {service.list.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 group">
                          <div className="w-2 h-2 rounded-full bg-brandTeal group-hover:scale-150 transition-transform" />
                          <span className="text-[15px] font-medium tracking-wide uppercase text-white/90">{item.split(':')[0]}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Link to={`/services/${service.number}`}>
                        <Button variant="white" className="!px-10 !py-4 text-sm">LEARN MORE</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lightGrey py-24 overflow-hidden border-y border-brandTeal/5">
        <div className="max-w-content mx-auto px-6 md:px-24">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[32px] md:text-[48px] font-bold text-deepBlack uppercase tracking-tight">HOW WE AKTIVATE</h2>
          </div>
          
          <div className="relative bg-white rounded-[32px] shadow-strong overflow-hidden min-h-[500px] flex flex-col md:flex-row reveal">
            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              {PROCESS_STEPS.map((step, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeStep === idx ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-10'}`}
                >
                  <div className="absolute inset-0 bg-brandTeal/10 mix-blend-multiply z-10" />
                  <img 
                    src={step.imageUrl} 
                    alt={step.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
              <div className="mb-8">
                <span className="text-[14px] font-bold text-brandTeal tracking-[0.3em] uppercase block mb-4">The Process</span>
                <div className="flex items-center gap-4 mb-2">
                   <span className="text-[48px] md:text-[64px] font-black text-brandTeal/20 italic leading-none">
                    {PROCESS_STEPS[activeStep].number}
                  </span>
                  <div className="h-[2px] w-12 bg-brandTeal" />
                </div>
              </div>

              <div className="min-h-[200px]">
                {PROCESS_STEPS.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`transition-all duration-700 absolute inset-x-8 md:inset-x-16 ${activeStep === idx ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
                  >
                    <h3 className="text-[28px] md:text-[40px] font-black text-deepBlack uppercase mb-6 leading-tight">
                      {step.name}
                    </h3>
                    <p className="text-charcoalGrey/80 text-[18px] md:text-[20px] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-lightGrey">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={prevStep}
                    className="w-12 h-12 rounded-full border-2 border-lightGrey flex items-center justify-center hover:bg-brandTeal hover:border-brandTeal hover:text-white transition-all text-xl"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextStep}
                    className="w-12 h-12 rounded-full border-2 border-lightGrey flex items-center justify-center hover:bg-brandTeal hover:border-brandTeal hover:text-white transition-all text-xl"
                  >
                    →
                  </button>
                </div>
                
                <div className="flex gap-2">
                  {PROCESS_STEPS.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${activeStep === idx ? 'w-8 bg-brandTeal' : 'w-2 bg-lightGrey hover:bg-brandTeal/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-120">
        <div className="max-w-content mx-auto px-6 md:px-24">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[28px] md:text-[36px] font-bold text-deepBlack uppercase tracking-widest">TRUSTED BY</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {CLIENT_LOGOS.map((client) => (
              <div 
                key={client} 
                className="bg-lightGrey h-32 p-6 rounded-[12px] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-[1.05] reveal"
              >
                <span className="text-[11px] font-black text-deepBlack text-center leading-none uppercase tracking-tighter">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deepBlack text-white py-120 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandTeal/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-content mx-auto px-6 relative z-10 reveal">
          <h2 className="text-[32px] md:text-[48px] font-extrabold mb-10 tracking-tighter uppercase">
            Don't just exist.<br />Dominate.
          </h2>
          <Link to="/contact">
            <Button variant="primary" className="px-16 py-6 text-xl">
              LET'S TALK
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
