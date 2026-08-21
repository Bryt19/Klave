import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    setProgress(pct);
    setVisible(scrollTop > 320);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 44;
  const strokeW = 2;
  const radius = (size - strokeW) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 cursor-pointer"
        >
          {/* Fixed-size wrapper so the ring and button center perfectly */}
          <div className="relative" style={{ width: size, height: size }}>
            {/* Progress ring */}
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className="absolute top-0 left-0 -rotate-90"
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="rgba(16,185,129,0.1)"
                strokeWidth={strokeW}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#10b981"
                strokeWidth={strokeW}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - progress / 100)}
                style={{ transition: "stroke-dashoffset 0.18s ease-out" }}
              />
            </svg>

            {/* Button face — centered inside the 44px wrapper */}
            <div
              className="absolute rounded-full bg-emerald-950 shadow-lg shadow-emerald-950/20 flex items-center justify-center text-white"
              style={{
                width: 36,
                height: 36,
                top: (size - 36) / 2,
                left: (size - 36) / 2,
              }}
            >
              <i className="ri-arrow-up-line text-sm" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
