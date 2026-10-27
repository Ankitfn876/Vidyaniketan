import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { Class10Subject, Class10Resource } from '../../core/models/academic.model';

@Component({
  selector: 'app-class-10',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="Class 10 CBSE Board Hub"
      subtitle="Comprehensive curriculum blueprints, revision schedules, doubt-clearing clinics, model papers & stream counseling"
      badge="AISSE Class 10 Excellence"
      badgeIcon="bi-star-fill"
      [highlightStat]="{ label: 'CBSE Pass Record', value: '100% Pass Rate' }">
    </app-page-banner>

    <!-- Strategy Intro Strip -->
    <section class="py-4 bg-navy text-white border-bottom border-warning">
      <div class="container">
        <div class="row align-items-center g-3 text-center text-md-start">
          <div class="col-md-8">
            <h2 class="h5 fw-bold text-warning mb-1">
              <i class="bi bi-shield-check me-2"></i>Structured Preparation for CBSE AISSE Class 10
            </h2>
            <p class="small text-light opacity-90 mb-0">
              Our 360-degree approach blends syllabus completion by October with dedicated doubt-clearing clinics (2 PM – 4 PM), chapter-wise revision worksheets, and dual pre-board simulations.
            </p>
          </div>
          <div class="col-md-4 text-md-end">
            <a href="#resources" class="btn-gold btn-sm px-3">
              <i class="bi bi-download me-1"></i>Download Model Papers
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 1. Subjects Offered & Marks Blueprint -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-book me-1"></i>Curriculum Blueprint
          </span>
          <h2 class="section-title">Class 10 CBSE Subject Breakdown</h2>
          <p class="section-subtitle">
            All subjects follow the latest CBSE AISSE blueprints with 80 marks board theory and 20 marks internal/practical assessment.
          </p>
        </div>

        <div class="row g-4">
          <div *ngFor="let sub of class10Subjects()" class="col-lg-4 col-md-6">
            <div class="school-card p-4 h-100 d-flex flex-column">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <span class="badge bg-navy text-white small">Code: {{ sub.code }}</span>
                <span class="badge" [ngClass]="sub.type === 'Core' ? 'bg-warning text-dark' : 'bg-light text-secondary border'">
                  {{ sub.type }}
                </span>
              </div>

              <h3 class="h5 fw-bold text-navy mb-2">{{ sub.name }}</h3>
              <p class="small text-muted mb-3 flex-grow-1">{{ sub.description }}</p>

              <!-- Marks Assessment Box -->
              <div class="p-3 bg-light rounded-3 mb-3 small">
                <div class="d-flex justify-content-between mb-1">
                  <span class="text-muted">Board Theory Paper:</span>
                  <span class="fw-bold text-navy">{{ sub.boardAssessment.theoryMarks }} Marks</span>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <span class="text-muted">Internal / Practical:</span>
                  <span class="fw-bold text-navy">{{ sub.boardAssessment.practicalInternalMarks }} Marks</span>
                </div>
                <div class="d-flex justify-content-between border-top pt-1 mt-1">
                  <span class="text-muted">Exam Duration:</span>
                  <span class="fw-bold text-warning">{{ sub.boardAssessment.duration }}</span>
                </div>
              </div>

              <!-- Key Topics Toggle or Preview -->
              <div class="mb-3">
                <span class="tiny-title text-navy fw-bold text-uppercase d-block mb-1">Core Units Covered:</span>
                <ul class="list-unstyled small text-secondary mb-0">
                  <li *ngFor="let t of sub.keyTopics.slice(0, 3)" class="text-truncate">
                    <i class="bi bi-dot text-warning fs-5 align-middle"></i>{{ t }}
                  </li>
                </ul>
              </div>

              <div class="mt-auto pt-2 border-top">
                <span class="tiny-text text-muted">
                  <i class="bi bi-journal me-1"></i>Primary Text: {{ sub.recommendedBooks[0] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Daily Recommended Study Timetable -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag gold">
            <i class="bi bi-alarm-fill me-1"></i>Time Management
          </span>
          <h2 class="section-title">Sample Board Preparation Daily Timetable</h2>
          <p class="section-subtitle">
            A balanced schedule crafted by our academic counselors balancing intense revision, physical wellness, and restorative sleep.
          </p>
        </div>

        <div class="timetable-card school-card overflow-hidden">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-dark bg-navy text-white">
                <tr>
                  <th scope="col" style="width: 220px;" class="py-3 px-4">Time Slot</th>
                  <th scope="col" style="width: 260px;" class="py-3">Activity & Module</th>
                  <th scope="col" style="width: 280px;" class="py-3">Subject Focus</th>
                  <th scope="col" class="py-3 px-4">Academic Mentor Tips</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let slot of studyTimetable()">
                  <td class="py-3 px-4 fw-bold text-navy">
                    <i class="bi bi-clock text-warning me-2"></i>{{ slot.time }}
                  </td>
                  <td class="py-3 fw-semibold text-secondary">
                    {{ slot.activity }}
                  </td>
                  <td class="py-3">
                    <span class="badge bg-navy-subtle text-navy">{{ slot.focus }}</span>
                  </td>
                  <td class="py-3 px-4 text-muted small">
                    {{ slot.tips }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Downloadable Resources & Model Papers -->
    <section id="resources" class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-file-earmark-arrow-down-fill me-1"></i>Study Materials
          </span>
          <h2 class="section-title">Class 10 Downloadable Resources</h2>
          <p class="section-subtitle">
            Authentic sample question papers, formula sheets, map pointing workbooks, and practical laboratory viva guides.
          </p>
        </div>

        <div class="row g-4">
          <div *ngFor="let res of class10Resources()" class="col-md-6 col-lg-3">
            <div class="school-card p-3 h-100 d-flex flex-column border">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-warning text-dark small">{{ res.subject }}</span>
                <span class="text-muted tiny-text">{{ res.fileSize }}</span>
              </div>

              <div class="resource-icon-wrap my-2 text-center py-3 bg-light rounded-3">
                <i class="bi bi-file-earmark-pdf-fill text-danger display-6"></i>
              </div>

              <h4 class="h6 fw-bold text-navy mb-2 resource-title flex-grow-1">
                {{ res.title }}
              </h4>

              <div class="d-flex align-items-center justify-content-between small text-muted mb-3">
                <span><i class="bi bi-tag me-1"></i>{{ res.type }}</span>
                <span>{{ res.academicYear }}</span>
              </div>

              <button
                type="button"
                (click)="downloadDemoResource(res)"
                class="btn btn-outline-navy btn-sm w-100 mt-auto">
                <i class="bi bi-download me-1"></i>Download PDF
              </button>
            </div>
          </div>
        </div>

        <div class="alert alert-info mt-4 d-flex align-items-center gap-2 small">
          <i class="bi bi-info-circle-fill fs-5 text-primary"></i>
          <div>
            <strong>Notice on Board Papers:</strong> All practice resources provided above are curated sample demo materials aligned with official CBSE guidelines. Official board question papers are distributed strictly during designated examination dates.
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Post-Class 10 Stream Counseling & Guidance -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag gold">
            <i class="bi bi-signpost-2-fill me-1"></i>Life After Class 10
          </span>
          <h2 class="section-title">Stream Guidance & Career Pathways</h2>
          <p class="section-subtitle">
            Navigating the transition from Class 10 to Higher Secondary with personalized aptitude assessments and parental counseling.
          </p>
        </div>

        <div class="row g-4">
          <div *ngFor="let str of streamGuidance()" class="col-lg-4">
            <div class="school-card p-4 h-100 d-flex flex-column">
              <span class="badge bg-navy text-warning align-self-start mb-2 px-3 py-2 rounded-pill fw-bold">
                {{ str.stream }}
              </span>
              <h3 class="h6 fw-bold text-navy mb-2">{{ str.tag }}</h3>
              <p class="small text-muted mb-3">{{ str.suitability }}</p>

              <div class="p-3 bg-light rounded-3 mb-3 small flex-grow-1">
                <span class="fw-bold text-navy d-block mb-1">Key Subject Combinations:</span>
                <span class="text-secondary">{{ str.subjects }}</span>
              </div>

              <div class="p-2 rounded bg-warning bg-opacity-10 text-dark small fw-semibold text-center mt-auto">
                <i class="bi bi-check-circle-fill text-warning me-1"></i>
                {{ str.recommendedMinScore }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Examination Day Tips & Doubt Clinic CTA -->
    <section class="py-5 bg-navy text-white">
      <div class="container py-3">
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
              <i class="bi bi-clock-history me-1"></i>Daily 2:00 PM to 4:00 PM
            </span>
            <h3 class="h3 fw-bold text-white mb-2">Daily Doubt-Clearing Clinics for Class 10</h3>
            <p class="text-light opacity-90 small mb-0">
              Students facing queries in Mathematics proofs, Physics numericals, Organic Chemistry reactions, or Geography map plotting can meet dedicated senior educators for personalized 1-on-1 resolution every afternoon.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a routerLink="/contact" class="btn-gold py-3 px-4">
              <i class="bi bi-calendar-check me-1"></i>Schedule Teacher Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-navy { background-color: #0B2545; }
    .text-navy { color: #0B2545; }
    .tiny-title { font-size: 0.75rem; letter-spacing: 0.05em; }
    .tiny-text { font-size: 0.75rem; }

    .resource-icon-wrap {
      background: #F8FAFC;
    }

    .resource-title {
      line-height: 1.35;
      font-size: 0.95rem;
    }

    .bg-navy-subtle {
      background-color: #EDF3FA;
      color: #0B2545;
    }
  `]
})
export class Class10Component {
  private schoolDataService = inject(SchoolDataService);

  readonly class10Subjects = this.schoolDataService.class10Subjects;
  readonly class10Resources = this.schoolDataService.class10Resources;
  readonly studyTimetable = this.schoolDataService.studyTimetable;
  readonly streamGuidance = this.schoolDataService.streamGuidance;

  downloadDemoResource(resource: Class10Resource) {
    alert(`[Demo Download] Downloading ${resource.title} (${resource.fileSize}, ${resource.fileType}). In production, this delivers the certified CBSE resource document.`);
  }
}
