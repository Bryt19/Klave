import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = "serving" | "held" | "serving2" | "resumed";

const stageOrder: Stage[] = ["serving", "held", "serving2", "resumed"];

const heldCart = [
  { name: "Paracetamol 500mg", qty: 2, price: 8 },
  { name: "ORS Sachet", qty: 4, price: 5 },
];

export default function HoldWindow() {
  const [stageIdx, setStageIdx] = useState(0);
  const stage = stageOrder[stageIdx % stageOrder.length];

  useEffect(() => {
    const id = setInterval(() => {
      setStageIdx((prev) => prev + 1);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const held = stage === "held" || stage === "resumed";
  const serving = stage === "serving" || stage === "serving2";

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
          Hold Feature
        </h4>
        <span className="text-[10px] text-foreground-600">
          {stage === "resumed"
            ? "Held cart resumed"
            : stage === "serving2"
            ? "Serving new customer"
            : stage === "held"
            ? "Cart held"
            : "Serving customer"}
        </span>
      </div>

      {/* Customer status */}
      <div className="rounded-lg border border-background-200/15 bg-background-50/60 p-3 mb-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center">
                <i className="ri-user-smile-line text-accent-300 text-sm" />
              </span>
              <div>
                <p className="text-xs text-foreground-100 font-medium">
                  {serving ? "Customer A — Walk-in" : "Customer A (paused)"}
                </p>
                <p className="text-[10px] text-foreground-600">
                  {serving ? "Adding items to cart" : "Cart saved, step aside"}
                </p>
              </div>
            </div>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                held
                  ? "bg-secondary-500/15 text-secondary-400"
                  : "bg-primary-500/15 text-primary-300"
              }`}
            >
              {held ? "On Hold" : "Active"}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cart display */}
      <div className="rounded-lg border border-background-200/15 bg-background-50/60 overflow-hidden">
        <div className="px-3 py-2 bg-background-50/60 text-[10px] text-foreground-600 uppercase tracking-wider border-b border-background-200/10">
          {held ? "Held Cart" : "Current Cart"}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {held ? (
              heldCart.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-3 py-2 border-b border-background-200/5 last:border-b-0"
                >
                  <span className="text-xs text-foreground-100">
                    {item.name} × {item.qty}
                  </span>
                  <span className="text-xs text-foreground-300 font-medium">
                    GH₵{item.price * item.qty}
                  </span>
                </div>
              ))
            ) : (
              <div className="px-3 py-6 text-center">
                <p className="text-[11px] text-foreground-600">
                  {serving
                    ? "Adding items for new customer…"
                    : "Holding cart, serving next customer…"}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-[11px] text-foreground-600 flex items-center gap-1.5">
        <i className="ri-pause-circle-line text-primary-400" />
        Pause a sale, serve the next customer, resume seamlessly
      </p>
    </div>
  );
}