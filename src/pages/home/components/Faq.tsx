import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24 md:py-32 bg-slate-50/50 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <Reveal className="text-center mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Questions &amp; Answers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-4">
              Frequently asked questions.
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-lg mx-auto">
              Straightforward answers to the technical, operational, and clinical questions pharmacy leaders ask most.
            </p>
          </Reveal>

          {/* Accordion */}
          <Reveal delay={0.1}>
            <div className="space-y-3">
              {faqs.map((faq, i: number) => {
                const open = openIndex === i;
                return (
                  <div
                    key={faq.question}
                    className={`subtle-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                      open
                        ? "border-emerald-500/40 bg-white ring-1 ring-emerald-500/20"
                        : "border-slate-200/70 bg-white/80 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left"
                    >
                      <span className="text-sm font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      <span
                        className={`w-6 h-6 flex items-center justify-center rounded-full shrink-0 transition-colors ${
                          open
                            ? "bg-emerald-950 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <i
                          className={`ri-add-line text-xs transition-transform duration-300 ${
                            open ? "rotate-45" : ""
                          }`}
                        />
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
