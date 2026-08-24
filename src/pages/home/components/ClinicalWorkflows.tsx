import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle, Shield, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const dashboardTabs = ["Inventory", "Low Stock", "Batches"] as const;

const inventoryData = [
  { name: "Paracetamol 500mg", batch: "BT-8841-A", stock: 1240, expiry: "Dec 2026", status: "ok" as const },
  { name: "Lisinopril 20mg", batch: "BT-9204-B", stock: 890, expiry: "Aug 2027", status: "ok" as const },
  { name: "Artemether 20/120mg", batch: "BT-7712-C", stock: 45, expiry: "Mar 2026", status: "low" as const },
  { name: "Metformin 500mg", batch: "BT-6643-D", stock: 2100, expiry: "Jan 2028", status: "ok" as const },
  { name: "Amoxicillin 250mg", batch: "BT-5591-E", stock: 12, expiry: "Feb 2026", status: "critical" as const },
];

const lowStockData = [
  { name: "Amoxicillin 250mg", stock: 12, reorder: 200, supplier: "MedSupply Ltd" },
  { name: "Artemether 20/120mg", stock: 45, reorder: 300, supplier: "PharmaCorp" },
  { name: "Omeprazole 20mg", stock: 67, reorder: 150, supplier: "HealthLink" },
];

const batchData = [
  { id: "BT-8841-A", drug: "Paracetamol", qty: 1240, expiry: "Dec 2026", shelf: "A-03", priority: "normal" as const },
  { id: "BT-7712-C", drug: "Artemether", qty: 45, expiry: "Mar 2026", shelf: "B-01", priority: "fefo" as const },
  { id: "BT-9204-B", drug: "Lisinopril", qty: 890, expiry: "Aug 2027", shelf: "C-04", priority: "normal" as const },
  { id: "BT-5591-E", drug: "Amoxicillin", qty: 12, expiry: "Feb 2026", shelf: "A-07", priority: "critical" as const },
];

/* Mini sparkline SVG */
function Sparkline({ data, color = "#10B981" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 64;
  const h = 20;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-16 h-5" preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}



export default function ClinicalWorkflows() {
  const [activeTab, setActiveTab] = useState<(typeof dashboardTabs)[number]>("Inventory");

  return (
    <section data-nav-theme="dark" id="solutions" className="relative py-14 sm:py-20 md:py-24 overflow-hidden bg-[#030712]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.5) 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interactive Dashboard</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.12] mb-4">
              See your pharmacy operations <br className="hidden sm:block" />
              <span className="text-emerald-400">come alive in real time.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
              From live inventory tables to low-stock warnings and batch management — every view updates instantly across all connected workstations.
            </p>
          </Reveal>
        </div>

        {/* Dashboard Mockup */}
        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold text-white">Klavora Dashboard</span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline">· Accra Central Pharmacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    4 Workstations
                  </span>
                </div>
              </div>

              {/* Tab Bar */}
              <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 pb-0 border-b border-white/[0.04]">
                {dashboardTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-3 py-2 text-xs font-medium rounded-t-lg transition-all duration-200 ${
                      activeTab === tab
                        ? "text-emerald-400 bg-white/[0.05]"
                        : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="dashboardActiveTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 min-h-[280px] sm:min-h-[320px]">
                <AnimatePresence mode="wait">
                  {activeTab === "Inventory" && (
                    <motion.div
                      key="inventory"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Total Items</div>
                            <Sparkline data={[8, 10, 9, 12, 14, 15]} />
                          </div>
                          <div className="text-lg font-bold text-white">15</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Total Units</div>
                            <Sparkline data={[3200, 3600, 3800, 4000, 4100, 4246]} />
                          </div>
                          <div className="text-lg font-bold text-white">4,246</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Low Stock</div>
                            <Sparkline data={[1, 2, 3, 4, 3, 3]} color="#F59E0B" />
                          </div>
                          <div className="text-lg font-bold text-amber-400">3</div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                        <div className="grid grid-cols-[1fr_auto_auto_auto] sm:grid-cols-[1fr_auto_auto_auto_auto] gap-3 px-4 py-2 bg-white/[0.02] border-b border-white/[0.06] text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          <span>Drug</span>
                          <span className="hidden sm:block">Batch</span>
                          <span>Stock</span>
                          <span>Expiry</span>
                          <span>Status</span>
                        </div>
                        {inventoryData.map((item) => (
                          <div key={item.name} className="grid grid-cols-[1fr_auto_auto_auto] sm:grid-cols-[1fr_auto_auto_auto_auto] gap-3 px-4 py-2.5 border-b border-white/[0.03] last:border-0 items-center text-xs hover:bg-white/[0.02] transition-colors">
                            <span className="font-medium text-white truncate">{item.name}</span>
                            <span className="hidden sm:block text-slate-500 font-mono text-[11px]">{item.batch}</span>
                            <span className="text-slate-300">{item.stock.toLocaleString()}</span>
                            <span className="text-slate-500 text-[11px]">{item.expiry}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              item.status === "ok" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                              item.status === "low" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                              "bg-red-500/10 text-red-400 border border-red-500/20"
                            }`}>
                              {item.status === "ok" ? "In Stock" : item.status === "low" ? "Low" : "Critical"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "Low Stock" && (
                    <motion.div
                      key="lowstock"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-500/[0.08] border border-amber-500/20">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-xs text-amber-300">3 items below reorder threshold — supplier auto-recommendations ready.</span>
                      </div>
                      {lowStockData.map((item) => (
                        <div key={item.name} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:bg-white/[0.05] transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                            <div>
                              <div className="text-xs font-semibold text-white">{item.name}</div>
                              <div className="text-[10px] text-slate-500">Supplier: {item.supplier}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className="text-xs font-bold text-amber-400">{item.stock} units</div>
                              <div className="text-[10px] text-slate-500">Reorder: {item.reorder}</div>
                            </div>
                            <button className="px-3 py-1.5 text-[10px] font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors">
                              Reorder
                            </button>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "Batches" && (
                    <motion.div
                      key="batches"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20">
                        <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs text-emerald-300">FEFO routing active — oldest valid batch prioritized automatically.</span>
                      </div>
                      {batchData.map((batch) => (
                        <div key={batch.id} className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                          batch.priority === "fefo" ? "bg-emerald-500/[0.06] border-emerald-500/20 hover:bg-emerald-500/[0.08]" :
                          batch.priority === "critical" ? "bg-red-500/[0.06] border-red-500/20 hover:bg-red-500/[0.08]" :
                          "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05]"
                        }`}>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold text-white">{batch.id}</span>
                            <span className="text-xs text-slate-400">{batch.drug}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] text-slate-400">{batch.qty.toLocaleString()} units</span>
                            <span className="text-[10px] text-slate-500">Exp: {batch.expiry}</span>
                            <span className="text-[10px] text-slate-600 hidden sm:inline">Shelf {batch.shelf}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              batch.priority === "fefo" ? "bg-emerald-500/15 text-emerald-400" :
                              batch.priority === "critical" ? "bg-red-500/15 text-red-400" :
                              "bg-white/[0.06] text-slate-400"
                            }`}>
                              {batch.priority === "fefo" ? "FEFO Priority" : batch.priority === "critical" ? "Critical" : "Normal"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>All changes synced in real-time</span>
                </div>
                <button className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold hover:text-emerald-300 transition-colors group">
                  View Full Dashboard
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
