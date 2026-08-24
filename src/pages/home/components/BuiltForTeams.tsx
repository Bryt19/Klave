import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, PackageSearch, CreditCard, Stethoscope, Settings, CheckCircle, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const roles = [
  {
    icon: Pill,
    role: "Pharmacists",
    title: "For Pharmacists",
    description: "High-confidence clinical decision support flags dangerous drug-drug interactions and allergies before pills leave the bottle.",
    kpi: "Zero Omission Errors",
    features: [
      "Real-time drug interaction alerts",
      "Allergy cross-referencing engine",
      "Digital signature & clinical sign-off",
      "Patient adherence tracking",
    ],
    color: "emerald" as const,
  },
  {
    icon: PackageSearch,
    role: "Inventory Managers",
    title: "For Inventory Managers",
    description: "Complete visibility into multi-branch stock levels, revenue velocity, staff productivity, and expiry risk prevention.",
    kpi: "74% Less Stock Waste",
    features: [
      "FEFO batch auto-routing",
      "Multi-branch stock visibility",
      "Expiry risk prevention alerts",
      "Automated reorder triggers",
    ],
    color: "blue" as const,
  },
  {
    icon: CreditCard,
    role: "Cashiers",
    title: "For Cashiers",
    description: "Eliminate bottleneck counter queues with rapid barcode scanning, automated label generation, and batch-matched dispensing.",
    kpi: "88% Faster Dispense",
    features: [
      "Rapid barcode scanning",
      "Multi-tender POS checkout",
      "Instant receipt generation",
      "Split insurance billing",
    ],
    color: "amber" as const,
  },
  {
    icon: Stethoscope,
    role: "Physician Assistants",
    title: "For Physician Assistants",
    description: "Instant clinical alerts, therapeutic alternatives, and one-click justification templates streamline verification.",
    kpi: "62% Less Alert Fatigue",
    features: [
      "Tiered alert severity system",
      "Therapeutic alternatives",
      "One-click justification notes",
      "Patient profile overview",
    ],
    color: "violet" as const,
  },
  {
    icon: Settings,
    role: "Administrators",
    title: "For Administrators",
    description: "Open REST APIs, FHIR/HL7 interoperability, end-to-end encryption, and offline-first database replication.",
    kpi: "99.99% Uptime",
    features: [
      "FHIR R4 / HL7 REST APIs",
      "Role-based access control",
      "Immutable audit trails",
      "Offline-first sync",
    ],
    color: "slate" as const,
  },
];

const colorMap = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", ring: "ring-emerald-200" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", ring: "ring-blue-200" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", ring: "ring-amber-200" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", ring: "ring-violet-200" },
  slate: { bg: "bg-slate-100", text: "text-slate-600", ring: "ring-slate-200" },
};

export default function BuiltForTeams() {
  const [activeRole, setActiveRole] = useState(0);
  const current = roles[activeRole];
  const colors = colorMap[current.color];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-white transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-24 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Role-Based Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-4">
              Built for the way pharmacy <br />
              teams actually work.
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Every role gets a purpose-built experience — from the pharmacist's clinical console to the cashier's rapid checkout.
            </p>
          </Reveal>
        </div>

        {/* Interactive Role Tabs */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Role Tabs */}
            <div className="lg:col-span-5 space-y-2">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                const isActive = activeRole === idx;
                const roleColors = colorMap[role.color];
                return (
                  <motion.button
                    key={role.role}
                    onClick={() => setActiveRole(idx)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-50 border border-emerald-200/80 shadow-sm"
                        : "bg-transparent border border-transparent hover:bg-slate-50 hover:border-slate-200/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isActive ? `${roleColors.bg} ${roleColors.text}` : "bg-slate-100 text-slate-500"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-bold transition-colors duration-300 ${
                          isActive ? "text-emerald-900" : "text-slate-600"
                        }`}>
                          {role.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{role.description}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? "bg-emerald-500 text-white scale-100" : "bg-slate-200/60 text-slate-400 scale-90"
                      }`}>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right: Active Role Detail */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center ring-1 ${colors.ring}`}>
                      <current.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{current.title}</h3>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                        {current.kpi}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {current.description}
                  </p>

                  <div className="space-y-3">
                    {current.features.map((feat, i) => (
                      <motion.div
                        key={feat}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-emerald-50/30 hover:border-emerald-100 transition-all duration-200"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
