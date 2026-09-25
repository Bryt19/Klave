import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const footerProduct = [
  { label: "Features", href: "/features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Security", href: "/security" },
];
const footerCompany = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
const footerResources = [
  { label: "Documentation", href: "/docs" },
  { label: "API Overview", href: "/api" },
  { label: "Architecture", href: "/architecture" },
  { label: "Changelog", href: "/changelog" },
  { label: "Glossary", href: "/glossary" },
];
const footerLegal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const copyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("020 360 4957");
    showToast("Phone number copied to clipboard!");
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 20, x: "-50%" }}
              className="fixed bottom-6 left-1/2 z-[100] px-4 py-3 rounded-xl bg-emerald-900 border border-emerald-500/50 shadow-2xl flex items-center gap-3 min-w-[300px]"
            >
              <i className="ri-check-line text-emerald-400 text-lg" />
              <span className="text-sm font-medium text-emerald-50">{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter / CTA bar */}
        <div className="pt-14 sm:pt-16 pb-10 sm:pb-12 border-b border-white/[0.06]">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Card background */}
            <div className="absolute inset-0 bg-slate-900/80" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />

            <div className="relative px-6 sm:px-10 py-8 sm:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Left: copy */}
                <div className="lg:col-span-5 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                    Never miss an update.
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Join 2,000+ pharmacy leaders getting monthly insights on inventory intelligence, dispensing trends, and platform updates.
                  </p>
                </div>

                {/* Right: form */}
                <div className="lg:col-span-7">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-sm" />
                      <input type="email" placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all" />
                    </div>
                    <button
                      disabled={!isValidEmail}
                      onClick={() => {
                        showToast("Thank you for subscribing! 🎉");
                        setEmail("");
                      }}
                      className="shrink-0 px-7 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-400 text-slate-900 dark:text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-50 dark:disabled:hover:bg-emerald-900/30 disabled:hover:shadow-emerald-500/20 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      Subscribe
                      <i className="ri-arrow-right-line text-xs group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-3 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5"><i className="ri-shield-check-line text-emerald-400/60" /> No spam, ever</span>
                    <span className="flex items-center gap-1.5"><i className="ri-time-line text-emerald-400/60" /> Delivered monthly</span>
                    <span className="flex items-center gap-1.5"><i className="ri-close-circle-line text-emerald-400/60" /> One-click unsubscribe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-2.5 mb-5 group">
                <svg className="w-7 h-7 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
                  <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
                  <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
                  <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
                </svg>
                <span className="text-lg font-bold tracking-tight text-white">Klavora</span>
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mb-6">
                Unified pharmacy management for modern health systems. Inventory, dispensing, sales, and analytics, all in one platform.
              </p>

              <div className="flex items-center gap-3">
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-200">
                  <i className="ri-twitter-x-line text-sm" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-200">
                  <i className="ri-linkedin-fill text-sm" />
                </a>
                <a href="https://wa.me/233203604957" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-200">
                  <i className="ri-whatsapp-line text-sm" />
                </a>
                <a href="#" onClick={copyPhone} aria-label="Phone" className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-200">
                  <i className="ri-phone-line text-sm" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-5">Product</h4>
                <ul className="space-y-3">
                  {footerProduct.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-5">Company</h4>
                <ul className="space-y-3">
                  {footerCompany.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-5">Resources</h4>
                <ul className="space-y-3">
                  {footerResources.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-5">Legal</h4>
                <ul className="space-y-3">
                  {footerLegal.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KLAVORA watermark */}
        <div className="pt-8 pb-4 overflow-hidden">
          <div className="text-center select-none pointer-events-none">
            <span className="text-[3.5rem] sm:text-[6rem] lg:text-[9rem] font-black tracking-[-0.04em] leading-none uppercase" style={{ color: 'rgba(16, 185, 129, 0.12)', fontFamily: 'Inter, system-ui, -apple-system, sans-serif', letterSpacing: '0.08em' }}>
              KLAVORA
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600 dark:text-slate-300">
          <div>&copy; {new Date().getFullYear()} Klavora (EliTech CreaTives Limited). All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
