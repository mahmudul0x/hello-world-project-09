import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ feature, index = 0 }: { feature: Feature; index?: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col gap-4 rounded-[22px] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-luxury"
    >
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
}
