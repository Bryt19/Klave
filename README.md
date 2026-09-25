# Klavora — Pharmacy Management for Modern Africa

> **The complete pharmacy management platform built for Ghanaian and African retail pharmacies.**

---

## What Is Klavora?

Klavora is a complete pharmacy management system built specifically for retail pharmacies in Ghana and across Africa. It replaces paper-based records, spreadsheets, and disconnected point-of-sale systems with a single, secure platform that handles everything from selling medicine at the counter to tracking inventory expiry, managing staff, and monitoring business performance — all in one place. Whether your pharmacy sells twenty items a day or two thousand, Klavora keeps your stock accurate, your records clean, and your business growing.

---

## Why Klavora?

- **Sell even when the internet goes down.** Klavora works offline. Sales made during a power outage or connectivity failure are automatically saved on the device and synchronised to the server the moment the connection returns. No sales are ever lost.

- **Never dispense expired medicine by accident.** Klavora uses FEFO — First Expired, First Out — dispensing logic. When a cashier sells a drug, the system automatically selects the batch closest to its expiry date, ensuring older stock is always sold first. Colour-coded expiry alerts give managers an early warning before stock becomes a problem.

- **Know your business numbers at a glance.** The KPI Dashboard shows inventory value, gross margin, revenue trends, loss from expired stock, and individual staff sales performance — all updated in real time. No accountant required to understand what is happening in your pharmacy.

- **Help patients find your drugs before they walk in.** The Klavora Drug Finder is a public-facing map that lets patients and the public search for specific medicines by location. Pharmacies that opt in appear on the map with live stock availability drawn directly from their Klavora inventory.

- **Control who can see and do what.** Klavora has five distinct staff roles with carefully defined permissions. A cashier can sell but cannot view financial reports. A pharmacist can restock but cannot manage staff accounts. Owners and managers have full access. Restricted features are not just locked — they are completely hidden from the interface.

- **Batch-level accuracy for every drug in your pharmacy.** Each drug can have multiple batches with separate expiry dates, quantities, cost prices, and selling prices. Restocking a drug creates a new batch automatically. The full audit trail captures every change, every sale, and every restock — with the name of the staff member who made it.

---

## Built for Africa

Klavora was designed from the ground up for the realities of running a pharmacy in Ghana and across Africa:

**Offline-first architecture.** Connectivity in Ghana is improving rapidly but remains inconsistent. Klavora's pharmacy terminal was built to work without an internet connection as a first priority, not as an afterthought. All inventory data is cached locally on the device. Sales are queued offline and pushed to the server automatically.

**Ghana Cedis (GH₵) currency.** Klavora displays all prices, revenue, margins, and inventory values in Ghana Cedis by default, with no configuration required.

**Ghana region support.** During registration, pharmacies select their region from a complete list of Ghanaian administrative regions. This data powers the Drug Finder map, which allows patients to find pharmacies near them.

**Mobile-first design.** Many pharmacy owners and managers access their systems from a phone. Klavora's interface adapts fully to mobile screens. It can also be installed as a Progressive Web App on Android and iOS for a native app-like experience without going through an app store.

**Drug Finder for fragmented markets.** In many Ghanaian communities, patients physically visit multiple pharmacies looking for a specific drug. The Klavora Drug Finder allows patients to search online and find which nearby pharmacies have the drug in stock before leaving their home.

**Designed for real pharmacy workflows.** Klavora supports multiple payment methods common in Ghana — cash, Mobile Money (MoMo), card, and insurance — and the POS terminal handles prescriptions, controlled substance logging, and multi-item baskets as standard.

---

## Product Suite

### Pharmacy Dashboard — app.klavora.co

The Pharmacy Dashboard is the core product. It is a web application used by pharmacy owners, managers, pharmacists, cashiers, and other staff to run the day-to-day operations of the pharmacy. It includes the Point of Sale terminal, inventory management, restock management, KPI reporting, staff management, audit log, backup and restore, and notification centre. It is accessible from any modern web browser and can be installed as a Progressive Web App.

### Drug Finder — Public Patient Map

The Drug Finder is a publicly accessible map that allows patients and members of the public to search for specific medications and find which pharmacies near them have the drug in stock. Pharmacies using Klavora can choose to appear on the Drug Finder, and their stock availability is drawn directly and automatically from their live Klavora inventory — no separate data entry is required. The Drug Finder is designed to reduce the time patients spend searching multiple pharmacies.

### Admin Dashboard

The Admin Dashboard is a secure, separate web interface used exclusively by the Klavora operations team. It provides visibility into all pharmacies using the platform, supports account management, subscription oversight, system health monitoring, and platform-level configuration. It is not accessible to pharmacy users and operates on a completely separate access path with stricter authentication requirements.

---

## Technology

Klavora is built on a modern, proven technology stack:

| Layer | Technology |
|---|---|
| **Pharmacy Frontend** | React (TypeScript), Progressive Web App |
| **Backend API** | Node.js with Express |
| **Database** | PostgreSQL |
| **Frontend Hosting** | Vercel |
| **Backend Hosting** | Railway |
| **Payments** | Paystack |
| **Email** | Resend |

The platform is a cloud-hosted SaaS product. No software needs to be installed on pharmacy computers. The pharmacy owner accesses their dashboard through any modern web browser.

---

## Company

Klavora is a product of **EliTech CreaTives Limited**, a technology company focused on building practical digital infrastructure for African businesses. Klavora was founded in response to a clear gap: most pharmacy management software available in Ghana was either imported, expensive, poorly suited to local workflows, or required expensive hardware. EliTech CreaTives set out to build a product that works the way Ghanaian pharmacies actually work — with local payment methods, Ghana Cedis, offline capability, and a design that is approachable for staff who are not technology experts. The mission is to make enterprise-grade pharmacy management accessible to every retail pharmacy in Ghana and, over time, across the African continent.

---

**Contact:** support@klavora.co  
**Website:** klavora.co  
**App:** app.klavora.co
