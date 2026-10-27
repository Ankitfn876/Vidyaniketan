import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { TeacherCardComponent } from '../../shared/teacher-card/teacher-card.component';
import { Teacher } from '../../core/models/teacher.model';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PageBannerComponent, TeacherCardComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="Our Accomplished Faculty"
      subtitle="Passionate educators, scholars, and mentors shaping young minds with patience, expertise, and moral guidance"
      badge="Academic Leadership"
      badgeIcon="bi-people-fill"
      [highlightStat]="{ label: 'Faculty Count', value: '54+ Teachers' }">
    </app-page-banner>

    <!-- Search & Filter Controls -->
    <section class="py-4 bg-light border-bottom">
      <div class="container">
        <div class="p-4 bg-white rounded-4 shadow-sm border">
          <div class="row g-3 align-items-center">
            <!-- Search Input -->
            <div class="col-lg-4 col-md-6">
              <div class="input-group">
                <span class="input-group-text bg-light border-end-0">
                  <i class="bi bi-search text-warning"></i>
                </span>
                <input
                  type="text"
                  [ngModel]="searchQuery()"
                  (ngModelChange)="searchQuery.set($event)"
                  placeholder="Search by teacher name or subject..."
                  class="form-control border-start-0 ps-0">
              </div>
            </div>

            <!-- Subject Filter -->
            <div class="col-lg-4 col-md-6">
              <div class="d-flex align-items-center gap-2">
                <label class="small text-muted fw-bold text-nowrap mb-0">Subject:</label>
                <select
                  [ngModel]="selectedSubject()"
                  (ngModelChange)="selectedSubject.set($event)"
                  class="form-select form-select-sm">
                  <option value="All">All Subjects</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science (Physics / Chem / Bio)</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi & Sanskrit</option>
                  <option value="Social Science">Social Science</option>
                  <option value="Computer Science">Computer Science & IT</option>
                  <option value="Physical Education">Physical Education & Sports</option>
                </select>
              </div>
            </div>

            <!-- Department Filter -->
            <div class="col-lg-4 col-md-12">
              <div class="d-flex align-items-center justify-content-between gap-2">
                <div class="d-flex align-items-center gap-2 flex-grow-1">
                  <label class="small text-muted fw-bold text-nowrap mb-0">Wing:</label>
                  <select
                    [ngModel]="selectedDept()"
                    (ngModelChange)="selectedDept.set($event)"
                    class="form-select form-select-sm">
                    <option value="All">All Wings</option>
                    <option value="Pre-Primary">Pre-Primary (Nursery - UKG)</option>
                    <option value="Primary">Primary Wing (Classes 1–5)</option>
                    <option value="Middle School">Middle Wing (Classes 6–8)</option>
                    <option value="Secondary School">Secondary Wing (Classes 9–10)</option>
                    <option value="Physical Education & Arts">Physical Education & Arts</option>
                  </select>
                </div>

                <button
                  type="button"
                  (click)="resetFilters()"
                  class="btn btn-outline-secondary btn-sm text-nowrap px-3"
                  title="Reset Search and Filters">
                  <i class="bi bi-arrow-counterclockwise"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Results Counter & Active Pills -->
        <div class="d-flex justify-content-between align-items-center mt-3 small text-muted">
          <div>
            Showing <strong class="text-navy">{{ filteredTeachers().length }}</strong> of {{ allTeachers().length }} educators
          </div>
          <div *ngIf="isFiltered()" class="d-flex align-items-center gap-2">
            <span class="badge bg-warning text-dark">Filtered</span>
            <button type="button" (click)="resetFilters()" class="btn btn-link btn-sm p-0 text-decoration-none text-muted">
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Cards Grid -->
    <section class="py-5 bg-white">
      <div class="container py-lg-3">
        <div class="row g-4">
          <div *ngFor="let teacher of filteredTeachers()" class="col-md-6 col-lg-4">
            <app-teacher-card [teacher]="teacher"></app-teacher-card>
          </div>

          <!-- Empty State -->
          <div *ngIf="filteredTeachers().length === 0" class="col-12 text-center py-5">
            <div class="p-5 bg-light rounded-4 max-w-500 mx-auto">
              <i class="bi bi-person-x-fill display-4 text-muted d-block mb-3"></i>
              <h4 class="h5 fw-bold text-navy mb-2">No Faculty Members Found</h4>
              <p class="small text-muted mb-3">
                No teacher profile matches your search keyword or selected subject/wing filter.
              </p>
              <button type="button" (click)="resetFilters()" class="btn btn-navy btn-sm px-4">
                View All Educators
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teacher Qualifications & Training Standards Banner -->
    <section class="py-5 bg-light">
      <div class="container py-lg-3">
        <div class="p-4 p-md-5 rounded-4 bg-navy text-white">
          <div class="row align-items-center g-4">
            <div class="col-lg-8">
              <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
                Continuous Professional Development
              </span>
              <h3 class="h4 fw-bold text-white mb-2">Committed to CBSE Capacity Building & Excellence</h3>
              <p class="small text-light opacity-90 mb-0">
                All VNPS teachers undergo mandatory annual CBSE Capacity Building Workshops, NEP 2020 pedagogical modules, child psychology sessions, and digital smart board certifications to deliver modern, compassionate instruction.
              </p>
            </div>
            <div class="col-lg-4 text-lg-end">
              <a routerLink="/about" class="btn-gold py-2 px-4">
                <span>Learn About School Philosophy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-navy { background-color: #0B2545; }
    .text-navy { color: #0B2545; }
    .max-w-500 { max-width: 500px; }
  `]
})
export class FacultyComponent {
  private schoolDataService = inject(SchoolDataService);

  readonly allTeachers = this.schoolDataService.teachers;
  readonly searchQuery = signal<string>('');
  readonly selectedSubject = signal<string>('All');
  readonly selectedDept = signal<string>('All');

  readonly filteredTeachers = computed(() => {
    return this.schoolDataService.filterTeachers(
      this.searchQuery(),
      this.selectedSubject(),
      this.selectedDept()
    );
  });

  readonly isFiltered = computed(() => {
    return this.searchQuery().trim() !== '' ||
      this.selectedSubject() !== 'All' ||
      this.selectedDept() !== 'All';
  });

  resetFilters() {
    this.searchQuery.set('');
    this.selectedSubject.set('All');
    this.selectedDept.set('All');
  }
}
