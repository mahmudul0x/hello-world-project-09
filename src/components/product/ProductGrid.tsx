import { ProductCardPro } from "./ProductCardPro";
import type { Product } from "@/lib/products";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="grid place-items-center rounded-[22px] border border-dashed border-border/70 bg-card/60 px-6 py-24 text-center">
        <div className="max-w-md space-y-2">
          <h3 className="font-display text-xl font-semibold">কোনো পণ্য পাওয়া যায়নি</h3>
          <p className="text-sm text-muted-foreground">
            আপনার ফিল্টার একটু পরিবর্তন করে আবার চেষ্টা করুন — আমাদের কালেকশনে ১০০+ প্রিমিয়াম পণ্য রয়েছে।
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
      {products.map((p, i) => (
        <ProductCardPro key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}
