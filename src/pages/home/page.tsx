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

/* Professional section divider */
function SectionDivider({ variant = "light" }: { variant?: "light" | "dark" | "dark-to-light" | "light-to-dark" }) {
  const styles: Record<string, { line: string; bg: string }> = {
    light: {
      line: "linear-gradient(90deg, transparent 0%, rgba(226,232,240,0.6) 15%, rgba(16,185,129,0.08) 50%, rgba(226,232,240,0.6) 85%, transparent 100%)",
      bg: "bg-white",
    },
    dark: {
      line: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 15%, rgba(16,185,129,0.15) 50%, rgba(255,255,255,0.06) 85%, transparent 100%)",
      bg: "bg-slate-950",
    },
    "dark-to-light": {
      line: "linear-gradient(90deg, transparent 0%, rgba(226,232,240,0.3) 15%, rgba(16,185,129,0.1) 50%, rgba(226,232,240,0.3) 85%, transparent 100%)",
      bg: "bg-gradient-to-b from-slate-950 to-white",
    },
    "light-to-dark": {
      line: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 15%, rgba(16,185,129,0.12) 50%, rgba(255,255,255,0.15) 85%, transparent 100%)",
      bg: "bg-gradient-to-b from-white to-slate-950",
    },
  };
  const s = styles[variant] || styles.light;

  return (
    <div className={`relative ${s.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-4">
          <div className="h-px w-full" style={{ background: s.line }} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
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
          <SectionDivider variant="light-to-dark" />
          <AnalyticsShowcase />
        </Suspense>
        <Suspense fallback={<SectionSpinner />}>
          <SectionDivider variant="dark-to-light" />
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
