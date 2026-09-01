import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ApiOverview() {
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
              Klavora API Overview
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              This document provides a high-level conceptual overview of the Klavora backend API for developers and technical evaluators. It is not a full endpoint reference — it describes the API's architecture, authentication model, and major functional areas at a conceptual level.
            </p>
          </div>

          <div className="space-y-10">
            {/* Architecture Overview */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture Overview</h2>
              <p className="text-sm text-slate-600 mb-4">
                Klavora uses a centralised backend architecture. A single Node.js API server handles all requests from both the pharmacy dashboard (used by pharmacy staff) and the admin dashboard (used by the Klavora operations team). Both frontends communicate with the same backend and share the same PostgreSQL database.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                This centralised model keeps operational complexity low during the current growth phase, makes deployments straightforward, and ensures that data is always consistent across both interfaces. The pharmacy frontend and admin dashboard are deployed as separate web applications but both authenticate against and communicate exclusively with the central backend API.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                The API follows a REST-style design. Responses are JSON. All endpoints require authentication except the public Drug Finder search and the payment webhook receiver.
              </p>
            </motion.section>

            {/* Authentication */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Authentication</h2>
              <p className="text-sm text-slate-600 mb-4">
                The Klavora pharmacy API uses a cookie-based session model built on top of signed JSON Web Tokens (JWTs).
              </p>
              <ul className="space-y-4 text-sm text-slate-600 list-none pl-0">
                <li><strong>Token issuance:</strong> When a pharmacy owner or staff member logs in successfully, the backend signs a JWT containing the user's identifier, their pharmacy identifier, and their role. This token is set as an HttpOnly, Secure browser cookie.</li>
                <li><strong>Token usage:</strong> On every subsequent request, the browser automatically sends the cookie. The backend validates the token's cryptographic signature and expiry before processing the request. No manual token handling is required on the client side.</li>
                <li><strong>Role embedding:</strong> Every token carries the authenticated user's role. This means the backend can enforce role-based access control on every individual endpoint without making additional database queries for each request.</li>
                <li><strong>Token lifecycle:</strong> Sessions have a configurable duration. If "Remember Me" is selected at login, the session duration is extended. Logout clears the cookie server-side. Tokens cannot be revoked mid-lifecycle (other than by clearing the cookie), which is why the inactivity auto-logout feature exists as a compensating control on pharmacy terminals.</li>
                <li><strong>Admin authentication:</strong> The admin API uses a separate, stricter authentication flow that is completely isolated from the pharmacy user authentication path. Admin users cannot access pharmacy API routes, and pharmacy users cannot access admin API routes.</li>
              </ul>
            </motion.section>

            {/* Multi-Tenancy */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Multi-Tenancy</h2>
              <p className="text-sm text-slate-600 mb-4">
                Every authenticated request carries the pharmacy identifier embedded in the session token. The backend extracts this identifier and uses it to scope every database query. No request can read or modify data belonging to a pharmacy other than the one in the authenticated session.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                This is enforced at the query layer, not the application layer. Every query that retrieves inventory, transactions, staff, or settings includes a hard <code>pharmacyId</code> filter derived from the token. This is not a policy check that code could forget to apply — it is a structural requirement of how every query is built.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                A pharmacy user cannot access another pharmacy's data by manipulating request parameters, headers, or URLs. The pharmacyId they receive is always derived from the server-issued token, never from client-supplied input.
              </p>
            </motion.section>

            {/* API Groups */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">API Groups</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Authentication and Session Management</h3>
                  <p className="text-sm text-slate-600">Handles registration (via paid subscription or free trial), login, logout, session restoration, OTP-based password reset, and forced password change on first login. Also handles the two-step payment registration flow: creating a pending account, verifying the Paystack payment, and activating the account.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Inventory and Drug Management</h3>
                  <p className="text-sm text-slate-600">Handles the complete drug catalogue for a pharmacy. Creating drugs, updating drug details, adding batches to drugs, editing batch details, deleting individual batches with write-off logging, and bulk-purging expired batches. Also handles the DrugMaster reference list. Includes bulk CSV import with session-based undo capability within 24 hours of import.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Point of Sale and Transactions</h3>
                  <p className="text-sm text-slate-600">Handles sale processing with automatic FEFO batch deduction. Supports single-item and multi-item baskets. Supports direct batch selection or automatic FEFO selection. Also handles the transaction history API and detailed transaction lookup.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">KPI and Analytics</h3>
                  <p className="text-sm text-slate-600">Provides computed financial metrics: inventory value breakdown, gross margin, sales performance summary, stock movement volumes, loss tracking from expired stock, and staff performance rankings. All KPI endpoints are date-range filterable.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Drug Finder Search</h3>
                  <p className="text-sm text-slate-600">Public-facing API endpoints (no authentication required) that power the Drug Finder map. Returns pharmacies that have opted in and have specified drugs in stock, along with location information.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Pharmacy Settings and Preferences</h3>
                  <p className="text-sm text-slate-600">Handles pharmacy profile updates, subscription and billing settings, backup frequency configuration, and the "allow dispensing expired stock" permission toggle.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Offline Sync</h3>
                  <p className="text-sm text-slate-600">Accepts batches of queued offline operations from the pharmacy terminal. Processes operations in chronological order within a single database transaction. Supports sale sync, restock sync, drug creation, drug update, batch addition, and stock reconciliation.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Backup and Restore</h3>
                  <p className="text-sm text-slate-600">Generates encrypted backup files on demand for download. Accepts uploaded backup files for preview and for full restoration. Restore operations are atomic.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Notifications &amp; Staff</h3>
                  <p className="text-sm text-slate-600">Fetches, marks as read, and deletes in-app notifications. Full CRUD for pharmacy staff accounts. PIN management and role assignment.</p>
                </div>
              </div>
            </motion.section>
            
            {/* Rate Limiting */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Rate Limiting</h2>
              <p className="text-sm text-slate-600 mb-4">
                Rate limiting is applied to all API endpoints to protect against abuse and ensure fair platform performance for all pharmacies.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                Authentication endpoints (login, registration, OTP request) are subject to stricter per-IP rate limits than general API endpoints, to limit the effectiveness of brute-force attacks. General API endpoints have higher rate limits appropriate for normal usage patterns including offline sync operations.
              </p>
            </motion.section>

            {/* Offline Support */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 pt-8 border-t border-slate-100">Offline Support</h2>
              <p className="text-sm text-slate-600 mb-4">
                The Klavora pharmacy terminal maintains a local queue of operations performed while offline. When connectivity is restored, the frontend submits this queue to the sync endpoint as a single batch request.
              </p>
              <p className="text-sm text-slate-600 mb-2">The backend processes the batch as follows:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600 mb-4">
                <li>Operations are sorted chronologically by the timestamp they were performed on the device.</li>
                <li>A single database transaction is opened.</li>
                <li>Each operation is applied in sequence: sales deduct stock using FEFO logic, restocks add to batches, drug edits update records, and stock reconciliations adjust quantities and log the adjustment.</li>
                <li>If any operation in the batch cannot be applied, the entire batch is rolled back and the error is returned to the client for manual resolution.</li>
                <li>On success, the offline session (time offline, operations count) is logged to the server for audit visibility.</li>
              </ol>
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
