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
              Inventory intelligence, prescription verification, and real-time dispensing, all unified in one platform built for modern pharmacies.
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
                { icon: "ri-time-line", text: "Sub-20ms Sync", color: "text-emerald-400" },
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
              <img
                src="/white.png"
                alt="Klavora Dashboard"
                className="w-full h-auto rounded-xl sm:rounded-2xl dashboard-shadow"
                loading="eager"
                decoding="async"
              />

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
