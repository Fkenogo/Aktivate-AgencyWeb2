import React, { useState } from 'react';
import {
  ArrowRight,
  Search,
  Compass,
  Layers,
  PenTool,
  CalendarRange,
  Eye,
  GitMerge,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';
import TransitionLink from '../components/TransitionLink';
import { prefersReducedMotion } from '../utils/viewTransitions';

interface ImageSlotProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

const WorkplaceImage: React.FC<ImageSlotProps> = ({
  src,
  alt,
  className = '',
  imgClassName = 'object-cover object-center',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`relative overflow-hidden bg-[#173B48] ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setHasError(true)}
          className={`w-full h-full ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#102D38] to-[#1B4250] text-white/80">
          <span className="font-heading text-sm font-semibold tracking-wide">Aktivate Studio</span>
          <span className="text-xs text-white/60 mt-1 max-w-[28ch]">{alt}</span>
        </div>
      )}
    </figure>
  );
};

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  };

  const expertiseLead = [
    {
      num: '01',
      title: 'Brand Intelligence & Research',
      description:
        'Market research, customer insights, brand health studies, customer experience, competitive intelligence and performance research.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Brand Strategy & Development',
      description:
        'Brand positioning, identity development, brand strategy, marketing strategy, communications strategy and brand architecture.',
      icon: Compass,
    },
  ];

  const expertiseCore = [
    {
      num: '03',
      title: 'Brand Management & Advisory',
      description:
        'Brand-management assessments, Brand Management System design and implementation, brand governance, ongoing advisory and performance reviews.',
      icon: Layers,
      featured: true,
    },
    {
      num: '04',
      title: 'Creative & Communications',
      description:
        'Advertising, creative development, graphic design, digital communications, content production, audiovisual production and integrated campaigns.',
      icon: PenTool,
      featured: false,
    },
    {
      num: '05',
      title: 'Brand Experiences & Activations',
      description:
        'Experiential marketing, promotions, events, product launches, consumer engagement and brand activations.',
      icon: CalendarRange,
      featured: false,
    },
  ];

  const managementIdeas = [
    {
      title: 'Protect brand consistency.',
      detail: 'Prevent fragmented, ad-hoc communication across campaigns, channels and teams.',
      icon: Eye,
    },
    {
      title: 'Connect what matters.',
      detail: 'Link brand strategy, market insight and everyday commercial execution.',
      icon: GitMerge,
    },
    {
      title: 'Strengthen decisions.',
      detail: 'Equip leadership and marketing teams with clear governance for launches and growth.',
      icon: ShieldCheck,
    },
    {
      title: 'Build lasting capability.',
      detail: 'Establish continuous brand-management routines that sustain value beyond one campaign.',
      icon: RefreshCw,
    },
  ];

  const supportingProjects = [
    {
      client: 'BGF Bank',
      category: 'Campaigns & Communications',
      summary:
        'Social and digital communication graphics highlighting branch access, Horizon cards, mobile banking and MoneyGram services.',
      image: '/assets/recovery/campaigns/campaign_bgf_bank_montage.png',
    },
    {
      client: "Vital'o",
      category: 'Experiences & Activations',
      summary:
        'Tournament sponsorship visuals for basketball and beach volleyball alongside still and sparkling water social graphics.',
      image: '/assets/recovery/campaigns/campaign_vitalo_montage.png',
    },
  ];

  const strengths = [
    {
      title: 'Market understanding',
      description:
        'Grounded research and customer insight before recommending creative or commercial direction.',
    },
    {
      title: 'Strategic judgement',
      description:
        'Focused decisions on positioning, brand architecture and priorities rather than reactive tactics.',
    },
    {
      title: 'Creative capabilities',
      description:
        'Brand identity, integrated campaigns, content production and live activations delivered coherently.',
    },
    {
      title: 'Ongoing partnership',
      description:
        'Practical brand-management support that stays engaged with your team beyond launch day.',
    },
  ];

  return (
    <div className="pt-[72px]">
      {/* Section 01 — Hero */}
      <section data-surface="dark" className="bg-[#102D38] text-white py-14 md:py-20 lg:py-22">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Copy Column — prioritized first on mobile */}
            <header className="lg:col-span-6 order-1">
              <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-4">
                BRANDING &amp; BRAND MANAGEMENT. REIMAGINED.
              </p>

              <h1 className="font-heading text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance mb-5">
                Building stronger brands.{' '}
                <span className="text-[#15B8A6]">Managing them better.</span>
              </h1>

              <p className="text-[#DCE5E8] text-base md:text-[18px] leading-[1.65] max-w-[54ch] mb-8">
                We help organisations understand their markets, build compelling brands and manage
                them effectively through research, strategy, creativity and innovative approaches to
                brand management.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('expertise')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#15B8A6] text-[#102D38] hover:bg-[#1FD0BC] font-semibold text-sm md:text-[15px] px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150"
                >
                  <span>Explore Our Expertise</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('selected-work')}
                  className="inline-flex items-center justify-center bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 font-semibold text-sm md:text-[15px] px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150"
                >
                  View Our Work
                </button>
              </div>
            </header>

            {/* Visual Column — placed below copy on mobile */}
            <div className="lg:col-span-6 order-2">
              <WorkplaceImage
                src="/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_58_PM-4_ac2ade97.png"
                alt="Team collaborating around a wooden table reviewing printed brand layouts and visual concepts"
                className="rounded-2xl aspect-[4/3] lg:aspect-[5/4] shadow-xl ring-1 ring-white/10"
                imgClassName="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 — The Aktivate Approach */}
      <section className="bg-[#F4F3EE] py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <header>
                <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                  The Aktivate Approach
                </p>
                <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-[#1B252B] leading-[1.12] tracking-[-0.02em] text-balance">
                  Great brands need more than great ideas.
                </h2>
              </header>
              <div className="w-12 h-[2px] bg-[#15B8A6] my-5" aria-hidden="true" />
              <div className="space-y-4 text-[#344249] text-base md:text-[17px] leading-[1.68] max-w-[54ch]">
                <p>
                  They need insight, clear direction, thoughtful management and creative experiences
                  that connect with people.
                </p>
                <p>
                  Aktivate brings these disciplines together to help organisations make better
                  decisions and build brands that remain relevant.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <WorkplaceImage
                src="/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_56_PM-3_473972e3.png"
                alt="Two colleagues discussing brand strategy together at a laptop in a quiet workspace"
                className="rounded-2xl aspect-[4/3] bg-[#E3E0D7]"
                imgClassName="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — Our Expertise */}
      <section id="expertise" className="bg-white py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
            <div className="lg:col-span-8">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Our Expertise
              </p>
              <h2 className="font-heading text-[30px] md:text-[42px] font-bold text-[#1B252B] leading-[1.12] tracking-[-0.02em] text-balance max-w-[22ch]">
                The expertise to build, manage and activate brands.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <TransitionLink
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D38] hover:text-[#0D7A6E] border-b border-[#102D38]/25 hover:border-[#0D7A6E] pb-1 transition-colors whitespace-nowrap shrink-0 rounded-sm"
              >
                <span>Explore all five services</span>
                <ArrowRight size={15} aria-hidden="true" />
              </TransitionLink>
            </div>
          </header>

          {/* Asymmetric 6-column Editorial Composition */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {expertiseLead.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.num} className="md:col-span-3">
                  <TransitionLink
                    to="/services"
                    className="group h-full bg-[#F4F3EE] border border-[#1B252B]/10 rounded-2xl p-7 lg:p-9 flex flex-col justify-between transition-all duration-200 hover:border-[#15B8A6]/60 hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-heading text-sm font-bold text-[#0D7A6E] tabular-nums">
                          {service.num}
                        </span>
                        <Icon
                          size={20}
                          strokeWidth={1.75}
                          className="text-[#102D38]/75 group-hover:text-[#0D7A6E] transition-colors"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1B252B] tracking-tight mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#344249] text-[15px] md:text-base leading-[1.65] max-w-[48ch]">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-7 pt-4 border-t border-[#1B252B]/10 flex items-center justify-between text-sm font-semibold text-[#102D38] group-hover:text-[#0D7A6E] transition-colors">
                      <span>Explore discipline</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </TransitionLink>
                </article>
              );
            })}

            {expertiseCore.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.num} className="md:col-span-2">
                  <TransitionLink
                    to="/services"
                    className={`group h-full rounded-2xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
                      service.featured
                        ? 'bg-[#102D38] text-white border border-[#102D38]'
                        : 'bg-white text-[#1B252B] border border-[#1B252B]/12 hover:border-[#15B8A6]/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className={`font-heading text-sm font-bold tabular-nums ${
                            service.featured ? 'text-[#15B8A6]' : 'text-[#0D7A6E]'
                          }`}
                        >
                          {service.num}
                        </span>
                        <Icon
                          size={19}
                          strokeWidth={1.75}
                          className={
                            service.featured
                              ? 'text-[#15B8A6]'
                              : 'text-[#102D38]/75 group-hover:text-[#0D7A6E] transition-colors'
                          }
                          aria-hidden="true"
                        />
                      </div>
                      <h3
                        className={`font-heading text-xl font-bold tracking-tight mb-3 ${
                          service.featured ? 'text-white' : 'text-[#1B252B]'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-[15px] leading-[1.6] ${
                          service.featured ? 'text-[#DCE5E8]' : 'text-[#344249]'
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div
                      className={`mt-7 pt-4 border-t flex items-center justify-between text-sm font-semibold transition-colors ${
                        service.featured
                          ? 'border-white/15 text-[#15B8A6]'
                          : 'border-[#1B252B]/10 text-[#102D38] group-hover:text-[#0D7A6E]'
                      }`}
                    >
                      <span>Learn more</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </TransitionLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 04 — Brand Management & Advisory */}
      <section id="brand-management" className="bg-[#EAF5F3] py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <WorkplaceImage
                src="/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_55_PM-2_cd046b1b.png"
                alt="Strategy workshop session around a table with a presenter guiding a discussion at a whiteboard"
                className="rounded-2xl aspect-[4/3] bg-[#D6E9E5] shadow-sm"
                imgClassName="object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6">
              <header>
                <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                  Brand Management &amp; Advisory
                </p>
                <h2 className="font-heading text-[28px] md:text-[38px] font-bold text-[#102D38] leading-[1.15] tracking-[-0.02em] text-balance mb-4">
                  Your brand is always evolving. The way you manage it should too.
                </h2>
                <p className="text-[#273840] text-base md:text-[17px] leading-[1.65] mb-8 max-w-[56ch]">
                  Strong brands lose ground when strategy, day-to-day execution and market insight
                  drift apart. We partner with leadership teams to build continuous brand management,
                  connected decision-making and stronger organisational practices that protect brand
                  value over time.
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-8">
                {managementIdeas.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="border-t border-[#102D38]/15 pt-4">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon
                          size={17}
                          strokeWidth={1.85}
                          className="text-[#0D7A6E] shrink-0"
                          aria-hidden="true"
                        />
                        <h3 className="font-heading text-[15px] font-bold text-[#102D38]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#344249] leading-[1.55]">{item.detail}</p>
                    </article>
                  );
                })}
              </div>

              <TransitionLink
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 bg-[#102D38] text-white hover:bg-[#1B252B] font-semibold text-sm md:text-[15px] px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150"
              >
                <span>Explore Brand Management</span>
                <ArrowRight size={17} aria-hidden="true" />
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 — Selected Work (Authentic Client Campaign Artwork) */}
      <section id="selected-work" className="bg-white py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-6">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Selected Work
              </p>
              <h2 className="font-heading text-[30px] md:text-[42px] font-bold text-[#1B252B] leading-[1.12] tracking-[-0.02em] text-balance">
                Ideas, insights and creativity in action.
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col lg:items-end justify-between gap-4">
              <p className="text-[#344249] text-base md:text-[17px] leading-[1.65] max-w-[52ch] lg:text-right">
                From brand development to campaigns and customer experiences, our work reflects the
                different challenges we help organisations address.
              </p>
              <TransitionLink
                to="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D38] hover:text-[#0D7A6E] border-b border-[#102D38]/25 hover:border-[#0D7A6E] pb-1 transition-colors self-start lg:self-end whitespace-nowrap shrink-0 rounded-sm"
              >
                <span>View all selected work</span>
                <ArrowRight size={15} aria-hidden="true" />
              </TransitionLink>
            </div>
          </header>

          {/* Featured Client Campaign (Primus) + Two Supporting Projects (BGF Bank, Vital'o) */}
          <div className="space-y-6">
            <article>
              <TransitionLink
                to="/work"
                className="group grid grid-cols-1 lg:grid-cols-12 bg-[#F4F3EE] border border-[#1B252B]/12 rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#15B8A6]/70"
              >
                <figure className="lg:col-span-7 bg-[#E5E3DB] aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/recovery/campaigns/campaign_primus_montage.png"
                    alt="Primus social and activation campaign visual montage preserving original brand execution"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </figure>
                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                      Campaigns &amp; Communications
                    </p>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1B252B] tracking-tight mb-4 group-hover:text-[#0D7A6E] transition-colors">
                      Primus
                    </h3>
                    <p className="text-[#344249] text-base leading-[1.65] max-w-[40ch]">
                      Integrated social campaign visuals and regional live-music activation creatives
                      preserving Primus and Primus Black visual identities.
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-[#1B252B]/10 flex items-center justify-between text-sm font-semibold text-[#102D38] group-hover:text-[#0D7A6E] transition-colors">
                    <span>Explore project showcase</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </TransitionLink>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportingProjects.map((project) => (
                <article key={project.client}>
                  <TransitionLink
                    to="/work"
                    className="group h-full bg-[#F4F3EE] border border-[#1B252B]/12 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[#15B8A6]/70"
                  >
                    <figure className="aspect-[16/10] bg-[#E5E3DB] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.client} campaign montage`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </figure>
                    <div className="p-7 flex flex-col justify-between flex-grow">
                      <div>
                        <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.16em] mb-2">
                          {project.category}
                        </p>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1B252B] tracking-tight mb-2 group-hover:text-[#0D7A6E] transition-colors">
                          {project.client}
                        </h3>
                        <p className="text-sm md:text-[15px] text-[#344249] leading-[1.6]">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </TransitionLink>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 — Why Aktivate */}
      <section className="bg-[#F4F3EE] py-16 lg:py-22">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <header>
                <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                  Why Aktivate
                </p>
                <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-[#1B252B] leading-[1.12] tracking-[-0.02em] text-balance mb-4">
                  Big-picture thinking. Hands-on partnership.
                </h2>
                <p className="text-[#344249] text-base md:text-[17px] leading-[1.65] max-w-[56ch] mb-9">
                  Clients work with Aktivate because we connect practical market knowledge with
                  disciplined strategy, creative execution and continuous support.
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                {strengths.map((item) => (
                  <article key={item.title} className="border-t border-[#1B252B]/15 pt-4">
                    <h3 className="font-heading text-lg font-bold text-[#1B252B] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-[#344249] leading-[1.6]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <WorkplaceImage
                src="/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_53_PM-1_2348b281.png"
                alt="Team members in natural conversation around a conference table during a planning session"
                className="rounded-2xl aspect-[4/3] lg:aspect-[4/4.3] bg-[#E3E0D7]"
                imgClassName="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 07 — Contact */}
      <section data-surface="dark" className="bg-[#102D38] text-white py-18 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <header className="lg:col-span-8">
              <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-4">
                Let&apos;s build something stronger.
              </p>
              <h2 className="font-heading text-[34px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.025em] text-white text-balance mb-5">
                Where could your brand go next?
              </h2>
              <p className="text-[#DCE5E8] text-base md:text-[18px] leading-[1.65] max-w-[54ch] mb-8">
                Whether you&apos;re developing a brand, improving how it is managed or planning your
                next campaign, we&apos;d welcome the conversation.
              </p>
              <TransitionLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#15B8A6] text-[#102D38] hover:bg-[#1FD0BC] font-semibold text-sm md:text-[15px] px-7 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={17} aria-hidden="true" />
              </TransitionLink>
            </header>

            <aside
              aria-label="Brand philosophy"
              className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-10 pt-4 lg:pt-0"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white">
                Imagine.
                <br />
                Dare.
                <br />
                <span className="text-[#15B8A6]">Create.</span>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;