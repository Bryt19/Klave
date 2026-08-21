import { motion } from "framer-motion";
import { everyLayerFeatures } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function EveryLayer() {
  return (
    <section id="features" className="relative py-16 sm:py-24 md:py-32 bg-slate-50/50 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Full Stack Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-4">
              Every layer of pharmacy <br />
              operations — in one platform.
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              From the counter to the stockroom to executive oversight, Klavora delivers purpose-built tools for modern health systems.
            </p>
          </Reveal>
        </div>

        {/* 8-Card Grid — alternating green & blue themes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {everyLayerFeatures.map((feature, i) => {
            const isGreen = i % 2 === 0;
            return (
              <Reveal key={feature.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="subtle-card p-6 rounded-2xl h-full flex flex-col justify-between bg-white border border-slate-200/80"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg transition-colors ${
                      isGreen
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                        : "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                    }`}>
                      <i className={feature.icon} />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold ${
                    isGreen ? "text-emerald-600" : "text-blue-600"
                  }`}>
                    <span>Learn more</span>
                    <i className="ri-arrow-right-s-line text-xs ml-0.5" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}


