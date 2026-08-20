import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type DrugRow = {
  name: string;
  stock: number;
  expiry: string;
  status: "healthy" | "expiring" | "expired";
};

const rows: DrugRow[] = [
  { name: "Paracetamol 500mg", stock: 1240, expiry: "Dec 2027", status: "healthy" },
  { name: "Amoxicillin 250mg", stock: 580, expiry: "Mar 2027", status: "healthy" },
  { name: "Diclofenac 50mg", stock: 210, expiry: "Oct 2026", status: "expiring" },
  { name: "Artemether/Lumefantrine", stock: 92, expiry: "Nov 2026", status: "healthy" },
  { name: "Metformin 500mg", stock: 18, expiry: "May 2026", status: "expired" },
];

const statusStyles: Record<DrugRow["status"], { label: string; cls: string; dot: string }> = {
  healthy: { label: "In Stock", cls: "bg-primary-500/15 text-primary-300", dot: "bg-primary-400" },
  expiring: { label: "Expiring Soon", cls: "bg-secondary-500/15 text-secondary-400", dot: "bg-secondary-400" },
  expired: { label: "Expired", cls: "bg-red-500/15 text-red-400", dot: "bg-red-500" },
};

export default function InventoryWindow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rows.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
          Drug Inventory
        </h4>
        <span className="text-[10px] text-foreground-600">FEFO enabled</span>
      </div>

      <div className="overflow-hidden rounded-lg border border-background-200/15">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-3 py-2 bg-background-50/60 text-[10px] text-foreground-600 uppercase tracking-wider border-b border-background-200/10">
          <span>Drug</span>
          <span>Stock</span>
          <span>Expiry</span>
          <span>Status</span>
        </div>

        {rows.map((row, i) => {
          const st = statusStyles[row.status];
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={row.name}
              animate={{
                backgroundColor: isActive
                  ? "oklch(var(--primary-500) / 0.08)"
                  : "oklch(var(--background-100) / 0.2)",
              }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-3 py-2.5 items-center border-b border-background-200/5 last:border-b-0"
            >
              <span className="text-xs text-foreground-100 truncate">
                {row.name}
              </span>
              <span className="text-xs text-foreground-300 font-medium tabular-nums">
                {row.stock}
              </span>
              <span className="text-xs text-foreground-500 tabular-nums">
                {row.expiry}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${st.cls}`}
              >
                <span className={`w-1 h-1 rounded-full ${st.dot}`} />
                {st.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-3 text-[11px] text-foreground-600 flex items-center gap-1.5">
        <i className="ri-refresh-line text-primary-400" />
        Expiry flags update automatically with each batch
      </p>
    </div>
  );
}