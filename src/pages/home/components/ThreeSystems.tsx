import { motion } from "framer-motion";
import { Package, Clock, ShoppingCart, FileText, BarChart3, Truck } from "lucide-react";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ReactNode> = {
  Package: <Package className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
};

const features = [
  {
    icon: "Package",
    title: "Inventory Management",
    description: "Track every drug by batch number, expiry date, reorder threshold, and bin location across all branches.",
    tag: "Real-Time",
    color: "emerald" as const,
  },
  {
    icon: "Clock",
    title: "Expiry Tracking",
    description: "FEFO logic ensures oldest batches dispense first. Get alerts weeks before any stock expires.",
    tag: "Automated",
    color: "amber" as const,
  },
  {
    icon: "ShoppingCart",
    title: "Sales Management",
    description: "Rapid counter POS supporting cash, card, mobile money, and split insurance billing with instant receipts.",
    tag: "Multi-Tender",
    color: "blue" as const,
  },
  {
    icon: "FileText",
    title: "Prescription Support",
    description: "OCR script parsing, digital patient profiles, and clinical verification console with audit-ready logs.",
    tag: "99.4% Accurate",
    color: "emerald" as const,
  },
  {
    icon: "BarChart3",
    title: "Reports & Analytics",
    description: "Real-time KPI dashboards, revenue velocity, staff productivity, and expiry risk prevention across branches.",
    tag: "Live Data",
    color: "violet" as const,
  },
  {
    icon: "Truck",
    title: "Supplier Management",
    description: "Manage supplier catalogs, automate reorder triggers, and track purchase orders from placement to delivery.",
    tag: "Streamlined",
    color: "blue" as const,
  },
];

const colorMap = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    hover: "group-hover:bg-emerald-100 group-hover:text-emerald-700",
    tag: "bg-emerald-50 text-emerald-700 border-emerald-200",
    border: "group-hover:border-emerald-200",
    shadow: "group-hover:shadow-emerald-100/50",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    hover: "group-hover:bg-blue-100 group-hover:text-blue-700",
    tag: "bg-blue-50 text-blue-700 border-blue-200",
    border: "group-hover:border-blue-200",
    shadow: "group-hover:shadow-blue-100/50",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    hover: "group-hover:bg-amber-100 group-hover:text-amber-700",
    tag: "bg-amber-50 text-amber-700 border-amber-200",
    border: "group-hover:border-amber-200",
    shadow: "group-hover:shadow-amber-100/50",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    hover: "group-hover:bg-violet-100 group-hover:text-violet-700",
    tag: "bg-violet-50 text-violet-700 border-violet-200",
    border: "group-hover:border-violet-200",
    shadow: "group-hover:shadow-violet-100/50",
  },
};

export default function ThreeSystems() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-white transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Platform Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.12] mb-5 sm:mb-6">
              Everything your pharmacy <br className="hidden sm:block" />
              needs — <span className="text-emerald-600">in one platform.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              From prescription intake to final dispensing, every step connects seamlessly. No double entry, no manual handoffs, and no gaps in clinical safety.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, i) => {
            const colors = colorMap[feature.color];
            return (
              <Reveal key={feature.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                  className={`group relative p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl ${colors.shadow} ${colors.border} transition-all duration-300 h-full flex flex-col overflow-hidden`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-blue-50/0 group-hover:from-emerald-50/30 group-hover:to-blue-50/20 transition-all duration-500 rounded-2xl pointer-events-none" />

                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${colors.bg} ${colors.text} ${colors.hover}`}>
                      {iconMap[feature.icon]}
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${colors.tag}`}>
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="relative text-base font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="relative text-[13px] text-slate-500 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  <div className={`relative mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold ${colors.text} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0`}>
                    <span>Learn more</span>
                    <span className="ml-0.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
