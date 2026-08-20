import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Reveal from "./Reveal";

const TAKEN = 3;
const TOTAL = 5;

function SpotCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) {
      motionVal.set(TAKEN);
    }
  }, [inView, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest));
      }
    });
    return () => unsub();
  }, [spring]);

  return <span ref={ref}>0</span>;
}

export default function FoundingPharmacies() {
  const pct = (TAKEN / TOTAL) * 100;

  return (
    <section className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto">
          {/* Gradient border card */}
          <div className="rounded-2xl p-px bg-gradient-to-br from-primary-500 via-primary-600/40 to-accent-500/50">
            <div className="rounded-2xl bg-background-100/80 px-6 py-10 md:px-12 md:py-14 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/15 text-primary-300 text-xs font-medium mb-5">
                Limited Founding Offer
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-50 tracking-tight mb-4">
                Become a Founding Pharmacy.
              </h2>
              <p className="text-sm md:text-base text-foreground-400 max-w-xl mx-auto leading-relaxed mb-8">
                The first 5 pharmacies to join Klavora get lifetime access at
                no cost. In return we ask for your honest feedback to help us
                build the best pharmacy tool in Africa.
              </p>

              {/* Counter */}
              <div className="max-w-md mx-auto mb-8">
                <p className="text-xs text-foreground-500 mb-3">
                  <strong className="text-primary-400">
                    <SpotCounter /> of {TOTAL} spots
                  </strong>{" "}
                  taken — {TOTAL - TAKEN} remaining
                </p>
                <div className="h-2 rounded-full bg-background-200/30 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-primary-500"
                  />
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://app.klavora.com/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-primary-500 text-background-50 rounded-md hover:bg-primary-400 transition-colors duration-200 whitespace-nowrap"
              >
                Claim Your Founding Spot
                <i className="ri-arrow-right-line text-sm" />
              </a>
              <p className="text-xs text-foreground-600 mt-4">
                No credit card required. No commitment. Just a chance to shape
                the future of pharmacy management in Africa.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}