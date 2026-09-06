import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 sm:py-20 lg:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-8 md:mb-10">
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5">
              Frequently asked questions.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-lg mx-auto">
              Straightforward answers to the technical, operational, and clinical questions pharmacy leaders ask most.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const open = openIndex === i;
                return (
                  <div key={faq.question} className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open ? "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/30 dark:bg-emerald-950/30 shadow-sm" : "border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-800 hover:border-slate-300"}`}>
                    <motion.button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.5)" }}
                      className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                    >
                      <span className={`text-sm font-semibold transition-colors ${open ? "text-emerald-700 dark:text-emerald-300" : "text-slate-900 dark:text-white"}`}>{faq.question}</span>
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full shrink-0 transition-all duration-300 ${open ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300"}`}>
                        <i className={`ri-add-line text-xs transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
                      </span>
                    </motion.button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
                          <div className="px-5 sm:px-6 pb-5 pt-0">
                            <div className="pt-3 border-t border-emerald-100 dark:border-emerald-800/40/60">
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50">
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">Still have questions?</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Our team typically responds within 24 hours.</div>
                </div>
                <a href="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm">
                  <i className="ri-message-3-line text-emerald-200 text-xs" />
                  Contact us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
