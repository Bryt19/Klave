import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roles } from "@/mocks/homeContent";
import Reveal from "./Reveal";

const roleColors: Record<string, { bg: string; text: string; border: string; ring: string; activeBg: string }> = {
  owner: { bg: "bg-violet-50 dark:bg-violet-900/30", text: "text-violet-600", border: "border-violet-200", ring: "ring-violet-100", activeBg: "bg-violet-600" },
  pharmacist: { bg: "bg-blue-50 dark:bg-blue-900/30", text: "text-blue-600", border: "border-blue-200", ring: "ring-blue-100", activeBg: "bg-blue-600" },
  cashier: { bg: "bg-emerald-50 dark:bg-emerald-900/30", text: "text-emerald-600", border: "border-emerald-200", ring: "ring-emerald-100", activeBg: "bg-emerald-600" },
  manager: { bg: "bg-amber-50 dark:bg-amber-900/30", text: "text-amber-600", border: "border-amber-200", ring: "ring-amber-100", activeBg: "bg-amber-600" },
  staff: { bg: "bg-sky-50 dark:bg-sky-900/30", text: "text-sky-600", border: "border-sky-200", ring: "ring-sky-100", activeBg: "bg-sky-600" },
};

export default function RoleSwitcher() {
  const [activeRole, setActiveRole] = useState(roles[0].id);
  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];
  const colors = roleColors[activeRole] || roleColors.staff;

  return (
    <section id="platform" className="relative py-14 sm:py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-8 sm:mb-10 text-center mx-auto">
          <Reveal>
            <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5">
              Built for every role{" "}
              <span className="gradient-text-emerald">in your pharmacy.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
              Each team member sees exactly what they need, nothing more, nothing less. Select a role to see their workspace.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
            {roles.map((role) => {
              const rc = roleColors[role.id] || roleColors.staff;
              const isActive = activeRole === role.id;
              return (
                <motion.button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `${rc.activeBg} text-white shadow-sm`
                      : `bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:${rc.text} hover:${rc.border}`
                  }`}
                >
                  <i className={`${role.icon} text-sm`} />
                  <span className="hidden sm:inline">{role.name}</span>
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm card-hover-glow">
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <i className={`${currentRole.icon} ${colors.text} text-xl`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{currentRole.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{currentRole.description}</p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Capabilities</div>
                  <div className="space-y-2.5">
                    {currentRole.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <i className={`ri-check-line ${colors.text} text-sm mt-0.5 shrink-0`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm dashboard-shadow min-h-[360px]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <i className={`${currentRole.icon} ${colors.text} text-sm`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{currentRole.name} Dashboard</div>
                      <div className="text-[10px] text-slate-400">Klavora Workspace</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-slate-400">Live</span>
                  </div>
                </div>

                {activeRole === "owner" && (
                  <div className="space-y-3">
                    {[
                      { branch: "Accra Central", rx: 142, revenue: "GH₵ 8,420", status: "Operational" },
                      { branch: "East Legon", rx: 98, revenue: "GH₵ 6,210", status: "Operational" },
                      { branch: "Kumasi Main", rx: 76, revenue: "GH₵ 4,890", status: "Low Stock Alert" },
                      { branch: "Tema Medical", rx: 63, revenue: "GH₵ 3,740", status: "Operational" },
                      { branch: "Takoradi Hub", rx: 54, revenue: "GH₵ 2,960", status: "Operational" },
                    ].map((b) => (
                      <div key={b.branch} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-violet-400" />
                          <div>
                            <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">{b.branch}</div>
                            <div className="text-[10px] text-slate-400">{b.rx} prescriptions today</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{b.revenue}</div>
                          <div className={`text-[9px] font-medium ${b.status.includes("Alert") ? "text-amber-600" : "text-emerald-600"}`}>{b.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeRole === "pharmacist" && (
                  <div className="space-y-3">
                    {[
                      { rx: "RX-9488", patient: "Eleanor Vance", drug: "Lisinopril 20mg", status: "Pending Review", color: "amber" },
                      { rx: "RX-9489", patient: "Marcus Sterling", drug: "Amoxicillin 500mg", status: "Approved", color: "emerald" },
                      { rx: "RX-9490", patient: "Sarah Okonjo", drug: "Metformin 850mg", status: "Drug Alert", color: "red" },
                      { rx: "RX-9491", patient: "James Mensah", drug: "Cefuroxime 250mg", status: "Pending Review", color: "amber" },
                      { rx: "RX-9492", patient: "Ama Darko", drug: "Omeprazole 20mg", status: "Approved", color: "emerald" },
                    ].map((item) => (
                      <div key={item.rx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-[10px] font-bold text-blue-600 font-mono">Rx</div>
                          <div>
                            <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">{item.drug}</div>
                            <div className="text-[10px] text-slate-400">{item.rx} · {item.patient}</div>
                          </div>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          item.color === "amber" ? "bg-amber-50 dark:bg-amber-900/30 text-amber-600 border border-amber-100 dark:border-amber-800/40" :
                          item.color === "emerald" ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 border border-emerald-100 dark:border-emerald-800/40" :
                          "bg-red-50 dark:bg-red-900/30 text-red-600 border border-red-100 dark:border-red-800/40"
                        }`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeRole === "cashier" && (
                  <div className="space-y-3">
                    {[
                      { item: "Amoxicillin 500mg", qty: "30 caps", total: "GH₵ 45.00", time: "2m ago" },
                      { item: "Metformin 850mg", qty: "60 tabs", total: "GH₵ 120.00", time: "5m ago" },
                      { item: "Paracetamol 500mg", qty: "100 tabs", total: "GH₵ 15.00", time: "8m ago" },
                      { item: "Lisinopril 20mg", qty: "30 tabs", total: "GH₵ 62.00", time: "11m ago" },
                      { item: "Omeprazole 20mg", qty: "28 caps", total: "GH₵ 38.50", time: "14m ago" },
                    ].map((tx) => (
                      <div key={tx.item + tx.time} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">{tx.item}</div>
                          <div className="text-[10px] text-slate-400">{tx.qty} · {tx.time}</div>
                        </div>
                        <div className="text-[11px] font-bold text-slate-700">{tx.total}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeRole === "manager" && (
                  <div className="space-y-3">
                    {[
                      { name: "Amoxicillin 500mg", stock: 142, max: 500, alert: "Monitor" },
                      { name: "Paracetamol 500mg", stock: 890, max: 1000, alert: "OK" },
                      { name: "Cefuroxime 250mg", stock: 8, max: 200, alert: "Reorder Now" },
                      { name: "Metformin 850mg", stock: 312, max: 400, alert: "OK" },
                      { name: "Amlodipine 5mg", stock: 45, max: 300, alert: "Low Stock" },
                    ].map((item) => (
                      <div key={item.name} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">{item.name}</div>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            item.alert === "Reorder Now" ? "bg-red-50 dark:bg-red-900/30 text-red-600 border border-red-100 dark:border-red-800/40" :
                            item.alert === "Monitor" || item.alert === "Low Stock" ? "bg-amber-50 dark:bg-amber-900/30 text-amber-600 border border-amber-100 dark:border-amber-800/40" :
                            "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 border border-emerald-100 dark:border-emerald-800/40"
                          }`}>{item.alert}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 overflow-hidden">
                          <div className={`h-full rounded-full ${
                            item.alert === "Reorder Now" ? "bg-red-400" :
                            item.alert === "Monitor" || item.alert === "Low Stock" ? "bg-amber-400" : "bg-emerald-400"
                          }`} style={{ width: `${(item.stock / item.max) * 100}%` }} />
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">{item.stock} / {item.max} units</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeRole === "staff" && (
                  <div className="space-y-3">
                    {[
                      { action: "Dispensed Amoxicillin 500mg to Eleanor Vance", time: "3m ago", icon: "ri-check-double-line", color: "emerald" },
                      { action: "Completed stock count for Paracetamol 500mg", time: "12m ago", icon: "ri-archive-line", color: "blue" },
                      { action: "Flagged Cefuroxime 250mg low stock alert", time: "18m ago", icon: "ri-alarm-warning-line", color: "amber" },
                      { action: "Assisted patient Marcus Sterling with refill", time: "25m ago", icon: "ri-user-heart-line", color: "violet" },
                      { action: "Logged daily opening inventory check", time: "1h ago", icon: "ri-clipboard-line", color: "sky" },
                    ].map((log) => (
                      <div key={log.action} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          log.color === "emerald" ? "bg-emerald-50 dark:bg-emerald-900/30" :
                          log.color === "blue" ? "bg-blue-50 dark:bg-blue-900/30" :
                          log.color === "amber" ? "bg-amber-50 dark:bg-amber-900/30" :
                          log.color === "violet" ? "bg-violet-50 dark:bg-violet-900/30" : "bg-sky-50 dark:bg-sky-900/30"
                        }`}>
                          <i className={`${log.icon} text-sm ${
                            log.color === "emerald" ? "text-emerald-600" :
                            log.color === "blue" ? "text-blue-600" :
                            log.color === "amber" ? "text-amber-600" :
                            log.color === "violet" ? "text-violet-600" : "text-sky-600"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">{log.action}</div>
                          <div className="text-[10px] text-slate-400">{log.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
