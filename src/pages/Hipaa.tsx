import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ── Helper: render section content with proper bullets ────────── */

function Bullet({ bold, children }: { bold: string; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
      <span>
        <span className="font-semibold text-slate-900">{bold}</span>{" "}
        {children}
      </span>
    </li>
  );
}

function Plain({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
      <span>{children}</span>
    </li>
  );
}

function AmberBullet({ bold, children }: { bold: string; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
      <span>
        <span className="font-semibold text-amber-900">{bold}</span>{" "}
        {children}
      </span>
    </li>
  );
}

const safeguardCategories = [
  {
    title: "Physical Safeguards",
    items: [
      {
        title: "Facility Access Controls",
        description: "Klavora infrastructure is hosted in SOC 2 Type II and HIPAA-compliant data centers operated by AWS. Physical access is restricted to authorized personnel through biometric authentication, surveillance systems, and multi-factor verification.",
      },
      {
        title: "Workstation Security",
        description: "Access to Klavora requires modern browsers with TLS support. We enforce session timeouts, screen lock policies, and device-level security requirements for all users accessing PHI.",
      },
      {
        title: "Device & Media Controls",
        description: "Data at rest is encrypted using AES-256. Backup media is encrypted and stored in geographically redundant, access-controlled facilities. Data disposal follows NIST SP 800-88 guidelines.",
      },
    ],
  },
  {
    title: "Technical Safeguards",
    items: [
      {
        title: "Access Control",
        description: "Role-based access controls (RBAC) with principle of least privilege. Each user is assigned permissions based on their role (pharmacist, technician, administrator). Unique user identification is enforced; shared accounts are prohibited.",
      },
      {
        title: "Audit Controls",
        description: "Comprehensive audit logging records all access to PHI, including user identity, timestamp, action performed, and affected records. Logs are immutable, tamper-evident, and retained for a minimum of 6 years.",
      },
      {
        title: "Integrity Controls",
        description: "PHI integrity is maintained through checksums, digital signatures, and database transaction logging. All data modifications are versioned and reversible within the defined retention period.",
      },
      {
        title: "Transmission Security",
        description: "All data in transit is protected with TLS 1.2 or higher. API communications between Klavora and connected EHR/EMR systems use OAuth 2.0 authentication with mutual TLS where supported.",
      },
      {
        title: "Encryption",
        description: "AES-256 encryption for data at rest. TLS 1.2+ for data in transit. Encryption keys are managed through AWS KMS with automatic rotation. Customer-managed keys (BYOK) available for Enterprise plans.",
      },
    ],
  },
  {
    title: "Administrative Safeguards",
    items: [
      {
        title: "Workforce Training",
        description: "All Klavora employees with access to PHI complete HIPAA awareness training upon hire and annually thereafter. Training covers privacy practices, security protocols, and incident response procedures.",
      },
      {
        title: "Risk Assessment & Management",
        description: "Regular risk assessments are conducted to identify vulnerabilities and threats to PHI. We maintain a formal risk management program aligned with NIST Cybersecurity Framework and conduct annual third-party penetration tests.",
      },
      {
        title: "Information System Activity Review",
        description: "Automated monitoring systems continuously review audit logs for unusual access patterns, unauthorized attempts, and policy violations. Alerts are generated for investigation within defined SLAs.",
      },
      {
        title: "Contingency Planning",
        description: "Business continuity and disaster recovery plans are tested annually. Backup systems can restore service within 4 hours (RPO: 1 hour, RTO: 4 hours). Data is backed up across multiple availability zones.",
      },
    ],
  },
];

const complianceHighlights = [
  { icon: "ri-shield-check-line", label: "HIPAA Compliant", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  { icon: "ri-lock-line", label: "AES-256 Encryption", color: "text-blue-600 bg-blue-50 border-blue-200" },
  { icon: "ri-verified-badge-line", label: "SOC 2 Type II", color: "text-violet-600 bg-violet-50 border-violet-200" },
  { icon: "ri-fingerprint-line", label: "RBAC + MFA", color: "text-amber-600 bg-amber-50 border-amber-200" },
  { icon: "ri-file-list-check-line", label: "Audit Logging", color: "text-rose-600 bg-rose-50 border-rose-200" },
  { icon: "ri-cloud-line", label: "AWS HIPAA Eligible", color: "text-sky-600 bg-sky-50 border-sky-200" },
];

export default function Hipaa() {
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
          {/* Hero */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold mb-5">
              <i className="ri-shield-check-fill text-emerald-500" />
              HIPAA Compliance Overview
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              HIPAA Compliance
            </h1>
            <p className="text-sm text-slate-500 leading-relaxed">
              Klavora is committed to protecting the confidentiality, integrity, and availability of Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) of 1996 and the HITECH Act.
            </p>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              As a Business Associate, Klavora implements comprehensive administrative, physical, and technical safeguards to ensure the secure handling of PHI across our platform. Our compliance posture is validated through regular third-party audits and penetration testing.
            </p>
          </div>

          {/* Compliance Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-16">
            {complianceHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                className={`flex items-center gap-2.5 p-3 rounded-xl border ${item.color}`}
              >
                <i className={`${item.icon} text-lg`} />
                <span className="text-xs font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Business Associate Section */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">Business Associate Agreement (BAA)</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Klavora executes a Business Associate Agreement (BAA) with every covered entity (pharmacy, hospital, or healthcare organization) before any PHI is processed through the platform. The BAA establishes:
            </p>
            <ul className="text-sm text-slate-600 leading-relaxed space-y-3">
              <Plain>Permitted and required uses and disclosures of PHI</Plain>
              <Plain>Safeguards implemented to prevent unauthorized use or disclosure</Plain>
              <Plain>Obligations to report security incidents and breaches within required timeframes</Plain>
              <Plain>Requirements for subcontractors handling PHI</Plain>
              <Plain>Obligations upon termination of the agreement</Plain>
            </ul>
            <p className="text-sm text-slate-600 mt-4">
              To request a BAA, contact <span className="font-semibold">compliance@klavora.com</span>.
            </p>
          </motion.section>

          {/* HIPAA Violation & Breach Notification */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-16 p-6 rounded-2xl bg-amber-50 border border-amber-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <i className="ri-alarm-warning-line text-amber-600 text-lg" />
              <h2 className="text-lg font-bold text-amber-900">Breach Notification</h2>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              In the event of a breach of unsecured PHI, Klavora follows the HIPAA Breach Notification Rule (45 CFR §§ 164.400-414):
            </p>
            <ul className="text-sm text-amber-800 leading-relaxed space-y-3">
              <AmberBullet bold="Individual Notification:">Affected individuals are notified without unreasonable delay and no later than 60 days from discovery.</AmberBullet>
              <AmberBullet bold="HHS Notification:">The Secretary of HHS is notified concurrently. For breaches affecting 500+ individuals, notification is made within 60 days.</AmberBullet>
              <AmberBullet bold="Media Notification:">For breaches affecting 500+ residents of a state or jurisdiction, prominent media outlets are notified.</AmberBullet>
              <AmberBullet bold="Documentation:">All incidents are documented and investigated. Root cause analysis and remediation are completed within 90 days.</AmberBullet>
            </ul>
          </motion.section>

          {/* Safeguards */}
          <div className="space-y-14 mb-16">
            {safeguardCategories.map((category, catIdx) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + catIdx * 0.1 }}
              >
                <h2 className="text-xl font-bold text-slate-900 mb-5">{category.title}</h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl border border-slate-100 bg-slate-50/50"
                    >
                      <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* HIPAA Rule References */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">Applicable HIPAA Rules</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Klavora's compliance program addresses the following HIPAA rules:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Privacy Rule", desc: "45 CFR Part 164, Subpart E — Governs use and disclosure of PHI" },
                { name: "Security Rule", desc: "45 CFR Part 164, Subpart C — Technical, physical, and administrative safeguards" },
                { name: "Breach Notification Rule", desc: "45 CFR Part 164, Subpart D — Breach reporting obligations" },
                { name: "Enforcement Rule", desc: "45 CFR Part 160 — Penalties and enforcement procedures" },
                { name: "Omnibus Rule", desc: "45 CFR Part 164 — Strengthened privacy and security protections" },
                { name: "HITECH Act", desc: "Enhanced enforcement, breach notification, and Business Associate requirements" },
              ].map((rule) => (
                <div key={rule.name} className="p-3 rounded-xl border border-slate-100">
                  <div className="text-sm font-bold text-slate-900">{rule.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{rule.desc}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Third-Party Audits */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="mb-16"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">Third-Party Validation</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Klavora engages independent, third-party security firms to validate our compliance posture. Our security program includes:
            </p>
            <ul className="text-sm text-slate-600 leading-relaxed space-y-3 mt-3">
              <Bullet bold="SOC 2 Type II Audit:">Annual audit covering security, availability, and confidentiality trust service criteria.</Bullet>
              <Bullet bold="Penetration Testing:">Annual third-party penetration tests of our infrastructure and application layer.</Bullet>
              <Bullet bold="Vulnerability Scanning:">Continuous automated vulnerability scanning with remediation SLAs.</Bullet>
              <Bullet bold="Code Review:">Security-focused code reviews and static application security testing (SAST) integrated into CI/CD.</Bullet>
            </ul>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Our Compliance Team</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For questions about Klavora's HIPAA compliance, to request a BAA, or to report a potential security concern:
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Compliance Email</div>
                  <div className="font-semibold">compliance@klavora.com</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Security Reporting</div>
                  <div className="font-semibold">security@klavora.com</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Privacy Officer</div>
                  <div className="font-semibold">privacy@klavora.com</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Mailing Address</div>
                  <div className="font-semibold">EliTech CreaTives Limited</div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Klavora (EliTech CreaTives Limited). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            <Link to="/hipaa" className="hover:text-slate-600 transition-colors">HIPAA Compliance</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
