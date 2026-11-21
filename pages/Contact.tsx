import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const serviceAreas = [
    'Brand Intelligence & Research',
    'Brand Strategy & Development',
    'Brand Management & Advisory',
    'Creative & Communications',
    'Brand Experiences & Activations',
    'General Enquiry',
  ];

  return (
    <div className="pt-[72px]">
      {/* Opening Header */}
      <section data-surface="dark" className="bg-[#102D38] text-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <header className="max-w-[72ch]">
            <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-4">
              Contact
            </p>
            <h1 className="font-heading text-[34px] sm:text-[42px] lg:text-[50px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance mb-5">
              Let&apos;s talk about your brand.
            </h1>
            <p className="text-[#DCE5E8] text-base md:text-[18px] leading-[1.65] max-w-[58ch]">
              Whether you&apos;re building a new brand, reviewing your strategy, improving how your
              brand is managed or planning your next campaign, we&apos;d welcome the conversation.
            </p>
          </header>
        </div>
      </section>

      {/* Direct Email & Areas of Interest */}
      <section className="bg-[#F4F3EE] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Direct Email CTA */}
            <section
              aria-labelledby="email-enquiry-heading"
              className="lg:col-span-7 bg-white border border-[#1B252B]/10 rounded-2xl p-7 md:p-10"
            >
              <header className="mb-7">
                <h2 id="email-enquiry-heading" className="font-heading text-2xl font-bold text-[#1B252B] mb-2">
                  Send an enquiry
                </h2>
                <p className="text-sm text-[#344249] leading-[1.6]">
                  Email us a brief outline of your brand challenge, timeline or area of
                  interest and our team will get back to you.
                </p>
              </header>

              <div className="rounded-xl bg-[#EAF5F3] border border-[#0D7A6E]/25 p-6 md:p-7">
                <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                  Direct Email
                </p>
                <a
                  href="mailto:info@aktivate.bi?subject=Website%20Enquiry"
                  className="font-heading text-2xl md:text-3xl font-bold text-[#102D38] underline decoration-[#0D7A6E]/40 decoration-2 underline-offset-4 hover:decoration-[#0D7A6E] hover:text-[#0D7A6E] transition-colors break-all rounded-sm"
                >
                  info@aktivate.bi
                </a>
                <p className="mt-4 text-sm text-[#344249] leading-[1.6]">
                  Prefer to talk it through? Call{' '}
                  <a
                    href="tel:+25766511150"
                    className="font-semibold text-[#0D7A6E] hover:underline rounded-sm tabular-nums"
                  >
                    (+257) 66 511 150
                  </a>{' '}
                  or{' '}
                  <a
                    href="tel:+25779681209"
                    className="font-semibold text-[#0D7A6E] hover:underline rounded-sm tabular-nums"
                  >
                    (+257) 79 681 209
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-heading text-sm font-bold text-[#1B252B] uppercase tracking-[0.12em] mb-4">
                  Areas we can help with
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-[#344249] leading-[1.5]"
                    >
                      <Check size={16} className="text-[#0D7A6E] shrink-0 mt-0.5" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-sm text-[#344249] leading-[1.6] border-t border-[#1B252B]/10 pt-6">
                When you write to us, it helps to include your organisation, the outcome
                you&apos;re aiming for and any timelines — we&apos;ll respond with the
                next steps.
              </p>

              <a
                href="mailto:info@aktivate.bi?subject=Website%20Enquiry"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0D7A6E] hover:bg-[#102D38] text-white font-semibold text-sm min-h-[46px] whitespace-nowrap transition-colors rounded-sm"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Email info@aktivate.bi</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </section>

            {/* Verified Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <section
                aria-labelledby="direct-contact-heading"
                className="bg-white border border-[#1B252B]/10 rounded-2xl p-7 md:p-9 space-y-7"
              >
                <header>
                  <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.16em] mb-2">
                    Direct Contact
                  </p>
                  <h2 id="direct-contact-heading" className="font-heading text-2xl font-bold text-[#1B252B]">
                    Reach our team in Bujumbura
                  </h2>
                </header>

                <address className="not-italic space-y-6">
                  <div className="flex items-start gap-4 border-t border-[#1B252B]/10 pt-5">
                    <div className="w-10 h-10 rounded-lg bg-[#EAF5F3] text-[#0D7A6E] flex items-center justify-center shrink-0">
                      <Phone size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-[#1B252B] mb-1">Phone</h3>
                      <div className="space-y-1 text-sm text-[#344249] tabular-nums">
                        <a
                          href="tel:+25766511150"
                          className="block hover:text-[#0D7A6E] transition-colors rounded-sm"
                        >
                          (+257) 66 511 150
                        </a>
                        <a
                          href="tel:+25779681209"
                          className="block hover:text-[#0D7A6E] transition-colors rounded-sm"
                        >
                          (+257) 79 681 209
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-[#1B252B]/10 pt-5">
                    <div className="w-10 h-10 rounded-lg bg-[#EAF5F3] text-[#0D7A6E] flex items-center justify-center shrink-0">
                      <Mail size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-[#1B252B] mb-1">Email</h3>
                      <a
                        href="mailto:info@aktivate.bi"
                        className="text-sm text-[#0D7A6E] font-medium hover:underline rounded-sm"
                      >
                        info@aktivate.bi
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-[#1B252B]/10 pt-5">
                    <div className="w-10 h-10 rounded-lg bg-[#EAF5F3] text-[#0D7A6E] flex items-center justify-center shrink-0">
                      <MapPin size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-[#1B252B] mb-1">
                        Location
                      </h3>
                      <p className="text-sm text-[#344249]">Bujumbura, Burundi</p>
                    </div>
                  </div>
                </address>
              </section>

              <aside
                aria-label="Brand philosophy"
                data-surface="dark"
                className="bg-[#102D38] text-white rounded-2xl p-7 md:p-9"
              >
                <p className="text-[#15B8A6] text-xs font-semibold uppercase tracking-[0.16em] mb-2">
                  Philosophy
                </p>
                <p className="font-heading text-2xl font-bold leading-snug mb-2">
                  Imagine. Dare. <span className="text-[#15B8A6]">Create.</span>
                </p>
                <p className="text-sm text-[#DCE5E8] leading-[1.6]">
                  Building stronger brands. Managing them better.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
