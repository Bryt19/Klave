import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Security() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <SEO 
        title="Security | Klavora - Pharmacy Inventory Management" 
        description="Klavora provides enterprise-grade security for pharmacy software in West Africa, ensuring compliance with Ghana DPA and HIPAA." 
        canonical="https://klavora.store/security"
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
              Klavora Security Overview
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              This document explains how Klavora protects your pharmacy's data. It is written for pharmacy owners who want confidence that their records are safe, and for technical evaluators doing due diligence.
            </p>
          </div>

          <div className="space-y-10">
            {/* Sections */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Isolation</h2>
              <p className="text-sm text-slate-600 mb-4">
                Every pharmacy on the Klavora platform is a completely independent tenant. Your pharmacy's drugs, transactions, staff records, and settings are structurally isolated from every other pharmacy on the platform. This is enforced at the database level — every query that retrieves or modifies data is required to include your pharmacy's unique identifier, and this identifier is derived from your authenticated session, not from anything a user can supply or manipulate.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                It is architecturally impossible for a user at one pharmacy to view or access data belonging to another pharmacy. This is not a policy rule — it is a technical constraint built into the way every database query is constructed.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Authentication</h2>
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">How staff log in:</h3>
              <p className="text-sm text-slate-600 mb-4">
                Pharmacy owners log in with their registered email address and password. Staff members can log in with either their email and password, or with a numeric PIN assigned by the owner. PIN login is designed for fast shift changes at the counter.
              </p>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Session management:</h3>
              <p className="text-sm text-slate-600 mb-4">
                After a successful login, a secure session token is issued and stored in an encrypted, HttpOnly browser cookie. HttpOnly means the token is completely inaccessible to any JavaScript running in the browser, including malicious scripts. The session is validated on the server side on every request.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Inactivity auto-logout:</h3>
              <p className="text-sm text-slate-600 mb-4">
                After five minutes of inactivity at the terminal, Klavora displays a "Still there?" modal with a sixty-second countdown. If no response is received, the system logs the user out automatically and clears the session. This is a deliberate design decision: pharmacy terminals are shared devices in busy environments, and an unattended, logged-in session is a security risk. This feature ensures a staff member who steps away from the counter cannot have their session used by someone else.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Password security:</h3>
              <p className="text-sm text-slate-600 mb-4">
                Passwords are never stored in plain text. They are hashed using bcrypt with a work factor designed to make brute-force attacks computationally expensive. Staff are required to set their own password on first login — temporary passwords issued during account creation cannot be reused.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Password recovery:</h3>
              <p className="text-sm text-slate-600 mb-4">
                Password resets are handled via a time-limited, single-use one-time password (OTP) sent to the registered email address. The OTP expires within ten minutes.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Role-Based Access Control</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora enforces a five-role permission model. Every API request is validated against the authenticated user's role before any data is returned or modified.
              </p>
              
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm mb-6">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Role</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Access Level</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Owner</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Full access to every feature, including billing, settings, staff management, audit log, KPI dashboard, and sales metrics.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Manager</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Full operational access equivalent to Owner, with access to audit log, KPI, and sales metrics. Cannot manage billing or subscription.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Pharmacist</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Can view inventory, sell at the counter, restock, and add new inventory. Cannot access financial reports, staff management, or settings.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Cashier</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Can sell at the counter and view inventory. Cannot restock, add drugs, or access any reports or settings.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Staff</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Counter access for sales and inventory viewing. A general-purpose role for non-specialist staff.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                <p className="text-sm text-emerald-800">
                  <strong>Important:</strong> Access control is enforced at two levels simultaneously. At the frontend level, pages that a role cannot access are completely removed from the navigation and cannot be reached by typing the URL directly — the route is simply not rendered. At the backend level, every API endpoint independently validates the caller's role before responding. Both layers must independently approve a request for it to succeed.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Data in Transit</h2>
              <p className="text-sm text-slate-600 mb-4">
                All communication between the Klavora application and its servers is encrypted using TLS (Transport Layer Security). This applies to:
              </p>
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                {["All API requests from the pharmacy terminal to the backend", "All webhook events from payment processors", "All email transmission"].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-4">
                TLS encryption means that data cannot be intercepted or read by any third party while it is in transit between your device and Klavora's servers.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Data at Rest</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora's database is hosted on a managed PostgreSQL service with encryption at rest enabled. This means that all data stored on disk — including your drug records, transaction history, staff records, and pharmacy settings — is encrypted at the storage layer. Even if someone gained physical access to the underlying storage, the data would be unreadable without the correct encryption keys.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                Manual backup files generated by the pharmacy owner are encrypted with AES-256-CBC encryption before download. Each pharmacy's backup files use a key derived from both the pharmacy's unique identifier and a system secret, meaning a backup file from one pharmacy cannot be decrypted using another pharmacy's credentials.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Audit Trail</h2>
              <p className="text-sm text-slate-600 mb-4">
                Every significant action in the Klavora system is automatically logged to a permanent audit trail. This includes:
              </p>
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                {["Every sale (drug name, batch, quantity, price, staff member, timestamp)", "Every restock (drug, batch, quantity, staff member, timestamp)", "Every drug edit or deletion", "Every batch write-off or expiry purge", "Every staff account creation, edit, or deactivation", "Every settings change", "Stock reconciliations"].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-4">
                The audit log is append-only. It cannot be edited, filtered, or deleted by anyone — not by pharmacy staff, not by managers, and not by owners. The audit log is available for export as a CSV file for compliance and accounting purposes. Only Owners and Managers can view or export the audit log.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Payment Security</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora uses Paystack, a PCI-compliant payment processor, to handle all subscription payments and renewals.
              </p>
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">How payment security works:</h3>
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                {["When a pharmacy owner pays, they are redirected to Paystack's own secure checkout page. Card numbers and Mobile Money credentials are entered directly on Paystack's servers, not on Klavora's.", "Klavora never sees, handles, stores, or transmits card numbers, CVV codes, or Mobile Money PINs. This data never touches Klavora's servers.", "After payment is completed, Paystack sends a webhook notification to Klavora to confirm the payment. Before acting on any webhook, Klavora verifies the webhook's cryptographic signature to confirm it genuinely originated from Paystack and has not been tampered with.", "Payment references are stored for reconciliation purposes, but these contain no sensitive financial information."].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Offline Data</h2>
              <p className="text-sm text-slate-600 mb-4">
                When the Klavora pharmacy terminal operates offline, sales and inventory data are stored temporarily in the browser's local storage on the device.
              </p>
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">How offline data is protected:</h3>
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                {["Offline data is stored in the browser's sandboxed local storage, which is isolated to the Klavora web application and cannot be accessed by other websites or applications on the device.", "Offline data is scoped to the authenticated pharmacy session — it cannot be read by a different pharmacy's session on the same device.", "When connectivity returns, the queued offline operations are transmitted to the server over the encrypted TLS connection and processed in chronological order. Once synced successfully, the local queue is cleared.", "If a conflict is detected (for example, a drug was sold online and offline simultaneously), the conflict is surfaced to the user for manual resolution rather than silently overwriting data."].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Backup and Recovery</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora maintains multiple backup layers to protect against data loss:
              </p>
              <div className="space-y-3 text-sm text-slate-600 mb-4">
                {["Owner-initiated backups — Pharmacy owners can generate an encrypted backup of their complete pharmacy data at any time from the Settings page. These backup files are AES-256-CBC encrypted and intended to be stored by the owner in a separate, secure location (such as Google Drive or a USB drive).", "Automated server-side backups — The platform runs scheduled automated backups at daily, weekly, and monthly intervals, retaining multiple copies at each frequency tier. Server-side backups are encrypted and stored separately from the primary database.", "Data retention policy — On account deactivation, a 30-day grace period begins. The pharmacy can reactivate and restore full access at any point during this period. After 30 days without renewal, all pharmacy data is permanently and irreversibly deleted from all systems."].map((item) => {
                  const [name, ...rest] = item.split(' — ');
                  return (
                    <div key={name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="shrink-0 w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-700">{name[0]}</span>
                      <p><strong className="text-slate-900">{name}:</strong> {rest.join(' — ')}</p>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Compliance</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora is designed with compliance with the <strong>Ghana Data Protection Act, 2012 (Act 843)</strong> in mind. The Ghana Data Protection Act establishes rights for individuals whose personal data is collected and processed, and obligations for organisations that process personal data.
              </p>
              <p className="text-sm text-slate-600 mb-2">In the context of Klavora:</p>
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                {["Pharmacy owners and staff are data subjects whose names, contact details, and login information are processed by Klavora as the data processor.", "Patients' names and prescription details recorded during controlled substance dispensing are stored under the pharmacy's data controller responsibility.", "Klavora collects only the minimum information necessary to operate the platform and provide the service.", "Data is retained for the duration of the subscription plus the 30-day grace period, after which it is deleted."].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-4">
                For questions about data compliance, contact <a href="mailto:info@klavora.store" className="text-emerald-600 hover:text-emerald-500">info@klavora.store</a>.
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
