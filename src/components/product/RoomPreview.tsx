import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROOM_PREVIEWS } from "@/lib/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function RoomPreview() {
  const [active, setActive] = useState(0);
  return (
    <section className="container-luxury py-16 md:py-20">
      <SectionHeading
        eyebrow="রুম প্রিভিউ"
        title="এই পর্দাটি আপনার ঘরে কেমন দেখাবে"
        description="বিভিন্ন রুমে প্রিমিয়াম পর্দার লাইভ ভিউ — ঠিক ChayaLux শোরুমের মতো অভিজ্ঞতা।"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-muted shadow-luxury">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={ROOM_PREVIEWS[active].image}
              alt={ROOM_PREVIEWS[active].name}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-medium shadow-soft-lux backdrop-blur">
            {ROOM_PREVIEWS[active].name}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
          {ROOM_PREVIEWS.map((r, i) => (
            <button
              key={r.name}
              onClick={() => setActive(i)}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-[16px] border-2 transition",
                active === i ? "border-primary shadow-soft-lux" : "border-border hover:border-gold",
              )}
            >
              <img
                src={r.image}
                alt={r.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,color-mix(in_oklab,var(--dark)_75%,transparent),transparent)] px-2 py-1.5 text-[10px] font-medium text-background">
                {r.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
