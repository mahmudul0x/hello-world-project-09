import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, GitCompare, ShoppingBag, X } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { EmptyState } from "@/components/shop/EmptyState";
import { LuxButton } from "@/components/ui/lux-button";
import { PRODUCTS, bnPrice } from "@/lib/products";
import { useShop } from "@/lib/shop/store";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [{ title: "পণ্য তুলনা — ChayaLux" }],
  }),
  component: ComparePage,
});

function ComparePage() {
  const { compare, hydrated, toggleCompare, addToCart, clearCompare } = useShop();

  if (!hydrated) return <SiteLayout><div className="container-luxury py-20" /></SiteLayout>;

  const items = compare
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as (typeof PRODUCTS)[number][];

  if (items.length === 0) {
    return (
      <SiteLayout>
        <div className="container-luxury py-16">
          <EmptyState
            icon={GitCompare}
            title="তুলনায় কোনো পণ্য নেই"
            description="প্রোডাক্ট কার্ডের তুলনা বাটন থেকে সর্বোচ্চ ৩টি পণ্য যোগ করুন।"
            action={{ label: "শপে যান", to: "/shop" }}
          />
        </div>
      </SiteLayout>
    );
  }

  const rows: { label: string; render: (p: typeof items[number]) => React.ReactNode }[] = [
    { label: "ছবি", render: (p) => <img src={p.images[0]} alt={p.name} className="mx-auto h-32 w-32 rounded-[14px] object-cover" /> },
    { label: "নাম", render: (p) => <span className="font-display font-semibold">{p.name}</span> },
    { label: "ক্যাটাগরি", render: (p) => p.categoryName },
    { label: "দাম", render: (p) => <span className="font-bold text-primary">{bnPrice(p.price)}</span> },
    { label: "ফেব্রিক", render: (p) => p.fabric },
    { label: "রঙ", render: (p) => (
        <div className="flex flex-wrap justify-center gap-1">
          {p.colors.map((c) => (
            <span key={c.name} title={c.name} className="h-4 w-4 rounded-full border border-border" style={{ background: c.hex }} />
          ))}
        </div>
      ) },
    { label: "সাইজ", render: (p) => <span className="text-xs">{p.sizes.join(", ")}</span> },
    { label: "গ্যারান্টি", render: () => "১০০% কালার গ্যারান্টি" },
    { label: "ডেলিভারি", render: () => "৩-৫ কর্মদিবস" },
    { label: "স্টক", render: (p) => p.inStock
        ? <span className="inline-flex items-center gap-1 text-emerald-700"><Check size={13} /> আছে</span>
        : <span className="text-destructive">নেই</span>,
    },
    { label: "অ্যাকশন", render: (p) => (
        <div className="flex flex-col gap-2">
          <LuxButton variant="primary" size="sm" className="w-full text-xs" onClick={() => addToCart(p)}>
            <ShoppingBag size={13} /> কার্ট
          </LuxButton>
          <Link to="/product/$slug" params={{ slug: p.slug }} className="text-xs text-primary underline">বিস্তারিত</Link>
        </div>
      ) },
  ];

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="heading-display text-3xl sm:text-4xl">পণ্য তুলনা</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {items.length}টি পণ্য তুলনা করছেন (সর্বোচ্চ ৩টি)।
            </p>
          </div>
          <button onClick={clearCompare} className="text-xs text-muted-foreground hover:text-destructive">
            সব সরান
          </button>
        </div>

        <div className="overflow-x-auto rounded-[22px] border border-border/60 bg-card shadow-soft-lux">
          <table className="w-full min-w-[560px] text-center text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 bg-primary-soft/70 px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-primary">
                  বৈশিষ্ট্য
                </th>
                {items.map((p) => (
                  <th key={p.id} className="relative px-4 py-3">
                    <button
                      onClick={() => toggleCompare(p.id)}
                      aria-label="সরান"
                      className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-white"
                    >
                      <X size={12} />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-muted/30" : ""}>
                  <td className="sticky left-0 bg-inherit px-4 py-3 text-left text-xs font-semibold text-foreground/80">
                    {r.label}
                  </td>
                  {items.map((p) => (
                    <td key={p.id} className="px-4 py-3 align-middle">
                      {r.render(p)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SiteLayout>
  );
}
