import { marqueePharmacies } from "@/mocks/homeContent";

export default function Marquee() {
  // Triple the items so the infinite loop is seamless at all screen sizes
  const items = [...marqueePharmacies, ...marqueePharmacies, ...marqueePharmacies];

  return (
    <section className="relative py-10 bg-white overflow-hidden border-y border-slate-100/80">
      {/* Label */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
          Trusted by leading hospital networks and high-throughput pharmacies
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track — two rows in opposite directions */}
        <div className="flex flex-col gap-3 overflow-hidden">
          {/* Row 1 → left */}
          <div className="flex gap-3 marquee-scroll-left" style={{ width: "max-content" }}>
            {items.map((name, i) => (
              <div
                key={`row1-${name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200/80 bg-slate-50/70 whitespace-nowrap shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate-700">{name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 → right (reverse) */}
          <div className="flex gap-3 marquee-scroll-right" style={{ width: "max-content" }}>
            {[...items].reverse().map((name, i) => (
              <div
                key={`row2-${name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200/80 bg-slate-50/50 whitespace-nowrap shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
                <span className="text-xs font-medium text-slate-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}