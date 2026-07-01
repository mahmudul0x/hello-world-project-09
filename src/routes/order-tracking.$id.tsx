import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2, Clock, Home, MapPin, Package, PackageCheck, Phone,
  Search, Truck,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { bnNum, bnPrice, PRODUCTS, getProduct } from "@/lib/products";
import { PAYMENT_METHODS, useShop, type Order } from "@/lib/shop/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/order-tracking/$id")({
  head: ({ params }) => ({
    meta: [{ title: `অর্ডার ট্র্যাকিং ${params.id} — ChayaLux` }, { name: "robots", content: "noindex" }],
  }),
  component: TrackingPage,
});

const STEPS: { key: Order["status"]; label: string; icon: typeof Package }[] = [
  { key: "received", label: "অর্ডার গৃহীত", icon: Package },
  { key: "confirmed", label: "নিশ্চিত হয়েছে", icon: CheckCircle2 },
  { key: "processing", label: "প্রস্তুত হচ্ছে", icon: Clock },
  { key: "shipped", label: "শিপ করা হয়েছে", icon: Truck },
  { key: "out_for_delivery", label: "ডেলিভারিতে বেরিয়েছে", icon: MapPin },
  { key: "delivered", label: "ডেলিভার হয়েছে", icon: PackageCheck },
];

function slugOf(id: string) {
  return PRODUCTS.find((p) => p.id === id)?.slug ?? "";
}

function TrackingPage() {
  const { id } = Route.useParams();
  const { getOrder, hydrated } = useShop();
  const [search, setSearch] = useState(id);
  const order = getOrder(search);

  if (!hydrated) return <SiteLayout><div className="container-luxury py-20" /></SiteLayout>;

  // Simulated progress: 2 steps ahead of "received" based on age.
  const elapsedH = order ? (Date.now() - order.createdAt) / 36e5 : 0;
  const stepIdx = !order
    ? -1
    : Math.min(
        STEPS.length - 1,
        Math.max(
          STEPS.findIndex((s) => s.key === order.status),
          elapsedH > 96 ? 5 : elapsedH > 48 ? 4 : elapsedH > 24 ? 3 : elapsedH > 6 ? 2 : elapsedH > 1 ? 1 : 0,
        ),
      );

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mb-8">
          <h1 className="heading-display text-3xl sm:text-4xl">অর্ডার ট্র্যাকিং</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            আপনার অর্ডারের বর্তমান অবস্থা।
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 flex max-w-xl gap-2 rounded-[18px] border border-border/60 bg-card p-2 shadow-soft-lux">
          <div className="flex flex-1 items-center gap-2 px-3 text-muted-foreground">
            <Search size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value.trim())}
              placeholder="অর্ডার নম্বর দিন (যেমন: CL-XXXXX)"
              className="h-11 flex-1 bg-transparent text-sm outline-none"
            />
          </div>
          <LuxButton variant="primary" size="md" type="button">খুঁজুন</LuxButton>
        </div>

        {!order ? (
          <div className="rounded-[22px] border border-border/60 bg-card p-10 text-center shadow-soft-lux">
            <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-muted text-muted-foreground">
              <Package size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold">অর্ডার পাওয়া যায়নি</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              অর্ডার নম্বরটি সঠিক আছে কিনা যাচাই করুন।
            </p>
            <Link to="/" className="mt-4 inline-block text-primary underline">হোমে ফিরুন</Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            {/* Timeline */}
            <div className="rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux md:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    অর্ডার নম্বর
                  </div>
                  <div className="font-display text-xl font-bold text-primary">{order.id}</div>
                </div>
                <span className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary">
                  {STEPS[stepIdx]?.label ?? "প্রক্রিয়াধীন"}
                </span>
              </div>

              <ol className="relative space-y-6 pl-1">
                {STEPS.map((s, i) => {
                  const done = i <= stepIdx;
                  const current = i === stepIdx;
                  return (
                    <motion.li
                      key={s.key}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="relative flex items-start gap-4"
                    >
                      {i < STEPS.length - 1 && (
                        <span
                          className={cn(
                            "absolute left-[22px] top-11 h-[calc(100%-8px)] w-0.5",
                            done ? "bg-primary" : "bg-border",
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          "relative grid h-11 w-11 shrink-0 place-items-center rounded-full transition",
                          done
                            ? "bg-primary text-primary-foreground shadow-soft-lux"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        <s.icon size={17} />
                        {current && (
                          <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                        )}
                      </span>
                      <div className="flex-1 pt-1.5">
                        <div className={cn(
                          "text-sm font-semibold",
                          done ? "text-foreground" : "text-muted-foreground",
                        )}>
                          {s.label}
                        </div>
                        {current && (
                          <div className="mt-0.5 text-[11px] text-primary">চলমান</div>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>

            {/* Summary */}
            <aside className="space-y-4">
              <div className="rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux">
                <h3 className="font-display text-sm font-bold">অর্ডার সামারি</h3>
                <ul className="mt-3 space-y-3">
                  {order.items.map((it) => {
                    const p = getProduct(slugOf(it.productId));
                    if (!p) return null;
                    return (
                      <li key={it.key} className="flex gap-3">
                        <img src={p.images[0]} alt={p.name} className="h-12 w-12 rounded-[10px] object-cover" />
                        <div className="min-w-0 flex-1">
                          <div className="line-clamp-1 text-xs font-semibold">{p.name}</div>
                          <div className="text-[10px] text-muted-foreground">× {bnNum(it.qty)}</div>
                        </div>
                        <span className="text-xs font-semibold text-primary">{bnPrice(p.price * it.qty)}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
                  <span className="font-semibold">সর্বমোট</span>
                  <span className="font-display text-lg font-bold text-primary">{bnPrice(order.total)}</span>
                </div>
              </div>
              <div className="rounded-[16px] border border-border/60 bg-card p-4 text-xs">
                <div className="mb-2 font-semibold text-foreground/80">ডেলিভারি ঠিকানা</div>
                <div>{order.address.name}</div>
                <div className="text-muted-foreground">{order.address.phone}</div>
                <div className="mt-1 text-muted-foreground">
                  {order.address.address}, {order.address.upazila}, {order.address.district}
                </div>
                <div className="mt-3 flex items-center gap-2 text-primary">
                  <Phone size={12} /> পেমেন্ট: {PAYMENT_METHODS.find((p) => p.id === order.payment)?.label}
                </div>
              </div>
              <Link to="/" className="flex h-11 items-center justify-center gap-2 rounded-[14px] border border-border bg-background text-xs font-medium hover:border-primary hover:text-primary">
                <Home size={14} /> হোমে ফিরুন
              </Link>
            </aside>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
