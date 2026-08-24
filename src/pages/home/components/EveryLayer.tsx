import { motion } from "framer-motion";
import { Timer, ShieldCheck, Layers, FileCheck, WifiOff, History, Store, Users } from "lucide-react";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ReactNode> = {
  Timer: <Timer className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  WifiOff: <WifiOff className="w-5 h-5" />,
  History: <History className="w-5 h-5" />,
  Store: <Store className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

const features = [
  {
    icon: "Timer",
    title: "Real-Time Queue Orchestration",
    description: "Intelligent triage prioritizes urgent drop-offs and synchronizes pickup notifications.",
    isGreen: true,
  },
  {
    icon: "ShieldCheck",
    title: "Smart Verification Engine",
    description: "Dosage limits, allergy cross-checks, and contraindication screening at lightning speed.",
    isGreen: false,
  },
  {
    icon: "Layers",
    title: "Inventory & Batch Tracking",
    description: "Track every drug by batch number, expiry date, reorder threshold, and bin location.",
    isGreen: true,
  },
  {
    icon: "FileCheck",
    title: "Automated Prior Auth",
    description: "Instant eligibility verification and digital approval routing with zero paperwork.",
    isGreen: false,
  },
  {
    icon: "WifiOff",
    title: "Offline-First Local Sync",
    description: "Operate with zero downtime during network interruptions. Automatic background reconciliation.",
    isGreen: true,
  },
  {
    icon: "History",
    title: "Immutable Audit Trail",
    description: "Cryptographically verifiable timestamped dispensing logs meeting strict regulatory standards.",
    isGreen: false,
  },
  {
    icon: "Store",
    title: "POS & Multi-Tender Checkout",
    description: "Rapid counter point-of-sale supporting cash, card, mobile money, and split insurance billing.",
    isGreen: true,
  },
  {
    icon: "Users",
    title: "Staff Roles & Telepharmacy",
    description: "Granular access control and remote supervising pharmacist sign-off workflows.",
    isGreen: false,
  },
];

export default function EveryLayer() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-slate-50/50 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Full Stack Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-4">
              Every layer of pharmacy <br />
              operations — in one platform.
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              From the counter to the stockroom to executive oversight, Klavora delivers purpose-built tools for modern health systems.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                className="subtle-card p-6 rounded-2xl h-full flex flex-col justify-between bg-white border border-slate-200/80"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    feature.isGreen
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600"
                  }`}>
                    {iconMap[feature.icon]}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold ${
                  feature.isGreen ? "text-emerald-600" : "text-blue-600"
                }`}>
                  <span>Learn more</span>
                  <span className="ml-0.5">→</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
