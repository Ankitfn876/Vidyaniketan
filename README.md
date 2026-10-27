# Vidyaniketan Public School - Modern Indian School Website

A modern, responsive static school website for an Indian school offering education from **Nursery to Class 10 (CBSE Curriculum)**. Built with **Angular (Standalone Architecture)**, **TypeScript**, **Bootstrap 5**, and modern CSS3 design systems.

---

## 🌟 Highlights & Design Aesthetic

- **Color Palette:** Royal Navy Blue (`#0B2545`), Golden Yellow (`#F59E0B`), and crisp White with soft saffron and emerald accents.
- **Typography:** Modern Google Fonts — **Outfit** (headings) & **Plus Jakarta Sans** (body & UI).
- **Responsive Layout:** Mobile-first architecture tested from 320px to ultra-wide displays with accessible hamburger navigation drawer.
- **CBSE Aligned:** Tailored for Indian educational frameworks, NEP 2020 pedagogical standards, and AISSE Class 10 board preparations.
- **Zero Backend Required:** 100% frontend static architecture with client-side reactive form validation and simulated demo application confirmations.

---

## 🏫 Key Website Modules & Features

### 1. Header & Sticky Navigation
- Announcement bar with active admission banner and direct helpline.
- Brand emblem with school motto: *"Knowledge • Character • Excellence (विद्ययाऽमृतमश्नुते)"*.
- Sticky glassmorphic navigation bar with accessible mobile drawer.
- Prominent *"Apply for Admission"* action button.

### 2. Homepage (Rich Sections)
- **Hero Banner:** Full-width campus photography featuring Indian students in neat uniform, admission session badge, and key institutional metrics.
- **Principal's Welcome:** Message from Dr. Sudha Rao (M.Sc., Ph.D.), vision quote, and institutional mission.
- **Why Choose Us:** Modern cards for Experienced Faculty, Smart Classrooms, Advanced Labs, Sports & Fitness, and Campus Safety.
- **Academic Wings:** Developmental stages from Nursery/Kindergarten to Class 10.
- **Class 10 Board Spotlight:** Dedicated examination support banner and doubt clinic alerts.
- **Faculty Spotlight:** Profile cards with qualifications and subject expertise.
- **Campus Facilities Preview:** Highlighting interactive classrooms, labs, library, and sports grounds.
- **Official Notices Preview:** Urgent circular badges and date-stamped announcements.
- **Photo Gallery Preview:** Campus moments with interactive lightbox support.
- **Parent & Alumni Testimonials:** Feedback from the school community.

### 3. Dedicated Class 10 CBSE Board Hub (`/class-10`)
- **Curriculum & Blueprint Breakdown:** Core subjects (Mathematics Standard/Basic, Science, Social Science, English, Hindi, Computer Applications) with 80-mark board theory and 20-mark internal/practical split.
- **Sample Daily Study Timetable:** Balanced schedule from 6:00 AM to 10:30 PM with mentor study tips.
- **Downloadable Model Resources:** Sample question papers, science formula sheets, geography map workbooks, and practical viva guides.
- **Doubt-Clearing Clinics:** Daily 2:00 PM – 4:00 PM personalized faculty consultation details.
- **Post-10th Stream Guidance:** Detailed roadmaps for Science (PCM/PCB), Commerce, and Humanities.

### 4. Interactive Student Admission Module (`/admissions`)
- **4-Step Admission Journey:** Registration, Interaction, Document Verification, and Enrollment.
- **Age Criteria Chart:** Grade-wise eligibility as of 31st March 2026.
- **Mandatory Documents Checklist:** Original and self-attested document requirements.
- **4-Section Angular Reactive Form:**
  - *Section 1:* Student Details (Full Name, Date of Birth, Gender, Blood Group, Class Applied For, Session, Previous School).
  - *Section 2:* Parent/Guardian Details (Father, Mother, 10-digit Indian Mobile Regex, Email, Occupation).
  - *Section 3:* Residential Address (Street, City, District, State, 6-digit PIN code).
  - *Section 4:* Document checklist and declaration.
- **Validation & Demo Confirmation Modal:** Immediate visual error states, touch-aware highlighting, and instant generation of a demo reference code (e.g. `VNPS-2026-ADM8392`) with print slip option.
- **Privacy First:** No storage of children's personal data in `localStorage` or `sessionStorage`.

### 5. Faculty Directory (`/faculty`)
- Live keyword search by teacher name or subject.
- Dropdown filters for Subject Specialization and Academic Wing.
- Teacher profile cards showing qualifications, experience years, and verified credentials.

### 6. Campus Facilities (`/facilities`)
- 10 comprehensive infrastructure profiles: Smart Classrooms, Science Labs, Knowledge Library, Sports Grounds, Computer & Robotics Lab, GPS Bus Fleet, RO Water Plants, Clean Sanitation, 24/7 CCTV, and Performing Arts Studios.

### 7. School Photo Gallery (`/gallery`)
- Responsive image grid with category filters: Campus, Classrooms, Sports, Science Exhibitions, Celebrations, and Annual Functions.
- Fullscreen interactive lightbox modal with Next/Previous navigation and keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).

### 8. Official Notice Board (`/notices`)
- Filterable circulars by keyword, category (Admissions, Examinations, Holidays, Events, PTM, General), and academic session.
- Urgent circular alert indicators and detailed modal preview with circular download action.

### 9. Results & Student Achievements (`/results`)
- AISSE Class 10 board performance metrics (100% pass rate, distinction %, school average).
- Anonymized academic exemplar records protecting student privacy.
- Co-curricular achievements in National Science Olympiads, district football, and STEM expos.

### 10. Contact Us & Campus Map (`/contact`)
- Telephone helplines, official emails, address, and visiting office hours.
- Embedded interactive Google Map placeholder.
- Validated Reactive Contact Form with demo enquiry ID generation.
- Expandable interactive FAQ accordion.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Angular (Latest Standalone Components) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Bootstrap 5, Bootstrap Icons, Modern CSS3 Custom Properties |
| **Routing** | Angular Router with lazy-loaded standalone components and top scroll restoration |
| **Forms** | Angular Reactive Forms (`FormBuilder`, `Validators`, Regex) |
| **State & Data** | Angular Signals (`signal`, `computed`), RxJS Observables |
| **Typography** | Google Fonts (`Outfit`, `Plus Jakarta Sans`) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── config/
│   │   │   └── school-config.ts       # Centralized school configuration
│   │   ├── models/                    # TypeScript interfaces & types
│   │   │   ├── teacher.model.ts
│   │   │   ├── notice.model.ts
│   │   │   ├── gallery.model.ts
│   │   │   ├── admission.model.ts
│   │   │   ├── academic.model.ts
│   │   │   └── facility.model.ts
│   │   ├── data/                      # Local datasets
│   │   │   ├── teachers.data.ts
│   │   │   ├── notices.data.ts
│   │   │   ├── gallery.data.ts
│   │   │   ├── facilities.data.ts
│   │   │   ├── academics.data.ts
│   │   │   ├── results.data.ts
│   │   │   ├── testimonials.data.ts
│   │   │   └── faqs.data.ts
│   │   └── services/
│   │       └── school-data.service.ts # Reactive signals & filtering methods
│   ├── shared/
│   │   ├── header/                    # Responsive header & mobile drawer
│   │   ├── footer/                    # Footer & legal links
│   │   ├── page-banner/               # Breadcrumb banner
│   │   ├── teacher-card/              # Reusable faculty card
│   │   ├── notice-card/               # Circular card with urgency badge
│   │   └── image-gallery/             # Grid with interactive lightbox
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── academics/
│   │   ├── class-10/
│   │   ├── admissions/
│   │   ├── faculty/
│   │   ├── facilities/
│   │   ├── gallery/
│   │   ├── results/
│   │   ├── notices/
│   │   └── contact/
│   ├── app.routes.ts                  # Lazy-loaded routes
│   ├── app.config.ts                  # App configuration & view transitions
│   └── app.component.ts               # Root component
├── assets/
│   └── images/                        # High-resolution campus photography
├── styles.css                         # Master design system & tokens
└── index.html                         # Meta tags & Google Fonts
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.x or v20.x or v22.x)
- npm (v9.x or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm start
```
Open [http://localhost:4200/](http://localhost:4200/) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/modern-school`.

---

## 🌐 Static Hosting & Deployment

This application is 100% static client-side and can be deployed directly to:
- **GitHub Pages:** Deploy `dist/modern-school/browser`
- **Netlify:** Set build command `npm run build` and publish directory `dist/modern-school/browser`
- **Vercel:** Framework Preset: `Angular`

---

## 📜 License
This project is open-source under the MIT License.
