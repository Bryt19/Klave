export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats = [
  { value: "10M+", label: "Prescriptions Processed" },
  { value: "99.9%", label: "Dispensing Accuracy" },
  { value: "40%", label: "Reduction in Queue Times" },
  { value: "18ms", label: "Real-Time Sync Latency" },
];

/* ── Dashboard floating metrics ────────────────────────────── */
export const floatingMetrics = [
  {
    label: "Low Stock",
    medicine: "Amoxicillin",
    detail: "12 units remaining",
    icon: "ri-alert-line",
    color: "amber",
  },
  {
    label: "Expiring Soon",
    medicine: "Cefuroxime",
    detail: "18 days remaining",
    icon: "ri-time-line",
    color: "red",
  },
  {
    label: "Today's Sales",
    medicine: "GH₵ 8,420",
    detail: "+12% from yesterday",
    icon: "ri-line-chart-line",
    color: "emerald",
  },
  {
    label: "Total Medicines",
    medicine: "1,284",
    detail: "Across 48 categories",
    icon: "ri-capsule-line",
    color: "blue",
  },
];

/* ── Problem pain points ───────────────────────────────────── */
export const painPoints = [
  {
    icon: "ri-file-paper-2-line",
    title: "Manual inventory tracking",
    description: "Paper logs, spreadsheets, and guesswork replace accurate stock data.",
  },
  {
    icon: "ri-alarm-warning-line",
    title: "Expired medicines piling up",
    description: "No systematic tracking means wasted stock and potential patient harm.",
  },
  {
    icon: "ri-error-warning-line",
    title: "Stock shortages going unnoticed",
    description: "Critical medicines run out without warning, disrupting patient care.",
  },
  {
    icon: "ri-links-line",
    title: "Disconnected records",
    description: "Sales, dispensing, and inventory live in separate, unsynchronized systems.",
  },
  {
    icon: "ri-bar-chart-grouped-line",
    title: "Difficult reporting",
    description: "Generating meaningful insights requires hours of manual data compilation.",
  },
  {
    icon: "ri-user-unfollow-line",
    title: "No visibility across branches",
    description: "Multi-location pharmacies have no unified view of stock, sales, or staff performance.",
  },
];

/* ── Three systems ─────────────────────────────────────────── */
export const threeSystems = [
  {
    number: "1",
    tag: "Intake & Extraction",
    title: "Prescription Intake & OCR",
    description:
      "Instant optical character recognition maps handwritten and digital doctor scripts into validated FHIR structures with 99.4% confidence rating.",
    badge: "",
  },
  {
    number: "2",
    tag: "Batch Intelligence",
    title: "Dispensing & Inventory Sync",
    description:
      "FEFO (First-Expired, First-Out) algorithms assign precise batch IDs, verify cold-chain compliance, and decrement inventory in real-time across branches.",
    badge: "",
  },
  {
    number: "3",
    tag: "Clinical Verification",
    title: "Telepharmacy & Clinical Sign-Off",
    description:
      "Pharmacists verify scripts with integrated drug-interaction alerts, allergy cross-referencing, digital signatures, and automated label dispensing.",
    badge: "",
  },
];

/* ── Inventory medicines ───────────────────────────────────── */
export const inventoryMedicines = [
  { name: "Amoxicillin 500mg", batch: "BT-8841-A", stock: 142, maxStock: 500, expiry: "Dec 2026", category: "Antibiotics", status: "normal" },
  { name: "Paracetamol 500mg", batch: "BT-9204-B", stock: 890, maxStock: 1000, expiry: "Mar 2027", category: "Analgesics", status: "normal" },
  { name: "Lisinopril 20mg", batch: "BT-7712-C", stock: 18, maxStock: 200, expiry: "Sep 2026", category: "Cardiovascular", status: "low" },
  { name: "Metformin 850mg", batch: "BT-6603-D", stock: 256, maxStock: 400, expiry: "Jan 2027", category: "Antidiabetics", status: "normal" },
  { name: "Omeprazole 20mg", batch: "BT-5519-E", stock: 8, maxStock: 300, expiry: "Nov 2026", category: "Gastrointestinal", status: "low" },
  { name: "Artemether/Lumefantrine", batch: "BT-4428-F", stock: 0, maxStock: 200, expiry: "Aug 2026", category: "Antimalarials", status: "out" },
  { name: "Cefuroxime 250mg", batch: "BT-3317-G", stock: 67, maxStock: 150, expiry: "Jul 2026", category: "Antibiotics", status: "expiring" },
  { name: "Losartan 50mg", batch: "BT-2206-H", stock: 312, maxStock: 400, expiry: "Feb 2027", category: "Cardiovascular", status: "normal" },
];

/* ── Expiry timeline data ──────────────────────────────────── */
export const expiryItems = [
  { medicine: "Cefuroxime 250mg", batch: "BT-3317-G", daysLeft: 12, severity: "critical" },
  { medicine: "Artemether/Lumefantrine", batch: "BT-4428-F", daysLeft: 30, severity: "warning" },
  { medicine: "Omeprazole 20mg", batch: "BT-5519-E", daysLeft: 68, severity: "warning" },
  { medicine: "Lisinopril 20mg", batch: "BT-7712-C", daysLeft: 112, severity: "normal" },
  { medicine: "Amoxicillin 500mg", batch: "BT-8841-A", daysLeft: 245, severity: "normal" },
];

/* ── Analytics data ────────────────────────────────────────── */
export const analyticsData = {
  revenue: { current: 142800, previous: 118400, currency: "GH₵" },
  dailySales: [
    { day: "Mon", value: 8420 },
    { day: "Tue", value: 7890 },
    { day: "Wed", value: 9340 },
    { day: "Thu", value: 8100 },
    { day: "Fri", value: 11200 },
    { day: "Sat", value: 12800 },
    { day: "Sun", value: 6400 },
  ],
  topMedicines: [
    { name: "Paracetamol 500mg", units: 1240, revenue: 18600 },
    { name: "Amoxicillin 500mg", units: 890, revenue: 35600 },
    { name: "Metformin 850mg", units: 720, revenue: 28800 },
    { name: "Omeprazole 20mg", units: 650, revenue: 19500 },
  ],
  transactions: { today: 342, average: 285 },
};

/* ── Role switcher data ────────────────────────────────────── */
export const roles = [
  {
    id: "owner",
    name: "Owner",
    icon: "ri-shield-user-line",
    description: "Complete system oversight with full access to all branches, staff management, and business analytics.",
    features: [
      "Multi-branch inventory overview",
      "Staff management & permissions",
      "Revenue & performance analytics",
      "System configuration & settings",
    ],
  },
  {
    id: "pharmacist",
    name: "Pharmacist",
    icon: "ri-stethoscope-line",
    description: "Clinical verification, prescription management, and patient safety oversight.",
    features: [
      "Prescription verification console",
      "Drug interaction alerts",
      "Patient medication history",
      "Clinical decision support",
    ],
  },
  {
    id: "cashier",
    name: "Cashier",
    icon: "ri-bank-card-line",
    description: "Point-of-sale operations, payment processing, and receipt generation.",
    features: [
      "Rapid POS checkout",
      "Multi-tender payment support",
      "Receipt printing",
      "Daily sales reconciliation",
    ],
  },
  {
    id: "manager",
    name: "Manager",
    icon: "ri-user-settings-line",
    description: "Branch operations management, staff scheduling, and performance tracking.",
    features: [
      "Branch-level inventory control",
      "Staff scheduling & shifts",
      "Performance dashboards",
      "Order approvals & oversight",
    ],
  },
  {
    id: "staff",
    name: "Staff",
    icon: "ri-team-line",
    description: "Daily operations support including dispensing, stock checks, and customer service.",
    features: [
      "Dispensing workflow",
      "Stock check & counting",
      "Customer service queue",
      "Activity logging",
    ],
  },
];

/* ── Ecosystem nodes ───────────────────────────────────────── */
export const ecosystemNodes = [
  { label: "Inventory", icon: "ri-archive-line", description: "Real-time stock levels across all branches with batch tracking and expiry monitoring." },
  { label: "Sales", icon: "ri-shopping-cart-2-line", description: "Point-of-sale processing with multi-tender support, receipt generation, and daily reconciliation." },
  { label: "Suppliers", icon: "ri-truck-line", description: "Supplier directory, purchase order management, and stock replenishment coordination." },
  { label: "Reports", icon: "ri-bar-chart-2-line", description: "Revenue analytics, inventory reports, staff performance metrics, and custom export tools." },
  { label: "Staff", icon: "ri-team-line", description: "Role-based access control, shift scheduling, activity logs, and performance tracking." },
  { label: "Owner", icon: "ri-shield-user-line", description: "Multi-branch oversight, business analytics, and system-wide configuration management." },
  { label: "Drug Finder", icon: "ri-search-eye-line", description: "Quick drug lookup by name, batch number, or therapeutic category with stock availability." },
];

/* ── Testimonials ──────────────────────────────────────────── */
export const testimonials = [
  {
    quote: "Klavora gave us absolute clarity over our multi-branch inventory. The automated FEFO routing alone saved us over GH₵120,000 in expired drug write-offs in our first two quarters.",
    name: "Sarah Antwi",
    role: "Director of Operations",
    company: "CityMed Pharmacy Group",
    initials: "SA",
    metrics: { label: "Stock Waste Reduction", value: "74% Less Loss" },
  },
  {
    quote: "The dispensing cycle dropped from 3 minutes to 22 seconds. Our patients wait less, and our pharmacists can focus on what actually matters: clinical care.",
    name: "Dr. Kofi Appiah, PharmD",
    role: "Chief Pharmacist",
    company: "Apex Clinical Alliance",
    initials: "KA",
    metrics: { label: "Turnaround Time", value: "88% Faster" },
  },
  {
    quote: "We went from paper logs and phone calls to a fully synchronized operation across 40 branches. Klavora is the backbone of our growth strategy.",
    name: "Nana Agyeman",
    role: "CEO",
    company: "AfriMed Health Systems",
    initials: "NA",
    metrics: { label: "Branches Connected", value: "40 Locations" },
  },
];

/* ── Marquee pharmacies ────────────────────────────────────── */
export const marqueePharmacies = [
  "MedPlus Pharmacy Group",
  "HealthCare Alliance",
  "CityMed Dispensaries",
  "Apex Clinical Pharmacy",
  "QuickCure Networks",
  "AfriMed Health Systems",
];

/* ── Operational outcomes ──────────────────────────────────── */
export const operationalOutcomes = [
  {
    from: "3 min",
    to: "22 sec",
    metric: "Turnaround Time",
    label: "Average dispensing and verification cycle reduced by 88%",
  },
  {
    from: "14%",
    to: "0.2%",
    metric: "Stock Expiry Loss",
    label: "Batch-level FEFO logic virtually eliminated expired stock write-offs",
  },
  {
    from: "Manual",
    to: "18 ms",
    metric: "Sync Latency",
    label: "Real-time prescription synchronization across all branch registers",
  },
];

/* ── Features grid ─────────────────────────────────────────── */
export const everyLayerFeatures = [
  {
    icon: "ri-time-line",
    title: "Real-Time Queue Orchestration",
    description: "Intelligent triage prioritizes urgent drop-offs and synchronizes pickup notifications.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Smart Verification Engine",
    description: "Dosage limits, allergy cross-checks, and contraindication screening at lightning speed.",
  },
  {
    icon: "ri-stack-line",
    title: "Inventory & Batch Tracking",
    description: "Track every drug by batch number, expiry date, reorder threshold, and bin location.",
  },
  {
    icon: "ri-file-shield-line",
    title: "Automated Prior Auth",
    description: "Instant eligibility verification and digital approval routing with zero paperwork.",
  },
  {
    icon: "ri-wifi-off-line",
    title: "Offline-First Local Sync",
    description: "Operate with zero downtime during network interruptions. Automatic background reconciliation.",
  },
  {
    icon: "ri-history-line",
    title: "Immutable Audit Trail",
    description: "Cryptographically verifiable timestamped dispensing logs meeting strict regulatory standards.",
  },
  {
    icon: "ri-store-2-line",
    title: "POS & Multi-Tender Checkout",
    description: "Rapid counter point-of-sale supporting cash, card, mobile money, and split insurance billing.",
  },
  {
    icon: "ri-user-shared-line",
    title: "Staff Roles & Telepharmacy",
    description: "Granular access control and remote supervising pharmacist sign-off workflows.",
  },
];

/* ── Built for teams ───────────────────────────────────────── */
export const builtForTeams = [
  {
    icon: "ri-capsule-line",
    role: "Dispensary Managers",
    title: "For Dispensary Managers",
    description: "Eliminate bottleneck counter queues with rapid barcode scanning, automated label generation, and batch-matched dispensing.",
    kpi: "88% Faster Dispense",
  },
  {
    icon: "ri-stethoscope-line",
    role: "Clinical Pharmacists",
    title: "For Clinical Pharmacists",
    description: "High-confidence clinical decision support flags dangerous drug-drug interactions and allergies before pills leave the bottle.",
    kpi: "Zero Omission Errors",
  },
  {
    icon: "ri-building-line",
    role: "Operations Leaders",
    title: "For Operations Leaders",
    description: "Complete visibility into multi-branch stock levels, revenue velocity, staff productivity, and expiry risk prevention.",
    kpi: "74% Less Stock Waste",
  },
  {
    icon: "ri-terminal-box-line",
    role: "Engineering & IT",
    title: "For Healthcare IT",
    description: "Open REST APIs, FHIR/HL7 interoperability, end-to-end encryption, and offline-first database replication.",
    kpi: "99.99% Uptime",
  },
];

/* ── Pricing ───────────────────────────────────────────────── */
export const howItWorksSteps = [
  {
    icon: "ri-store-2-line",
    step: "Step 01",
    title: "Set up your pharmacy in minutes",
    description: "Create your pharmacy profile, add your staff, and set up your counter.",
  },
  {
    icon: "ri-file-upload-line",
    step: "Step 02",
    title: "Add your inventory via CSV or manually",
    description: "Upload your entire drug list with our smart CSV importer.",
  },
  {
    icon: "ri-line-chart-line",
    step: "Step 03",
    title: "Start selling, tracking, and growing",
    description: "Process sales with the POS, dispense by FEFO, and watch your KPIs.",
  },
];

export const pricingFeatures = [
  "Full Point-of-Sale Terminal & Register",
  "Smart Inventory & Batch Tracking",
  "FEFO Automated Dispensing Logic",
  "Offline Selling with Auto Cloud Sync",
  "Real-Time KPI & Revenue Analytics",
  "Staff Management & Role-Based Permissions",
  "Prescription Intake & OCR Parser",
  "Immutable Cryptographic Audit Trail",
  "Automated Expiry & Low Stock Alerts",
  "Drug Interaction Clinical Warning Engine",
  "Multi-Location & Branch Synchronization",
  "Dedicated 24/7 Support & Onboarding",
];

/* ── FAQs ──────────────────────────────────────────────────── */
export const faqs = [
  {
    question: "Does Klavora work reliably during internet outages?",
    answer:
      "Yes. Klavora is engineered with an offline-first architecture. You can dispense, process sales, and track inventory completely offline. Everything syncs and reconciles automatically when your connection is restored.",
  },
  {
    question: "How does FEFO dispensing prevent expired stock waste?",
    answer:
      "Klavora's algorithm automatically identifies and suggests the batch expiring soonest when a prescription is entered, ensuring older valid inventory moves first and preventing dead stock.",
  },
  {
    question: "Can we import our existing drug catalogue and stock records?",
    answer:
      "Yes. Our intelligent CSV Bulk Importer automatically maps NDC codes, batch numbers, unit prices, and expiry dates in seconds without manual entry.",
  },
  {
    question: "Is clinical patient and prescription data secure?",
    answer:
      "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Role-based access ensures only authorized clinical staff can review patient records and audit trails.",
  },
  {
    question: "How many pharmacy branches can Klavora support?",
    answer:
      "Klavora supports unlimited branches with centralized inventory routing, branch-level analytics, and role-based access that scales from single-counter pharmacies to nationwide hospital networks.",
  },
];

/* ── Footer links ──────────────────────────────────────────── */
export const footerProduct = [
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Security", href: "#security" },
];

export const footerCompany = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const footerResources = [
  { label: "Documentation", href: "#" },
  { label: "Help Center", href: "#" },
];

export const footerLegal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "HIPAA", href: "/hipaa" },
  { label: "Contact", href: "/contact" },
];
