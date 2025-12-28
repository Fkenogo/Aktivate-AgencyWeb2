
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
  id: string;
  client: string;
  category: string;
  imageUrl: string;
  tagline?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  moreImages?: string[];
}
