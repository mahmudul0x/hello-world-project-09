import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Banknote, Check, CreditCard, Lock, MapPin, Phone, ShieldCheck, ShoppingBag, User,
} from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { EmptyState } from "@/components/shop/EmptyState";
import { LuxButton } from "@/components/ui/lux-button";
import { BD_DISTRICTS } from "@/lib/bd-locations";
import { PRODUCTS, bnNum, bnPrice, getProduct } from "@/lib/products";
import { PAYMENT_METHODS, useShop, type PaymentMethod } from "@/lib/shop/store";
import { useAuth } from "@/lib/shop/auth";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [{ title: "চেকআউট — ChayaLux" }, { name: "robots", content: "noindex" }],
  }),
  component: CheckoutPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "নাম দিন"),
  phone: z.string().trim().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন"),
  altPhone: z.string().trim().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর").or(z.literal("")).optional(),
  district: z.string().min(1, "জেলা নির্বাচন করুন"),
  upazila: z.string().min(1, "উপজেলা নির্বাচন করুন"),
  address: z.string().trim().min(6, "পূর্ণ ঠিকানা দিন"),
  note: z.string().max(300).optional(),
});

function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, hydrated, cartSubtotal, cartTotal, couponCode, couponDiscount, deliveryCharge, placeOrder } = useShop();
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.name ?? "",
    phone: user?.phone ?? "",
    altPhone: "",
    district: "",
    upazila: "",
    address: "",
    note: "",
  });
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const upazilas = useMemo(
    () => BD_DISTRICTS.find((d) => d.name === form.district)?.upazilas ?? [],
    [form.district],
  );

  if (!hydrated) return <SiteLayout><div className="container-luxury py-20" /></SiteLayout>;

  if (cart.length === 0) {
    return (
      <SiteLayout>
        <div className="container-luxury py-16">
          <EmptyState
            icon={ShoppingBag}
            title="কার্ট খালি"
            description="চেকআউট করতে হলে আগে পণ্য কার্টে যোগ করুন।"
            action={{ label: "শপে যান", to: "/shop" }}
          />
        </div>
      </SiteLayout>
    );
  }

  const set = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const iss of parsed.error.issues) {
        errs[String(iss.path[0])] = iss.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    const order = placeOrder({
      address: {
        name: form.name,
        phone: form.phone,
        altPhone: form.altPhone || undefined,
        district: form.district,
        upazila: form.upazila,
        address: form.address,
        note: form.note || undefined,
      },
      payment,
    });
    navigate({ to: "/order-success/$id", params: { id: order.id } });
  };

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mb-8 text-center">
          <h1 className="heading-display text-3xl sm:text-4xl">চেকআউট</h1>
          <p className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock size={12} /> আপনার তথ্য নিরাপদ ও এনক্রিপ্টেড
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1fr_420px]">
          {/* Left: form */}
          <div className="space-y-6">
            <Card icon={User} title="কাস্টমার তথ্য">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="নাম *" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="আপনার পূর্ণ নাম"
                    className="input-lux"
                  />
                </Field>
                <Field label="মোবাইল নম্বর *" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="input-lux"
                  />
                </Field>
                <Field label="বিকল্প মোবাইল" error={errors.altPhone}>
                  <input
                    value={form.altPhone}
                    onChange={(e) => set("altPhone", e.target.value)}
                    placeholder="01XXXXXXXXX (ঐচ্ছিক)"
                    className="input-lux"
                  />
                </Field>
                <Field label="জেলা *" error={errors.district}>
                  <select
                    value={form.district}
                    onChange={(e) => {
                      set("district", e.target.value);
                      set("upazila", "");
                    }}
                    className="input-lux"
                  >
                    <option value="">— জেলা নির্বাচন —</option>
                    {BD_DISTRICTS.map((d) => (
                      <option key={d.name} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="উপজেলা *" error={errors.upazila}>
                  <select
                    value={form.upazila}
                    onChange={(e) => set("upazila", e.target.value)}
                    disabled={!form.district}
                    className="input-lux disabled:opacity-50"
                  >
                    <option value="">— উপজেলা নির্বাচন —</option>
                    {upazilas.map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </Field>
                <Field label="পূর্ণ ঠিকানা *" error={errors.address} className="sm:col-span-2">
                  <input
                    value={form.address}
                    onChange={(e) => set("address", e.target.value)}
                    placeholder="বাসা/রোড/এলাকা"
                    className="input-lux"
                  />
                </Field>
                <Field label="ডেলিভারি নোট" className="sm:col-span-2">
                  <textarea
                    value={form.note}
                    onChange={(e) => set("note", e.target.value)}
                    rows={3}
                    placeholder="বিশেষ কোনো নির্দেশনা থাকলে লিখুন..."
                    className="input-lux resize-none"
                  />
                </Field>
              </div>
            </Card>

            <Card icon={CreditCard} title="পেমেন্ট মেথড">
              <div className="grid gap-3 sm:grid-cols-2">
                {PAYMENT_METHODS.map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setPayment(m.id)}
                    className={`flex items-start gap-3 rounded-[16px] border-2 p-4 text-left transition ${
                      payment === m.id
                        ? "border-primary bg-primary-soft/40 shadow-soft-lux"
                        : "border-border hover:border-primary/60"
                    }`}
                  >
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                      payment === m.id ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/70"
                    }`}>
                      {m.id === "cod" ? <Banknote size={16} /> : <CreditCard size={16} />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display text-sm font-semibold">{m.label}</span>
                        {payment === m.id && (
                          <Check size={14} className="text-primary" />
                        )}
                      </div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">{m.hint}</div>
                    </div>
                  </button>
                ))}
              </div>
              {payment !== "cod" && (
                <div className="mt-4 rounded-[14px] bg-gold-soft/60 p-3 text-xs text-foreground/80">
                  পেমেন্ট শেষে ট্রানজেকশন আইডি আমাদের WhatsApp <b>01885-901184</b>-এ পাঠান।
                </div>
              )}
            </Card>
          </div>

          {/* Right: summary */}
          <aside className="lg:sticky lg:top-28 h-fit space-y-4">
            <div className="rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux md:p-6">
              <h3 className="font-display text-lg font-bold">আপনার অর্ডার</h3>
              <ul className="mt-4 max-h-[280px] space-y-3 overflow-auto pr-1">
                {cart.map((it) => {
                  const p = getProduct(PRODUCTS.find((x) => x.id === it.productId)?.slug ?? "");
                  if (!p) return null;
                  return (
                    <li key={it.key} className="flex gap-3">
                      <div className="relative shrink-0">
                        <img src={p.images[0]} alt={p.name} className="h-14 w-14 rounded-[12px] object-cover" />
                        <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                          {bnNum(it.qty)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="line-clamp-1 text-xs font-semibold">{p.name}</div>
                        <div className="text-[10px] text-muted-foreground">
                          {it.color} • {it.size}
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-primary">
                        {bnPrice(p.price * it.qty)}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                <SumRow label="সাবটোটাল" value={bnPrice(cartSubtotal)} />
                <SumRow label="ডেলিভারি" value={deliveryCharge === 0 ? "ফ্রি" : bnPrice(deliveryCharge)} />
                {couponDiscount > 0 && (
                  <SumRow label={`ছাড় (${couponCode})`} value={`-${bnPrice(couponDiscount)}`} accent="text-emerald-700" />
                )}
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <span className="font-semibold">সর্বমোট</span>
                  <span className="font-display text-2xl font-bold text-primary">
                    {bnPrice(cartTotal)}
                  </span>
                </div>
              </div>

              <LuxButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitting}
                className="mt-4 w-full"
              >
                {submitting ? "প্রক্রিয়া চলছে..." : "অর্ডার নিশ্চিত করুন"}
              </LuxButton>

              <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><ShieldCheck size={11} /> সিকিউর</span>
                <span className="flex items-center gap-1"><Phone size={11} /> ২৪/৭ সাপোর্ট</span>
                <span className="flex items-center gap-1"><MapPin size={11} /> সারা বাংলাদেশ</span>
              </div>
            </div>

            <div className="rounded-[16px] bg-primary-soft/40 p-4 text-xs">
              <b className="text-primary">অ্যাকাউন্ট নেই?</b> চেকআউট শেষে আপনার তথ্য দিয়ে অ্যাকাউন্ট তৈরি করা যাবে বা{" "}
              <Link to="/login" className="underline hover:text-primary">লগইন করুন</Link>।
            </div>
          </aside>
        </form>
      </section>

      <style>{`
        .input-lux {
          width: 100%;
          height: 46px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--background);
          font-size: 14px;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input-lux:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 12%, transparent);
        }
        textarea.input-lux { height: auto; padding: 12px 14px; }
      `}</style>
    </SiteLayout>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux md:p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
          <Icon size={16} />
        </span>
        <h2 className="font-display text-lg font-bold">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function Field({
  label, children, error, className,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
      {children}
      {error && <span className="text-[11px] text-destructive">{error}</span>}
    </label>
  );
}

function SumRow({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-medium ${accent ?? "text-foreground"}`}>{value}</span>
    </div>
  );
}
