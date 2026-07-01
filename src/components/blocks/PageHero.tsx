import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  crumb?: string;
}

export function PageHero({ eyebrow, title, description, image, crumb }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[52vh] min-h-[420px] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-dark/55 to-primary/70" />
        <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-14 md:pb-20">
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[11px] text-background/75">
            <Link to="/" className="hover:text-gold">হোম</Link>
            <ChevronRight size={11} />
            <span className="text-gold">{crumb ?? eyebrow}</span>
          </nav>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold backdrop-blur"
          >
            <span className="h-1 w-1 rounded-full bg-gold" /> {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-display mt-4 max-w-3xl text-4xl text-background sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-background/85 md:text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
