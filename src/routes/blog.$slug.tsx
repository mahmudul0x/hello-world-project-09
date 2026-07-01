import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock, Facebook,
  Link as LinkIcon, MessageCircle, Quote, Share2, User,
} from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { BLOGS, IMG } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const b = BLOGS.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: b ? `${b.title} — ChayaLux ব্লগ` : "ব্লগ — ChayaLux" },
        { name: "description", content: b?.excerpt ?? "ChayaLux ব্লগ" },
        { property: "og:title", content: b?.title ?? "ChayaLux ব্লগ" },
        { property: "og:description", content: b?.excerpt ?? "" },
        ...(b?.image ? [{ property: "og:image", content: b.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    if (!BLOGS.find((x) => x.slug === params.slug)) throw notFound();
    return null;
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-luxury py-32 text-center">
        <h1 className="heading-display text-4xl">আর্টিকেল পাওয়া যায়নি</h1>
        <div className="mt-6">
          <Link to="/blog"><LuxButton variant="primary" size="lg">সব ব্লগ দেখুন</LuxButton></Link>
        </div>
      </div>
    </SiteLayout>
  ),
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const post = BLOGS.find((x) => x.slug === slug)!;
  const related = BLOGS.filter((x) => x.slug !== slug).slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://chayalux.com/blog/${slug}`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(shareUrl); toast.success("লিংক কপি হয়েছে"); }
    catch { toast.error("কপি করা যায়নি"); }
  };

  return (
    <SiteLayout>
      {/* Banner */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2 }}
            src={post.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/70 to-dark/95" />
          <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-14 md:pb-20">
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[11px] text-background/75">
              <Link to="/" className="hover:text-gold">হোম</Link>
              <ChevronRight size={11} />
              <Link to="/blog" className="hover:text-gold">ব্লগ</Link>
              <ChevronRight size={11} />
              <span className="text-gold">{post.category}</span>
            </nav>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              {post.category}
            </span>
            <h1 className="heading-display mt-4 max-w-4xl text-3xl text-background sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-background/80">
              <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readMinutes} মিনিট পড়া</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-luxury py-14 md:py-20">
        <article className="mx-auto max-w-3xl">
          <div className="prose-luxury space-y-6 text-[16px] leading-[1.85] text-foreground/85">
            {post.content.map((block, i) => {
              if (block.type === "h2")
                return <h2 key={i} className="heading-display pt-4 text-2xl md:text-3xl">{block.text}</h2>;
              if (block.type === "p") return <p key={i}>{block.text}</p>;
              if (block.type === "quote")
                return (
                  <blockquote key={i} className="relative rounded-[22px] bg-primary-soft/60 p-8 pl-16 shadow-soft-lux">
                    <Quote className="absolute left-5 top-6 text-gold/60" size={28} />
                    <p className="font-display text-lg italic text-primary md:text-xl">{block.text}</p>
                  </blockquote>
                );
              if (block.type === "img")
                return (
                  <figure key={i} className="overflow-hidden rounded-[22px] shadow-soft-lux">
                    <img src={block.src} alt={block.caption ?? ""} className="w-full object-cover" />
                    {block.caption && (
                      <figcaption className="bg-card p-3 text-center text-xs text-muted-foreground">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              return null;
            })}
          </div>

          {/* Author */}
          <div className="mt-14 flex flex-wrap items-center gap-4 rounded-[22px] border border-border bg-card p-6 shadow-soft-lux">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-dark font-display text-xl font-bold text-primary-foreground shadow-luxury">
              {post.author.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">লেখক</div>
              <div className="font-display text-base font-bold">{post.author}</div>
              <p className="text-xs text-muted-foreground">ChayaLux কনটেন্ট টিম</p>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-primary-soft/50 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Share2 size={16} /> এই আর্টিকেলটি শেয়ার করুন
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"
                className="ripple-btn flex h-10 items-center gap-2 rounded-full bg-[#1877F2] px-4 text-xs font-medium text-white transition hover:-translate-y-0.5">
                <Facebook size={13} /> Facebook
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${shareUrl}`)}`} target="_blank" rel="noreferrer"
                className="ripple-btn flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-4 text-xs font-medium text-white transition hover:-translate-y-0.5">
                <MessageCircle size={13} /> WhatsApp
              </a>
              <button onClick={copy}
                className="ripple-btn flex h-10 items-center gap-2 rounded-full bg-dark px-4 text-xs font-medium text-background transition hover:-translate-y-0.5 hover:bg-primary">
                <LinkIcon size={13} /> লিংক কপি
              </button>
            </div>
          </div>

          <div className="mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-dark">
              <ArrowLeft size={14} /> সব ব্লগে ফিরুন
            </Link>
          </div>
        </article>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-primary-soft/30 py-14 md:py-20">
        <div className="container-luxury">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">আরও পড়ুন</div>
              <h2 className="heading-display mt-2 text-2xl md:text-3xl">সম্পর্কিত আর্টিকেল</h2>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-primary hover:text-dark sm:inline-flex sm:items-center sm:gap-1">
              সব দেখুন <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((b) => (
              <Link key={b.slug} to="/blog/$slug" params={{ slug: b.slug }}
                className="group flex flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float">
                <div className="image-zoom aspect-[16/10] overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">{b.category}</div>
                  <div className="font-display text-base font-semibold group-hover:text-primary">{b.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unused suppression */}
      <span className="hidden">{IMG.hero3 ? "" : ""}</span>
    </SiteLayout>
  );
}
