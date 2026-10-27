import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Pre-footer Demo Notice Banner -->
    <div class="demo-banner-strip">
      <i class="bi bi-info-circle-fill text-warning"></i>
      <span>{{ config().admissions.demoNotice }}</span>
    </div>

    <!-- Main Footer -->
    <footer class="school-footer text-white pt-5 pb-4">
      <div class="container">
        <div class="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
          <!-- Column 1: School Identity & Mission -->
          <div class="col-lg-4 col-md-6">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="footer-emblem">
                <i class="bi bi-mortarboard-fill text-warning fs-3"></i>
              </div>
              <div>
                <h4 class="text-white h5 mb-0 fw-bold">{{ config().name }}</h4>
                <span class="text-warning small fw-semibold">{{ config().affiliation.board }}</span>
              </div>
            </div>
            <p class="text-secondary small mb-3">
              {{ config().tagline }}. Nurturing academic rigor, moral character, and lifelong leadership from Nursery to Class 10 since {{ config().establishedYear }}.
            </p>
            <div class="motto-box p-2 rounded mb-3 small">
              <i class="bi bi-quote text-warning me-1"></i>
              <span class="fst-italic text-light">{{ config().motto }}</span>
            </div>
            <div class="footer-social d-flex gap-2">
              <a [href]="config().socialLinks.facebook" target="_blank" rel="noopener" aria-label="Facebook" class="social-circle">
                <i class="bi bi-facebook"></i>
              </a>
              <a [href]="config().socialLinks.youtube" target="_blank" rel="noopener" aria-label="YouTube" class="social-circle">
                <i class="bi bi-youtube"></i>
              </a>
              <a [href]="config().socialLinks.instagram" target="_blank" rel="noopener" aria-label="Instagram" class="social-circle">
                <i class="bi bi-instagram"></i>
              </a>
              <a [href]="config().socialLinks.twitter" target="_blank" rel="noopener" aria-label="Twitter" class="social-circle">
                <i class="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="col-lg-2 col-md-6 col-6">
            <h5 class="footer-heading">Quick Links</h5>
            <ul class="footer-links list-unstyled small">
              <li><a routerLink="/"><i class="bi bi-chevron-right me-1 text-warning"></i>Home</a></li>
              <li><a routerLink="/about"><i class="bi bi-chevron-right me-1 text-warning"></i>About Us</a></li>
              <li><a routerLink="/faculty"><i class="bi bi-chevron-right me-1 text-warning"></i>Our Faculty</a></li>
              <li><a routerLink="/facilities"><i class="bi bi-chevron-right me-1 text-warning"></i>Facilities</a></li>
              <li><a routerLink="/gallery"><i class="bi bi-chevron-right me-1 text-warning"></i>Photo Gallery</a></li>
              <li><a routerLink="/contact"><i class="bi bi-chevron-right me-1 text-warning"></i>Contact School</a></li>
            </ul>
          </div>

          <!-- Column 3: Academic & Admissions -->
          <div class="col-lg-3 col-md-6 col-6">
            <h5 class="footer-heading">Academics & Board</h5>
            <ul class="footer-links list-unstyled small">
              <li><a routerLink="/academics"><i class="bi bi-chevron-right me-1 text-warning"></i>Academic Structure</a></li>
              <li><a routerLink="/class-10"><i class="bi bi-star-fill me-1 text-warning"></i>Class 10 Board Hub</a></li>
              <li><a routerLink="/admissions"><i class="bi bi-chevron-right me-1 text-warning"></i>Admission Process</a></li>
              <li><a routerLink="/results"><i class="bi bi-chevron-right me-1 text-warning"></i>Board Results & Awards</a></li>
              <li><a routerLink="/notices"><i class="bi bi-chevron-right me-1 text-warning"></i>Official Notice Board</a></li>
              <li><a routerLink="/class-10"><i class="bi bi-chevron-right me-1 text-warning"></i>Model Question Papers</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Campus Timings -->
          <div class="col-lg-3 col-md-6">
            <h5 class="footer-heading">School Campus</h5>
            <div class="small text-secondary d-flex flex-column gap-2 mb-3">
              <div class="d-flex gap-2">
                <i class="bi bi-geo-alt-fill text-warning mt-1"></i>
                <span>
                  {{ config().contact.address.street }}, {{ config().contact.address.area }},
                  {{ config().contact.address.city }}, {{ config().contact.address.state }} - {{ config().contact.address.pincode }}
                </span>
              </div>
              <div class="d-flex gap-2">
                <i class="bi bi-telephone-fill text-warning mt-1"></i>
                <div>
                  <a [href]="'tel:' + config().contact.phone" class="text-white text-decoration-none d-block">{{ config().contact.phone }}</a>
                  <a [href]="'tel:' + config().contact.alternatePhone" class="text-secondary text-decoration-none small">{{ config().contact.alternatePhone }}</a>
                </div>
              </div>
              <div class="d-flex gap-2">
                <i class="bi bi-envelope-fill text-warning mt-1"></i>
                <a [href]="'mailto:' + config().contact.email" class="text-white text-decoration-none">{{ config().contact.email }}</a>
              </div>
              <div class="d-flex gap-2">
                <i class="bi bi-clock-fill text-warning mt-1"></i>
                <span>Mon–Fri: {{ config().contact.officeHours.weekdays }}<br>Sat: {{ config().contact.officeHours.saturday }}</span>
              </div>
            </div>
            <a routerLink="/contact" class="btn-outline-white btn-sm w-100 text-center py-2">
              <i class="bi bi-map me-1"></i>View School on Map
            </a>
          </div>
        </div>

        <!-- Bottom Copyright & Legal Strip -->
        <div class="row pt-3 align-items-center small text-secondary">
          <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
            © {{ currentYear }} {{ config().name }}. All Rights Reserved. (Demo School Website)
          </div>
          <div class="col-md-6 text-center text-md-end">
            <span class="mx-2">CBSE Affiliation: {{ config().affiliation.affiliationNumber }}</span>
            <span class="mx-2">|</span>
            <a routerLink="/about" class="text-secondary text-decoration-none">Privacy Policy</a>
            <span class="mx-2">|</span>
            <a routerLink="/about" class="text-secondary text-decoration-none">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .school-footer {
      background: linear-gradient(180deg, #07192F 0%, #030C19 100%);
      border-top: 4px solid #F59E0B;
    }

    .footer-emblem {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.08);
      border: 1.5px solid rgba(245, 158, 11, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .motto-box {
      background: rgba(255, 255, 255, 0.05);
      border-left: 3px solid #F59E0B;
    }

    .footer-heading {
      color: #FFFFFF;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      position: relative;
      padding-bottom: 0.5rem;
    }

    .footer-heading::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 32px;
      height: 2px;
      background: #F59E0B;
      border-radius: 2px;
    }

    .footer-links li {
      margin-bottom: 0.6rem;
    }

    .footer-links a {
      color: #94A3B8;
      text-decoration: none;
      transition: all 0.2s ease;
      display: inline-block;
    }

    .footer-links a:hover {
      color: #F59E0B;
      transform: translateX(4px);
    }

    .social-circle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      color: #E2E8F0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      text-decoration: none;
    }

    .social-circle:hover {
      background: #F59E0B;
      color: #07192F;
      transform: translateY(-2px);
    }
  `]
})
export class FooterComponent {
  private schoolDataService = inject(SchoolDataService);
  readonly config = this.schoolDataService.config;
  readonly currentYear = new Date().getFullYear();
}
