import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedCTA from "@/components/AnimatedCTA";

export default function CtaSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-slate-950">
      {/* Subtle noise */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Animated shimmer band */}
      <div className="absolute inset-0 cta-shimmer pointer-events-none" />

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Your pharmacy <br className="hidden sm:block" />
            deserves better tools.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-teal-100/80 font-normal leading-relaxed max-w-xl mx-auto mb-10">
            Join leading pharmacy networks running faster, safer, and more
            profitable operations with Klavora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <AnimatedCTA
              href="https://app.klavora.store"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-100 rounded-full hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors duration-200 shadow-xl shadow-black/10 cta-ripple group"
            >
              Get Started Free
              <i className="ri-arrow-right-line text-teal-600 group-hover:translate-x-0.5 transition-transform" />
            </AnimatedCTA>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/[0.08] transition-all duration-200"
              >
                Talk to Sales
              </Link>
            </motion.div>
          </div>

          {/* Trust items */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-teal-200/70 mb-12">
            <span className="flex items-center gap-1.5">
              <i className="ri-check-line text-teal-300 font-bold" /> Free
              30-day trial
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-check-line text-teal-300 font-bold" /> Automated
              legacy CSV import
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-check-line text-teal-300 font-bold" /> No
              hardware lock-in
            </span>
          </div>

          {/* Feature highlights — mobile: 2x2 + centered, desktop: row */}
          <div className="max-w-3xl mx-auto">
            {/* Mobile: 2x2 grid + centered last item */}
            <div className="sm:hidden grid grid-cols-2 gap-4">
              {[
                { icon: "ri-wifi-off-line", label: "Offline-First" },
                { icon: "ri-speed-line", label: "Sub-20ms Sync" },
                { icon: "ri-lock-line", label: "Encrypted Data" },
                { icon: "ri-smartphone-line", label: "PWA Ready" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 justify-center py-3 px-4 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                  <i className={`${item.icon} text-teal-300 text-sm`} />
                  <span className="text-[11px] font-semibold text-teal-200/70">{item.label}</span>
                </div>
              ))}
              <div className="col-span-2 flex justify-center">
                <div className="w-1/2 flex items-center gap-2 justify-center py-3 px-4 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                  <i className="ri-customer-service-2-line text-teal-300 text-sm" />
                  <span className="text-[11px] font-semibold text-teal-200/70">24/7 Support</span>
                </div>
              </div>
            </div>
            {/* Desktop: single row */}
            <div className="hidden sm:flex items-center justify-center gap-4">
              {[
                { icon: "ri-wifi-off-line", label: "Offline-First" },
                { icon: "ri-speed-line", label: "Sub-20ms Sync" },
                { icon: "ri-lock-line", label: "Encrypted Data" },
                { icon: "ri-smartphone-line", label: "PWA Ready" },
                { icon: "ri-customer-service-2-line", label: "24/7 Support" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 justify-center py-3 px-4 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                  <i className={`${item.icon} text-teal-300 text-sm`} />
                  <span className="text-[11px] font-semibold text-teal-200/70">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
