import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notice } from '../../core/models/notice.model';

@Component({
  selector: 'app-notice-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="school-card notice-card p-4 h-100 d-flex flex-column" [class.is-important]="notice.isImportant">
      <!-- Top Badges & Meta -->
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div class="d-flex align-items-center gap-2">
          <span class="badge" [ngClass]="getCategoryBadgeClass(notice.category)">
            {{ notice.category }}
          </span>
          <span *ngIf="notice.isImportant" class="badge bg-danger text-white pulse-badge">
            <i class="bi bi-exclamation-triangle-fill me-1"></i>Urgent
          </span>
        </div>
        <div class="notice-date text-muted small">
          <i class="bi bi-calendar3 me-1 text-warning"></i>
          {{ formatDate(notice.date) }}
        </div>
      </div>

      <!-- Title & Summary -->
      <h3 class="h6 fw-bold text-navy mb-2 notice-title">
        {{ notice.title }}
      </h3>
      <p class="small text-muted mb-3 flex-grow-1">
        {{ notice.summary }}
      </p>

      <!-- Target & Issuer Info -->
      <div class="notice-meta d-flex justify-content-between align-items-center small py-2 border-top border-light-subtle mb-3">
        <span class="text-secondary">
          <i class="bi bi-person-check me-1"></i>{{ notice.targetAudience }}
        </span>
        <span class="text-muted fst-italic">
          {{ notice.issuedBy }}
        </span>
      </div>

      <!-- Actions -->
      <div class="d-flex align-items-center gap-2 mt-auto">
        <button
          type="button"
          (click)="onSelectNotice.emit(notice)"
          class="btn btn-outline-navy btn-sm flex-grow-1 py-1 px-3">
          <i class="bi bi-eye me-1"></i>Read Details
        </button>

        <button
          *ngIf="notice.downloadFilename"
          type="button"
          (click)="triggerDownload(notice)"
          class="btn btn-light btn-sm text-navy border"
          title="Download Official Circular">
          <i class="bi bi-download"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .notice-card {
      background: #FFFFFF;
      transition: all 0.25s ease;
      border-left: 4px solid #CBD5E1;
    }

    .notice-card.is-important {
      border-left: 4px solid #EF4444;
      background: #FFFBFB;
    }

    .notice-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(11, 37, 69, 0.08);
      border-color: #F59E0B;
    }

    .text-navy {
      color: #0B2545;
    }

    .notice-title {
      line-height: 1.4;
    }

    .pulse-badge {
      animation: pulseAlert 2s infinite;
    }

    @keyframes pulseAlert {
      0% { opacity: 1; }
      50% { opacity: 0.75; }
      100% { opacity: 1; }
    }
  `]
})
export class NoticeCardComponent {
  @Input({ required: true }) notice!: Notice;
  @Output() onSelectNotice = new EventEmitter<Notice>();

  formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return isNaN(d.getTime())
      ? dateStr
      : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  getCategoryBadgeClass(category: string): string {
    switch (category) {
      case 'Admissions':
        return 'bg-warning text-dark';
      case 'Examinations':
        return 'bg-primary text-white';
      case 'Holidays':
        return 'bg-success text-white';
      case 'Parent Meetings':
        return 'bg-info text-dark';
      case 'Events':
        return 'bg-secondary text-white';
      default:
        return 'bg-dark text-white';
    }
  }

  triggerDownload(notice: Notice) {
    alert(`[Demo Download] Initiating download of official circular: ${notice.downloadFilename}`);
  }
}
