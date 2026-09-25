import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Features() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <SEO 
        title="Features | Klavora - Pharmacy Inventory Management" 
        description="Explore Klavora's features including FEFO automated dispensing, offline-first sync, and pharmacy POS software built for Ghana and West Africa." 
        canonical="https://klavora.store/features"
      />
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
              Klavora Feature Reference
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              This document describes every feature available in the Klavora Pharmacy Management Platform. It is written for pharmacy owners and managers who want to understand exactly what Klavora does before making a decision.
            </p>
          </div>

          <div className="space-y-10">
            {/* Point of Sale Terminal */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Point of Sale Terminal</h2>
              <p className="text-sm text-slate-600 mb-4">
                The Klavora POS terminal is your pharmacy's counter system. It lets any authorised staff member search for drugs, build a sale basket, collect payment, and generate a receipt — all in under a minute. The terminal is designed to be fast, accurate, and usable by staff with minimal training.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Drug search — Search by drug name or category. Results show available stock and expiry status at a glance.", "Multi-item baskets — Add multiple drugs to a single sale before confirming. Adjust quantities inline.", "Payment methods — Cash, Mobile Money (MoMo), card, and insurance are all supported. Each sale records which payment method was used.", "Change calculation — For cash sales, enter the amount tendered and the system calculates change automatically.", "Payment reference — MoMo and card payments can record a transaction reference for reconciliation.", "Insurance sales — Record the insurance provider and policy number at the point of sale.", "Receipt generation — A printed or on-screen receipt is generated for every sale, showing the pharmacy name, drug items, quantities, prices, payment method, and a unique reference number.", "Controlled substance logging — When a controlled drug is dispensed, the system prompts for the patient name, prescriber name, and prescriber licence number before confirming the sale.", "Offline selling — Sales can be completed even when there is no internet connection.", "Keyboard shortcuts — Power users can navigate the POS with keyboard shortcuts: search, confirm, hold cart, and more."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Inventory Management */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Inventory Management</h2>
              <p className="text-sm text-slate-600 mb-4">
                Inventory management is the heart of Klavora. Every drug in your pharmacy is tracked at the batch level, meaning you always know exactly how much stock you have, when it expires, and what it cost. The system enforces pharmacy best practices automatically.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Drug catalogue — Every drug is stored with its name, category, dosage form, strength, manufacturer, and description.", "Batch-level tracking — Each drug can have multiple batches. Every batch has its own quantity, cost price, selling price, and expiry date.", "Expiry colour coding — Inventory cards are colour-coded at a glance: green for healthy stock, amber for stock expiring within 30 days, and red for expired stock.", "FEFO dispensing — When a sale is confirmed, the system automatically sells from the batch with the nearest expiry date first.", "Low stock alerts — Each drug has a configurable low stock threshold (default: 10 units).", "Out-of-stock alerts — When a drug's stock reaches zero, a critical notification is generated immediately.", "Expiry alerts — When any batch reaches within 30 days of its expiry date, an automatic notification is generated.", "Controlled drug flag — Drugs flagged as controlled substances display a visual indicator and require prescriber details at the point of sale.", "Bulk CSV import — Upload a spreadsheet to add your entire catalogue at once. Imports can be undone within 24 hours.", "Write-off and purge — Expired batches can be individually deleted or bulk-purged. Each write-off is recorded in the audit log.", "Supervised dispensing — Dispense post-expiry stock under supervision if authorised."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Restock Management */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Restock Management</h2>
              <p className="text-sm text-slate-600 mb-4">
                When new stock arrives at your pharmacy, the Restock page is where you record it. Klavora links every restock to a specific batch and staff member, creating a permanent, auditable record of every stock addition.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["New batch restocking — Add a new batch to any existing drug.", "Existing batch restocking — Top up the quantity on an existing batch rather than creating a duplicate.", "Automatic audit entry — Every restock creates an automatic audit log entry recording who restocked, what drug, how many units, and when.", "Sortable view — Sort by drug name, current stock level, or nearest expiry date.", "Stock movement history — Every quantity change is recorded in the stock movement log."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* KPI Dashboard */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">KPI Dashboard</h2>
              <p className="text-sm text-slate-600 mb-4">
                The KPI Dashboard gives pharmacy owners and managers a real-time financial picture of their business. All figures are drawn live from actual transaction data — nothing is estimated. This page is only visible to Owners and Managers.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Total inventory value — The total cost value of all stock currently on the shelves, broken down into healthy stock, stock expiring within 30 days, and already-expired stock.", "Gross margin — The difference between the price you sold drugs for and the price you paid for them, expressed as both a monetary value and a percentage.", "Revenue tracking — Total sales revenue over any selected date range, alongside units sold and number of transactions.", "Loss tracking — The value of stock that was written off due to expiry.", "Staff performance — A ranked table showing each staff member's total sales, revenue generated, and units dispensed over any selected period.", "Stock movement summary — How many units were sold, restocked, and written off in any given period."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Sales Metrics */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Sales Metrics</h2>
              <p className="text-sm text-slate-600 mb-4">
                The Sales Metrics page provides detailed revenue analytics and transaction history. It is designed for owners and managers who want to understand sales patterns and trends. This page is only visible to Owners and Managers.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Revenue chart — A visual chart showing revenue over time, filterable by date range.", "Top-selling drugs — A ranked list of the drugs that generate the most revenue.", "Transaction history — A full, scrollable list of every transaction, showing the date, staff member, items sold, quantities, total value, and payment method.", "Payment method breakdown — See what percentage of your sales are cash, MoMo, card, or insurance.", "Transaction detail — Expand any transaction to see exactly which drugs were sold, from which batch, at what price."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Offline Selling */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Offline Selling</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora is built to work without an internet connection. This is not a limited mode — it is the full pharmacy terminal running on locally cached data.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Automatic offline detection — The terminal detects when connectivity is lost and displays a clear offline indicator.", "Manual offline mode — Staff can manually switch to offline mode at any time.", "Full POS functionality offline — Search drugs, build baskets, confirm sales, and generate receipts all work without connectivity.", "Automatic sync on reconnection — Offline sales sync automatically when connectivity returns.", "Conflict resolution — Detects and presents resolution options if conflicts occur.", "Offline session logging — Every offline session is recorded for audit purposes."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Hold Feature */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Hold Feature</h2>
              <p className="text-sm text-slate-600 mb-4">
                The Hold Feature allows a cashier to pause a sale mid-way and serve another customer, then return to the paused sale.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Multiple held carts — The terminal can hold several carts simultaneously.", "Held cart queue — A clear display shows all currently held carts and how long they have been waiting.", "Resume or discard — Held carts can be resumed or discarded at any time.", "No data loss — Held carts persist across page refreshes."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Staff Management */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Staff Management</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora supports multi-staff pharmacies with a structured role system. Each staff member gets their own login, and their access is precisely controlled by their role. This page is only visible to Owners and Managers.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Add staff — Create a new staff account with a name, email, role, and temporary password. An invitation email is sent automatically.", "PIN login — Staff can log in using a numeric PIN instead of typing a full email and password.", "Force password change — New staff are required to set their own password on first login.", "Deactivate staff — Remove access for staff who have left without deleting their transaction history.", "Edit staff details — Update names, roles, and contact details."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Audit Log */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Audit Log</h2>
              <p className="text-sm text-slate-600 mb-4">
                The Audit Log is a permanent, tamper-proof record of every significant action taken in the pharmacy system. Every sale, restock, drug edit, batch deletion, login, staff change, and setting update is recorded automatically. The audit log cannot be edited or deleted by anyone — not even the Owner.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Every transaction recorded — Sales, restocks, reconciliations, and edits each appear as a separate log entry.", "Staff attribution — Every entry shows which staff member performed the action, by name and role.", "Timestamps — Every entry shows the exact date and time the action was taken.", "Transaction detail — Sales entries show which drugs were sold, from which batch, at what price.", "Write-off logging — Every batch deletion or expiry purge is recorded, including the quantity written off and the value lost.", "CSV export — The full audit log can be exported as a CSV file for compliance, accounting, or external reporting.", "Access restricted — Only Owners and Managers can view the audit log."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Shift Management */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Shift Management</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora's shift management system was designed around three operating modes suited to different pharmacy types:
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Self-managed — Staff are responsible for their own session. No formal float tracking.", "Cashier-managed — A designated cashier opens and closes the shift, manages the float, and is accountable for the cash in the till at the end of each shift.", "Manager-supervised — A manager opens and closes shifts for individual staff members, with full float tracking and reconciliation reports."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Backup and Restore */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Backup and Restore</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora keeps a comprehensive, encrypted backup of all your pharmacy data. Backups protect you against accidental deletion, data corruption, or any other unexpected loss of records.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Owner-initiated backups — Generate an encrypted backup of your complete pharmacy data at any time.", "Automated server-side backups — Taken on a configurable schedule (daily, weekly, or monthly).", "Easy Restore — Upload your backup file to decrypt and restore atomically."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Drug Finder */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Drug Finder</h2>
              <p className="text-sm text-slate-600 mb-4">
                The Drug Finder is a public-facing feature that helps patients find pharmacies near them that have a specific drug in stock. It operates entirely separately from the pharmacy dashboard and requires no action from pharmacy staff once enabled.
              </p>
            </motion.section>

            {/* Supervised Dispensing of Post-Expiry Stock */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.34 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Supervised Dispensing of Post-Expiry Stock</h2>
              <p className="text-sm text-slate-600 mb-4">
                In some clinical situations, a pharmacist or healthcare provider may authorise the dispensing of medication that is past its printed expiry date. Klavora supports this under a strictly controlled permission model, disabled by default.
              </p>
            </motion.section>

            {/* Notifications */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.36 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Notifications</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora monitors your pharmacy automatically and generates notifications when something needs your attention. Notifications appear in the bell icon at the top of every page and are also sent by email to the owner.
              </p>
            </motion.section>

            {/* Mobile and Desktop Support */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.38 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Mobile and Desktop Support</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora is a Progressive Web App, which means it is designed to work on any device — phone, tablet, or desktop computer — without any software installation.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                {["Desktop experience — Full-width layout on desktop and large screens.", "Mobile experience — Layout adapts to a single-column, touch-friendly design.", "Install as an app — Can be installed directly from the browser on Android and iOS as a Progressive Web App."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Onboarding Tour */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-12">Onboarding Tour</h2>
              <p className="text-sm text-slate-600 mb-4">
                When a new pharmacy owner logs in for the first time, an interactive onboarding tour walks them through the key features of the dashboard.
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
