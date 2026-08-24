import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="relative py-14 sm:py-20 lg:py-28 bg-slate-50/50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-center mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>What Our Customers Say</span>
            </div>

            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Trusted by pharmacy <br className="hidden sm:block" />
              <span className="gradient-text-emerald">leaders across Africa.</span>
            </h2>
          </Reveal>
        </div>

        {/* Testimonial cards */}
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm card-hover-glow"
                >
                  {/* Decorative quote mark */}
                  <div className="absolute top-6 right-8 sm:top-8 sm:right-10 text-emerald-100 pointer-events-none select-none">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                      <path d="M18 24c0-4.4-3.6-8-8-8V10c6.6 0 12 5.4 12 12v16H8V28h10V24zm24 0c0-4.4-3.6-8-8-8V10c6.6 0 12 5.4 12 12v16H32V28h10V24z" opacity="0.4" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 text-amber-400 text-sm mb-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.i
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                        className="ri-star-fill"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium leading-relaxed mb-8 relative z-10">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </blockquote>

                  {/* Metrics */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-transparent border border-emerald-100/60 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                      <i className="ri-line-chart-line text-emerald-600 text-lg" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                        {testimonials[active].metrics.label}
                      </div>
                      <div className="text-lg font-bold text-emerald-600 mt-0.5">
                        {testimonials[active].metrics.value}
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">
                      {testimonials[active].initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {testimonials[active].name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {testimonials[active].role} · {testimonials[active].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  active === i
                    ? "bg-emerald-500 w-6"
                    : "bg-slate-200 hover:bg-slate-300 w-2"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
