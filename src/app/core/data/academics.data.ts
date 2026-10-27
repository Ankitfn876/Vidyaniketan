import { AcademicProgram, Class10Subject, Class10Resource, TimetableSlot } from '../models/academic.model';

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'prog-pre-primary',
    name: 'Pre-Primary Wing',
    classes: 'Nursery, Lower KG (LKG), Upper KG (UKG)',
    ageGroup: '3 to 5 Years',
    tagline: 'Joyful Play-Way Foundations & Wonder',
    description: 'A nurturing, vibrant environment where young children explore foundational concepts through multisensory games, songs, phonics, storytelling, and creative motor activities.',
    icon: 'bi-stars',
    highlights: [
      'Activity-driven theme-based curriculum',
      'Phonics-based reading and early language acquisition',
      'Montessori sensorial manipulatives for spatial and motor skills',
      'Caring child-to-teacher ratio (15:1) with attentive lady attendants',
      'No formal exams; continuous affectionate milestone tracking'
    ],
    curriculumOverview: 'Aligned with National Curriculum Framework for Foundational Stage (NCF-FS) and NEP 2020 guidelines.',
    keySubjects: ['English Phonics & Rhymes', 'Foundational Numeracy', 'Hindi Balgeet & Akshar', 'Environmental Curiosity (EVS)', 'Creative Arts & Music']
  },
  {
    id: 'prog-primary',
    name: 'Primary Wing',
    classes: 'Class 1 to Class 5',
    ageGroup: '6 to 10 Years',
    tagline: 'Foundational Literacy, Numeracy & Lifelong Curiosity',
    description: 'Transitioning into structured learning through joyful conceptual discovery. Focus on reading comprehension, mental arithmetic, scientific observation, and ethical character building.',
    icon: 'bi-pencil-square',
    highlights: [
      'Experiential learning integrated with multimedia smart classrooms',
      'Daily library reading hours and vocabulary enrichment',
      'Hands-on basic science experiments and nature walks',
      'Introduction to computer fundamentals and digital creativity in Class 3',
      'Co-curricular enrichment in yoga, music, drama, and sports'
    ],
    curriculumOverview: 'CBSE affiliated primary curriculum emphasizing deep conceptual foundations without rote memorization.',
    keySubjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies (EVS)', 'Computer Basics', 'General Knowledge & Moral Science', 'Physical Education & Arts']
  },
  {
    id: 'prog-middle',
    name: 'Middle School',
    classes: 'Class 6 to Class 8',
    ageGroup: '11 to 13 Years',
    tagline: 'Inquiry, Analytical Reasoning & Broad Horizons',
    description: 'Cultivating critical thinking, research projects, scientific reasoning, and mathematical rigor as students transition into adolescent intellectual maturity.',
    icon: 'bi-lightbulb',
    highlights: [
      'Specialized subject labs: Physics, Chemistry, Biology, and ICT',
      'Introduction to third language: Sanskrit / Regional options',
      'STEM coding projects, algorithm design, and introductory robotics',
      'Inter-house debates, elocution, quiz competitions, and Olympiad mentoring',
      'Leadership opportunities through Student Council and House appointments'
    ],
    curriculumOverview: 'Comprehensive CBSE middle school syllabus designed to bridge foundational understanding to secondary academic rigor.',
    keySubjects: ['English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science (Physics, Chem, Bio)', 'Social Science (History, Civics, Geography)', 'Information Technology', 'Visual & Performing Arts']
  },
  {
    id: 'prog-secondary',
    name: 'Secondary School',
    classes: 'Class 9 and Class 10',
    ageGroup: '14 to 16 Years',
    tagline: 'Academic Excellence, Board Mastery & Future Readiness',
    description: 'Rigorous preparation for CBSE All India Secondary School Examination (AISSE Class 10), combined with personalized career counseling, practical lab mastery, and emotional resilience.',
    icon: 'bi-mortarboard',
    highlights: [
      'Strict adherence to the latest CBSE Class 9 & 10 curriculum and assessment blueprints',
      'Weekly unit tests, periodic assessments, and dual pre-board practice examinations',
      'Dedicated doubt-clearing clinics and individualized academic mentoring',
      'CBSE practical experiments and internal assessment portfolio guidance',
      'Comprehensive stream counseling (Science, Commerce, Humanities) for life after Class 10'
    ],
    curriculumOverview: 'CBSE AISSE curriculum recognized nationwide, preparing students for competitive excellence and higher secondary success.',
    keySubjects: ['Mathematics (Standard / Basic)', 'Science (Integrated Theory & Practical)', 'Social Science', 'English Language & Literature', 'Hindi Course A / Sanskrit', 'Computer Applications (Skill Subject)']
  }
];

export const CLASS_10_SUBJECTS: Class10Subject[] = [
  {
    code: '041 / 241',
    name: 'Mathematics (Standard / Basic)',
    type: 'Core',
    description: 'Builds analytical precision, logical problem solving, and geometric proof techniques. Offered in both Standard (for future Science/Commerce with Maths aspirants) and Basic levels.',
    boardAssessment: {
      theoryMarks: 80,
      practicalInternalMarks: 20,
      duration: '3 Hours'
    },
    keyTopics: [
      'Real Numbers & Polynomials',
      'Pair of Linear Equations in Two Variables',
      'Quadratic Equations & Arithmetic Progressions',
      'Triangles, Circles & Coordinate Geometry',
      'Introduction to Trigonometry & Applications (Heights & Distances)',
      'Surface Areas, Volumes & Statistics and Probability'
    ],
    recommendedBooks: ['NCERT Mathematics Class 10', 'NCERT Exemplar Problems', 'R.D. Sharma / R.S. Aggarwal for Practice']
  },
  {
    code: '086',
    name: 'Science (Physics, Chemistry & Biology)',
    type: 'Core',
    description: 'Comprehensive natural science training covering chemical reactions, mechanics, electricity, genetics, reproduction, and environmental ecosystems.',
    boardAssessment: {
      theoryMarks: 80,
      practicalInternalMarks: 20,
      duration: '3 Hours'
    },
    keyTopics: [
      'Chemical Reactions, Acids, Bases & Salts, Metals and Non-Metals',
      'Carbon and its Compounds',
      'Life Processes, Control and Coordination, Reproduction & Heredity',
      'Light - Reflection & Refraction, The Human Eye and the Colourful World',
      'Electricity & Magnetic Effects of Electric Current',
      'Our Environment & Natural Resource Management'
    ],
    recommendedBooks: ['NCERT Science Class 10', 'School Science Lab Manual with Practical Records', 'NCERT Exemplar Science']
  },
  {
    code: '087',
    name: 'Social Science (Hist, Geo, Pol.Sc, Eco)',
    type: 'Core',
    description: 'Integrates History (Rise of Nationalism), Geography (Resources, Agriculture, Industries), Political Science (Democratic Politics), and Economics (Development & Sectors).',
    boardAssessment: {
      theoryMarks: 80,
      practicalInternalMarks: 20,
      duration: '3 Hours'
    },
    keyTopics: [
      'History: Nationalism in Europe & India, Making of a Global World',
      'Geography: Resources, Agriculture, Minerals, Energy & Manufacturing',
      'Democratic Politics: Power Sharing, Federalism, Gender, Religion & Caste, Political Parties',
      'Economics: Development, Sectors of Indian Economy, Money & Credit, Globalization',
      'Map Work & Project Portfolio on Disaster Management / Sustainable Development'
    ],
    recommendedBooks: ['NCERT Contemporary India-II', 'NCERT Democratic Politics-II', 'NCERT India and the Contemporary World-II', 'NCERT Understanding Economic Development']
  },
  {
    code: '184',
    name: 'English Language & Literature',
    type: 'Language',
    description: 'Fosters critical reading, literary analysis, formal correspondence, analytical writing, and communicative mastery.',
    boardAssessment: {
      theoryMarks: 80,
      practicalInternalMarks: 20,
      duration: '3 Hours'
    },
    keyTopics: [
      'Reading Comprehension (Discursive & Factual passages)',
      'Writing Skills: Formal Letters & Analytical Paragraph Writing',
      'Grammar: Tenses, Modals, Subject-Verb Concord, Reported Speech',
      'Literature: First Flight (Prose & Poems)',
      'Supplementary Reader: Footprints Without Feet',
      'Assessment of Speaking and Listening Skills (ASL - 20 Marks Internal)'
    ],
    recommendedBooks: ['NCERT First Flight Class 10', 'NCERT Footprints Without Feet Class 10']
  },
  {
    code: '002',
    name: 'Hindi Course-A (or Sanskrit 122)',
    type: 'Language',
    description: 'Refines language elegance, vocabulary, vyakaran (grammar), essay writing, and appreciation of prominent Indian poets and authors.',
    boardAssessment: {
      theoryMarks: 80,
      practicalInternalMarks: 20,
      duration: '3 Hours'
    },
    keyTopics: [
      'Apathit Gadyansh & Padyansh (Unseen Comprehension)',
      'Vyakaran: Vakya Bhed, Vachya, Pad Parichay, Alankar',
      'Kshitij Bhag-2: Gadhya & Kavya Khand',
      'Kritika Bhag-2: Supplementary Stories',
      'Rachnatmak Lekhan: Anuched Lekhan, Patra Lekhan, Vigyapan & Sandesh Lekhan',
      'Shravan evam Vachan Kaushal (Internal Assessment)'
    ],
    recommendedBooks: ['NCERT Kshitij Bhag-2', 'NCERT Kritika Bhag-2', 'Vyakaran Prabha Class 10']
  },
  {
    code: '165',
    name: 'Computer Applications / IT (Skill Subject)',
    type: 'Skill / Optional',
    description: 'Practical training in web technologies (HTML, CSS), cyber ethics, word processing, and presentation tools as per CBSE vocational curriculum.',
    boardAssessment: {
      theoryMarks: 50,
      practicalInternalMarks: 50,
      duration: '2 Hours'
    },
    keyTopics: [
      'Basics of Information Technology & Internet Concepts',
      'Cyber Ethics, Safe Browsing, Copyright & Open Source',
      'HTML5 and CSS3: Headings, Links, Images, Tables & Forms',
      'Scratch / Python Programming Foundations',
      'Practical Project and Lab Examination'
    ],
    recommendedBooks: ['CBSE Computer Applications Study Material Class 10', 'NCERT Computer and Communication Technology']
  }
];

export const CLASS_10_RESOURCES: Class10Resource[] = [
  {
    id: 'res-1',
    title: 'Class 10 CBSE Model Question Paper – Mathematics (Standard)',
    subject: 'Mathematics',
    type: 'Model Question Paper',
    academicYear: '2025-2026',
    fileSize: '1.4 MB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  },
  {
    id: 'res-2',
    title: 'Class 10 CBSE Science Complete Question Blueprint & Formula Sheet',
    subject: 'Science',
    type: 'Revision Notes',
    academicYear: '2025-2026',
    fileSize: '2.1 MB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  },
  {
    id: 'res-3',
    title: 'Class 10 Social Science Map Pointing Practice Workbook',
    subject: 'Social Science',
    type: 'Practice Worksheet',
    academicYear: '2025-2026',
    fileSize: '3.2 MB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  },
  {
    id: 'res-4',
    title: 'Class 10 Science Practical Experiment Guidelines & Viva Preparation',
    subject: 'Science',
    type: 'Practical Exam Guide',
    academicYear: '2025-2026',
    fileSize: '1.8 MB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  },
  {
    id: 'res-5',
    title: 'English Language & Literature Analytical Paragraph & Letter Writing Templates',
    subject: 'English',
    type: 'Revision Notes',
    academicYear: '2025-2026',
    fileSize: '950 KB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  },
  {
    id: 'res-6',
    title: 'Class 10 Hindi Vyakaran (Grammar) Quick Revision Pocket Guide',
    subject: 'Hindi',
    type: 'Revision Notes',
    academicYear: '2025-2026',
    fileSize: '1.1 MB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  },
  {
    id: 'res-7',
    title: 'Class 10 Previous 5-Year Solved Board Questions Compilation',
    subject: 'Mathematics',
    type: 'Model Question Paper',
    academicYear: '2025-2026',
    fileSize: '4.5 MB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  },
  {
    id: 'res-8',
    title: 'Class 10 Computer Applications (Code 165) HTML Model Practical File',
    subject: 'Computer Applications',
    type: 'Practical Exam Guide',
    academicYear: '2025-2026',
    fileSize: '1.2 MB',
    fileType: 'PDF Document',
    downloadUrl: '#'
  }
];

export const SAMPLE_STUDY_TIMETABLE: TimetableSlot[] = [
  {
    time: '06:00 AM – 07:15 AM',
    activity: 'Morning High-Retention Revision',
    focus: 'Science Theory / Social Science Memory Topics',
    tips: 'Fresh mind allows effortless absorption of biological processes and historical timelines.'
  },
  {
    time: '07:15 AM – 07:45 AM',
    activity: 'Healthy Breakfast & Mind Refreshment',
    focus: 'Nutrition & Relaxation',
    tips: 'Hydrate well; a wholesome breakfast boosts daytime cognitive focus.'
  },
  {
    time: '08:00 AM – 02:00 PM',
    activity: 'School Interactive Learning & Labs',
    focus: 'Classroom Instruction, Practical Experiments & Doubts',
    tips: 'Take active handwritten notes; clarify any hesitation with subject teachers on the spot.'
  },
  {
    time: '02:30 PM – 03:45 PM',
    activity: 'Lunch, Rest & Mental Rejuvenation',
    focus: 'Short Power Nap or Light Recreation',
    tips: 'Avoid screens; recharge your energy for focused evening study sessions.'
  },
  {
    time: '04:00 PM – 05:30 PM',
    activity: 'Mathematics Daily Problem Solving Drill',
    focus: 'NCERT Examples, Exercise Problems & Formulas',
    tips: 'Solve at least 15 to 20 numerical problems on paper with step-by-step presentation.'
  },
  {
    time: '05:30 PM – 06:15 PM',
    activity: 'Outdoor Physical Exercise or Walk',
    focus: 'Sports, Jogging, Yoga or Badminton',
    tips: 'Physical movement releases endorphins, improving memory retention and sleep quality.'
  },
  {
    time: '06:30 PM – 08:30 PM',
    activity: 'Science & Social Science Intensive Study',
    focus: 'Physics Numericals, Chemistry Equations & History Map Work',
    tips: 'Write answers using concise bullet points and label diagrams neatly with pencil.'
  },
  {
    time: '08:30 PM – 09:15 PM',
    activity: 'Family Dinner & Casual Conversation',
    focus: 'Positive Atmosphere & Unwinding',
    tips: 'Discuss uplifting topics; keep academic stress out of dining conversations.'
  },
  {
    time: '09:15 PM – 10:30 PM',
    activity: 'Language Studies & Daily Journal Recap',
    focus: 'English / Hindi Writing, Literature Character Sketches',
    tips: 'Review tomorrow’s schedule; prepare school bag and uniform before sleeping.'
  },
  {
    time: '10:30 PM',
    activity: 'Restful Sleep (7.5 Hours Minimum)',
    focus: 'Deep Rest & Memory Consolidation',
    tips: 'Crucial for brain health and examination endurance.'
  }
];

export const STREAM_GUIDANCE = [
  {
    stream: 'Science Stream (PCM / PCB)',
    tag: 'Engineering, Medicine, Pure Sciences & Tech',
    subjects: 'Physics, Chemistry, Mathematics / Biology, English, Computer Science / Physical Education',
    suitability: 'Students with high curiosity in analytical problem-solving, mechanics, biological systems, and empirical inquiry. Opens pathways to IITs, AIIMS, NITs, Data Science, Research & Biotechnology.',
    recommendedMinScore: 'Recommended 75%+ in Class 10 Mathematics & Science'
  },
  {
    stream: 'Commerce Stream (With or Without Mathematics)',
    tag: 'Finance, Business, Economics & Management',
    subjects: 'Accountancy, Business Studies, Economics, English, Mathematics / Applied Maths / Informatics Practices',
    suitability: 'Students fascinated by business mechanics, stock markets, banking, corporate law, and economic policy. Opens doors to Chartered Accountancy (CA), CS, CFA, BBA, MBA, Economics Honors, and Entrepreneurship.',
    recommendedMinScore: 'Recommended 65%+ in Class 10 Mathematics & Social Science'
  },
  {
    stream: 'Humanities & Arts Stream',
    tag: 'Civil Services, Law, Journalism & Social Sciences',
    subjects: 'History, Political Science, Geography / Psychology, Economics, English, Fine Arts',
    suitability: 'Students passionate about public policy, governance, constitutional law, literature, media, diplomacy, and psychology. Prime foundation for UPSC Civil Services, CLAT (Corporate Law), Design & Journalism.',
    recommendedMinScore: 'Strong reading comprehension, essay writing & socio-political awareness'
  }
];
