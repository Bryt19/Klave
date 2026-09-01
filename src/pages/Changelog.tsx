import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Changelog() {
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
            Back
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
              Klavora Product Changelog
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              <strong>Note to team:</strong> Exact release dates and version numbers should be updated before publishing. The entries below are written based on a thorough review of the codebase and reflect the product as built. Dates are approximate and should be verified against the actual deployment history.
            </p>
          </div>

          <div className="space-y-10">
            {/* Version 2.0 */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Version 2.0 — Current Release</h2>
              <p className="text-sm text-slate-500 italic mb-4">Approximate: Mid 2026</p>
              <p className="text-sm text-slate-600 mb-4">
                This release represents a significant maturation of the Klavora platform, adding financial intelligence, offline capability, multi-role access, and operational resilience.
              </p>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Added</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><strong>Multi-role staff system:</strong> Pharmacies can now add staff with five distinct roles — Owner, Manager, Pharmacist, Cashier, and Staff — each with precisely defined access. A cashier can sell but cannot see financial reports. A pharmacist can restock but cannot manage other staff. The right people see the right information.</li>
                <li><strong>KPI Dashboard:</strong> A dedicated financial overview page showing total inventory value (broken down by healthy, expiring, and expired stock), gross margin, revenue performance, loss from expired stock, and a staff performance leaderboard. All figures are live and filterable by date range.</li>
                <li><strong>Offline selling:</strong> The pharmacy terminal now works without an internet connection. Sales made offline are saved on the device and automatically synchronised to the server when connectivity returns. No sales are lost, even during power outages or connectivity failures.</li>
                <li><strong>Hold feature for the POS terminal:</strong> Cashiers can hold a sale mid-way, serve another customer, and then return to the held cart. Multiple carts can be held simultaneously.</li>
                <li><strong>Controlled substance logging:</strong> When a controlled drug is sold, the system requires the patient name, prescriber name, and prescriber licence number before the sale can be confirmed. All controlled substance dispensing is recorded in the audit log.</li>
                <li><strong>Supervised dispensing of post-expiry stock:</strong> Pharmacy owners can now enable a supervised mode that allows authorised staff to dispense post-expiry medication in documented clinical situations. Every such dispensing event is logged with full prescriber and patient details.</li>
                <li><strong>Drug Finder integration:</strong> Pharmacies can now opt in to appear on the Klavora Drug Finder public map. Patients can search for a drug by name and find nearby pharmacies that have it in stock. Stock data is pulled directly from the live Klavora inventory — no separate update is needed.</li>
                <li><strong>Insurance payment support:</strong> The POS terminal now accepts insurance as a payment method, with fields for the insurance provider and policy number.</li>
                <li><strong>CSV bulk import with undo:</strong> Upload a spreadsheet to add your entire drug catalogue at once. Imports can be undone within 24 hours if a mistake is made.</li>
                <li><strong>Audit log CSV export:</strong> The full audit log can now be exported as a CSV file for compliance reporting, accounting, or external record-keeping.</li>
                <li><strong>Batch write-off and purge:</strong> Expired batches can be individually written off or bulk-purged. Each write-off is recorded in the loss tracking report.</li>
                <li><strong>Configurable low stock thresholds:</strong> Each drug now has its own configurable low stock threshold. The system generates an alert when stock falls to or below that threshold.</li>
                <li><strong>Maintenance mode:</strong> The Klavora team can now activate a platform-wide maintenance window that gracefully pauses all pharmacy operations with a message to users, while keeping health check endpoints and admin access available.</li>
                <li><strong>In-app notification centre:</strong> All system notifications (low stock, expiry, subscription alerts) are now collected in a dedicated notification centre accessible from the bell icon in the header.</li>
                <li><strong>Payment reference recording:</strong> MoMo and card payments now record a transaction reference number at the point of sale for reconciliation purposes.</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Improved</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><strong>POS terminal speed:</strong> The terminal now loads the full drug catalogue from a local cache, making search and item selection instant regardless of network speed.</li>
                <li><strong>Inactivity auto-logout:</strong> The logout timer now shows a 60-second countdown modal before signing out, giving staff the chance to dismiss the modal if they are still at the terminal.</li>
                <li><strong>Session restoration:</strong> Returning to the app after a period away no longer requires logging in again, provided the session has not expired.</li>
                <li><strong>Inventory colour coding:</strong> Drug cards now display colour-coded expiry status at a glance — green, amber, and red — so staff can immediately spot drugs that need attention.</li>
                <li><strong>Backup encryption:</strong> Backup files are now encrypted per-pharmacy using AES-256-CBC, ensuring that a backup file from one pharmacy cannot be read by another.</li>
                <li><strong>Error handling:</strong> API errors now return structured, actionable error messages that the frontend uses to display clear, human-readable feedback to staff.</li>
                <li><strong>Mobile layout:</strong> The POS terminal, inventory page, and dashboard now fully adapt to smaller screens for use on phones and tablets.</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Fixed</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li>Dashboard flash on logout has been resolved. Navigating away now completes before user state is cleared.</li>
                <li>Offline sales no longer create duplicate records when connectivity is intermittent.</li>
                <li>Expiry date sorting in the inventory list now correctly handles batches from the same drug across different expiry months.</li>
              </ul>
            </motion.section>

            {/* Version 1.5 */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2 mt-12 pt-8 border-t border-slate-100">Version 1.5</h2>
              <p className="text-sm text-slate-500 italic mb-4">Approximate: Late 2025</p>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Added</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><strong>Progressive Web App (PWA) support:</strong> Klavora can now be installed directly from the browser on Android and iOS. No app store required. The installed app opens full-screen and works like a native application.</li>
                <li><strong>Free trial registration:</strong> New pharmacies can now start a 14-day free trial without a payment upfront. Full access to all features during the trial period.</li>
                <li><strong>Staff PIN login:</strong> Staff members can now log in using a four-digit PIN at the counter, making shift changes faster without typing a full email address.</li>
                <li><strong>Backup frequency settings:</strong> Owners can now configure automated backups to run daily, weekly, or monthly from the Settings page.</li>
                <li><strong>Subscription renewal flow:</strong> Owners can renew their subscription directly from the Settings page using Mobile Money or card. No need to contact support.</li>
                <li><strong>Sales Metrics page:</strong> A dedicated analytics page showing revenue over time, best-selling drugs, and a breakdown of sales by payment method.</li>
                <li><strong>Staff invitation email:</strong> When a new staff member is added, they now receive an automatic invitation email with a temporary password and login instructions.</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Improved</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><strong>Batch-level inventory detail:</strong> Inventory cards now show each batch separately with its own expiry date, quantity, and stock status.</li>
                <li><strong>FEFO enforcement:</strong> Stock deduction during sales is now strictly enforced — the system always deducts from the nearest-expiry batch first, with no option to override unless dispensing of expired stock is enabled.</li>
                <li><strong>Settings page reorganisation:</strong> Settings are now organised into clear sections: pharmacy profile, account and plan, staff, and backup.</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Fixed</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li>Email delivery errors during OTP password reset now fall back to displaying the OTP code in the admin log rather than silently failing.</li>
                <li>Subscription expiry date calculation corrected for renewals that happen mid-cycle.</li>
              </ul>
            </motion.section>

            {/* Version 1.0 */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2 mt-12 pt-8 border-t border-slate-100">Version 1.0 — Initial Launch</h2>
              <p className="text-sm text-slate-500 italic mb-4">Approximate: Mid 2025</p>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Added</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><strong>Pharmacy registration:</strong> Pharmacy owners can register their pharmacy with name, address, phone, region, and owner details. Registration includes a Paystack payment step to activate the account.</li>
                <li><strong>Point of Sale terminal:</strong> A full counter-side selling interface with drug search, multi-item basket, cash payment, change calculation, and digital receipt generation.</li>
                <li><strong>Inventory management:</strong> Drug catalogue with batch tracking. Each drug can have multiple batches with separate quantities, prices, and expiry dates.</li>
                <li><strong>FEFO dispensing logic:</strong> Sales automatically deduct from the batch with the nearest expiry date first.</li>
                <li><strong>Restock workflow:</strong> Stock can be restocked by adding a new batch or topping up an existing batch. Every restock is logged.</li>
                <li><strong>Dashboard:</strong> Overview page showing total sales (today, 7 days, 30 days), low stock count, out-of-stock count, near-expiry count, and recent transactions.</li>
                <li><strong>Staff management:</strong> Owners can add, edit, and deactivate staff members.</li>
                <li><strong>Audit log:</strong> Every sale, restock, and change is logged with the staff member's name and timestamp.</li>
                <li><strong>Manual backup and restore:</strong> Owners can generate an encrypted backup file and restore from it at any time.</li>
                <li><strong>Notifications:</strong> Automatic alerts for low stock (≤10 units), out-of-stock, and near-expiry (≤30 days). Delivered in-app and by email.</li>
                <li><strong>Password reset:</strong> Six-digit OTP sent to the registered email address for secure password recovery.</li>
                <li><strong>Auto-logout on inactivity:</strong> The session expires after five minutes of inactivity at the terminal.</li>
                <li><strong>Dark mode:</strong> The interface supports both light and dark colour schemes.</li>
              </ul>
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
