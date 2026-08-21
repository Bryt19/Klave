export const navLinks = [
  { label: "Platform", href: "#three-systems" },
  { label: "Solutions", href: "#solutions" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const heroStats = [
  { value: "10M+", label: "Prescriptions Processed" },
  { value: "99.9%", label: "Dispensing Accuracy" },
  { value: "40%", label: "Reduction in Queue Times" },
  { value: "18 ms", label: "Real-Time Sync Latency" },
];

export const threeSystems = [
  {
    number: "1",
    tag: "Intake & Extraction",
    title: "Prescription Intake & OCR",
    description:
      "Instant optical character recognition maps handwritten and digital doctor scripts into validated FHIR structures with 99.4% confidence rating.",
    badge: "99.4% OCR Confidence",
  },
  {
    number: "2",
    tag: "Batch Intelligence",
    title: "Dispensing & Inventory Sync",
    description:
      "FEFO (First-Expired, First-Out) algorithms assign precise batch IDs, verify cold-chain compliance, and decrement inventory in real-time across branches.",
    badge: "FEFO Automated",
  },
  {
    number: "3",
    tag: "Clinical Verification",
    title: "Telepharmacy & Clinical Sign-Off",
    description:
      "Pharmacists verify scripts with integrated drug-interaction alerts, allergy cross-referencing, digital signatures, and automated label dispensing.",
    badge: "Audit-Ready Logs",
  },
];

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

export const marqueePharmacies = [
  "MedPlus Pharmacy Group",
  "HealthCare Alliance",
  "CityMed Dispensaries",
  "Apex Clinical Pharmacy",
  "QuickCure Networks",
  "AfriMed Health Systems",
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

export const howItWorksSteps = [
  {
    icon: "ri-store-2-line",
    step: "Step 01",
    title: "Set up your pharmacy in minutes",
    description:
      "Create your pharmacy profile, add your staff, and set up your counter. Klave runs on any device — phone, tablet, or desktop — with nothing to install.",
  },
  {
    icon: "ri-file-upload-line",
    step: "Step 02",
    title: "Add your inventory via CSV or manually",
    description:
      "Upload your entire drug list with our smart CSV importer, or add medicines one by one. Batch numbers and expiry dates are captured automatically.",
  },
  {
    icon: "ri-line-chart-line",
    step: "Step 03",
    title: "Start selling, tracking, and growing",
    description:
      "Process sales with the POS, dispense by FEFO, and watch your KPIs in plain language. Your whole pharmacy, finally under one roof.",
  },
];

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
];

