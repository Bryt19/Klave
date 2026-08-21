import { threeSystems } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function ThreeSystems() {
  return (
    <section id="three-systems" className="relative py-24 md:py-32 bg-white transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Headline & Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Unified Platform Flow</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.12] mb-5 sm:mb-6">
                Three systems, <br className="hidden sm:block" />
                one confident <br className="hidden sm:block" />
                <span className="text-slate-900">workflow.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md mb-6 sm:mb-8">
                From prescription intake to final dispensing, every step connects seamlessly. No double entry, no manual handoffs, and no gaps in clinical safety.
              </p>

              {/* Numbered Quick Navigation */}
              <div className="space-y-3 pt-4 border-t border-slate-100 hidden sm:block">
                {threeSystems.map((sys) => (
                  <div key={sys.number} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-mono text-[11px] flex items-center justify-center font-bold">
                      {sys.number}
                    </span>
                    <span>{sys.title}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column - 3 Fluid Mesh Stacked Cards */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-10">
            
            {/* Card 1: Prescription Intake & OCR */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl p-5 sm:p-8 organic-card-mesh border border-emerald-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-950 text-white text-[11px] sm:text-xs font-bold font-mono flex items-center justify-center">
                      1
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold text-slate-900">
                      Prescription Intake &amp; OCR
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200 w-fit">
                    99.4% OCR Confidence
                  </span>
                </div>

                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  Intelligent character recognition parses handwritten Rx and digital prescriptions into structured data ready for verification.
                </p>

                {/* Micro Mockup: OCR Parser */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-xs space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                    <div className="flex items-center gap-2 text-slate-800 font-semibold">
                      <i className="ri-file-search-line text-emerald-600" />
                      <span>Script Scan #OCR-2940</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">340ms</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-xs">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-slate-400">Patient</div>
                      <div className="font-semibold text-slate-800 truncate">Eleanor Vance</div>
                    </div>
                    <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-slate-400">Rx</div>
                      <div className="font-semibold text-slate-800 truncate">Lisinopril 20mg</div>
                    </div>
                    <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-slate-400">Prescriber</div>
                      <div className="font-semibold text-slate-800 truncate">Dr. K. Appiah</div>
                    </div>
                    <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-slate-400">Qty</div>
                      <div className="font-semibold text-slate-800 truncate">90 Tablets</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-check-line text-emerald-600 font-bold" /> Signature verified
                    </span>
                    <span className="text-emerald-700 font-medium cursor-pointer hover:underline hidden sm:inline">View scan →</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Dispensing & Inventory Sync */}
            <Reveal delay={0.2}>
              <div className="rounded-3xl p-5 sm:p-8 organic-emerald-card border border-emerald-200/80 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-950 text-white text-[11px] sm:text-xs font-bold font-mono flex items-center justify-center">
                      2
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold text-slate-900">
                      Dispensing &amp; Inventory Sync
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-600 text-white w-fit">
                    FEFO Automated
                  </span>
                </div>

                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  First-Expired, First-Out (FEFO) logic automatically routes stock from the nearest expiring batch, preventing dead stock.
                </p>

                {/* Micro Mockup: Batch Inventory */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-2.5 sm:p-4 border border-slate-200/80 shadow-xs space-y-1.5 sm:space-y-2.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Batch Allocation</span>
                    <span className="text-[10px] text-slate-400">Shelf B-04</span>
                  </div>

                  {[
                    { batch: "BT-8841-A", expiry: "Dec 2026", stock: "450", status: "Priority FEFO", highlight: true },
                    { batch: "BT-9204-B", expiry: "Aug 2027", stock: "1,200", status: "Secondary", highlight: false },
                  ].map((row) => (
                    <div
                      key={row.batch}
                      className={`p-2 sm:p-2.5 rounded-xl text-[11px] sm:text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 ${
                        row.highlight
                          ? "bg-emerald-50/90 border border-emerald-200 text-emerald-950 font-medium"
                          : "bg-slate-50 border border-slate-100 text-slate-600"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold">{row.batch}</span>
                        <span className="text-[10px] text-slate-400">Exp: {row.expiry}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 pl-5 sm:pl-0">
                        <span className="text-[11px]">{row.stock} units</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${row.highlight ? "bg-emerald-200 text-emerald-900" : "bg-slate-200 text-slate-700"}`}>
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Card 3: Telepharmacy & Clinical Sign-Off */}
            <Reveal delay={0.3}>
              <div className="rounded-3xl p-5 sm:p-8 organic-card-mesh border border-emerald-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-950 text-white text-[11px] sm:text-xs font-bold font-mono flex items-center justify-center">
                      3
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold text-slate-900">
                      Telepharmacy &amp; Verification
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-900 text-white w-fit">
                    Audit-Ready Logs
                  </span>
                </div>

                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  Supervising pharmacists complete dual-factor verification, trigger label printing, and generate permanent compliance records.
                </p>

                {/* Micro Mockup: Verification Modal */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-2.5 sm:p-4 border border-slate-200/80 shadow-xs space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
                        Rx
                      </div>
                      <span className="font-semibold text-slate-800">Verification Console</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                      All Clear
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-slate-700">
                      <i className="ri-checkbox-circle-fill text-emerald-600 text-xs" />
                      <span>Allergy Check</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-slate-700">
                      <i className="ri-checkbox-circle-fill text-emerald-600 text-xs" />
                      <span>Dosage Safety</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-slate-700">
                      <i className="ri-checkbox-circle-fill text-emerald-600 text-xs" />
                      <span>Label Queued</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-[10px] text-slate-400 font-mono">Hash: 8f9b...a12c</span>
                    <button className="px-3 py-1.5 sm:py-1 bg-emerald-950 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors shadow-xs">
                      Sign &amp; Release
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}


