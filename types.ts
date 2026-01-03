
export interface ServiceCard {
  id: string;
  icon: string;
  number: string;
  title: string;
  tagline: string;
  services: string[];
}

export interface PortfolioItem {
  id: string;
  client: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Step {
  id: string;
  number: string;
  name: string;
  description: string;
}
