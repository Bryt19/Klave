import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Dispensary Starter",
    badge: "Independent",
    description: "Essential POS, batch tracking, and offline dispensing for single-counter pharmacies.",
    priceMonthly: "GH\u20B5180",
    priceAnnual: "GH\u20B5144",
    highlight: false,
    cta: "Start Free Pilot",
    ctaLink: "https://app.klavora.com/signup",
    features: [
      "Point-of-Sale Counter Register",
      "FEFO Automated Batch Dispensing",
      "Offline Selling with Auto Cloud Sync",
      "Batch Expiry & Low Stock Alerts",
      "Standard Sales & Receipt Printing",
      "Up to 3 Staff Accounts",
      "Standard Email Support",
    ],
  },
  {
    name: "Clinical Pro",
    badge: "Most Popular",
    description: "Full clinical safety engine, OCR intake, telepharmacy verification, and live queue orchestration.",
    priceMonthly: "GH\u20B5250",
    priceAnnual: "GH\u20B5200",
    highlight: true,
    cta: "Get Started with Pro",
    ctaLink: "https://app.klavora.com/signup",
    features: [
      "Everything in Starter, plus:",
      "OCR Script Scanner (99.4% confidence)",
      "Drug Interaction Warning Engine",
      "Telepharmacy Sign-Off Console",
      "Multi-Station Live Kanban",
      "Cryptographic Audit Trail",
      "Unlimited Staff & Roles",
      "SMS & WhatsApp Pickup Alerts",
      "Priority 24/7 Support",
    ],
  },
  {
    name: "Health System",
    badge: "Enterprise",
    description: "Direct EHR integration, multi-warehouse routing, custom SLA, and clinical oversight.",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    highlight: false,
    cta: "Contact Enterprise",
    ctaLink: "mailto:info.klavora@gmail.com",
    features: [
      "Everything in Clinical Pro, plus:",
      "Bi-directional EHR Sync (FHIR/HL7)",
      "Multi-Location Inventory Routing",
      "Enterprise SSO (SAML/OAuth2)",
      "Custom Clinical Formulary Rules",
      "Dedicated Account Strategist",
      "99.99% SLA Uptime Guarantee",
      "On-Site Training & Data Migration",
    ],
  },
];

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

    // fast exponential ease-out — big initial burst, quick settle
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

function AnimatedPrice({ price, isAnnual }: { price: string; isAnnual: boolean }) {
  const numericStr = price.replace(/[^0-9]/g, "");
  const isCustom = price === "Custom" || numericStr === "";
  const targetNum = isCustom ? 0 : parseInt(numericStr, 10);
  const currency = isCustom ? "" : price.split(numericStr)[0];
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
            {isCustom ? price : `${currency}${counted}`}
          </span>
          {!isCustom && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12, duration: 0.3 }}
              className="ml-1.5 text-xs font-medium text-emerald-500"
            >/mo</motion.span>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-14 sm:py-20 lg:py-28 bg-slate-50/50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
            Predictable plans. <br />
            <span className="gradient-text-emerald">No hidden add-ons.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto mb-8">
            Start with our assisted 14-day free pilot. Scale from community pharmacies to nationwide hospital networks.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-100 border border-slate-200/60 text-xs font-semibold select-none">            <motion.button type="button" onClick={() => setIsAnnual(false)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                !isAnnual ? "bg-white text-slate-900 shadow-sm font-bold" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Monthly
            </motion.button>
            <motion.button type="button" onClick={() => setIsAnnual(true)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? "bg-emerald-950 text-white shadow-sm font-bold" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Annual</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isAnnual ? "bg-emerald-400 text-emerald-950" : "bg-emerald-100 text-emerald-700"
                }`}
              >
                Save 20%
              </span>
            </motion.button>
          </div>
        </Reveal>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-200 relative card-hover-glow ${
                  plan.highlight
                    ? "bg-white border-2 border-emerald-500 shadow-xl ring-2 sm:ring-4 ring-emerald-500/10"
                    : "bg-white border border-slate-200/90 shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold uppercase shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    {!plan.highlight && (
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{plan.description}</p>
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <AnimatedPrice price={isAnnual ? plan.priceAnnual : plan.priceMonthly} isAnnual={isAnnual} />
                    {plan.priceMonthly !== "Custom" && (
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
                            <span className="text-emerald-600 font-semibold">billed annually</span>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-emerald-50 text-[9px] font-bold text-emerald-700 border border-emerald-100">
                              Save {Math.round(((parseInt(plan.priceMonthly.replace(/[^0-9]/g, '')) - parseInt(plan.priceAnnual.replace(/[^0-9]/g, ''))) / parseInt(plan.priceMonthly.replace(/[^0-9]/g, ''))) * 100)}%
                            </span>
                          </span>
                        ) : (
                          <span>billed monthly</span>
                        )}
                      </motion.div>
                    )}
                  </div>
                  <div className="space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Included</div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
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
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className={`block w-full py-3 text-xs font-bold text-center rounded-full transition-all duration-200 ${
                      plan.highlight
                        ? "bg-emerald-950 hover:bg-emerald-900 text-white shadow-sm"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200"
                    }`}
                  >
                    {plan.cta}
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-14 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-emerald-800 font-medium">
            <span className="flex items-center gap-1.5">
              <i className="ri-shield-check-fill text-emerald-500" /> Free 14-day assisted trial
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-database-2-fill text-emerald-500" /> Automatic CSV import
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-customer-service-2-fill text-emerald-500" /> 24/7 pharmacist support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
