import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const productLinks = [
  { label: "Prescription Intake", href: "#features" },
  { label: "Inventory & FEFO Sync", href: "#features" },
  { label: "Clinical Safety Engine", href: "#solutions" },
  { label: "EHR Interoperability", href: "#features" },
  { label: "Pricing Plans", href: "#pricing" },
];

const solutionsLinks = [
  { label: "Hospital Health Systems", href: "#features" },
  { label: "Dispensary Chains", href: "#features" },
  { label: "Independent Pharmacies", href: "#features" },
  { label: "Telepharmacy Networks", href: "#features" },
];

const resourcesLinks = [
  { label: "Documentation", href: "#" },
  { label: "API Reference (FHIR / REST)", href: "#" },
  { label: "Security & HIPAA Whitepaper", href: "#" },
  { label: "Release Notes", href: "#" },
];

const companyLinks = [
  { label: "About Klavora", href: "#about" },
  { label: "Contact Sales", href: "#contact" },
  { label: "Careers", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030712] text-white border-t border-white/[0.06] pt-20 pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Brand Typography Header */}
        <div className="pb-10 sm:pb-16 mb-10 sm:mb-16 border-b border-white/[0.06]">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white/95">
            The pharmacy <br />
            operations layer<span className="text-emerald-500">.</span>
          </h2>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-8 mb-12 sm:mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <svg className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 32 32" fill="none">
                <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
                <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
                <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
              </svg>
              <span className="text-lg font-bold tracking-tight text-white">Klavora</span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Unified queue management, inventory intelligence, and dispensing at scale.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Klavora (EliTech CreaTives Limited). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/hipaa" className="hover:text-slate-300 transition-colors">HIPAA Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
