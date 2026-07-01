import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export function TrustCard({ items }: { items: TrustItem[] }) {
  return (
    <section className="container-luxury relative z-20 -mt-16 md:-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-border shadow-float md:grid-cols-4"
      >
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <div
              key={idx}
              className="group flex items-center gap-4 bg-card px-5 py-6 transition-colors hover:bg-primary-soft sm:px-6 sm:py-7"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground sm:h-14 sm:w-14">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm font-semibold text-foreground sm:text-base">
                  {it.title}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">{it.subtitle}</div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
