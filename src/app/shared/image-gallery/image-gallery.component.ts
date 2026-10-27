import { Component, Input, OnInit, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage, GalleryCategory } from '../../core/models/gallery.model';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-gallery-container">
      <!-- Category Filter Pills (if enabled) -->
      <div *ngIf="showFilters" class="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button
          *ngFor="let cat of categories"
          type="button"
          (click)="selectCategory(cat)"
          class="filter-pill"
          [class.active]="selectedCategory() === cat">
          {{ cat }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="row g-4">
        <div
          *ngFor="let img of filteredImages(); let i = index"
          class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="gallery-card position-relative overflow-hidden rounded-3 shadow-sm" (click)="openLightbox(i)">
            <img
              [src]="img.imageUrl"
              [alt]="img.title"
              (error)="onImgError($event)"
              loading="lazy"
              class="gallery-thumbnail w-100">

            <div class="gallery-overlay d-flex flex-column justify-content-end p-3">
              <span class="badge bg-warning text-dark align-self-start mb-1 small">{{ img.category }}</span>
              <h4 class="text-white h6 mb-1 fw-bold">{{ img.title }}</h4>
              <p class="text-white-50 small mb-0 text-truncate">{{ img.caption }}</p>
              <div class="zoom-icon position-absolute top-50 start-50 translate-middle">
                <i class="bi bi-arrows-fullscreen text-white fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="filteredImages().length === 0" class="col-12 text-center py-5">
          <div class="p-4 bg-light rounded-3 text-muted">
            <i class="bi bi-images fs-2 d-block mb-2"></i>
            No photos found in this category.
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div
        *ngIf="lightboxOpen()"
        class="lightbox-backdrop"
        (click)="closeLightbox()">
        <div class="lightbox-dialog" (click)="$event.stopPropagation()">
          <!-- Close Button -->
          <button
            type="button"
            class="lightbox-close-btn"
            (click)="closeLightbox()"
            aria-label="Close Lightbox">
            <i class="bi bi-x-lg"></i>
          </button>

          <!-- Nav Buttons -->
          <button
            type="button"
            class="lightbox-nav-btn prev-btn"
            (click)="prevImage()"
            aria-label="Previous image">
            <i class="bi bi-chevron-left"></i>
          </button>

          <button
            type="button"
            class="lightbox-nav-btn next-btn"
            (click)="nextImage()"
            aria-label="Next image">
            <i class="bi bi-chevron-right"></i>
          </button>

          <!-- Main Image Display & Caption -->
          <ng-container *ngIf="currentLightboxImage() as currentImg">
            <div class="lightbox-image-wrapper">
              <img
                [src]="currentImg.imageUrl"
                [alt]="currentImg.title"
                class="lightbox-img img-fluid">
            </div>

            <!-- Bottom Caption Bar -->
            <div class="lightbox-caption-bar text-white p-3">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="badge bg-warning text-dark">{{ currentImg.category }}</span>
                <span class="small opacity-75">
                  {{ currentLightboxIndex() + 1 }} of {{ filteredImages().length }}
                </span>
              </div>
              <h5 class="mb-1 fw-bold">{{ currentImg.title }}</h5>
              <p class="small text-white-50 mb-0">{{ currentImg.caption }}</p>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .filter-pill {
      background: #FFFFFF;
      border: 1.5px solid #CBD5E1;
      color: #334155;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.45rem 1.1rem;
      border-radius: 9999px;
      transition: all 0.2s ease;
      cursor: pointer;
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

    .gallery-card {
      height: 240px;
      background: #07192F;
      cursor: pointer;
      position: relative;
    }

    .gallery-thumbnail {
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(7, 25, 47, 0) 40%, rgba(7, 25, 47, 0.9) 100%);
      opacity: 0.9;
      transition: opacity 0.3s ease;
    }

    .zoom-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
      transition: all 0.3s ease;
      background: rgba(11, 37, 69, 0.7);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .gallery-card:hover .gallery-thumbnail {
      transform: scale(1.08);
    }

    .gallery-card:hover .zoom-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Lightbox Styles */
    .lightbox-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1050;
      background: rgba(7, 25, 47, 0.92);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .lightbox-dialog {
      position: relative;
      max-width: 900px;
      width: 100%;
      background: #0B2545;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .lightbox-image-wrapper {
      max-height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #07192F;
    }

    .lightbox-img {
      max-height: 70vh;
      object-fit: contain;
      width: 100%;
    }

    .lightbox-close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 1060;
      background: rgba(0, 0, 0, 0.5);
      color: #FFFFFF;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: background 0.2s;
    }

    .lightbox-close-btn:hover {
      background: #EF4444;
    }

    .lightbox-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1060;
      background: rgba(0, 0, 0, 0.5);
      color: #FFFFFF;
      border: none;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.4rem;
      transition: background 0.2s;
    }

    .lightbox-nav-btn:hover {
      background: #F59E0B;
      color: #07192F;
    }

    .prev-btn { left: 16px; }
    .next-btn { right: 16px; }

    .lightbox-caption-bar {
      background: #0B2545;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  `]
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: GalleryImage[] = [];
  @Input() showFilters: boolean = true;
  @Input() limit?: number;

  readonly categories: GalleryCategory[] = [
    'All',
    'Campus',
    'Classrooms',
    'Sports',
    'Science Exhibitions',
    'Cultural Events',
    'Celebrations',
    'Annual Functions'
  ];

  readonly selectedCategory = signal<GalleryCategory>('All');
  readonly lightboxOpen = signal<boolean>(false);
  readonly currentLightboxIndex = signal<number>(0);

  ngOnInit() {
    // Component initialized
  }

  readonly filteredImages = computed(() => {
    let result = this.images;
    const cat = this.selectedCategory();
    if (cat !== 'All') {
      result = result.filter(img => img.category === cat);
    }
    if (this.limit && this.limit > 0) {
      result = result.slice(0, this.limit);
    }
    return result;
  });

  readonly currentLightboxImage = computed(() => {
    const list = this.filteredImages();
    const idx = this.currentLightboxIndex();
    return list[idx] || null;
  });

  selectCategory(cat: GalleryCategory) {
    this.selectedCategory.set(cat);
  }

  openLightbox(index: number) {
    this.currentLightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
  }

  nextImage() {
    const total = this.filteredImages().length;
    if (total === 0) return;
    this.currentLightboxIndex.update(idx => (idx + 1) % total);
  }

  prevImage() {
    const total = this.filteredImages().length;
    if (total === 0) return;
    this.currentLightboxIndex.update(idx => (idx - 1 + total) % total);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/gallery/campus.jpg';
  }
}
