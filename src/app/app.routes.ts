import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Vidya Niketan Public School | Nursery to Class 10 CBSE'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Vidya Niketan Public School'
  },
  {
    path: 'academics',
    loadComponent: () => import('./pages/academics/academics.component').then(m => m.AcademicsComponent),
    title: 'Academics & Pedagogy | Vidya Niketan Public School'
  },
  {
    path: 'class-10',
    loadComponent: () => import('./pages/class-10/class-10.component').then(m => m.Class10Component),
    title: 'Class 10 CBSE Board Hub | Vidya Niketan Public School'
  },
  {
    path: 'admissions',
    loadComponent: () => import('./pages/admissions/admissions.component').then(m => m.AdmissionsComponent),
    title: 'Admissions Open 2026-27 | Vidya Niketan Public School'
  },
  {
    path: 'faculty',
    loadComponent: () => import('./pages/faculty/faculty.component').then(m => m.FacultyComponent),
    title: 'Our Faculty & Mentors | Vidya Niketan Public School'
  },
  {
    path: 'facilities',
    loadComponent: () => import('./pages/facilities/facilities.component').then(m => m.FacilitiesComponent),
    title: 'Campus Infrastructure & Facilities | Vidya Niketan Public School'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'School Photo Gallery | Vidya Niketan Public School'
  },
  {
    path: 'results',
    loadComponent: () => import('./pages/results/results.component').then(m => m.ResultsComponent),
    title: 'Results & Achievements | Vidya Niketan Public School'
  },
  {
    path: 'notices',
    loadComponent: () => import('./pages/notices/notices.component').then(m => m.NoticesComponent),
    title: 'School Notices & Circulars | Vidya Niketan Public School'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Vidya Niketan Public School'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
