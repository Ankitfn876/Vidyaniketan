export interface Testimonial {
  id: string;
  authorName: string;
  role: string; // e.g., 'Parent of Class 8 Student', 'Class 10 CBSE Alumna (2024)'
  quote: string;
  rating: number; // 5
  avatarInitials: string;
  isDemo: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    authorName: 'Dr. Ramesh Narayan',
    role: 'Parent of Class 9 & Class 5 Students',
    quote: 'Vidya Niketan has provided my children an exceptional blend of academic discipline and creative freedom. The teachers are approachable, empathetic, and genuinely invested in each child’s conceptual growth.',
    rating: 5,
    avatarInitials: 'RN',
    isDemo: true
  },
  {
    id: 'test-2',
    authorName: 'Sunita & Vikram Malhotra',
    role: 'Parents of Class 10 Board Student',
    quote: 'The rigorous yet stress-free preparation strategy for Class 10 board exams is commendable. The doubt-clearing clinics and pre-board revision worksheets gave our daughter immense confidence.',
    rating: 5,
    avatarInitials: 'SM',
    isDemo: true
  },
  {
    id: 'test-3',
    authorName: 'Aayush Saxena',
    role: 'Class 10 Alumnus (Now pursuing IIT-JEE)',
    quote: 'The strong foundation in Mathematics and Science I received at VNPS made my transition to senior secondary studies effortless. The lab sessions and robotics club ignited my passion for engineering.',
    rating: 5,
    avatarInitials: 'AS',
    isDemo: true
  },
  {
    id: 'test-4',
    authorName: 'Meera Chidambaram',
    role: 'Parent of UKG & Class 3 Students',
    quote: 'The foundational wing is so warm and engaging. My son looks forward to school every morning. Safe transport, hygienic campus, and loving educators make it our best decision.',
    rating: 5,
    avatarInitials: 'MC',
    isDemo: true
  }
];
