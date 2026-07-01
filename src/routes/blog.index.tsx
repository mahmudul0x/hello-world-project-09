import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Newsletter } from "@/components/blocks/Newsletter";
import { BLOGS, IMG } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "ব্লগ — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "হোম ডেকোর, ইন্টেরিয়র ডিজাইন এবং পর্দা নির্বাচনের গাইড — ChayaLux ব্লগে পড়ুন এক্সপার্টদের পরামর্শ।" },
      { property: "og:title", content: "ChayaLux ব্লগ" },
      { property: "og:image", content: IMG.hero2 },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("সব");
  const cats = useMemo(() => ["সব", ...new Set(BLOGS.map((b) => b.category))], []);
  const featured = BLOGS[0];

  const filtered = useMemo(() => {
    return BLOGS.filter((b) =>
      (cat === "সব" || b.category === cat) &&
      (!q || b.title.includes(q) || b.excerpt.includes(q)),
    );
  }, [q, cat]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="ব্লগ"
        title="হোম ডেকোরের ভেতরের গল্প ও গাইড"
        description="প্রিমিয়াম হোম ডেকোর নিয়ে বিশেষজ্ঞদের বিশ্লেষণ, ডিজাইন টিপস এবং প্রোডাক্ট গাইড।"
        image={IMG.hero2}
      />

      {/* Featured */}
      <section className="container-luxury py-14 md:py-20">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group grid gap-8 overflow-hidden rounded-[28px] bg-card shadow-luxury lg:grid-cols-2"
        >
          <div className="image-zoom relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
            <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-dark shadow-gold">
              ফিচার্ড
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              {featured.category}
            </div>
            <h2 className="heading-display text-3xl group-hover:text-primary md:text-4xl">
              {featured.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {featured.readMinutes} মিনিট</span>
            </div>
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft-lux transition group-hover:bg-dark">
              সম্পূর্ণ পড়ুন <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      </section>

      {/* Filters + Grid */}
      <section className="container-luxury pb-16 md:pb-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <SectionHeading eyebrow="সর্বশেষ" title="নতুন আর্টিকেল" align="left" />
          <div className="flex flex-1 items-center justify-end gap-2 sm:max-w-md">
            <div className="flex h-11 flex-1 items-center gap-2 rounded-full border border-border bg-background px-4">
              <Search size={15} className="text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="আর্টিকেল খুঁজুন..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition",
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:border-primary/60",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-[22px] border border-border bg-card p-12 text-center text-muted-foreground">
            কোনো আর্টিকেল পাওয়া যায়নি
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b, i) => (
              <motion.article
                key={b.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: b.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float"
                >
                  <div className="image-zoom relative aspect-[16/10] overflow-hidden">
                    <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                      {b.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {b.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {b.readMinutes} মিনিট</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-primary">
                      {b.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {b.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                      পড়ুন <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      <div className="pb-16 md:pb-24">
        <Newsletter />
      </div>
    </SiteLayout>
  );
}
