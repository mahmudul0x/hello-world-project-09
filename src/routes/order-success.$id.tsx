import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Package, Phone, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { bnNum, bnPrice } from "@/lib/products";
import { PAYMENT_METHODS, useShop } from "@/lib/shop/store";

export const Route = createFileRoute("/order-success/$id")({
  head: ({ params }) => ({
    meta: [{ title: `অর্ডার ${params.id} — সফল — ChayaLux` }, { name: "robots", content: "noindex" }],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const { id } = Route.useParams();
  const { getOrder, hydrated } = useShop();
  const order = getOrder(id);

  if (!hydrated) return <SiteLayout><div className="container-luxury py-20" /></SiteLayout>;

  if (!order) {
    return (
      <SiteLayout>
        <div className="container-luxury py-24 text-center">
          <h1 className="heading-display text-3xl">অর্ডার পাওয়া যায়নি</h1>
          <Link to="/" className="mt-4 inline-block text-primary underline">হোমে ফিরুন</Link>
        </div>
      </SiteLayout>
    );
  }

  const paymentLabel = PAYMENT_METHODS.find((p) => p.id === order.payment)?.label ?? order.payment;

  return (
    <SiteLayout>
      <section className="container-luxury py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Illustration */}
          <div className="relative mx-auto mb-8 h-40 w-40">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 12 }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary to-dark shadow-luxury"
            />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", damping: 10 }}
              className="absolute inset-0 grid place-items-center text-primary-foreground"
            >
              <Check size={64} strokeWidth={3} />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4"
            >
              <Sparkles size={24} className="absolute left-0 top-1/2 -translate-y-1/2 text-gold" />
              <Sparkles size={20} className="absolute right-0 top-1/4 text-gold" />
              <Sparkles size={18} className="absolute bottom-0 left-1/3 text-gold" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="heading-display text-4xl sm:text-5xl"
          >
            ধন্যবাদ!
          </motion.h1>
          <p className="mt-3 text-base text-muted-foreground">
            আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।
          </p>

          <div className="mt-8 rounded-[22px] border border-border/60 bg-card p-6 text-left shadow-soft-lux">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  অর্ডার নম্বর
                </div>
                <div className="font-display text-xl font-bold text-primary">{order.id}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  মোট
                </div>
                <div className="font-display text-xl font-bold">{bnPrice(order.total)}</div>
              </div>
            </div>

            <div className="grid gap-4 text-sm sm:grid-cols-2">
              <InfoRow icon={MapPin} label="ডেলিভারি ঠিকানা">
                <div>{order.address.name} — {order.address.phone}</div>
                <div className="text-muted-foreground">
                  {order.address.address}, {order.address.upazila}, {order.address.district}
                </div>
              </InfoRow>
              <InfoRow icon={Package} label="পণ্য সংখ্যা">
                {bnNum(order.items.reduce((n, i) => n + i.qty, 0))}টি পণ্য
              </InfoRow>
              <InfoRow icon={Phone} label="পেমেন্ট মেথড">
                {paymentLabel}
              </InfoRow>
              <InfoRow icon={Sparkles} label="ডেলিভারি সময়">
                ৩-৫ কর্মদিবস
              </InfoRow>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/order-tracking/$id" params={{ id: order.id }}>
              <LuxButton variant="primary" size="lg" className="w-full sm:w-auto">
                অর্ডার ট্র্যাক করুন <ArrowRight size={16} />
              </LuxButton>
            </Link>
            <Link to="/shop">
              <LuxButton variant="outline" size="lg" className="w-full sm:w-auto">
                শপিং চালিয়ে যান
              </LuxButton>
            </Link>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            যেকোনো প্রশ্নে আমাদের কল করুন:{" "}
            <a href="tel:01885901184" className="font-semibold text-primary">
              01885-901184
            </a>
          </p>
        </motion.div>
      </section>
    </SiteLayout>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
        <Icon size={15} />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-xs">{children}</div>
      </div>
    </div>
  );
}
