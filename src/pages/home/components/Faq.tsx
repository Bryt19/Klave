import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, type Faq } from "@/mocks/homeContent";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <Reveal className="text-center mb-12 md:mb-14">
            <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center rounded-lg bg-background-100 border border-background-200/30">
              <i className="ri-question-answer-line text-lg text-primary-400" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-50 tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-sm md:text-base text-foreground-500 max-w-lg mx-auto leading-relaxed">
              Straight answers to the questions pharmacy owners ask us most.
            </p>
          </Reveal>

          {/* Accordion */}
          <Reveal delay={0.1}>
          <div className="space-y-3">
            {faqs.map((faq: Faq, i: number) => {
              const open = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`rounded-xl border transition-colors duration-300 overflow-hidden ${
                    open
                      ? "border-primary-400/40 bg-background-100/50"
                      : "border-background-200/20 bg-background-100/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm md:text-base font-medium text-foreground-100">
                      {faq.question}
                    </span>
                    <span
                      className={`w-6 h-6 flex items-center justify-center rounded-full shrink-0 transition-colors ${
                        open ? "bg-primary-500 text-background-50" : "bg-background-200/30 text-foreground-400"
                      }`}
                    >
                      <i
                        className={`ri-add-line text-sm transition-transform duration-300 ${
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
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-5 pb-5 text-sm text-foreground-500 leading-relaxed">
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