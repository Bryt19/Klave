import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function ClinicalWorkflows() {
  return (
    <section data-nav-theme="dark" id="solutions" className="relative py-14 sm:py-20 md:py-24 overflow-hidden dark-radar-section">
      {/* Animated Concentric Radar Pulse Rings */}
      <div className="absolute inset-0 radar-rings radar-animate opacity-75 pointer-events-none" />

      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Klavora Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.07]">
          {/* Green vertical bar */}
          <rect x="128" y="40" width="64" height="240" rx="28" fill="#10b981"/>
          {/* Blue horizontal bar */}
          <rect x="40" y="128" width="240" height="64" rx="28" fill="#3b82f6"/>
          {/* Blend overlap */}
          <rect x="128" y="128" width="64" height="64" rx="0" fill="#0ea5e9" fillOpacity="0.85"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Clinical Decision Support</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.12] mb-4">
              Clinical workflows require <br className="hidden sm:block" />
              more than tables and alerts.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300/80 font-normal leading-relaxed max-w-xl mx-auto">
              Automated multi-point screening flags severe drug interactions, duplicate therapies, and dosage boundary violations before prescriptions leave the dispensary.
            </p>
          </Reveal>
        </div>

        {/* Centerpiece Floating Interactive Clinical Safety Modal */}
        <Reveal delay={0.2}>
          <div className="max-w-xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-panel-dark rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl relative overflow-hidden"
            >
              {/* Top Warning Banner */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-200 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                    <i className="ri-error-warning-fill text-sm" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-red-100 flex items-center gap-2">
                      <span>Severe Drug-Drug Interaction Detected</span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.2 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                        High Risk
                      </span>
                    </div>
                    <div className="text-[11px] text-red-200/80 mt-0.5">
                      Warfarin 5mg + Clarithromycin 500mg (Potential 3.4x INR Elevation)
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Clinical Profile Snippet */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 mb-4 space-y-2">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-emerald-900/50">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Patient Profile: Marcus Sterling (Age 58)</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">ID: PT-4819</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400">Active Regimen</span>
                    <p className="text-slate-200 font-medium mt-0.5">Warfarin 5mg QD (Anticoagulant)</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400">Incoming Order</span>
                    <p className="text-slate-200 font-medium mt-0.5">Clarithromycin 500mg BID</p>
                  </div>
                </div>
              </div>

              {/* Recommended Clinical Interventions */}
              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  Recommended Clinical Actions
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <button className="p-2.5 rounded-xl bg-emerald-900/40 hover:bg-emerald-900/70 border border-emerald-700/50 text-left text-white transition-all flex items-start justify-between group">
                    <div>
                      <div className="font-semibold text-emerald-300 group-hover:text-white">Switch to Azithromycin</div>
                      <div className="text-[10px] text-slate-300 mt-0.5">Low CYP3A4 inhibition profile</div>
                    </div>
                    <i className="ri-arrow-right-line text-emerald-400 text-xs mt-1" />
                  </button>

                  <button className="p-2.5 rounded-xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-700/50 text-left text-white transition-all flex items-start justify-between group">
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-white">Dose Adjust &amp; Monitor</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Order 48h PT/INR draw</div>
                    </div>
                    <i className="ri-arrow-right-line text-slate-400 text-xs mt-1" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 border-t border-emerald-900/50">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <i className="ri-shield-check-line text-emerald-400" />
                  <span>Clinical decision recorded in audit log</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 transition-colors">
                    Approve with Alternative
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
