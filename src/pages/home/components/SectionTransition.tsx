import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Whether to apply a cross-fade effect */
  crossFade?: boolean;
  /** Whether to apply subtle parallax */
  parallax?: boolean;
};

export default function SectionTransition({
  children,
  className = "",
  crossFade = true,
  parallax = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = crossFade
    ? useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4])
    : useTransform(scrollYProgress, [0, 1], [1, 1]);

  const y = parallax
    ? useTransform(scrollYProgress, [0, 1], [40, -40])
    : useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
