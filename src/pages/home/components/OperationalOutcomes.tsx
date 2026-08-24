import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowDownRight, Activity } from "lucide-react";
import Reveal from "./Reveal";

const metrics = [
  {
    from: "3 min",
    to: "22 sec",
    metric: "Turnaround Time",
    label: "Average dispensing and verification cycle reduced by 88%",
    change: "-88%",
    positive: true,
  },
  {
    from: "14%",
    to: "0.2%",
    metric: "Stock Expiry Loss",
    label: "Batch-level FEFO logic virtually eliminated expired stock write-offs",
    change: "-98.6%",
    positive: true,
  },
  {
    from: "Manual",
    to: "18 ms",
    metric: "Sync Latency",
    label: "Real-time prescription synchronization across all branch registers",
    change: "Instant",
    positive: true,
  },
];

const chartBars = [
  { label: "Mon", value: 82 },
  { label: "Tue", value: 91 },
  { label: "Wed", value: 78 },
  { label: "Thu", value: 95 },
  { label: "Fri", value: 88 },
  { label: "Sat", value: 72 },
  { label: "Sun", value: 45 },
];

const maxBar = Math.max(...chartBars.map((b) => b.value));

const linePoints = [
  { x: 0, y: 45 }, { x: 1, y: 52 }, { x: 2, y: 48 },
  { x: 3, y: 61 }, { x: 4, y: 58 }, { x: 5, y: 72 },
  { x: 6, y: 68 }, { x: 7, y: 81 }, { x: 8, y: 76 },
  { x: 9, y: 89 }, { x: 10, y: 85 }, { x: 11, y: 94 },
];

const chartWidth = 400;
const chartHeight = 120;
const linePath = linePoints.map((p, i) => {
  const x = (p.x / 11) * chartWidth;
  const y = chartHeight - (p.y / 100) * chartHeight;
  return `${i === 0 ? "M" : "L"} ${x} ${y}`;
}).join(" ");
const areaPath = linePath + ` L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

export default function OperationalOutcomes() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-50/70 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-6">
              <Activity className="w-3 h-3" />
              <span>Analytics &amp; Reports</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-4">
              Analytics that drive <br />
              <span className="text-emerald-600">operational excellence.</span>
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Real metrics reported by hospital pharmacies, independent retail chains, and high-throughput dispensary networks.
            </p>
          </Reveal>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {metrics.map((m, i) => (
            <Reveal key={m.metric} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl p-6 bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-slate-300/80 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {m.metric}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    m.positive
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {m.positive ? <TrendingDown className="w-2.5 h-2.5" /> : <TrendingUp className="w-2.5 h-2.5" />}
                    {m.change}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-slate-400 line-through decoration-slate-200 group-hover:text-slate-300 transition-colors">
                    {m.from}
                  </span>
                  <span className="text-sm text-slate-300">→</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {m.to}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {m.label}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <Reveal delay={0.15}>
            <div className="group rounded-2xl p-6 bg-white border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-bold text-slate-900">Weekly Dispensing Volume</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Prescriptions processed per day</div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                  <TrendingUp className="w-3 h-3" />
                  +12% vs last week
                </div>
              </div>

              <div className="flex items-end gap-2 sm:gap-3 h-40">
                {chartBars.map((bar, i) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative" style={{ height: `${(bar.value / maxBar) * 120}px` }}>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover:from-emerald-500 group-hover:to-emerald-300 transition-colors duration-300"
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Line Chart */}
          <Reveal delay={0.2}>
            <div className="group rounded-2xl p-6 bg-white border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-bold text-slate-900">Revenue Trend</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Monthly performance (indexed)</div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                  <ArrowDownRight className="w-3 h-3 rotate-180" />
                  +31% YoY
                </div>
              </div>

              <div className="h-36">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <path d={areaPath} fill="url(#areaGrad)" />
                  <path d={linePath} fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-emerald-400 transition-colors duration-300" />
                  {linePoints.map((p) => {
                    const x = (p.x / 11) * chartWidth;
                    const y = chartHeight - (p.y / 100) * chartHeight;
                    return (
                      <circle key={p.x} cx={x} cy={y} r="3" fill="#10B981" stroke="white" strokeWidth="2" className="group-hover:fill-emerald-400 transition-colors duration-300" />
                    );
                  })}
                </svg>
              </div>

              <div className="flex items-center justify-between mt-2 text-[10px] text-slate-400">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
