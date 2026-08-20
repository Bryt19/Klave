import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "online" | "offline" | "queued" | "syncing";

const cycle: Phase[] = ["online", "offline", "queued", "offline", "syncing"];

const phaseConfig: Record<
  Phase,
  { label: string; dot: string; bar: string; text: string }
> = {
  online: {
    label: "Online — Connected",
    dot: "bg-primary-400",
    bar: "bg-primary-500",
    text: "text-primary-300",
  },
  offline: {
    label: "Manual Offline Mode",
    dot: "bg-secondary-400",
    bar: "bg-secondary-500",
    text: "text-secondary-400",
  },
  queued: {
    label: "Sale queued — pending sync",
    dot: "bg-secondary-400",
    bar: "bg-secondary-500",
    text: "text-secondary-400",
  },
  syncing: {
    label: "Reconnected — syncing…",
    dot: "bg-primary-400",
    bar: "bg-primary-500",
    text: "text-primary-300",
  },
};

export default function OfflineWindow() {
  const [index, setIndex] = useState(0);
  const phase = cycle[index % cycle.length];
  const cfg = phaseConfig[phase];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
          Offline &amp; Online Mode
        </h4>
        <span className="text-[10px] text-foreground-600">Auto sync</span>
      </div>

      {/* Status bar */}
      <div className="rounded-lg border border-background-200/15 bg-background-50/60 p-3 mb-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <span className={`text-xs font-medium ${cfg.text}`}>
              {cfg.label}
            </span>
            <span className={`w-2 h-2 rounded-full ${cfg.dot} animate-pulse`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar for phases */}
      <div className="h-1.5 rounded-full bg-background-200/20 overflow-hidden mb-3">
        {phase === "syncing" && (
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear" }}
            className={`h-full rounded-full ${cfg.bar}`}
          />
        )}
        {phase === "queued" && (
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-full w-2/3 rounded-full bg-secondary-500/70"
          />
        )}
      </div>

      {/* Sample sale */}
      <div className="rounded-lg border border-background-200/15 bg-background-50/60 p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={`sale-${phase}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-md bg-background-100 flex items-center justify-center">
                <i className="ri-receipt-line text-foreground-400 text-sm" />
              </span>
              <div>
                <p className="text-xs text-foreground-100 font-medium">
                  Sale #1024 — GH₵128
                </p>
                <p className="text-[10px] text-foreground-600">
                  {phase === "queued"
                    ? "Saved locally, waiting for connection"
                    : phase === "syncing"
                    ? "Uploading to cloud…"
                    : phase === "offline"
                    ? "Ready to serve customers offline"
                    : "Sale processed and recorded"}
                </p>
              </div>
            </div>
            <i
              className={`${
                phase === "queued"
                  ? "ri-timer-line text-secondary-400"
                  : phase === "syncing"
                  ? "ri-loader-4-line text-primary-400 animate-spin"
                  : phase === "offline"
                  ? "ri-wifi-off-line text-secondary-400"
                  : "ri-check-line text-primary-400"
              } text-base`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-[11px] text-foreground-600 flex items-center gap-1.5">
        <i className="ri-wifi-line text-primary-400" />
        Sales never stop, even when the internet does
      </p>
    </div>
  );
}