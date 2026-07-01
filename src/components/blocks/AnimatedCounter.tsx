import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { bnNum } from "@/lib/products";

interface Props {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", label, duration = 1.6 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2 rounded-[22px] border border-gold/25 bg-card/70 p-6 text-center shadow-soft-lux backdrop-blur"
    >
      <span className="font-display text-4xl font-bold text-primary sm:text-5xl">
        {bnNum(count)}
        <span className="text-gold">{suffix}</span>
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}
