
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
  { client: 'Akeza Sports', category: 'Branding', imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c491?auto=format&fit=crop&q=80&w=2070' },
  { client: 'Lumitel', category: 'Campaign', imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2070' },
  { client: 'KFC Uganda', category: 'Activations', imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2070' },
  { client: 'Primus', category: 'Campaign', imageUrl: 'https://images.unsplash.com/photo-1514525253361-b874836371c7?auto=format&fit=crop&q=80&w=2074' },
  { client: 'ILO/UN', category: 'Strategy', imageUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=2187' },
  { client: 'Vital-O', category: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070' }
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
