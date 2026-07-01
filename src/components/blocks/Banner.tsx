import { motion } from "framer-motion";
import { LuxButton } from "@/components/ui/lux-button";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  cta?: { label: string; onClick?: () => void };
  reverse?: boolean;
}

export function Banner({ eyebrow, title, description, image, cta, reverse }: Props) {
  return (
    <section className="container-luxury">
      <div
        className={`grid overflow-hidden rounded-[28px] bg-card shadow-luxury md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="image-zoom relative aspect-[4/3] md:aspect-auto">
          <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </span>
          )}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-display text-3xl text-foreground sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h3>
          {description && (
            <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
          {cta && (
            <div className="pt-2">
              <LuxButton variant="primary" size="lg" onClick={cta.onClick}>
                {cta.label}
              </LuxButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
