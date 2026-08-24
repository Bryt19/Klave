import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { expiryItems } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function ExpiryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Text */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Expiry Management</span>
              </div>

              <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
                Never let a medicine{" "}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">expire unnoticed.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-md mb-6">
                Klavora continuously monitors batch expiry dates and surfaces alerts before medicines become unsellable — preventing waste and protecting patients.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                {[
                  { icon: "ri-alarm-warning-fill", text: "Automatic expiry detection", color: "text-amber-500" },
                  { icon: "ri-notification-3-fill", text: "Configurable alert thresholds", color: "text-emerald-500" },
                  { icon: "ri-arrow-left-right-fill", text: "FEFO batch auto-routing", color: "text-blue-500" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <i className={`${item.icon} ${item.color}`} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Impact stats */}
              <div className="grid grid-cols-3 gap-3 pt-5 mt-5 border-t border-slate-100">
                {[
                  { value: "0", label: "Expired stock" },
                  { value: "100%", label: "Batch traced" },
                  { value: "24/7", label: "Monitoring" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-amber-50/50 border border-amber-100/60">
                    <div className="text-base font-bold text-amber-600">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Timeline */}
          <div ref={ref} className="lg:col-span-7 space-y-0">
            {/* Timeline track */}
            <div className="relative pl-8 sm:pl-10">
              {/* Vertical line */}
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-slate-200">
                <motion.div
                  initial={{ height: 0 }}
                  animate={inView ? { height: "100%" } : {}}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-300 via-amber-300 to-emerald-300"
                />
              </div>

              {expiryItems.map((item, i) => {
                const severityColors: Record<string, { dot: string; bg: string; border: string; text: string }> = {
                  critical: { dot: "bg-red-500", bg: "bg-red-50/80", border: "border-red-100", text: "text-red-600" },
                  warning: { dot: "bg-amber-400", bg: "bg-amber-50/80", border: "border-amber-100", text: "text-amber-600" },
                  normal: { dot: "bg-emerald-400", bg: "bg-emerald-50/80", border: "border-emerald-100", text: "text-emerald-600" },
                };
                const c = severityColors[item.severity] || severityColors.normal;

                return (
                  <motion.div
                    key={item.medicine}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pb-8 last:pb-0"
                  >
                    {/* Dot */}
                    <div className={`absolute -left-5 sm:-left-6 top-3 w-3 h-3 rounded-full ${c.dot} ring-4 ring-white z-10`} />

                    {/* Card */}
                    <div className={`p-4 sm:p-5 rounded-2xl ${c.bg} border ${c.border}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-bold text-slate-900">{item.medicine}</div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.severity === "critical" ? "bg-red-100 text-red-700" :
                          item.severity === "warning" ? "bg-amber-100 text-amber-700" :
                          "bg-emerald-100 text-emerald-700"
                        }`}>
                          {item.daysLeft} days
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-mono">{item.batch}</span>
                        <span className={`font-medium ${c.text}`}>
                          {item.severity === "critical" ? "Action Required" :
                           item.severity === "warning" ? "Monitor Closely" :
                           "No Action Needed"}
                        </span>
                      </div>

                      {/* Progress bar toward expiry */}
                      <div className="mt-3 h-1 rounded-full bg-white/60 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.max(5, 100 - (item.daysLeft / 365) * 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                          className={`h-full rounded-full ${
                            item.severity === "critical" ? "bg-red-400" :
                            item.severity === "warning" ? "bg-amber-400" :
                            "bg-emerald-300"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
