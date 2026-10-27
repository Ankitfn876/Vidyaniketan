export type GalleryCategory =
  | 'All'
  | 'Campus'
  | 'Classrooms'
  | 'Sports'
  | 'Cultural Events'
  | 'Celebrations'
  | 'Science Exhibitions'
  | 'Annual Functions';

export interface GalleryImage {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  imageUrl: string;
  fallbackUrl?: string;
  caption: string;
  date: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}
