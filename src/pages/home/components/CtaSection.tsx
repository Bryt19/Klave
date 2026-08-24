import { ArrowRight, CheckCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section data-nav-theme="dark" id="contact" className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-[#030712]">
      {/* Background Ambient Fluid Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/[0.12] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/20 pointer-events-none" />

      {/* Klavora Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <svg width="360" height="360" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.05]">
          <rect x="128" y="40" width="64" height="240" rx="28" fill="#10b981"/>
          <rect x="40" y="128" width="240" height="64" rx="28" fill="#3b82f6"/>
          <rect x="128" y="128" width="64" height="64" rx="0" fill="#0ea5e9" fillOpacity="0.85"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Get Started in Under 10 Minutes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
              Transform the way your{" "}
              <br className="hidden sm:block" />
              pharmacy <span className="text-emerald-400">operates.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
              Join leading health networks and dispensary teams running faster, safer, and completely synchronized clinical workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.klavora.com/signup"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30"
              >
                Get Started Free
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <a
                href="mailto:info.klavora@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Free 14-day assisted pilot
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Automated legacy CSV import
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> No upfront hardware lock-in
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
