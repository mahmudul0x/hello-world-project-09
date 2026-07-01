import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LuxButton } from "@/components/ui/lux-button";

interface Props {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  onCta?: () => void;
}

export function CollectionBanner({
  eyebrow,
  title,
  description,
  image,
  ctaLabel = "শপ করুন",
  onCta,
}: Props) {
  return (
    <section className="container-luxury pt-6 md:pt-10">
      <div className="relative overflow-hidden rounded-[28px] shadow-luxury">
        <div className="image-zoom relative aspect-[16/8] w-full sm:aspect-[16/6]">
          <img
            src={image}
            alt={title}
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--dark)_75%,transparent)_0%,color-mix(in_oklab,var(--dark)_35%,transparent)_50%,transparent_100%)]" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-primary-foreground"
            >
              {eyebrow && (
                <span className="mb-4 inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-dark">
                  {eyebrow}
                </span>
              )}
              <h1 className="heading-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
                {description}
              </p>
              <div className="mt-6">
                <LuxButton variant="gold" size="lg" onClick={onCta}>
                  {ctaLabel} <ArrowRight size={16} />
                </LuxButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
