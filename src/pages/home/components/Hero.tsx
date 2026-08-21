import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { heroStats } from "@/mocks/homeContent";

/* ── Animated number counter ───────────────────────────────── */
function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Parse numeric part and suffix (e.g. "10M+" → 10, "M+") ("99.9%" → 99.9, "%")
  const match = value.match(/^([\d.]+)(.*)$/);
  const numericEnd = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isDecimal = match ? match[1].includes(".") : false;

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 35, damping: 20 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      motionVal.set(numericEnd);
    }
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
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
          <span ref={displayRef}>0{suffix}</span>
        </div>
        <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">{label}</div>
      </motion.div>
    </div>
  );
}

export default function Hero() {

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16 hero-mesh transition-colors duration-200">

      {/* Bottom-edge emerald fade — smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50/40 to-transparent pointer-events-none dark:from-emerald-950/20" />

      {/* Subtle emerald dot grid — hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none hidden sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #10b981 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Primary emerald glow — top right, wide wash */}
      <div className="absolute -top-32 -right-24 w-[600px] h-[500px] rounded-full bg-emerald-300/[0.09] blur-[140px] pointer-events-none" />

      {/* Secondary emerald glow — center-right, focused */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-emerald-400/[0.05] blur-[100px] pointer-events-none" />

      {/* Teal accent — bottom left, soft depth */}
      <div className="absolute -bottom-24 -left-16 w-[450px] h-[380px] rounded-full bg-teal-300/[0.05] blur-[110px] pointer-events-none" />

      {/* Very subtle warm mint — center, barely visible */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-emerald-200/[0.03] blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-medium mb-6 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Next-Gen Pharmacy Operations Layer</span>
            </motion.div>

            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
              Operational Clarity for <br className="hidden sm:block" />
              Modern Pharmacy <br className="hidden sm:block" />
              <span className="text-slate-900">Workflows.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
              Unified queue management, real-time prescription synchronization, and clinical intelligence built for high-volume modern pharmacy operations.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <a
                href="https://app.klavora.com/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/25"
              >
                Book a demo
                <i className="ri-arrow-right-line text-emerald-100 text-xs" />
              </a>

              <a
                href="#three-systems"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200"
              >
                Explore platform
                <i className="ri-arrow-right-up-line text-slate-400 text-xs" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/60 text-slate-500 text-xs">
              <div className="flex items-center gap-1.5">
                <i className="ri-shield-check-fill text-emerald-400" />
                <span>HIPAA &amp; GDPR Ready</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <i className="ri-time-line text-emerald-400" />
                <span>Sub-20ms Engine Latency</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7"
          >
            <div className="relative hidden sm:block">
              {/* Live KPI pill — green, static, above the mockup */}
              <div className="relative z-20 flex items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-lg border border-emerald-200/50 text-slate-800 text-xs font-semibold shadow-[0_4px_20px_-4px_rgba(16,185,129,0.15)] mb-3 mx-auto w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Live Dispense Sync</span>
                <span className="h-3 w-px bg-slate-200" />
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  <i className="ri-arrow-down-s-fill text-[8px]" />
                  88% Wait Time
                </span>
              </div>

              {/* Desktop dashboard image */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(16,185,129,0.15),0_8px_24px_-6px_rgba(0,0,0,0.06)] ring-1 ring-emerald-200/30 ring-offset-2 ring-offset-transparent">
                <img
                  src="/dashboard-mockup.png"
                  alt="Klavora Dashboard — Inventory, Alerts, and Activity"
                  className="w-full h-auto block"
                  loading="eager"
                />
              </div>

              {/* iPhone 15 Pro mockup — bottom-right of desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-10 right-0 sm:right-2 lg:right-6 z-30"
              >
                <div className="relative w-[130px] sm:w-[155px] lg:w-[180px]">
                  <svg viewBox="0 0 193 402" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_28px_56px_rgba(0,0,0,0.4)]">
                    {/* iPhone body — natural titanium */}
                    <rect x="1" y="1" width="191" height="400" rx="42" fill="#2C2C2E" stroke="#48484A" strokeWidth="1"/>
                    <rect x="2" y="2" width="189" height="398" rx="41" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                    {/* Power button */}
                    <rect x="191" y="105" width="2.5" height="30" rx="1.25" fill="#48484A"/>
                    {/* Volume up */}
                    <rect x="0" y="92" width="2.5" height="24" rx="1.25" fill="#48484A"/>
                    {/* Volume down */}
                    <rect x="0" y="122" width="2.5" height="24" rx="1.25" fill="#48484A"/>
                    {/* Action button */}
                    <rect x="0" y="74" width="2.5" height="12" rx="1.25" fill="#48484A"/>
                    {/* Screen */}
                    <rect x="7" y="7" width="179" height="388" rx="36" fill="#000"/>
                    {/* Dynamic Island */}
                    <rect x="67" y="15" width="59" height="11" rx="5.5" fill="#000"/>
                  </svg>

                  {/* Screen content */}
                  <div className="absolute top-[2.2%] left-[3.8%] w-[92.4%] h-[96.5%] rounded-[32px] overflow-hidden bg-[#09090B]">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-5 pt-3 pb-0">
                      <span className="text-[8px] text-white font-semibold tracking-wide">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-2" viewBox="0 0 16 10" fill="white"><path d="M8 2.4C6.14 2.4 4.44 3.1 3.14 4.26L1.72 2.84C3.38 1.36 5.58.4 8 .4s4.62.96 6.28 2.44L12.86 4.26C11.56 3.1 9.86 2.4 8 2.4zM8 5.6c-1.24 0-2.36.5-3.18 1.3L3.4 5.48C4.56 4.36 6.2 3.6 8 3.6s3.44.76 4.6 1.88L11.18 6.9C10.36 6.1 9.24 5.6 8 5.6zM8 8.8c-.66 0-1.26.27-1.7.7L8 11.2l1.7-1.7c-.44-.43-1.04-.7-1.7-.7z"/></svg>
                        <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="white"><rect x="0" y="7" width="2.5" height="5" rx="0.5"/><rect x="3.2" y="4.5" width="2.5" height="7.5" rx="0.5"/><rect x="6.4" y="2" width="2.5" height="10" rx="0.5"/><rect x="9.6" y="0" width="2.5" height="12" rx="0.5" fillOpacity="0.3"/></svg>
                        <div className="flex items-center">
                          <div className="w-5 h-2.5 border border-white/40 rounded-[3px] relative"><div className="absolute inset-[1.5px] right-[2px] bg-white rounded-[1px]" /></div>
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-4 pt-3 pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-[7px] text-slate-500 font-medium">Accra Central Pharmacy</div>
                          <div className="text-[12px] font-bold text-white tracking-tight">Dashboard</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <i className="ri-notification-3-line text-[8px] text-blue-400" />
                        </div>
                      </div>
                      <div className="text-[7px] text-slate-600">Monday, 27 April 2026</div>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-3 gap-1.5 px-3 mb-3">
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[6px] text-slate-500 uppercase tracking-wider font-medium">Drugs</div>
                          <div className="w-3.5 h-3.5 rounded bg-blue-500/15 flex items-center justify-center"><i className="ri-capsule-line text-[5px] text-blue-400" /></div>
                        </div>
                        <div className="text-[13px] font-bold text-white">15</div>
                      </div>
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[6px] text-slate-500 uppercase tracking-wider font-medium">Units</div>
                          <div className="w-3.5 h-3.5 rounded bg-emerald-500/15 flex items-center justify-center"><i className="ri-stack-line text-[5px] text-emerald-400" /></div>
                        </div>
                        <div className="text-[13px] font-bold text-white">4,246</div>
                      </div>
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[6px] text-slate-500 uppercase tracking-wider font-medium">Low</div>
                          <div className="w-3.5 h-3.5 rounded bg-amber-500/15 flex items-center justify-center"><i className="ri-alert-line text-[5px] text-amber-400" /></div>
                        </div>
                        <div className="text-[13px] font-bold text-amber-400">5</div>
                      </div>
                    </div>

                    {/* Alerts section */}
                    <div className="px-3 mb-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-bold text-white">Alerts</span>
                        <span className="text-[7px] text-blue-400 font-medium">View all</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { name: "Paracetamol 500mg", detail: "8 units · Exp 2026-05", badge: "Low Stock", badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                          { name: "Artemether 20/120mg", detail: "0 units · Exp 2025-12", badge: "Out of Stock", badgeStyle: "bg-red-500/10 text-red-400 border-red-500/20" },
                          { name: "Lisinopril 10mg", detail: "12 units · Exp 2026-06", badge: "Low Stock", badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                          { name: "Doxycycline 100mg", detail: "7 units · Exp 2026-05", badge: "Low Stock", badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                        ].map((item) => (
                          <div key={item.name} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl px-2.5 py-2">
                            <div className="min-w-0 flex-1">
                              <div className="text-[8px] font-semibold text-white truncate">{item.name}</div>
                              <div className="text-[6px] text-slate-500 mt-0.5">{item.detail}</div>
                            </div>
                            <span className={`text-[5px] px-1.5 py-0.5 rounded-full border font-bold whitespace-nowrap ml-1.5 ${item.badgeStyle}`}>{item.badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom nav bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#09090B]/95 backdrop-blur-lg border-t border-white/[0.06] px-3 py-2 flex items-center justify-between">
                      <div className="flex flex-col items-center gap-0.5"><i className="ri-dashboard-line text-[9px] text-blue-400" /><span className="text-[5px] text-blue-400 font-medium">Home</span></div>
                      <div className="flex flex-col items-center gap-0.5"><i className="ri-box-3-line text-[9px] text-slate-600" /><span className="text-[5px] text-slate-600">Stock</span></div>
                      <div className="flex flex-col items-center gap-0.5"><i className="ri-shopping-bag-3-line text-[9px] text-slate-600" /><span className="text-[5px] text-slate-600">Sell</span></div>
                      <div className="flex flex-col items-center gap-0.5"><i className="ri-bar-chart-2-line text-[9px] text-slate-600" /><span className="text-[5px] text-slate-600">Stats</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* ── Animated Stats Strip ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-slate-200/60"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`relative ${idx !== 0 ? "border-l border-slate-200/60 pl-4 sm:border-none sm:pl-0 md:border-l md:border-slate-200/60 md:pl-8" : ""}`}
              >
                <AnimatedStat value={stat.value} label={stat.label} delay={idx * 0.12} />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
