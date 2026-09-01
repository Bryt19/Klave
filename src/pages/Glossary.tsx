import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Glossary() {
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
              Klavora Glossary
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              This glossary explains terms used across the Klavora platform and documentation. It is written for pharmacy owners and staff who may not be familiar with software or financial terminology.
            </p>
          </div>

          <div className="space-y-10">
            {/* A */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">A</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Account activation</dt>
                  <dd>The process of enabling a pharmacy account so that staff can log in and begin using the platform. Activation happens after a successful subscription payment has been verified.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Audit log</dt>
                  <dd>A permanent record of every action taken in the pharmacy system — every sale, every restock, every change to a drug's details, every login, and every settings change. The audit log cannot be edited or deleted by anyone. It exists so that pharmacy owners always know exactly what happened in their system, and who did it.</dd>
                </div>
              </dl>
            </motion.section>

            {/* B */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">B</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Backup</dt>
                  <dd>A saved copy of your pharmacy's data — drugs, stock, transactions, staff records, and settings — stored in a single encrypted file. If your data is ever lost or corrupted, you can restore it from a backup.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Backup frequency</dt>
                  <dd>How often Klavora automatically creates a backup of your data. Options are daily, weekly, monthly, or none (manual only).</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Basket</dt>
                  <dd>The list of items being added to a sale before it is confirmed at the Point of Sale terminal. Similar to a shopping cart.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Batch</dt>
                  <dd>A specific delivery or lot of a drug. Each time you receive stock from a supplier, that delivery is recorded as a batch. A batch has its own quantity, expiry date, cost price, and selling price.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Batch number</dt>
                  <dd>A reference code that identifies a specific batch of a drug. Often printed on the packaging by the manufacturer.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">bcrypt</dt>
                  <dd>A method used to store passwords securely. Rather than storing your actual password, Klavora stores a scrambled version (called a hash) that cannot be reversed back into the original password.</dd>
                </div>
              </dl>
            </motion.section>

            {/* C */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">C</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Cashier</dt>
                  <dd>One of the five staff roles in Klavora. Cashiers can sell at the counter and view the inventory but cannot add drugs, restock, or access financial reports.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Controlled substance</dt>
                  <dd>A drug classified as a controlled substance is one whose distribution is regulated by law because of its potential for misuse. In Klavora, dispensing a controlled substance requires recording the patient name, prescriber name, and prescriber licence number.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Cost price</dt>
                  <dd>The price your pharmacy paid to buy a drug from the supplier. This is different from the selling price (what you charge the patient). Klavora uses cost price to calculate your gross margin and inventory value.</dd>
                </div>
              </dl>
            </motion.section>

            {/* D */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">D</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Dark mode</dt>
                  <dd>An optional display setting that changes the Klavora interface to use a dark background with light text.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Data isolation</dt>
                  <dd>The principle that each pharmacy's data is completely separate from every other pharmacy's data in the Klavora system.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Data retention</dt>
                  <dd>How long Klavora keeps your data. Your data is kept for the full duration of your active subscription plus a 30-day grace period after it lapses.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Deactivated account</dt>
                  <dd>An account that has been suspended — either because the subscription has expired, or because the Klavora team has suspended it.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Dispensing</dt>
                  <dd>The act of giving a patient their medication at the pharmacy counter.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Drug catalogue</dt>
                  <dd>The complete list of all drugs registered in your pharmacy's Klavora account.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Drug Finder</dt>
                  <dd>A public-facing map feature of the Klavora platform that allows patients and the public to search for a specific drug and see which nearby pharmacies have it in stock.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">DrugMaster</dt>
                  <dd>The platform-level reference library of known drugs maintained by the Klavora team.</dd>
                </div>
              </dl>
            </motion.section>

            {/* E */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">E</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Encryption</dt>
                  <dd>The process of converting data into a scrambled format that can only be read by someone with the correct key.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Expiry alert</dt>
                  <dd>A notification generated automatically when a batch of a drug is within 30 days of its expiry date.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Expiry date</dt>
                  <dd>The date printed on medication packaging after which the manufacturer does not guarantee the drug's safety or effectiveness.</dd>
                </div>
              </dl>
            </motion.section>

            {/* F */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">F</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">FEFO (First Expired, First Out)</dt>
                  <dd>A dispensing rule that says: always sell the batch with the nearest expiry date first. Klavora enforces FEFO automatically.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Float</dt>
                  <dd>The starting amount of cash placed in a till at the beginning of a shift.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Free trial</dt>
                  <dd>A 14-day period at the start of a new Klavora subscription during which the pharmacy has full access to all features without paying.</dd>
                </div>
              </dl>
            </motion.section>

            {/* G */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">G</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">GH₵ (Ghana Cedis)</dt>
                  <dd>The official currency of Ghana. All prices, revenue figures, inventory values, and financial reports in Klavora are displayed in Ghana Cedis.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Grace period</dt>
                  <dd>The 30-day period after a subscription expires during which the pharmacy account is deactivated but the data is not yet deleted.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Gross margin</dt>
                  <dd>The difference between what you sold a drug for and what you paid for it.</dd>
                </div>
              </dl>
            </motion.section>

            {/* H */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">H</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Hold</dt>
                  <dd>A feature on the POS terminal that allows a cashier to pause a current sale basket and serve another customer.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">HttpOnly cookie</dt>
                  <dd>A type of browser cookie that cannot be read by JavaScript code running in the browser. Klavora uses HttpOnly cookies to store session tokens.</dd>
                </div>
              </dl>
            </motion.section>

            {/* I */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">I</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Import session</dt>
                  <dd>A reference identifier assigned to each bulk CSV import, making it possible to undo the entire import within 24 hours.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">In-app notification</dt>
                  <dd>A notification that appears inside the Klavora dashboard, accessed by clicking the bell icon.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Inventory</dt>
                  <dd>All the drugs and stock currently held by your pharmacy.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Inventory value</dt>
                  <dd>The total cost value of all stock currently in your pharmacy. Calculated as: cost price × quantity, summed across all active batches.</dd>
                </div>
              </dl>
            </motion.section>

            {/* K */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">K</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">KPI (Key Performance Indicator)</dt>
                  <dd>A measurable figure that tells you how well your business is performing.</dd>
                </div>
              </dl>
            </motion.section>

            {/* L */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">L</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Low stock alert</dt>
                  <dd>A notification generated automatically when a drug's total quantity across all its batches falls to or below its low stock threshold.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Low stock threshold</dt>
                  <dd>The quantity at which Klavora considers a drug to be running low and generates an alert. Defaulting to 10 units.</dd>
                </div>
              </dl>
            </motion.section>

            {/* M, N, O, P, R, S, T, U, W */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 mt-8">M-Z</h2>
              <dl className="space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-bold text-slate-900">Manager</dt>
                  <dd>One of the five staff roles in Klavora. Managers have full operational access but cannot manage billing or subscription settings.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">MoMo (Mobile Money)</dt>
                  <dd>A mobile phone-based financial service widely used in Ghana (including MTN MoMo and Vodafone Cash).</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">MRR (Monthly Recurring Revenue)</dt>
                  <dd>The total subscription revenue generated per month.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Multi-tenancy</dt>
                  <dd>The architecture that allows a single Klavora platform to serve many different pharmacies simultaneously, while keeping each pharmacy's data completely separate and secure.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Notification</dt>
                  <dd>An automatic alert generated by the Klavora system when something requires the pharmacy owner's attention.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Offline mode</dt>
                  <dd>The state when the Klavora pharmacy terminal is operating without an internet connection. In offline mode, staff can continue selling using inventory data cached on the device.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Offline sync</dt>
                  <dd>The process of uploading queued offline sales and other operations to the Klavora server after connectivity is restored.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">OTP (One-Time Password)</dt>
                  <dd>A temporary six-digit code sent to a registered email address for the purpose of verifying identity before resetting a password.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Owner</dt>
                  <dd>The primary account holder for a pharmacy. The Owner role has full access to every feature in Klavora.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Paystack</dt>
                  <dd>The payment processing company Klavora uses to handle subscription payments.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Payment reference</dt>
                  <dd>A unique code generated by Paystack for each payment transaction.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Pharmacist</dt>
                  <dd>One of the five staff roles in Klavora. Pharmacists can view inventory, sell at the counter, restock, and add new inventory.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">PIN login</dt>
                  <dd>An option for staff to log in using a short numeric PIN instead of typing a full email address and password.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">POS (Point of Sale)</dt>
                  <dd>The place where a customer pays for their medicine.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Premium plan</dt>
                  <dd>The paid subscription tier for Klavora. The premium plan gives full access to all features.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Progressive Web App (PWA)</dt>
                  <dd>A web application that can be installed on a phone or computer directly from the browser, without going through an app store.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Receipt</dt>
                  <dd>A digital document generated after a sale that shows the pharmacy name, items sold, quantities, prices, total amount, payment method, and a unique reference number.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Reconciliation</dt>
                  <dd>The process of aligning two sets of records to make sure they match. In Klavora, stock reconciliation means comparing physical stock counts to the system's recorded quantities and adjusting accordingly.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Role-based access control (RBAC)</dt>
                  <dd>A security model where each user's access is determined by their assigned role.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Restock</dt>
                  <dd>The action of adding new stock to the pharmacy's inventory.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">SaaS (Software as a Service)</dt>
                  <dd>A model where software is delivered over the internet on a subscription basis rather than installed locally.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Selling price (Unit price)</dt>
                  <dd>The price charged to a patient for one unit of a drug.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Session</dt>
                  <dd>The period during which a user is actively logged in to Klavora.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Shift</dt>
                  <dd>A defined period during which a staff member is on duty at the pharmacy.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Stock movement log</dt>
                  <dd>A detailed record of every quantity change in your inventory.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Subscription</dt>
                  <dd>The monthly payment arrangement that gives your pharmacy access to the Klavora platform.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Tenant</dt>
                  <dd>A single pharmacy account on the Klavora platform. Each pharmacy is a separate tenant with its own isolated data, staff, and settings.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">TLS (Transport Layer Security)</dt>
                  <dd>The encryption technology that protects data while it travels between your browser and Klavora's servers.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Transaction</dt>
                  <dd>A recorded event that changed stock. In Klavora, transactions include: SALE, RESTOCK, RECONCILIATION, and EDIT.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Webhook</dt>
                  <dd>An automatic notification sent by one system to another when something happens.</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Write-off</dt>
                  <dd>The act of removing expired or damaged stock from inventory and recording its cost as a loss.</dd>
                </div>
              </dl>
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
