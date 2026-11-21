import React from 'react';
import {
  ArrowRight,
  Search,
  Compass,
  Layers,
  PenTool,
  CalendarRange,
} from 'lucide-react';
import TransitionLink from '../components/TransitionLink';
import { prefersReducedMotion } from '../utils/viewTransitions';

const Services: React.FC = () => {
  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  };

  const quickNav = [
    { id: 'service-01', num: '01', label: 'Brand Intelligence & Research' },
    { id: 'service-02', num: '02', label: 'Brand Strategy & Development' },
    { id: 'service-03', num: '03', label: 'Brand Management & Advisory' },
    { id: 'service-04', num: '04', label: 'Creative & Communications' },
    { id: 'service-05', num: '05', label: 'Brand Experiences & Activations' },
  ];

  return (
    <div className="pt-[72px]">
      {/* Opening Header */}
      <section data-surface="dark" className="bg-[#102D38] text-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <header className="max-w-[78ch]">
            <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-4">
              Our Expertise
            </p>
            <h1 className="font-heading text-[34px] sm:text-[42px] lg:text-[50px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance mb-6">
              The thinking, expertise and execution behind stronger brands.
            </h1>
            <p className="text-[#DCE5E8] text-base md:text-[18px] leading-[1.65] max-w-[60ch]">
              From understanding markets and shaping brand strategy to managing brands and bringing
              ideas to life, we support organisations across the full brand journey.
            </p>
          </header>

          {/* Clean Index Jump Strip */}
          <nav
            aria-label="Jump to service area"
            className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {quickNav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToService(item.id)}
                className="text-left group py-2 pr-3 transition-colors rounded-sm"
              >
                <span className="block font-heading text-xs font-bold text-[#15B8A6] tabular-nums mb-1">
                  {item.num}
                </span>
                <span className="block text-sm font-medium text-white/90 group-hover:text-[#15B8A6] transition-colors leading-snug">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* 01 — Brand Intelligence & Research */}
      <section id="service-01" className="bg-[#F4F3EE] py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <header className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-sm font-bold text-[#0D7A6E] tabular-nums">
                  01
                </span>
                <Search size={18} className="text-[#102D38]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D7A6E]">
                  Intelligence
                </span>
              </div>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-[#1B252B] leading-[1.15] tracking-[-0.02em] text-balance mb-4">
                Brand Intelligence &amp; Research
              </h2>
              <p className="text-[#344249] text-base md:text-[17px] leading-[1.68]">
                Clear brand decisions start with reliable market understanding. We gather and
                interpret evidence on customers, competitors and brand performance so leadership
                teams act on fact rather than assumption.
              </p>
            </header>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Market research',
                  desc: 'Structured primary and secondary studies examining demand, category dynamics and growth opportunities.',
                },
                {
                  title: 'Customer insights',
                  desc: 'Qualitative and quantitative understanding of buyer motivations, perceptions and decision drivers.',
                },
                {
                  title: 'Brand health studies',
                  desc: 'Baseline and recurring measurement of awareness, consideration, brand equity and loyalty.',
                },
                {
                  title: 'Customer experience',
                  desc: 'Mapping real customer interactions across physical and digital touchpoints to pinpoint friction.',
                },
                {
                  title: 'Competitive intelligence',
                  desc: 'Objective assessment of category positioning, messaging patterns and competitor activity.',
                },
                {
                  title: 'Performance research',
                  desc: 'Post-campaign and commercial diagnostics evaluating communication clarity and market response.',
                },
              ].map((cap) => (
                <article
                  key={cap.title}
                  className="bg-white border border-[#1B252B]/10 rounded-xl p-6"
                >
                  <h3 className="font-heading text-base font-bold text-[#1B252B] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#344249] leading-[1.6]">{cap.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Brand Strategy & Development */}
      <section id="service-02" className="bg-white py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <figure className="rounded-2xl overflow-hidden bg-[#F4F3EE] aspect-[4/3]">
                <img
                  src="/assets/recovery/workplace/workplace_studio_3.jpg"
                  alt="Colleagues reviewing brand positioning and strategy material together at a desk"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </figure>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <header>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-heading text-sm font-bold text-[#0D7A6E] tabular-nums">
                    02
                  </span>
                  <Compass size={18} className="text-[#102D38]" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D7A6E]">
                    Strategy &amp; Identity
                  </span>
                </div>
                <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-[#1B252B] leading-[1.15] tracking-[-0.02em] text-balance mb-4">
                  Brand Strategy &amp; Development
                </h2>
                <p className="text-[#344249] text-base md:text-[17px] leading-[1.68] mb-8">
                  We translate insight into coherent strategic direction and distinctive identity
                  systems that define what a brand stands for and how it competes.
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  {
                    title: 'Brand positioning',
                    desc: 'Defining a clear, credible space in the market that differentiates your organisation.',
                  },
                  {
                    title: 'Identity development',
                    desc: 'Visual systems, logotypes, colour, typography and practical brand guidelines.',
                  },
                  {
                    title: 'Brand strategy',
                    desc: 'Long-term strategic direction connecting purpose, audience priorities and value proposition.',
                  },
                  {
                    title: 'Marketing strategy',
                    desc: 'Actionable commercial roadmaps aligning product, channel and audience objectives.',
                  },
                  {
                    title: 'Communications strategy',
                    desc: 'Clear messaging frameworks guiding how your brand speaks across audiences.',
                  },
                  {
                    title: 'Brand architecture',
                    desc: 'Structuring parent brands, sub-brands and product lines for clarity and scale.',
                  },
                ].map((cap) => (
                  <article key={cap.title} className="border-t border-[#1B252B]/12 pt-3.5">
                    <h3 className="font-heading text-[15px] font-bold text-[#1B252B] mb-1">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[#344249] leading-[1.55]">{cap.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Brand Management & Advisory (Flagship Deep-Dive Section) */}
      <section id="service-03" className="bg-[#EAF5F3] py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
            <header className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-sm font-bold text-[#0D7A6E] tabular-nums">
                  03
                </span>
                <Layers size={18} className="text-[#102D38]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D7A6E]">
                  Core Established Practice
                </span>
              </div>
              <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-[#102D38] leading-[1.12] tracking-[-0.02em] text-balance mb-5">
                Brand Management &amp; Advisory
              </h2>
              <p className="text-[#273840] text-base md:text-[17px] leading-[1.68] mb-4">
                A strong brand loses value when strategy, day-to-day execution and market feedback
                drift apart. Aktivate works directly with leadership and marketing teams to turn
                brand management into a continuous, connected discipline—protecting brand equity
                and preventing fragmented, ad-hoc communication.
              </p>
              <p className="text-[#344249] text-base leading-[1.68]">
                From diagnosing current brand practices to establishing clear governance and
                practical internal routines, this established service helps organisations make
                sharper brand decisions and build stronger capability over time.
              </p>
            </header>

            <div className="lg:col-span-6">
              <figure className="rounded-2xl overflow-hidden bg-[#D6E9E5] aspect-[4/3] shadow-sm">
                <img
                  src="/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_55_PM-2_cd046b1b.png"
                  alt="Workshop discussion on brand management governance and strategic alignment"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </figure>
            </div>
          </div>

          {/* Three Structured Dimensions of Brand Management & Advisory */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article data-surface="dark" className="bg-[#102D38] text-white rounded-2xl p-8">
              <p className="text-[#15B8A6] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                03.1 · Diagnosis &amp; Structure
              </p>
              <h3 className="font-heading text-xl font-bold mb-4">
                Assessments &amp; Brand Management Systems
              </h3>
              <ul className="space-y-3 text-sm text-[#DCE5E8] leading-[1.6]">
                <li>
                  <strong className="text-white font-semibold">Brand-management assessments:</strong>{' '}
                  Reviewing current processes, asset consistency, internal capability and governance gaps.
                </li>
                <li>
                  <strong className="text-white font-semibold">Brand Management System design and implementation:</strong>{' '}
                  Structuring practical operating workflows, roles and standards tailored to your team.
                </li>
              </ul>
            </article>

            <article className="bg-white border border-[#102D38]/10 rounded-2xl p-8">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                03.2 · Stewardship
              </p>
              <h3 className="font-heading text-xl font-bold text-[#102D38] mb-4">
                Brand Governance &amp; Ongoing Advisory
              </h3>
              <ul className="space-y-3 text-sm text-[#344249] leading-[1.6]">
                <li>
                  <strong className="text-[#1B252B] font-semibold">Brand governance:</strong> Clear
                  decision criteria, approval guardrails and standards across markets and partners.
                </li>
                <li>
                  <strong className="text-[#1B252B] font-semibold">Ongoing advisory:</strong>{' '}
                  Senior strategic counsel supporting new initiatives, partnerships and brand extensions.
                </li>
              </ul>
            </article>

            <article className="bg-white border border-[#102D38]/10 rounded-2xl p-8">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                03.3 · Continuity
              </p>
              <h3 className="font-heading text-xl font-bold text-[#102D38] mb-4">
                Performance &amp; Organisational Learning
              </h3>
              <ul className="space-y-3 text-sm text-[#344249] leading-[1.6]">
                <li>
                  <strong className="text-[#1B252B] font-semibold">Performance reviews:</strong>{' '}
                  Periodic evaluation of brand execution, market feedback and strategic priorities.
                </li>
                <li>
                  <strong className="text-[#1B252B] font-semibold">Knowledge management &amp; organisational learning:</strong>{' '}
                  Retaining institutional brand knowledge so teams build on what works.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 04 — Creative & Communications */}
      <section id="service-04" className="bg-white py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <header>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-heading text-sm font-bold text-[#0D7A6E] tabular-nums">
                    04
                  </span>
                  <PenTool size={18} className="text-[#102D38]" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D7A6E]">
                    Creative Execution
                  </span>
                </div>
                <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-[#1B252B] leading-[1.15] tracking-[-0.02em] text-balance mb-4">
                  Creative &amp; Communications
                </h2>
                <p className="text-[#344249] text-base md:text-[17px] leading-[1.68] mb-8">
                  Ideas only create value when they connect with people clearly and memorably. We
                  craft visual, written and audiovisual communications tailored to the channels your
                  audiences use every day.
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  {
                    title: 'Advertising & integrated campaigns',
                    desc: 'Campaign concepts and multi-channel rollouts built around clear commercial goals.',
                  },
                  {
                    title: 'Creative development & graphic design',
                    desc: 'Print, outdoor, packaging, corporate collateral and visual campaign craft.',
                  },
                  {
                    title: 'Digital communications',
                    desc: 'Social media creative systems, digital campaigns and platform-native storytelling.',
                  },
                  {
                    title: 'Content & audiovisual production',
                    desc: 'Photography, video, motion graphics and radio/audio production built for impact.',
                  },
                ].map((cap) => (
                  <article key={cap.title} className="border-t border-[#1B252B]/12 pt-3.5">
                    <h3 className="font-heading text-[15px] font-bold text-[#1B252B] mb-1">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[#344249] leading-[1.55]">{cap.desc}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="rounded-2xl overflow-hidden bg-[#F4F3EE] aspect-[4/3]">
                <img
                  src="/assets/recovery/workplace/workplace_aktivate_1.jpg"
                  alt="Creative team reviewing visual campaign proofs around a studio table"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Brand Experiences & Activations */}
      <section id="service-05" className="bg-[#F4F3EE] py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <header className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-sm font-bold text-[#0D7A6E] tabular-nums">
                  05
                </span>
                <CalendarRange size={18} className="text-[#102D38]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D7A6E]">
                  Live Engagement
                </span>
              </div>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-[#1B252B] leading-[1.15] tracking-[-0.02em] text-balance mb-4">
                Brand Experiences &amp; Activations
              </h2>
              <p className="text-[#344249] text-base md:text-[17px] leading-[1.68]">
                We bring brands out into the real world through well-executed events, launches and
                promotions that invite direct participation and create lasting goodwill.
              </p>
            </header>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Experiential marketing',
                  desc: 'Designing interactive brand environments where customers experience what a brand stands for firsthand.',
                },
                {
                  title: 'Promotions & consumer engagement',
                  desc: 'On-ground promotional mechanics, sampling and community engagement programmes.',
                },
                {
                  title: 'Events & product launches',
                  desc: 'End-to-end creative direction and production for launches, corporate milestones and public events.',
                },
                {
                  title: 'Brand activations',
                  desc: 'Field activations, sponsorships and cultural touchpoints tailored to local audiences.',
                },
              ].map((cap) => (
                <article
                  key={cap.title}
                  className="bg-white border border-[#1B252B]/10 rounded-xl p-6"
                >
                  <h3 className="font-heading text-base font-bold text-[#1B252B] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#344249] leading-[1.6]">{cap.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section data-surface="dark" className="bg-[#102D38] text-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <header className="max-w-[58ch]">
            <p className="text-[#15B8A6] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              Work With Aktivate
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight text-balance">
              Looking for support across strategy, brand management or your next campaign?
            </h2>
          </header>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <TransitionLink
              to="/work"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap transition-colors"
            >
              View Our Work
            </TransitionLink>
            <TransitionLink
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#15B8A6] text-[#102D38] hover:bg-[#1FD0BC] font-semibold text-sm px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={16} aria-hidden="true" />
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;