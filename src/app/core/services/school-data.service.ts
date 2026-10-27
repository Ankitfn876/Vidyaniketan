import { Injectable, signal, computed } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SCHOOL_CONFIG, SchoolConfig } from '../config/school-config';
import { Teacher, TeacherSubjectFilter } from '../models/teacher.model';
import { TEACHERS_DATA } from '../data/teachers.data';
import { Notice, NoticeCategory } from '../models/notice.model';
import { NOTICES_DATA } from '../data/notices.data';
import { GalleryImage, GalleryCategory } from '../models/gallery.model';
import { GALLERY_DATA } from '../data/gallery.data';
import { Facility } from '../models/facility.model';
import { FACILITIES_DATA } from '../data/facilities.data';
import {
  AcademicProgram,
  Class10Subject,
  Class10Resource,
  TimetableSlot
} from '../models/academic.model';
import {
  ACADEMIC_PROGRAMS,
  CLASS_10_SUBJECTS,
  CLASS_10_RESOURCES,
  SAMPLE_STUDY_TIMETABLE,
  STREAM_GUIDANCE
} from '../data/academics.data';
import {
  RESULTS_DEMO_DATA,
  ACHIEVEMENTS_DATA,
  AcademicResultHighlight,
  StudentAchievement
} from '../data/results.data';
import { TESTIMONIALS_DATA, Testimonial } from '../data/testimonials.data';
import { FAQS_DATA, SchoolFaq } from '../data/faqs.data';
import {
  AdmissionApplication,
  AdmissionSubmissionResult
} from '../models/admission.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {
  // Signals for reactive state
  readonly config = signal<SchoolConfig>(SCHOOL_CONFIG);
  readonly teachers = signal<Teacher[]>(TEACHERS_DATA);
  readonly notices = signal<Notice[]>(NOTICES_DATA);
  readonly galleryImages = signal<GalleryImage[]>(GALLERY_DATA);
  readonly facilities = signal<Facility[]>(FACILITIES_DATA);
  readonly academicPrograms = signal<AcademicProgram[]>(ACADEMIC_PROGRAMS);
  readonly class10Subjects = signal<Class10Subject[]>(CLASS_10_SUBJECTS);
  readonly class10Resources = signal<Class10Resource[]>(CLASS_10_RESOURCES);
  readonly studyTimetable = signal<TimetableSlot[]>(SAMPLE_STUDY_TIMETABLE);
  readonly streamGuidance = signal(STREAM_GUIDANCE);
  readonly resultHighlights = signal<AcademicResultHighlight>(RESULTS_DEMO_DATA);
  readonly achievements = signal<StudentAchievement[]>(ACHIEVEMENTS_DATA);
  readonly testimonials = signal<Testimonial[]>(TESTIMONIALS_DATA);
  readonly faqs = signal<SchoolFaq[]>(FAQS_DATA);

  // Computed signals for high-performance home displays
  readonly highlightedTeachers = computed(() =>
    this.teachers().filter(t => t.isHighlight)
  );

  readonly recentNotices = computed(() =>
    [...this.notices()].slice(0, 4)
  );

  readonly previewGallery = computed(() =>
    [...this.galleryImages()].slice(0, 8)
  );

  readonly enabledFacilities = computed(() =>
    this.facilities().filter(f => f.enabled)
  );

  /**
   * Filter teachers by search keyword, subject specialization, and department
   */
  filterTeachers(search: string = '', subject: string = 'All', department: string = 'All'): Teacher[] {
    return this.teachers().filter(teacher => {
      const matchesSearch = search.trim() === '' ||
        teacher.name.toLowerCase().includes(search.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(search.toLowerCase()) ||
        teacher.qualification.toLowerCase().includes(search.toLowerCase());

      const matchesSubject = subject === 'All' || teacher.subject === subject;
      const matchesDept = department === 'All' || teacher.department === department;

      return matchesSearch && matchesSubject && matchesDept;
    });
  }

  /**
   * Filter notices by query, category, and academic year
   */
  filterNotices(search: string = '', category: string = 'All', year: string = 'All'): Notice[] {
    return this.notices().filter(notice => {
      const matchesSearch = search.trim() === '' ||
        notice.title.toLowerCase().includes(search.toLowerCase()) ||
        notice.summary.toLowerCase().includes(search.toLowerCase()) ||
        notice.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === 'All' || notice.category === category;
      const matchesYear = year === 'All' || notice.academicYear === year;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }

  /**
   * Filter gallery by category
   */
  filterGallery(category: string = 'All'): GalleryImage[] {
    if (category === 'All') {
      return this.galleryImages();
    }
    return this.galleryImages().filter(img => img.category === category);
  }

  /**
   * Demo Admission Application Submission
   * Simulates network latency, generates reference code, does not save personal info to localStorage
   */
  submitAdmission(application: AdmissionApplication): Observable<AdmissionSubmissionResult> {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const sessionYear = this.config().admissions.session.split('–')[0] || '2026';
    const appNumber = `VNPS-${sessionYear}-ADM${randomSuffix}`;

    const result: AdmissionSubmissionResult = {
      success: true,
      applicationNumber: appNumber,
      submittedAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      studentName: application.student.fullName,
      classAppliedFor: application.student.classAppliedFor,
      parentContact: application.parent.primaryMobile,
      message: 'Demo admission form validated successfully! This is a frontend demo confirmation.'
    };

    return of(result).pipe(delay(600));
  }

  /**
   * Demo Contact Form Submission
   */
  submitContact(data: { name: string; mobile: string; email?: string; subject: string; message: string }): Observable<{ success: boolean; message: string; refId: string }> {
    const refId = `INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    return of({
      success: true,
      refId,
      message: 'Thank you! Your demo enquiry has been received. In production, this connects to the school administrative email/SMS API.'
    }).pipe(delay(500));
  }
}
