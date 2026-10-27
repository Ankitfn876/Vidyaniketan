import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teacher } from '../../core/models/teacher.model';

@Component({
  selector: 'app-teacher-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="school-card teacher-card h-100 d-flex flex-column">
      <!-- Photo Container -->
      <div class="teacher-image-wrapper position-relative">
        <img
          [src]="teacher.image"
          [alt]="teacher.name"
          (error)="onImageError($event)"
          loading="lazy"
          class="teacher-img w-100">
        <div class="teacher-subject-tag position-absolute bottom-0 start-0 m-3">
          <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">
            <i class="bi bi-bookmark-fill me-1"></i>{{ teacher.subject }}
          </span>
        </div>
        <div class="experience-badge position-absolute top-0 end-0 m-3">
          <span class="badge bg-navy text-white rounded-pill px-2 py-1 small">
            {{ teacher.experienceYears }}+ Yrs Exp
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 d-flex flex-column flex-grow-1">
        <div class="mb-2">
          <span class="text-muted small fw-semibold text-uppercase tracking-wider d-block mb-1">
            {{ teacher.department }}
          </span>
          <h3 class="h5 fw-bold text-navy mb-1">{{ teacher.name }}</h3>
          <p class="text-primary small fw-semibold mb-2">{{ teacher.designation }}</p>
        </div>

        <div class="qualification-box p-2 rounded mb-3 small">
          <i class="bi bi-mortarboard me-1 text-warning"></i>
          <span class="text-secondary">{{ teacher.qualification }}</span>
        </div>

        <p class="teacher-bio small text-muted mb-4 flex-grow-1">
          {{ teacher.bio }}
        </p>

        <div class="pt-3 border-top border-light-subtle d-flex align-items-center justify-content-between mt-auto">
          <a [href]="'mailto:' + teacher.email" class="text-navy small fw-semibold text-decoration-none d-inline-flex align-items-center gap-1">
            <i class="bi bi-envelope-at text-warning"></i>
            <span>{{ teacher.email }}</span>
          </a>
          <span class="badge bg-light text-secondary border">Verified</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .teacher-card {
      background: #FFFFFF;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .teacher-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(11, 37, 69, 0.12);
    }

    .teacher-image-wrapper {
      height: 240px;
      overflow: hidden;
      background: #0B2545;
    }

    .teacher-img {
      height: 100%;
      object-fit: cover;
      object-position: top center;
      transition: transform 0.4s ease;
    }

    .teacher-card:hover .teacher-img {
      transform: scale(1.05);
    }

    .qualification-box {
      background: #F8FAFC;
      border-left: 3px solid #F59E0B;
    }

    .bg-navy {
      background-color: #0B2545;
    }

    .text-navy {
      color: #0B2545;
    }

    .teacher-bio {
      line-height: 1.5;
    }
  `]
})
export class TeacherCardComponent {
  @Input({ required: true }) teacher!: Teacher;

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/teachers/principal.jpg';
  }
}
