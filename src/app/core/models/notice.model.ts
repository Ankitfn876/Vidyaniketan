export type NoticeCategory =
  | 'Admissions'
  | 'Examinations'
  | 'Holidays'
  | 'Events'
  | 'Parent Meetings'
  | 'General Announcements';

export interface Notice {
  id: string;
  title: string;
  category: NoticeCategory;
  date: string; // ISO format or display format 'YYYY-MM-DD'
  academicYear: string; // e.g. '2025-2026', '2026-2027'
  isImportant: boolean;
  summary: string;
  description: string;
  issuedBy: string;
  targetAudience: string; // e.g. 'Classes 9 & 10 Parents', 'All Parents', 'New Admissions'
  downloadUrl?: string;
  downloadFilename?: string;
}
