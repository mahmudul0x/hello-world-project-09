import { createFileRoute, Link } from "@tanstack/react-router";
import { Package } from "lucide-react";
import { EmptyState } from "@/components/shop/EmptyState";
import { bnNum, bnPrice, PRODUCTS } from "@/lib/products";
import { useShop } from "@/lib/shop/store";

export const Route = createFileRoute("/account/orders")({
  component: OrdersPage,
});

function OrdersPage() {
  const { orders } = useShop();
  if (orders.length === 0) {
    return (
      <EmptyState
        icon={Package}
        title="কোনো অর্ডার নেই"
        description="আপনার প্রথম অর্ডার দিয়ে ChayaLux পরিবারে স্বাগত হন।"
        action={{ label: "শপে যান", to: "/shop" }}
      />
    );
  }
  return (
    <div className="space-y-4">
      <h2 className="heading-display text-2xl">আমার অর্ডার</h2>
      {orders.map((o) => (
        <div key={o.id} className="rounded-[18px] border border-border/60 bg-card p-5 shadow-soft-lux">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">অর্ডার</div>
              <div className="font-display font-bold text-primary">{o.id}</div>
            </div>
            <div className="text-right text-xs">
              <div>{new Date(o.createdAt).toLocaleString("en-GB")}</div>
              <div className="mt-0.5 text-emerald-700">{o.status}</div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {o.items.slice(0, 4).map((it) => {
              const p = PRODUCTS.find((x) => x.id === it.productId);
              if (!p) return null;
              return (
                <div key={it.key} className="flex items-center gap-2 rounded-[10px] bg-muted/40 p-2 pr-3">
                  <img src={p.images[0]} alt="" className="h-10 w-10 rounded-[8px] object-cover" />
                  <div className="text-xs">
                    <div className="line-clamp-1 font-semibold">{p.name}</div>
                    <div className="text-muted-foreground">× {bnNum(it.qty)}</div>
                  </div>
                </div>
              );
            })}
            {o.items.length > 4 && (
              <span className="text-xs text-muted-foreground">+{bnNum(o.items.length - 4)} আরো</span>
            )}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <div className="font-display text-lg font-bold text-primary">{bnPrice(o.total)}</div>
            <Link
              to="/order-tracking/$id"
              params={{ id: o.id }}
              className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-dark"
            >
              ট্র্যাক করুন
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
