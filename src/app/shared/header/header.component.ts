import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SchoolDataService } from '../../core/services/school-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Top Contact & Announcement Bar -->
    <div class="top-bar py-2">
      <div class="container d-flex flex-wrap justify-content-between align-items-center gap-2">
        <div class="d-flex align-items-center gap-3 top-bar-left">
          <span class="admission-badge">
            <i class="bi bi-megaphone-fill me-1"></i>
            Admissions Open {{ config().admissions.session }}
          </span>
          <span class="d-none d-md-inline text-white-50">|</span>
          <a [href]="'tel:' + config().contact.phone" class="top-link d-none d-sm-inline-flex align-items-center gap-1">
            <i class="bi bi-telephone-fill"></i>
            <span>{{ config().contact.phone }}</span>
          </a>
          <span class="d-none d-lg-inline text-white-50">|</span>
          <a [href]="'mailto:' + config().contact.email" class="top-link d-none d-lg-inline-flex align-items-center gap-1">
            <i class="bi bi-envelope-fill"></i>
            <span>{{ config().contact.email }}</span>
          </a>
        </div>
        <div class="d-flex align-items-center gap-3 top-bar-right">
          <span class="school-location d-none d-xl-inline-flex align-items-center gap-1">
            <i class="bi bi-geo-alt-fill text-warning"></i>
            <span>{{ config().contact.address.city }}, {{ config().contact.address.state }}</span>
          </span>
          <div class="social-icons-mini d-none d-md-flex align-items-center gap-2">
            <a [href]="config().socialLinks.facebook" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a [href]="config().socialLinks.youtube" target="_blank" rel="noopener" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            <a [href]="config().socialLinks.instagram" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar (Sticky with blur) -->
    <header class="main-header" [class.is-scrolled]="isScrolled()">
      <div class="container d-flex align-items-center justify-content-between py-2">
        <!-- School Brand Identity -->
        <a routerLink="/" class="brand-link d-flex align-items-center gap-3 text-decoration-none">
          <div class="school-emblem">
            <div class="emblem-shield">
              <i class="bi bi-mortarboard-fill emblem-icon"></i>
            </div>
          </div>
          <div class="brand-text">
            <span class="brand-title">{{ config().name }}</span>
            <span class="brand-tagline d-none d-sm-block">{{ config().tagline }}</span>
            <span class="brand-badge d-sm-none">CBSE Affiliated (1030982)</span>
          </div>
        </a>

        <!-- Desktop Navigation Menu -->
        <nav class="desktop-nav d-none d-xl-flex align-items-center gap-1" aria-label="Main Navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item-link">Home</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-item-link">About Us</a>
          <a routerLink="/academics" routerLinkActive="active" class="nav-item-link">Academics</a>
          <a routerLink="/admissions" routerLinkActive="active" class="nav-item-link">Admissions</a>
          <a routerLink="/faculty" routerLinkActive="active" class="nav-item-link">Faculty</a>
          <a routerLink="/facilities" routerLinkActive="active" class="nav-item-link">Facilities</a>
          <a routerLink="/gallery" routerLinkActive="active" class="nav-item-link">Gallery</a>
          <a routerLink="/results" routerLinkActive="active" class="nav-item-link">Results</a>
          <a routerLink="/notices" routerLinkActive="active" class="nav-item-link">Notices</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-item-link">Contact Us</a>
        </nav>

        <!-- Right Action Button & Mobile Toggle -->
        <div class="d-flex align-items-center gap-2">
          <a routerLink="/admissions" class="btn-gold btn-sm px-3 d-none d-sm-inline-flex align-items-center gap-1">
            <i class="bi bi-pencil-square"></i>
            <span>Apply Now</span>
          </a>

          <!-- Hamburger Toggle Button -->
          <button
            class="mobile-toggle-btn d-xl-none"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-label="Toggle Navigation Menu">
            <i class="bi" [ngClass]="mobileMenuOpen() ? 'bi-x-lg' : 'bi-list'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation Drawer -->
      <div class="mobile-drawer d-xl-none" [class.open]="mobileMenuOpen()">
        <div class="container py-3">
          <div class="mobile-nav-links d-flex flex-column gap-2">
            <a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="mobile-nav-link">
              <i class="bi bi-house-door-fill me-2"></i>Home
            </a>
            <a routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-info-circle-fill me-2"></i>About Us
            </a>
            <a routerLink="/academics" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-book-half me-2"></i>Academics & Curriculum
            </a>
            <a routerLink="/class-10" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link special-highlight">
              <i class="bi bi-award-fill me-2 text-warning"></i>Class 10 Board Hub
            </a>
            <a routerLink="/admissions" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-pencil-square me-2"></i>Admissions (2026–27)
            </a>
            <a routerLink="/faculty" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-people-fill me-2"></i>Our Faculty
            </a>
            <a routerLink="/facilities" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-building-check me-2"></i>Campus Facilities
            </a>
            <a routerLink="/gallery" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-images me-2"></i>Photo Gallery
            </a>
            <a routerLink="/results" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-patch-check-fill me-2"></i>Results & Achievements
            </a>
            <a routerLink="/notices" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-bell-fill me-2"></i>School Notices
            </a>
            <a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
              <i class="bi bi-envelope-fill me-2"></i>Contact Us
            </a>
          </div>

          <div class="mobile-menu-footer mt-4 pt-3 border-top border-light-subtle">
            <a routerLink="/admissions" (click)="closeMobileMenu()" class="btn-gold w-100 py-2 text-center mb-2">
              <i class="bi bi-check-circle-fill me-2"></i>Apply for Admission Online
            </a>
            <div class="d-flex justify-content-between text-muted small mt-2">
              <span><i class="bi bi-telephone-fill me-1"></i>{{ config().contact.phone }}</span>
              <span><i class="bi bi-clock-fill me-1"></i>08:00 AM – 03:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .top-bar {
      background: linear-gradient(90deg, #07192F 0%, #0B2545 100%);
      color: #E2E8F0;
      font-size: 0.82rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .admission-badge {
      background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
      color: #0F172A;
      font-weight: 700;
      font-size: 0.75rem;
      padding: 0.2rem 0.65rem;
      border-radius: 9999px;
      letter-spacing: 0.02em;
    }

    .top-link {
      color: #CBD5E1;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .top-link:hover {
      color: #F59E0B;
    }

    .social-icons-mini a {
      color: #94A3B8;
      font-size: 0.9rem;
      transition: color 0.2s ease;
    }

    .social-icons-mini a:hover {
      color: #F59E0B;
    }

    /* Main Navigation */
    .main-header {
      background: #FFFFFF;
      position: sticky;
      top: 0;
      z-index: 1020;
      box-shadow: 0 2px 10px rgba(11, 37, 69, 0.06);
      transition: all 0.3s ease;
      border-bottom: 1px solid #E2E8F0;
    }

    .main-header.is-scrolled {
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(11, 37, 69, 0.1);
    }

    .school-emblem {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, #0B2545 0%, #133B6B 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #F59E0B;
      box-shadow: 0 4px 10px rgba(11, 37, 69, 0.2);
      flex-shrink: 0;
    }

    .emblem-icon {
      font-size: 1.5rem;
      color: #F59E0B;
    }

    .brand-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.25rem;
      color: #0B2545;
      display: block;
      line-height: 1.15;
      letter-spacing: -0.01em;
    }

    .brand-tagline {
      font-size: 0.76rem;
      color: #64748B;
      font-weight: 500;
      line-height: 1.2;
    }

    .brand-badge {
      font-size: 0.7rem;
      color: #D97706;
      font-weight: 600;
    }

    /* Desktop Navigation Links */
    .nav-item-link {
      font-family: var(--font-body);
      font-size: 0.88rem;
      font-weight: 600;
      color: #334155;
      padding: 0.5rem 0.65rem;
      border-radius: 8px;
      transition: all 0.2s ease;
      text-decoration: none;
      white-space: nowrap;
    }

    .nav-item-link:hover {
      color: #0B2545;
      background-color: #F1F5F9;
    }

    .nav-item-link.active {
      color: #0B2545;
      background-color: #FEF3C7;
      box-shadow: inset 0 -2px 0 #D97706;
    }

    /* Mobile Menu Toggle */
    .mobile-toggle-btn {
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      color: #0B2545;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .mobile-toggle-btn:hover {
      background: #E2E8F0;
    }

    /* Mobile Drawer */
    .mobile-drawer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease-in-out;
      background: #FFFFFF;
      border-top: 1px solid #E2E8F0;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }

    .mobile-drawer.open {
      max-height: 650px;
      overflow-y: auto;
    }

    .mobile-nav-link {
      padding: 0.7rem 1rem;
      font-weight: 600;
      color: #1E293B;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      font-size: 0.95rem;
    }

    .mobile-nav-link:hover, .mobile-nav-link.active {
      background-color: #FEF3C7;
      color: #B45309;
    }

    .mobile-nav-link.special-highlight {
      background: linear-gradient(90deg, #EDF3FA 0%, #FFFFFF 100%);
      border-left: 4px solid #D97706;
    }
  `]
})
export class HeaderComponent {
  private schoolDataService = inject(SchoolDataService);
  readonly config = this.schoolDataService.config;

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly isScrolled = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
