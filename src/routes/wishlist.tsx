import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { EmptyState } from "@/components/shop/EmptyState";
import { LuxButton } from "@/components/ui/lux-button";
import { PRODUCTS, bnPrice, getProduct } from "@/lib/products";
import { useShop } from "@/lib/shop/store";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "উইশলিস্ট — ChayaLux" },
      { name: "description", content: "আপনার সংরক্ষিত পছন্দের পণ্য।" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist, hydrated, toggleWishlist, addToCart, clearWishlist } = useShop();

  if (!hydrated) return <SiteLayout><div className="container-luxury py-20" /></SiteLayout>;

  const items = wishlist
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as ReturnType<typeof getProduct>[];

  if (items.length === 0) {
    return (
      <SiteLayout>
        <div className="container-luxury py-16">
          <EmptyState
            icon={Heart}
            title="উইশলিস্ট এখনো খালি"
            description="পছন্দের পণ্যে ❤️ চাপুন — এখানে সংরক্ষণ হয়ে থাকবে।"
            action={{ label: "শপ ঘুরে দেখুন", to: "/shop" }}
          />
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="heading-display text-3xl sm:text-4xl">আমার উইশলিস্ট</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {items.length}টি পণ্য সংরক্ষিত।
            </p>
          </div>
          <button
            onClick={clearWishlist}
            className="hidden text-xs text-muted-foreground underline-offset-4 hover:text-destructive hover:underline sm:inline-block"
          >
            সব মুছুন
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {items.map((p, i) => p && (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-border/60 bg-card shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float"
            >
              <Link
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="relative block aspect-[4/5] overflow-hidden"
              >
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(p.id);
                  }}
                  aria-label="সরান"
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/95 text-destructive shadow-soft-lux transition hover:bg-destructive hover:text-white"
                >
                  <Trash2 size={14} />
                </button>
              </Link>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                  {p.categoryName}
                </span>
                <Link
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="line-clamp-2 min-h-[2.6rem] font-display text-sm font-semibold hover:text-primary"
                >
                  {p.name}
                </Link>
                <div className="font-display text-lg font-bold text-primary">
                  {bnPrice(p.price)}
                </div>
                <LuxButton
                  variant="primary"
                  size="sm"
                  className="mt-2 w-full text-xs"
                  onClick={() => addToCart(p)}
                >
                  <ShoppingBag size={13} /> কার্টে যোগ করুন
                </LuxButton>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
