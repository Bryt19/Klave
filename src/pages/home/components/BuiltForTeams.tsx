import { motion } from "framer-motion";
import { builtForTeams } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function BuiltForTeams() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-white transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Engineered for Flow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-4">
              Built for the way pharmacy <br />
              teams actually work.
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Eliminate cognitive friction across dispensing, inventory reconciliation, and prescriber communication with dedicated surfaces.
            </p>
          </Reveal>
        </div>

        {/* ── Split Row 1: Unified Queue & Dispensary Surface ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          
          {/* Mockup Left */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="glass-panel-clean rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-200/80 bg-slate-50/50">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Multi-Station Dispensary Kanban</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <i className="ri-wifi-line text-emerald-600" />
                    <span>Live 4 Workstations Connected</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { column: "Intake (4)", items: ["RX-9488 · Amoxicillin", "RX-9489 · Metformin"] },
                    { column: "Verification (2)", items: ["RX-9482 · Lisinopril 20mg", "RX-9485 · Losartan"] },
                    { column: "Ready / Bagged (7)", items: ["RX-9479 · Omeprazole", "RX-9480 · Atorvastatin"] },
                  ].map((col, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                      <div className="text-[11px] font-bold text-slate-600 pb-1.5 border-b border-slate-100">
                        {col.column}
                      </div>
                      {col.items.map((item, i) => (
                        <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-800">
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Copy Right */}
          <div className="lg:col-span-5 text-left">
            <Reveal delay={0.1}>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Operational Velocity
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-4">
                A unified workflow for the entire dispensary team.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Connect cashiers, dispensing technicians, and supervising pharmacists in real time. Eliminate handwritten slips and shouted queue numbers.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Real-time station sync with sub-millisecond status updates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Configurable stage gating and dual-signoff enforcement</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Instant thermal label &amp; patient instruction slip routing</span>
                </li>
              </ul>
            </Reveal>
          </div>

        </div>

        {/* ── Split Row 2: Direct Health System Data Integration ──────────── */}
        <div id="integrations" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32 scroll-mt-24">
          
          {/* Copy Left */}
          <div className="lg:col-span-5 order-2 lg:order-1 text-left">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Interoperability &amp; Sync
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-4">
                Direct health system data at instant speed.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Ingest e-prescriptions directly from EHR networks and hospital management systems via modern FHIR / HL7 REST APIs with sub-20ms roundtrip latency.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Bi-directional synchronization with hospital EHRs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Real-time insurance eligibility checks and claim status</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Standardized FHIR R4 and HL7 e-prescribing payloads</span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Mockup Right */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={0.1}>
              <div className="glass-panel-clean rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-200/80 bg-white">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <i className="ri-exchange-line text-emerald-600 text-base" />
                    <span>EHR Data Pipeline &amp; Integration Hub</span>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Connected (18ms)
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { source: "Epic Health Systems", event: "eRx Inbound: Lisinopril 20mg", status: "Processed", time: "18ms" },
                    { source: "Cerner Millennium", event: "Patient Demographics Synced", status: "Verified", time: "24ms" },
                    { source: "National Insurance Gateway", event: "Prior Auth Approved (Claim #PA-902)", status: "Completed", time: "42ms" },
                  ].map((stream, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <div>
                          <div className="font-semibold text-slate-800">{stream.source}</div>
                          <div className="text-[11px] text-slate-500">{stream.event}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          {stream.status}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5 font-mono">{stream.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* ── Split Row 3: Decision Support Without Overload ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          
          {/* Mockup Left */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="glass-panel-clean rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-200/80 bg-slate-50/50">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <i className="ri-stethoscope-line text-emerald-600 text-base" />
                    <span>Clinical Profile &amp; Prescription History</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Auto-Flag Active</span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Patient: Eleanor Vance (PT-9482)</span>
                    <span className="text-slate-400 text-[11px]">Primary Prescriber: Dr. K. Appiah</span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-2.5">
                    <i className="ri-shield-star-line text-emerald-700 text-base shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-xs text-emerald-900">Adherence Score: 98% (High Adherence)</div>
                      <div className="text-[11px] text-emerald-800/80 mt-0.5">Last refill completed on schedule. No dosage alterations noted.</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400">Documented Allergies:</span>
                      <p className="font-semibold text-slate-800 mt-0.5">Penicillin G, Sulfa (Mild)</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400">Renal Function (eGFR):</span>
                      <p className="font-semibold text-slate-800 mt-0.5">92 mL/min (Normal Range)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Copy Right */}
          <div className="lg:col-span-5 text-left">
            <Reveal delay={0.1}>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Clinical Intelligence
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-4">
                Decision support without the cognitive overload.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Replace alert fatigue with contextual, prioritized recommendations that surface only when clinical thresholds require intervention.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Tiered alert severity suppresses nuisance notifications</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>Instant therapeutic alternative recommendations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-checkbox-circle-fill text-blue-500 text-base" />
                  <span>One-click clinical justification note templates</span>
                </li>
              </ul>
            </Reveal>
          </div>

        </div>

        {/* ── Section 5: Persona Cards (Built for modern healthcare teams) ── */}
        <div className="pt-16 border-t border-slate-200/80">
          <div className="max-w-2xl mb-12 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Tailored Experiences
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Built for modern healthcare teams.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {builtForTeams.map((role, idx) => (
              <Reveal key={role.title} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="subtle-card p-6 rounded-2xl h-full flex flex-col justify-between bg-white border border-slate-200/90"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center text-lg mb-5">
                      <i className={role.icon} />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {role.title}
                    </h4>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {role.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Impact</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/80">
                      {role.kpi}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
