import { motion } from "framer-motion";
import Reveal from "./Reveal";

const tiers = ["Starter", "Clinical Pro", "Enterprise"];

const features = [
  { category: "Core POS & Sales", items: [
    { name: "Point-of-Sale Terminal", starter: true, pro: true, enterprise: true },
    { name: "Multi-Tender Payments", starter: true, pro: true, enterprise: true },
    { name: "Receipt Printing", starter: true, pro: true, enterprise: true },
    { name: "Daily Sales Reconciliation", starter: true, pro: true, enterprise: true },
  ]},
  { category: "Inventory & Dispensing", items: [
    { name: "FEFO Batch Dispensing", starter: true, pro: true, enterprise: true },
    { name: "Expiry & Low Stock Alerts", starter: true, pro: true, enterprise: true },
    { name: "CSV Bulk Import", starter: true, pro: true, enterprise: true },
    { name: "Multi-Location Routing", starter: false, pro: false, enterprise: true },
    { name: "Auto-Reorder Suggestions", starter: false, pro: true, enterprise: true },
  ]},
  { category: "Clinical & Safety", items: [
    { name: "Drug Interaction Alerts", starter: false, pro: true, enterprise: true },
    { name: "Custom Formulary Rules", starter: false, pro: false, enterprise: true },
    { name: "EHR Integration (FHIR/HL7)", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Analytics & Reporting", items: [
    { name: "Revenue Dashboard", starter: true, pro: true, enterprise: true },
    { name: "Inventory Reports", starter: true, pro: true, enterprise: true },
    { name: "Staff Performance Metrics", starter: false, pro: true, enterprise: true },
    { name: "Custom Export Tools", starter: false, pro: true, enterprise: true },
    { name: "Branch-Level Analytics", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Support & Security", items: [
    { name: "Offline Mode", starter: true, pro: true, enterprise: true },
    { name: "Audit Trail", starter: "Basic", pro: "Full", enterprise: "Enterprise" },
    { name: "Staff Accounts", starter: "Up to 3", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Support", starter: "Email", pro: "24/7 Priority", enterprise: "Dedicated Strategist" },
    { name: "SSO (SAML/OAuth2)", starter: false, pro: false, enterprise: true },
  ]},
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <i className="ri-checkbox-circle-fill text-emerald-500 text-base" />;
  if (value === false) return <i className="ri-close-circle-fill text-slate-200 text-base" />;
  return <span className="text-[11px] font-semibold text-slate-600 ">{value}</span>;
}

export default function PricingComparison() {
  return (
    <section className="relative py-14 sm:py-20 bg-white  overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50  border border-emerald-100  text-emerald-700  text-[11px] font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Feature Comparison</span>
          </div>
          <h2 className="text-[2rem] sm:text-4xl font-bold tracking-tight text-slate-900  leading-[1.1] mb-4">
            Compare plans <span className="gradient-text-emerald">side by side.</span>
          </h2>
          <p className="text-sm text-slate-500  max-w-lg mx-auto">
            Every plan includes our core dispensing engine. Upgrade for clinical intelligence and enterprise scale.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200  overflow-hidden bg-white  shadow-sm">
            <div className="grid grid-cols-4 border-b border-slate-100  bg-slate-50 ">
              <div className="p-4 sm:p-5 text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Feature</div>
              {tiers.map((tier, i) => (
                <div key={tier} className={`p-4 sm:p-5 text-center ${i === 1 ? "bg-emerald-50 " : ""}`}>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 ">{tier}</div>
                  {i === 1 && <div className="mt-1 inline-block px-2 py-0.5 rounded-full bg-emerald-600 text-[9px] font-bold text-white">Popular</div>}
                </div>
              ))}
            </div>

            {features.map((group, gi) => (
              <div key={group.category}>
                <div className="grid grid-cols-4 border-b border-slate-100  bg-slate-50 ">
                  <div className="col-span-4 px-4 sm:px-5 py-2.5 text-[10px] font-bold text-slate-500  uppercase tracking-wider">{group.category}</div>
                </div>
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (gi * 5 + ii) * 0.02 }}
                    className="grid grid-cols-4 border-b border-slate-50  last:border-b-0 hover:bg-slate-50  transition-colors"
                  >
                    <div className="flex items-center px-4 sm:px-5 py-3 text-xs text-slate-600 ">{item.name}</div>
                    <div className="flex items-center justify-center py-3"><CellValue value={item.starter} /></div>
                    <div className="flex items-center justify-center py-3 bg-emerald-50 "><CellValue value={item.pro} /></div>
                    <div className="flex items-center justify-center py-3"><CellValue value={item.enterprise} /></div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
