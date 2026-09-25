import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { analyticsData } from "@/mocks/homeContent";
import Reveal from "./Reveal";

/* ── Animated stat counter ─────────────────────────────────── */
function StatCounter({ value, suffix, label, change, delay }: {
  value: number; suffix: string; label: string; change: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 40, damping: 20 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => { if (inView) motionVal.set(value); }, [inView, motionVal, value]);
  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
    return () => unsub();
  }, [spring, suffix]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }} className="p-4 rounded-xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm">
      <div className="text-[9px] text-slate-400 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-xl sm:text-2xl font-bold text-white"><span ref={displayRef}>0{suffix}</span></div>
      <div className="text-[10px] font-medium text-emerald-400 mt-0.5">{change}</div>
    </motion.div>
  );
}

/* ── SVG Line + Bar Chart ──────────────────────────────────── */
function SalesChart({ data }: { data: typeof analyticsData.dailySales }) {
  const maxVal = Math.max(...data.map((d) => d.value));
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const chartWidth = 600;
  const chartHeight = 240;
  const padX = 28;
  const padY = 32;
  const innerW = chartWidth - padX * 2;
  const innerH = chartHeight - padY * 2;

  const points = data.map((d, i) => ({
    x: padX + (i / (data.length - 1)) * innerW,
    y: padY + innerH - (d.value / maxVal) * innerH,
  }));
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padY + innerH} L ${points[0].x} ${padY + innerH} Z`;

  return (
    <div ref={ref} className="h-full flex flex-col p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs font-bold text-white">Daily Sales</div>
          <div className="text-[10px] text-slate-500">Last 7 days</div>
        </div>
        <div className="text-xs font-bold text-emerald-400">+18% avg</div>
      </div>

      <div className="flex-1 relative w-full min-h-[220px]" style={{ aspectRatio: `${chartWidth}/${chartHeight}` }}>
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" onMouseLeave={() => setHoveredIdx(null)}>
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
            <line key={pct} x1={padX} y1={padY + innerH * (1 - pct)} x2={chartWidth - padX} y2={padY + innerH * (1 - pct)} stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="1" />
          ))}

          {/* Area fill */}
          <motion.path d={areaPath} fill="url(#areaGrad)" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.5 }} />

          {/* Line */}
          <motion.path d={linePath} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Data points with glow on hover */}
          {points.map((p, i) => (
            <g key={`pt-${i}`} onMouseEnter={() => setHoveredIdx(i)} style={{ cursor: "pointer" }}>
              <motion.circle cx={p.x} cy={p.y} r={14}
                fill="#10b981"
                filter="url(#dotGlow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIdx === i ? 0.5 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
              <motion.circle cx={p.x} cy={p.y}
                r={hoveredIdx === i ? 6 : 0}
                fill="none"
                stroke="#10b981"
                strokeWidth={1.5}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: hoveredIdx === i ? 0.3 : 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.circle cx={p.x} cy={p.y}
                r={hoveredIdx === i ? 5 : 3}
                fill={hoveredIdx === i ? "#10b981" : "#ffffff"}
                stroke="#10b981"
                strokeWidth={hoveredIdx === i ? 2 : 1.5}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="40%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
              </feMerge>
            </filter>
          </defs>

          {/* X labels */}
          {data.map((d, i) => (
            <text key={`lbl-${i}`} x={padX + (i / (data.length - 1)) * innerW} y={chartHeight - 2} textAnchor="middle" fill="currentColor" className="text-slate-500" fontSize="10" fontFamily="Inter, sans-serif">{d.day}</text>
          ))}
        </svg>

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoveredIdx !== null && (() => {
            const dot = points[hoveredIdx];
            const leftPct = (dot.x / chartWidth) * 100;
            const topPct = (dot.y / chartHeight) * 100;
            const isFirst = hoveredIdx === 0;
            const isLast = hoveredIdx === points.length - 1;
            return (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute px-3 py-1.5 rounded-lg bg-slate-800/90 border border-white/10 text-[11px] text-white font-medium pointer-events-none z-10 whitespace-nowrap backdrop-blur-sm"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: `translate(${isFirst ? '0%' : isLast ? '-100%' : '-50%'}, calc(-100% - 10px))`,
                }}
              >
                {data[hoveredIdx].day}: GH&#x20B5;{data[hoveredIdx].value.toLocaleString()}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-slate-800/90"
                  style={{ bottom: '-5px' }}
                />
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Best Selling Drugs bar chart ──────── */
function BestSellingDrugs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const drugs = [
    { name: "Amoxicillin 500mg", units: 2847, color: "#059669" },
    { name: "Paracetamol 500mg", units: 2341, color: "#10b981" },
    { name: "Metformin 850mg", units: 1892, color: "#34d399" },
    { name: "Amlodipine 5mg", units: 1543, color: "#6ee7b7" },
    { name: "Cetirizine 10mg", units: 1128, color: "#a7f3d0" },
  ];
  const maxUnits = Math.max(...drugs.map((d) => d.units));

  return (
    <div ref={ref} className="p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm">
      <div className="mb-4">
        <div className="text-xs font-bold text-white">Best Selling Drugs</div>
        <div className="text-[10px] text-slate-500">Units sold this month</div>
      </div>
      <div className="space-y-3">
        {drugs.map((drug, i) => (
          <div key={drug.name} className="group cursor-default" onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[11px] transition-colors ${hoveredIdx === i ? "text-white" : "text-slate-300"}`}>{drug.name}</span>
              <span className={`text-[11px] font-semibold transition-colors ${hoveredIdx === i ? "text-emerald-400" : "text-slate-500"}`}>{drug.units.toLocaleString()}</span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.08] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${(drug.units / maxUnits) * 100}%` } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full transition-transform duration-200"
                style={{ backgroundColor: drug.color, transform: hoveredIdx === i ? "scaleY(1.3)" : "scaleY(1)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main ──────────────────────────────────────────────────── */
export default function AnalyticsShowcase() {
  return (
    <section id="analytics" className="relative bg-slate-950 overflow-hidden">


      {/* Emerald ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-emerald-500/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-600/[0.05] blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative z-20 py-24 sm:py-32 lg:py-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-center mx-auto">
          <Reveal>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5">
              Numbers that actually{" "}
              <span className="text-emerald-400">mean something.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
              Revenue tracking, sales patterns, and inventory analytics, presented in plain language for pharmacists, not accountants.
            </p>
          </Reveal>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Revenue */}
          <Reveal className="lg:col-span-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/[0.12] h-full flex flex-col backdrop-blur-sm">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-3">Monthly Revenue</div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">GH&#x20B5;{(analyticsData.revenue.current / 1000).toFixed(1)}k</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-emerald-400">+{Math.round(((analyticsData.revenue.current - analyticsData.revenue.previous) / analyticsData.revenue.previous) * 100)}%</span>
                <span className="text-[11px] text-slate-500">vs last month</span>
              </div>
              <div className="flex items-end gap-1 h-10 mb-4">
                {[35, 42, 38, 55, 48, 62, 58, 72, 68, 80, 75, 85].map((h, i) => (
                  <div key={i} className="flex-1 flex items-end"><div className="w-full rounded-sm bg-emerald-500/25" style={{ height: `${h}%` }} /></div>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-white/[0.06]">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div><div className="text-[10px] text-slate-500">Last Month</div><div className="text-sm font-bold text-slate-300">GH&#x20B5;{(analyticsData.revenue.previous / 1000).toFixed(1)}k</div></div>
                  <div><div className="text-[10px] text-slate-500">Growth</div><div className="text-sm font-bold text-emerald-400">+GH&#x20B5;{((analyticsData.revenue.current - analyticsData.revenue.previous) / 1000).toFixed(1)}k</div></div>
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: "Prescriptions", pct: 64, color: "bg-emerald-500" },
                    { label: "OTC Sales", pct: 24, color: "bg-emerald-400" },
                    { label: "Services", pct: 12, color: "bg-emerald-300" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className="text-[9px] text-slate-500 w-16 shrink-0">{item.label}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                        <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                      <span className="text-[9px] text-slate-500 font-medium w-6 text-right">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Chart */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <SalesChart data={analyticsData.dailySales} />
          </Reveal>

          {/* Transactions + Top medicines */}
          <Reveal delay={0.2} className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
            <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-2">Today's Transactions</div>
              <div className="text-2xl font-bold text-white">{analyticsData.transactions.today}</div>
              <div className="text-[11px] text-slate-500 mt-1">Avg: {analyticsData.transactions.average}/day</div>
              <div className="flex items-end gap-0.5 h-6 mt-3">
                {[20, 35, 28, 42, 38, 50, 45, 55, 48, 60].map((h, i) => (
                  <div key={i} className="flex-1 flex items-end"><div className="w-full rounded-sm bg-emerald-500/20" style={{ height: `${h}%` }} /></div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm flex-1">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-3">Top Medicines</div>
              <div className="space-y-2.5">
                {analyticsData.topMedicines.map((med, i) => (
                  <div key={med.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[10px] text-slate-400 font-mono">{i + 1}</span>
                      <span className="text-[11px] text-slate-300 truncate">{med.name}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 ml-2">{med.units} units</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Row 2: Best Selling Drugs + Performance stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mt-4 sm:mt-5">
          <Reveal delay={0.3} className="lg:col-span-5">
            <BestSellingDrugs />
          </Reveal>
          <Reveal delay={0.4} className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm h-full">
              <div className="mb-5">
                <div className="text-xs font-bold text-white">Performance Summary</div>
                <div className="text-[10px] text-slate-500">Key operational metrics</div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCounter value={22} suffix="s" label="Avg Dispense Time" change="-88%" delay={0.5} />
                <StatCounter value={99.7} suffix="%" label="Stock Accuracy" change="+4.2%" delay={0.55} />
                <StatCounter value={98.4} suffix="%" label="Expiry Prevention" change="+12%" delay={0.6} />
                <StatCounter value={3.2} suffix="m" label="Patient Wait" change="-64%" delay={0.65} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Insight strip */}
        <Reveal delay={0.5}>
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {[
              { icon: "ri-lightbulb-line", label: "Peak hours: 10am–2pm", color: "text-amber-500" },
              { icon: "ri-shopping-bag-line", label: "Top seller: Paracetamol 500mg", color: "text-emerald-500" },
              { icon: "ri-calendar-line", label: "Busiest day: Saturday", color: "text-blue-500" },
            ].map((item) => (
              <div key={item.label} className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm">
                <i className={`${item.icon} ${item.color} text-xs`} />
                <span className="text-[11px] text-slate-400 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
