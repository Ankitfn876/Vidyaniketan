import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { StudentAchievement } from '../../core/data/results.data';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="Academic Results & Student Achievements"
      subtitle="Celebrating outstanding Class 10 CBSE Board performances, Olympiad accolades, and sporting championships"
      badge="Excellence in Action"
      badgeIcon="bi-trophy-fill"
      [highlightStat]="{ label: 'CBSE Pass Rate', value: '100% Pass' }">
    </app-page-banner>

    <!-- Demo Data Transparency Alert -->
    <div class="demo-banner-strip">
      <i class="bi bi-info-circle-fill text-warning"></i>
      <span>Demo Disclosure: Board examination scores and statistics displayed below represent sample demonstration data for the website design, awaiting certified administrative upload.</span>
    </div>

    <!-- Class 10 Board Result Highlights -->
    <section class="py-5 bg-white">
      <div class="container py-lg-3">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-patch-check-fill me-1"></i>AISSE Class 10 Board
          </span>
          <h2 class="section-title">Class 10 CBSE Board Examination Highlights</h2>
          <p class="section-subtitle">
            Consistent 100% participation and stellar performance demonstrating our committed academic mentoring and structured preparation.
          </p>
        </div>

        <!-- 4 Key Aggregate Metrics -->
        <div class="row g-4 mb-5 text-center">
          <div class="col-6 col-lg-3">
            <div class="p-4 rounded-4 bg-navy text-white h-100 shadow-sm border border-warning">
              <div class="display-5 fw-bold text-warning mb-1 font-heading">{{ results().passPercentage }}</div>
              <div class="fw-bold small text-light">Overall Pass Rate</div>
              <span class="tiny-text opacity-75">All candidates cleared</span>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="p-4 rounded-4 bg-light text-navy h-100 shadow-sm border">
              <div class="display-5 fw-bold text-navy mb-1 font-heading">{{ results().distinctionPercentage }}</div>
              <div class="fw-bold small text-secondary">First Division / Distinction</div>
              <span class="tiny-text text-muted">Scored 75% & Above</span>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="p-4 rounded-4 bg-light text-navy h-100 shadow-sm border">
              <div class="display-5 fw-bold text-navy mb-1 font-heading">{{ results().schoolAverage }}</div>
              <div class="fw-bold small text-secondary">Overall School Average</div>
              <span class="tiny-text text-muted">Across all subjects</span>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="p-4 rounded-4 bg-navy text-white h-100 shadow-sm border border-warning">
              <div class="display-5 fw-bold text-warning mb-1 font-heading">{{ results().totalAppeared }}</div>
              <div class="fw-bold small text-light">Candidates Appeared</div>
              <span class="tiny-text opacity-75">Session {{ results().session }}</span>
            </div>
          </div>
        </div>

        <!-- Subject Wise Distinction & Highest Score Table -->
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="school-card p-4 h-100">
              <h3 class="h5 fw-bold text-navy mb-3">
                <i class="bi bi-bar-chart-fill text-warning me-2"></i>Subject-Wise Performance Breakdown
              </h3>
              <div class="table-responsive">
                <table class="table table-hover align-middle mb-0 small">
                  <thead class="table-light">
                    <tr>
                      <th class="py-2">Subject</th>
                      <th class="py-2 text-center">% Scoring 90%+</th>
                      <th class="py-2 text-end">Highest Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let s of results().subjectHighlights">
                      <td class="fw-semibold py-2 text-navy">{{ s.subject }}</td>
                      <td class="text-center py-2"><span class="badge bg-navy-subtle text-navy">{{ s.percentAbove90 }}</span></td>
                      <td class="text-end fw-bold py-2 text-warning">{{ s.highestScore }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Academic Exemplars (Anonymized for Privacy) -->
          <div class="col-lg-6">
            <div class="school-card p-4 h-100">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h3 class="h5 fw-bold text-navy mb-0">
                  <i class="bi bi-award-fill text-warning me-2"></i>Academic Merit Exemplars
                </h3>
                <span class="badge bg-light text-secondary border">Anonymized for Privacy</span>
              </div>
              <div class="d-flex flex-column gap-3">
                <div *ngFor="let topper of results().streamToppers" class="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                  <div class="topper-avatar bg-navy text-warning fw-bold">
                    {{ topper.studentInitials }}
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center">
                      <h4 class="h6 fw-bold text-navy mb-0">{{ topper.title }}</h4>
                      <span class="badge bg-warning text-dark">{{ topper.scoreBand }}</span>
                    </div>
                    <span class="small text-muted">{{ topper.classGrade }} — {{ topper.remarks }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Co-Curricular & Sports Achievements Grid -->
    <section class="py-5 bg-light">
      <div class="container py-lg-3">
        <div class="text-center max-w-700 mx-auto mb-4">
          <span class="section-tag gold">
            <i class="bi bi-trophy-fill me-1"></i>Beyond Academics
          </span>
          <h2 class="section-title">Olympiad, Sports & Cultural Achievements</h2>
          <p class="section-subtitle">
            Our scholars excel across national science Olympiads, district football championships, STEM robotics expos, and classical fine arts.
          </p>
        </div>

        <!-- Filter category buttons -->
        <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
          <button
            type="button"
            (click)="selectedCategory.set('All')"
            class="filter-pill"
            [class.active]="selectedCategory() === 'All'">
            All Honors ({{ achievements().length }})
          </button>
          <button
            type="button"
            (click)="selectedCategory.set('Olympiad')"
            class="filter-pill"
            [class.active]="selectedCategory() === 'Olympiad'">
            Olympiads
          </button>
          <button
            type="button"
            (click)="selectedCategory.set('Sports')"
            class="filter-pill"
            [class.active]="selectedCategory() === 'Sports'">
            Sports & Athletics
          </button>
          <button
            type="button"
            (click)="selectedCategory.set('Science & Tech')"
            class="filter-pill"
            [class.active]="selectedCategory() === 'Science & Tech'">
            Science & Robotics
          </button>
          <button
            type="button"
            (click)="selectedCategory.set('Cultural & Arts')"
            class="filter-pill"
            [class.active]="selectedCategory() === 'Cultural & Arts'">
            Performing Arts
          </button>
        </div>

        <div class="row g-4">
          <div *ngFor="let ach of filteredAchievements()" class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100 d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge bg-warning text-dark small">{{ ach.level }} Level</span>
                <span class="text-muted small">{{ ach.year }}</span>
              </div>

              <div class="ach-icon-circle bg-navy text-warning mb-3">
                <i [class]="'bi ' + ach.icon + ' fs-3'"></i>
              </div>

              <h4 class="h6 fw-bold text-navy mb-1">{{ ach.title }}</h4>
              <div class="small text-warning fw-semibold mb-2">{{ ach.event }}</div>
              <p class="small text-muted flex-grow-1 mb-3">{{ ach.description }}</p>

              <div class="pt-2 border-top mt-auto d-flex justify-content-between align-items-center">
                <span class="badge bg-light text-navy border">{{ ach.category }}</span>
                <span class="fw-bold text-navy small"><i class="bi bi-star-fill text-warning me-1"></i>{{ ach.badge }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-navy { background-color: #0B2545; }
    .text-navy { color: #0B2545; }
    .bg-navy-subtle { background-color: #EDF3FA; }
    .max-w-700 { max-width: 700px; }
    .tiny-text { font-size: 0.72rem; }

    .topper-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #F59E0B;
      flex-shrink: 0;
    }

    .ach-icon-circle {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .filter-pill {
      background: #FFFFFF;
      border: 1.5px solid #CBD5E1;
      color: #334155;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.45rem 1.1rem;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .filter-pill:hover {
      border-color: #F59E0B;
      color: #B45309;
      background: #FEF3C7;
    }

    .filter-pill.active {
      background: #0B2545;
      border-color: #0B2545;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(11, 37, 69, 0.25);
    }
  `]
})
export class ResultsComponent {
  private schoolDataService = inject(SchoolDataService);

  readonly results = this.schoolDataService.resultHighlights;
  readonly achievements = this.schoolDataService.achievements;
  readonly selectedCategory = signal<string>('All');

  readonly filteredAchievements = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') return this.achievements();
    return this.achievements().filter(a => a.category === cat);
  });
}
