import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'How we approach client challenges',
      body: 'Every brief begins with honest listening and clear commercial context. Before proposing creative work, we look closely at the market, the customer and what the brand actually needs to solve.',
    },
    {
      num: '02',
      title: 'Our collaborative working culture',
      body: 'We do our best work around a shared table—sketching, debating ideas openly and working directly with client teams in a relaxed, straightforward way without unnecessary agency theatre.',
    },
    {
      num: '03',
      title: 'Strategic and creative expertise together',
      body: 'Research, brand positioning, brand management, creative craft and activations sit under one roof so strategic clarity informs the creative work from day one.',
    },
    {
      num: '04',
      title: 'Commitment to ongoing partnerships',
      body: 'A brand is shaped long after launch day. We stay invested alongside the teams we serve—supporting everyday brand decisions, consistency and growth across changing market conditions.',
    },
  ];

  return (
    <div className="pt-[72px]">
      {/* Opening Header */}
      <section className="bg-[#102D38] text-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-[74ch]">
            <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-4">
              About Aktivate
            </p>
            <h1 className="font-heading text-[34px] sm:text-[42px] lg:text-[50px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance mb-5">
              Creative in our thinking. Strategic in our approach.
            </h1>
            <p className="text-[#DCE5E8] text-lg md:text-[20px] font-medium leading-[1.5]">
              Invested in the brands we build and manage.
            </p>
          </div>
        </div>
      </section>

      {/* Core Story & Who We Are */}
      <section className="bg-[#F4F3EE] py-16 lg:py-22">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Who We Are
              </p>
              <h2 className="font-heading text-[28px] md:text-[38px] font-bold text-[#1B252B] leading-[1.15] tracking-[-0.02em] text-balance mb-5">
                An established branding and brand-management agency rooted in Burundi.
              </h2>
              <div className="w-12 h-[2px] bg-[#15B8A6] mb-6" aria-hidden="true" />
              <div className="space-y-4 text-[#344249] text-base md:text-[17px] leading-[1.7] max-w-[56ch]">
                <p>
                  Aktivate brings together expertise in research, brand strategy, brand management,
                  communications and creative execution.
                </p>
                <p>
                  We work closely with organisations to understand their challenges, develop
                  practical solutions and support their brands beyond individual assignments.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden bg-[#E3E0D7] aspect-[4/3]">
                <img
                  src="/assets/recovery/workplace/workplace_aktivate_1.jpg"
                  alt="Aktivate team gathered around a studio table reviewing creative work together"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Working Culture */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                  How We Work
                </p>
                <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-[#1B252B] leading-[1.15] tracking-[-0.02em] text-balance">
                  Approachable people. Disciplined brand thinking.
                </h2>
                <p className="text-[#344249] text-base leading-[1.68] mt-4">
                  We care deeply about the craft behind every identity, campaign and brand system—and
                  we keep the working relationship practical, human and collaborative.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-[#F4F3EE] aspect-[4/3]">
                <img
                  src="/assets/recovery/workplace/workplace_studio_3.jpg"
                  alt="Two colleagues discussing work at a shared desk in natural light"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-2">
              {principles.map((item) => (
                <div
                  key={item.num}
                  className="bg-[#F4F3EE] border border-[#1B252B]/10 rounded-2xl p-7"
                >
                  <span className="block font-heading text-xs font-bold text-[#0D7A6E] tabular-nums mb-2">
                    {item.num}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#1B252B] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[#344249] text-[15px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Personality Band: We Are Aktivators */}
      <section className="bg-[#EAF5F3] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Our Spirit
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-[#102D38] leading-[1.15] tracking-[-0.02em] mb-4">
                We Are Aktivators.
              </h2>
              <p className="text-[#273840] text-base md:text-[17px] leading-[1.68] max-w-[56ch]">
                It captures the curiosity, energy and care our team brings to every brand—asking
                sharper questions, exploring ideas with imagination and staying hands-on until the
                work makes a real difference for the people it serves.
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#102D38]/15 lg:pl-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D7A6E] mb-3">
                Brand Philosophy
              </p>
              <p className="font-heading text-3xl md:text-4xl font-bold text-[#102D38] leading-[1.15] tracking-tight">
                Imagine. Dare.{' '}
                <span className="text-[#0D7A6E]">Create.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#102D38] text-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-[56ch]">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-3 text-balance">
              Let&apos;s explore how we can support your brand.
            </h2>
            <p className="text-[#DCE5E8] text-base leading-[1.65]">
              Whether you need market clarity, strategic direction or ongoing brand management, we
              would welcome a conversation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap transition-colors"
            >
              Explore Our Expertise
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#15B8A6] text-[#102D38] hover:bg-[#1FD0BC] font-semibold text-sm px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;