import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/mocks/homeContent";

const DEMO_URL = "https://app.klavora.com/signup";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((el) => observerRef.current!.observe(el));
    return () => { observerRef.current?.disconnect(); };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`mx-auto max-w-5xl rounded-full pointer-events-auto transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-[0_4px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)]"
              : "bg-transparent border border-transparent shadow-none"
          }`}
        >
          <div className="flex items-center justify-between h-13 px-4 sm:px-5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <svg className="w-5.5 h-5.5 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
                <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
                <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
                <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
              </svg>
              <span className="text-[15px] font-bold tracking-tight text-slate-800">
                Klavora<span className="text-emerald-500">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a key={link.label} href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-3.5 py-1.5 text-[11px] font-medium rounded-full transition-all duration-200 ${
                      isActive ? "text-emerald-700" : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {isActive && (
                      <motion.div layoutId="nav-pill"
                        className="absolute inset-0 bg-emerald-50 border border-emerald-100 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-1.5">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/login" className="px-3.5 py-1.5 text-[11px] font-medium text-slate-500 hover:text-slate-800 transition-colors rounded-full">
                Log in
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a href={DEMO_URL}
                className="px-4 py-1.5 text-[11px] font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200 shadow-sm shadow-emerald-500/20"
              >
                Get Started
              </a>
              </motion.div>
            </div>

            {/* Mobile hamburger */}
            <button type="button"
              className="flex md:hidden w-8 h-8 items-center justify-center rounded-full bg-slate-100 text-slate-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <i className={`ri-${mobileOpen ? "close" : "menu-3"}-line text-sm`} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }} className="fixed top-16 left-4 right-4 z-50 md:hidden">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-3 py-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                >{link.label}</a>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-100 flex gap-2">
                <Link to="/login" onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                >Log in</Link>
                <a href={DEMO_URL}
                  className="flex-1 text-center py-2.5 text-sm font-semibold bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
                >Get Started</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
