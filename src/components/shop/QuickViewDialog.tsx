import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, ShoppingBag, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { bnPrice } from "@/lib/products";
import { useShop } from "@/lib/shop/store";
import { cn } from "@/lib/utils";

export function QuickViewDialog() {
  const { quickView, closeQuickView, addToCart, toggleWishlist, isWished } = useShop();
  const [color, setColor] = useState<string | undefined>(undefined);
  const [size, setSize] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (quickView) {
      setColor(quickView.colors[0]?.name);
      setSize(quickView.sizes[0]);
    }
  }, [quickView]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeQuickView();
    if (quickView) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [quickView, closeQuickView]);

  return (
    <AnimatePresence>
      {quickView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[85] grid place-items-center bg-dark/70 backdrop-blur-sm p-4"
          onClick={closeQuickView}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="grid w-full max-w-4xl overflow-hidden rounded-[24px] bg-background shadow-luxury md:grid-cols-2"
          >
            <div className="relative aspect-square bg-muted md:aspect-auto">
              <img
                src={quickView.images[0]}
                alt={quickView.name}
                className="h-full w-full object-cover"
              />
              {quickView.oldPrice && (
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  -{Math.round(((quickView.oldPrice - quickView.price) / quickView.oldPrice) * 100)}%
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-4 p-6 md:p-8">
              <button
                onClick={closeQuickView}
                aria-label="বন্ধ"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-muted transition hover:bg-primary hover:text-primary-foreground"
              >
                <X size={15} />
              </button>

              <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                {quickView.categoryName}
              </span>
              <h3 className="font-display text-2xl font-bold leading-tight">
                {quickView.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-primary">
                  {bnPrice(quickView.price)}
                </span>
                {quickView.oldPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {bnPrice(quickView.oldPrice)}
                  </span>
                )}
              </div>
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {quickView.shortDesc}
              </p>

              <div>
                <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  রঙ: <span className="text-primary">{color}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickView.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.name)}
                      title={c.name}
                      className={cn(
                        "h-8 w-8 rounded-full border-2 transition",
                        color === c.name ? "border-primary" : "border-border hover:border-gold",
                      )}
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  সাইজ
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickView.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={cn(
                        "rounded-[10px] border px-3 py-1.5 text-xs transition",
                        size === s
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    addToCart(quickView, { color, size });
                  }}
                  className="ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-dark text-xs font-medium text-background transition hover:bg-primary"
                >
                  <ShoppingBag size={14} /> কার্টে যোগ
                </button>
                <Link
                  to="/checkout"
                  onClick={() => {
                    addToCart(quickView, { color, size, silent: true });
                    closeQuickView();
                  }}
                  className="ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-primary text-xs font-medium text-primary-foreground transition hover:-translate-y-0.5"
                >
                  <Zap size={14} /> এখনই কিনুন
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => toggleWishlist(quickView.id)}
                  className={cn(
                    "flex h-11 items-center justify-center gap-2 rounded-[14px] border text-xs font-medium transition",
                    isWished(quickView.id)
                      ? "border-primary bg-primary-soft text-primary"
                      : "border-border hover:border-primary hover:text-primary",
                  )}
                >
                  <Heart
                    size={14}
                    fill={isWished(quickView.id) ? "currentColor" : "none"}
                  />
                  উইশলিস্ট
                </button>
                <Link
                  to="/product/$slug"
                  params={{ slug: quickView.slug }}
                  onClick={closeQuickView}
                  className="flex h-11 items-center justify-center rounded-[14px] border border-border text-xs font-medium transition hover:border-gold hover:text-gold"
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
