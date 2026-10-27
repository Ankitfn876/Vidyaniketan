export interface Teacher {
  id: string;
  name: string;
  designation: string; // e.g., 'Senior TGT Science', 'Head of Mathematics', 'PRT Primary', etc.
  department: 'Pre-Primary' | 'Primary' | 'Middle School' | 'Secondary School' | 'Physical Education & Arts';
  subject: string; // e.g., 'Mathematics', 'Science', 'English', etc.
  qualification: string; // e.g., 'M.Sc. Mathematics, B.Ed.'
  experienceYears: number;
  bio: string;
  image: string;
  email: string;
  isHighlight?: boolean;
}

export type TeacherSubjectFilter = 'All' | 'Mathematics' | 'Science' | 'English' | 'Hindi' | 'Social Science' | 'Sanskrit' | 'Computer Science' | 'Physical Education';
