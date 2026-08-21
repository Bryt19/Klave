import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section data-nav-theme="dark" className="relative py-20 sm:py-28 md:py-36 overflow-hidden dark-cta-mesh">
      {/* Background Ambient Fluid Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Klavora Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <svg width="360" height="360" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.065]">
          {/* Green vertical bar */}
          <rect x="128" y="40" width="64" height="240" rx="28" fill="#10b981"/>
          {/* Blue horizontal bar */}
          <rect x="40" y="128" width="240" height="64" rx="28" fill="#3b82f6"/>
          {/* Blend overlap */}
          <rect x="128" y="128" width="64" height="64" rx="0" fill="#0ea5e9" fillOpacity="0.85"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              <span>Get Started in Under 10 Minutes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
              Modernize pharmacy <br className="hidden sm:block" />
              operations with Klavora.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-emerald-100/80 font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
              Join leading health networks and dispensary teams running faster, safer, and completely synchronized clinical workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.klavora.com/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold bg-white text-blue-800 rounded-full hover:bg-slate-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200"
              >
                Book a personalized demo
                <i className="ri-arrow-right-line text-blue-700 text-xs" />
              </a>

              <a
                href="mailto:info.klavora@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Talk to sales
              </a>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-blue-300/60">
              <span className="flex items-center gap-1.5">
                <i className="ri-check-line text-blue-300 font-bold" /> Free 14-day assisted pilot
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-check-line text-blue-300 font-bold" /> Automated legacy CSV import
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-check-line text-blue-300 font-bold" /> No upfront hardware lock-in
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
