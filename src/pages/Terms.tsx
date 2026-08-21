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

function Numbered({ number, bold, children }: { number: number; bold: string; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold flex items-center justify-center">
        {number}
      </span>
      <span>
        <span className="font-semibold text-slate-900">{bold}</span>{" "}
        {children}
      </span>
    </li>
  );
}

/* ── Sections data ─────────────────────────────────────────────── */

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "1. Acceptance of Terms",
    body: (
      <>
        <p>
          By accessing or using the Klavora platform ("Service") provided by
          EliTech CreaTives Limited ("Klavora," "we," "our," or "us"), you
          agree to be bound by these Terms of Service ("Terms"). If you are
          using the Service on behalf of a pharmacy or organization, you
          represent that you have the authority to bind that entity to these
          Terms.
        </p>
        <p className="mt-3">
          If you do not agree to these Terms, you may not access or use the
          Service. We reserve the right to modify these Terms at any time.
          Continued use of the Service after changes become effective
          constitutes acceptance.
        </p>
      </>
    ),
  },
  {
    title: "2. Description of Service",
    body: (
      <>
        <p>
          Klavora is a cloud-based pharmacy operations platform that provides:
        </p>
        <ul className="mt-4 space-y-3">
          <Plain>Prescription queue management and workflow orchestration</Plain>
          <Plain>Real-time inventory tracking with FEFO (First-Expiry, First-Out) compliance</Plain>
          <Plain>Clinical safety verification and drug interaction screening</Plain>
          <Plain>EHR/EMR interoperability via FHIR and REST APIs</Plain>
          <Plain>Audit logging and regulatory compliance reporting</Plain>
          <Plain>Multi-site dispensary management and analytics</Plain>
        </ul>
        <p className="mt-4">
          The Service is designed for licensed pharmacies, hospital health
          systems, and authorized healthcare organizations.
        </p>
      </>
    ),
  },
  {
    title: "3. Eligibility &amp; Account Registration",
    body: (
      <>
        <p>To use Klavora, you must:</p>
        <ul className="mt-4 space-y-3">
          <Plain>Be a licensed pharmacy, hospital health system, or authorized healthcare entity</Plain>
          <Plain>Have a valid NPI number and applicable state pharmacy licenses</Plain>
          <Plain>Be at least 18 years of age</Plain>
          <Plain>Complete the registration process with accurate, current information</Plain>
          <Plain>Maintain the confidentiality of your account credentials</Plain>
        </ul>
        <p className="mt-4">
          You are responsible for all activity that occurs under your account.
          Notify us immediately at{" "}
          <span className="font-semibold">security@klavora.com</span> if you
          suspect unauthorized access.
        </p>
      </>
    ),
  },
  {
    title: "4. Acceptable Use",
    body: (
      <>
        <p>
          You agree to use Klavora only for lawful purposes and in compliance
          with all applicable pharmacy regulations, HIPAA, and state/federal
          laws. You may not:
        </p>
        <ul className="mt-4 space-y-3">
          <Plain>Use the Service to process prescriptions without proper licensure</Plain>
          <Plain>Attempt to gain unauthorized access to other accounts or systems</Plain>
          <Plain>Reverse engineer, decompile, or attempt to extract the source code</Plain>
          <Plain>Upload or transmit malicious code, viruses, or harmful content</Plain>
          <Plain>Use the Service to store or transmit PHI outside of the platform's designed workflows</Plain>
          <Plain>Resell, sublicense, or provide the Service to third parties without authorization</Plain>
          <Plain>Interfere with or disrupt the integrity or performance of the Service</Plain>
          <Plain>Circumvent any usage limits, access controls, or security measures</Plain>
        </ul>
        <p className="mt-4">
          Violations may result in immediate suspension or termination of your
          account.
        </p>
      </>
    ),
  },
  {
    title: "5. Data Ownership &amp; PHI",
    body: (
      <>
        <p>
          You retain ownership of all data you enter or generate through the
          Service, including prescription records, inventory data, and
          operational logs. Klavora acts as a Business Associate and processes
          Protected Health Information (PHI) only as necessary to provide the
          contracted services.
        </p>
        <p className="mt-3">
          Your data rights and obligations are further governed by the Business
          Associate Agreement (BAA) executed between your organization and
          Klavora. In the event of any conflict between these Terms and the
          BAA, the BAA shall prevail with respect to PHI handling.
        </p>
        <p className="mt-3">
          Upon account termination, we will provide a data export within 30
          days and retain data in accordance with the BAA and applicable
          record-keeping requirements.
        </p>
      </>
    ),
  },
  {
    title: "6. Fees &amp; Payment",
    body: (
      <>
        <p>
          Klavora offers subscription-based pricing as described on our Pricing
          page or in your order form. By subscribing, you agree to:
        </p>
        <ul className="mt-4 space-y-3">
          <Plain>Pay all applicable fees for your selected plan</Plain>
          <Plain>Provide valid payment information</Plain>
          <Plain>Authorize recurring billing until cancellation</Plain>
        </ul>
        <p className="mt-4">
          All fees are non-refundable except as required by law. Pricing may
          change with 30 days' written notice. Overdue payments may result in
          service suspension after a 15-day grace period.
        </p>
      </>
    ),
  },
  {
    title: "7. Intellectual Property",
    body: (
      <>
        <p>
          The Service, including its software, design, logos, trademarks,
          documentation, and all related intellectual property, is owned by
          Klavora and protected by copyright, trademark, and other laws.
        </p>
        <p className="mt-3">
          You are granted a limited, non-exclusive, non-transferable license to
          use the Service for the duration of your subscription. This license
          does not include the right to copy, modify, distribute, sell, or
          lease any part of the Service or its components.
        </p>
      </>
    ),
  },
  {
    title: "8. Service Availability &amp; SLA",
    body: (
      <>
        <p>
          We target 99.9% uptime for the Service, measured monthly. Scheduled
          maintenance windows are communicated at least 48 hours in advance.
          Exclusions include:
        </p>
        <ul className="mt-4 space-y-3">
          <Plain>Force majeure events</Plain>
          <Plain>Internet or infrastructure failures outside our control</Plain>
          <Plain>Scheduled maintenance</Plain>
          <Plain>Issues caused by your equipment, network, or third-party integrations</Plain>
        </ul>
        <p className="mt-4">
          For details on service credits and SLA commitments, refer to your
          Enterprise agreement or contact{" "}
          <span className="font-semibold">sales@klavora.com</span>.
        </p>
      </>
    ),
  },
  {
    title: "9. Limitation of Liability",
    body: (
      <>
        <p className="uppercase tracking-wide text-xs font-bold text-slate-500 mb-3">
          To the maximum extent permitted by law:
        </p>
        <ul className="space-y-3">
          <Plain>Klavora shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.</Plain>
          <Plain>Klavora's total liability shall not exceed the fees paid by you in the 12 months preceding the claim.</Plain>
          <Plain>Klavora does not warrant that the Service will be error-free, uninterrupted, or completely secure.</Plain>
        </ul>
        <p className="mt-4">
          The Service is a tool to assist licensed pharmacists. It does not
          replace professional judgment. All clinical decisions remain the sole
          responsibility of the licensed pharmacist.
        </p>
      </>
    ),
  },
  {
    title: "10. Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless Klavora, its
          officers, directors, employees, and agents from any claims, damages,
          losses, or expenses (including reasonable attorneys' fees) arising
          from:
        </p>
        <ul className="mt-4 space-y-3">
          <Plain>Your use of the Service</Plain>
          <Plain>Your violation of these Terms</Plain>
          <Plain>Your violation of any applicable law or regulation</Plain>
          <Plain>Any PHI you process through the Service in violation of your BAA obligations</Plain>
          <Plain>Any claims brought by patients, regulatory bodies, or third parties related to your pharmacy operations</Plain>
        </ul>
      </>
    ),
  },
  {
    title: "11. Termination",
    body: (
      <>
        <p>
          Either party may terminate this agreement with 30 days' written
          notice. Klavora may immediately suspend or terminate your account if
          you:
        </p>
        <ul className="mt-4 space-y-3">
          <Plain>Breach any material term of these Terms</Plain>
          <Plain>Fail to pay fees within 15 days of the due date</Plain>
          <Plain>Become subject to bankruptcy, insolvency, or receivership</Plain>
          <Plain>Violate applicable pharmacy regulations or HIPAA</Plain>
        </ul>
        <p className="mt-4">
          Upon termination, your right to use the Service ceases. We will
          provide a data export for 30 days following termination.
        </p>
      </>
    ),
  },
  {
    title: "12. Governing Law &amp; Disputes",
    body: (
      <>
        <p>
          These Terms are governed by the laws of England and Wales, without
          regard to conflict of law principles. Any disputes arising from these
          Terms or the Service shall be resolved through:
        </p>
        <ol className="mt-4 space-y-3">
          <Numbered number={1} bold="Good-faith negotiation">Between the parties (30 days)</Numbered>
          <Numbered number={2} bold="Mediation">With a mutually agreed mediator (30 days)</Numbered>
          <Numbered number={3} bold="Binding arbitration">Under the rules of the London Court of International Arbitration (LCIA)</Numbered>
        </ol>
        <p className="mt-4">
          Either party may seek injunctive relief in any court of competent
          jurisdiction to protect intellectual property rights.
        </p>
      </>
    ),
  },
  {
    title: "13. General Provisions",
    body: (
      <ul className="space-y-3">
        <Bullet bold="Entire Agreement:">These Terms, together with the BAA and any applicable order forms, constitute the entire agreement between you and Klavora.</Bullet>
        <Bullet bold="Severability:">If any provision is found unenforceable, the remaining provisions continue in effect.</Bullet>
        <Bullet bold="Waiver:">Failure to enforce any right does not constitute a waiver of that right.</Bullet>
        <Bullet bold="Assignment:">You may not assign these Terms without Klavora's prior written consent. Klavora may assign in connection with a merger, acquisition, or sale of assets.</Bullet>
        <Bullet bold="Notices:">We will send notices to the email address associated with your account. You may send notices to legal@klavora.com.</Bullet>
      </ul>
    ),
  },
  {
    title: "14. Contact Us",
    body: (
      <p>
        For questions about these Terms, contact us at:
      </p>
    ),
  },
];

const contactInfo = [
  { label: "Email", value: "legal@klavora.com" },
  { label: "Mail", value: "EliTech CreaTives Limited, Legal Department" },
  { label: "Website", value: "klavora.com" },
];

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500">
              Effective Date: August 21, 2026 &nbsp;·&nbsp; Last Updated: August 21, 2026
            </p>
            <p className="text-sm text-slate-500 mt-2">
              These Terms of Service ("Terms") govern your access to and use of the Klavora platform and services provided by EliTech CreaTives Limited. Please read them carefully.
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
