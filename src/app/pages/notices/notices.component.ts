import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { NoticeCardComponent } from '../../shared/notice-card/notice-card.component';
import { Notice } from '../../core/models/notice.model';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PageBannerComponent, NoticeCardComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="School Circulars & Notice Board"
      subtitle="Official announcements, CBSE examination alerts, holiday schedules, and parent circulars"
      badge="Administrative Desk"
      badgeIcon="bi-bell-fill"
      [highlightStat]="{ label: 'Active Circulars', value: 'Recent Updates' }">
    </app-page-banner>

    <!-- Search & Filter Controls -->
    <section class="py-4 bg-light border-bottom">
      <div class="container">
        <div class="p-4 bg-white rounded-4 shadow-sm border">
          <div class="row g-3 align-items-center">
            <!-- Search Keyword -->
            <div class="col-lg-4 col-md-6">
              <div class="input-group">
                <span class="input-group-text bg-light border-end-0">
                  <i class="bi bi-search text-warning"></i>
                </span>
                <input
                  type="text"
                  [ngModel]="searchQuery()"
                  (ngModelChange)="searchQuery.set($event)"
                  placeholder="Search notices by keyword or topic..."
                  class="form-control border-start-0 ps-0">
              </div>
            </div>

            <!-- Category Filter -->
            <div class="col-lg-4 col-md-6">
              <div class="d-flex align-items-center gap-2">
                <label class="small text-muted fw-bold text-nowrap mb-0">Category:</label>
                <select
                  [ngModel]="selectedCategory()"
                  (ngModelChange)="selectedCategory.set($event)"
                  class="form-select form-select-sm">
                  <option value="All">All Categories</option>
                  <option value="Admissions">Admissions</option>
                  <option value="Examinations">Examinations & Board</option>
                  <option value="Holidays">Holidays & Vacations</option>
                  <option value="Events">School Events & Sports</option>
                  <option value="Parent Meetings">Parent-Teacher Meetings (PTM)</option>
                  <option value="General Announcements">General Circulars</option>
                </select>
              </div>
            </div>

            <!-- Academic Year Filter & Reset -->
            <div class="col-lg-4 col-md-12">
              <div class="d-flex align-items-center justify-content-between gap-2">
                <div class="d-flex align-items-center gap-2 flex-grow-1">
                  <label class="small text-muted fw-bold text-nowrap mb-0">Session:</label>
                  <select
                    [ngModel]="selectedYear()"
                    (ngModelChange)="selectedYear.set($event)"
                    class="form-select form-select-sm">
                    <option value="All">All Sessions</option>
                    <option value="2026-2027">2026–2027</option>
                    <option value="2025-2026">2025–2026</option>
                  </select>
                </div>

                <button
                  type="button"
                  (click)="resetFilters()"
                  class="btn btn-outline-secondary btn-sm px-3"
                  title="Reset Search and Filters">
                  <i class="bi bi-arrow-counterclockwise"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Count -->
        <div class="d-flex justify-content-between align-items-center mt-3 small text-muted">
          <div>
            Showing <strong class="text-navy">{{ filteredNotices().length }}</strong> notices (Newest first)
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

    <!-- Notices Grid -->
    <section class="py-5 bg-white">
      <div class="container py-lg-3">
        <div class="row g-4">
          <div *ngFor="let notice of filteredNotices()" class="col-md-6 col-lg-4">
            <app-notice-card [notice]="notice" (onSelectNotice)="openNoticeModal($event)"></app-notice-card>
          </div>

          <!-- Empty State -->
          <div *ngIf="filteredNotices().length === 0" class="col-12 text-center py-5">
            <div class="p-5 bg-light rounded-4 max-w-500 mx-auto">
              <i class="bi bi-bell-slash-fill display-4 text-muted d-block mb-3"></i>
              <h4 class="h5 fw-bold text-navy mb-2">No Notices Found</h4>
              <p class="small text-muted mb-3">
                No announcement matches the search query or chosen filter criteria.
              </p>
              <button type="button" (click)="resetFilters()" class="btn btn-navy btn-sm px-4">
                View All Notices
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notice Detail Lightbox Modal -->
    <div *ngIf="activeNotice()" class="notice-modal-backdrop" (click)="closeNoticeModal()">
      <div class="notice-modal-dialog" (click)="$event.stopPropagation()">
        <!-- Header -->
        <div class="p-4 bg-navy text-white d-flex justify-content-between align-items-center">
          <div>
            <span class="badge bg-warning text-dark me-2">{{ activeNotice()?.category }}</span>
            <span class="small opacity-75">Academic Session {{ activeNotice()?.academicYear }}</span>
          </div>
          <button type="button" class="btn-close btn-close-white" (click)="closeNoticeModal()" aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="p-4 bg-white">
          <div class="d-flex align-items-center gap-2 mb-2 text-muted small">
            <i class="bi bi-calendar3 text-warning"></i>
            <span>Published on: {{ formatDate(activeNotice()?.date) }}</span>
            <span class="mx-1">•</span>
            <span>Issued By: <strong>{{ activeNotice()?.issuedBy }}</strong></span>
          </div>

          <h3 class="h5 fw-bold text-navy mb-3">{{ activeNotice()?.title }}</h3>

          <div class="p-3 bg-light rounded-3 mb-4 text-secondary small line-height-relaxed">
            {{ activeNotice()?.description }}
          </div>

          <div class="p-3 bg-warning bg-opacity-10 rounded-3 mb-4 small d-flex justify-content-between align-items-center">
            <div>
              <span class="text-muted d-block tiny-text">Audience / Applicability:</span>
              <strong class="text-navy">{{ activeNotice()?.targetAudience }}</strong>
            </div>
            <button
              *ngIf="activeNotice()?.downloadFilename"
              type="button"
              (click)="downloadAttachment(activeNotice())"
              class="btn-gold btn-sm px-3">
              <i class="bi bi-download me-1"></i>Download Circular PDF
            </button>
          </div>

          <div class="text-end border-top pt-3">
            <button type="button" (click)="closeNoticeModal()" class="btn btn-outline-secondary btn-sm px-4">
              Close Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-navy { background-color: #0B2545; }
    .text-navy { color: #0B2545; }
    .max-w-500 { max-width: 500px; }
    .line-height-relaxed { line-height: 1.7; }
    .tiny-text { font-size: 0.75rem; }

    .notice-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1050;
      background: rgba(7, 25, 47, 0.75);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .notice-modal-dialog {
      max-width: 620px;
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
    }
  `]
})
export class NoticesComponent {
  private schoolDataService = inject(SchoolDataService);

  readonly allNotices = this.schoolDataService.notices;
  readonly searchQuery = signal<string>('');
  readonly selectedCategory = signal<string>('All');
  readonly selectedYear = signal<string>('All');

  readonly activeNotice = signal<Notice | null>(null);

  readonly filteredNotices = computed(() => {
    return this.schoolDataService.filterNotices(
      this.searchQuery(),
      this.selectedCategory(),
      this.selectedYear()
    );
  });

  readonly isFiltered = computed(() => {
    return this.searchQuery().trim() !== '' ||
      this.selectedCategory() !== 'All' ||
      this.selectedYear() !== 'All';
  });

  resetFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('All');
    this.selectedYear.set('All');
  }

  openNoticeModal(notice: Notice) {
    this.activeNotice.set(notice);
  }

  closeNoticeModal() {
    this.activeNotice.set(null);
  }

  formatDate(dateStr?: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  downloadAttachment(notice?: Notice | null) {
    if (!notice) return;
    alert(`[Demo Download] Downloading circular document: ${notice.downloadFilename}`);
  }
}
