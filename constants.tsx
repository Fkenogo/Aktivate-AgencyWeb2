
import { ServiceCard, ProcessStep, PortfolioItem } from './types.ts';

export const SERVICES: ServiceCard[] = [
  {
    icon: '🎨',
    number: '01',
    title: 'BRAND FOUNDATION',
    tagline: 'We craft the story and plot the course.',
    description: 'Every great brand starts with a solid core. We excavate your unique truth to build a strategic foundation that supports massive growth.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000',
    list: [
      'Strategy Development: The Roadmap',
      'Branding & Identity: The Soul',
      'Market Research: The Intelligence'
    ]
  },
  {
    icon: '📢',
    number: '02',
    title: 'AMPLIFICATION',
    tagline: 'We get your message to the right people.',
    description: 'A great message is useless if it is not heard. We use cutting-edge media strategies to cut through the noise and dominate the conversation.',
    imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2000',
    list: [
      'Media & PR: The Reach',
      'Advertising: The Voice',
      'Content Production: The Arsenal'
    ]
  },
  {
    icon: '✨',
    number: '03',
    title: 'ENGAGEMENT',
    tagline: 'We create experiences that leave a mark.',
    description: 'We turn passive observers into active participants. Our activations create emotional bonds that lead to lifelong brand loyalty.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000',
    list: [
      'Creative & Design: Visuals that convert',
      'Digital & Social: Connecting the crowd',
      'Activations: Experiences that stick'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { 
    number: '01', 
    name: 'DEEP DIVE', 
    description: 'Discovery: We go beneath the surface to find the core truths of your brand and market.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070'
  },
  { 
    number: '02', 
    name: 'DECODE', 
    description: 'Research & Insights: Translating raw data into a narrative that dictates strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'
  },
  { 
    number: '03', 
    name: 'BLUEPRINT', 
    description: 'Strategic Planning: Designing the structural integrity of your future campaigns.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=2231'
  },
  { 
    number: '04', 
    name: 'CREATE', 
    description: 'Design & Development: Where strategy takes visual and tactile form. Pure alchemy.',
    imageUrl: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&q=80&w=2070'
  },
  { 
    number: '05', 
    name: 'IGNITE', 
    description: 'Execution: Launching the brand into the stratosphere with precision and power.',
    imageUrl: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=2070'
  },
  { 
    number: '06', 
    name: 'EVOLVE', 
    description: 'Measure & Optimize: We don\'t stop at the finish line. We iterate for perpetual growth.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072'
  }
];

export const CLIENT_LOGOS = [
  'PRIMUS', 'LUMITEL', 'ILO/UN', 'BGF',
  'SERENITY INSURANCE', 'INTERPETROL', 'AKEZA SPORTS',
  'KFC UGANDA', 'VITAL-O', 'RWANDA DEVELOPMENT BOARD',
  'CORRY & MUKUYU'
];

export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: 'akeza-01',
    client: 'Akeza Sports', 
    category: 'Branding', 
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c491?auto=format&fit=crop&q=80&w=2070',
    tagline: 'Revolutionizing the sports narrative in Burundi.',
    description: 'A complete identity overhaul for the nation\'s premier sports news portal.',
    challenge: 'Akeza Sports needed to move from a basic blog to a high-performance sports media brand that appealed to both youth and corporate sponsors.',
    solution: 'We developed a dynamic, movement-inspired visual system and a strategy focused on "athlete storytelling."',
    results: '45% increase in unique monthly visitors and secured 3 major corporate long-term partnerships within the first quarter.',
    moreImages: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1461896711905-23f05327a36c?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  { 
    id: 'lumitel-01',
    client: 'Lumitel', 
    category: 'Campaign', 
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2070',
    tagline: 'Connecting the unconnected across the hills.',
    description: 'A nationwide rural awareness campaign for telecommunications access.',
    challenge: 'How to communicate technical benefits of 4G to rural populations with low digital literacy?',
    solution: 'An activation-heavy campaign using traditional storytelling and community influencers ("The Hill Heroes").',
    results: 'Achieved 200,000 new activations in rural sectors and 90% brand recall in target zones.',
    moreImages: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  { 
    id: 'kfc-01',
    client: 'KFC Uganda', 
    category: 'Activations', 
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2070',
    tagline: 'Finger Lickin\' Experiences.',
    description: 'Strategic engagement for product launches in the Kampala market.',
    challenge: 'Re-igniting the buzz around a heritage brand in a competitive fast-food market.',
    solution: 'Gamified "Secret Spice" treasure hunts and immersive outdoor dining pop-ups.',
    results: 'Record-breaking launch weekend sales and 15M+ social media impressions.',
    moreImages: [
      'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  { 
    id: 'primus-01',
    client: 'Primus', 
    category: 'Campaign', 
    imageUrl: 'https://images.unsplash.com/photo-1514525253361-b874836371c7?auto=format&fit=crop&q=80&w=2074',
    tagline: 'The Spirit of Celebration.',
    description: 'National festive season campaign blending heritage with modern vibes.',
    challenge: 'Maintaining dominance as the national beverage while appearing fresh to Gen Z.',
    solution: 'Visual identity refreshment focusing on "Shared Moments" and digital-first content creation.',
    results: '12% volume growth during the festive period and high engagement on digital channels.',
    moreImages: [
      'https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  { 
    id: 'un-01',
    client: 'ILO/UN', 
    category: 'Strategy', 
    imageUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=2187',
    tagline: 'Decent Work for a Better Future.',
    description: 'Communication strategy for youth employment advocacy.',
    challenge: 'Making policy discussions relevant and engaging for the youth population.',
    solution: 'A "Work Your Way" platform featuring peer-to-peer inspiration and clear pathfinding content.',
    results: 'Policy reach increased by 300% among target age groups and high workshop participation.',
    moreImages: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  { 
    id: 'vital-01',
    client: 'Vital-O', 
    category: 'Digital', 
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070',
    tagline: 'Fueling the Championship Mindset.',
    description: 'Digital ecosystem development for Burundi\'s legendary sports club.',
    challenge: 'A legacy club with no digital footprint or fan engagement platform.',
    solution: 'Custom fan app and social content machine for live updates and historical archives.',
    results: 'Reached #1 trending sports app in local store and built a 50k+ active digital fan base.',
    moreImages: [
      'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  // Extra items for "Load More" demonstration
  { 
    id: 'bgf-01',
    client: 'BGF', 
    category: 'Strategy', 
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-131438967b67?auto=format&fit=crop&q=80&w=2070',
    tagline: 'Financing the Future.',
    description: 'Strategic repositioning for a growing financial institution.',
    challenge: 'Perceived as "too traditional" for emerging SME entrepreneurs.',
    solution: 'Brand modernization and "Business First" communications approach.',
    results: '20% increase in SME account openings in the first 6 months.',
    moreImages: []
  },
  { 
    id: 'serenity-01',
    client: 'Serenity Insurance', 
    category: 'Branding', 
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070',
    tagline: 'Peace of Mind, Redefined.',
    description: 'Visual identity for a new player in the insurance market.',
    challenge: 'Creating trust in a market skeptical of insurance providers.',
    solution: 'Clean, transparent visual language and simple-to-understand product icons.',
    results: 'Successfully launched with 5,000+ policies in month one.',
    moreImages: []
  },
  { 
    id: 'akeza-02',
    client: 'Akeza Sports Awards', 
    category: 'Activations', 
    imageUrl: 'https://images.unsplash.com/photo-1531050171669-70c4f28e50fb?auto=format&fit=crop&q=80&w=2070',
    tagline: 'Celebrating Excellence.',
    description: 'Full event production and brand activation for an annual gala.',
    challenge: 'Elevating a local ceremony to a regional-class televised event.',
    solution: 'Immersive light-and-sound stage design and live digital red carpet integration.',
    results: 'National TV broadcast reached 2M+ viewers and trended #1 on social media.',
    moreImages: []
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: 'BRAND FOUNDATION',
    services: [
      { title: 'Market Research', desc: 'We spy the market, gathering intelligence to inform every strategic decision.', tags: ['Brand Health Trackers', 'Customer Satisfaction Surveys', 'Competitor Analysis', 'Retail Audits', 'Audience Profiling'] },
      { title: 'Strategy Development', desc: 'We craft the roadmap for your brand\'s domination.', tags: ['Marketing Strategy', 'Brand Strategy', 'Communications Strategy', 'Sales Strategy'] },
      { title: 'Branding & Identity', desc: 'We build brands that resonate and endure.', tags: ['Brand Positioning', 'Brand Identity Development', 'Corporate Branding'] }
    ]
  },
  {
    name: 'BRAND AMPLIFICATION',
    services: [
      { title: 'Creative & Design', desc: 'Visuals and messaging that stop the scroll.', tags: ['Graphic Design', 'Illustrations & Animations', 'Copywriting'] },
      { title: 'Content Production', desc: 'High-quality content that maximizes impact.', tags: ['Audio Visual Production', 'TV Commercials', 'Photography', 'Video Documentaries'] },
      { title: 'Advertising & Campaign Management', desc: 'Campaigns that generate results, not just impressions.', tags: ['Campaign Planning', 'Media Planning', 'Execution'] }
    ]
  },
  {
    name: 'CUSTOMER ENGAGEMENT',
    services: [
      { title: 'Digital Marketing & Social Media', desc: 'We craft digital experiences that connect.', tags: ['Digital Strategy', 'Content Strategy & Marketing', 'Social Media Management', 'Web & App Development'] },
      { title: 'Experiential Marketing & Events', desc: 'Immersive experiences that create brand advocates.', tags: ['Brand Activations', 'Corporate Events', 'Product Launches', 'Employee Engagement'] },
      { title: 'Media & Public Relations', desc: 'We manage your reputation and amplify your voice.', tags: ['Corporate Communications', 'Crisis Management', 'Press Engagements', 'Influencer Marketing'] }
    ]
  }
];
