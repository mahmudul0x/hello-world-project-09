"use client";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { LuxButton } from "@/components/ui/lux-button";

export interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  const total = slides.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % total), 6500);
    return () => clearInterval(t);
  }, [total]);

  const go = (n: number) => setI((n + total) % total);
  const slide = slides[i];

  return (
    <section className="relative w-full overflow-hidden bg-dark">
      <div className="relative h-[500px] w-full sm:h-[600px] lg:h-[700px] xl:h-[750px]">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 8, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="container-luxury relative z-10 flex h-full items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex max-w-3xl flex-col items-center gap-5 text-background"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-gold backdrop-blur-md">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {slide.eyebrow}
              </span>
              <h1 className="heading-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
                {slide.title}{" "}
                <span className="text-gold-gradient">{slide.highlight}</span>
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-background/85 sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <LuxButton variant="gold" size="lg" onClick={() => navigate({ to: "/shop" })}>
                  এখনই অর্ডার করুন <ArrowRight size={16} />
                </LuxButton>
                <LuxButton
                  variant="outline"
                  size="lg"
                  onClick={() => navigate({ to: "/new-collection" })}
                  className="border-background/40 text-background hover:border-gold hover:text-gold"
                >
                  সব কালেকশন দেখুন
                </LuxButton>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(i - 1)}
          aria-label="আগের স্লাইড"
          className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 bg-background/10 text-background backdrop-blur-md transition hover:bg-gold hover:text-dark md:flex lg:left-8"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="পরের স্লাইড"
          className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 bg-background/10 text-background backdrop-blur-md transition hover:bg-gold hover:text-dark md:flex lg:right-8"
        >
          <ChevronRight size={20} />
        </button>

        {/* Pagination */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`স্লাইড ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-10 bg-gold" : "w-4 bg-background/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
