export interface AcademicResultHighlight {
  session: string;
  totalAppeared: number;
  passPercentage: string;
  distinctionPercentage: string;
  schoolAverage: string;
  streamToppers: {
    title: string;
    scoreBand: string;
    studentInitials: string; // anonymized for privacy
    classGrade: string;
    remarks: string;
  }[];
  subjectHighlights: {
    subject: string;
    percentAbove90: string;
    highestScore: string;
  }[];
}

export interface StudentAchievement {
  id: string;
  category: 'Olympiad' | 'Sports' | 'Science & Tech' | 'Cultural & Arts';
  title: string;
  event: string;
  level: 'National' | 'State' | 'District' | 'Inter-School';
  year: string;
  description: string;
  icon: string;
  badge: string;
}

export const RESULTS_DEMO_DATA: AcademicResultHighlight = {
  session: '2024–2025 (Demo Board Data)',
  totalAppeared: 94,
  passPercentage: '100%',
  distinctionPercentage: '86.2%',
  schoolAverage: '84.8%',
  streamToppers: [
    {
      title: 'School Academic Exemplar',
      scoreBand: '97.4%',
      studentInitials: 'A. S.',
      classGrade: 'Class 10 CBSE AISSE',
      remarks: 'Perfect 100 in Mathematics & Science'
    },
    {
      title: 'Second Highest Aggregate',
      scoreBand: '96.8%',
      studentInitials: 'M. P.',
      classGrade: 'Class 10 CBSE AISSE',
      remarks: 'Perfect 100 in Social Science'
    },
    {
      title: 'Third Highest Aggregate',
      scoreBand: '96.2%',
      studentInitials: 'R. K.',
      classGrade: 'Class 10 CBSE AISSE',
      remarks: 'Highest aggregate in Language & Computer Science'
    }
  ],
  subjectHighlights: [
    { subject: 'Mathematics (Standard)', percentAbove90: '48% Students', highestScore: '100 / 100' },
    { subject: 'Science', percentAbove90: '44% Students', highestScore: '100 / 100' },
    { subject: 'Social Science', percentAbove90: '52% Students', highestScore: '100 / 100' },
    { subject: 'English Language', percentAbove90: '61% Students', highestScore: '98 / 100' },
    { subject: 'Computer Applications', percentAbove90: '74% Students', highestScore: '100 / 100' }
  ]
};

export const ACHIEVEMENTS_DATA: StudentAchievement[] = [
  {
    id: 'ach-1',
    category: 'Olympiad',
    title: 'Gold Medal at National Science Olympiad (NSO)',
    event: 'Science Olympiad Foundation (SOF)',
    level: 'National',
    year: '2025',
    description: 'School team secured 3 Gold Medals and 5 Distinction Certificates among 1,200 participating schools nationwide.',
    icon: 'bi-award-fill',
    badge: 'National Rank 14'
  },
  {
    id: 'ach-2',
    category: 'Sports',
    title: 'Winners – Inter-School District Football Championship',
    event: 'Bhopal District Schools Athletic Association',
    level: 'District',
    year: '2025',
    description: 'Under-16 boys football squad clinched the district championship trophy undefeated across 6 tournament matches.',
    icon: 'bi-trophy-fill',
    badge: 'Gold Trophy'
  },
  {
    id: 'ach-3',
    category: 'Science & Tech',
    title: 'Best Innovation Award at State Robotics Challenge',
    event: 'MP Council of Science & Technology STEM Expo',
    level: 'State',
    year: '2025',
    description: 'Class 9 student project on "Automated Drip Irrigation with Soil Moisture Telemetry" awarded 1st prize.',
    icon: 'bi-cpu-fill',
    badge: 'State 1st Prize'
  },
  {
    id: 'ach-4',
    category: 'Cultural & Arts',
    title: 'Championship Trophy in Inter-School Classical Orchestra',
    event: 'Bhopal Sahodaya Schools Cultural Conclave',
    level: 'Inter-School',
    year: '2025',
    description: 'School Indian Classical Orchestra troupe earned standing ovation and First Position among 28 competing institutions.',
    icon: 'bi-music-note-beamed',
    badge: 'Best Ensemble'
  },
  {
    id: 'ach-5',
    category: 'Olympiad',
    title: 'International Mathematics Olympiad (IMO) Distinction',
    event: 'SOF Olympiad Examinations',
    level: 'National',
    year: '2024',
    description: '12 students from middle and secondary wings qualified for Level 2 international stage with merit scholarships.',
    icon: 'bi-calculator-fill',
    badge: '12 Qualifiers'
  },
  {
    id: 'ach-6',
    category: 'Sports',
    title: 'Silver Medal in State Taekwondo & Karate Championship',
    event: 'Madhya Pradesh State Martial Arts Meet',
    level: 'State',
    year: '2024',
    description: 'Under-14 girls martial arts contingent bagged 2 Silver and 3 Bronze medals in sparring divisions.',
    icon: 'bi-shield-shaded',
    badge: 'State Silver'
  }
];
