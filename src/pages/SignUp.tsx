import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [pharmacyName, setPharmacyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !pharmacyName || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }
    setErrorMessage("");
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://app.klavora.com/signup";
    }, 800);
  };

  const statCards = [
    { label: "Active Queues", value: "12", icon: "ri-stack-line", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { label: "Rx Processed Today", value: "2,847", icon: "ri-capsule-line", color: "bg-sky-50 text-sky-700 border-sky-200" },
    { label: "Avg. Dispense Time", value: "22s", icon: "ri-timer-flash-line", color: "bg-violet-50 text-violet-700 border-violet-200" },
  ];

  const recentActivity = [
    { rx: "RX-9488", drug: "Amoxicillin 500mg", status: "Verified", time: "just now", dot: "bg-emerald-500" },
    { rx: "RX-9487", drug: "Lisinopril 20mg", status: "Dispensed", time: "2m ago", dot: "bg-sky-500" },
    { rx: "RX-9485", drug: "Metformin 850mg", status: "In Review", time: "4m ago", dot: "bg-amber-400" },
    { rx: "RX-9483", drug: "Atorvastatin 40mg", status: "Completed", time: "6m ago", dot: "bg-slate-300" },
  ];

  return (
    <div className="h-screen overflow-hidden flex bg-white">

      {/* ── Left Panel: Visual Showcase ─────────────────────────────── */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[55%] flex-col bg-slate-950 relative overflow-hidden">

        {/* Subtle mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.02)_0%,transparent_100%)]" />

        {/* Grid dots pattern */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative z-10 flex flex-col h-full p-10 xl:p-14 overflow-y-auto">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group w-fit">
            <svg className="w-8 h-8 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
            </svg>
            <span className="text-lg font-bold tracking-tight text-white">
              Klavora<span className="text-blue-400">.</span>
            </span>
          </Link>

          {/* Hero Copy */}
          <div className="mt-16 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Start Your Free Pilot
            </div>
            <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight mb-3">
              Set up your pharmacy <br />
              in under 10 minutes.
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Create your profile, import your drug catalogue, and start dispensing with intelligent batch tracking — no hardware lock-in.
            </p>
          </div>

          {/* Live Stats Row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {statCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-3.5"
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm mb-2.5 border ${card.color}`}>
                  <i className={card.icon} />
                </div>
                <div className="text-xl font-bold text-white">{card.value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{card.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.45 }}
            className="flex-1 bg-white/4 border border-white/8 rounded-2xl p-4 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <i className="ri-pulse-line text-emerald-400" />
                Live Activity Feed
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                4 stations online
              </div>
            </div>

            <div className="space-y-2.5">
              {recentActivity.map((item, i) => (
                <motion.div
                  key={item.rx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + i * 0.08 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/4 border border-white/6"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                    <div>
                      <div className="text-[11px] font-bold text-white">{item.rx}</div>
                      <div className="text-[10px] text-slate-500">{item.drug}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-semibold text-slate-300">{item.status}</div>
                    <div className="text-[10px] text-slate-600">{item.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Compliance Row */}
          <div className="mt-6 flex items-center gap-5 text-[11px] text-slate-600">
            <span className="flex items-center gap-1.5">
              <i className="ri-shield-check-fill text-emerald-600" />
              HIPAA Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-lock-fill text-emerald-600" />
              256-bit TLS
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-fingerprint-line text-emerald-600" />
              2FA Enforced
            </span>
          </div>
        </div>
      </div>

      {/* ── Right Panel: Sign Up Form ──────────────────────────────────── */}
      <div className="flex-1 flex flex-col">

        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2 group">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
            </svg>
            <span className="text-base font-bold text-slate-900">Klavora<span className="text-blue-500">.</span></span>
          </Link>
          <Link to="/" className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1">
            <i className="ri-arrow-left-line" />
            Back
          </Link>
        </header>

        {/* Form Area */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full max-w-sm"
          >
            {/* Back link — desktop only */}
            <Link
              to="/"
              className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 hover:text-slate-700 mb-8 transition-colors"
            >
              <i className="ri-arrow-left-line" />
              Back to Klavora
            </Link>

            {/* Heading */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1.5">
                Create your account
              </h2>
              <p className="text-sm text-slate-500">
                Start your 14-day free pilot — no credit card required
              </p>
            </div>

            {/* Error */}
            {errorMessage && (
              <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <i className="ri-error-warning-line text-sm shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                    <i className="ri-user-line" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Dr. Nana Adjei"
                    required
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Pharmacy Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pharmacy name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                    <i className="ri-hospital-line" />
                  </div>
                  <input
                    type="text"
                    value={pharmacyName}
                    onChange={(e) => setPharmacyName(e.target.value)}
                    placeholder="Accra Central Pharmacy"
                    required
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                    <i className="ri-mail-line" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pharmacist@dispensary.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                    <i className="ri-lock-line" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    required
                    minLength={8}
                    className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-sm"
                  >
                    <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"} />
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 text-[11px] text-slate-500 cursor-pointer select-none pt-0.5">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 mt-0.5 shrink-0"
                />
                <span>
                  I agree to the{" "}
                  <a href="#" className="font-semibold text-slate-700 hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="font-semibold text-slate-700 hover:underline">Privacy Policy</a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 mt-2 cursor-pointer disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-sm" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create pharmacy profile</span>
                    <i className="ri-arrow-right-line text-xs text-blue-200" />
                  </>
                )}
              </button>

            </form>

            {/* Sign In Link */}
            <p className="mt-6 text-xs text-center text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-blue-600 hover:underline"
              >
                Sign in →
              </Link>
            </p>

          </motion.div>
        </div>

        {/* Bottom Footer */}
        <footer className="px-6 py-5 text-center text-[11px] text-slate-400 border-t border-slate-100">
          © {new Date().getFullYear()} Klavora · EliTech CreaTives Limited · All rights reserved
        </footer>
      </div>

    </div>
  );
}
