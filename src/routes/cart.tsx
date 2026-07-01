import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Minus, Plus, ShoppingBag, Tag, Trash2, Truck,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { EmptyState } from "@/components/shop/EmptyState";
import { LuxButton } from "@/components/ui/lux-button";
import { PRODUCTS, bnNum, bnPrice, getProduct } from "@/lib/products";
import { useShop } from "@/lib/shop/store";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "আপনার কার্ট — ChayaLux" },
      { name: "description", content: "আপনার নির্বাচিত পণ্যসমূহ দেখুন ও চেকআউট করুন।" },
    ],
  }),
  component: CartPage,
});

function slugOf(id: string) {
  return PRODUCTS.find((p) => p.id === id)?.slug ?? "";
}

function CartPage() {
  const {
    cart, hydrated, updateQty, removeFromCart, saveForLater,
    cartSubtotal, cartTotal, couponCode, couponDiscount, applyCoupon, removeCoupon,
    deliveryZone, setDeliveryZone, deliveryCharge, cartCount,
  } = useShop();
  const [coupon, setCoupon] = useState("");
  const [couponMsg, setCouponMsg] = useState<{ ok: boolean; msg: string } | null>(null);

  if (!hydrated) return <SiteLayout><div className="container-luxury py-20" /></SiteLayout>;

  if (cart.length === 0) {
    return (
      <SiteLayout>
        <div className="container-luxury py-16">
          <EmptyState
            icon={ShoppingBag}
            title="আপনার কার্ট এখনো খালি"
            description="ChayaLux-এর প্রিমিয়াম পর্দা, কুশন ও হোম ডেকোর কালেকশন থেকে পছন্দের পণ্য যোগ করুন।"
            action={{ label: "শপিং শুরু করুন", to: "/shop" }}
          />
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mb-8">
          <h1 className="heading-display text-3xl sm:text-4xl">আপনার কার্ট</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            মোট {bnNum(cartCount)}টি পণ্য কার্টে আছে।
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Items */}
          <div className="space-y-4">
            {cart.map((it, i) => {
              const p = getProduct(slugOf(it.productId));
              if (!p) return null;
              return (
                <motion.article
                  key={it.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="grid grid-cols-[100px_1fr] gap-4 rounded-[22px] border border-border/60 bg-card p-4 shadow-soft-lux sm:grid-cols-[140px_1fr] md:p-5"
                >
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="shrink-0">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="aspect-square h-full w-full rounded-[16px] object-cover"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                          {p.categoryName}
                        </div>
                        <Link
                          to="/product/$slug"
                          params={{ slug: p.slug }}
                          className="line-clamp-2 font-display text-base font-semibold hover:text-primary"
                        >
                          {p.name}
                        </Link>
                        <div className="mt-1 text-[11px] text-muted-foreground">
                          ফেব্রিক: {p.fabric}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(it.key)}
                        aria-label="সরান"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      {it.color && (
                        <span className="rounded-full bg-muted px-2.5 py-1">
                          রঙ: <span className="text-foreground">{it.color}</span>
                        </span>
                      )}
                      {it.size && (
                        <span className="rounded-full bg-muted px-2.5 py-1">
                          সাইজ: <span className="text-foreground">{it.size}</span>
                        </span>
                      )}
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                      <div className="flex h-11 items-center gap-1 rounded-[14px] border border-border bg-background px-1.5">
                        <button
                          onClick={() => updateQty(it.key, it.qty - 1)}
                          className="grid h-8 w-8 place-items-center rounded-[10px] hover:bg-primary-soft hover:text-primary"
                          aria-label="কমান"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="grid w-8 place-items-center text-sm font-semibold">
                          {bnNum(it.qty)}
                        </span>
                        <button
                          onClick={() => updateQty(it.key, it.qty + 1)}
                          className="grid h-8 w-8 place-items-center rounded-[10px] hover:bg-primary-soft hover:text-primary"
                          aria-label="বাড়ান"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-lg font-bold text-primary">
                          {bnPrice(p.price * it.qty)}
                        </div>
                        <button
                          onClick={() => saveForLater(it.key)}
                          className="mt-0.5 text-[11px] text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                        >
                          পরে কেনার জন্য রাখুন
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              ← আরো পণ্য দেখুন
            </Link>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-28 h-fit space-y-4">
            <div className="rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux md:p-6">
              <h3 className="font-display text-lg font-bold">অর্ডার সামারি</h3>

              <div className="mt-4 space-y-2 text-sm">
                <Row label="সাবটোটাল" value={bnPrice(cartSubtotal)} />
                <div>
                  <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-foreground/80">
                    <Truck size={13} /> ডেলিভারি এলাকা
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {(["inside", "outside"] as const).map((z) => (
                      <button
                        key={z}
                        onClick={() => setDeliveryZone(z)}
                        className={`rounded-[12px] border px-3 py-2 text-xs font-medium transition ${
                          deliveryZone === z
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {z === "inside" ? "ঢাকার ভিতরে" : "ঢাকার বাইরে"}
                      </button>
                    ))}
                  </div>
                </div>
                <Row
                  label="ডেলিভারি চার্জ"
                  value={deliveryCharge === 0 ? "ফ্রি" : bnPrice(deliveryCharge)}
                />
                {couponDiscount > 0 && (
                  <Row
                    label={`ছাড় (${couponCode})`}
                    value={`-${bnPrice(couponDiscount)}`}
                    accent="text-emerald-700"
                  />
                )}
              </div>

              {/* Coupon */}
              <div className="mt-4 rounded-[14px] border border-dashed border-primary/30 bg-primary-soft/40 p-3">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-primary">
                  <Tag size={13} /> কুপন কোড
                </div>
                {couponCode ? (
                  <div className="flex items-center justify-between rounded-[10px] bg-background px-3 py-2 text-xs">
                    <span className="flex items-center gap-2 font-semibold text-emerald-700">
                      <Check size={13} /> {couponCode} প্রয়োগ হয়েছে
                    </span>
                    <button
                      onClick={() => {
                        removeCoupon();
                        setCouponMsg(null);
                      }}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      সরান
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                      placeholder="CHAYA10"
                      className="flex-1 rounded-[10px] border border-border bg-background px-3 py-2 text-xs uppercase outline-none focus:border-primary"
                    />
                    <button
                      onClick={() => setCouponMsg(applyCoupon(coupon))}
                      className="rounded-[10px] bg-primary px-4 text-xs font-medium text-primary-foreground hover:bg-dark"
                    >
                      প্রয়োগ
                    </button>
                  </div>
                )}
                {couponMsg && !couponCode && (
                  <p className={`mt-2 text-[11px] ${couponMsg.ok ? "text-emerald-700" : "text-destructive"}`}>
                    {couponMsg.msg}
                  </p>
                )}
                <p className="mt-2 text-[10px] text-muted-foreground">
                  চেষ্টা করুন: CHAYA10, LUX500, NEW200
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-semibold">সর্বমোট</span>
                <span className="font-display text-2xl font-bold text-primary">
                  {bnPrice(cartTotal)}
                </span>
              </div>

              <Link to="/checkout" className="mt-4 block">
                <LuxButton variant="primary" size="lg" className="w-full">
                  চেকআউটে যান <ArrowRight size={16} />
                </LuxButton>
              </Link>
            </div>

            <div className="rounded-[16px] bg-primary-soft/40 p-4 text-xs text-muted-foreground">
              <p>✓ ১০০% কালার গ্যারান্টি — রং জ্বলবে না</p>
              <p>✓ ক্যাশ অন ডেলিভারি সারা বাংলাদেশে</p>
              <p>✓ প্রয়োজন হলে ৭ দিনের মধ্যে সহজ রিটার্ন</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-medium ${accent ?? "text-foreground"}`}>{value}</span>
    </div>
  );
}
