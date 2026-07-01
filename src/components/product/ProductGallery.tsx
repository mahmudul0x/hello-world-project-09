import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setZoom({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-24">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-muted shadow-luxury"
        onMouseMove={onMove}
        onMouseLeave={() => setZoom(null)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active]}
            alt={alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={
              zoom
                ? {
                    transformOrigin: `${zoom.x}% ${zoom.y}%`,
                    transform: "scale(1.6)",
                  }
                : undefined
            }
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
          />
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "aspect-square overflow-hidden rounded-[14px] border-2 transition",
              active === i ? "border-primary shadow-soft-lux" : "border-border hover:border-gold",
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
