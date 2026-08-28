import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const plan = {
  name: "Klavora One",
  description:
    "Everything your pharmacy needs — POS, clinical safety, inventory, and compliance — in one plan. No tiers, no add-ons.",
  priceMonthly: "GH\u20B5250",
  priceAnnual: "GH\u20B5200",
  cta: "Start Free Trial",
  ctaLink: "https://app.klavora.com/signup",
  features: [
    "Point-of-Sale Counter Register",
    "FEFO Automated Batch Dispensing",
    "Offline Selling with Auto Cloud Sync",
    "Batch Expiry & Low Stock Alerts",
    "Standard Sales & Receipt Printing",
    "OCR Script Scanner (99.4% confidence)",
    "Drug Interaction Warning Engine",
    "Telepharmacy Sign-Off Console",
    "Multi-Station Live Kanban",
    "Cryptographic Audit Trail",
    "Unlimited Staff & Roles",
    "SMS & WhatsApp Pickup Alerts",
    "Priority 24/7 Support",
  ],
};

function useCountUp(target: number, duration = 350) {
  const [value, setValue] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const from = prevRef.current;
    const to = target;
    if (from === to) return;

    const start = performance.now();
    const diff = to - from;

    const ease = (t: number) => 1 - Math.pow(4, -8 * t);

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(from + diff * ease(progress)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        prevRef.current = to;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

function AnimatedPrice({
  price,
  isAnnual,
}: {
  price: string;
  isAnnual: boolean;
}) {
  const numericStr = price.replace(/[^0-9]/g, "");
  const targetNum = parseInt(numericStr, 10);
  const currency = price.split(numericStr)[0];
  const counted = useCountUp(targetNum, 350);

  return (
    <div className="relative h-[3rem] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={isAnnual ? "annual" : "monthly"}
          initial={{ y: 12, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -12, opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-baseline"
        >
          <span className="text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
            {currency}
            {counted}
          </span>
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.3 }}
            className="ml-1.5 text-xs font-medium text-emerald-500"
          >
            /mo
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="relative py-14 sm:py-20 lg:py-28 bg-slate-50/50 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
            One plan. <br />
            <span className="gradient-text-emerald">Everything included.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto mb-8">
            Start with our 30-day free trial. No tiers, no add-ons — just one
            powerful plan built for pharmacies of every size.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-100 border border-slate-200/60 text-xs font-semibold select-none">
            <motion.button
              type="button"
              onClick={() => setIsAnnual(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                !isAnnual
                  ? "bg-white text-slate-900 shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Monthly
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setIsAnnual(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                isAnnual
                  ? "bg-emerald-950 text-white shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Annual</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isAnnual
                    ? "bg-emerald-400 text-emerald-950"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                Save 20%
              </span>
            </motion.button>
          </div>
        </Reveal>

        {/* Single plan card */}
        <div className="max-w-xl mx-auto">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white border-2 border-emerald-500 shadow-xl ring-2 sm:ring-4 ring-emerald-500/10 relative card-hover-glow"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-white text-[11px] font-bold shadow-md">
                  <i className="ri-star-fill text-emerald-400 text-[10px]" />
                  Everything Included
                </span>
              </div>

              <div className="mt-2">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {plan.description}
                </p>
                <div className="pb-6 mb-6 border-b border-slate-100">
                  <AnimatedPrice
                    price={isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    isAnnual={isAnnual}
                  />
                  <motion.div
                    key={isAnnual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-xs font-medium text-slate-500 mt-0.5"
                  >
                    {isAnnual ? (
                      <span className="flex items-center gap-1.5">
                        <span>per month</span>
                        <span className="text-emerald-600 font-semibold">
                          billed annually
                        </span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-emerald-50 text-[9px] font-bold text-emerald-700 border border-emerald-100">
                          Save 20%
                        </span>
                      </span>
                    ) : (
                      <span>billed monthly</span>
                    )}
                  </motion.div>
                </div>
                <div className="space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Everything Included
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-700"
                      >
                        <i className="ri-checkbox-circle-fill text-emerald-500 text-sm shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <motion.a
                  href={plan.ctaLink}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 text-xs font-bold text-center rounded-full transition-all duration-200 bg-emerald-950 hover:bg-emerald-900 text-white shadow-sm"
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Trust banner */}
        <div className="mt-14 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-emerald-800 font-medium">
            <span className="flex items-center gap-1.5">
              <i className="ri-shield-check-fill text-emerald-500" /> Free
              30-day trial
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-database-2-fill text-emerald-500" /> Automatic
              CSV import
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-customer-service-2-fill text-emerald-500" /> 24/7
              pharmacist support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
