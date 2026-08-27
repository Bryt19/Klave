import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ecosystemNodes } from "@/mocks/homeContent";
import Reveal from "./Reveal";

function KlavoraLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect x="10" y="2" width="12" height="28" rx="4" fill="currentColor"/>
      <rect x="2" y="10" width="28" height="12" rx="4" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

/* ── Animated stat counter ─────────────────────────────────── */
function EcoStatCounter({ value, suffix, label, delay }: {
  value: number; suffix: string; label: string; delay: number;
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
    <motion.div ref={ref} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
      <div className="text-xl sm:text-2xl font-bold text-slate-900"><span ref={displayRef}>0{suffix}</span></div>
      <div className="text-[10px] text-slate-500 font-medium mt-1">{label}</div>
    </motion.div>
  );
}

export default function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
  const vizY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const vizScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const statsY = useTransform(scrollYProgress, [0.5, 1], [20, 0]);

  const getNodePos = (i: number) => {
    const angle = (i / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
    const rx = 38;
    const ry = 37;
    return { x: 50 + rx * Math.cos(angle), y: 50 + ry * Math.sin(angle) };
  };

  const getPopupSide = (i: number) => {
    const angle = (i / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
    return Math.cos(angle) >= 0 ? "right" : "left";
  };

  return (
    <section ref={sectionRef} id="ecosystem" className="relative py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div style={{ y: headerY }} className="max-w-3xl mb-14 sm:mb-16 text-center mx-auto">
          <Reveal>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
              The Klavora{" "}
              <span className="text-emerald-600">ecosystem.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
              Every module connects seamlessly. Click any module to learn more.
            </p>
          </Reveal>
        </motion.div>

        {/* Ecosystem visualization */}
        <Reveal delay={0.15}>
          <motion.div ref={ref} style={{ y: vizY, scale: vizScale }} className="relative max-w-4xl mx-auto">
            {/* Desktop: circular layout */}
            <div className="hidden sm:block">
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450">
                  {/* ── Concentric pulse rings from center ── */}
                  {[1, 2, 3].map((ring) => (
                    <motion.circle
                      key={`pulse-${ring}`}
                      cx="400" cy="225"
                      r={40 + ring * 50}
                      fill="none"
                      stroke="rgba(16,185,129,0.06)"
                      strokeWidth="1"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? {
                        scale: [0.8, 1.05, 0.8],
                        opacity: [0, 0.4, 0],
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: ring * 0.6,
                        ease: "easeInOut",
                      }}
                      style={{ transformOrigin: "400px 225px" }}
                    />
                  ))}

                  {/* ── Rotating dashed orbit ring ── */}
                  <motion.circle
                    cx="400" cy="225" r="185"
                    fill="none"
                    stroke="rgba(16,185,129,0.08)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    initial={{ rotate: 0 }}
                    animate={inView ? { rotate: 360 } : {}}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "400px 225px" }}
                  />

                  {/* ── Connection lines ── */}
                  {ecosystemNodes.map((_, i) => {
                    const angle = (i / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
                    const rx = 310, ry = 170;
                    const cx = 400 + rx * Math.cos(angle);
                    const cy = 225 + ry * Math.sin(angle);
                    const isSel = selectedIdx === i;
                    return (
                      <motion.line key={i} x1="400" y1="225" x2={cx} y2={cy}
                        stroke={isSel ? "rgba(16,185,129,0.4)" : "rgba(16,185,129,0.1)"}
                        strokeWidth={isSel ? 2 : 1}
                        strokeDasharray={isSel ? "none" : "6 4"}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                      />
                    );
                  })}

                  {/* ── Data flow particles along lines ── */}
                  {ecosystemNodes.map((_, i) => {
                    const angle = (i / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
                    const rx = 310, ry = 170;
                    const cx = 400 + rx * Math.cos(angle);
                    const cy = 225 + ry * Math.sin(angle);
                    return (
                      <motion.circle
                        key={`particle-${i}`}
                        r="2.5"
                        fill="#10b981"
                        opacity="0.7"
                        initial={{ cx: 400, cy: 225, opacity: 0 }}
                        animate={inView ? {
                          cx: [400, cx],
                          cy: [225, cy],
                          opacity: [0, 0.8, 0],
                        } : {}}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          delay: i * 0.35,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}

                  {/* ── Node dots ── */}
                  {ecosystemNodes.map((_, i) => {
                    const angle = (i / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
                    const rx = 310, ry = 170;
                    const cx = 400 + rx * Math.cos(angle);
                    const cy = 225 + ry * Math.sin(angle);
                    return (
                      <motion.circle key={`dot-${i}`} cx={cx} cy={cy}
                        r={selectedIdx === i ? 5 : 3} fill="#10b981" opacity={selectedIdx === i ? 1 : 0.5}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: selectedIdx === i ? 1 : 0.5, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                      />
                    );
                  })}
                </svg>

                {/* ── Central node with pulsing rings ── */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  {/* Animated glow rings */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 -m-8 rounded-full border border-emerald-400/20"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute inset-0 -m-12 rounded-full border border-emerald-400/10"
                  />
                  <motion.div
                    animate={selectedIdx !== null ? { scale: [1, 1.03, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.3)] relative"
                  >
                    <div className="text-center text-white">
                      <KlavoraLogo className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5" />
                      <span className="text-[12px] font-bold tracking-tight">Klavora</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* ── Satellite nodes ── */}
                {ecosystemNodes.map((node, i) => {
                  const pos = getNodePos(i);
                  const isSelected = selectedIdx === i;
                  const popupSide = getPopupSide(i);

                  return (
                    <motion.div key={node.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}>
                      <div className="relative">
                        <motion.button
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedIdx(isSelected ? null : i)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-150 cursor-pointer whitespace-nowrap ${
                            isSelected
                              ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.35)]"
                              : "bg-white border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(16,185,129,0.12)] hover:border-emerald-200"
                          }`}>
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-150 ${isSelected ? "bg-white/20" : "bg-emerald-50"}`}>
                            <i className={`${node.icon} ${isSelected ? "text-white" : "text-emerald-600"} text-sm`} />
                          </div>
                          <span className={`text-xs font-semibold ${isSelected ? "text-white" : "text-slate-700"}`}>{node.label}</span>
                        </motion.button>

                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.92, y: -4 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.92, y: -4 }}
                              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                              className={`absolute top-1/2 -translate-y-1/2 w-52 sm:w-60 z-30 ${
                                popupSide === "right" ? "left-full ml-3" : "right-full mr-3"
                              }`}>
                              <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(16,185,129,0.08)]">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                                    <i className={`${node.icon} text-emerald-600 text-sm`} />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-slate-900">{node.label}</div>
                                    <div className="text-[9px] text-emerald-600 font-medium">Klavora Module</div>
                                  </div>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed">{node.description}</p>
                                <button onClick={(e) => { e.stopPropagation(); setSelectedIdx(null); }}
                                  className="mt-2.5 text-[10px] text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">Close</button>
                              </div>
                              <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-slate-200 rotate-45 ${
                                popupSide === "right" ? "-left-1.5 border-l border-b" : "-right-1.5 border-r border-t"
                              }`} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: stacked grid */}
            <div className="sm:hidden grid grid-cols-2 gap-3">
              <div className="col-span-2 flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <div className="text-center text-white">
                    <KlavoraLogo className="w-8 h-8 mx-auto" />
                    <span className="text-[7px] font-bold">Klavora</span>
                  </div>
                </div>
              </div>
              {ecosystemNodes.map((node, i) => {
                const isSel = selectedIdx === i;
                return (
                  <motion.div key={node.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}>
                    <button onClick={() => setSelectedIdx(isSel ? null : i)} className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all duration-150 ${isSel ? "bg-emerald-600 border-emerald-500 text-white" : "bg-white border-slate-100 shadow-sm hover:border-emerald-200"}`}>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isSel ? "bg-white/20" : "bg-emerald-50"}`}>
                        <i className={`${node.icon} ${isSel ? "text-white" : "text-emerald-600"} text-xs`} />
                      </div>
                      <span className={`text-[11px] font-semibold ${isSel ? "text-white" : "text-slate-700"}`}>{node.label}</span>
                    </button>
                    <AnimatePresence>
                      {isSel && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          <div className="mt-2 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                            <p className="text-[11px] text-slate-600 leading-relaxed">{node.description}</p>
                            <button onClick={() => setSelectedIdx(null)} className="mt-1.5 text-[10px] text-emerald-600 font-semibold">Close</button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>

        {/* Bottom stats with count animation — extra top spacing */}
        <motion.div style={{ y: statsY }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 sm:mt-16 max-w-3xl mx-auto">
          <EcoStatCounter value={7} suffix="" label="Integrated Modules" delay={0.1} />
          <EcoStatCounter value={18} suffix="ms" label="Sync Latency" delay={0.15} />
          <EcoStatCounter value={99.9} suffix="%" label="Uptime SLA" delay={0.2} />
          <EcoStatCounter value={50} suffix="+" label="Branches Supported" delay={0.25} />
        </motion.div>
      </div>
    </section>
  );
}
