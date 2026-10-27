import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="Academic Structure & Pedagogy"
      subtitle="Holistic CBSE curriculum designed to inspire curiosity, conceptual mastery, and ethical intellect"
      badge="CBSE Curriculum"
      badgeIcon="bi-journal-bookmark-fill"
      [highlightStat]="{ label: 'Academic Continuum', value: 'Nursery to Class 10' }">
    </app-page-banner>

    <!-- Academic Wings Overview -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-mortarboard-fill me-1"></i>Foundational to Secondary
          </span>
          <h2 class="section-title">Four Progressive Academic Stages</h2>
          <p class="section-subtitle">
            Our instructional roadmap is meticulously aligned with the National Curriculum Framework (NCF) and CBSE standards to ensure seamless developmental transitions.
          </p>
        </div>

        <div class="row g-4">
          <div *ngFor="let prog of academicPrograms; let i = index" class="col-lg-6">
            <div class="school-card p-4 h-100 d-flex flex-column border-top border-4" [ngClass]="getCardBorderClass(i)">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center gap-3">
                  <div class="prog-avatar-icon">
                    <i [class]="'bi ' + prog.icon"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-navy mb-0">{{ prog.name }}</h3>
                    <span class="text-warning small fw-semibold">{{ prog.classes }} ({{ prog.ageGroup }})</span>
                  </div>
                </div>
                <span class="badge bg-light text-secondary border">Stage {{ i + 1 }}</span>
              </div>

              <div class="prog-tagline p-2 rounded mb-3 small bg-light">
                <i class="bi bi-compass text-warning me-1"></i>
                <span class="fw-semibold text-navy">{{ prog.tagline }}</span>
              </div>

              <p class="small text-muted mb-3">{{ prog.description }}</p>

              <div class="mb-3">
                <span class="tiny-heading text-uppercase text-navy fw-bold d-block mb-2">Key Pedagogy Highlights:</span>
                <ul class="list-unstyled small text-secondary mb-0">
                  <li *ngFor="let h of prog.highlights" class="d-flex align-items-start gap-2 mb-1">
                    <i class="bi bi-check2-circle text-warning mt-1"></i>
                    <span>{{ h }}</span>
                  </li>
                </ul>
              </div>

              <div class="mt-auto pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div class="small text-muted">
                  <span class="fw-semibold text-navy">Curriculum:</span> {{ prog.curriculumOverview }}
                </div>
                <a *ngIf="prog.id === 'prog-secondary'" routerLink="/class-10" class="btn-gold btn-sm px-3">
                  <span>Class 10 Board Hub</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Methodology & NEP Alignment -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag gold">
            <i class="bi bi-lightbulb-fill me-1"></i>Instructional Design
          </span>
          <h2 class="section-title">Teaching Methodology & Classroom Practice</h2>
          <p class="section-subtitle">
            Moving beyond passive textbook memorization to active inquiry, scientific experimentation, and cross-disciplinary projects.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="method-icon mx-auto mb-3 bg-navy text-warning">
                <i class="bi bi-cpu-fill fs-3"></i>
              </div>
              <h4 class="h6 fw-bold text-navy mb-2">Experiential Learning</h4>
              <p class="small text-muted mb-0">
                Concepts are internalized through lab experiments, field observations, 3D digital simulations, and real-life mathematical applications.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="method-icon mx-auto mb-3 bg-gold text-dark">
                <i class="bi bi-puzzle-fill fs-3"></i>
              </div>
              <h4 class="h6 fw-bold text-navy mb-2">Interdisciplinary STEM</h4>
              <p class="small text-muted mb-0">
                Integrating coding, physics robotics, environmental science, and geography to build holistic problem-solving acumen.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="method-icon mx-auto mb-3 bg-navy text-warning">
                <i class="bi bi-chat-left-quote-fill fs-3"></i>
              </div>
              <h4 class="h6 fw-bold text-navy mb-2">Bilingual Competence</h4>
              <p class="small text-muted mb-0">
                Strong emphasis on English communicative fluency, public speaking, Sanskrit heritage, and Hindi literary expression.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="method-icon mx-auto mb-3 bg-gold text-dark">
                <i class="bi bi-heart-fill fs-3"></i>
              </div>
              <h4 class="h6 fw-bold text-navy mb-2">Life Skills & Values</h4>
              <p class="small text-muted mb-0">
                Daily moral science, yoga, mindfulness, collaborative teamwork, environmental hygiene, and empathy training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Assessment System & Examination Guidelines -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <span class="section-tag">
              <i class="bi bi-patch-check-fill me-1"></i>Evaluation Pattern
            </span>
            <h2 class="section-title">CBSE Assessment Architecture</h2>
            <p class="small text-muted mb-4">
              Our evaluation system adheres strictly to the CBSE Continuous and Comprehensive Evaluation (CCE) framework, combining periodic formative assessments with summative board readiness.
            </p>

            <div class="assessment-breakdown d-flex flex-column gap-3 mb-4">
              <div class="d-flex align-items-center p-3 rounded-3 bg-light border">
                <div class="assessment-pct fw-bold text-warning fs-3 me-3">80%</div>
                <div>
                  <h5 class="h6 fw-bold text-navy mb-1">Summative Board / Term Examination</h5>
                  <p class="tiny-text text-muted mb-0">Comprehensive written paper covering NCERT syllabus, analytical case-based questions, and problem solving.</p>
                </div>
              </div>

              <div class="d-flex align-items-center p-3 rounded-3 bg-light border">
                <div class="assessment-pct fw-bold text-navy fs-3 me-3">20%</div>
                <div>
                  <h5 class="h6 fw-bold text-navy mb-1">Continuous Internal Assessment</h5>
                  <p class="tiny-text text-muted mb-0">Periodic unit tests (5 marks), Subject Enrichment/Lab practicals (5 marks), Portfolio & notebook maintenance (5 marks), and Multiple assessments (5 marks).</p>
                </div>
              </div>
            </div>

            <div class="p-3 rounded-3 bg-warning bg-opacity-10 border border-warning">
              <div class="d-flex gap-2">
                <i class="bi bi-info-circle-fill text-warning fs-5"></i>
                <div class="small">
                  <span class="fw-bold text-dark">Pre-Primary & Primary Note:</span>
                  <span class="text-secondary"> Classes Nursery through 2 have no stressful formal written examinations; assessment is continuous, observational, and based on holistic progress cards.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="p-4 rounded-4 bg-navy text-white shadow-lg">
              <h3 class="h5 fw-bold text-warning mb-3">
                <i class="bi bi-calendar3 me-2"></i>Academic Calendar Milestones (Session 2026–27)
              </h3>
              <div class="calendar-timeline d-flex flex-column gap-3 small">
                <div class="timeline-item d-flex gap-3">
                  <div class="timeline-badge bg-warning text-dark fw-bold">APR</div>
                  <div>
                    <h6 class="text-white mb-0 fw-bold">New Session Commencement</h6>
                    <span class="text-white-50">Academic session begins across all classes (Nursery to 10).</span>
                  </div>
                </div>

                <div class="timeline-item d-flex gap-3">
                  <div class="timeline-badge bg-light text-navy fw-bold">JUL</div>
                  <div>
                    <h6 class="text-white mb-0 fw-bold">Periodic Test - 1 (PT-1)</h6>
                    <span class="text-white-50">Diagnostic evaluation of foundational chapter concepts.</span>
                  </div>
                </div>

                <div class="timeline-item d-flex gap-3">
                  <div class="timeline-badge bg-warning text-dark fw-bold">SEP</div>
                  <div>
                    <h6 class="text-white mb-0 fw-bold">Mid-Term Examination (Term-1)</h6>
                    <span class="text-white-50">Comprehensive evaluation followed by parent-teacher interaction.</span>
                  </div>
                </div>

                <div class="timeline-item d-flex gap-3">
                  <div class="timeline-badge bg-light text-navy fw-bold">DEC</div>
                  <div>
                    <h6 class="text-white mb-0 fw-bold">Pre-Board Examination - 1 (Class 10)</h6>
                    <span class="text-white-50">Full CBSE blueprint simulation under board exam conditions.</span>
                  </div>
                </div>

                <div class="timeline-item d-flex gap-3">
                  <div class="timeline-badge bg-warning text-dark fw-bold">FEB</div>
                  <div>
                    <h6 class="text-white mb-0 fw-bold">CBSE AISSE Board Exams Begin</h6>
                    <span class="text-white-50">Class 10 CBSE Board Examinations & Annual Exams for junior wings.</span>
                  </div>
                </div>
              </div>

              <div class="mt-4 pt-3 border-top border-white border-opacity-10 text-center">
                <a routerLink="/class-10" class="btn-gold w-100 py-2">
                  <i class="bi bi-award me-1"></i>Explore Class 10 Resources & Timetable
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-navy { background-color: #0B2545; }
    .bg-gold { background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); }
    .text-navy { color: #0B2545; }
    .tiny-text { font-size: 0.76rem; }
    .tiny-heading { font-size: 0.75rem; letter-spacing: 0.05em; }

    .prog-avatar-icon {
      width: 46px;
      height: 46px;
      border-radius: 12px;
      background: #FEF3C7;
      color: #D97706;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }

    .method-icon {
      width: 58px;
      height: 58px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .assessment-pct {
      min-width: 65px;
      font-family: var(--font-heading);
    }

    .timeline-badge {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 0.85rem;
    }

    .border-top-navy { border-top-color: #0B2545 !important; }
    .border-top-gold { border-top-color: #F59E0B !important; }
    .border-top-emerald { border-top-color: #059669 !important; }
    .border-top-saffron { border-top-color: #EA580C !important; }
  `]
})
export class AcademicsComponent {
  private schoolDataService = inject(SchoolDataService);
  readonly academicPrograms = this.schoolDataService.academicPrograms();

  getCardBorderClass(index: number): string {
    const classes = ['border-top-navy', 'border-top-gold', 'border-top-emerald', 'border-top-saffron'];
    return classes[index % classes.length];
  }
}
