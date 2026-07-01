import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { EmptyState } from "@/components/shop/EmptyState";
import { LuxButton } from "@/components/ui/lux-button";
import { PRODUCTS, bnPrice } from "@/lib/products";
import { useShop } from "@/lib/shop/store";

export const Route = createFileRoute("/account/wishlist")({
  component: AccountWishlist,
});

function AccountWishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const items = wishlist.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);

  if (items.length === 0) {
    return (
      <EmptyState
        icon={Heart}
        title="উইশলিস্ট এখনো খালি"
        description="পছন্দের পণ্য সংরক্ষণ করুন — পরে সহজে কার্টে যোগ করতে পারবেন।"
        action={{ label: "শপে যান", to: "/shop" }}
      />
    );
  }

  return (
    <div>
      <h2 className="heading-display mb-6 text-2xl">উইশলিস্ট ({items.length})</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((p) => p && (
          <div key={p.id} className="group flex flex-col overflow-hidden rounded-[18px] border border-border/60 bg-card shadow-soft-lux">
            <Link to="/product/$slug" params={{ slug: p.slug }} className="relative block aspect-[4/5] overflow-hidden">
              <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-105" />
              <button
                onClick={(e) => { e.preventDefault(); toggleWishlist(p.id); }}
                className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-background/95 text-destructive shadow-soft-lux hover:bg-destructive hover:text-white"
                aria-label="সরান"
              >
                <Trash2 size={13} />
              </button>
            </Link>
            <div className="flex flex-1 flex-col gap-1.5 p-3">
              <Link to="/product/$slug" params={{ slug: p.slug }} className="line-clamp-2 text-xs font-semibold hover:text-primary">
                {p.name}
              </Link>
              <div className="font-display text-sm font-bold text-primary">{bnPrice(p.price)}</div>
              <LuxButton variant="primary" size="sm" className="mt-1 w-full text-[11px]" onClick={() => addToCart(p)}>
                <ShoppingBag size={12} /> কার্টে
              </LuxButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
