export interface AcademicProgram {
  id: string;
  name: string;
  classes: string;
  ageGroup: string;
  tagline: string;
  description: string;
  icon: string;
  highlights: string[];
  curriculumOverview: string;
  keySubjects: string[];
}

export interface Class10Subject {
  code: string;
  name: string;
  type: 'Core' | 'Language' | 'Skill / Optional';
  description: string;
  boardAssessment: {
    theoryMarks: number;
    practicalInternalMarks: number;
    duration: string;
  };
  keyTopics: string[];
  recommendedBooks: string[];
}

export interface Class10Resource {
  id: string;
  title: string;
  subject: string;
  type: 'Model Question Paper' | 'Practice Worksheet' | 'Revision Notes' | 'Practical Exam Guide' | 'Syllabus';
  academicYear: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
}

export interface TimetableSlot {
  time: string;
  activity: string;
  focus: string;
  tips: string;
}
