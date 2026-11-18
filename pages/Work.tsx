import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Maximize2 } from 'lucide-react';

type WorkCategory =
  | 'All'
  | 'Branding & Identity'
  | 'Campaigns & Communications'
  | 'Research & Brand Management'
  | 'Experiences & Activations';

interface WorkItem {
  id: string;
  client: string;
  category: Exclude<WorkCategory, 'All'>;
  scope: string;
  description: string;
  image: string;
  featured?: boolean;
}

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<WorkCategory>('All');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const filters: WorkCategory[] = [
    'All',
    'Branding & Identity',
    'Campaigns & Communications',
    'Research & Brand Management',
    'Experiences & Activations',
  ];

  const portfolioItems: WorkItem[] = [
    {
      id: 'primus',
      client: 'Primus',
      category: 'Campaigns & Communications',
      scope: 'Digital Campaign & Regional Activation Creatives',
      description:
        'Multi-format social content and live-music event communication developed for Primus and its Primus Black variant, preserving the brand’s original visual language.',
      image: '/assets/recovery/campaigns/campaign_primus_montage.png',
      featured: true,
    },
    {
      id: 'bgf-bank',
      client: 'BGF Bank',
      category: 'Campaigns & Communications',
      scope: 'Retail Banking & Digital Service Communications',
      description:
        'Customer-facing banking communications highlighting branch network access, payment cards, mobile services and remittance partnerships.',
      image: '/assets/recovery/campaigns/campaign_bgf_bank_montage.png',
    },
    {
      id: 'vitalo',
      client: "Vital'o",
      category: 'Experiences & Activations',
      scope: 'Sports Sponsorship & Brand Communication',
      description:
        'Sponsorship artwork for national basketball and international beach volleyball tournaments alongside core product hydration messaging.',
      image: '/assets/recovery/campaigns/campaign_vitalo_montage.png',
    },
    {
      id: 'kcb-bank',
      client: 'KCB Bank Burundi',
      category: 'Campaigns & Communications',
      scope: 'Contact Centre & Outdoor Awareness Campaign',
      description:
        'Bilingual customer-service awareness visuals created for print and outdoor display formats.',
      image: '/assets/recovery/portfolio/kcb_contact_centre.png',
    },
    {
      id: 'nyongera',
      client: 'Nyongera',
      category: 'Campaigns & Communications',
      scope: 'Product Launch & Visual Communication',
      description:
        'Bottle presentation and poster communication artwork introducing the beverage to local consumers.',
      image: '/assets/recovery/portfolio/primus_nyongera.png',
    },
    {
      id: 'akeza-sports',
      client: 'Akeza Sports',
      category: 'Branding & Identity',
      scope: 'Brand Identity, Kit & Promotional Collateral',
      description:
        'Visual identity system, branded sportswear applications and commercial advertising templates.',
      image: '/assets/recovery/portfolio/akeza_sports_identity.png',
    },
    {
      id: 'shiriki',
      client: 'Shiriki',
      category: 'Branding & Identity',
      scope: 'Brand Identity, Stationery & Apparel',
      description:
        'Logo system, corporate stationery suite and branded apparel created for the Shiriki platform.',
      image: '/assets/recovery/portfolio/shiriki_identity.png',
    },
    {
      id: 'sosa',
      client: 'SOSA · Truefoods Africa',
      category: 'Branding & Identity',
      scope: 'Brand Identity, Packaging & Branded Apparel',
      description:
        'Logotype, packaging graphics for retail maize flour sacks and promotional merchandise.',
      image: '/assets/recovery/portfolio/sosa_packaging.png',
    },
    {
      id: 'ilo',
      client: 'International Labour Organization (ILO)',
      category: 'Experiences & Activations',
      scope: 'Event Branding & Institutional Signage',
      description:
        'Workshop signage, event banners and delegate credential visuals produced for national validation sessions.',
      image: '/assets/recovery/portfolio/ilo_campaign_visuals.png',
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const featuredItem = filteredItems.find((item) => item.featured);
  const gridItems = featuredItem
    ? filteredItems.filter((item) => item.id !== featuredItem.id)
    : filteredItems;

  return (
    <div className="pt-[72px]">
      {/* Opening Header */}
      <section className="bg-[#102D38] text-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-[72ch]">
            <p className="text-[#15B8A6] text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-4">
              Our Work
            </p>
            <h1 className="font-heading text-[34px] sm:text-[42px] lg:text-[50px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance mb-5">
              Work that brings brands to life.
            </h1>
            <p className="text-[#DCE5E8] text-base md:text-[18px] leading-[1.65] max-w-[58ch]">
              Explore selected branding, research, communication and campaign work developed for
              organisations across different sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <div className="sticky top-[72px] z-30 bg-[#F4F3EE]/95 backdrop-blur-md border-b border-[#1B252B]/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max" role="tablist" aria-label="Filter work by category">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#15B8A6] ${
                    isActive
                      ? 'bg-[#102D38] text-white'
                      : 'bg-white text-[#1B252B] border border-[#1B252B]/12 hover:border-[#102D38]/40'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Portfolio Showcase */}
      <section className="bg-[#F4F3EE] py-14 lg:py-20 min-h-[520px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          {activeFilter === 'Research & Brand Management' ? (
            <div className="bg-white border border-[#1B252B]/12 rounded-2xl p-8 md:p-12 max-w-[880px]">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Research &amp; Brand Management
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B252B] mb-4">
                Confidential strategic and brand-management mandates
              </h2>
              <p className="text-[#344249] text-base leading-[1.7] mb-6">
                Market intelligence studies, brand-health tracking, Brand Management System
                architectures and ongoing advisory engagements are developed privately with client
                leadership teams. Approved anonymised summaries and visual case highlights will be
                published in this reserved space once cleared for public display.
              </p>
              <div className="border border-dashed border-[#102D38]/25 rounded-xl bg-[#F4F3EE] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D7A6E] mb-1">
                    Reserved Portfolio Slot
                  </span>
                  <span className="text-sm text-[#344249]">
                    Awaiting Founder-cleared Research &amp; Brand Management case documentation.
                  </span>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D38] hover:text-[#0D7A6E] whitespace-nowrap shrink-0"
                >
                  <span>View advisory scope</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Featured Lead Project (when viewing All or Campaigns) */}
              {featuredItem && (
                <article className="bg-white border border-[#1B252B]/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(featuredItem)}
                    className="lg:col-span-7 relative group bg-[#ECEAE3] aspect-[16/10] overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#15B8A6]"
                    aria-label={`View full artwork for ${featuredItem.client}`}
                  >
                    <img
                      src={featuredItem.image}
                      alt={`${featuredItem.client} — ${featuredItem.scope}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 bg-[#102D38]/90 text-white text-xs font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={13} aria-hidden="true" />
                      <span>Inspect artwork</span>
                    </span>
                  </button>

                  <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#0D7A6E] font-semibold uppercase tracking-[0.16em] mb-3">
                        <span>{featuredItem.category}</span>
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B252B] mb-2">
                        {featuredItem.client}
                      </h2>
                      <p className="text-sm font-medium text-[#102D38]/75 mb-5">
                        {featuredItem.scope}
                      </p>
                      <p className="text-[#344249] text-base leading-[1.65]">
                        {featuredItem.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-[#1B252B]/10">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(featuredItem)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D38] hover:text-[#0D7A6E] transition-colors"
                      >
                        <span>View full visual montage</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              )}

              {/* Expressive Varied Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gridItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white border border-[#1B252B]/10 rounded-2xl overflow-hidden flex flex-col"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="relative group bg-[#ECEAE3] aspect-[16/10] overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#15B8A6]"
                      aria-label={`View full artwork for ${item.client}`}
                    >
                      <img
                        src={item.image}
                        alt={`${item.client} — ${item.scope}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <span className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 bg-[#102D38]/90 text-white text-xs font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={13} aria-hidden="true" />
                        <span>Inspect</span>
                      </span>
                    </button>

                    <div className="p-7 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                          <span className="text-[#0D7A6E] font-semibold uppercase tracking-[0.14em]">
                            {item.category}
                          </span>
                          <span className="text-[#344249]/50" aria-hidden="true">
                            ·
                          </span>
                          <span className="text-[#344249]">{item.scope}</span>
                        </div>
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-[#1B252B] mb-2">
                          {item.client}
                        </h2>
                        <p className="text-sm md:text-[15px] text-[#344249] leading-[1.6]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Editorial Note on Research & Brand Management when viewing All */}
      {activeFilter === 'All' && (
        <section className="bg-white py-14 lg:py-18 border-t border-[#1B252B]/10">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Research &amp; Brand Management
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B252B] mb-3">
                Strategic and advisory engagements
              </h2>
              <p className="text-[#344249] text-base leading-[1.65] max-w-[58ch]">
                Alongside public-facing campaigns and identity systems, Aktivate conducts market
                intelligence studies and implements Brand Management Systems with client leadership
                teams. Public case summaries are published only with client clearance.
              </p>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#102D38] text-white hover:bg-[#1B252B] font-semibold text-sm px-6 py-3.5 rounded-lg min-h-[46px] whitespace-nowrap transition-colors"
              >
                <span>Discuss a project or mandate</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal for Artwork Inspection */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#102D38]/92 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-[1040px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#1B252B]/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D7A6E] mb-1">
                  {selectedItem.category}
                </p>
                <h2 id="lightbox-title" className="font-heading text-xl md:text-2xl font-bold text-[#1B252B]">
                  {selectedItem.client}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-[#1B252B] hover:bg-[#F4F3EE] transition-colors shrink-0"
                aria-label="Close artwork preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#ECEAE3] p-4 md:p-6 flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={`${selectedItem.client} — ${selectedItem.scope}`}
                referrerPolicy="no-referrer"
                className="max-h-[62vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-[62ch]">
                <p className="text-sm font-semibold text-[#102D38] mb-1">{selectedItem.scope}</p>
                <p className="text-sm text-[#344249] leading-[1.6]">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;