import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Reveal";

const complianceBadges = [
  {
    icon: "ri-shield-check-fill",
    title: "HIPAA Compliant",
    desc: "Full administrative, physical, and technical safeguards for Protected Health Information (PHI).",
    color: "emerald",
  },
  {
    icon: "ri-lock-2-fill",
    title: "SOC 2 Type II",
    desc: "Audited controls for security, availability, and confidentiality of customer data.",
    color: "blue",
  },
  {
    icon: "ri-shield-keyhole-fill",
    title: "GDPR Ready",
    desc: "Data processing agreements, right to erasure, and privacy-by-design architecture.",
    color: "violet",
  },
  {
    icon: "ri-verified-badge-fill",
    title: "ISO 27001",
    desc: "International standard for information security management systems (ISMS).",
    color: "amber",
  },
];

const securityFeatures = [
  {
    icon: "ri-lock-password-line",
    title: "AES-256 Encryption at Rest",
    description:
      "All patient records, prescription data, and inventory logs are encrypted with military-grade AES-256 bit encryption on disk.",
  },
  {
    icon: "ri-key-2-line",
    title: "TLS 1.3 In Transit",
    description:
      "Every API call, WebSocket connection, and data sync uses TLS 1.3, the fastest and most secure transport protocol available.",
  },
  {
    icon: "ri-fingerprint-line",
    title: "Role-Based Access Control",
    description:
      "Granular permissions ensure pharmacists, cashiers, and admins only see what they're authorized to access.",
  },
  {
    icon: "ri-file-shield-line",
    title: "Immutable Audit Trail",
    description:
      "Cryptographically signed, timestamped logs of every dispensing action, prescription review, and system change.",
  },
  {
    icon: "ri-cloud-line",
    title: "Encrypted Backups",
    description:
      "Automated encrypted backups with point-in-time recovery. Your data is safe even in catastrophic failure scenarios.",
  },
  {
    icon: "ri-device-line",
    title: "Session Management",
    description:
      "Automatic session timeout, device tracking, and remote logout capabilities for lost or stolen devices.",
  },
];

export default function SecuritySection() {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="security"
      className="relative py-14 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <Reveal>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
              Your patients' data is{" "}
              <span className="gradient-text-emerald">sacred.</span>
              <br />
              We treat it that way.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
              Healthcare data demands the highest security standards. Klavora is
              built from the ground up with encryption, compliance, and clinical
              privacy at its core.
            </p>
          </Reveal>
        </div>

        {/* Compliance badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {complianceBadges.map((badge, i) => {
            const colorMap: Record<
              string,
              {
                bg: string;
                border: string;
                icon: string;
                ring: string;
              }
            > = {
              emerald: {
                bg: "bg-emerald-50",
                border: "border-emerald-100",
                icon: "text-emerald-500",
                ring: "ring-emerald-500/10",
              },
              blue: {
                bg: "bg-blue-50",
                border: "border-blue-100",
                icon: "text-blue-500",
                ring: "ring-blue-500/10",
              },
              violet: {
                bg: "bg-violet-50",
                border: "border-violet-100",
                icon: "text-violet-500",
                ring: "ring-violet-500/10",
              },
              amber: {
                bg: "bg-amber-50",
                border: "border-amber-100",
                icon: "text-amber-500",
                ring: "ring-amber-500/10",
              },
            };
            const c = colorMap[badge.color] || colorMap.emerald;

            return (
              <Reveal key={badge.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`p-5 sm:p-6 rounded-2xl bg-white border ${c.border} card-hover-glow transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 ring-1 ${c.ring}`}
                  >
                    <i className={`${badge.icon} ${c.icon} text-xl`} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1.5">
                    {badge.title}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {badge.desc}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {securityFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors card-hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center shrink-0">
                    <i className={`${feature.icon} text-slate-600 text-lg`} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-1">
                      {feature.title}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom trust strip */}
        <Reveal delay={0.3}>
          <div className="mt-10 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-emerald-50/30 border border-slate-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <i className="ri-shield-star-fill text-emerald-600 text-lg" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Enterprise-Grade Security
                  </div>
                  <div className="text-xs text-slate-500">
                    We undergo annual third-party security audits and penetration
                    testing.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {[
                  {
                    icon: "ri-lock-2-fill",
                    label: "256-bit AES",
                  },
                  {
                    icon: "ri-key-2-fill",
                    label: "TLS 1.3",
                  },
                  {
                    icon: "ri-cloud-fill",
                    label: "99.99% Uptime",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500"
                  >
                    <i className={`${item.icon} text-emerald-500`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
