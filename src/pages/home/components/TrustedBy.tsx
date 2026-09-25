import { motion } from "framer-motion";

const partners = [
  "MedPlus Pharmacy Group",
  "HealthCare Alliance",
  "CityMed Dispensaries",
  "Apex Clinical Pharmacy",
  "QuickCure Networks",
  "AfriMed Health Systems",
  "PharmaCare Ghana",
  "BioHealth Clinics",
];

const loopPartners = [...partners, ...partners];

export default function TrustedBy() {
  return (
    <section className="relative py-10 sm:py-14 bg-white  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em]">
            Trusted by leading pharmacies across Africa
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white  to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white  to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-8 sm:gap-12"
              animate={{ x: [0, -50 * partners.length] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
              }}
            >
              {loopPartners.map((name, i) => (
                <div key={`${name}-${i}`} className="flex items-center gap-2.5 shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-100  border border-slate-200  flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-400">
                      {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 whitespace-nowrap">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { value: "200+", label: "Pharmacies" },
            { value: "10M+", label: "Prescriptions" },
            { value: "99.9%", label: "Uptime" },
            { value: "4", label: "Countries" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-lg sm:text-xl font-bold text-slate-800 ">{stat.value}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
