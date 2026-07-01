import { createFileRoute, Link } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { EmptyState } from "@/components/shop/EmptyState";
import { ProductCardPro } from "@/components/product/ProductCardPro";
import { PRODUCTS } from "@/lib/products";

const searchSchema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/search")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [{ title: "খুঁজুন — ChayaLux" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q: qParam } = Route.useSearch();
  const [q, setQ] = useState(qParam ?? "");

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(t) ||
        p.categoryName.toLowerCase().includes(t) ||
        p.fabric.toLowerCase().includes(t) ||
        p.description.toLowerCase().includes(t),
    );
  }, [q]);

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mb-8">
          <h1 className="heading-display text-3xl sm:text-4xl">সার্চ ফলাফল</h1>
          <div className="mt-4 flex gap-2 rounded-[18px] border border-border/60 bg-card p-2 shadow-soft-lux">
            <div className="flex flex-1 items-center gap-2 px-3 text-muted-foreground">
              <SearchIcon size={16} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="পণ্য খুঁজুন..."
                className="h-11 flex-1 bg-transparent text-sm outline-none"
                autoFocus
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {results.length}টি পণ্য পাওয়া গেছে {q && <>“{q}” এর জন্য</>}
          </p>
        </div>

        {results.length === 0 ? (
          <EmptyState
            icon={SearchIcon}
            title="কিছু পাওয়া যায়নি"
            description="অন্য কিওয়ার্ড দিয়ে চেষ্টা করুন বা সব পণ্য ঘুরে দেখুন।"
            action={{ label: "সব পণ্য দেখুন", to: "/shop" }}
          />
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {results.map((p, i) => (
              <ProductCardPro key={p.id} product={p} index={i} />
            ))}
          </div>
        )}

        {/* Popular categories */}
        <div className="mt-14">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            জনপ্রিয় ক্যাটাগরি
          </div>
          <div className="flex flex-wrap gap-2">
            {["ভেলভেট", "ব্ল্যাকআউট", "কুশন", "সোফা কভার", "চাইনিজ", "শাটিন", "বেডশিট", "উইন্ডো ব্লাইন্ড"].map((c) => (
              <button
                key={c}
                onClick={() => setQ(c)}
                className="rounded-full bg-primary-soft px-4 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 text-xs">
          <Link to="/shop" className="text-primary underline">← সব পণ্যে ফিরুন</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
