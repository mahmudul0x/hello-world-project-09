import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LuxButton } from "@/components/ui/lux-button";

export interface Collection {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cta: string;
}

export function FeaturedCollection({ collections }: { collections: Collection[] }) {
  return (
    <div className="container-luxury flex flex-col gap-6">
      {collections.map((c, i) => {
        const reverse = i % 2 === 1;
        return (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`grid overflow-hidden rounded-[28px] bg-card shadow-luxury md:grid-cols-[1.1fr_1fr] ${
              reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="image-zoom relative aspect-[5/4] md:aspect-auto md:min-h-[420px]">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
                  কালেকশন {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {c.eyebrow}
              </span>
              <h3 className="heading-display text-3xl text-foreground sm:text-4xl lg:text-[42px]">
                {c.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <div className="pt-2">
                <LuxButton variant="primary" size="lg">
                  {c.cta} <ArrowRight size={16} />
                </LuxButton>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
