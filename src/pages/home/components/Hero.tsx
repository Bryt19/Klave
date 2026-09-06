import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView, useTransform } from "framer-motion";
import { heroStats } from "@/mocks/homeContent";
import React from "react";

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
        <div className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-tight text-slate-900 dark:text-white leading-none">
          <span ref={displayRef}>0{suffix}</span>
        </div>
        <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">{label}</div>
      </motion.div>
    </div>
  );
}

/* ── Main Hero ─────────────────────────────────────────────── */
export default function Hero() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [0, 1], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 hero-bg dark:bg-slate-900 transition-colors duration-300">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30 dark:opacity-10 pointer-events-none" />

      {/* Ambient emerald glow — top right, wide wash */}
      <div className="absolute -top-32 -right-24 w-[600px] h-[500px] rounded-full bg-emerald-300/[0.07] dark:bg-emerald-500/[0.1] blur-[140px] pointer-events-none" />

      {/* Secondary emerald glow — center-right, focused */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-emerald-400/[0.04] dark:bg-emerald-500/[0.08] blur-[100px] pointer-events-none" />

      {/* Teal accent — bottom left, soft depth */}
      <div className="absolute -bottom-24 -left-16 w-[450px] h-[380px] rounded-full bg-teal-300/[0.04] dark:bg-teal-500/[0.08] blur-[110px] pointer-events-none" />

      {/* Very subtle warm mint — center, barely visible */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-emerald-200/[0.025] dark:bg-emerald-400/[0.05] blur-[80px] pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50/40 dark:from-slate-900 to-transparent pointer-events-none" />

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
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-5">
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
                className="gradient-text-emerald dark:text-emerald-400 whitespace-nowrap"
              >
                finally in sync.
              </motion.span>
            </h1>

            {/* Subtle divider accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-0.5 bg-emerald-300/50 dark:bg-emerald-500/50 rounded-full mb-5"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-md mb-7"
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
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800 rounded-full transition-all duration-200"
              >
                Explore platform
                <i className="ri-arrow-right-up-line text-slate-400 dark:text-slate-500 text-xs" />
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
                { icon: "ri-time-line", text: "Sub-20ms Sync", color: "text-emerald-500 dark:text-emerald-400" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  <i className={`${item.icon} ${item.color} text-xs`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Interactive Dashboard Window ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative lg:pr-2 lg:translate-x-4"
            style={{ perspective: 1200 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl dark:shadow-emerald-500/10 transition-transform duration-100 ease-linear transform-gpu"
            >
              {/* Window Header */}
              <div className="absolute top-0 left-0 w-full h-10 bg-slate-50 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Dashboard Content */}
              <div className="pt-10">
                <img
                  src="/white.png"
                  alt="Klavora Dashboard"
                  className="w-full h-auto object-cover object-top opacity-90 dark:opacity-80 pointer-events-none mix-blend-multiply dark:mix-blend-normal"
                  loading="eager"
                  decoding="async"
                />
              </div>

            </motion.div>
          </motion.div>

        </div>

        {/* ── Stats strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-slate-200/50 dark:border-slate-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {heroStats.map((stat, idx) => (
              <div key={stat.label} className={`${idx !== 0 ? "border-l border-slate-200/50 dark:border-slate-800 pl-4 md:border-l md:pl-8" : ""}`}>
                <AnimatedStat value={stat.value} label={stat.label} delay={idx * 0.1} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
