import { howItWorksSteps } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28 bg-background-100/40"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center rounded-lg bg-background-100 border border-background-200/30">
            <i className="ri-road-map-line text-lg text-primary-400" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-50 tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-sm md:text-base text-foreground-500 max-w-lg mx-auto leading-relaxed">
            Getting your pharmacy on Klavora takes minutes, not weeks. No
            training manuals, no hardware to install.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {howItWorksSteps.map((step: typeof howItWorksSteps[number], i: number) => (
            <Reveal key={step.title} delay={i * 0.12} className="h-full">
              <div className="relative p-6 md:p-8 rounded-xl border border-background-200/20 bg-background-50/40 hover:border-primary-400/40 transition-all duration-300 h-full">
                {/* Connector line */}
                <span className="absolute top-8 left-6 w-px h-16 bg-background-200/20 hidden md:block" />

                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary-500/15 flex items-center justify-center">
                    <i className={`${step.icon} text-primary-400 text-xl`} />
                  </div>
                  <span className="text-[11px] text-foreground-600 uppercase tracking-wider">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}