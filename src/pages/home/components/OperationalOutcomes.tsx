import Reveal from "./Reveal";

export default function OperationalOutcomes() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-50/70 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Proven Performance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-4">
              Operational outcomes — <br />
              from teams currently using Klavora.
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Real metrics reported by hospital pharmacies, independent retail chains, and high-throughput dispensary networks.
            </p>
          </Reveal>
        </div>

        {/* Split Proof Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Big Stat Transformation Card */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="glass-panel-clean rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between border border-slate-200/90 shadow-md bg-white">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 mb-5">
                    Dispense &amp; Verification Cycle
                  </div>

                  <div className="flex items-baseline gap-2 sm:gap-3 mb-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-400 line-through decoration-slate-300">
                      3 min
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300">→</span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                      22 sec
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed mb-6 sm:mb-8">
                    Automated barcode cross-referencing and instant prescription parsing reduced average patient queue wait times by 88% across 40+ branch locations.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    KA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Dr. Kofi Appiah, PharmD</div>
                    <div className="text-[11px] text-slate-500">Chief Pharmacist · Apex Clinical Alliance</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Verified Customer Testimonial Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="glass-panel-clean rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between border border-slate-200/90 shadow-md bg-white">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Verified Health Network Deployment
                    </span>
                    
                    <div className="flex text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-sm sm:text-base lg:text-lg text-slate-800 font-medium leading-relaxed mb-5">
                    &ldquo;Klavora gave us absolute clarity over our multi-branch inventory. The automated FEFO routing alone saved us over GH₵120,000 in expired drug write-offs in our first two quarters.&rdquo;
                  </blockquote>

                  <div className="grid grid-cols-2 gap-3 mb-8 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400">Stock Waste Reduction</div>
                      <div className="font-bold text-slate-900 text-sm mt-0.5">74% Less Loss</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Daily Prescription Volume</div>
                      <div className="font-bold text-slate-900 text-sm mt-0.5">14,200+ Rx / day</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      SA
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Sarah Antwi</div>
                      <div className="text-[11px] text-slate-500">Director of Operations · CityMed Pharmacy Group</div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-400 font-mono">CityMed</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}


