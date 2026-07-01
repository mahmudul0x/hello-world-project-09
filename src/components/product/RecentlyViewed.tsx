import { useMemo } from "react";
import { PRODUCTS } from "@/lib/products";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { ProductCardPro } from "./ProductCardPro";
import { SectionHeading } from "@/components/ui/section-heading";

export function RecentlyViewed({ excludeSlug }: { excludeSlug?: string }) {
  const { slugs } = useRecentlyViewed();
  const products = useMemo(
    () =>
      slugs
        .filter((s) => s !== excludeSlug)
        .map((s) => PRODUCTS.find((p) => p.slug === s))
        .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p))
        .slice(0, 4),
    [slugs, excludeSlug],
  );

  if (products.length === 0) return null;

  return (
    <section className="container-luxury py-16 md:py-20">
      <SectionHeading
        eyebrow="সাম্প্রতিক দেখা"
        title="আপনি সম্প্রতি দেখেছেন"
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
        {products.map((p, i) => (
          <ProductCardPro key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
