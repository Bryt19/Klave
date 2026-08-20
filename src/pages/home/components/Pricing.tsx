import { pricingFeatures } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center rounded-lg bg-background-100 border border-background-200/30">
            <i className="ri-price-tag-3-line text-lg text-primary-400" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-50 tracking-tight mb-4">
            Simple Pricing. No Surprises.
          </h2>
          <p className="text-sm md:text-base text-foreground-500 max-w-lg mx-auto leading-relaxed">
            Everything Klavora offers in one plan. No feature gates, no hidden
            fees.
          </p>
        </Reveal>

        {/* Single pricing card */}
        <Reveal delay={0.1} className="max-w-md mx-auto">
          <div className="rounded-2xl border border-background-200/20 bg-background-100/40 overflow-hidden">
            {/* Card header */}
            <div className="p-6 md:p-8 border-b border-background-200/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-foreground-50">
                  Klavora Pro
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-primary-500/15 text-primary-300 text-xs font-medium">
                  One plan
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-semibold text-foreground-50 tracking-tight">
                  GH₵250
                </span>
                <span className="text-sm text-foreground-500">/ month</span>
              </div>
              <p className="text-xs text-foreground-600">
                Billed monthly. Cancel any time.
              </p>
            </div>

            {/* Features */}
            <div className="p-6 md:p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {pricingFeatures.map((feature: string) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground-300"
                  >
                    <i className="ri-check-line text-primary-400 text-base mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.klavora.com/signup"
                className="block w-full py-3 text-sm font-semibold text-center bg-primary-500 text-background-50 rounded-md hover:bg-primary-400 transition-colors duration-200 whitespace-nowrap"
              >
                Get Started
              </a>
              <p className="text-xs text-foreground-600 mt-4 text-center">
                Currently free for our first 5 founding pharmacies. Claim your
                spot above.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}