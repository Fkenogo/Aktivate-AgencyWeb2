
export interface ServiceCard {
  icon: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  list: string[];
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface PortfolioItem {
  client: string;
  category: string;
  imageUrl: string;
}
