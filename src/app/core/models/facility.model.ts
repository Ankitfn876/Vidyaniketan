export interface Facility {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  features: string[];
  category: 'Academics & Tech' | 'Sports & Health' | 'Safety & Infrastructure';
  enabled: boolean;
}
