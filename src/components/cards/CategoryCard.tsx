import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface Category {
  name: string;
  count: number;
  image: string;
}

export function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group image-zoom relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[22px] shadow-soft-lux hover-lift"
    >
      <img src={category.image} alt={category.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="relative z-10 flex items-end justify-between gap-3 p-6 text-background">
        <div>
          <h3 className="font-display text-xl font-semibold leading-tight">{category.name}</h3>
          <p className="mt-1 text-xs text-background/75">{category.count}টি পণ্য</p>
        </div>
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-background/95 text-primary transition group-hover:bg-gold group-hover:text-dark">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.a>
  );
}
