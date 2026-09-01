import { Link } from "react-router-dom";

const DEMO_URL = "https://app.klavora.com/signup";

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
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter / CTA bar */}
        <div className="pt-14 sm:pt-16 pb-10 sm:pb-12 border-b border-white/[0.06]">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Card background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-slate-900/60 to-slate-900/80" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.06] blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/[0.04] blur-[60px] rounded-full pointer-events-none" />

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
                      <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                      <input type="email" placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all" />
                    </div>
                    <a href={DEMO_URL} className="shrink-0 px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
                      Subscribe
                      <i className="ri-arrow-right-line text-xs" />
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-3 text-[10px] text-slate-500">
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
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
                Unified pharmacy management for modern health systems. Inventory, dispensing, sales, and analytics, all in one platform.
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-emerald-400 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center gap-3">
                {[ { icon: "ri-twitter-x-line", label: "Twitter" }, { icon: "ri-linkedin-fill", label: "LinkedIn" }, { icon: "ri-github-fill", label: "GitHub" } ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-200">
                    <i className={`${s.icon} text-sm`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-5">Product</h4>
                <ul className="space-y-3">
                  {footerProduct.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-5">Company</h4>
                <ul className="space-y-3">
                  {footerCompany.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-5">Resources</h4>
                <ul className="space-y-3">
                  {footerResources.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
              <div>                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-5">Legal</h4>
                <ul className="space-y-3">
                  {footerLegal.map((l) => (<li key={l.label}><a href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">{l.label}</a></li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KLAVORA watermark */}
        <div className="pt-6 pb-2 overflow-hidden">
          <div className="text-center select-none pointer-events-none">
            <span className="text-[3.5rem] sm:text-[6rem] lg:text-[8rem] font-black tracking-tighter leading-none" style={{ color: 'rgba(16, 185, 129, 0.06)' }}>
              KLAVORA
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
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
