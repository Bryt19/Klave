import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { inventoryMedicines } from "@/mocks/homeContent";
import Reveal from "./Reveal";

function StockBar({ stock, maxStock, status }: { stock: number; maxStock: number; status: string }) {
  const pct = maxStock > 0 ? (stock / maxStock) * 100 : 0;
  const colors: Record<string, string> = {
    normal: "bg-emerald-400",
    low: "bg-amber-400",
    out: "bg-red-400",
    expiring: "bg-red-300",
  };
  return (
    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${Math.min(pct, 100)}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`h-full rounded-full ${colors[status] || colors.normal}`}
      />
    </div>
  );
}

export default function InventoryShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0.1, 0.2], [40, 0]);

  return (
    <section ref={containerRef} id="features" className="relative mt-12 pt-20 sm:pt-28 lg:pt-36 pb-14 sm:pb-20 lg:pb-28 bg-slate-50/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-300/[0.04] blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity: headerOpacity, y: headerY }} className="max-w-3xl mb-8 sm:mb-10">
          <Reveal>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
              Track every medicine, <br className="hidden sm:block" />
              <span className="gradient-text-emerald">batch by batch.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
              Real-time stock levels, batch tracking, expiry monitoring, and reorder alerts, all in one clean interface.
            </p>
          </Reveal>
        </motion.div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/60 dashboard-shadow">
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <i className="ri-archive-line text-emerald-600 text-sm" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Inventory Overview</div>
                  <div className="text-[11px] text-slate-400">{inventoryMedicines.length} medicines tracked</div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 text-[11px] text-slate-500">
                  <i className="ri-search-line text-xs" />
                  <span>Search medicines...</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] text-emerald-700 font-medium">
                  <i className="ri-filter-3-line text-xs mr-1" />
                  Filter
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-50">
              <div className="hidden sm:grid grid-cols-12 gap-3 px-5 sm:px-6 py-2.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <div className="col-span-4">Medicine</div>
                <div className="col-span-2">Batch</div>
                <div className="col-span-3">Stock Level</div>
                <div className="col-span-2">Expiry</div>
                <div className="col-span-1">Status</div>
              </div>

              {inventoryMedicines.map((med, i) => (
                <motion.div
                  key={med.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 px-5 sm:px-6 py-3 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="sm:col-span-4 flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${
                      med.status === "out" ? "bg-red-400" :
                      med.status === "low" ? "bg-amber-400" :
                      med.status === "expiring" ? "bg-red-300" :
                      "bg-emerald-400"
                    }`} />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">{med.name}</div>
                      <div className="text-[10px] text-slate-400 sm:hidden">{med.category}</div>
                    </div>
                  </div>
                  <div className="sm:col-span-2 hidden sm:flex items-center">
                    <span className="text-[11px] font-mono text-slate-500">{med.batch}</span>
                  </div>
                  <div className="sm:col-span-3 flex flex-col justify-center gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-700">{med.stock} / {med.maxStock}</span>
                      <span className="text-[10px] text-slate-400">{Math.round((med.stock / med.maxStock) * 100)}%</span>
                    </div>
                    <StockBar stock={med.stock} maxStock={med.maxStock} status={med.status} />
                  </div>
                  <div className="sm:col-span-2 hidden sm:flex items-center">
                    <span className={`text-[11px] font-medium ${
                      med.status === "expiring" ? "text-red-600" : "text-slate-500"
                    }`}>{med.expiry}</span>
                  </div>
                  <div className="sm:col-span-1 flex items-center">
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      med.status === "out" ? "bg-red-50 text-red-600 border border-red-100" :
                      med.status === "low" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                      med.status === "expiring" ? "bg-red-50 text-red-500 border border-red-100" :
                      "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    }`}>
                      {med.status === "out" ? "Out" :
                       med.status === "low" ? "Low" :
                       med.status === "expiring" ? "Exp" : "OK"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: "ri-alarm-warning-line", title: "Expiry Alerts", desc: "Automatic warnings before medicines expire", bg: "bg-red-50", ic: "text-red-500" },
            { icon: "ri-alarm-warning-line", title: "Low Stock Alerts", desc: "Instant notifications when inventory hits minimum levels", bg: "bg-amber-50", ic: "text-amber-500" },
            { icon: "ri-bar-chart-grouped-line", title: "Stock Reports", desc: "Real-time analytics across all branches", bg: "bg-blue-50", ic: "text-blue-500" },
          ].map((item) => (
            <Reveal key={item.title} delay={0.3}>
              <div className="p-4 rounded-xl bg-white border border-slate-100 flex items-start gap-3 card-hover-glow hover:shadow-md transition-shadow duration-300">
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                  <i className={`${item.icon} ${item.ic} text-sm`} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{item.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Expanded Workflow Section */}
        <Reveal delay={0.4}>
          <div className="mt-8 sm:mt-10">
            {/* Section header */}
            <div className="text-center mb-10 mt-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">How Klavora Inventory <span className="text-emerald-600">Works</span></h3>
              <p className="text-sm text-slate-500 max-w-lg mx-auto">A four-step workflow that replaces spreadsheets, paper logs, and manual tracking with intelligent batch-level automation.</p>
            </div>

            {/* Detailed steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { step: "01", icon: "ri-upload-2-line", title: "Stock Intake", desc: "Import your entire drug catalogue via smart CSV or add medicines manually. Klavora auto-maps batch numbers, expiry dates, supplier codes, and reorder thresholds.", color: "bg-blue-50 text-blue-500 border-blue-100", accent: "border-blue-200/60" },
                { step: "02", icon: "ri-radar-line", title: "FEFO Batch Tracking", desc: "Every dispensation automatically decrements the batch expiring soonest. Real-time stock levels update across all branches within 18ms of any transaction.", color: "bg-emerald-50 text-emerald-500 border-emerald-100", accent: "border-emerald-200/60" },
                { step: "03", icon: "ri-alarm-warning-line", title: "Smart Alerts", desc: "Proactive notifications for low-stock thresholds, approaching expiry dates, and unusual consumption patterns, delivered via dashboard, email, or SMS.", color: "bg-amber-50 text-amber-500 border-amber-100", accent: "border-amber-200/60" },
                { step: "04", icon: "ri-line-chart-line", title: "Business Analytics", desc: "Real-time KPI dashboards with revenue tracking, turnover rates, and supplier performance insights to drive data-informed decisions across all branches.", color: "bg-violet-50 text-violet-500 border-violet-100", accent: "border-violet-200/60" },
              ].map((item) => (
                <div key={item.step} className={`group p-5 rounded-2xl bg-white border ${item.accent} card-hover-glow cursor-default`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${item.icon} text-sm`} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 group-hover:text-slate-500 transition-colors duration-300">STEP {item.step}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>




          </div>
        </Reveal>
      </div>
    </section>
  );
}
