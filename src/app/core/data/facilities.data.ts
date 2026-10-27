import { Facility } from '../models/facility.model';

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'fac-smart-classes',
    name: 'Interactive Smart Classrooms',
    shortDesc: 'Digitally-equipped classrooms with touch-enabled smart boards, audio-visual systems, and ergonomic student seating.',
    fullDesc: 'Every classroom from Class 1 to 10 is enabled with high-definition digital smart boards, multimedia educational content mapped to the CBSE curriculum, and high-speed Wi-Fi connectivity. Visualizing complex concepts through 3D simulations transforms abstract lessons into engaging discoveries.',
    icon: 'bi-display',
    image: 'assets/images/facilities/smart-classroom.jpg',
    features: [
      'Interactive 75" Touch LED Digital Boards',
      'CBSE Aligned Multimedia Animation Curriculum',
      'Ergonomic, posture-safe dual student desks',
      'Natural cross-ventilation and daylight design',
      'Acoustic sound dampening for crystal clear audio'
    ],
    category: 'Academics & Tech',
    enabled: true
  },
  {
    id: 'fac-science-lab',
    name: 'Advanced Science Laboratories',
    shortDesc: 'Integrated Physics, Chemistry, and Biology laboratories equipped with modern precision apparatus and safety fixtures.',
    fullDesc: 'Our science laboratories empower students to transition from theory to hands-on experimental inquiry. Equipped with chemical reagent stations, digital balances, compound microscopes, optical benches, and fume exhausts, students learn empirical scientific methods under vigilant faculty guidance.',
    icon: 'bi-eyedropper',
    image: 'assets/images/facilities/science-lab.jpg',
    features: [
      'Separate specialized bays for Physics, Chemistry & Biology',
      'Individual experiment stations with sink and gas supply',
      'Advanced optical microscopes & glasswares',
      'Emergency eye-wash stations, fire extinguishers & first-aid kits',
      'Class 10 CBSE practical syllabus aligned setups'
    ],
    category: 'Academics & Tech',
    enabled: true
  },
  {
    id: 'fac-library',
    name: 'Central Knowledge & Research Library',
    shortDesc: 'A tranquil repository housing over 10,000 titles, reference encyclopedias, national journals, and dedicated reading pods.',
    fullDesc: 'The school library serves as the intellectual heart of the campus. It promotes lifelong reading habits through age-appropriate fiction, non-fiction, encyclopedias, Olympiad reference manuals, and digital e-readers, overseen by full-time qualified librarians.',
    icon: 'bi-book-half',
    image: 'assets/images/facilities/library.jpg',
    features: [
      '10,000+ curated volumes covering literature, science, and history',
      'Subscribed to major educational periodicals, Hindi & English dailies',
      'Quiet study carrels for Class 10 board aspirants',
      'Automated digital cataloging and barcode issue system',
      'Weekly library storytelling hours for primary grades'
    ],
    category: 'Academics & Tech',
    enabled: true
  },
  {
    id: 'fac-sports-ground',
    name: 'Sprawling Sports Complex & Grounds',
    shortDesc: 'Professional multi-sport outdoor grounds with athletic running track, football pitch, cricket nets, and basketball court.',
    fullDesc: 'Physical wellness and sportsmanship are foundational to our educational ethos. The school grounds provide specialized coaching in football, cricket, basketball, volleyball, badminton, athletics, yoga, and martial arts (Taekwondo).',
    icon: 'bi-trophy',
    image: 'assets/images/facilities/sports-ground.jpg',
    features: [
      'Full-size football turf with goalposts',
      'Turf and net practice pitches for cricket coaching',
      'Standard 200m athletic running track',
      'Floored indoor badminton and table tennis hall',
      'Daily morning fitness drills and specialized evening sports coaching'
    ],
    category: 'Sports & Health',
    enabled: true
  },
  {
    id: 'fac-computer-lab',
    name: 'Next-Gen Computer & Robotics Lab',
    shortDesc: 'High-speed networked computing lab with modern workstations, Python coding platforms, and introductory robotics kits.',
    fullDesc: 'Designed to build early computational logic, cyber hygiene, and problem-solving skills. Students from Class 3 upward receive hands-on instruction in block programming, Python, HTML/CSS, database basics, and STEM robotics kits.',
    icon: 'bi-cpu',
    image: 'assets/images/facilities/smart-classroom.jpg',
    features: [
      '1:1 student-to-computer ratio during lab sessions',
      'Gigabit fiber internet with enterprise firewall and content filtering',
      'Arduino and introductory STEM robotics experiment kits',
      'Regular cyber safety and ethical digital usage workshops',
      'Uninterrupted 100% online UPS power backup'
    ],
    category: 'Academics & Tech',
    enabled: true
  },
  {
    id: 'fac-transport',
    name: 'Safe & GPS-Monitored School Fleet',
    shortDesc: 'Fleet of dedicated yellow school buses covering all major city and peripheral routes, equipped with GPS and lady attendants.',
    fullDesc: 'Student transit safety is non-negotiable. Every school bus is driven by verified, licensed drivers, accompanied by a female caretaker, and fitted with real-time GPS tracking, speed governors, first-aid kits, and CCTV cameras.',
    icon: 'bi-bus-front',
    image: 'assets/images/facilities/sports-ground.jpg',
    features: [
      'Comprehensive route coverage across Bhopal and surrounding suburbs',
      'Real-time GPS bus tracking for parents via SMS updates',
      'Mandatory speed governors capped strictly at 40 km/h',
      'Trained female support staff on every vehicle route',
      'Annual vehicle fitness certifications and police-verified drivers'
    ],
    category: 'Safety & Infrastructure',
    enabled: true
  },
  {
    id: 'fac-drinking-water',
    name: 'Pure RO Drinking Water Stations',
    shortDesc: 'Multi-stage commercial reverse osmosis (RO) filtration plant with chilled water dispensing across all school floors.',
    fullDesc: 'We prioritize student health through multi-stage industrial RO filtration with UV disinfection. Regular water quality checks are conducted and certified by accredited laboratories.',
    icon: 'bi-droplet-half',
    image: 'assets/images/facilities/library.jpg',
    features: [
      'Multi-stage RO + UV purification system with 1000 LPH capacity',
      'Stainless steel touch-free dispensing points on every floor',
      'Monthly water quality testing by authorized municipal health authorities',
      'Hygienic water bottle refill stations accessible to all age groups'
    ],
    category: 'Safety & Infrastructure',
    enabled: true
  },
  {
    id: 'fac-sanitation',
    name: 'Clean Sanitation & Hygiene Infrastructure',
    shortDesc: 'Spotless, age-segregated washroom facilities with continuous housekeeping, sanitization, and eco-friendly waste disposal.',
    fullDesc: 'Maintaining impeccable hygiene standards, our dedicated cleaning staff adheres to round-the-clock sanitation protocols. Separate, well-ventilated washrooms are provided for boys, girls, pre-primary toddlers, and staff members.',
    icon: 'bi-shield-check',
    image: 'assets/images/facilities/smart-classroom.jpg',
    features: [
      'Distinct washroom blocks for Pre-Primary, Girls, and Boys',
      'Continuous running water and automated liquid soap dispensers',
      'Hourly housekeeping inspection and cleaning logs',
      'Sanitary napkin dispensers and incinerators in senior girls blocks'
    ],
    category: 'Safety & Infrastructure',
    enabled: true
  },
  {
    id: 'fac-campus-security',
    name: '24×7 Campus Security & CCTV Surveillance',
    shortDesc: 'Gated perimeter with round-the-clock security guards, RFID gate access, and 120+ high-definition night-vision CCTV cameras.',
    fullDesc: 'Campus safety is paramount. All entry gates are manned by security personnel, visitors are screened with digital logs, and high-definition CCTV cameras continuously monitor perimeter walls, corridors, playgrounds, and common zones.',
    icon: 'bi-camera-video',
    image: 'assets/images/facilities/science-lab.jpg',
    features: [
      '120+ High-definition CCTV cameras with digital recording servers',
      'Trained security guards stationed 24/7 at all entry and exit gates',
      'Visitor screening protocol with identity verification and visitor badges',
      'Fire hydrant network and smoke detection alarms throughout campus'
    ],
    category: 'Safety & Infrastructure',
    enabled: true
  },
  {
    id: 'fac-activity-room',
    name: 'Cultural Activity & Performing Arts Studio',
    shortDesc: 'Sound-insulated creative studio for classical Indian dance, vocal and instrumental music, drama, and fine arts.',
    fullDesc: 'A dedicated space that fosters aesthetic sensibility, cultural connection, and self-expression. Students are trained in Indian classical and folk music, tabla, keyboard, guitar, art & craft, and public theatre.',
    icon: 'bi-music-note-beamed',
    image: 'assets/images/facilities/smart-classroom.jpg',
    features: [
      'Indian classical instruments: Tabla, Harmonium, Tanpura, Dholak',
      'Western instruments: Keyboards, Acoustic Guitars, Drums',
      'Full-length mirrored dance studio for Kathak and Bharatnatyam rehearsals',
      'Pottery, watercolor, and craft workshop tables'
    ],
    category: 'Academics & Tech',
    enabled: true
  }
];
