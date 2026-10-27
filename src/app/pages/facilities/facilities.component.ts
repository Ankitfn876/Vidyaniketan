import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { Facility } from '../../core/models/facility.model';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="Campus Infrastructure & Facilities"
      subtitle="Modern, safe, eco-conscious learning environments designed to nurture academic brilliance, athletic vigor, and child safety"
      badge="Modern Infrastructure"
      badgeIcon="bi-building-check"
      [highlightStat]="{ label: 'Campus Area', value: '5+ Acres Green Campus' }">
    </app-page-banner>

    <!-- Category Filter Bar -->
    <section class="py-4 bg-light border-bottom">
      <div class="container d-flex flex-wrap justify-content-center gap-2">
        <button
          type="button"
          (click)="selectedCategory.set('All')"
          class="filter-pill"
          [class.active]="selectedCategory() === 'All'">
          All Facilities ({{ facilities().length }})
        </button>
        <button
          type="button"
          (click)="selectedCategory.set('Academics & Tech')"
          class="filter-pill"
          [class.active]="selectedCategory() === 'Academics & Tech'">
          Academics & Tech
        </button>
        <button
          type="button"
          (click)="selectedCategory.set('Sports & Health')"
          class="filter-pill"
          [class.active]="selectedCategory() === 'Sports & Health'">
          Sports & Fitness
        </button>
        <button
          type="button"
          (click)="selectedCategory.set('Safety & Infrastructure')"
          class="filter-pill"
          [class.active]="selectedCategory() === 'Safety & Infrastructure'">
          Campus Safety & Transit
        </button>
      </div>
    </section>

    <!-- Facilities List with Alternating Layout -->
    <section class="py-5 bg-white">
      <div class="container py-lg-3">
        <div class="d-flex flex-column gap-5">
          <div
            *ngFor="let fac of filteredFacilities(); let even = even"
            [id]="fac.id"
            class="facility-row p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
            <div class="row align-items-center g-4 g-lg-5" [ngClass]="{ 'flex-row-reverse': !even }">
              <!-- Image Column -->
              <div class="col-lg-6">
                <div class="facility-image-card position-relative overflow-hidden rounded-4 shadow">
                  <img
                    [src]="fac.image"
                    [alt]="fac.name"
                    (error)="onImgError($event)"
                    loading="lazy"
                    class="facility-img w-100">
                  <div class="facility-category-badge position-absolute top-0 start-0 m-3">
                    <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">
                      {{ fac.category }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Content Column -->
              <div class="col-lg-6">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <div class="facility-icon-circle bg-navy text-warning">
                    <i [class]="'bi ' + fac.icon + ' fs-4'"></i>
                  </div>
                  <h3 class="h4 fw-bold text-navy mb-0">{{ fac.name }}</h3>
                </div>

                <p class="lead text-muted fs-6 mb-3">
                  {{ fac.shortDesc }}
                </p>

                <p class="small text-secondary mb-4">
                  {{ fac.fullDesc }}
                </p>

                <!-- Features Checklist -->
                <div class="facility-features-box p-3 bg-light rounded-3 mb-4">
                  <span class="tiny-title text-navy fw-bold text-uppercase d-block mb-2">Key Specifications & Features:</span>
                  <ul class="list-unstyled small text-secondary mb-0 d-flex flex-column gap-1">
                    <li *ngFor="let feat of fac.features" class="d-flex align-items-start gap-2">
                      <i class="bi bi-check2-circle text-warning mt-1"></i>
                      <span>{{ feat }}</span>
                    </li>
                  </ul>
                </div>

                <a routerLink="/contact" class="btn-outline-navy btn-sm px-4">
                  <i class="bi bi-calendar-event me-1"></i>Request Campus Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Campus Safety & Hygiene Pledge -->
    <section class="py-5 bg-navy text-white">
      <div class="container py-lg-3">
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
              Zero-Tolerance Safety Protocol
            </span>
            <h3 class="h4 fw-bold text-white mb-2">Child Safety & Secure Transit Protocol</h3>
            <p class="small text-light opacity-90 mb-0">
              From GPS-monitored bus transportation with verified drivers to 24/7 CCTV vigilance, police-verified support staff, clean RO water, and emergency medical tie-ups with leading hospitals, student wellness is our paramount priority.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a routerLink="/admissions" class="btn-gold py-3 px-4">
              <i class="bi bi-pencil-square me-1"></i>Apply for Admission
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

    .facility-row {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .facility-row:hover {
      box-shadow: 0 16px 32px rgba(11, 37, 69, 0.08) !important;
      border-color: #F59E0B !important;
    }

    .facility-image-card {
      height: 340px;
      background: #0B2545;
    }

    .facility-img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .facility-row:hover .facility-img {
      transform: scale(1.03);
    }

    .facility-icon-circle {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
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
export class FacilitiesComponent {
  private schoolDataService = inject(SchoolDataService);

  readonly facilities = this.schoolDataService.enabledFacilities;
  readonly selectedCategory = signal<string>('All');

  readonly filteredFacilities = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') return this.facilities();
    return this.facilities().filter(f => f.category === cat);
  });

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/facilities/smart-classroom.jpg';
  }
}
