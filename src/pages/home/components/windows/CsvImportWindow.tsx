import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type ParsedRow = { name: string; strength: string; qty: number; expiry: string };

const parsedRows: ParsedRow[] = [
  { name: "Paracetamol", strength: "500mg", qty: 1200, expiry: "Dec 2027" },
  { name: "Amoxicillin", strength: "250mg", qty: 800, expiry: "Mar 2027" },
  { name: "Ibuprofen", strength: "400mg", qty: 650, expiry: "Sep 2026" },
];

export default function CsvImportWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      setStarted(true);
      const id = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(id);
            return 100;
          }
          return prev + 25;
        });
      }, 220);
      return () => clearInterval(id);
    }
    return undefined;
  }, [inView]);

  const done = progress >= 100;

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
          CSV Bulk Importer
        </h4>
        <span className="text-[10px] text-foreground-600">inventory.csv</span>
      </div>

      {/* Drop zone / progress */}
      <div className="rounded-lg border border-background-200/15 bg-background-50/60 p-4 mb-3">
        {!done ? (
          <motion.div
            animate={
              started
                ? { opacity: [0.7, 1, 0.7], scale: [1, 1.01, 1] }
                : undefined
            }
            transition={{ duration: 1.4, repeat: Infinity }}
            className="text-center py-2"
          >
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary-500/15 flex items-center justify-center">
              <i className="ri-upload-cloud-2-line text-primary-400 text-lg" />
            </div>
            <p className="text-xs text-foreground-300 font-medium">
              {started ? "Importing inventory…" : "Drop your CSV here"}
            </p>
            <p className="text-[10px] text-foreground-600 mt-0.5">
              {started ? `${progress}%` : "or click to browse"}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-2"
          >
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary-500 flex items-center justify-center">
              <i className="ri-check-line text-background-50 text-lg" />
            </div>
            <p className="text-xs text-foreground-100 font-medium">
              Import complete
            </p>
            <p className="text-[10px] text-primary-400 mt-0.5 font-medium">
              {parsedRows.length} drugs added successfully
            </p>
          </motion.div>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-background-200/20 overflow-hidden mb-3">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          className="h-full rounded-full bg-primary-500"
        />
      </div>

      {/* Preview table */}
      <div className="overflow-hidden rounded-lg border border-background-200/15 bg-background-50/40">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-3 py-2 bg-background-50/60 text-[10px] text-foreground-600 uppercase tracking-wider border-b border-background-200/10">
          <span>Drug</span>
          <span>Qty</span>
          <span>Expiry</span>
          <span>✓</span>
        </div>
        {parsedRows.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, y: 6 }}
            animate={done ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: i * 0.15 }}
            className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-3 py-2 items-center border-b border-background-200/5 last:border-b-0"
          >
            <span className="text-xs text-foreground-100">
              {row.name}{" "}
              <span className="text-[10px] text-foreground-600">
                {row.strength}
              </span>
            </span>
            <span className="text-xs text-foreground-300 tabular-nums">
              {row.qty}
            </span>
            <span className="text-xs text-foreground-500">{row.expiry}</span>
            <span className="text-primary-400 text-xs">
              <i className="ri-check-line" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}