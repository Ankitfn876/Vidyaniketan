import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { ImageGalleryComponent } from '../../shared/image-gallery/image-gallery.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageBannerComponent, ImageGalleryComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="School Life & Event Photo Gallery"
      subtitle="A vibrant chronicle of joyful discoveries, cultural celebrations, sporting triumphs, and academic life at Vidya Niketan"
      badge="Visual Chronicles"
      badgeIcon="bi-camera-fill"
      [highlightStat]="{ label: 'Moments Captured', value: 'Memories & Celebrations' }">
    </app-page-banner>

    <!-- Gallery Section -->
    <section class="py-5 bg-white">
      <div class="container py-lg-3">
        <div class="text-center max-w-700 mx-auto mb-4">
          <span class="section-tag gold">
            <i class="bi bi-images me-1"></i>Curated Moments
          </span>
          <h2 class="section-title">Campus Life Through the Lens</h2>
          <p class="section-subtitle">
            Explore glimpses of daily assemblies, science exhibitions, sports championships, national celebrations, and classroom camaraderie.
          </p>
        </div>

        <!-- Master Gallery with Filters & Lightbox -->
        <app-image-gallery
          [images]="galleryImages()"
          [showFilters]="true">
        </app-image-gallery>
      </div>
    </section>

    <!-- Parent Photo Policy Notice -->
    <section class="py-4 bg-light border-top">
      <div class="container text-center small text-muted">
        <i class="bi bi-shield-lock-fill text-warning me-1"></i>
        <strong>Child Privacy & Safety Policy:</strong> All photographs showcased on this website are published with parental consent strictly for educational showcase. Commercial reproduction is prohibited.
      </div>
    </section>
  `,
  styles: [`
    .max-w-700 { max-width: 700px; }
  `]
})
export class GalleryComponent {
  private schoolDataService = inject(SchoolDataService);
  readonly galleryImages = this.schoolDataService.galleryImages;
}
