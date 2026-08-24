import { useEffect, useRef, useCallback } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Clock,
} from "lucide-react";
import { heroStats } from "@/mocks/homeContent";

/* ═══════════════════════════════════════════════════════════════
   WORD-BY-WORD HEADLINE — Classic staggered reveal
   ═══════════════════════════════════════════════════════════════ */
function AnimatedHeadline({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((w, wi) => (
            <motion.span
              key={`${li}-${wi}`}
              variants={word}
              className={`inline-block mr-[0.28em] ${
                w.endsWith(".")
                  ? "text-emerald-600"
                  : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════════ */
function AnimatedStat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
        const formatted = isDecimal
          ? latest.toFixed(1)
          : Math.round(latest).toString();
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
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
          <span ref={displayRef}>0{suffix}</span>
        </div>
        <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">
          {label}
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3D PARALLAX — Subtle tilt on mouse, springs back gently
   ═══════════════════════════════════════════════════════════════ */
function ParallaxDashboard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 22, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 50, damping: 22, mass: 0.5 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4]);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    },
    [mx, my]
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, perspective: 1200 }}
      className="relative hidden sm:block"
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING BADGE — Gentle bobbing motion
   ═══════════════════════════════════════════════════════════════ */
function FloatingBadge({
  children,
  className,
  delay = 0,
  float = 6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  float?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.5 + delay },
        y: {
          duration: float,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Classic, professional, refined
   ═══════════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16 hero-mesh transition-colors duration-200">
      {/* ── Ambient background — very subtle ── */}
      <div className="absolute -top-32 -right-24 w-[600px] h-[500px] rounded-full bg-emerald-300/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-emerald-400/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-16 w-[450px] h-[380px] rounded-full bg-teal-300/[0.04] blur-[110px] pointer-events-none" />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(circle, #10b981 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-50/30 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 items-center">

          {/* ═══════════════ LEFT — Copy ═══════════════ */}
          <div className="lg:col-span-5 xl:col-span-5 text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-medium mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Modern Pharmacy Operations</span>
            </motion.div>

            {/* Headline — word-by-word, no blur, no gradients */}
            <AnimatedHeadline
              lines={["Run your pharmacy with", "clarity, speed,", "and confidence."]}
              className="text-[2rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.08] mb-6"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal leading-relaxed max-w-lg mb-8"
            >
              Klavora simplifies inventory, sales, prescriptions, and pharmacy
              operations in one modern platform.
            </motion.p>

            {/* CTAs — clean, no glow, no pulsing */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3"
            >
              <a
                href="https://app.klavora.com/signup"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full transition-all duration-200 hover:bg-slate-50"
              >
                Watch Demo
                <ArrowUpRight className="w-4 h-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Trust line — single row, quiet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-200/60 text-slate-400 text-xs"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                HIPAA &amp; GDPR Ready
              </span>
              <span className="text-slate-200">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Sub-20ms Latency
              </span>
              <span className="text-slate-200 hidden sm:inline">·</span>
              <span className="hidden sm:inline">Free 14-day pilot</span>
            </motion.div>
          </div>

          {/* ═══════════════ RIGHT — Dashboard ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7"
          >
            <ParallaxDashboard>
              {/* Live status pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative z-20 flex items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200/50 text-slate-700 text-xs font-medium shadow-[0_2px_16px_-4px_rgba(16,185,129,0.12)] mb-3 mx-auto w-fit"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Live Dispense Sync
                <span className="h-3 w-px bg-slate-200" />
                <span className="text-emerald-600 font-semibold text-[11px]">
                  88% faster
                </span>
              </motion.div>

              {/* Dashboard image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_48px_-12px_rgba(16,185,129,0.12),0_6px_20px_-6px_rgba(0,0,0,0.05)] ring-1 ring-slate-200/60">
                <img
                  src="/dashboard-mockup.png"
                  alt="Klavora Dashboard"
                  className="w-full h-auto block"
                  loading="eager"
                />
              </div>

              {/* ── Floating badges — classic, minimal ── */}

              {/* Top-left: New prescription */}
              <FloatingBadge delay={0} className="absolute -top-3 left-2 sm:left-4 lg:-left-4 z-30">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <span className="text-emerald-600 text-xs font-bold">Rx</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-900">New Prescription</div>
                    <div className="text-[10px] text-slate-400">RX-9492 · Amoxicillin</div>
                  </div>
                </div>
              </FloatingBadge>

              {/* Bottom-right: Revenue */}
              <FloatingBadge delay={1.2} className="absolute bottom-20 -right-1 sm:right-2 lg:right-0 z-30">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-bold">↑</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-900">Revenue +18%</div>
                    <div className="text-[10px] text-emerald-600 font-medium">This week</div>
                  </div>
                </div>
              </FloatingBadge>

              {/* iPhone mockup */}
              <motion.div
                initial={{ opacity: 0, y: 16, x: 12 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-10 right-0 sm:right-2 lg:right-6 z-30"
              >
                <div className="relative w-[130px] sm:w-[155px] lg:w-[180px]">
                  <svg viewBox="0 0 193 402" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
                    <rect x="1" y="1" width="191" height="400" rx="42" fill="#2C2C2E" stroke="#48484A" strokeWidth="1"/>
                    <rect x="2" y="2" width="189" height="398" rx="41" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                    <rect x="191" y="105" width="2.5" height="30" rx="1.25" fill="#48484A"/>
                    <rect x="0" y="92" width="2.5" height="24" rx="1.25" fill="#48484A"/>
                    <rect x="0" y="122" width="2.5" height="24" rx="1.25" fill="#48484A"/>
                    <rect x="0" y="74" width="2.5" height="12" rx="1.25" fill="#48484A"/>
                    <rect x="7" y="7" width="179" height="388" rx="36" fill="#000"/>
                    <rect x="67" y="15" width="59" height="11" rx="5.5" fill="#000"/>
                  </svg>

                  <div className="absolute top-[2.2%] left-[3.8%] w-[92.4%] h-[96.5%] rounded-[32px] overflow-hidden bg-[#09090B]">
                    <div className="flex items-center justify-between px-5 pt-3 pb-0">
                      <span className="text-[8px] text-white font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-2" viewBox="0 0 16 10" fill="white"><path d="M8 2.4C6.14 2.4 4.44 3.1 3.14 4.26L1.72 2.84C3.38 1.36 5.58.4 8 .4s4.62.96 6.28 2.44L12.86 4.26C11.56 3.1 9.86 2.4 8 2.4zM8 5.6c-1.24 0-2.36.5-3.18 1.3L3.4 5.48C4.56 4.36 6.2 3.6 8 3.6s3.44.76 4.6 1.88L11.18 6.9C10.36 6.1 9.24 5.6 8 5.6zM8 8.8c-.66 0-1.26.27-1.7.7L8 11.2l1.7-1.7c-.44-.43-1.04-.7-1.7-.7z"/></svg>
                        <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="white"><rect x="0" y="7" width="2.5" height="5" rx="0.5"/><rect x="3.2" y="4.5" width="2.5" height="7.5" rx="0.5"/><rect x="6.4" y="2" width="2.5" height="10" rx="0.5"/><rect x="9.6" y="0" width="2.5" height="12" rx="0.5" fillOpacity="0.3"/></svg>
                        <div className="w-5 h-2.5 border border-white/40 rounded-[3px] relative"><div className="absolute inset-[1.5px] right-[2px] bg-white rounded-[1px]" /></div>
                      </div>
                    </div>

                    <div className="px-4 pt-3 pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-[7px] text-slate-500 font-medium">Accra Central Pharmacy</div>
                          <div className="text-[12px] font-bold text-white tracking-tight">Dashboard</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-[8px] text-emerald-400">🔔</span>
                        </div>
                      </div>
                      <div className="text-[7px] text-slate-600">Monday, 27 April 2026</div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 px-3 mb-3">
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[6px] text-slate-500 uppercase tracking-wider font-medium">Drugs</div>
                          <div className="w-3.5 h-3.5 rounded bg-emerald-500/15 flex items-center justify-center"><span className="text-[5px] text-emerald-400">💊</span></div>
                        </div>
                        <div className="text-[13px] font-bold text-white">15</div>
                      </div>
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[6px] text-slate-500 uppercase tracking-wider font-medium">Units</div>
                          <div className="w-3.5 h-3.5 rounded bg-emerald-500/15 flex items-center justify-center"><span className="text-[5px] text-emerald-400">📦</span></div>
                        </div>
                        <div className="text-[13px] font-bold text-white">4,246</div>
                      </div>
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[6px] text-slate-500 uppercase tracking-wider font-medium">Low</div>
                          <div className="w-3.5 h-3.5 rounded bg-amber-500/15 flex items-center justify-center"><span className="text-[5px] text-amber-400">⚠</span></div>
                        </div>
                        <div className="text-[13px] font-bold text-amber-400">5</div>
                      </div>
                    </div>

                    <div className="px-3 mb-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-bold text-white">Alerts</span>
                        <span className="text-[7px] text-emerald-400 font-medium">View all</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { name: "Paracetamol 500mg", detail: "8 units · Exp 2026-05", badge: "Low Stock", bs: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                          { name: "Artemether 20/120mg", detail: "0 units · Exp 2025-12", badge: "Out of Stock", bs: "bg-red-500/10 text-red-400 border-red-500/20" },
                          { name: "Lisinopril 10mg", detail: "12 units · Exp 2026-06", badge: "Low Stock", bs: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                          { name: "Doxycycline 100mg", detail: "7 units · Exp 2026-05", badge: "Low Stock", bs: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                        ].map((item) => (
                          <div key={item.name} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl px-2.5 py-2">
                            <div className="min-w-0 flex-1">
                              <div className="text-[8px] font-semibold text-white truncate">{item.name}</div>
                              <div className="text-[6px] text-slate-500 mt-0.5">{item.detail}</div>
                            </div>
                            <span className={`text-[5px] px-1.5 py-0.5 rounded-full border font-bold whitespace-nowrap ml-1.5 ${item.bs}`}>{item.badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-[#09090B]/95 backdrop-blur-lg border-t border-white/[0.06] px-3 py-2 flex items-center justify-between">
                      <div className="flex flex-col items-center gap-0.5"><span className="text-[9px]">🏠</span><span className="text-[5px] text-emerald-400 font-medium">Home</span></div>
                      <div className="flex flex-col items-center gap-0.5"><span className="text-[9px]">📦</span><span className="text-[5px] text-slate-600">Stock</span></div>
                      <div className="flex flex-col items-center gap-0.5"><span className="text-[9px]">🛒</span><span className="text-[5px] text-slate-600">Sell</span></div>
                      <div className="flex flex-col items-center gap-0.5"><span className="text-[9px]">📊</span><span className="text-[5px] text-slate-600">Stats</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ParallaxDashboard>
          </motion.div>
        </div>

        {/* ═══════════════ STATS STRIP ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-slate-200/60"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`relative ${
                  idx !== 0
                    ? "border-l border-slate-200/60 pl-4 sm:border-none sm:pl-0 md:border-l md:border-slate-200/60 md:pl-8"
                    : ""
                }`}
              >
                <AnimatedStat value={stat.value} label={stat.label} delay={idx * 0.1} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
