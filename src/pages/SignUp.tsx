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

  return (
    <div className="h-screen overflow-hidden flex bg-white">

      {/* ── Left Panel ──────────────────────────────────────────── */}
      <div className="hidden lg:flex lg:w-[48%] xl:w-[50%] flex-col relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">

        {/* Subtle gradient accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-400/[0.04] blur-[100px] pointer-events-none" />
        </div>

        {/* Fine grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-10 xl:p-14">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group w-fit">
            <svg className="w-8 h-8 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981" />
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6" />
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-white">
              Klavora<span className="text-blue-400">.</span>
            </span>
          </Link>

          {/* Hero Copy */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold mb-6">
                <i className="ri-rocket-2-line text-xs" />
                Start Your Free Pilot
              </div>

              <h1 className="text-3xl xl:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
                Set up your pharmacy
                <br />
                in under 10 minutes.
              </h1>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-10">
                Create your profile, import your drug catalogue, and start dispensing with intelligent batch tracking — no hardware lock-in.
              </p>

              {/* Steps */}
              <div className="space-y-4">
                {[
                  { step: "1", title: "Create your profile", desc: "Add pharmacy details and team members" },
                  { step: "2", title: "Import your catalogue", desc: "Upload your drug list or connect your supplier" },
                  { step: "3", title: "Start dispensing", desc: "Go live with real-time inventory sync" },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-emerald-400">{item.step}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-5 text-[11px] text-slate-600"
          >
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
          </motion.div>
        </div>
      </div>

      {/* ── Right Panel: Sign Up Form ────────────────────────────── */}
      <div className="flex-1 flex flex-col">

        {/* Mobile header */}
        <header className="lg:hidden flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981" />
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6" />
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85" />
            </svg>
            <span className="text-base font-bold text-slate-900">Klavora<span className="text-blue-500">.</span></span>
          </Link>
          <Link to="/" className="text-xs font-medium text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors">
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
            {/* Back link — desktop */}
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
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full name</label>
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
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Pharmacy Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Pharmacy name</label>
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
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email address</label>
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
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Password</label>
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
                    className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-sm transition-colors"
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
                  className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500/20 mt-0.5 shrink-0"
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
                className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/20 mt-2 cursor-pointer disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-sm" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create pharmacy profile</span>
                    <i className="ri-arrow-right-line text-xs text-emerald-200" />
                  </>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <p className="mt-6 text-xs text-center text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
              >
                Sign in →
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="px-6 py-5 text-center text-[11px] text-slate-400 border-t border-slate-100">
          © {new Date().getFullYear()} Klavora · EliTech CreaTives Limited · All rights reserved
        </footer>
      </div>
    </div>
  );
}
