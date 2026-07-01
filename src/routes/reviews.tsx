import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BadgeCheck, PlayCircle, Quote, Star } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/blocks/AnimatedCounter";
import { IMG, STATS, TESTIMONIALS } from "@/lib/content";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "গ্রাহকদের মতামত — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "হাজারো সন্তুষ্ট গ্রাহকের অভিজ্ঞতা — ChayaLux-এর প্রিমিয়াম পণ্য ও সার্ভিস সম্পর্কে বাস্তব রিভিউ।" },
      { property: "og:title", content: "গ্রাহকদের মতামত — ChayaLux" },
      { property: "og:image", content: IMG.hero3 },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const videos = TESTIMONIALS.filter((t) => t.hasVideo);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="গ্রাহকদের মতামত"
        title="হাজারো পরিবারের ভালোবাসায় গড়া বিশ্বাস"
        description="যাদের ঘরে ChayaLux পৌঁছেছে — তাদের অভিজ্ঞতাই আমাদের সবচেয়ে বড় সম্পদ।"
        image={IMG.hero3}
      />

      <section className="container-luxury py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => <AnimatedCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="container-luxury pb-16 md:pb-24">
        <SectionHeading
          eyebrow="ভেরিফায়েড রিভিউ"
          title="যা বলছেন আমাদের গ্রাহকরা"
          description="প্রতিটি রিভিউ আসল ক্রেতা থেকে সংগৃহীত — কোনো এডিট ছাড়াই প্রকাশিত।"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="relative flex h-full flex-col gap-5 rounded-[22px] bg-card p-8 shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float"
            >
              <Quote className="absolute right-6 top-6 text-gold/25" size={40} />
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} fill={j < t.rating ? "currentColor" : "none"} strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/85">"{t.text}"</p>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                {t.product}
              </div>
              <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-display font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 font-medium text-foreground">
                    {t.name}
                    {t.verified && (
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500 text-white" title="ভেরিফায়েড ক্রেতা">
                        <BadgeCheck size={11} />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video reviews */}
      <section className="bg-dark py-14 text-background md:py-20">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="ভিডিও রিভিউ"
            title="গ্রাহকদের কণ্ঠে ChayaLux"
            description="আমাদের প্রকৃত গ্রাহকদের নিজেদের কথায় শেয়ার করা অভিজ্ঞতা।"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-[22px] shadow-luxury"
              >
                <img
                  src={[IMG.hero2, IMG.hero3, IMG.hero4][i % 3]}
                  alt={v.name}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                <button className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-gold text-dark shadow-gold transition group-hover:scale-110">
                    <PlayCircle size={40} strokeWidth={1.5} />
                  </span>
                </button>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">
                    ভিডিও রিভিউ
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-background">{v.name}</div>
                  <div className="text-xs text-background/75">{v.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
