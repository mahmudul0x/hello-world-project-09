import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/blocks/PageHero";
import { cn } from "@/lib/utils";
import { GALLERY, GALLERY_CATS, IMG, type GalleryCategory } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "গ্যালারি — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux-এর প্রিমিয়াম প্রজেক্ট গ্যালারি — লিভিং রুম, বেডরুম, অফিস, হসপিটাল ও আরও অনেক লাক্সারি ইন্টেরিয়র।" },
      { property: "og:title", content: "প্রজেক্ট গ্যালারি — ChayaLux" },
      { property: "og:image", content: IMG.heroLiving },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<GalleryCategory>("সব");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(
    () => (cat === "সব" ? GALLERY : GALLERY.filter((g) => g.category === cat)),
    [cat],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="গ্যালারি"
        title="আমাদের সম্পন্ন করা লাক্সারি প্রজেক্ট"
        description="প্রতিটি প্রজেক্টই একটি নতুন গল্প — বাস্তব গ্রাহকদের বাড়ি, অফিস ও হসপিটাল থেকে সংগৃহীত মুহূর্তগুলো।"
        image={IMG.heroLiving}
      />

      {/* Categories */}
      <section className="container-luxury pt-10">
        <div className="scroll-x -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GALLERY_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition",
                cat === c
                  ? "border-primary bg-primary text-primary-foreground shadow-soft-lux"
                  : "border-border bg-background text-foreground hover:border-primary/60 hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry */}
      <section className="container-luxury py-10 md:py-14">
        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.button
                key={g.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                onClick={() => setLightbox(g.image)}
                className={cn(
                  "group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[22px] shadow-soft-lux transition hover:shadow-float",
                  g.span === "tall" && "row-span-2",
                )}
              >
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition group-hover:opacity-100">
                  <div className="text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">{g.category}</div>
                    <div className="text-sm font-semibold text-background">{g.title}</div>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-dark shadow-gold">
                    <Expand size={14} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/90 p-4 backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-6xl rounded-[22px] object-contain shadow-luxury"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-background/95 text-dark shadow-luxury transition hover:bg-gold"
              aria-label="বন্ধ"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
