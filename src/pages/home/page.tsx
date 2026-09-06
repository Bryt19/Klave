import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ScrollToTop from "./components/ScrollToTop";

const ProblemSection = lazy(() => import("./components/ProblemSection"));
const InventoryShowcase = lazy(() => import("./components/InventoryShowcase"));
const ExpiryTimeline = lazy(() => import("./components/ExpiryTimeline"));
const AnalyticsShowcase = lazy(() => import("./components/AnalyticsShowcase"));
const RoleSwitcher = lazy(() => import("./components/RoleSwitcher"));
const About = lazy(() => import("./components/About"));
const Ecosystem = lazy(() => import("./components/Ecosystem"));
const SecuritySection = lazy(() => import("./components/SecuritySection"));
const Pricing = lazy(() => import("./components/Pricing"));
const Faq = lazy(() => import("./components/Faq"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const CtaSection = lazy(() => import("./components/CtaSection"));
const Footer = lazy(() => import("./components/Footer"));

const SectionSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-5 h-5 border-2 border-emerald-200 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

/* ── Adaptive section divider — respects light/dark mode ── */
function SectionDivider({ variant = "light" }: { variant?: "light" | "analytics-enter" | "analytics-exit" }) {
  if (variant === "analytics-enter") {
    // Transition from light-section bg into the dark analytics panel
    return (
      <div className="h-20 bg-gradient-to-b from-white dark:from-slate-900 to-slate-950 dark:to-slate-950 pointer-events-none" />
    );
  }
  if (variant === "analytics-exit") {
    // Transition from dark analytics panel back to light sections
    return (
      <div className="h-20 bg-gradient-to-b from-slate-950 dark:from-slate-950 to-white dark:to-slate-900 pointer-events-none" />
    );
  }

  // Generic thin divider line — background matches surrounding sections
  return (
    <div className="relative bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-3">
          <div
            className="h-px w-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(226,232,240,0.6) 15%, rgba(16,185,129,0.08) 50%, rgba(226,232,240,0.6) 85%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-900/40 dark:selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <ProblemSection />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <InventoryShowcase />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <ExpiryTimeline />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <AnalyticsShowcase />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <RoleSwitcher />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <About />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <Ecosystem />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <SecuritySection />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <Faq />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider />
          <Testimonials />
        </Suspense>
        <CtaSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}
