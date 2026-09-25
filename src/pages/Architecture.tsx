import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Architecture() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <svg className="w-7 h-7 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
            </svg>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Klavora<span className="text-blue-500">.</span>
            </span>
          </Link>
          <Link
            to="/"
            className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
          >
            <i className="ri-arrow-left-line" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Klavora System Architecture
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              This document describes the technical architecture of the Klavora Pharmacy Management Platform. It is written for developers, technical co-founders, and investors doing technical due diligence.
            </p>
          </div>

          <div className="space-y-10">
            {/* System Overview */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">System Overview</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora is a multi-tenant SaaS platform built on a centralised backend architecture. A single backend API serves two separate frontend clients: the pharmacy-facing dashboard and the internal admin dashboard.
              </p>
              <div className="space-y-6">
                {/* Clients Layer */}
                <div className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center"><i className="ri-smartphone-line text-white text-sm" /></span>
                        <div>
                          <p className="text-sm font-bold text-emerald-900">Pharmacy Dashboard</p>
                          <p className="text-[10px] text-emerald-600 font-mono">app.klavora.co</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-200/60 text-[10px] font-medium text-emerald-800">React + Vite</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-200/60 text-[10px] font-medium text-emerald-800">PWA</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-200/60 text-[10px] font-medium text-emerald-800">Vercel</span>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100/50 border border-sky-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center"><i className="ri-dashboard-line text-white text-sm" /></span>
                        <div>
                          <p className="text-sm font-bold text-sky-900">Admin Dashboard</p>
                          <p className="text-[10px] text-sky-600">Internal — separate deployment</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-sky-200/60 text-[10px] font-medium text-sky-800">React + Vite</span>
                        <span className="px-2 py-0.5 rounded-full bg-sky-200/60 text-[10px] font-medium text-sky-800">Vercel</span>
                      </div>
                    </div>
                  </div>
                  {/* Connection arrows */}
                  <div className="hidden sm:flex justify-center py-3">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                      <i className="ri-lock-line text-[10px] text-slate-500" />
                      <span className="text-[10px] font-medium text-slate-600">HTTPS + JWT Cookie</span>
                    </div>
                  </div>
                  <div className="sm:hidden flex justify-center py-2">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 bg-slate-300" />
                      <div className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                        <span className="text-[10px] font-medium text-slate-600">HTTPS + JWT</span>
                      </div>
                      <div className="w-px h-4 bg-slate-300" />
                    </div>
                  </div>
                </div>

                {/* Backend Layer */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100/50 border border-violet-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center"><i className="ri-server-line text-white text-sm" /></span>
                    <div>
                      <p className="text-sm font-bold text-violet-900">Backend API</p>
                      <p className="text-[10px] text-violet-600">Node.js + Express + Prisma ORM • Hosted on Railway</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[{"label":"Pharmacy routes","path":"/api/*"},{"label":"Admin routes","path":"/api/admin"},{"label":"Super-admin","path":"/api/superadmin"},{"label":"Offline sync","path":"/api/sync"},{"label":"Webhooks","path":"/api/webhook"},{"label":"Health check","path":"/api/health"}].map((r) => (
                      <div key={r.path} className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/60 border border-violet-200/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                        <div>
                          <p className="text-[10px] font-medium text-violet-900">{r.label}</p>
                          <p className="text-[9px] text-violet-500 font-mono">{r.path}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection arrows */}
                <div className="hidden sm:flex justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-px h-6 bg-slate-300" />
                    <div className="w-px h-6 bg-slate-300" />
                    <div className="w-px h-6 bg-slate-300" />
                  </div>
                </div>
                <div className="sm:hidden flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-4 bg-slate-300" />
                    <div className="w-px h-4 bg-slate-300" />
                    <div className="w-px h-4 bg-slate-300" />
                  </div>
                </div>

                {/* External Services Layer */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center"><i className="ri-database-2-line text-white text-xs" /></span>
                      <p className="text-sm font-bold text-blue-900">PostgreSQL</p>
                    </div>
                    <p className="text-[10px] text-blue-600">Supabase • Primary database with connection pooling</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100/50 border border-violet-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-violet-500 flex items-center justify-center"><i className="ri-bank-card-line text-white text-xs" /></span>
                      <p className="text-sm font-bold text-violet-900">Paystack</p>
                    </div>
                    <p className="text-[10px] text-violet-600">Payments • Subscription billing and webhooks</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-rose-500 flex items-center justify-center"><i className="ri-mail-send-line text-white text-xs" /></span>
                      <p className="text-sm font-bold text-rose-900">Resend</p>
                    </div>
                    <p className="text-[10px] text-rose-600">Email • Transactional email delivery</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Database Design */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Database Design</h2>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Multi-Tenancy Model</h3>
              <p className="text-sm text-slate-600 mb-4">
                The database uses a tenant-per-row model. Every piece of pharmacy-specific data — drugs, batches, transactions, staff, notifications, and logs — is associated with a <code>pharmacyId</code> UUID. There is no separate schema or database per tenant.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                Row-level isolation is enforced at the application layer: every database query that reads or modifies pharmacy data is required to include a <code>pharmacyId</code> filter derived from the authenticated session token. The backend middleware extracts this identifier from the verified JWT and attaches it to every request context. It is not possible for a pharmacy user to supply a different <code>pharmacyId</code> to access another tenant's data.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Core Data Models</h3>
              <div className="space-y-3 text-sm text-slate-600">
                {[
                  { name: "Pharmacy", desc: "The root tenant record. Every other pharmacy-specific record links back to a Pharmacy. Stores the pharmacy name, address, phone, region, subscription status and expiry, the owner reference, and platform-level permission flags." },
                  { name: "User", desc: "Represents a person who can log in. Users are linked to one Pharmacy and have one of five roles: OWNER, MANAGER, PHARMACIST, CASHIER, or STAFF. Passwords are hashed with bcrypt. Staff may also have a PIN for fast counter login." },
                  { name: "Drug", desc: "The drug catalogue entry for a specific pharmacy. Stores name, category, dosage form, strength, manufacturer, description, and a configurable low-stock threshold. A Drug belongs to exactly one Pharmacy and has one or more Batches." },
                  { name: "Batch", desc: "A physical stock unit. Each Batch belongs to one Drug and stores its own quantity, cost price, selling price, expiry date, and batch number. A Drug may have many Batches representing different deliveries. The FEFO constraint is enforced at query time." },
                  { name: "Transaction", desc: "An atomic event that changed stock. Types include SALE, RESTOCK, RECONCILIATION, and EDIT. Every Transaction belongs to a Pharmacy and a User. A Transaction has one or more TransactionItems." },
                  { name: "TransactionItem", desc: "A line item within a Transaction. Each TransactionItem links to a specific Batch and records the quantity and the price at the time of the transaction." },
                ].map((m) => (
                  <div key={m.name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="shrink-0 w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-700">{m.name[0]}</span>
                    <p><strong className="text-slate-900">{m.name}:</strong> {m.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">The Inventory Hierarchy:</p>
                <pre className="text-xs text-slate-600 font-mono">
{`Pharmacy
└── Drug (catalogue entry)
    └── Batch (physical stock unit, with expiry and quantity)
        └── TransactionItem (line item in a sale or restock)
            └── Transaction (sale, restock, or reconciliation event)`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Supporting Models</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                {[
                  { name: "DeletedBatch", desc: "A permanent log of every batch that has been written off or purged due to expiry." },
                  { name: "StockMovementLog", desc: "A detailed, append-only log of every quantity change." },
                  { name: "OfflineSession", desc: "A record of each period where the pharmacy terminal operated offline." },
                  { name: "BackupLog", desc: "A log of every backup generated." },
                  { name: "ImportLog", desc: "A log of every CSV bulk import." },
                  { name: "Notification", desc: "In-app notifications stored per pharmacy." },
                  { name: "OTP", desc: "Time-limited, single-use codes for password reset." },
                  { name: "PaymentReference", desc: "Tracks Paystack payment references during registration and renewal." },
                  { name: "DrugMaster", desc: "A platform-level (not pharmacy-specific) catalogue of known drug names." },
                ].map((m) => (
                  <div key={m.name} className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p><strong className="text-slate-900 text-xs">{m.name}:</strong> <span className="text-xs">{m.desc}</span></p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Backend Architecture */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Backend Architecture</h2>
              <p className="text-sm text-slate-600 mb-4">
                The backend is a Node.js application using the Express framework. Prisma ORM is used for all database access. The database is PostgreSQL.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Request Processing Chain</h3>
              <div className="space-y-1.5 text-sm text-slate-600">
                {["CORS validation", "Maintenance mode check", "Helmet (HTTP security headers)", "Rate limiting", "Body parsing", "Authentication middleware (JWT extraction and verification)", "Subscription enforcement", "Role enforcement", "Route handler", "Error handler"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">{i + 1}</span>
                    <span className="text-sm text-slate-700">{step}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Route Structure</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 font-mono">
                {["/api/auth/*", "/api/drugs/*", "/api/transactions/*", "/api/inventory/*", "/api/kpi/*", "/api/staff/*", "/api/pharmacy/*", "/api/notifications/*", "/api/backups/*", "/api/sync/*", "/api/logs/*", "/api/alerts/*", "/api/insights/*", "/api/shifts/*", "/api/admin/*", "/api/superadmin/*", "/api/webhook/paystack"].map((route) => (
                  <div key={route} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{route}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Background Workers</h3>
              <div className="space-y-2 text-sm text-slate-600">
                {[
                  { name: "Subscription worker", desc: "Runs hourly. Sends email reminders and marks pharmacies as deactivated." },
                  { name: "Inventory check worker", desc: "Triggered asynchronously on login and after each sale to generate notifications for low stock, etc." },
                  { name: "Backup scheduler", desc: "Generates encrypted server-side backups on a cron schedule." },
                ].map((w) => (
                  <div key={w.name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="shrink-0 w-6 h-6 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center text-[10px] font-bold text-amber-700">{w.name[0]}</span>
                    <p><strong className="text-slate-900">{w.name}:</strong> {w.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Offline Sync Mechanism</h3>
              <p className="text-sm text-slate-600 mb-2">
                The sync endpoint (<code>POST /api/sync/batch</code>) accepts an array of queued operations from the pharmacy terminal. The backend:
              </p>
              <div className="space-y-1.5 text-sm text-slate-600">
                {["Sorts operations chronologically by device timestamp.", "Opens a single Prisma database transaction.", "Applies each operation in sequence using the same business logic as the online endpoints.", "If any operation fails, the entire batch is rolled back.", "Returns a per-operation result array."].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">{i + 1}</span>
                    <span className="text-sm text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Frontend Architecture */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Frontend Architecture</h2>
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Pharmacy Dashboard</h3>
              <p className="text-sm text-slate-600 mb-4">
                The pharmacy dashboard is a React 18 TypeScript application bundled with Vite and deployed to Vercel. It is configured as a Progressive Web App using the <code>vite-plugin-pwa</code> package with Workbox service worker generation.
              </p>
              
              <div className="space-y-3 text-sm text-slate-600">
                {[
                  { name: "Offline-first design", desc: "The core offline-first approach stores the complete drug catalogue in the browser using browser-native storage mechanisms. When the application loads, it fetches the full inventory from the API and caches it locally. Sales and other write operations made while offline are queued in the browser's local storage." },
                  { name: "State management", desc: "Global application state is managed through a single React Context (AppContext). This context holds the authenticated user, the drug catalogue, the current basket, held carts, notification data, offline queue state, and application-level settings." },
                  { name: "Routing", desc: "Client-side routing is implemented with React Router v6. All routes are protected by an AppShell component that verifies the session before rendering protected content. Role-specific routes are wrapped in a RoleGuard component." },
                  { name: "Why these decisions", desc: "The offline-first architecture was chosen explicitly for the Ghanaian and broader African market context. Electricity and internet connectivity are improving across the continent but remain inconsistent in many areas. A pharmacy that cannot process sales because of a connectivity issue loses real revenue." },
                ].map((item) => (
                  <div key={item.name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="shrink-0 w-6 h-6 rounded-md bg-sky-50 border border-sky-200 flex items-center justify-center text-[10px] font-bold text-sky-700">{item.name[0]}</span>
                    <p><strong className="text-slate-900">{item.name}:</strong> {item.desc}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Admin Dashboard</h3>
              <p className="text-sm text-slate-600 mb-4">
                The admin dashboard is a separate React application deployed to a separate Vercel project. It communicates with the same backend API but exclusively through the admin API routes. Separating it as a distinct deployment provides an additional security boundary.
              </p>
            </motion.section>
            
            {/* External Integrations */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">External Integrations</h2>
              <div className="space-y-3 text-sm text-slate-600">
                {[
                  { name: "Paystack", desc: "Handles all subscription payments and renewals using hosted checkout. Sends webhook events verified via HMAC-SHA512 signature validation.", color: "bg-violet-50 border-violet-200 text-violet-700" },
                  { name: "Resend", desc: "All transactional email is sent through Resend. Email is sent using HTML templates maintained in the backend codebase.", color: "bg-blue-50 border-blue-200 text-blue-700" },
                  { name: "Supabase", desc: "Provides the managed PostgreSQL database. Klavora uses the direct database connection via Prisma ORM.", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                  { name: "Sentry", desc: "Error tracking and performance monitoring are implemented using Sentry on both the frontend and backend.", color: "bg-rose-50 border-rose-200 text-rose-700" },
                ].map((s) => (
                  <div key={s.name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className={`shrink-0 w-6 h-6 rounded-md border flex items-center justify-center text-[10px] font-bold ${s.color}`}>{s.name[0]}</span>
                    <p><strong className="text-slate-900">{s.name}:</strong> {s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Infrastructure & Scalability */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Infrastructure &amp; Scalability</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { name: "Frontend hosting", desc: "Vercel", detail: "Automatic HTTPS, global CDN, zero-downtime deployments", color: "bg-sky-50 border-sky-200" },
                  { name: "Backend hosting", desc: "Railway", detail: "Managed container environment", color: "bg-violet-50 border-violet-200" },
                  { name: "Database", desc: "Supabase", detail: "PostgreSQL with connection pooling", color: "bg-emerald-50 border-emerald-200" },
                ].map((i) => (
                  <div key={i.name} className={`p-4 rounded-xl border ${i.color}`}>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{i.name}</p>
                    <p className="text-sm font-bold text-slate-900">{i.desc}</p>
                    <p className="text-xs text-slate-500 mt-1">{i.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-4">
                <strong>Current design strengths:</strong> The current architecture is well-suited for the current scale of tens to low hundreds of pharmacy tenants. The centralised backend is simple to operate, deploy, and monitor.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                <strong>What would need to change at scale:</strong> Background workers should move to a dedicated job queue system (such as BullMQ backed by Redis). An in-memory cache like Redis should replace the current per-process inventory cache. The backend should be horizontally scaled behind a load balancer. Read replicas may be needed for analytics.
              </p>
            </motion.section>
            
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Klavora (EliTech CreaTives Limited). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-600 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
