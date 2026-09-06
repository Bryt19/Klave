import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Reveal";

const securityFeatures = [
  {
    icon: "ri-fingerprint-line",
    title: "Role-Based Access Control (RBAC)",
    description:
      "Cashiers only see the POS. Pharmacists access clinical data and dispensing records. Admins manage settings and user permissions. Every role sees exactly what it needs — nothing more.",
    color: "emerald",
  },
  {
    icon: "ri-file-shield-line",
    title: "Immutable Audit Logs",
    description:
      "Every dispensed pill, void, stock adjustment, and system change is permanently timestamped and tied to a user. Tamper-proof logs for complete accountability.",
    color: "blue",
  },
  {
    icon: "ri-lock-password-line",
    title: "Bank-Grade Encryption",
    description:
      "AES-256 encryption at rest protects all patient records and inventory data. TLS 1.3 secures every API call, WebSocket connection, and data sync in transit.",
    color: "violet",
  },
  {
    icon: "ri-government-line",
    title: "Ghana DPA Aligned",
    description:
      "Fully aligned with the Ghana Data Protection Act of 2012. Your pharmacy's data residency, consent management, and processing meet national regulatory standards.",
    color: "amber",
  },
  {
    icon: "ri-cloud-line",
    title: "Automated Cloud Backups",
    description:
      "Continuous encrypted backups with point-in-time recovery. Disaster-ready infrastructure ensures your pharmacy stays online even during catastrophic failures.",
    color: "rose",
  },
  {
    icon: "ri-shield-check-line",
    title: "Cybersecurity Act 2020 Compliant",
    description:
      "Compliant with Ghana's Cybersecurity Act, 2020 (Act 1038). Mandatory incident reporting, infrastructure protection, and periodic audits under the Cyber Security Authority.",
    color: "cyan",
  },
];

const colorMap: Record<
  string,
  {
    bg: string;
    border: string;
    icon: string;
    ring: string;
    glow: string;
  }
> = {
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    border: "border-emerald-100 dark:border-emerald-800/40",
    icon: "text-emerald-500",
    ring: "ring-emerald-500/10",
    glow: "hover:shadow-emerald-500/5",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/30",
    border: "border-blue-100 dark:border-blue-800/40",
    icon: "text-blue-500",
    ring: "ring-blue-500/10",
    glow: "hover:shadow-blue-500/5",
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-900/30",
    border: "border-violet-100 dark:border-violet-800/40",
    icon: "text-violet-500",
    ring: "ring-violet-500/10",
    glow: "hover:shadow-violet-500/5",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/30",
    border: "border-amber-100 dark:border-amber-800/40",
    icon: "text-amber-500",
    ring: "ring-amber-500/10",
    glow: "hover:shadow-amber-500/5",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-900/30",
    border: "border-rose-100 dark:border-rose-800/40",
    icon: "text-rose-500",
    ring: "ring-rose-500/10",
    glow: "hover:shadow-rose-500/5",
  },
  cyan: {
    bg: "bg-cyan-50 dark:bg-cyan-900/30",
    border: "border-cyan-100 dark:border-cyan-800/40",
    icon: "text-cyan-500",
    ring: "ring-cyan-500/10",
    glow: "hover:shadow-cyan-500/5",
  },
};

export default function SecuritySection() {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="security"
      className="relative py-14 sm:py-20 lg:py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <Reveal>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5">
              Your data is{" "}
              <span className="gradient-text-emerald">sacred.</span>
              <br />
              We treat it that way.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              Healthcare data demands the highest security standards. Klavora is
              built from the ground up with encryption, access control, and
              regulatory compliance at its core.
            </p>
          </Reveal>
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {securityFeatures.map((feature, i) => {
            const c = colorMap[feature.color] || colorMap.emerald;

            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border ${c.border} card-hover-glow transition-all duration-300 shadow-sm hover:shadow-md ${c.glow}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0 ring-1 ${c.ring}`}
                    >
                      <i className={`${feature.icon} ${c.icon} text-lg`} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {feature.title}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <Reveal delay={0.3}>
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-emerald-50/30 dark:from-slate-800 dark:to-emerald-950/30 border border-slate-100 dark:border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <i className="ri-shield-star-fill text-emerald-600 text-lg" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Enterprise-Grade Security
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
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
                    className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400"
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
