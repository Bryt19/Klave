import { marqueePharmacies } from "@/mocks/homeContent";

export default function Marquee() {
  const items = [...marqueePharmacies, ...marqueePharmacies, ...marqueePharmacies];

  return (
    <section className="relative py-10 bg-white overflow-hidden border-y border-slate-100/80">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/30 via-transparent to-emerald-50/30 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-slate-400">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-slate-200" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">
            Trusted by leading pharmacy networks across West Africa
          </p>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-slate-200" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="flex gap-3 marquee-scroll-left" style={{ width: "max-content" }}>
            {items.map((name, i) => (
              <div
                key={`marquee-${name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-emerald-200 hover:shadow-emerald-100/40 transition-all duration-200 whitespace-nowrap group"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <i className="ri-checkbox-circle-fill text-emerald-400 text-[10px]" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
