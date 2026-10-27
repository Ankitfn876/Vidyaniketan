export interface SchoolConfig {
  name: string;
  shortName: string;
  tagline: string;
  motto: string;
  affiliation: {
    board: string;
    affiliationNumber: string;
    schoolCode: string;
    status: string;
  };
  levels: string; // e.g., 'Nursery to Class 10'
  establishedYear: number;
  contact: {
    phone: string;
    alternatePhone: string;
    email: string;
    admissionsEmail: string;
    address: {
      street: string;
      area: string;
      city: string;
      district: string;
      state: string;
      pincode: string;
      landmark: string;
    };
    officeHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapEmbedUrl: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
    linkedin: string;
  };
  admissions: {
    isOpen: boolean;
    session: string; // '2026-2027'
    classesOpen: string;
    lastDateForForm: string;
    helplineNumber: string;
    demoNotice: string;
  };
  stats: {
    label: string;
    value: string;
    icon: string;
    description: string;
  }[];
  principal: {
    name: string;
    designation: string;
    qualifications: string;
    experience: string;
    image: string;
    welcomeMessage: string;
    visionQuote: string;
  };
}

export const SCHOOL_CONFIG: SchoolConfig = {
  name: 'Vidya Niketan Public School',
  shortName: 'VNPS',
  tagline: 'Building Bright Futures Through Quality Education & Character',
  motto: 'Knowledge • Character • Excellence (विद्ययाऽमृतमश्नुते)',
  affiliation: {
    board: 'Central Board of Secondary Education (CBSE)',
    affiliationNumber: 'CBSE/AFF/1030982',
    schoolCode: '50942',
    status: 'Provisional CBSE Affiliation (Demo Config)'
  },
  levels: 'Nursery to Class 10 (Co-Educational)',
  establishedYear: 2008,
  contact: {
    phone: '+91 755 248 9100',
    alternatePhone: '+91 98260 12345',
    email: 'info@vidyaniketan-demo.edu.in',
    admissionsEmail: 'admissions@vidyaniketan-demo.edu.in',
    address: {
      street: 'Plot No. 12-B, Knowledge Corridor',
      area: 'Bawadiya Kalan Main Road',
      city: 'Bhopal',
      district: 'Bhopal',
      state: 'Madhya Pradesh',
      pincode: '462026',
      landmark: 'Near Eco-Botanical Garden'
    },
    officeHours: {
      weekdays: '08:00 AM – 03:30 PM',
      saturday: '08:30 AM – 01:00 PM',
      sunday: 'Closed'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117363.38545803274!2d77.34861899999999!3d23.213192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  },
  admissions: {
    isOpen: true,
    session: '2026–2027',
    classesOpen: 'Nursery to Class IX & Class X (Transfer Cases)',
    lastDateForForm: '15 March 2026',
    helplineNumber: '+91 98260 12345',
    demoNotice: 'Demo Notice: This is an interactive frontend demonstration for a school website. Application submissions generate a demo reference number and are not stored in any external database.'
  },
  stats: [
    {
      label: 'Enrolled Students',
      value: '1,250+',
      icon: 'bi-mortarboard-fill',
      description: 'Nurtured across Nursery to Class 10'
    },
    {
      label: 'Qualified Educators',
      value: '54+',
      icon: 'bi-person-badge-fill',
      description: 'Passionate and certified subject specialists'
    },
    {
      label: 'Years of Excellence',
      value: '16+',
      icon: 'bi-award-fill',
      description: 'Serving with dedication since 2008'
    },
    {
      label: 'Board Examination Pass Rate',
      value: '100%',
      icon: 'bi-patch-check-fill',
      description: 'Class 10 CBSE Board participation and success'
    }
  ],
  principal: {
    name: 'Dr. Sudha Rao',
    designation: 'Principal & Head of Academic Council',
    qualifications: 'M.Sc. (Physics), M.Ed., Ph.D. in Educational Pedagogy',
    experience: '24+ Years of Educational Leadership',
    image: 'assets/images/teachers/principal.jpg',
    welcomeMessage: 'Welcome to Vidya Niketan Public School. Education here is not just about textbooks and examinations; it is a transformative journey that ignites curiosity, builds moral character, and nurtures resilient, empathetic young citizens capable of shaping our nation.',
    visionQuote: '“Our commitment is to empower every child with knowledge, digital competence, and timeless human values to thrive in an ever-evolving world.”'
  }
};
