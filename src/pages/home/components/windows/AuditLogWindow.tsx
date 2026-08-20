import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LogRow = {
  action: string;
  detail: string;
  time: string;
  type: "sale" | "edit" | "login" | "restock";
};

const templates: Omit<LogRow, "time">[] = [
  { action: "Sale Completed", detail: "#1028 — GH₵56 · Ama K.", type: "sale" },
  { action: "Drug Edited", detail: "Amoxicillin price updated", type: "edit" },
  { action: "Staff Login", detail: "Kofi M. signed in", type: "login" },
  { action: "Restock Added", detail: "+500 Paracetamol 500mg", type: "restock" },
];

const typeStyles: Record<LogRow["type"], { cls: string; icon: string }> = {
  sale: { cls: "bg-primary-500/15 text-primary-300", icon: "ri-receipt-line" },
  edit: { cls: "bg-accent-500/15 text-accent-300", icon: "ri-edit-line" },
  login: { cls: "bg-secondary-500/15 text-secondary-400", icon: "ri-user-line" },
  restock: { cls: "bg-primary-500/15 text-primary-300", icon: "ri-add-box-line" },
};

const makeTime = (i: number) => {
  const minutes = 12 + i * 2;
  return `14:${String(minutes % 60).padStart(2, "0")}`;
};

export default function AuditLogWindow() {
  const [logs, setLogs] = useState<LogRow[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const template = templates[count % templates.length];
      setLogs((prev) => {
        const next = [
          { ...template, time: makeTime(prev.length) },
          ...prev,
        ];
        return next.slice(0, 5);
      });
      setCount((c) => c + 1);
    }, 2000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
          Audit Log
        </h4>
        <span className="text-[10px] text-foreground-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
          Live
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-background-200/15 bg-background-50/40">
        <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-2 bg-background-50/60 text-[10px] text-foreground-600 uppercase tracking-wider border-b border-background-200/10">
          <span>Action</span>
          <span>Time</span>
        </div>

        <div className="min-h-[180px]">
          <AnimatePresence initial={false}>
            {logs.map((log, i) => {
              const st = typeStyles[log.type];
              return (
                <motion.div
                  key={`${log.time}-${log.action}-${i}`}
                  layout
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-[1fr_auto] gap-3 px-3 py-2.5 items-center border-b border-background-200/5 last:border-b-0"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded flex items-center justify-center ${st.cls}`}>
                      <i className={`${st.icon} text-[11px]`} />
                    </span>
                    <div>
                      <p className="text-xs text-foreground-100 font-medium">
                        {log.action}
                      </p>
                      <p className="text-[10px] text-foreground-600">
                        {log.detail}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-foreground-500 tabular-nums">
                    {log.time}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {logs.length === 0 && (
            <p className="text-[11px] text-foreground-600 text-center py-12">
              Waiting for activity…
            </p>
          )}
        </div>
      </div>

      <p className="mt-3 text-[11px] text-foreground-600 flex items-center gap-1.5">
        <i className="ri-shield-check-line text-primary-400" />
        Every action in the system is recorded
      </p>
    </div>
  );
}