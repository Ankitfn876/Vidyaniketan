import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="About Vidya Niketan Public School"
      subtitle="Fostering academic distinction, character, and lifelong values since 2008"
      badge="Excellence in Education"
      badgeIcon="bi-bank"
      [highlightStat]="{ label: 'Years of Educational Legacy', value: '16+ Years' }">
    </app-page-banner>

    <!-- School Introduction & Legacy -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <span class="section-tag">
              <i class="bi bi-clock-history me-1"></i>Our History & Heritage
            </span>
            <h2 class="section-title">A Journey of Academic Distinction & Moral Integrity</h2>
            <p class="lead text-muted fs-6 mb-3">
              Founded in {{ config().establishedYear }} under the aegis of the Vidya Vikas Educational Trust, {{ config().name }} began with a sacred mission: to offer world-class, accessible education rooted in quintessential Indian cultural ethos.
            </p>
            <p class="text-secondary small mb-4">
              Over the last 16 years, VNPS has burgeoned from a modest institution into one of the region’s most revered co-educational institutions, nurturing over 1,250 young minds from Nursery to Class 10. Our alumni are currently pursuing higher education in premier IITs, AIIMS, Central Universities, and National Law Institutes across India.
            </p>

            <div class="row g-3 mb-4">
              <div class="col-6">
                <div class="p-3 bg-light rounded-3 border-start border-warning border-4">
                  <div class="h4 fw-bold text-navy mb-0">CBSE</div>
                  <span class="small text-muted">Affiliation Code: {{ config().affiliation.affiliationNumber }}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 bg-light rounded-3 border-start border-navy border-4">
                  <div class="h4 fw-bold text-navy mb-0">1,250+</div>
                  <span class="small text-muted">Happy Scholars Nurtured</span>
                </div>
              </div>
            </div>

            <a routerLink="/admissions" class="btn-gold">
              <i class="bi bi-pencil-square"></i>
              <span>Apply for 2026–27 Admission</span>
            </a>
          </div>

          <div class="col-lg-6">
            <div class="position-relative">
              <img
                src="assets/images/gallery/campus.jpg"
                alt="Vidya Niketan School Campus"
                class="img-fluid rounded-4 shadow-lg w-100">
              <div class="about-floating-card p-3 rounded-3 shadow bg-navy text-white position-absolute bottom-0 start-0 m-4 d-none d-sm-block">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-patch-check-fill text-warning fs-2"></i>
                  <div>
                    <div class="fw-bold small">Recognized Educational Institution</div>
                    <div class="tiny-text opacity-75">Nursery to Class 10 (AISSE CBSE)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision, Mission & Philosophy -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag gold">
            <i class="bi bi-compass me-1"></i>Foundational Pillars
          </span>
          <h2 class="section-title">Vision, Mission & Educational Philosophy</h2>
          <p class="section-subtitle">
            Guided by ancient Indian educational tenets (विद्ययाऽमृतमश्नुते) and modern pedagogical research recommended by NEP 2020.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="pillar-icon bg-navy text-warning mb-3">
                <i class="bi bi-eye-fill fs-3"></i>
              </div>
              <h3 class="h5 fw-bold text-navy mb-2">Our Vision</h3>
              <p class="small text-muted mb-0">
                To evolve into a beacon of holistic educational excellence that empowers young learners with deep conceptual wisdom, global consciousness, moral courage, and reverence for Indian traditions.
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="pillar-icon bg-gold text-dark mb-3">
                <i class="bi bi-flag-fill fs-3"></i>
              </div>
              <h3 class="h5 fw-bold text-navy mb-2">Our Mission</h3>
              <p class="small text-muted mb-0">
                To foster an inclusive, stimulating academic sanctuary where curiosity thrives, character is forged through daily discipline, scientific reasoning is ignited, and leadership potential is realized in service of society.
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="pillar-icon bg-emerald text-white mb-3">
                <i class="bi bi-heart-pulse-fill fs-3"></i>
              </div>
              <h3 class="h5 fw-bold text-navy mb-2">Our Philosophy</h3>
              <p class="small text-muted mb-0">
                Inspired by the <em>Panchakosha</em> holistic framework: cultivating Annamaya (physical vitality), Pranamaya (breath & energy), Manomaya (emotional equilibrium), Vijnanamaya (intellectual acumen), and Anandamaya (spiritual joy).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Principal's Address Section -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="p-4 p-lg-5 rounded-4 bg-navy text-white position-relative overflow-hidden">
          <div class="row align-items-center g-4 position-relative z-1">
            <div class="col-lg-4 text-center">
              <img
                [src]="config().principal.image"
                [alt]="config().principal.name"
                class="principal-about-img rounded-4 shadow border border-2 border-warning w-100">
              <div class="mt-3">
                <h4 class="h5 fw-bold text-warning mb-0">{{ config().principal.name }}</h4>
                <div class="small opacity-75">{{ config().principal.designation }}</div>
                <div class="tiny-text opacity-50">{{ config().principal.qualifications }}</div>
              </div>
            </div>

            <div class="col-lg-8">
              <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
                <i class="bi bi-megaphone-fill me-1"></i>From the Principal’s Desk
              </span>
              <h3 class="h3 fw-bold text-white mb-3">
                “Educating the Mind Without Educating the Heart is No Education at All”
              </h3>
              <p class="text-light opacity-90 small mb-3">
                Dear Parents, Educators, and Cherished Students,<br><br>
                It is my privilege to welcome you to {{ config().name }}. We view every child who enters our gates not as an empty vessel to be filled with data, but as a spark of infinite potential waiting to be ignited. In an age dominated by rapid technological change, our purpose is to ground children in moral clarity, self-discipline, and empathetic social responsibility.
              </p>
              <p class="text-light opacity-90 small mb-4">
                Our curriculum bridges rigorous CBSE board preparation with co-curricular sports, performing arts, robotics, and community service. We invite you to partner with us in shaping confident, resilient young leaders for India’s glorious future.
              </p>
              <div class="d-flex align-items-center gap-3">
                <a routerLink="/contact" class="btn-gold btn-sm px-4">
                  <span>Schedule a Principal Interaction</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values System (Panch Tattva) -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag gold">
            <i class="bi bi-gem me-1"></i>Moral Code
          </span>
          <h2 class="section-title">Our Five Core Values (पञ्चतत्व)</h2>
          <p class="section-subtitle">
            Values embedded into daily morning assemblies, classroom culture, and student character conduct.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="value-number mb-2">01</div>
              <h4 class="h6 fw-bold text-navy mb-2">Satya (सत्य - Truth & Integrity)</h4>
              <p class="small text-muted mb-0">Upholding honesty in speech, academic authenticity in work, and transparent ethical conduct in all dealings.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="value-number mb-2">02</div>
              <h4 class="h6 fw-bold text-navy mb-2">Vidya (विद्या - Knowledge & Inquiry)</h4>
              <p class="small text-muted mb-0">Pursuing knowledge not for mechanical marks, but for deep illumination, conceptual clarity, and social upliftment.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="value-number mb-2">03</div>
              <h4 class="h6 fw-bold text-navy mb-2">Vinaya (विनय - Humility & Respect)</h4>
              <p class="small text-muted mb-0">Cultivating respectful reverence toward teachers, elders, diverse cultures, and empathy towards all living beings.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="value-number mb-2">04</div>
              <h4 class="h6 fw-bold text-navy mb-2">Seva (सेवा - Selfless Service)</h4>
              <p class="small text-muted mb-0">Instilling awareness of social equity, environmental stewardship, and community outreach projects.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100">
              <div class="value-number mb-2">05</div>
              <h4 class="h6 fw-bold text-navy mb-2">Sahas (साहस - Courage & Resilience)</h4>
              <p class="small text-muted mb-0">Empowering children to embrace challenges bravely, learn from setbacks, and stand up courageously for what is right.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="school-card p-4 h-100 bg-navy text-white d-flex flex-column justify-content-center text-center">
              <i class="bi bi-flower1 text-warning fs-2 mb-2"></i>
              <h4 class="h6 fw-bold text-white mb-2">Motto in Action</h4>
              <p class="small text-light opacity-90 mb-0">“Knowledge That Liberates & Character That Inspires”</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- School Management & Advisory Council -->
    <section class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-diagram-3 me-1"></i>Governance
          </span>
          <h2 class="section-title">School Management & Advisory Committee</h2>
          <p class="section-subtitle">
            Guided by eminent educationists, retired administrators, and child welfare specialists committed to continuous institutional growth.
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-md-4">
            <div class="school-card p-4 text-center h-100">
              <div class="gov-avatar mx-auto mb-3">
                <i class="bi bi-person-badge-fill text-warning fs-3"></i>
              </div>
              <h4 class="h6 fw-bold text-navy mb-1">Shri R. K. Agrawal</h4>
              <div class="text-warning small fw-semibold mb-2">Chairman & Managing Trustee</div>
              <p class="small text-muted mb-0">Philanthropist and educational visionary with 35+ years of institutional mentorship.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="school-card p-4 text-center h-100">
              <div class="gov-avatar mx-auto mb-3">
                <i class="bi bi-mortarboard-fill text-warning fs-3"></i>
              </div>
              <h4 class="h6 fw-bold text-navy mb-1">Dr. Sudha Rao</h4>
              <div class="text-warning small fw-semibold mb-2">Principal & Member Secretary</div>
              <p class="small text-muted mb-0">Head of Academic Governance and Teacher Professional Development.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="school-card p-4 text-center h-100">
              <div class="gov-avatar mx-auto mb-3">
                <i class="bi bi-briefcase-fill text-warning fs-3"></i>
              </div>
              <h4 class="h6 fw-bold text-navy mb-1">Prof. Meenakshi Sundaram</h4>
              <div class="text-warning small fw-semibold mb-2">Academic Advisory Dean</div>
              <p class="small text-muted mb-0">Former University Dean advising on STEM pedagogy and teacher training modules.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-navy {
      background-color: #0B2545;
    }

    .bg-gold {
      background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
    }

    .bg-emerald {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
    }

    .text-navy {
      color: #0B2545;
    }

    .tiny-text {
      font-size: 0.72rem;
    }

    .principal-about-img {
      max-width: 280px;
      height: 320px;
      object-fit: cover;
    }

    .pillar-icon {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .value-number {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 800;
      color: #F59E0B;
    }

    .gov-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #0B2545;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #F59E0B;
    }

    .about-floating-card {
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
    }
  `]
})
export class AboutComponent {
  private schoolDataService = inject(SchoolDataService);
  readonly config = this.schoolDataService.config;
}
