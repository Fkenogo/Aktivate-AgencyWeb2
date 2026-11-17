import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className={`relative overflow-hidden bg-[#173B48] ${className}`}>
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
    </div>
  );
};

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const expertiseLead = [
    {
      num: '01',
      title: 'Brand Intelligence & Research',
      description:
        'Market research, audience insight and competitive intelligence that clarify where opportunities lie and ground every brand decision in reality.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Brand Strategy & Development',
      description:
        'Brand positioning, architecture, verbal direction and visual identity systems built to give organisations clear differentiation and lasting relevance.',
      icon: Compass,
    },
  ];

  const expertiseCore = [
    {
      num: '03',
      title: 'Brand Management & Advisory',
      description:
        'Ongoing brand governance, portfolio alignment and practical advisory that help leadership teams keep their brand coherent as the business grows.',
      icon: Layers,
      featured: true,
    },
    {
      num: '04',
      title: 'Creative & Communications',
      description:
        'Integrated campaign concepts, copywriting, graphic design and content production crafted to connect meaningfully across channels.',
      icon: PenTool,
      featured: false,
    },
    {
      num: '05',
      title: 'Brand Experiences & Activations',
      description:
        'Product launches, live activations and customer touchpoints designed to turn brand promises into memorable real-world engagement.',
      icon: CalendarRange,
      featured: false,
    },
  ];

  const managementIdeas = [
    {
      title: 'Understand what exists.',
      detail: 'Bring clarity to current brand assets, market perception and internal alignment.',
      icon: Eye,
    },
    {
      title: 'Connect what matters.',
      detail: 'Link strategic intent, creative expression and everyday brand decisions.',
      icon: GitMerge,
    },
    {
      title: 'Strengthen decisions.',
      detail: 'Equip teams with clearer judgement for launches, communications and growth.',
      icon: ShieldCheck,
    },
    {
      title: 'Support ongoing management.',
      detail: 'Build continuity so your brand stays consistent well beyond a single campaign.',
      icon: RefreshCw,
    },
  ];

  const reservedPortfolioContainers = [
    {
      index: '01',
      domain: 'Brand Development',
      note: 'Reserved container for verified identity, positioning and brand system work.',
      spanClass: 'lg:col-span-6',
      aspectClass: 'aspect-[16/10]',
    },
    {
      index: '02',
      domain: 'Campaigns & Creative',
      note: 'Reserved container for verified advertising and integrated communications artwork.',
      spanClass: 'lg:col-span-3',
      aspectClass: 'aspect-[4/3] lg:aspect-[4/4.15]',
    },
    {
      index: '03',
      domain: 'Brand Experiences & Activations',
      note: 'Reserved container for verified launch and experiential activation photography.',
      spanClass: 'lg:col-span-3',
      aspectClass: 'aspect-[4/3] lg:aspect-[4/4.15]',
    },
  ];

  const strengths = [
    {
      title: 'Market understanding',
      description:
        'Rooted in real context across Burundi and East Africa, combining local cultural nuance with disciplined research.',
    },
    {
      title: 'Strategic perspective',
      description:
        'Focused on the commercial and brand priorities that shape long-term preference rather than short-lived noise.',
    },
    {
      title: 'Creative strength',
      description:
        'Crafted ideas, visual systems and communications designed to earn attention and hold meaning over time.',
    },
    {
      title: 'Continuous partnership',
      description:
        'Working alongside client teams as an invested partner—from strategic definition through active brand management.',
    },
  ];

  return (
    <div className="pt-[72px]">
      {/* Section 01 — Hero */}
      <section className="bg-[#102D38] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Copy Column — prioritized first on mobile */}
            <div className="lg:col-span-6 order-1">
              <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-5">
                BRANDING &amp; BRAND MANAGEMENT. REIMAGINED.
              </p>

              <h1 className="font-heading text-[36px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance mb-6">
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
                  className="inline-flex items-center justify-center gap-2.5 bg-[#15B8A6] text-[#102D38] hover:bg-[#1FD0BC] font-semibold text-sm md:text-[15px] px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B8A6]"
                >
                  <span>Explore Our Expertise</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('selected-work')}
                  className="inline-flex items-center justify-center bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 font-semibold text-sm md:text-[15px] px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B8A6]"
                >
                  View Our Work
                </button>
              </div>
            </div>

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
      <section className="bg-[#F4F3EE] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                The Aktivate Approach
              </p>
              <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-[#1B252B] leading-[1.12] tracking-[-0.02em] text-balance">
                Great brands need more than great ideas.
              </h2>
              <div className="w-12 h-[2px] bg-[#15B8A6] my-6" aria-hidden="true" />
              <div className="space-y-4 text-[#344249] text-base md:text-[17px] leading-[1.7] max-w-[54ch]">
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
      <section id="expertise" className="bg-white py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-8">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                Our Expertise
              </p>
              <h2 className="font-heading text-[30px] md:text-[42px] font-bold text-[#1B252B] leading-[1.12] tracking-[-0.02em] text-balance max-w-[22ch]">
                The expertise to build, manage and activate brands.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D38] hover:text-[#0D7A6E] border-b border-[#102D38]/25 hover:border-[#0D7A6E] pb-1 transition-colors whitespace-nowrap shrink-0"
              >
                <span>View full capabilities</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Asymmetric 6-column Editorial Composition */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Upper Row: Two broad strategic disciplines */}
            {expertiseLead.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.num}
                  to="/services"
                  className="md:col-span-3 group bg-[#F4F3EE] border border-[#1B252B]/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between transition-all duration-200 hover:border-[#15B8A6]/60 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
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
                    <p className="text-[#344249] text-[15px] md:text-base leading-[1.65] max-w-[46ch]">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-[#1B252B]/10 flex items-center justify-between text-sm font-semibold text-[#102D38] group-hover:text-[#0D7A6E] transition-colors">
                    <span>Explore discipline</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}

            {/* Lower Row: Featured Dark Brand Management Anchor + Two Execution Pillars */}
            {expertiseCore.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.num}
                  to="/services"
                  className={`md:col-span-2 group rounded-2xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 04 — Brand Management & Advisory */}
      <section id="brand-management" className="bg-[#EAF5F3] py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Workshop Photography */}
            <div className="lg:col-span-6">
              <WorkplaceImage
                src="/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_55_PM-2_cd046b1b.png"
                alt="Strategy workshop session around a table with a presenter guiding a discussion at a whiteboard"
                className="rounded-2xl aspect-[4/3] bg-[#D6E9E5] shadow-sm"
                imgClassName="object-cover object-center"
              />
            </div>

            {/* Advisory Narrative */}
            <div className="lg:col-span-6">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                Brand Management &amp; Advisory
              </p>
              <h2 className="font-heading text-[30px] md:text-[38px] font-bold text-[#102D38] leading-[1.15] tracking-[-0.02em] text-balance mb-5">
                Your brand is always evolving. The way you manage it should too.
              </h2>
              <p className="text-[#273840] text-base md:text-[17px] leading-[1.65] mb-8 max-w-[56ch]">
                We help organisations connect brand strategy, market knowledge, management decisions
                and actions into a more effective and continuous approach to brand management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-9">
                {managementIdeas.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="border-t border-[#102D38]/15 pt-4">
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
                    </div>
                  );
                })}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 bg-[#102D38] text-white hover:bg-[#1B252B] font-semibold text-sm md:text-[15px] px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102D38]"
              >
                <span>Explore Brand Management</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 — Selected Work */}
      <section id="selected-work" className="bg-white py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-6">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
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
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D38] hover:text-[#0D7A6E] border-b border-[#102D38]/25 hover:border-[#0D7A6E] pb-1 transition-colors self-start lg:self-end whitespace-nowrap shrink-0"
              >
                <span>Explore Our Work</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Three Reserved Portfolio Containers (no invented clients or metrics) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {reservedPortfolioContainers.map((slot) => (
              <Link
                key={slot.index}
                to="/work"
                className={`${slot.spanClass} group block rounded-2xl bg-[#F4F3EE] border border-[#1B252B]/12 overflow-hidden transition-all duration-200 hover:border-[#15B8A6]/70`}
              >
                <div
                  className={`${slot.aspectClass} relative p-7 md:p-8 flex flex-col justify-between bg-[linear-gradient(to_right,rgba(16,45,56,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,45,56,0.04)_1px,transparent_1px)] bg-[size:32px_32px]`}
                >
                  <div className="flex items-center justify-between text-xs text-[#344249]">
                    <span className="font-heading font-bold text-[#0D7A6E] tabular-nums">
                      {slot.index} / Portfolio Slot
                    </span>
                    <span className="text-[#344249]/80">Reserved</span>
                  </div>

                  <div className="mt-auto pt-8">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1B252B] tracking-tight mb-2 group-hover:text-[#0D7A6E] transition-colors">
                      {slot.domain}
                    </h3>
                    <p className="text-sm text-[#344249] leading-[1.55] max-w-[38ch] mb-4">
                      {slot.note}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102D38] group-hover:text-[#0D7A6E] transition-colors">
                      <span>View category</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 06 — Why Aktivate */}
      <section className="bg-[#F4F3EE] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                Why Aktivate
              </p>
              <h2 className="font-heading text-[30px] md:text-[42px] font-bold text-[#1B252B] leading-[1.12] tracking-[-0.02em] text-balance mb-5">
                Big-picture thinking. Hands-on partnership.
              </h2>
              <div className="space-y-3 text-[#344249] text-base md:text-[17px] leading-[1.65] max-w-[58ch] mb-10">
                <p>
                  We bring together market understanding, strategic judgement, creative expertise
                  and a collaborative way of working.
                </p>
                <p>We work closely with our clients to turn priorities into meaningful action.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                {strengths.map((item) => (
                  <div key={item.title} className="border-t border-[#1B252B]/15 pt-4">
                    <h3 className="font-heading text-lg font-bold text-[#1B252B] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-[#344249] leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <WorkplaceImage
                src="/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_53_PM-1_2348b281.png"
                alt="Team members in natural conversation around a conference table during a planning session"
                className="rounded-2xl aspect-[4/3] lg:aspect-[4/4.5] bg-[#E3E0D7]"
                imgClassName="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 07 — Contact */}
      <section className="bg-[#102D38] text-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-4">
                Let&apos;s build something stronger.
              </p>
              <h2 className="font-heading text-[34px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-white text-balance mb-5">
                Where could your brand go next?
              </h2>
              <p className="text-[#DCE5E8] text-base md:text-[18px] leading-[1.65] max-w-[54ch] mb-8">
                Whether you&apos;re developing a brand, improving how it is managed or planning your
                next campaign, we&apos;d welcome the conversation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#15B8A6] text-[#102D38] hover:bg-[#1FD0BC] font-semibold text-sm md:text-[15px] px-7 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B8A6]"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-10 pt-4 lg:pt-0">
              <p className="font-heading text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white">
                Imagine.
                <br />
                Dare.
                <br />
                <span className="text-[#15B8A6]">Create.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;