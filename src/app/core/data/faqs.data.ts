export interface SchoolFaq {
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics & Board' | 'Facilities & Safety' | 'General';
}

export const FAQS_DATA: SchoolFaq[] = [
  {
    question: 'What is the age criteria for Nursery and Kindergarten admissions?',
    answer: 'For Nursery admission, the child should be 3 years of age as of 31st March of the academic session. For LKG and UKG, the recommended ages are 4+ and 5+ years respectively, as per the National Early Childhood Care and Education (ECCE) norms.',
    category: 'Admissions'
  },
  {
    question: 'What board curriculum is followed at Vidya Niketan Public School?',
    answer: 'The school follows the Central Board of Secondary Education (CBSE, New Delhi) curriculum aligned with the National Education Policy (NEP 2020), offering education from Nursery through Class 10 AISSE board examinations.',
    category: 'Academics & Board'
  },
  {
    question: 'How does the school prepare Class 10 students for CBSE Board Examinations?',
    answer: 'Preparation begins early with structured syllabus coverage by October, followed by two intensive Pre-Board simulations, past 5-year paper solving drills, specialized doubt-clearing clinics from 2 PM to 4 PM, and individual performance reviews with parents.',
    category: 'Academics & Board'
  },
  {
    question: 'Is school transport available for all city routes?',
    answer: 'Yes, our fleet of dedicated yellow buses connects all major residential hubs across Bhopal. All buses have active GPS tracking, speed limiters, first-aid kits, and trained lady attendants on board.',
    category: 'Facilities & Safety'
  },
  {
    question: 'What documents are required at the time of admission interaction?',
    answer: 'Original and self-attested copies of the Child’s Birth Certificate, 4 passport-size photographs, Parents’ Aadhaar/ID proof, Previous School Transfer Certificate (for Class 2 upwards), and previous class marksheet/report card.',
    category: 'Admissions'
  },
  {
    question: 'What are the school office hours for prospective parents?',
    answer: 'The administrative admissions office operates from Monday to Friday between 08:00 AM and 03:30 PM, and on Saturdays between 08:30 AM and 01:00 PM. Parents may also submit preliminary enquiries online.',
    category: 'General'
  }
];
