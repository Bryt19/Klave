import PosWindow from "./windows/PosWindow";
import InventoryWindow from "./windows/InventoryWindow";
import KpiWindow from "./windows/KpiWindow";
import OfflineWindow from "./windows/OfflineWindow";
import AuditLogWindow from "./windows/AuditLogWindow";
import HoldWindow from "./windows/HoldWindow";
import CsvImportWindow from "./windows/CsvImportWindow";
import Reveal from "./Reveal";

type FeatureDef = {
  title: string;
  description: string;
  render: React.ReactNode;
  wide?: boolean;
};

const features: FeatureDef[] = [
  {
    title: "Full POS Terminal",
    description:
      "A fast, clean point of sale built for the pharmacy counter. Add items, hold carts, and complete sales in seconds.",
    render: <PosWindow />,
    wide: true,
  },
  {
    title: "Smart Inventory Management",
    description:
      "Batch tracking with automatic expiry flagging and color-coded indicators. Know what's running low before it runs out.",
    render: <InventoryWindow />,
  },
  {
    title: "KPI Dashboard",
    description:
      "Financial metrics explained in plain language for pharmacists — not accountants. Inventory value, margin, and revenue at a glance.",
    render: <KpiWindow />,
  },
  {
    title: "Offline Selling with Auto Sync",
    description:
      "Keep selling when the network drops. Every sale queues locally and syncs the moment you reconnect.",
    render: <OfflineWindow />,
  },
  {
    title: "FEFO Dispensing Logic",
    description:
      "Klavora automatically pulls from the soonest expiring batch first, so nothing sits on the shelf past its date.",
    render: null,
  },
  {
    title: "Hold Feature",
    description:
      "Hold an active cart, serve the next customer, and resume the held cart seamlessly — no lost sales at the counter.",
    render: <HoldWindow />,
  },
  {
    title: "Audit Log",
    description:
      "Every action in your system is recorded — sales, edits, restocks, and staff logins — with full accountability.",
    render: <AuditLogWindow />,
  },
  {
    title: "Smart CSV Bulk Importer",
    description:
      "Upload your entire drug list in minutes. Batch numbers and expiry dates are captured automatically.",
    render: <CsvImportWindow />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center rounded-lg bg-background-100 border border-background-200/30">
            <i className="ri-store-2-line text-lg text-primary-400" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-50 tracking-tight mb-4">
            Everything your pharmacy needs,
            <br />
            in one platform
          </h2>
          <p className="text-sm md:text-base text-foreground-500 max-w-lg mx-auto leading-relaxed">
            From the counter to the storeroom to the dashboard, Klavora is a
            complete operating system for pharmacies in Ghana and across
            Africa.
          </p>
        </Reveal>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={(i % 2) * 0.1}
              className={feature.wide ? "md:col-span-2" : ""}
            >
              <div
                className="group rounded-xl border border-background-200/20 bg-background-100/30 overflow-hidden hover:border-primary-400/40 transition-all duration-300 h-full"
              >
                {/* Window body */}
                <div className="p-5 md:p-6">
                  {feature.render ? (
                    feature.render
                  ) : (
                    <div className="rounded-lg border border-background-200/15 bg-background-50/40 p-4">
                      <div className="flex items-start gap-3">
                        <span className="w-9 h-9 rounded-md bg-primary-500/15 flex items-center justify-center shrink-0">
                          <i className="ri-stack-line text-primary-400 text-base" />
                        </span>
                        <p className="text-xs text-foreground-400 leading-relaxed">
                          When it's time to dispense, Klavora suggests the batch
                          expiring soonest — so the oldest stock always leaves
                          first and nothing gets wasted.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Feature copy */}
                  <div className="mt-4 pt-4 border-t border-background-200/10">
                    <h3 className="text-base md:text-lg font-semibold text-foreground-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}