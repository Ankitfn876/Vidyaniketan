import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PageBannerComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="Contact Our School Administration"
      subtitle="We are delighted to assist prospective parents, students, and visitors. Connect with our admissions and administrative office"
      badge="Campus Helpdesk"
      badgeIcon="bi-headset"
      [highlightStat]="{ label: 'Office Hours', value: 'Mon–Sat Active' }">
    </app-page-banner>

    <!-- Contact Cards Grid -->
    <section class="py-5 bg-white">
      <div class="container py-lg-3">
        <div class="row g-4 mb-5">
          <!-- Address Card -->
          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="contact-icon-box mx-auto mb-3 bg-navy text-warning">
                <i class="bi bi-geo-alt-fill fs-3"></i>
              </div>
              <h3 class="h6 fw-bold text-navy mb-2">School Address</h3>
              <p class="small text-muted mb-0">
                {{ config().contact.address.street }}, {{ config().contact.address.area }},<br>
                {{ config().contact.address.city }}, {{ config().contact.address.state }} - {{ config().contact.address.pincode }}
              </p>
            </div>
          </div>

          <!-- Phone Card -->
          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="contact-icon-box mx-auto mb-3 bg-gold text-dark">
                <i class="bi bi-telephone-fill fs-3"></i>
              </div>
              <h3 class="h6 fw-bold text-navy mb-2">Telephone Helplines</h3>
              <a [href]="'tel:' + config().contact.phone" class="d-block small text-navy fw-bold text-decoration-none mb-1">
                {{ config().contact.phone }}
              </a>
              <a [href]="'tel:' + config().contact.alternatePhone" class="d-block small text-secondary text-decoration-none">
                {{ config().contact.alternatePhone }} (Admissions)
              </a>
            </div>
          </div>

          <!-- Email Card -->
          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="contact-icon-box mx-auto mb-3 bg-navy text-warning">
                <i class="bi bi-envelope-fill fs-3"></i>
              </div>
              <h3 class="h6 fw-bold text-navy mb-2">Email Desk</h3>
              <a [href]="'mailto:' + config().contact.email" class="d-block small text-navy fw-semibold text-decoration-none mb-1">
                {{ config().contact.email }}
              </a>
              <a [href]="'mailto:' + config().contact.admissionsEmail" class="d-block small text-secondary text-decoration-none">
                {{ config().contact.admissionsEmail }}
              </a>
            </div>
          </div>

          <!-- Office Hours Card -->
          <div class="col-md-6 col-lg-3">
            <div class="school-card p-4 h-100 text-center">
              <div class="contact-icon-box mx-auto mb-3 bg-gold text-dark">
                <i class="bi bi-clock-fill fs-3"></i>
              </div>
              <h3 class="h6 fw-bold text-navy mb-2">Visiting Hours</h3>
              <p class="small text-muted mb-1">
                <strong>Mon–Fri:</strong> {{ config().contact.officeHours.weekdays }}
              </p>
              <p class="small text-muted mb-0">
                <strong>Saturday:</strong> {{ config().contact.officeHours.saturday }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form & Map Row -->
        <div class="row g-5">
          <!-- Left: Contact Enquiry Form -->
          <div class="col-lg-6">
            <div class="p-4 p-md-5 rounded-4 bg-light border shadow-sm h-100 d-flex flex-column">
              <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold align-self-start mb-2">
                Send an Enquiry
              </span>
              <h3 class="h4 fw-bold text-navy mb-2">Send Us a Direct Message</h3>
              <p class="small text-muted mb-4">
                Have questions regarding syllabus, admission procedures, or campus visits? Submit this enquiry form and our admissions counselor will reach out.
              </p>

              <!-- Success Alert Message -->
              <div *ngIf="submitSuccess()" class="alert alert-success d-flex align-items-center gap-2 small mb-4">
                <i class="bi bi-check-circle-fill fs-4 text-success"></i>
                <div>
                  <strong>Demo Enquiry Logged!</strong> Reference: {{ demoRefId() }}.<br>
                  Thank you for reaching out! In production, this form connects to the school administrative notification system.
                </div>
              </div>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="flex-grow-1 d-flex flex-column">
                <div class="mb-3">
                  <label class="form-label" for="senderName">Your Full Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="senderName"
                    formControlName="senderName"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('senderName')"
                    placeholder="Enter your full name">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('senderName')">
                    Name is required (minimum 3 characters).
                  </div>
                </div>

                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label class="form-label" for="senderMobile">Mobile Number <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text bg-white">+91</span>
                      <input
                        type="tel"
                        id="senderMobile"
                        formControlName="senderMobile"
                        maxlength="10"
                        class="form-control"
                        [class.is-invalid]="isFieldInvalid('senderMobile')"
                        placeholder="9826012345">
                    </div>
                    <div class="invalid-feedback d-block" *ngIf="isFieldInvalid('senderMobile')">
                      Please enter a valid 10-digit mobile number.
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label" for="senderEmail">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="senderEmail"
                      formControlName="senderEmail"
                      class="form-control"
                      [class.is-invalid]="isFieldInvalid('senderEmail')"
                      placeholder="name@example.com">
                    <div class="invalid-feedback" *ngIf="isFieldInvalid('senderEmail')">
                      Please enter a valid email address.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="enquirySubject">Enquiry Subject <span class="text-danger">*</span></label>
                  <select
                    id="enquirySubject"
                    formControlName="enquirySubject"
                    class="form-select"
                    [class.is-invalid]="isFieldInvalid('enquirySubject')">
                    <option value="" disabled>Choose enquiry subject</option>
                    <option value="New Admission Enquiry (2026-27)">New Admission Enquiry (2026-27)</option>
                    <option value="Class 10 Board Curriculum Query">Class 10 Board Curriculum Query</option>
                    <option value="School Bus & Transport Routes">School Bus & Transport Routes</option>
                    <option value="Campus Tour Request">Campus Tour Request</option>
                    <option value="Career & Job Opportunities">Career & Job Opportunities</option>
                    <option value="Other Administrative Inquiry">Other Administrative Inquiry</option>
                  </select>
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('enquirySubject')">
                    Please select an enquiry category.
                  </div>
                </div>

                <div class="mb-4">
                  <label class="form-label" for="messageText">Message / Query <span class="text-danger">*</span></label>
                  <textarea
                    id="messageText"
                    formControlName="messageText"
                    rows="4"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('messageText')"
                    placeholder="Write your query or message here..."></textarea>
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('messageText')">
                    Message is required (minimum 10 characters).
                  </div>
                </div>

                <div class="mt-auto">
                  <button
                    type="submit"
                    [disabled]="isSubmitting()"
                    class="btn-gold py-2 px-5 w-100">
                    <span *ngIf="isSubmitting()" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    <i *ngIf="!isSubmitting()" class="bi bi-send-fill me-1"></i>
                    <span>{{ isSubmitting() ? 'Sending Demo Message...' : 'Submit Message' }}</span>
                  </button>
                  <div class="tiny-text text-muted text-center mt-2">
                    <i class="bi bi-info-circle me-1"></i>Demo form: No data stored in external servers or local browser storage.
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Right: Google Maps & Directions -->
          <div class="col-lg-6">
            <div class="p-4 p-md-5 rounded-4 bg-white border shadow-sm h-100 d-flex flex-column">
              <span class="section-tag gold">
                <i class="bi bi-geo-alt me-1"></i>Visit Our Campus
              </span>
              <h3 class="h4 fw-bold text-navy mb-2">Campus Map & Directions</h3>
              <p class="small text-muted mb-4">
                Located on Bawadiya Kalan Main Road, in Bhopal's serene educational zone, easily accessible via public and private transport.
              </p>

              <!-- Embedded Interactive Map Placeholder -->
              <div class="map-container rounded-4 overflow-hidden border mb-4 position-relative">
                <iframe
                  title="Vidya Niketan School Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117363.38545803274!2d77.34861899999999!3d23.213192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <!-- Campus Directions Summary -->
              <div class="p-3 bg-light rounded-3 small text-secondary mt-auto">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="fw-bold text-navy">Landmark:</span>
                  <span>{{ config().contact.address.landmark }}</span>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="fw-bold text-navy">Nearest Railway Station:</span>
                  <span>Bhopal Junction / Rani Kamlapati (8.5 km)</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="fw-bold text-navy">Airport Distance:</span>
                  <span>Raja Bhoj Airport (18 km)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Frequently Asked Questions (Accordion) -->
    <section class="py-5 bg-light">
      <div class="container py-lg-3">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-question-circle-fill me-1"></i>Got Questions?
          </span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Find answers to commonly asked questions regarding admissions, CBSE curriculum, board exam support, and student transit.
          </p>
        </div>

        <div class="max-w-900 mx-auto">
          <div class="accordion school-accordion" id="faqAccordion">
            <div *ngFor="let faq of faqs(); let i = index" class="accordion-item mb-3 border rounded-3 overflow-hidden shadow-sm">
              <h2 class="accordion-header" [id]="'heading' + i">
                <button
                  class="accordion-button fw-bold text-navy"
                  [class.collapsed]="openAccordionIndex() !== i"
                  type="button"
                  (click)="toggleAccordion(i)"
                  [attr.aria-expanded]="openAccordionIndex() === i">
                  <i class="bi bi-patch-question text-warning me-2 fs-5"></i>
                  {{ faq.question }}
                </button>
              </h2>
              <div
                class="accordion-collapse collapse"
                [class.show]="openAccordionIndex() === i"
                [attr.aria-labelledby]="'heading' + i">
                <div class="accordion-body small text-secondary line-height-relaxed bg-white">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-navy { background-color: #0B2545; }
    .bg-gold { background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); }
    .text-navy { color: #0B2545; }
    .max-w-700 { max-width: 700px; }
    .max-w-900 { max-width: 900px; }
    .tiny-text { font-size: 0.75rem; }
    .line-height-relaxed { line-height: 1.7; }

    .contact-icon-box {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .map-container {
      min-height: 280px;
      background: #E2E8F0;
    }

    .accordion-button:not(.collapsed) {
      background-color: #FEF3C7;
      color: #0B2545;
      box-shadow: none;
    }

    .accordion-button:focus {
      box-shadow: none;
      border-color: #F59E0B;
    }
  `]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private schoolDataService = inject(SchoolDataService);

  readonly config = this.schoolDataService.config;
  readonly faqs = this.schoolDataService.faqs;

  readonly isSubmitting = signal<boolean>(false);
  readonly submitSuccess = signal<boolean>(false);
  readonly demoRefId = signal<string>('');
  readonly openAccordionIndex = signal<number | null>(0);

  contactForm: FormGroup = this.fb.group({
    senderName: ['', [Validators.required, Validators.minLength(3)]],
    senderMobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    senderEmail: ['', [Validators.email]],
    enquirySubject: ['', Validators.required],
    messageText: ['', [Validators.required, Validators.minLength(10)]]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const val = this.contactForm.value;
    this.schoolDataService.submitContact({
      name: val.senderName,
      mobile: val.senderMobile,
      email: val.senderEmail,
      subject: val.enquirySubject,
      message: val.messageText
    }).subscribe({
      next: (res) => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.demoRefId.set(res.refId);
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting.set(false);
        alert('An unexpected error occurred while sending message.');
      }
    });
  }

  toggleAccordion(index: number) {
    if (this.openAccordionIndex() === index) {
      this.openAccordionIndex.set(null);
    } else {
      this.openAccordionIndex.set(index);
    }
  }
}
