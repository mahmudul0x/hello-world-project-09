import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useShop } from "@/lib/shop/store";
import { bnNum, bnPrice, getProduct } from "@/lib/products";

export function MiniCart({ children }: { children: React.ReactNode }) {
  const { cart, cartCount, cartSubtotal, removeFromCart } = useShop();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to="/cart" onClick={() => setOpen(false)} className="block">
        {children}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-[70] mt-2 hidden w-[380px] overflow-hidden rounded-[22px] border border-border/60 bg-background shadow-luxury lg:block"
          >
            <div className="flex items-center justify-between border-b border-border/60 bg-primary-soft/40 px-5 py-3">
              <div className="flex items-center gap-2 font-display font-semibold text-primary">
                <ShoppingBag size={16} /> আপনার কার্ট
              </div>
              <span className="text-xs text-muted-foreground">
                {bnNum(cartCount)}টি পণ্য
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="p-8 text-center">
                <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary">
                  <ShoppingBag size={22} />
                </div>
                <div className="text-sm font-medium">কার্ট এখনো খালি</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  পছন্দের পণ্য কার্টে যোগ করুন।
                </p>
                <Link
                  to="/shop"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground"
                >
                  শপিং শুরু করুন
                </Link>
              </div>
            ) : (
              <>
                <ul className="max-h-[340px] overflow-auto p-3">
                  {cart.slice(0, 5).map((it) => {
                    const p = getProduct(slugFor(it.productId));
                    if (!p) return null;
                    return (
                      <li
                        key={it.key}
                        className="flex gap-3 rounded-[14px] p-2 transition hover:bg-primary-soft/40"
                      >
                        <Link
                          to="/product/$slug"
                          params={{ slug: p.slug }}
                          onClick={() => setOpen(false)}
                          className="shrink-0"
                        >
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="h-16 w-16 rounded-[12px] object-cover"
                          />
                        </Link>
                        <div className="min-w-0 flex-1">
                          <div className="line-clamp-1 text-xs font-semibold">
                            {p.name}
                          </div>
                          <div className="mt-0.5 line-clamp-1 text-[10px] text-muted-foreground">
                            {it.color} • {it.size}
                          </div>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-semibold text-primary">
                              {bnPrice(p.price * it.qty)}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              × {bnNum(it.qty)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(it.key)}
                          aria-label="সরান"
                          className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
                        >
                          <X size={13} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-t border-border/60 bg-muted/30 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">সাবটোটাল</span>
                    <span className="font-display font-bold text-primary">
                      {bnPrice(cartSubtotal)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/cart"
                      onClick={() => setOpen(false)}
                      className="flex h-10 items-center justify-center rounded-[12px] border border-border bg-background text-xs font-medium transition hover:border-primary hover:text-primary"
                    >
                      কার্ট দেখুন
                    </Link>
                    <Link
                      to="/checkout"
                      onClick={() => setOpen(false)}
                      className="flex h-10 items-center justify-center rounded-[12px] bg-primary text-xs font-medium text-primary-foreground transition hover:bg-dark"
                    >
                      চেকআউট
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function slugFor(id: string): string {
  // Local slim import to avoid circular; PRODUCTS is a small array.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { PRODUCTS } = require("@/lib/products");
  return PRODUCTS.find((p: { id: string; slug: string }) => p.id === id)?.slug ?? "";
}
