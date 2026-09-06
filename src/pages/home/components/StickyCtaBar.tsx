import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEMO_URL = "https://app.klavora.com/signup";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none hidden md:block"
        >
          <div className="mx-auto max-w-3xl pointer-events-auto">
            <div className="flex items-center justify-between gap-4 px-5 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/300/15 flex items-center justify-center shrink-0">
                  <i className="ri-capsule-line text-emerald-400 text-sm" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white leading-tight">
                    Ready to modernize your pharmacy?
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Free 30-day trial · No credit card required
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a href="#pricing" className="px-4 py-2 text-[11px] font-semibold text-slate-300 hover:text-white rounded-full border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                  View Pricing
                </a>
                <a href={DEMO_URL} className="px-5 py-2 text-[11px] font-bold bg-emerald-50 dark:bg-emerald-900/300 hover:bg-emerald-400 text-white rounded-full transition-colors shadow-lg shadow-emerald-500/25">
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
