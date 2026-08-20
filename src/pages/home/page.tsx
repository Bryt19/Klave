import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FoundingPharmacies from "./components/FoundingPharmacies";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <FoundingPharmacies />
        <Pricing />
        <About />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}