import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Dr. Kofi Appiah",
    role: "Chief Pharmacist",
    company: "Apex Clinical Alliance",
    avatar: "KA",
    quote: "Klavora gave us absolute clarity over our multi-branch inventory. The automated FEFO routing alone saved us over GH₵120,000 in expired drug write-offs in our first two quarters.",
    metric: "74% Less Stock Waste",
  },
  {
    name: "Sarah Antwi",
    role: "Director of Operations",
    company: "CityMed Pharmacy Group",
    avatar: "SA",
    quote: "We process over 14,000 prescriptions daily. Before Klavora, that meant chaos. Now it means precision. The clinical safety engine catches things humans miss under pressure.",
    metric: "14,200+ Rx/day",
  },
  {
    name: "Dr. Emmanuel Mensah",
    role: "Clinical Lead",
    company: "HealthCare Alliance",
    avatar: "EM",
    quote: "The drug interaction alerts have prevented at least three critical contraindications in the last month alone. The ROI on patient safety is immeasurable.",
    metric: "3 Critical Alerts Saved",
  },
  {
    name: "Nana Ama Owusu",
    role: "Pharmacy Owner",
    company: "QuickCure Networks",
    avatar: "NO",
    quote: "Setup was incredibly fast. Within a day, our entire inventory was live with batch tracking. The offline mode has been a game-changer for our rural branches.",
    metric: "Same-Day Setup",
  },
];

const avatarColors = [
  "bg-emerald-600",
  "bg-slate-900",
  "bg-blue-600",
  "bg-violet-600",
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-white transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-medium mb-6">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Trusted by Leaders</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-4">
              What pharmacy leaders say <br />
              <span className="text-emerald-600">about Klavora.</span>
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Real feedback from pharmacists, operations leaders, and clinical leads who transformed their workflows with Klavora.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="group relative rounded-2xl p-6 bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 h-full flex flex-col overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-emerald-50/0 group-hover:from-amber-50/20 group-hover:to-emerald-50/10 transition-all duration-500 rounded-2xl pointer-events-none" />

                {/* Stars */}
                <div className="relative flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-5">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 text-slate-200 group-hover:text-amber-200 transition-colors duration-300" />
                  <p className="text-[13px] text-slate-600 leading-relaxed pl-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Metric */}
                <div className="relative p-3 rounded-xl bg-slate-50 border border-slate-100 mb-5 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-all duration-300">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium mb-0.5 group-hover:text-emerald-600 transition-colors">
                    Key Impact
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">{t.metric}</div>
                </div>

                {/* Author */}
                <div className="relative flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-9 h-9 rounded-full ${avatarColors[i]} text-white font-bold text-[11px] flex items-center justify-center shrink-0 ring-2 ring-white group-hover:ring-emerald-100 transition-all`}>
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">{t.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
