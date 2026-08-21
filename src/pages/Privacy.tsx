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

/* ── Sections data ─────────────────────────────────────────────── */

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "1. Information We Collect",
    body: (
      <>
        <p>
          Klavora ("we," "our," or "us") collects information to provide and
          improve our pharmacy operations platform. The types of information we
          collect include:
        </p>
        <ul className="mt-4 space-y-3">
          <Bullet bold="Account Information:">Name, email address, phone number, job title, pharmacy name, NPI number, and licensing credentials when you register for a Klavora account.</Bullet>
          <Bullet bold="Operational Data:">Prescription queue data, inventory records, dispensing logs, FEFO sequences, and workflow configurations that you and your staff enter or generate through normal use of the platform.</Bullet>
          <Bullet bold="Technical Data:">IP address, browser type, device identifiers, operating system, log files, and usage analytics collected automatically through cookies and similar technologies.</Bullet>
          <Bullet bold="Communication Data:">Information you provide when contacting our support team, participating in surveys, or communicating with other users through platform messaging features.</Bullet>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    body: (
      <>
        <p>We use collected information for the following purposes:</p>
        <ul className="mt-4 space-y-3">
          <Bullet bold="Service Delivery:">To operate, maintain, and improve the Klavora platform, including queue management, inventory tracking, clinical safety checks, and dispensing workflows.</Bullet>
          <Bullet bold="Security &amp; Compliance:">To enforce HIPAA safeguards, detect unauthorized access, maintain audit logs, and comply with applicable pharmacy regulations.</Bullet>
          <Bullet bold="Communication:">To send service updates, security alerts, billing notifications, and respond to your support requests.</Bullet>
          <Bullet bold="Analytics:">To understand usage patterns, optimize performance, and develop new features. Analytics data is aggregated and de-identified.</Bullet>
          <Bullet bold="Legal Obligations:">To comply with applicable laws, regulations, and legal processes.</Bullet>
        </ul>
      </>
    ),
  },
  {
    title: "3. Protected Health Information (PHI)",
    body: (
      <>
        <p>
          As a Business Associate under HIPAA, Klavora may process Protected
          Health Information (PHI) on behalf of covered entities (pharmacies).
          Our use and disclosure of PHI is governed by our Business Associate
          Agreement (BAA) and the HIPAA Privacy Rule.
        </p>
        <p className="mt-3">
          We do not sell, rent, or trade PHI. PHI is only accessed as necessary
          to provide the contracted services, to comply with legal obligations,
          or as otherwise permitted under the BAA. All PHI is encrypted at rest
          (AES-256) and in transit (TLS 1.2+).
        </p>
      </>
    ),
  },
  {
    title: "4. Information Sharing &amp; Third Parties",
    body: (
      <>
        <p>
          We do not sell your personal information. We may share information
          with the following categories of third parties only as necessary:
        </p>
        <ul className="mt-4 space-y-3">
          <Bullet bold="Service Providers:">Cloud infrastructure providers (AWS), monitoring services, and analytics tools that process data on our behalf under strict contractual obligations.</Bullet>
          <Bullet bold="EHR/EMR Integrations:">When you connect Klavora to your electronic health record system, data is exchanged solely to fulfill the integration you have authorized.</Bullet>
          <Bullet bold="Legal &amp; Regulatory:">When required by law, subpoena, court order, or to protect the rights and safety of Klavora, our users, or the public.</Bullet>
        </ul>
        <p className="mt-4">
          All third-party processors are contractually bound to maintain the
          same level of data protection as Klavora.
        </p>
      </>
    ),
  },
  {
    title: "5. Data Security",
    body: (
      <>
        <p>
          We implement industry-standard security measures to protect your data:
        </p>
        <ul className="mt-4 space-y-3">
          <Plain>AES-256 encryption for data at rest</Plain>
          <Plain>TLS 1.2+ encryption for data in transit</Plain>
          <Plain>SOC 2 Type II compliant infrastructure (AWS)</Plain>
          <Plain>Role-based access controls (RBAC) with principle of least privilege</Plain>
          <Plain>Multi-factor authentication (MFA) enforcement</Plain>
          <Plain>Continuous vulnerability scanning and penetration testing</Plain>
          <Plain>24/7 security monitoring and incident response</Plain>
        </ul>
        <p className="mt-4">
          While we strive to protect your information, no method of transmission
          over the Internet or electronic storage is 100% secure. We cannot
          guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Retention",
    body: (
      <>
        <p>
          We retain your data for as long as your account is active or as needed
          to provide services. Specific retention periods:
        </p>
        <ul className="mt-4 space-y-3">
          <Bullet bold="Account Data:">Retained for the duration of your subscription plus 90 days after cancellation.</Bullet>
          <Bullet bold="Operational &amp; PHI Data:">Retained in accordance with your BAA and applicable state pharmacy record-keeping requirements (typically 2–7 years depending on jurisdiction).</Bullet>
          <Bullet bold="Analytics Data:">Aggregated and de-identified data may be retained indefinitely.</Bullet>
          <Bullet bold="Security Logs:">Retained for 12 months for compliance and incident investigation.</Bullet>
        </ul>
      </>
    ),
  },
  {
    title: "7. Your Rights",
    body: (
      <>
        <p>
          Depending on your jurisdiction, you may have the following rights:
        </p>
        <ul className="mt-4 space-y-3">
          <Bullet bold="Access:">Request a copy of the personal information we hold about you.</Bullet>
          <Bullet bold="Correction:">Request correction of inaccurate or incomplete data.</Bullet>
          <Bullet bold="Deletion:">Request deletion of your personal data, subject to legal and contractual retention obligations.</Bullet>
          <Bullet bold="Portability:">Request your data in a structured, machine-readable format.</Bullet>
          <Bullet bold="Objection:">Object to processing of your data for certain purposes.</Bullet>
          <Bullet bold="Restriction:">Request restriction of processing under certain conditions.</Bullet>
        </ul>
        <p className="mt-4">
          To exercise these rights, contact us at{" "}
          <span className="font-semibold">privacy@klavora.com</span>. We will
          respond within 30 days.
        </p>
      </>
    ),
  },
  {
    title: "8. Cookies &amp; Tracking",
    body: (
      <>
        <p>
          Klavora uses cookies and similar technologies for:
        </p>
        <ul className="mt-4 space-y-3">
          <Bullet bold="Essential Cookies:">Required for authentication, session management, and security. These cannot be disabled.</Bullet>
          <Bullet bold="Analytics Cookies:">Help us understand how the platform is used. You can opt out through your browser settings.</Bullet>
          <Bullet bold="Preference Cookies:">Remember your settings and preferences.</Bullet>
        </ul>
        <p className="mt-4">
          We do not use advertising cookies or share cookie data with
          third-party advertisers. You can manage cookie preferences in your
          browser settings.
        </p>
      </>
    ),
  },
  {
    title: "9. Children's Privacy",
    body: (
      <p>
        Klavora is not intended for use by individuals under the age of 18. We
        do not knowingly collect personal information from children. If we
        become aware that we have collected information from a child, we will
        take steps to delete it promptly.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of material changes by posting the updated policy on our website and,
        where appropriate, by email. Your continued use of Klavora after changes
        become effective constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    title: "11. Contact Us",
    body: (
      <p>
        If you have questions about this Privacy Policy or our data practices,
        please contact us:
      </p>
    ),
    // contact info rendered separately
  },
];

const contactInfo = [
  { label: "Email", value: "privacy@klavora.com" },
  { label: "Mail", value: "EliTech CreaTives Limited, Privacy Team" },
  { label: "Response Time", value: "Within 30 days of receiving your request" },
];

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500">
              Effective Date: August 21, 2026 &nbsp;·&nbsp; Last Updated: August 21, 2026
            </p>
            <p className="text-sm text-slate-500 mt-2">
              This Privacy Policy describes how EliTech CreaTives Limited ("Klavora," "we," "our," or "us") collects, uses, and protects your information when you use our pharmacy operations platform and related services.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
              >
                <h2 className="text-lg font-bold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {section.body}
                </div>

                {/* Contact card for the last section */}
                {i === sections.length - 1 && (
                  <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-700">
                      {contactInfo.map((item) => (
                        <div key={item.label}>
                          <div className="text-xs font-semibold text-slate-500 mb-1">{item.label}</div>
                          <div className="font-semibold">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.section>
            ))}
          </div>
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
