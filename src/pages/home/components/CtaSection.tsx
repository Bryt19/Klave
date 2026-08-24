import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section  className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Premium deep emerald background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#021a12] to-slate-950" />

      {/* Subtle emerald radial glows */}
      <div className="absolute inset-0 opacity-100" style={{
        backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,185,129,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(52,211,153,0.06) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 85% 20%, rgba(5,150,105,0.08) 0%, transparent 50%)",
      }} />

      {/* Subtle noise */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Animated shimmer band */}
      <div className="absolute inset-0 cta-shimmer pointer-events-none" />

      {/* Fine grid texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Ambient floating glow orbs */}
      <div className="absolute top-1/4 left-[15%] w-[350px] h-[250px] rounded-full bg-emerald-500/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[280px] h-[200px] rounded-full bg-teal-400/[0.04] blur-[100px] pointer-events-none" />
      {/* Top edge glow — smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Your pharmacy <br className="hidden sm:block" />
            deserves better tools.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-emerald-100/70 font-normal leading-relaxed max-w-xl mx-auto mb-10">
            Join leading pharmacy networks running faster, safer, and more profitable operations with Klavora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="https://app.klavora.com/signup"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold bg-white text-emerald-900 rounded-full hover:bg-emerald-50 transition-colors duration-200 shadow-xl shadow-black/10 cta-ripple"
            >
              Get Started Free
              <i className="ri-arrow-right-line text-emerald-600" />
            </motion.a>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-white/25 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Talk to Sales
            </Link>
            </motion.div>
          </div>

          {/* Trust items */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-emerald-200/60 mb-12">
            <span className="flex items-center gap-1.5">
              <i className="ri-check-line text-emerald-300 font-bold" /> Free 14-day assisted pilot
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-check-line text-emerald-300 font-bold" /> Automated legacy CSV import
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-check-line text-emerald-300 font-bold" /> No hardware lock-in
            </span>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "ri-shield-check-line", label: "HIPAA Compliant" },
              { icon: "ri-wifi-off-line", label: "Offline-First" },
              { icon: "ri-speed-line", label: "Sub-20ms Sync" },
              { icon: "ri-customer-service-2-line", label: "24/7 Support" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 justify-center py-3 px-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <i className={`${item.icon} text-emerald-300/60 text-sm`} />
                <span className="text-[11px] font-medium text-emerald-200/50">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
