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
  /**
   * PORTFOLIO ARTWORK REPLACEMENT GUIDE:
   * Drop final high-resolution artwork (>= 1200px wide) into /public/assets/recovery/portfolio/
   * and set `image: '/assets/recovery/portfolio/<filename>'` on the matching entry below.
   * When `image` is omitted, the card renders an intentional editorial plate automatically.
   */
  image?: string;
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
      scope: 'Social Media & Event Promotional Visuals',
      description:
        'Social graphics and live-music event promotional posters featuring Primus and its Primus Black variant, preserving the brand’s original visual identity.',
      image: '/assets/recovery/campaigns/campaign_primus_montage.png',
      featured: true,
    },
    {
      id: 'bgf-bank',
      client: 'BGF Bank',
      category: 'Campaigns & Communications',
      scope: 'Digital & Retail Service Graphics',
      description:
        'Social and digital communication artwork highlighting branch network access, Horizon cards, mobile banking and MoneyGram services.',
      image: '/assets/recovery/campaigns/campaign_bgf_bank_montage.png',
    },
    {
      id: 'vitalo',
      client: "Vital'o",
      category: 'Experiences & Activations',
      scope: 'Sports Sponsorship & Product Visuals',
      description:
        'Tournament sponsorship graphics for basketball and beach volleyball alongside still and sparkling water social posts.',
      image: '/assets/recovery/campaigns/campaign_vitalo_montage.png',
    },
    {
      id: 'kcb-bank',
      client: 'KCB Bank Burundi',
      category: 'Campaigns & Communications',
      scope: 'Poster & Outdoor Display Visuals',
      description:
        'Bilingual Contact Centre awareness posters and outdoor billboard display visuals.',
      // Replacement target: '/assets/recovery/portfolio/kcb_contact_centre.png' (>= 1200px)
    },
    {
      id: 'nyongera',
      client: 'Nyongera',
      category: 'Campaigns & Communications',
      scope: 'Product Visuals & Launch Poster',
      description:
        'Bottle and glass product presentation alongside promotional launch poster artwork.',
      // Replacement target: '/assets/recovery/portfolio/primus_nyongera.png' (>= 1200px)
    },
    {
      id: 'akeza-sports',
      client: 'Akeza Sports',
      category: 'Branding & Identity',
      scope: 'Brand Identity & Promotional Visuals',
      description:
        'Brand mark, sportswear kit applications and advertising space promotional creatives.',
      // Replacement target: '/assets/recovery/portfolio/akeza_sports_identity.png' (>= 1200px)
    },
    {
      id: 'shiriki',
      client: 'Shiriki',
      category: 'Branding & Identity',
      scope: 'Brand Identity, Stationery & Apparel',
      description:
        'Logo lockup, corporate stationery systems and branded apparel applications.',
      // Replacement target: '/assets/recovery/portfolio/shiriki_identity.png' (>= 1200px)
    },
    {
      id: 'sosa',
      client: 'SOSA · Truefoods Africa',
      category: 'Branding & Identity',
      scope: 'Logotype, Packaging & Branded Apparel',
      description:
        'Truefoods Africa emblem, SOSA wordmark, maize flour sack packaging and promotional apparel.',
      // Replacement target: '/assets/recovery/portfolio/sosa_packaging.png' (>= 1200px)
    },
    {
      id: 'ilo',
      client: 'International Labour Organization (ILO)',
      category: 'Experiences & Activations',
      scope: 'Event Signage & Delegate Credentials',
      description:
        'Validation workshop signage and delegate credential visuals.',
      // Replacement target: '/assets/recovery/portfolio/ilo_campaign_visuals.png' (>= 1200px)
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
            <div className="bg-white border border-[#1B252B]/12 rounded-2xl p-8 md:p-12 max-w-[960px]">
              <p className="text-[#0D7A6E] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Research &amp; Brand Management
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B252B] mb-4">
                Insight-led brand strategy and continuous brand governance
              </h2>
              <p className="text-[#344249] text-base leading-[1.7] mb-8 max-w-[68ch]">
                Research and Brand Management sit at the core of Aktivate&apos;s established
                practice. Because these engagements involve sensitive commercial data, internal
                governance structures and proprietary leadership roadmaps, selected case
                documentation is shared directly during client consultations rather than published
                as open campaign boards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {[
                  {
                    title: 'Market Intelligence & Brand Health',
                    detail:
                      'Primary consumer research, brand-equity diagnostics and competitive benchmarking that ground commercial decisions in evidence.',
                  },
                  {
                    title: 'Brand Management Systems',
                    detail:
                      'Structured operating standards, asset governance and team workflows that keep everyday brand execution aligned.',
                  },
                  {
                    title: 'Ongoing Executive Advisory',
                    detail:
                      'Continuous counsel across product launches, portfolio architecture, communication reviews and internal capability building.',
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl bg-[#F4F3EE] border border-[#1B252B]/10 p-5"
                  >
                    <h3 className="font-heading text-[15px] font-bold text-[#102D38] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#344249] leading-[1.6]">{pillar.detail}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1B252B]/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-[#344249]">
                  Selected credentials and sample deliverables are available on request.
                </p>
                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D38] hover:text-[#0D7A6E] whitespace-nowrap"
                  >
                    <span>Explore full capability</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#102D38] text-white hover:bg-[#1B252B] font-semibold text-sm px-5 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                  >
                    <span>Request credentials</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
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
                {gridItems.map((item, idx) => (
                  <article
                    key={item.id}
                    className="bg-white border border-[#1B252B]/10 rounded-2xl overflow-hidden flex flex-col"
                  >
                    {item.image ? (
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
                    ) : (
                      <div
                        className="aspect-[16/10] bg-[#102D38] border-b border-[#102D38]/10 p-7 flex flex-col justify-between text-white"
                        aria-label={`${item.client} editorial showcase plate`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#15B8A6]">
                            Selected Assignment
                          </span>
                          <span className="font-heading text-xs font-bold text-white/45 tabular-nums">
                            {String(idx + (featuredItem ? 2 : 1)).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="my-auto py-3">
                          <div className="w-8 h-[2px] bg-[#15B8A6] mb-3" aria-hidden="true" />
                          <p className="font-heading text-xl md:text-[22px] font-semibold text-white/95 leading-[1.3] max-w-[26ch]">
                            Full creative presentation curated in studio portfolio deck.
                          </p>
                        </div>

                        <div className="pt-3 border-t border-white/12 flex items-center justify-between text-xs text-white/70">
                          <span>Aktivate Creative Studio</span>
                          <Link
                            to="/contact"
                            className="font-medium text-[#15B8A6] hover:underline"
                          >
                            Request visuals
                          </Link>
                        </div>
                      </div>
                    )}

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
                Insight, governance and continuous brand advisory
              </h2>
              <p className="text-[#344249] text-base leading-[1.65] max-w-[60ch]">
                Alongside public-facing campaigns and identity systems, Aktivate delivers
                confidential market intelligence studies, Brand Management System architectures and
                ongoing governance advisory for leadership teams across sectors.
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