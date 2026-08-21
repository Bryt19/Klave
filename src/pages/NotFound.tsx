import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const location = useLocation();
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-[#050508]">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-blue-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating cross logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-8"
      >
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981" opacity="0.9" />
          <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6" opacity="0.9" />
          <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.8" />
        </svg>
        <div className="absolute inset-0 -m-4 rounded-full border border-emerald-500/20 animate-ping" style={{ animationDuration: "3s" }} />
      </motion.div>

      {/* 404 number */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <h1
          className={`text-[8rem] sm:text-[10rem] md:text-[12rem] font-black tracking-tighter leading-none select-none ${
            glitch
              ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400"
              : "text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/[0.03]"
          } transition-all duration-100`}
          style={{
            WebkitTextStroke: glitch ? "none" : "1px rgba(255,255,255,0.06)",
          }}
        >
          404
        </h1>
        {glitch && (
          <>
            <div className="absolute top-[30%] left-0 right-0 h-px bg-emerald-400/40" />
            <div className="absolute top-[60%] left-[10%] right-[20%] h-px bg-blue-400/30" />
          </>
        )}
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 text-center mt-2"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          Page not found
        </h2>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-xs text-slate-600 font-mono mb-8">
          {location.pathname}
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-200 shadow-lg shadow-white/5"
          >
            <i className="ri-home-4-line text-xs" />
            Back to home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-400 border border-white/10 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xs" />
            Go back
          </button>
        </div>
      </motion.div>

      {/* Bottom brand */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 flex items-center gap-2 text-xs text-slate-700"
      >
        <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
          <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981" opacity="0.4" />
          <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6" opacity="0.4" />
          <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.3" />
        </svg>
        <span>Klavora · EliTech CreaTives Limited</span>
      </motion.div>
    </div>
  );
}