import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type Metric = {
  label: string;
  value: number;
  suffix: string;
  icon: string;
};

const metrics: Metric[] = [
  { label: "Inventory Value", value: 184500, suffix: "", icon: "ri-box-3-line" },
  { label: "Gross Margin", value: 32800, suffix: "", icon: "ri-line-chart-line" },
  { label: "Total Revenue", value: 97600, suffix: "", icon: "ri-money-dollar-circle-line" },
];

const sparkPoints = [30, 42, 38, 55, 60, 74, 68, 88, 82, 95];

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) {
      motionVal.set(value);
    }
  }, [inView, motionVal, value]);

  useEffect(() => {
    const unsub = spring.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
    return () => unsub();
  }, [spring]);

  return <span ref={ref}>0</span>;
}

function Sparkline() {
  const w = 120;
  const h = 40;
  const max = Math.max(...sparkPoints);
  const min = Math.min(...sparkPoints);
  const step = w / (sparkPoints.length - 1);
  const path = sparkPoints
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / (max - min)) * (h - 8) - 4;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10">
      <motion.path
        d={path}
        fill="none"
        stroke="oklch(var(--primary-400))"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function KpiWindow() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
          KPI Dashboard
        </h4>
        <span className="text-[10px] text-foreground-600">This month</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="p-3 rounded-lg border border-background-200/15 bg-background-50/60"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <i className={`${m.icon} text-primary-400 text-sm`} />
            </div>
            <p className="text-sm md:text-base font-semibold text-foreground-100">
              GH₵<CountUp value={m.value} />
            </p>
            <p className="text-[10px] text-foreground-600 mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-background-200/15 bg-background-50/60 p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-foreground-400">
            Daily Revenue (GH₵)
          </span>
          <span className="text-[10px] text-primary-400 font-medium">
            +12.4%
          </span>
        </div>
        <Sparkline />
      </div>

      <p className="mt-3 text-[11px] text-foreground-600 flex items-center gap-1.5">
        <i className="ri-funds-line text-primary-400" />
        Financial metrics explained in plain language
      </p>
    </div>
  );
}