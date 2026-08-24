import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const contactMethods = [
  { icon: "ri-mail-line", label: "Email", value: "info.klavora@gmail.com", href: "mailto:info.klavora@gmail.com" },
  { icon: "ri-phone-line", label: "Phone", value: "+233 24 123 4567", href: "tel:+233241234567" },
  { icon: "ri-map-pin-line", label: "Office", value: "Accra, Ghana", href: "#" },
  { icon: "ri-time-line", label: "Response", value: "Within 24 hours", href: "#" },
];

const fast = { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };
const stagger = (i: number) => ({ ...fast, delay: i * 0.05 });

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={stagger(0)}>
            <Link to="/" className="flex items-center gap-2.5 group">
              <svg className="w-7 h-7 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
                <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
                <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
                <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
              </svg>
              <span className="text-lg font-bold tracking-tight text-slate-900">Klavora<span className="text-emerald-500">.</span></span>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={stagger(1)}>
            <Link to="/" className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors">
              <i className="ri-arrow-left-line" /> Back
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={stagger(0)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-semibold mb-5"
          >
            <i className="ri-customer-service-2-line text-emerald-500" />
            <span>Get in Touch</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={stagger(1)}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Talk to our team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={stagger(2)}
            className="text-sm text-slate-500 leading-relaxed max-w-lg"
          >
            Have a question about Klavora, need a demo for your pharmacy, or want to discuss enterprise solutions? We&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={stagger(3)} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }} className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...fast, delay: 0.1, type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"
                  >
                    <i className="ri-check-line text-emerald-600 text-2xl" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Message sent!</h3>
                  <p className="text-sm text-slate-600 mb-4">We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">Send another message</button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={stagger(4)}>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
                      <input type="text" required placeholder="Dr. Kofi Appiah"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 hover:border-slate-300" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={stagger(5)}>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email</label>
                      <input type="email" required placeholder="you@pharmacy.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 hover:border-slate-300" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={stagger(6)}>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Pharmacy Name</label>
                    <input type="text" placeholder="Apex Clinical Pharmacy"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 hover:border-slate-300" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={stagger(7)}>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 bg-white hover:border-slate-300">
                      <option>Demo Request</option>
                      <option>Enterprise Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>General Question</option>
                    </select>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={stagger(8)}>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message</label>
                    <textarea rows={4} required placeholder="Tell us about your pharmacy and what you are looking for..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 resize-none hover:border-slate-300" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={stagger(9)}>
                    <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-500/20"
                    >
                      Send Message
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={stagger(4)} className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method, i) => (
                  <motion.a key={method.label} href={method.href}
                    initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={stagger(5 + i)}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:scale-105 transition-all duration-200">
                      <i className={`${method.icon} text-emerald-600 text-sm`} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{method.label}</div>
                      <div className="text-xs font-semibold text-slate-700">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={stagger(9)}
              className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:border-emerald-200 transition-colors duration-200"
            >
              <h3 className="text-sm font-bold text-slate-900 mb-2">Enterprise?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">Need multi-branch deployment, custom EHR integration, or a dedicated account team?</p>
              <a href="mailto:info.klavora@gmail.com" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">Contact Enterprise Sales &rarr;</a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>&copy; {new Date().getFullYear()} Klavora (EliTech CreaTives Limited). All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms</Link>
            <Link to="/hipaa" className="hover:text-slate-600 transition-colors">HIPAA</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
