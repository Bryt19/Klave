import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface AnimatedCTAProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function AnimatedCTA({ href, className, children }: AnimatedCTAProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(href, "_blank");
      setIsRedirecting(false);
    }, 1500);
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
      {createPortal(
        <AnimatePresence>
          {isRedirecting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 dark:bg-slate-950/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="relative flex items-center justify-center w-24 h-24">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-emerald-100 dark:border-emerald-900/50" 
                  />
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500 border-r-emerald-500" 
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                      <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
                      <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
                      <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
                    </svg>
                  </motion.div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    Opening Dashboard
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Preparing your secure workspace...
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
