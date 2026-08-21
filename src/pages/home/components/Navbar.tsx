import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/mocks/homeContent";

const DEMO_URL = "https://app.klavora.com/signup";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-nav-theme='dark']");
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setOnDark(anyVisible);
      },
      { rootMargin: "-60px 0px -100% 0px", threshold: 0 }
    );
    targets.forEach((el) => observerRef.current!.observe(el));
    return () => { observerRef.current?.disconnect(); };
  }, []);

  const brandText = onDark ? "text-white" : "text-slate-800";
  const brandDot = onDark ? "text-blue-300" : "text-blue-500";
  const linkText = onDark ? "text-slate-300" : "text-slate-500";
  const linkHover = onDark ? "hover:text-white" : "hover:text-slate-900";
  const divider = onDark ? "bg-slate-600/40" : "bg-slate-300/50";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <nav
        className={`mx-auto max-w-5xl rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? onDark
              ? "bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
              : "bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-white/40 backdrop-blur-md border border-white/30 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="flex items-center justify-between h-12 px-4 sm:px-5">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <svg className="w-6 h-6 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
            </svg>
            <span className={`text-sm font-bold tracking-tight transition-colors duration-300 ${brandText}`}>
              Klavora<span className={brandDot}>.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="flex items-center">
                {idx > 0 && <span className={`w-px h-3 mx-1.5 transition-colors duration-300 ${divider}`} />}
                <a
                  href={link.href}
                  className={`px-2.5 py-1 text-[12px] font-medium transition-colors duration-150 ${linkText} ${linkHover}`}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-1.5">
            <Link
              to="/login"
              className={`px-2.5 py-1 text-[12px] font-medium transition-colors duration-150 ${linkText} ${onDark ? "hover:text-white" : "hover:text-slate-800"}`}
            >
              Log in
            </Link>
            <a
              href={DEMO_URL}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-[12px] font-semibold rounded-full transition-all duration-200 ${
                onDark
                  ? "bg-blue-500/15 text-blue-300 hover:bg-blue-500/25 border border-blue-400/20"
                  : "bg-blue-500 text-white hover:bg-blue-600 shadow-sm"
              }`}
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`flex md:hidden w-7 h-7 items-center justify-center rounded-full transition-colors ${
              onDark ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <i className={`ri-${mobileOpen ? "close" : "menu-3"}-line text-sm`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — capsule style */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`backdrop-blur-xl rounded-2xl border px-4 py-3 space-y-0.5 ${
          onDark
            ? "bg-white/8 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "bg-white/70 border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                onDark
                  ? "text-slate-300 hover:text-white hover:bg-white/5"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={`pt-2 mt-1 border-t flex gap-2 ${onDark ? "border-white/10" : "border-slate-200/50"}`}>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className={`flex-1 text-center py-2 text-sm font-medium rounded-xl transition-colors ${
                onDark ? "text-slate-300 hover:text-white hover:bg-white/5" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              Log in
            </Link>
            <a
              href={DEMO_URL}
              className={`flex-1 text-center py-2 text-sm font-semibold rounded-xl transition-colors ${
                onDark
                  ? "bg-blue-500/15 text-blue-300 hover:bg-blue-500/25"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
