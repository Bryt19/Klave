import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ScrollToTop from "./components/ScrollToTop";

const ThreeSystems = lazy(() => import("./components/ThreeSystems"));
const ClinicalWorkflows = lazy(() => import("./components/ClinicalWorkflows"));
const EveryLayer = lazy(() => import("./components/EveryLayer"));
const BuiltForTeams = lazy(() => import("./components/BuiltForTeams"));
const OperationalOutcomes = lazy(() => import("./components/OperationalOutcomes"));
const Pricing = lazy(() => import("./components/Pricing"));
const About = lazy(() => import("./components/About"));
const Faq = lazy(() => import("./components/Faq"));
const CtaSection = lazy(() => import("./components/CtaSection"));
const Footer = lazy(() => import("./components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="w-6 h-6 border-2 border-emerald-200 border-t-emerald-500 rounded-full animate-spin" /></div>}>
          <ThreeSystems />
          <ClinicalWorkflows />
          <EveryLayer />
          <BuiltForTeams />
          <OperationalOutcomes />
          <Pricing />
          <About />
          <Faq />
          <CtaSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}
