import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background-50">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Teal ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(var(--primary-500) / 0.22) 0%, oklch(var(--primary-600) / 0.08) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Navy secondary glow */}
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(var(--accent-500) / 0.20) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle bottom glow */}
        <div
          className="absolute bottom-0 left-1/3 w-[600px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, oklch(var(--primary-400) / 0.10) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(var(--foreground-50)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--foreground-50)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-background-200/30 bg-background-100/50 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-xs text-foreground-400">
              Trusted by pharmacies across Africa
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground-50 leading-[1.1] mb-6"
          >
            Pharmacy Management,
            <br />
            Built for Africa.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="text-base md:text-lg text-foreground-400 max-w-lg leading-relaxed mb-8"
          >
            One platform for inventory, sales, staff, and insights. Klavora is
            the complete operating system for pharmacies in Ghana and across
            Africa — built to work online and offline.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://app.klavora.com/signup"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary-500 text-background-50 rounded-md hover:bg-primary-400 transition-colors duration-200 whitespace-nowrap"
            >
              Get Started
              <i className="ri-arrow-right-line text-sm" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium border border-background-200/40 text-foreground-300 rounded-md hover:border-primary-400/60 hover:text-foreground-100 transition-all duration-200 whitespace-nowrap"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}