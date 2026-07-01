import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Award, Banknote, Check, ChevronRight, Facebook, Heart,
  MessageCircle, Minus, Package, Palette, Phone, Plus,
  RotateCcw, ShieldCheck, ShoppingBag, Star, Truck,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RoomPreview } from "@/components/product/RoomPreview";
import { RecentlyViewed } from "@/components/product/RecentlyViewed";
import { ProductCardPro } from "@/components/product/ProductCardPro";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { bnNum, bnPrice, getProduct, getRelated, REVIEWS_SEED } from "@/lib/products";
import { useShop } from "@/lib/shop/store";
import { useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    const title = p ? `${p.name} — ChayaLux` : "পণ্য — ChayaLux";
    return {
      meta: [
        { title },
        { name: "description", content: p?.shortDesc ?? "ChayaLux প্রিমিয়াম পণ্য।" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.shortDesc ?? "" },
        ...(p?.images[0] ? [{ property: "og:image", content: p.images[0] }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    if (!getProduct(params.slug)) throw notFound();
    return null;
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-luxury py-32 text-center">
        <h1 className="heading-display text-4xl">পণ্যটি পাওয়া যায়নি</h1>
        <p className="mt-3 text-muted-foreground">এই পণ্যটি আর নেই বা লিংকটি ভুল।</p>
        <div className="mt-6">
          <Link to="/shop">
            <LuxButton variant="primary" size="lg">সব পণ্য দেখুন</LuxButton>
          </Link>
        </div>
      </div>
    </SiteLayout>
  ),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;
  const related = useMemo(() => getRelated(product), [product]);
  const [color, setColor] = useState(product.colors[0]?.name);
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const { add } = useRecentlyViewed();

  useEffect(() => {
    add(slug);
  }, [slug, add]);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <SiteLayout>
      {/* Breadcrumb */}
      <div className="container-luxury pt-6">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="transition hover:text-primary">হোম</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="transition hover:text-primary">সব পণ্য</Link>
          <ChevronRight size={12} />
          <Link
            to="/collections/$slug"
            params={{ slug: product.category }}
            className="transition hover:text-primary"
          >
            {product.categoryName}
          </Link>
          <ChevronRight size={12} />
          <span className="truncate text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="container-luxury py-8 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] xl:gap-14">
          <ProductGallery images={product.images} alt={product.name} />

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                {product.categoryName}
              </span>
              {product.isNew && (
                <span className="rounded-full bg-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-background">
                  নতুন
                </span>
              )}
              {product.isBestSeller && (
                <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-dark">
                  বেস্ট সেলার
                </span>
              )}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-display text-3xl sm:text-4xl"
            >
              {product.name}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={15}
                    className={cn(
                      "text-gold",
                      i < Math.round(product.rating) && "fill-gold",
                    )}
                  />
                ))}
                <span className="ml-1.5 font-semibold">{product.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({product.reviews} রিভিউ)</span>
              </span>
              <span className={cn(
                "flex items-center gap-1 text-xs font-medium",
                product.inStock ? "text-emerald-700" : "text-destructive",
              )}>
                <Check size={13} /> {product.inStock ? "স্টকে আছে" : "স্টক নেই"}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-bold text-primary">
                {bnPrice(product.price)}
              </span>
              {product.oldPrice && (
                <>
                  <span className="text-base text-muted-foreground line-through">
                    {bnPrice(product.oldPrice)}
                  </span>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
                    -{discount}% ছাড়
                  </span>
                </>
              )}
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.shortDesc}
            </p>

            {/* Fabric */}
            <div className="rounded-[16px] bg-primary-soft/60 px-4 py-3 text-sm">
              <span className="font-semibold text-primary">ফেব্রিক:</span>{" "}
              <span className="text-foreground/80">{product.fabric}</span>
            </div>

            {/* Colors */}
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                রঙ: <span className="text-primary">{color}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    title={c.name}
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-full border-2 transition",
                      color === c.name ? "border-primary shadow-soft-lux" : "border-border hover:border-gold",
                    )}
                    style={{ background: c.hex }}
                  >
                    {color === c.name && <Check size={14} className="text-background" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                সাইজ
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={cn(
                      "rounded-[14px] border px-4 py-2.5 text-xs font-medium transition",
                      size === s
                        ? "border-primary bg-primary text-primary-foreground shadow-soft-lux"
                        : "border-border bg-background text-foreground hover:border-primary",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Buy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex h-14 items-center gap-1 rounded-[18px] border border-border bg-background px-2">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-10 w-10 place-items-center rounded-[12px] text-foreground transition hover:bg-primary-soft hover:text-primary"
                  aria-label="কমান"
                >
                  <Minus size={16} />
                </button>
                <span className="grid w-10 place-items-center font-display text-base font-semibold">
                  {bnNum(qty)}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-10 w-10 place-items-center rounded-[12px] text-foreground transition hover:bg-primary-soft hover:text-primary"
                  aria-label="বাড়ান"
                >
                  <Plus size={16} />
                </button>
              </div>
              <LuxButton variant="primary" size="lg" className="flex-1 min-w-[180px]">
                <ShoppingBag size={16} /> কার্টে যোগ করুন
              </LuxButton>
              <LuxButton variant="gold" size="lg" className="flex-1 min-w-[180px]">
                এখনই অর্ডার করুন
              </LuxButton>
              <button
                aria-label="উইশলিস্ট"
                className="grid h-14 w-14 place-items-center rounded-[18px] border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
              >
                <Heart size={18} />
              </button>
            </div>

            {/* Contact channels */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://wa.me/8801885901184"
                target="_blank"
                rel="noreferrer"
                className="ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-emerald-600 text-xs font-medium text-white transition hover:-translate-y-0.5"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href="https://m.me/chayalux"
                target="_blank"
                rel="noreferrer"
                className="ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-blue-600 text-xs font-medium text-white transition hover:-translate-y-0.5"
              >
                <Facebook size={14} /> Messenger
              </a>
              <a
                href="tel:01885901184"
                className="ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-dark text-xs font-medium text-background transition hover:-translate-y-0.5 hover:bg-primary"
              >
                <Phone size={14} /> কল করুন
              </a>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
              <TrustBadge icon={Truck} title="দ্রুত ডেলিভারি" sub="সারা বাংলাদেশে" />
              <TrustBadge icon={Banknote} title="ক্যাশ অন ডেলিভারি" sub="হাতে পেয়ে পেমেন্ট" />
              <TrustBadge icon={Palette} title="১০০% কালার গ্যারান্টি" sub="রং জ্বলবে না" />
              <TrustBadge icon={Award} title="প্রিমিয়াম কোয়ালিটি" sub="আন্তর্জাতিক মান" />
              <TrustBadge icon={RotateCcw} title="সহজ রিটার্ন" sub="৭ দিনের মধ্যে" />
              <TrustBadge icon={ShieldCheck} title="জেনুইন প্রোডাক্ট" sub="ব্র্যান্ড ওয়ারেন্টি" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs — details */}
      <section className="container-luxury pb-16">
        <div className="rounded-[24px] border border-border/60 bg-card p-6 shadow-soft-lux md:p-10">
          <Tabs defaultValue="desc" className="w-full">
            <TabsList className="mb-6 flex w-full flex-wrap gap-2 bg-transparent p-0">
              {[
                { v: "desc", l: "বিস্তারিত" },
                { v: "features", l: "ফিচার" },
                { v: "specs", l: "স্পেসিফিকেশন" },
                { v: "delivery", l: "ডেলিভারি ও রিটার্ন" },
              ].map((t) => (
                <TabsTrigger
                  key={t.v}
                  value={t.v}
                  className="rounded-full border border-border bg-background px-5 py-2 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {t.l}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="desc">
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
                {product.description}
              </p>
            </TabsContent>

            <TabsContent value="features">
              <ul className="grid gap-3 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-[14px] bg-primary-soft/50 px-4 py-3 text-sm">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="specs">
              <div className="overflow-hidden rounded-[16px] border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((s, i) => (
                      <tr key={s.label} className={i % 2 ? "bg-muted/40" : "bg-background"}>
                        <td className="px-4 py-3 font-semibold text-foreground/80 sm:w-1/3">{s.label}</td>
                        <td className="px-4 py-3 text-foreground/70">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="delivery">
              <div className="grid gap-4 sm:grid-cols-2">
                <DeliveryCard icon={Truck} title="ঢাকার ভিতরে" text="১-২ কর্মদিবসে হোম ডেলিভারি।" />
                <DeliveryCard icon={Package} title="ঢাকার বাইরে" text="২-৪ কর্মদিবসে সারা বাংলাদেশে।" />
                <DeliveryCard icon={Banknote} title="ক্যাশ অন ডেলিভারি" text="পণ্য হাতে পেয়ে পেমেন্ট করুন।" />
                <DeliveryCard icon={RotateCcw} title="রিটার্ন পলিসি" text="ম্যানুফ্যাকচারিং ত্রুটি থাকলে ৭ দিনের মধ্যে রিটার্ন।" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Room preview */}
      <RoomPreview />

      {/* Reviews */}
      <section className="container-luxury py-16 md:py-20">
        <SectionHeading
          eyebrow="কাস্টমার রিভিউ"
          title="ক্রেতাদের অভিজ্ঞতা"
          description="ChayaLux ব্যবহারকারী বাস্তব গ্রাহকদের অভিজ্ঞতা।"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS_SEED.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-luxury py-16 md:py-20">
          <SectionHeading
            eyebrow="সম্পর্কিত পণ্য"
            title="আপনার পছন্দ হতে পারে"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {related.map((p, i) => (
              <ProductCardPro key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <RecentlyViewed excludeSlug={slug} />
    </SiteLayout>
  );
}

function TrustBadge({
  icon: Icon,
  title,
  sub,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-[14px] border border-border/60 bg-card px-3 py-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
        <Icon size={16} />
      </span>
      <div className="min-w-0 leading-tight">
        <div className="truncate text-xs font-semibold text-foreground">{title}</div>
        <div className="truncate text-[10px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function DeliveryCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-[16px] border border-border/60 bg-background p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-dark">
        <Icon size={16} />
      </span>
      <div>
        <div className="font-display text-sm font-semibold">{title}</div>
        <div className="mt-0.5 text-xs text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}
