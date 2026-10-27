import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { TeacherCardComponent } from '../../shared/teacher-card/teacher-card.component';
import { NoticeCardComponent } from '../../shared/notice-card/notice-card.component';
import { ImageGalleryComponent } from '../../shared/image-gallery/image-gallery.component';
import { Notice } from '../../core/models/notice.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TeacherCardComponent,
    NoticeCardComponent,
    ImageGalleryComponent
  ],
  template: `
    <!-- A. Hero Section -->
    <section class="hero-section position-relative overflow-hidden">
      <div class="hero-bg-overlay"></div>
      <img
        src="assets/images/hero/hero-campus.jpg"
        alt="Vidya Niketan Public School Campus & Students"
        class="hero-bg-image position-absolute top-0 start-0 w-100 h-100">

      <div class="container position-relative z-2 py-5 my-lg-4">
        <div class="row align-items-center g-5">
          <div class="col-lg-8 text-white">
            <!-- Admission Session Badge -->
            <div class="hero-badge-pill mb-3 d-inline-flex align-items-center gap-2">
              <span class="badge-dot"></span>
              <span class="fw-bold">Admissions Open {{ config().admissions.session }}</span>
              <span class="badge-sub">{{ config().admissions.classesOpen }}</span>
            </div>

            <h1 class="display-4 fw-extrabold hero-heading text-white mb-3">
              Building Bright Futures Through <span class="text-gold-gradient">Quality Education</span>
            </h1>

            <p class="lead hero-lead text-light mb-4">
              At {{ config().name }}, we cultivate academic rigor, moral character, and lifelong curiosity from Nursery to Class 10. Our holistic CBSE learning environment blends traditional Indian values with futuristic digital classrooms.
            </p>

            <div class="d-flex flex-wrap gap-3 mb-5">
              <a routerLink="/admissions" class="btn-gold py-3 px-4">
                <i class="bi bi-pencil-square"></i>
                <span>Apply for Admission</span>
              </a>
              <a routerLink="/about" class="btn-outline-white py-3 px-4">
                <i class="bi bi-compass"></i>
                <span>Explore Our School</span>
              </a>
              <a routerLink="/class-10" class="btn-outline-gold py-3 px-3 d-none d-sm-inline-flex align-items-center gap-2">
                <i class="bi bi-award-fill text-warning"></i>
                <span>Class 10 Board Hub</span>
              </a>
            </div>

            <!-- Stats Highlight Bar -->
            <div class="hero-stats-grid row g-3">
              <div *ngFor="let stat of config().stats" class="col-6 col-md-3">
                <div class="stat-glass-card p-3 rounded-3 text-center">
                  <div class="stat-value fw-bold text-warning mb-1">{{ stat.value }}</div>
                  <div class="stat-label small text-light">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- B. Welcome to Our School & Principal's Message -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="row align-items-center g-5">
          <div class="col-lg-5 text-center text-lg-start">
            <div class="principal-frame position-relative d-inline-block">
              <img
                [src]="config().principal.image"
                [alt]="config().principal.name"
                class="principal-img rounded-4 shadow-lg w-100">
              <div class="principal-tag-badge position-absolute bottom-0 start-50 translate-middle-x mb-n3 px-4 py-2 bg-navy text-white rounded-pill shadow">
                <span class="small fw-bold text-warning d-block">{{ config().principal.name }}</span>
                <span class="tiny-text opacity-75">{{ config().principal.designation }}</span>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <span class="section-tag">
              <i class="bi bi-bank me-1"></i>Welcome to {{ config().shortName }}
            </span>
            <h2 class="section-title">Nurturing Excellence, Character & Wisdom</h2>
            <p class="text-muted lead mb-4 fs-6">
              {{ config().principal.welcomeMessage }}
            </p>

            <div class="quote-card p-4 rounded-3 mb-4">
              <i class="bi bi-quote fs-2 text-warning d-block mb-1"></i>
              <p class="fst-italic text-dark mb-2 fw-medium">
                {{ config().principal.visionQuote }}
              </p>
              <div class="d-flex align-items-center justify-content-between small text-muted">
                <span class="fw-semibold text-navy">{{ config().principal.name }}</span>
                <span>{{ config().principal.qualifications }}</span>
              </div>
            </div>

            <div class="row g-3 mb-4">
              <div class="col-sm-6">
                <div class="d-flex align-items-start gap-2">
                  <i class="bi bi-check-circle-fill text-warning fs-5 mt-1"></i>
                  <div>
                    <h5 class="h6 fw-bold mb-1">Our Vision</h5>
                    <p class="small text-muted mb-0">To develop compassionate, globally competent learners grounded in timeless cultural heritage.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-start gap-2">
                  <i class="bi bi-check-circle-fill text-warning fs-5 mt-1"></i>
                  <div>
                    <h5 class="h6 fw-bold mb-1">Our Mission</h5>
                    <p class="small text-muted mb-0">Igniting academic mastery, critical inquiry, sportsmanship, and leadership for nation-building.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3">
              <a routerLink="/about" class="btn-navy">
                <span>Read Full School History</span>
                <i class="bi bi-arrow-right"></i>
              </a>
              <a routerLink="/faculty" class="btn-outline-navy">
                <span>Meet Faculty</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- C. Why Choose Our School? -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag gold">
            <i class="bi bi-star-fill me-1"></i>The VNPS Advantage
          </span>
          <h2 class="section-title">Why Parents Trust Vidya Niketan</h2>
          <p class="section-subtitle">
            We provide a balanced ecosystem where every child receives individualized mentorship, safe infrastructure, and multifaceted exposure.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="feature-icon-box bg-navy-subtle text-navy mb-3">
                <i class="bi bi-person-workspace fs-3"></i>
              </div>
              <h3 class="h5 fw-bold mb-2">Experienced Faculty</h3>
              <p class="text-muted small mb-0">
                Over 50+ trained and passionate educators with an average of 12+ years of teaching expertise, guiding students with individual care and patience.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="feature-icon-box bg-gold-subtle text-warning mb-3">
                <i class="bi bi-journal-bookmark-fill fs-3"></i>
              </div>
              <h3 class="h5 fw-bold mb-2">Quality CBSE Education</h3>
              <p class="text-muted small mb-0">
                Comprehensive curriculum aligned with NEP 2020 standards, emphasizing conceptual understanding, practical problem-solving, and continuous learning.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="feature-icon-box bg-navy-subtle text-navy mb-3">
                <i class="bi bi-display fs-3"></i>
              </div>
              <h3 class="h5 fw-bold mb-2">Interactive Smart Classrooms</h3>
              <p class="text-muted small mb-0">
                Equipped with 75-inch touch LED panels and multimedia simulations, transforming abstract textbook lessons into lively visual experiences.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="feature-icon-box bg-gold-subtle text-warning mb-3">
                <i class="bi bi-eyedropper fs-3"></i>
              </div>
              <h3 class="h5 fw-bold mb-2">Advanced Science & IT Labs</h3>
              <p class="text-muted small mb-0">
                Spacious laboratories for Physics, Chemistry, Biology, and Computer Science enabling experiential experimentation from middle school onwards.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="feature-icon-box bg-navy-subtle text-navy mb-3">
                <i class="bi bi-trophy-fill fs-3"></i>
              </div>
              <h3 class="h5 fw-bold mb-2">Sports & Physical Fitness</h3>
              <p class="text-muted small mb-0">
                Dedicated football turf, cricket practice nets, running tracks, and indoor badminton court with NIS-certified physical education instructors.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="feature-icon-box bg-gold-subtle text-warning mb-3">
                <i class="bi bi-shield-check fs-3"></i>
              </div>
              <h3 class="h5 fw-bold mb-2">Safe & Secure Campus</h3>
              <p class="text-muted small mb-0">
                24x7 security guards, 120+ CCTV cameras, RFID attendance, GPS-tracked bus fleet with lady attendants, and pure RO drinking water plants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- D. Academic Programs Overview -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-mortarboard-fill me-1"></i>Educational Journey
          </span>
          <h2 class="section-title">Academic Wings: Nursery to Class 10</h2>
          <p class="section-subtitle">
            A continuous, nurturing continuum carefully tailored to match each child’s cognitive, emotional, and social development.
          </p>
        </div>

        <div class="row g-4">
          <div *ngFor="let prog of academicPrograms()" class="col-md-6 col-lg-3">
            <div class="school-card program-card h-100 p-4 d-flex flex-column">
              <div class="prog-icon-badge mb-3">
                <i [class]="'bi ' + prog.icon"></i>
              </div>
              <span class="badge bg-light text-navy border align-self-start mb-2">{{ prog.classes }}</span>
              <h3 class="h5 fw-bold mb-1">{{ prog.name }}</h3>
              <span class="text-warning small fw-bold mb-3 d-block">{{ prog.ageGroup }}</span>
              <p class="small text-muted flex-grow-1 mb-4">{{ prog.description }}</p>

              <div class="border-top pt-3 mt-auto">
                <a routerLink="/academics" class="text-navy fw-semibold small text-decoration-none d-flex align-items-center justify-content-between">
                  <span>Explore Curriculum</span>
                  <i class="bi bi-arrow-right text-warning"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- E. Class 10 Special Spotlight Banner -->
    <section class="class-10-banner py-5 text-white position-relative">
      <div class="container position-relative z-1 py-3">
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
              <i class="bi bi-star-fill me-1"></i>Dedicated Board Preparation
            </span>
            <h2 class="display-6 fw-bold text-white mb-3">
              Class 10 CBSE Board Hub: Excellence with Confidence
            </h2>
            <p class="lead text-light mb-4 fs-6 opacity-90">
              We empower Class 10 students with structured syllabus completion, weekly chapter-wise revision drills, doubt-clearing clinics from 2 PM to 4 PM, previous 5-year paper solving, and personalized post-10th stream guidance (Science, Commerce, Humanities).
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a routerLink="/class-10" class="btn-gold py-2 px-4">
                <i class="bi bi-file-earmark-pdf me-1"></i>Explore Class 10 Resources
              </a>
              <a routerLink="/contact" class="btn-outline-white py-2 px-3">
                <i class="bi bi-chat-dots me-1"></i>Enquire for Class 10 Admission
              </a>
            </div>
          </div>

          <div class="col-lg-4 text-center">
            <div class="board-badge-box p-4 rounded-4 shadow-lg">
              <i class="bi bi-patch-check-fill text-warning display-4 d-block mb-2"></i>
              <h3 class="h5 fw-bold text-white mb-1">100% Pass Record</h3>
              <p class="small text-white-50 mb-3">CBSE AISSE Board Examination Participation</p>
              <div class="small p-2 bg-white bg-opacity-10 rounded text-warning fw-semibold">
                Specialized Doubt Clinics & Model Papers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- G. Selected Teacher Highlights -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="d-flex flex-wrap justify-content-between align-items-end mb-4">
          <div>
            <span class="section-tag gold">
              <i class="bi bi-person-lines-fill me-1"></i>Faculty Spotlight
            </span>
            <h2 class="section-title mb-0">Meet Our Dedicated Educators</h2>
          </div>
          <a routerLink="/faculty" class="btn-outline-navy mt-3 mt-md-0">
            <span>View All Faculty Members</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>

        <div class="row g-4">
          <div *ngFor="let teacher of highlightedTeachers().slice(0, 3)" class="col-md-6 col-lg-4">
            <app-teacher-card [teacher]="teacher"></app-teacher-card>
          </div>
        </div>
      </div>
    </section>

    <!-- H. Facilities Preview -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-building me-1"></i>Campus Life
          </span>
          <h2 class="section-title">World-Class Campus Infrastructure</h2>
          <p class="section-subtitle">
            Providing modern spaces for academic discovery, scientific innovation, athletic vigor, and creative performing arts.
          </p>
        </div>

        <div class="row g-4">
          <div *ngFor="let fac of enabledFacilities().slice(0, 4)" class="col-md-6 col-lg-3">
            <div class="school-card facility-preview-card h-100 overflow-hidden">
              <div class="facility-img-wrap">
                <img [src]="fac.image" [alt]="fac.name" loading="lazy" class="w-100 h-100 object-cover">
              </div>
              <div class="p-3">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <i [class]="'bi ' + fac.icon + ' text-warning fs-5'"></i>
                  <h4 class="h6 fw-bold mb-0 text-navy">{{ fac.name }}</h4>
                </div>
                <p class="small text-muted mb-0 line-clamp-2">{{ fac.shortDesc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4 pt-2">
          <a routerLink="/facilities" class="btn-navy">
            <span>Explore All 10 Campus Facilities</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- I. Latest News and Announcements -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="d-flex flex-wrap justify-content-between align-items-end mb-4">
          <div>
            <span class="section-tag">
              <i class="bi bi-bell-fill me-1"></i>Official Notices
            </span>
            <h2 class="section-title mb-0">Latest News & Circulars</h2>
          </div>
          <a routerLink="/notices" class="btn-outline-navy mt-3 mt-md-0">
            <span>All Circulars & Downloads</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>

        <div class="row g-4">
          <div *ngFor="let notice of recentNotices()" class="col-md-6 col-lg-3">
            <app-notice-card [notice]="notice" (onSelectNotice)="viewNoticeModal($event)"></app-notice-card>
          </div>
        </div>
      </div>
    </section>

    <!-- J. Photo Gallery Preview -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="d-flex flex-wrap justify-content-between align-items-end mb-4">
          <div>
            <span class="section-tag gold">
              <i class="bi bi-images me-1"></i>Moments at VNPS
            </span>
            <h2 class="section-title mb-0">Life at Our Campus</h2>
          </div>
          <a routerLink="/gallery" class="btn-outline-navy mt-3 mt-md-0">
            <span>View Complete Photo Gallery</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>

        <app-image-gallery
          [images]="galleryImages()"
          [showFilters]="false"
          [limit]="8">
        </app-image-gallery>
      </div>
    </section>

    <!-- K. Testimonials from Parents & Students -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-chat-heart-fill me-1"></i>Parent & Student Voices
          </span>
          <h2 class="section-title">What Our School Community Says</h2>
          <p class="section-subtitle">
            Real feedback from proud parents and alumni whose educational foundation was built at Vidya Niketan Public School.
          </p>
        </div>

        <div class="row g-4">
          <div *ngFor="let item of testimonials()" class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 d-flex flex-column">
              <div class="d-flex align-items-center gap-1 text-warning mb-3">
                <i *ngFor="let s of [1,2,3,4,5]" class="bi bi-star-fill small"></i>
              </div>
              <p class="small text-muted fst-italic flex-grow-1 mb-4">
                “{{ item.quote }}”
              </p>
              <div class="d-flex align-items-center gap-3 pt-3 border-top mt-auto">
                <div class="testimonial-avatar">
                  {{ item.avatarInitials }}
                </div>
                <div>
                  <h4 class="h6 fw-bold mb-0 text-navy">{{ item.authorName }}</h4>
                  <span class="tiny-text text-muted">{{ item.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- L. Call to Action Banner -->
    <section class="cta-banner py-5 position-relative overflow-hidden">
      <div class="container position-relative z-1 py-4 text-center">
        <div class="max-w-700 mx-auto">
          <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
            Admissions Open for Session {{ config().admissions.session }}
          </span>
          <h2 class="display-6 fw-bold text-white mb-3">
            Give Your Child the Right Foundation for a Bright Future
          </h2>
          <p class="lead text-light opacity-90 mb-4 fs-6">
            Join a thriving educational community dedicated to character, intellect, and holistic achievement. Limited seats are available across Nursery to Class 9 and Class 10 transfer cases.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a routerLink="/admissions" class="btn-gold py-3 px-5">
              <i class="bi bi-pencil-square"></i>
              <span>Apply for Admission</span>
            </a>
            <a routerLink="/contact" class="btn-outline-white py-3 px-4">
              <i class="bi bi-telephone-fill"></i>
              <span>Contact Admissions Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Notice Quick View Modal -->
    <div *ngIf="activeNotice()" class="notice-modal-backdrop" (click)="closeNoticeModal()">
      <div class="notice-modal-dialog" (click)="$event.stopPropagation()">
        <div class="p-4 bg-navy text-white d-flex justify-content-between align-items-center">
          <div>
            <span class="badge bg-warning text-dark me-2">{{ activeNotice()?.category }}</span>
            <span class="small opacity-75">{{ activeNotice()?.academicYear }}</span>
          </div>
          <button type="button" class="btn-close btn-close-white" (click)="closeNoticeModal()" aria-label="Close"></button>
        </div>
        <div class="p-4 bg-white">
          <h3 class="h5 fw-bold text-navy mb-2">{{ activeNotice()?.title }}</h3>
          <div class="text-muted small mb-3">
            <i class="bi bi-calendar3 me-1 text-warning"></i>Published on: {{ activeNotice()?.date }} | Issued By: {{ activeNotice()?.issuedBy }}
          </div>
          <div class="p-3 bg-light rounded-3 mb-4 text-secondary small">
            {{ activeNotice()?.description }}
          </div>
          <div class="d-flex justify-content-between align-items-center pt-3 border-top">
            <span class="small text-muted"><i class="bi bi-people-fill me-1"></i>Target: {{ activeNotice()?.targetAudience }}</span>
            <button type="button" (click)="closeNoticeModal()" class="btn btn-navy btn-sm px-4">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Hero Section Styles */
    .hero-section {
      min-height: 82vh;
      display: flex;
      align-items: center;
      background-color: #07192F;
    }

    .hero-bg-image {
      object-fit: cover;
      object-position: center;
      filter: brightness(0.42);
    }

    .hero-bg-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(7, 25, 47, 0.95) 0%, rgba(11, 37, 69, 0.8) 50%, rgba(7, 25, 47, 0.6) 100%);
      z-index: 1;
    }

    .hero-badge-pill {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 0.4rem 1rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      color: #FFFFFF;
    }

    .badge-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #F59E0B;
      box-shadow: 0 0 10px #F59E0B;
    }

    .badge-sub {
      color: #FEF3C7;
      font-size: 0.78rem;
    }

    .hero-heading {
      line-height: 1.15;
    }

    .text-gold-gradient {
      background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-lead {
      max-width: 650px;
      line-height: 1.6;
    }

    .btn-outline-gold {
      background: transparent;
      border: 2px solid #F59E0B;
      color: #FFFFFF;
      font-weight: 600;
      border-radius: 9999px;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .btn-outline-gold:hover {
      background: #F59E0B;
      color: #07192F;
    }

    .stat-glass-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .stat-value {
      font-size: 1.5rem;
      font-family: var(--font-heading);
    }

    /* Principal Frame */
    .principal-img {
      max-width: 360px;
      height: 420px;
      object-fit: cover;
      border: 4px solid #FFFFFF;
    }

    .principal-tag-badge {
      white-space: nowrap;
      min-width: 240px;
    }

    .bg-navy {
      background-color: #0B2545;
    }

    .tiny-text {
      font-size: 0.72rem;
    }

    .quote-card {
      background: #FFFBEB;
      border-left: 4px solid #F59E0B;
    }

    /* Feature Icons */
    .feature-icon-box {
      width: 58px;
      height: 58px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bg-navy-subtle {
      background-color: #EDF3FA;
      color: #0B2545;
    }

    .bg-gold-subtle {
      background-color: #FEF3C7;
      color: #D97706;
    }

    /* Program Cards */
    .prog-icon-badge {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: #FEF3C7;
      color: #D97706;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }

    /* Class 10 Spotlight Banner */
    .class-10-banner {
      background: linear-gradient(135deg, #07192F 0%, #0B2545 60%, #1A365D 100%);
      border-top: 3px solid #F59E0B;
      border-bottom: 3px solid #F59E0B;
    }

    .board-badge-box {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Facility preview */
    .facility-img-wrap {
      height: 180px;
      overflow: hidden;
    }

    .object-cover {
      object-fit: cover;
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Testimonial avatar */
    .testimonial-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0B2545 0%, #133B6B 100%);
      color: #F59E0B;
      font-weight: 700;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #FEF3C7;
    }

    /* CTA Banner */
    .cta-banner {
      background: linear-gradient(135deg, #07192F 0%, #0B2545 100%);
      border-top: 4px solid #F59E0B;
    }

    .max-w-700 {
      max-width: 700px;
    }

    /* Notice modal */
    .notice-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1050;
      background: rgba(7, 25, 47, 0.75);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .notice-modal-dialog {
      max-width: 600px;
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  `]
})
export class HomeComponent {
  private schoolDataService = inject(SchoolDataService);

  readonly config = this.schoolDataService.config;
  readonly highlightedTeachers = this.schoolDataService.highlightedTeachers;
  readonly recentNotices = this.schoolDataService.recentNotices;
  readonly galleryImages = this.schoolDataService.galleryImages;
  readonly enabledFacilities = this.schoolDataService.enabledFacilities;
  readonly academicPrograms = this.schoolDataService.academicPrograms;
  readonly testimonials = this.schoolDataService.testimonials;

  readonly activeNotice = signal<Notice | null>(null);

  viewNoticeModal(notice: Notice) {
    this.activeNotice.set(notice);
  }

  closeNoticeModal() {
    this.activeNotice.set(null);
  }
}
