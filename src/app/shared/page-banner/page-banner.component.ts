import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-banner-section py-5 position-relative overflow-hidden">
      <!-- Decorative Backdrop Circles -->
      <div class="decor-circle circle-1"></div>
      <div class="decor-circle circle-2"></div>

      <div class="container position-relative z-1">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-2">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a routerLink="/" class="text-warning text-decoration-none"><i class="bi bi-house-door-fill me-1"></i>Home</a></li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">{{ title }}</li>
          </ol>
        </nav>

        <!-- Banner Content -->
        <div class="row align-items-center">
          <div class="col-lg-8">
            <span *ngIf="badge" class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
              <i *ngIf="badgeIcon" [class]="'bi ' + badgeIcon + ' me-1'"></i>
              {{ badge }}
            </span>
            <h1 class="display-5 fw-bold text-white mb-2">{{ title }}</h1>
            <p class="lead text-light mb-0 opacity-75 fs-6">{{ subtitle }}</p>
          </div>
          <div *ngIf="highlightStat" class="col-lg-4 d-none d-lg-block text-lg-end">
            <div class="banner-stat-card d-inline-block p-3 rounded-3 text-start">
              <div class="fs-4 fw-bold text-warning">{{ highlightStat.value }}</div>
              <div class="small text-white-50">{{ highlightStat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-banner-section {
      background: linear-gradient(135deg, #07192F 0%, #0B2545 60%, #133B6B 100%);
      border-bottom: 3px solid #F59E0B;
    }

    .decor-circle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }

    .circle-1 {
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0) 70%);
      top: -100px;
      right: -50px;
    }

    .circle-2 {
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
      bottom: -80px;
      left: 10%;
    }

    .breadcrumb-item + .breadcrumb-item::before {
      color: rgba(255, 255, 255, 0.4);
    }

    .banner-stat-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      min-width: 200px;
    }
  `]
})
export class PageBannerComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle: string = '';
  @Input() badge?: string;
  @Input() badgeIcon?: string;
  @Input() highlightStat?: { label: string; value: string };
}
