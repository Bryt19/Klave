export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const marqueePharmacies = [
  "MedPlus Pharmacy",
  "HealthCare Pharmacy",
  "CityMed Pharmacy",
  "QuickCure Pharmacy",
  "AfriMed Pharmacy",
];

export const howItWorksSteps = [
  {
    icon: "ri-store-2-line",
    step: "Step 01",
    title: "Set up your pharmacy in minutes",
    description:
      "Create your pharmacy profile, add your staff, and set up your counter. Klavora runs on any device — phone, tablet, or desktop — with nothing to install.",
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

export const pricingFeatures = [
  "Full POS Terminal",
  "Smart Inventory Management",
  "FEFO Dispensing Logic",
  "Offline Selling with Auto Sync",
  "KPI Dashboard",
  "Staff Management and Role Access",
  "Sales Metrics and Reports",
  "Audit Log",
  "Backup and Restore",
  "CSV Bulk Importer",
  "Drug Finder Listing",
  "Mobile and Desktop Access",
  "Email Support",
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Does Klavora work without internet?",
    answer:
      "Yes. Klavora is built for African network conditions. You can sell, track inventory, and manage your pharmacy fully offline. Everything syncs automatically when your connection returns.",
  },
  {
    question: "Is my pharmacy data secure?",
    answer:
      "Yes. All data is encrypted, backed up automatically, and accessible only to authorised staff based on their role.",
  },
  {
    question: "Can I import my existing inventory?",
    answer:
      "Yes. Klavora's smart CSV importer lets you upload your entire drug list in minutes without entering drugs one by one.",
  },
  {
    question: "How many staff accounts can I add?",
    answer:
      "As many as your pharmacy needs. There are no limits on staff accounts on the Klavora Pro plan.",
  },
  {
    question: "What happens if I want to cancel?",
    answer:
      "You can cancel at any time. Your data remains accessible for 30 days after cancellation and can be exported as a full backup before you leave.",
  },
];