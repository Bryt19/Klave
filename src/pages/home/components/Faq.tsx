import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
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
              <HelpCircle className="w-3 h-3" />
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
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      open
                        ? "border-emerald-300/60 bg-white shadow-lg shadow-emerald-950/[0.03]"
                        : "border-slate-200/70 bg-white/80 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left group"
                    >
                      <span className={`text-sm font-semibold transition-colors duration-200 ${
                        open ? "text-emerald-900" : "text-slate-900 group-hover:text-slate-700"
                      }`}>
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 flex items-center justify-center rounded-full shrink-0 transition-all duration-300 ${
                          open
                            ? "bg-emerald-950 text-white rotate-0"
                            : "bg-slate-100 text-slate-600 rotate-0 group-hover:bg-slate-200"
                        }`}
                      >
                        <Plus className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 pb-5">
                            <div className="pt-3 border-t border-slate-100">
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {faq.answer}
                              </p>
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

        </div>
      </div>
    </section>
  );
}
