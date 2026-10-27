import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SchoolDataService } from '../../core/services/school-data.service';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { AdmissionSubmissionResult } from '../../core/models/admission.model';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PageBannerComponent],
  template: `
    <!-- Page Banner -->
    <app-page-banner
      title="Admissions Open 2026–2027"
      subtitle="Join a community committed to nurturing character, intellectual curiosity, and academic excellence"
      badge="Academic Session 2026-27"
      badgeIcon="bi-pencil-square"
      [highlightStat]="{ label: 'Classes Open', value: 'Nursery to Class 10' }">
    </app-page-banner>

    <!-- Admission Process Steps Strip -->
    <section class="py-5 bg-white">
      <div class="container py-lg-3">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="section-tag">
            <i class="bi bi-diagram-3 me-1"></i>Simple & Transparent
          </span>
          <h2 class="section-title">Admission Process in 4 Steps</h2>
          <p class="section-subtitle">
            A welcoming, transparent enrollment journey designed to ensure the best educational fit for your child.
          </p>
        </div>

        <div class="row g-4 text-center">
          <div class="col-md-6 col-lg-3">
            <div class="step-card p-4 rounded-4 bg-light h-100 position-relative">
              <div class="step-badge mx-auto mb-3 bg-navy text-warning fw-bold">1</div>
              <h3 class="h6 fw-bold text-navy mb-2">Online Registration</h3>
              <p class="small text-muted mb-0">Fill the interactive registration form below or visit our campus administrative counter.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="step-card p-4 rounded-4 bg-light h-100 position-relative">
              <div class="step-badge mx-auto mb-3 bg-gold text-dark fw-bold">2</div>
              <h3 class="h6 fw-bold text-navy mb-2">Campus Interaction</h3>
              <p class="small text-muted mb-0">Informal friendly interaction for young learners and diagnostic conceptual review for senior classes.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="step-card p-4 rounded-4 bg-light h-100 position-relative">
              <div class="step-badge mx-auto mb-3 bg-navy text-warning fw-bold">3</div>
              <h3 class="h6 fw-bold text-navy mb-2">Document Verification</h3>
              <p class="small text-muted mb-0">Verification of birth certificate, previous school transfer certificate, and academic report cards.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="step-card p-4 rounded-4 bg-light h-100 position-relative">
              <div class="step-badge mx-auto mb-3 bg-gold text-dark fw-bold">4</div>
              <h3 class="h6 fw-bold text-navy mb-2">Enrollment Confirmation</h3>
              <p class="small text-muted mb-0">Receipt of admission offer letter, payment of quarterly fees, and distribution of student kit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Eligibility & Important Dates Table -->
    <section class="py-5 bg-light">
      <div class="container py-lg-3">
        <div class="row g-5">
          <!-- Left: Age Criteria Table -->
          <div class="col-lg-6">
            <span class="section-tag gold">
              <i class="bi bi-calendar-check me-1"></i>Age Eligibility Chart
            </span>
            <h3 class="h4 fw-bold text-navy mb-3">Age Criteria (As of 31st March 2026)</h3>
            <div class="school-card overflow-hidden">
              <table class="table table-hover mb-0 small">
                <thead class="table-dark bg-navy">
                  <tr>
                    <th class="py-3 px-3">Class</th>
                    <th class="py-3">Recommended Age</th>
                    <th class="py-3 px-3">Curriculum Framework</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="fw-bold py-2 px-3 text-navy">Nursery</td>
                    <td class="py-2">3+ Years</td>
                    <td class="py-2 px-3 text-muted">Play-way & Montessori</td>
                  </tr>
                  <tr>
                    <td class="fw-bold py-2 px-3 text-navy">Lower KG (LKG)</td>
                    <td class="py-2">4+ Years</td>
                    <td class="py-2 px-3 text-muted">Foundational Phonics</td>
                  </tr>
                  <tr>
                    <td class="fw-bold py-2 px-3 text-navy">Upper KG (UKG)</td>
                    <td class="py-2">5+ Years</td>
                    <td class="py-2 px-3 text-muted">Pre-Primary Prep</td>
                  </tr>
                  <tr>
                    <td class="fw-bold py-2 px-3 text-navy">Class 1</td>
                    <td class="py-2">6+ Years</td>
                    <td class="py-2 px-3 text-muted">Primary CBSE Wing</td>
                  </tr>
                  <tr>
                    <td class="fw-bold py-2 px-3 text-navy">Classes 2 to 9</td>
                    <td class="py-2">Progressive 7+ to 14+</td>
                    <td class="py-2 px-3 text-muted">Based on Transfer Certificate</td>
                  </tr>
                  <tr>
                    <td class="fw-bold py-2 px-3 text-navy">Class 10</td>
                    <td class="py-2">15+ Years</td>
                    <td class="py-2 px-3 text-muted">CBSE Transfer Cases Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Right: Documents Checklist -->
          <div class="col-lg-6">
            <span class="section-tag">
              <i class="bi bi-files me-1"></i>Checklist
            </span>
            <h3 class="h4 fw-bold text-navy mb-3">Mandatory Documents Checklist</h3>
            <div class="p-4 rounded-4 bg-white shadow-sm border">
              <ul class="list-unstyled small text-secondary mb-3 d-flex flex-column gap-2">
                <li class="d-flex align-items-start gap-2">
                  <i class="bi bi-check-circle-fill text-warning mt-1"></i>
                  <span><strong>Child’s Birth Certificate:</strong> Issued by Municipal Corporation or authorized Registrar (Original + 2 copies).</span>
                </li>
                <li class="d-flex align-items-start gap-2">
                  <i class="bi bi-check-circle-fill text-warning mt-1"></i>
                  <span><strong>Recent Passport Photographs:</strong> 4 colored passport size photos of the child and 2 of each parent/guardian.</span>
                </li>
                <li class="d-flex align-items-start gap-2">
                  <i class="bi bi-check-circle-fill text-warning mt-1"></i>
                  <span><strong>Previous School Transfer Certificate (TC):</strong> Countersigned by Education Officer (for Class 2 and above).</span>
                </li>
                <li class="d-flex align-items-start gap-2">
                  <i class="bi bi-check-circle-fill text-warning mt-1"></i>
                  <span><strong>Previous Class Marksheet:</strong> Report card copy of the previous academic grade.</span>
                </li>
                <li class="d-flex align-items-start gap-2">
                  <i class="bi bi-check-circle-fill text-warning mt-1"></i>
                  <span><strong>Address & Identity Proof:</strong> Parents’ Aadhaar Card / Voter ID / Passport copy.</span>
                </li>
              </ul>
              <div class="p-2 rounded bg-warning bg-opacity-10 text-dark tiny-text">
                <i class="bi bi-info-circle-fill text-warning me-1"></i>
                Admissions are granted on first-come-first-served basis subject to seat availability and interaction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dedicated Admission Reactive Form -->
    <section class="py-5 bg-white" id="admission-form-section">
      <div class="container py-lg-4">
        <div class="max-w-900 mx-auto">
          <!-- Form Header -->
          <div class="text-center mb-5">
            <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
              Online Registration Portal
            </span>
            <h2 class="section-title">Student Admission Application Form</h2>
            <p class="text-muted small">
              Please complete all required fields accurately. Once submitted, you will receive a demo confirmation and reference number.
            </p>
            <div class="demo-banner-strip rounded-3 my-3">
              <i class="bi bi-shield-exclamation text-warning"></i>
              <span>This is a demonstration admission form. No children's personal data is transmitted or stored in browser storage.</span>
            </div>
          </div>

          <!-- The Form -->
          <form [formGroup]="admissionForm" (ngSubmit)="onSubmit()" class="p-4 p-md-5 rounded-4 shadow-sm border bg-white">
            
            <!-- SECTION 1: Student Information -->
            <div class="form-section-block mb-5">
              <div class="d-flex align-items-center gap-2 pb-2 mb-4 border-bottom border-warning border-2">
                <span class="section-num-badge">1</span>
                <h4 class="h5 fw-bold text-navy mb-0">Student Information</h4>
              </div>

              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label" for="fullName">Student Full Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    formControlName="fullName"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('fullName')"
                    placeholder="Enter student's complete name">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('fullName')">
                    Please provide the student's full name (at least 3 characters).
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="dateOfBirth">Date of Birth <span class="text-danger">*</span></label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    formControlName="dateOfBirth"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('dateOfBirth')">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('dateOfBirth')">
                    Date of birth is required.
                  </div>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="gender">Gender <span class="text-danger">*</span></label>
                  <select
                    id="gender"
                    formControlName="gender"
                    class="form-select"
                    [class.is-invalid]="isFieldInvalid('gender')">
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('gender')">
                    Please select gender.
                  </div>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="bloodGroup">Blood Group (Optional)</label>
                  <select id="bloodGroup" formControlName="bloodGroup" class="form-select">
                    <option value="">Select (Optional)</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="nationality">Nationality <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="nationality"
                    formControlName="nationality"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('nationality')">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('nationality')">
                    Nationality is required.
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="classAppliedFor">Class Applied For <span class="text-danger">*</span></label>
                  <select
                    id="classAppliedFor"
                    formControlName="classAppliedFor"
                    class="form-select"
                    [class.is-invalid]="isFieldInvalid('classAppliedFor')">
                    <option value="" disabled>Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">Lower KG (LKG)</option>
                    <option value="UKG">Upper KG (UKG)</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10 (Subject to TC & CBSE Rules)</option>
                  </select>
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('classAppliedFor')">
                    Please choose a class.
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="academicSession">Academic Session</label>
                  <input
                    type="text"
                    id="academicSession"
                    formControlName="academicSession"
                    readonly
                    class="form-control bg-light">
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="previousSchool">Previous School Name (If Any)</label>
                  <input
                    type="text"
                    id="previousSchool"
                    formControlName="previousSchool"
                    class="form-control"
                    placeholder="E.g. St. Xavier’s Primary School">
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="previousClass">Previous Class Attended</label>
                  <input
                    type="text"
                    id="previousClass"
                    formControlName="previousClass"
                    class="form-control"
                    placeholder="E.g. Class 4">
                </div>
              </div>
            </div>

            <!-- SECTION 2: Parent or Guardian Information -->
            <div class="form-section-block mb-5">
              <div class="d-flex align-items-center gap-2 pb-2 mb-4 border-bottom border-warning border-2">
                <span class="section-num-badge">2</span>
                <h4 class="h5 fw-bold text-navy mb-0">Parent / Guardian Details</h4>
              </div>

              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label" for="fatherName">Father's Full Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="fatherName"
                    formControlName="fatherName"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('fatherName')"
                    placeholder="Enter father's name">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('fatherName')">
                    Father's name is required.
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="motherName">Mother's Full Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="motherName"
                    formControlName="motherName"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('motherName')"
                    placeholder="Enter mother's name">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('motherName')">
                    Mother's name is required.
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="primaryMobile">Parent's Mobile Number (10 Digits) <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-light">+91</span>
                    <input
                      type="tel"
                      id="primaryMobile"
                      formControlName="primaryMobile"
                      class="form-control"
                      maxlength="10"
                      [class.is-invalid]="isFieldInvalid('primaryMobile')"
                      placeholder="9826012345">
                  </div>
                  <div class="invalid-feedback d-block" *ngIf="isFieldInvalid('primaryMobile')">
                    Please provide a valid 10-digit Indian mobile number (starts with 6-9).
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="alternateMobile">Alternate Contact Number</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light">+91</span>
                    <input
                      type="tel"
                      id="alternateMobile"
                      formControlName="alternateMobile"
                      class="form-control"
                      maxlength="10"
                      placeholder="Alternate phone number">
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="parentEmail">Email Address (For Notifications)</label>
                  <input
                    type="email"
                    id="parentEmail"
                    formControlName="parentEmail"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('parentEmail')"
                    placeholder="parent@example.com">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('parentEmail')">
                    Please enter a valid email address.
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="occupation">Parent's Occupation / Profession</label>
                  <input
                    type="text"
                    id="occupation"
                    formControlName="occupation"
                    class="form-control"
                    placeholder="E.g. Engineer, Teacher, Doctor, Business">
                </div>
              </div>
            </div>

            <!-- SECTION 3: Residential Address -->
            <div class="form-section-block mb-5">
              <div class="d-flex align-items-center gap-2 pb-2 mb-4 border-bottom border-warning border-2">
                <span class="section-num-badge">3</span>
                <h4 class="h5 fw-bold text-navy mb-0">Residential Address</h4>
              </div>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label" for="streetAddress">House Number & Street / Colony <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="streetAddress"
                    formControlName="streetAddress"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('streetAddress')"
                    placeholder="E.g. H.No 45, Gulmohar Enclave">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('streetAddress')">
                    Street address is required.
                  </div>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="cityOrTown">City / Town / Village <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="cityOrTown"
                    formControlName="cityOrTown"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('cityOrTown')"
                    placeholder="E.g. Bhopal">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('cityOrTown')">
                    City/Town is required.
                  </div>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="district">District <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="district"
                    formControlName="district"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('district')"
                    placeholder="E.g. Bhopal">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('district')">
                    District is required.
                  </div>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="state">State <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="state"
                    formControlName="state"
                    class="form-control"
                    [class.is-invalid]="isFieldInvalid('state')"
                    placeholder="E.g. Madhya Pradesh">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('state')">
                    State is required.
                  </div>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="pincode">PIN Code (6 Digits) <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    id="pincode"
                    formControlName="pincode"
                    class="form-control"
                    maxlength="6"
                    [class.is-invalid]="isFieldInvalid('pincode')"
                    placeholder="462026">
                  <div class="invalid-feedback" *ngIf="isFieldInvalid('pincode')">
                    Please provide a valid 6-digit Indian PIN code.
                  </div>
                </div>
              </div>
            </div>

            <!-- SECTION 4: Document Verification Declarations -->
            <div class="form-section-block mb-4">
              <div class="d-flex align-items-center gap-2 pb-2 mb-4 border-bottom border-warning border-2">
                <span class="section-num-badge">4</span>
                <h4 class="h5 fw-bold text-navy mb-0">Documents & Declaration</h4>
              </div>

              <div class="p-3 bg-light rounded-3 mb-4">
                <span class="small fw-bold text-navy d-block mb-2">Check the documents you will produce during interaction:</span>
                <div class="row g-2 small text-secondary">
                  <div class="col-md-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="docBirth" checked>
                      <label class="form-check-label" for="docBirth">Original Birth Certificate</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="docPhoto" checked>
                      <label class="form-check-label" for="docPhoto">Recent Passport Photographs</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="docAadhaar" checked>
                      <label class="form-check-label" for="docAadhaar">Parents’ ID & Address Proof</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="docTC" checked>
                      <label class="form-check-label" for="docTC">Previous School Transfer Certificate (if applicable)</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                  formControlName="agreeTerms"
                  [class.is-invalid]="isFieldInvalid('agreeTerms')">
                <label class="form-check-label small text-secondary" for="agreeTerms">
                  I hereby declare that all information furnished above is correct to the best of my knowledge. I understand this is an interactive demo admission registration. <span class="text-danger">*</span>
                </label>
                <div class="invalid-feedback" *ngIf="isFieldInvalid('agreeTerms')">
                  You must confirm the declaration to proceed.
                </div>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 border-top">
              <button
                type="button"
                (click)="resetForm()"
                class="btn btn-outline-secondary px-4 py-2">
                <i class="bi bi-arrow-counterclockwise me-1"></i>Reset Form
              </button>

              <button
                type="submit"
                [disabled]="isSubmitting()"
                class="btn-gold py-2 px-5">
                <span *ngIf="isSubmitting()" class="spinner-border spinner-border-sm me-2" role="status"></span>
                <i *ngIf="!isSubmitting()" class="bi bi-send-check-fill me-1"></i>
                <span>{{ isSubmitting() ? 'Validating Application...' : 'Submit Demo Application' }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Demo Submission Success Confirmation Modal -->
    <div *ngIf="submissionResult()" class="admission-modal-backdrop" (click)="closeModal()">
      <div class="admission-modal-dialog" (click)="$event.stopPropagation()">
        <!-- Header -->
        <div class="p-4 bg-navy text-white d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-check-circle-fill text-warning fs-3"></i>
            <div>
              <h4 class="h5 fw-bold mb-0 text-white">Application Received</h4>
              <span class="small text-warning">Demo Registration Confirmed</span>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" (click)="closeModal()" aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="p-4 bg-white">
          <div class="text-center py-3 mb-3 bg-light rounded-3 border">
            <span class="small text-muted text-uppercase d-block mb-1">Demo Application Reference Number</span>
            <div class="h3 fw-bold text-navy mb-0 font-monospace tracking-wide text-warning">
              {{ submissionResult()?.applicationNumber }}
            </div>
          </div>

          <div class="row g-3 small text-secondary mb-4">
            <div class="col-6">
              <span class="text-muted d-block">Student Name:</span>
              <strong class="text-navy">{{ submissionResult()?.studentName }}</strong>
            </div>
            <div class="col-6">
              <span class="text-muted d-block">Class Applied:</span>
              <strong class="text-navy">{{ submissionResult()?.classAppliedFor }}</strong>
            </div>
            <div class="col-6">
              <span class="text-muted d-block">Registered Mobile:</span>
              <strong class="text-navy">+91 {{ submissionResult()?.parentContact }}</strong>
            </div>
            <div class="col-6">
              <span class="text-muted d-block">Submission Time:</span>
              <strong class="text-navy">{{ submissionResult()?.submittedAt }}</strong>
            </div>
          </div>

          <div class="p-3 bg-warning bg-opacity-10 rounded-3 mb-4 small border border-warning">
            <div class="d-flex gap-2">
              <i class="bi bi-shield-check text-warning fs-4"></i>
              <div>
                <strong>Demonstration Mode Notice:</strong>
                <p class="mb-0 text-secondary">
                  Your demo application has been processed through the Angular Reactive Forms engine. In production, this trigger will immediately dispatch an SMS acknowledgment and generate an official appointment slip for school interaction.
                </p>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center pt-3 border-top">
            <button type="button" (click)="printDemoReceipt()" class="btn btn-outline-navy btn-sm px-3">
              <i class="bi bi-printer me-1"></i>Print Demo Slip
            </button>
            <button type="button" (click)="closeModal()" class="btn btn-navy btn-sm px-4">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-navy { background-color: #0B2545; }
    .bg-gold { background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); }
    .text-navy { color: #0B2545; }
    .max-w-700 { max-width: 700px; }
    .max-w-900 { max-width: 900px; }

    .step-badge {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      border: 2px solid #F59E0B;
    }

    .section-num-badge {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #0B2545;
      color: #F59E0B;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      flex-shrink: 0;
    }

    .tiny-text { font-size: 0.76rem; }

    /* Modal Backdrop */
    .admission-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1050;
      background: rgba(7, 25, 47, 0.75);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .admission-modal-dialog {
      max-width: 580px;
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
    }
  `]
})
export class AdmissionsComponent {
  private fb = inject(FormBuilder);
  private schoolDataService = inject(SchoolDataService);

  readonly config = this.schoolDataService.config;
  readonly isSubmitting = signal<boolean>(false);
  readonly submissionResult = signal<AdmissionSubmissionResult | null>(null);

  admissionForm: FormGroup = this.fb.group({
    // Student Information
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    bloodGroup: [''],
    nationality: ['Indian', Validators.required],
    classAppliedFor: ['', Validators.required],
    academicSession: ['2026–2027'],
    previousSchool: [''],
    previousClass: [''],

    // Parent Information
    fatherName: ['', [Validators.required, Validators.minLength(3)]],
    motherName: ['', [Validators.required, Validators.minLength(3)]],
    primaryMobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    alternateMobile: ['', [Validators.pattern(/^[6-9]\d{9}$/)]],
    parentEmail: ['', [Validators.email]],
    occupation: [''],

    // Address Information
    streetAddress: ['', Validators.required],
    cityOrTown: ['', Validators.required],
    district: ['', Validators.required],
    state: ['Madhya Pradesh', Validators.required],
    pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],

    // Declarations
    agreeTerms: [false, Validators.requiredTrue]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.admissionForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit() {
    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();
      // Scroll to first invalid element
      const firstInvalidControl: HTMLElement | null = document.querySelector('.is-invalid');
      if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    this.isSubmitting.set(true);

    const formVal = this.admissionForm.value;
    const applicationPayload = {
      student: {
        fullName: formVal.fullName,
        dateOfBirth: formVal.dateOfBirth,
        gender: formVal.gender,
        bloodGroup: formVal.bloodGroup,
        nationality: formVal.nationality,
        classAppliedFor: formVal.classAppliedFor,
        academicSession: formVal.academicSession,
        previousSchoolName: formVal.previousSchool,
        previousClass: formVal.previousClass
      },
      parent: {
        fatherName: formVal.fatherName,
        motherName: formVal.motherName,
        primaryMobile: formVal.primaryMobile,
        alternateMobile: formVal.alternateMobile,
        email: formVal.parentEmail,
        relationship: 'Parent',
        occupation: formVal.occupation
      },
      address: {
        streetAddress: formVal.streetAddress,
        cityOrTown: formVal.cityOrTown,
        district: formVal.district,
        state: formVal.state,
        pincode: formVal.pincode
      },
      documents: {
        hasPhoto: true,
        hasBirthCert: true,
        hasTransferCert: true,
        hasMarksheet: true,
        agreementAcknowledged: formVal.agreeTerms
      }
    };

    this.schoolDataService.submitAdmission(applicationPayload).subscribe({
      next: (result) => {
        this.isSubmitting.set(false);
        this.submissionResult.set(result);
        this.admissionForm.reset({
          nationality: 'Indian',
          academicSession: '2026–2027',
          state: 'Madhya Pradesh',
          agreeTerms: false
        });
      },
      error: () => {
        this.isSubmitting.set(false);
        alert('An unexpected error occurred during submission.');
      }
    });
  }

  resetForm() {
    this.admissionForm.reset({
      nationality: 'Indian',
      academicSession: '2026–2027',
      state: 'Madhya Pradesh',
      agreeTerms: false
    });
  }

  closeModal() {
    this.submissionResult.set(null);
  }

  printDemoReceipt() {
    window.print();
  }
}
