import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Dispensary Starter",
    badge: "Independent Counters",
    description: "Essential POS terminal, batch tracking, and offline dispensing for single-counter pharmacies.",
    priceMonthly: "GH₵180",
    priceAnnual: "GH₵144",
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
    priceMonthly: "GH₵250",
    priceAnnual: "GH₵200",
    highlight: true,
    cta: "Get Started with Pro",
    ctaLink: "https://app.klavora.com/signup",
    features: [
      "Everything in Starter, plus:",
      "OCR Script Scanner & Parser (99.4% confidence)",
      "Real-Time Drug Interaction Warning Engine",
      "Telepharmacy Pharmacist Sign-Off Console",
      "Multi-Station Live Dispensary Kanban",
      "Cryptographic Immutable Audit Trail",
      "Unlimited Staff Accounts & Roles",
      "Automated SMS & WhatsApp Pickup Alerts",
      "Priority 24/7 Support & Fast Onboarding",
    ],
  },
  {
    name: "Health System Enterprise",
    badge: "Multi-Branch & Networks",
    description: "Direct EHR integration, multi-warehouse routing, custom SLA, and clinical consortium oversight.",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    highlight: false,
    cta: "Contact Enterprise Team",
    ctaLink: "mailto:info.klavora@gmail.com",
    features: [
      "Everything in Clinical Pro, plus:",
      "Bi-directional EHR Sync (FHIR R4 / HL7 REST)",
      "Multi-Location & Warehouse Inventory Routing",
      "Enterprise Single Sign-On (SAML / OAuth2)",
      "Custom Clinical Formulary & Rule Configuration",
      "Dedicated Clinical Account Strategist",
      "99.99% Guaranteed SLA Uptime",
      "Custom On-Site Training & Data Migration",
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-slate-50/50 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-4">
            Predictable Plans. <br />
            No Hidden Add-Ons.
          </h2>

          <p className="text-base text-slate-600 font-normal leading-relaxed max-w-lg mx-auto mb-8">
            Start with our assisted 14-day free pilot. Scale seamlessly from community pharmacies to nationwide hospital networks.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-200/60 border border-slate-300/60 text-xs font-semibold select-none">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                !isAnnual
                  ? "bg-white text-slate-900 shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>

            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isAnnual
                  ? "bg-emerald-950 text-white shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                isAnnual ? "bg-emerald-400 text-emerald-950" : "bg-emerald-100 text-emerald-800"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </Reveal>

        {/* 3 Tiered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 h-full flex flex-col justify-between transition-all duration-200 relative ${
                  plan.highlight
                    ? "bg-white border-2 border-emerald-600 shadow-xl shadow-emerald-950/5 ring-2 sm:ring-4 ring-emerald-500/10"
                    : "subtle-card bg-white border border-slate-200/90 shadow-md"
                }`}
              >
                {/* Top Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold tracking-wide uppercase shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    {!plan.highlight && (
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      {plan.priceMonthly !== "Custom" && (
                        <span className="text-xs font-medium text-slate-500">
                          / month {isAnnual ? "(billed annually)" : ""}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included Capabilities
                    </div>

                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-700"
                        >
                          <i className="ri-checkbox-circle-fill text-emerald-600 text-sm shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <a
                    href={plan.ctaLink}
                    className={`block w-full py-3 text-xs font-bold text-center rounded-full transition-all duration-200 shadow-sm ${
                      plan.highlight
                        ? "bg-emerald-950 hover:bg-emerald-900 text-white shadow-emerald-950/20"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Pilot Assurance Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-900 font-medium">
            <span className="flex items-center gap-1.5">
              <i className="ri-shield-check-fill text-emerald-600 text-base" /> Free 14-day assisted trial
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-database-2-fill text-emerald-600 text-base" /> Automatic CSV drug list import
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-customer-service-2-fill text-emerald-600 text-base" /> 24/7 dedicated pharmacist support
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
