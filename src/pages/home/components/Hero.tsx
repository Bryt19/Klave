import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { heroStats, floatingMetrics } from "@/mocks/homeContent";

/* ── Animated number counter ───────────────────────────────── */
function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^([\d.]+)(.*)$/);
  const numericEnd = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isDecimal = match ? match[1].includes(".") : false;
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 35, damping: 20 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) motionVal.set(numericEnd);
  }, [inView, motionVal, numericEnd]);

  useEffect(() => {
    const unsub = spring.on("change", (latest: number) => {
      if (displayRef.current) {
        const formatted = isDecimal ? latest.toFixed(1) : Math.round(latest).toString();
        displayRef.current.textContent = formatted + suffix;
      }
    });
    return () => unsub();
  }, [spring, suffix, isDecimal]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <div              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-tight text-slate-900 leading-none">
          <span ref={displayRef}>0{suffix}</span>
        </div>
        <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1.5">{label}</div>
      </motion.div>
    </div>
  );
}

/* ── Floating metric card ──────────────────────────────────── */
function FloatingMetric({
  metric,
  index,
  mouseX,
  mouseY,
}: {
  metric: typeof floatingMetrics[0];
  index: number;
  mouseX: any;
  mouseY: any;
}) {
  const colorMap: Record<string, { bg: string; text: string; icon: string; border: string }> = {
    amber: { bg: "bg-amber-50", text: "text-amber-700", icon: "text-amber-500", border: "border-amber-100" },
    red: { bg: "bg-red-50", text: "text-red-700", icon: "text-red-500", border: "border-red-100" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-700", icon: "text-emerald-500", border: "border-emerald-100" },
    blue: { bg: "bg-blue-50", text: "text-blue-700", icon: "text-blue-500", border: "border-blue-100" },
  };
  const c = colorMap[metric.color] || colorMap.emerald;

  const positions = [
    { top: "8%", left: "-6%" },
    { top: "4%", right: "-4%" },
    { bottom: "30%", left: "-8%" },
    { bottom: "8%", right: "-5%" },
  ];
  const pos = positions[index % positions.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.8 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        ...pos,
        x: mouseX,
        y: mouseY,
      }}
      className={`absolute z-20 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border ${c.border} float-shadow`}
    >
      <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center`}>
        <i className={`${metric.icon} ${c.icon} text-sm`} />
      </div>
      <div>
        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{metric.label}</div>
        <div className="text-sm font-bold text-slate-800 leading-tight">{metric.medicine}</div>
        <div className="text-[10px] text-slate-500">{metric.detail}</div>
      </div>
    </motion.div>
  );
}

/* ── Mini SVG bar chart for dashboard ─────────────────────── */
function MiniBarChart({ data, color }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  return (
    <svg viewBox="0 0 80 32" className="w-full h-full" preserveAspectRatio="none">
      {data.map((h, i) => {
        const barH = (h / max) * 28;
        return (
          <rect key={i} x={i * (80 / data.length) + 1} y={32 - barH} width={80 / data.length - 3} height={barH} rx="1.5" fill={color || "#10b981"} opacity={0.6 + (h / max) * 0.4} />
        );
      })}
    </svg>
  );
}

/* ── Mini SVG line sparkline ─────────────────────────────── */
function MiniSparkline({ data, color }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100;
  const h = 28;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return `${x},${y}`;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <polyline points={pts.join(" ")} fill="none" stroke={color || "#10b981"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={`0,${h} ${pts.join(" ")} ${w},${h}`} fill={color || "#10b981"} opacity="0.08" />
    </svg>
  );
}

/* ── Mini donut chart (static SVG) ────────────────────── */
function MiniDonut({ segments }: { segments: { pct: number; color: string }[] }) {
  const size = 40;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let cumulativeAngle = 0;

  return (
    <div className="w-10 h-10 shrink-0 relative">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-10 h-10 -rotate-90">
        {segments.map((seg, i) => {
          const dashLength = (seg.pct / 100) * circumference;
          const gapLength = circumference - dashLength;
          const rotation = cumulativeAngle * (360 / 100);
          cumulativeAngle += seg.pct;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLength} ${gapLength}`}
              strokeLinecap="round"
              transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
          <div className="text-[7px] font-bold text-slate-700">1.2k</div>
        </div>
      </div>
    </div>
  );
}

/* ── Dashboard mockup (pure JSX, no image) ─────────────────── */
function DashboardMockup() {
  const weeklyRevenue = [5840, 7200, 6100, 8420, 7890, 9340, 6400];
  const monthlyTrend = [92, 88, 95, 102, 110, 118, 125, 132, 142, 148, 155, 168];
  const salesByCategory = [
    { pct: 35, color: "#059669" },
    { pct: 25, color: "#10b981" },
    { pct: 20, color: "#6ee7b7" },
    { pct: 12, color: "#93c5fd" },
    { pct: 8, color: "#fde68a" },
  ];

  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-200/60 dashboard-shadow">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200/60 text-[10px] text-slate-400 font-mono">
            app.klavora.com/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="flex min-h-[340px] sm:min-h-[400px]">
        {/* Sidebar */}
        <div className="hidden sm:flex w-44 lg:w-52 flex-col border-r border-slate-100 p-3 space-y-1">              <div className="flex items-center gap-2 px-2 py-1.5 mb-3">
            <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
            </svg>
            <span className="text-xs font-bold text-slate-800">Klavora</span>
          </div>
          {[
            { icon: "ri-dashboard-line", label: "Dashboard", active: true },
            { icon: "ri-archive-line", label: "Inventory", active: false },
            { icon: "ri-shopping-cart-2-line", label: "Sales", active: false },
            { icon: "ri-file-list-3-line", label: "Prescriptions", active: false },
            { icon: "ri-bar-chart-2-line", label: "Analytics", active: false },
            { icon: "ri-settings-3-line", label: "Settings", active: false },
          ].map((item) => (
            <div key={item.label}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                item.active ? "bg-emerald-50 text-emerald-700" : "text-slate-500 hover:bg-slate-50"
              }`}>
              <i className={`${item.icon} text-sm`} />
              <span>{item.label}</span>
            </div>
          ))}
          <div className="mt-auto pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-700">KA</div>
              <div>
                <div className="text-[9px] font-semibold text-slate-800">Kofi Appiah</div>
                <div className="text-[7px] text-slate-400">Pharmacist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 sm:p-4 lg:p-5 space-y-3 sm:space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 font-medium">Accra Central Pharmacy</div>
              <div className="text-sm sm:text-base font-bold text-slate-900">Dashboard</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                <i className="ri-notification-3-line text-xs text-emerald-600" />
              </div>
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                <i className="ri-user-3-line text-xs text-slate-500" />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {[
              { label: "Today's Revenue", value: "GH₵ 8,420", change: "+12%", icon: "ri-line-chart-line", color: "emerald" },
              { label: "Prescriptions", value: "342", change: "+8%", icon: "ri-file-list-3-line", color: "blue" },
              { label: "Low Stock", value: "5", change: "-2", icon: "ri-alert-line", color: "amber" },
              { label: "Expiring Soon", value: "3", change: "", icon: "ri-time-line", color: "red" },
            ].map((stat) => (
              <div key={stat.label} className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                  <i className={`${stat.icon} text-${stat.color}-400 text-[10px]`} />
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900">{stat.value}</div>
                {stat.change && (
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="text-[10px] font-medium text-emerald-600">{stat.change}</div>
                    <div className="text-[9px] text-slate-400">today</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Charts row: Revenue bar chart + Revenue trend + Donut + Alerts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {/* Weekly Revenue with SVG bars */}
            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-[9px] font-semibold text-slate-600 mb-1">Weekly Revenue</div>
              <div className="h-10 mb-1">
                <MiniBarChart data={weeklyRevenue} />
              </div>
              <div className="flex justify-between">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="text-[6px] text-slate-400">{d}</span>
                ))}
              </div>
            </div>

            {/* Monthly Trend with sparkline */}
            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-[9px] font-semibold text-slate-600 mb-1">Monthly Trend</div>
              <div className="h-10">
                <MiniSparkline data={monthlyTrend} color="#3b82f6" />
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[9px] font-bold text-slate-800">GH₵142.8k</span>
                <span className="text-[8px] text-emerald-600 font-medium">+20.6%</span>
              </div>
            </div>

            {/* Category donut */}
            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-[9px] font-semibold text-slate-600 mb-1.5">Sales by Category</div>
              <div className="flex items-center gap-2">
                <MiniDonut segments={salesByCategory} />
                <div className="space-y-0.5">
                  {[
                    { label: "Antibiotics", color: "bg-emerald-500" },
                    { label: "Analgesics", color: "bg-emerald-400" },
                    { label: "Cardiovascular", color: "bg-emerald-300" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                      <span className="text-[7px] text-slate-500">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-[9px] font-semibold text-slate-600 mb-1.5">Active Alerts</div>
              <div className="space-y-1">
                {[
                  { name: "Lisinopril 20mg", type: "Low Stock", color: "amber" },
                  { name: "Cefuroxime 250mg", type: "Expiring", color: "red" },
                  { name: "Omeprazole 20mg", type: "Low Stock", color: "amber" },
                ].map((alert) => (
                  <div key={alert.name} className="flex items-center justify-between p-1 rounded-lg bg-white border border-slate-100">
                    <div className="text-[8px] font-medium text-slate-700 truncate">{alert.name}</div>
                    <span className={`text-[6px] font-bold px-1 py-0.5 rounded-full ${
                      alert.color === "red" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                    }`}>{alert.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: Prescription Queue + Recent Transactions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {/* Prescription Queue */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[9px] font-semibold text-slate-600">Prescription Queue</div>
                <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold border border-amber-100">8 pending</span>
              </div>
              <div className="space-y-1">
                {[
                  { rx: "RX-9488", patient: "E. Vance", drug: "Lisinopril 20mg", status: "Review", color: "amber" },
                  { rx: "RX-9489", patient: "M. Sterling", drug: "Amoxicillin 500mg", status: "Ready", color: "emerald" },
                  { rx: "RX-9490", patient: "S. Okonjo", drug: "Metformin 850mg", status: "Alert", color: "red" },
                ].map((rx) => (
                  <div key={rx.rx} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-white transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                        <span className="text-[6px] font-bold text-blue-600 font-mono">Rx</span>
                      </div>
                      <div>
                        <div className="text-[8px] font-semibold text-slate-800">{rx.drug}</div>
                        <div className="text-[7px] text-slate-400">{rx.rx} · {rx.patient}</div>
                      </div>
                    </div>
                    <span className={`text-[6px] font-bold px-1.5 py-0.5 rounded-full ${
                      rx.color === "red" ? "bg-red-50 text-red-600" :
                      rx.color === "amber" ? "bg-amber-50 text-amber-600" :
                      "bg-emerald-50 text-emerald-600"
                    }`}>{rx.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[9px] font-semibold text-slate-600">Recent Transactions</div>
                <div className="text-[8px] text-emerald-600 font-medium">View all</div>
              </div>
              <div className="space-y-1">
                {[
                  { name: "Amoxicillin 500mg", qty: "30 caps", amount: "GH₵ 45.00", time: "2m" },
                  { name: "Metformin 850mg", qty: "60 tabs", amount: "GH₵ 120.00", time: "5m" },
                  { name: "Paracetamol 500mg", qty: "100 tabs", amount: "GH₵ 15.00", time: "8m" },
                  { name: "Lisinopril 20mg", qty: "30 tabs", amount: "GH₵ 62.00", time: "11m" },
                ].map((tx) => (
                  <div key={tx.name + tx.time} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-white transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center">
                        <i className="ri-capsule-line text-[6px] text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-[8px] font-semibold text-slate-800">{tx.name}</div>
                        <div className="text-[7px] text-slate-400">{tx.qty} · {tx.time}</div>
                      </div>
                    </div>
                    <div className="text-[9px] font-bold text-slate-700">{tx.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Hero ─────────────────────────────────────────────── */
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 hero-bg noise-overlay">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      {/* Ambient emerald glow — top right, wide wash */}
      <div className="absolute -top-32 -right-24 w-[600px] h-[500px] rounded-full bg-emerald-300/[0.07] blur-[140px] pointer-events-none" />

      {/* Secondary emerald glow — center-right, focused */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-emerald-400/[0.04] blur-[100px] pointer-events-none" />

      {/* Teal accent — bottom left, soft depth */}
      <div className="absolute -bottom-24 -left-16 w-[450px] h-[380px] rounded-full bg-teal-300/[0.04] blur-[110px] pointer-events-none" />

      {/* Very subtle warm mint — center, barely visible */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-emerald-200/[0.025] blur-[80px] pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50/40 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left: Text content ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" style={{ animationDuration: '2s' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Pharmacy Operations Platform</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-5">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Your pharmacy, {" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="gradient-text-emerald whitespace-nowrap"
              >
                finally in sync.
              </motion.span>
            </h1>

            {/* Subtle divider accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-0.5 bg-emerald-300/50 rounded-full mb-5"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-md mb-7"
            >
              Inventory intelligence, prescription verification, and real-time dispensing — unified in one platform built for modern pharmacies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a
                href="https://app.klavora.com/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                Get Started
                <i className="ri-arrow-right-line text-emerald-200 text-xs" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200"
              >
                Explore platform
                <i className="ri-arrow-right-up-line text-slate-400 text-xs" />
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              {[
                { icon: "ri-shield-check-fill", text: "HIPAA & GDPR Ready", color: "text-emerald-400" },
                { icon: "ri-time-line", text: "Sub-20ms Sync", color: "text-emerald-400" },
                { icon: "ri-lock-2-fill", text: "SOC 2 Type II", color: "text-emerald-400" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-slate-100 text-[11px] text-slate-500 font-medium">
                  <i className={`${item.icon} ${item.color} text-xs`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard composition ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative lg:pr-2 lg:translate-x-4"
          >
            <div className="relative">
              <DashboardMockup />

              {/* Floating metric cards */}
              {floatingMetrics.map((metric, i) => (
                <FloatingMetric
                  key={metric.label}
                  metric={metric}
                  index={i}
                  mouseX={springX}
                  mouseY={springY}
                />
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Stats strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-slate-200/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {heroStats.map((stat, idx) => (              <div key={stat.label} className={`${idx !== 0 ? "border-l border-slate-200/50 pl-4 md:border-l md:pl-8" : ""}`}>
                <AnimatedStat value={stat.value} label={stat.label} delay={idx * 0.1} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
