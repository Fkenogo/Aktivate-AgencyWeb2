import React, { useState } from 'react';
import { Phone, Mail, MapPin, Info, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    areaOfInterest: '',
    message: '',
  });

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

      {/* Form & Verified Contact Details */}
      <section className="bg-[#F4F3EE] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Enquiry Form Prototype */}
            <section
              aria-labelledby="enquiry-form-heading"
              className="lg:col-span-7 bg-white border border-[#1B252B]/10 rounded-2xl p-7 md:p-10"
            >
              <header className="mb-7">
                <h2 id="enquiry-form-heading" className="font-heading text-2xl font-bold text-[#1B252B] mb-2">
                  Send an enquiry
                </h2>
                <p className="text-sm text-[#344249] leading-[1.6]">
                  Share a brief outline of your brand challenge, timeline or area of interest.
                </p>
              </header>

              {/* Explicit Prototype Notice */}
              <div
                className="mb-7 rounded-xl bg-[#EAF5F3] border border-[#0D7A6E]/25 p-4 flex items-start gap-3"
                role="note"
              >
                <Info
                  size={18}
                  className="text-[#0D7A6E] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-sm text-[#102D38] leading-[1.55]">
                  <strong className="font-semibold">Design prototype notice:</strong> Form
                  submission is disabled in this review build until live email delivery is
                  configured. Please reach our team directly via{' '}
                  <a
                    href="mailto:info@aktivate.bi"
                    className="font-semibold text-[#0D7A6E] underline underline-offset-2 rounded-sm"
                  >
                    info@aktivate.bi
                  </a>{' '}
                  or phone.
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#1B252B] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-field w-full px-4 py-3 rounded-lg bg-[#F4F3EE] border border-[#1B252B]/15 text-[#1B252B] text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#1B252B] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@organisation.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-field w-full px-4 py-3 rounded-lg bg-[#F4F3EE] border border-[#1B252B]/15 text-[#1B252B] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-organisation"
                      className="block text-sm font-medium text-[#1B252B] mb-2"
                    >
                      Organisation <span className="text-[#344249]/70 font-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company or institution"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="form-field w-full px-4 py-3 rounded-lg bg-[#F4F3EE] border border-[#1B252B]/15 text-[#1B252B] text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-interest"
                      className="block text-sm font-medium text-[#1B252B] mb-2"
                    >
                      Area of interest{' '}
                      <span className="text-[#344249]/70 font-normal">(optional)</span>
                    </label>
                    <select
                      id="contact-interest"
                      name="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, areaOfInterest: e.target.value })
                      }
                      className="form-field w-full px-4 py-3 rounded-lg bg-[#F4F3EE] border border-[#1B252B]/15 text-[#1B252B] text-sm"
                    >
                      <option value="">Select an area</option>
                      {serviceAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#1B252B] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your brand, objectives or upcoming campaign..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-field w-full px-4 py-3 rounded-lg bg-[#F4F3EE] border border-[#1B252B]/15 text-[#1B252B] text-sm resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#102D38]/25 text-[#102D38]/60 font-semibold text-sm min-h-[46px] cursor-not-allowed whitespace-nowrap"
                  >
                    Submit disabled in prototype
                  </button>

                  <a
                    href="mailto:info@aktivate.bi"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D7A6E] hover:text-[#102D38] transition-colors whitespace-nowrap rounded-sm"
                  >
                    <span>Email info@aktivate.bi directly</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </form>
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
