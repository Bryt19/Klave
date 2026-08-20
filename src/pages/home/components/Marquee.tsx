import { marqueePharmacies } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function Marquee() {
  const items = [...marqueePharmacies, ...marqueePharmacies];

  return (
    <section className="relative py-14 md:py-16 bg-background-50 overflow-hidden border-y border-background-200/10">
      <Reveal className="w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <p className="text-center text-[11px] md:text-xs text-foreground-600 uppercase tracking-widest">
          Trusted by pharmacies across Ghana
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="marquee-track flex w-max gap-4 md:gap-6">
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 px-5 md:px-6 py-3 rounded-full border border-background-200/20 bg-background-100/60 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              <span className="text-sm text-foreground-100 font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}