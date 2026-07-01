import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MapPin, Package, ShoppingBag, TrendingUp } from "lucide-react";
import { bnNum, bnPrice } from "@/lib/products";
import { useAuth } from "@/lib/shop/auth";
import { useShop } from "@/lib/shop/store";

export const Route = createFileRoute("/account/")({
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { user } = useAuth();
  const { orders, wishlistCount, cartCount } = useShop();

  const totalSpent = orders.reduce((s, o) => s + o.total, 0);
  const stats = [
    { label: "মোট অর্ডার", value: bnNum(orders.length), icon: Package, to: "/account/orders" },
    { label: "কার্টে", value: bnNum(cartCount), icon: ShoppingBag, to: "/cart" },
    { label: "উইশলিস্ট", value: bnNum(wishlistCount), icon: Heart, to: "/account/wishlist" },
    { label: "মোট খরচ", value: bnPrice(totalSpent), icon: TrendingUp, to: "/account/orders" },
  ];

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-primary via-primary to-dark p-6 text-primary-foreground shadow-luxury md:p-8">
        <div className="text-[11px] font-semibold uppercase tracking-widest opacity-70">
          স্বাগতম
        </div>
        <h1 className="mt-1 font-display text-3xl font-bold">সালাম, {user?.name} 👋</h1>
        <p className="mt-1 text-sm opacity-80">
          আপনার সাম্প্রতিক অর্ডার, উইশলিস্ট ও প্রোফাইল এক জায়গায়।
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            to={s.to}
            className="group flex items-center gap-3 rounded-[18px] border border-border/60 bg-card p-4 shadow-soft-lux transition hover:-translate-y-0.5 hover:border-primary/40"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon size={17} />
            </span>
            <div className="min-w-0">
              <div className="text-[11px] text-muted-foreground">{s.label}</div>
              <div className="font-display text-lg font-bold">{s.value}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-sm font-bold">সাম্প্রতিক অর্ডার</h3>
            <Link to="/account/orders" className="text-[11px] text-primary underline">সব দেখুন</Link>
          </div>
          {orders.length === 0 ? (
            <div className="rounded-[14px] bg-muted/40 p-6 text-center text-xs text-muted-foreground">
              কোনো অর্ডার নেই। <Link to="/shop" className="text-primary underline">শপে যান</Link>
            </div>
          ) : (
            <ul className="space-y-2">
              {orders.slice(0, 3).map((o) => (
                <li key={o.id}>
                  <Link
                    to="/order-tracking/$id"
                    params={{ id: o.id }}
                    className="flex items-center justify-between rounded-[12px] px-3 py-2.5 text-sm transition hover:bg-primary-soft/40"
                  >
                    <div>
                      <div className="font-semibold text-primary">{o.id}</div>
                      <div className="text-[11px] text-muted-foreground">
                        {new Date(o.createdAt).toLocaleDateString("en-GB")}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-bold">{bnPrice(o.total)}</div>
                      <div className="text-[11px] text-emerald-700">{o.status}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-sm font-bold">দ্রুত অ্যাকশন</h3>
          </div>
          <div className="grid gap-2">
            <Link to="/shop" className="flex items-center justify-between rounded-[12px] bg-primary-soft/40 px-4 py-3 text-sm transition hover:bg-primary-soft">
              <span className="flex items-center gap-2"><ShoppingBag size={14} /> শপিং শুরু করুন</span>
              <span className="text-primary">→</span>
            </Link>
            <Link to="/order-tracking" className="flex items-center justify-between rounded-[12px] bg-primary-soft/40 px-4 py-3 text-sm transition hover:bg-primary-soft">
              <span className="flex items-center gap-2"><Package size={14} /> অর্ডার ট্র্যাক করুন</span>
              <span className="text-primary">→</span>
            </Link>
            <Link to="/account/addresses" className="flex items-center justify-between rounded-[12px] bg-primary-soft/40 px-4 py-3 text-sm transition hover:bg-primary-soft">
              <span className="flex items-center gap-2"><MapPin size={14} /> ঠিকানা যুক্ত করুন</span>
              <span className="text-primary">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
