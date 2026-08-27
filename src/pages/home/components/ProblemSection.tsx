import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { painPoints } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <Reveal>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
              Pharmacy operations{" "}
              <span className="text-slate-400">shouldn't feel</span>{" "}
              <span className="gradient-text-emerald">fragmented.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
              Most pharmacies still run on disconnected systems: paper logs, spreadsheet inventory, and manual dispensing workflows that create blind spots at every step.
            </p>
          </Reveal>
        </div>

        {/* Chaos cards → transforming into organized layout */}
        <div className="relative">
          {/* Scattered chaos cards (left side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {painPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200/60 transition-all duration-300 card-hover-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                      <i className={`${point.icon} text-red-500 text-lg`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                        {point.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Transformation line */}
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center justify-center py-10 sm:py-14 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-red-200" />
                <div className="relative">
                  <motion.div
                    animate={inView ? { rotate: 360 } : {}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center"
                  >
                    <i className="ri-arrow-down-line text-emerald-600 text-lg" />
                  </motion.div>
                  {/* Pulse rings */}
                  {inView && (
                    <>
                      <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border border-emerald-300"
                      />
                      <motion.div
                        initial={{ scale: 1, opacity: 0.3 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        className="absolute inset-0 rounded-full border border-emerald-200"
                      />
                    </>
                  )}
                </div>
                <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-emerald-200" />
              </div>
              <div className="flex items-center gap-6 text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-300" /> Disconnected</span>
                <i className="ri-arrow-right-line text-slate-300" />
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Unified</span>
              </div>
            </div>
          </Reveal>

          {/* Organized result */}
          <Reveal delay={0.5}>
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 card-hover-glow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    One platform. Complete clarity.
                  </h3>
                  <p className="text-sm text-slate-600">
                    Klavora unifies inventory, dispensing, sales, and analytics into a single source of truth for your pharmacy.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Inventory", value: "Real-time", icon: "ri-archive-line" },
                  { label: "Dispensing", value: "FEFO-automated", icon: "ri-capsule-line" },
                  { label: "Sales", value: "Live tracking", icon: "ri-line-chart-line" },
                  { label: "Analytics", value: "Instant reports", icon: "ri-bar-chart-2-line" },
                  { label: "Prescriptions", value: "OCR-powered", icon: "ri-file-list-3-line" },
                  { label: "Suppliers", value: "Auto-reorder", icon: "ri-truck-line" },
                  { label: "Staff", value: "Role-based", icon: "ri-team-line" },
                  { label: "Patients", value: "Full history", icon: "ri-user-heart-line" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-xl bg-white border border-emerald-100 text-center">
                    <i className={`${item.icon} text-emerald-500 text-lg mb-2 block`} />
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{item.label}</div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Impact stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 mt-6 border-t border-emerald-100">
                {[
                  { value: "88%", label: "Faster dispensing" },
                  { value: "74%", label: "Less stock waste" },
                  { value: "18ms", label: "Sync latency" },
                  { value: "99.9%", label: "Accuracy rate" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
