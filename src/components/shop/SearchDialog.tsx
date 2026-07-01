import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Search, TrendingUp, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS, bnPrice } from "@/lib/products";
import { useShop } from "@/lib/shop/store";

const POPULAR = ["ভেলভেট পর্দা", "ব্ল্যাকআউট", "কুশন সেট", "সোফা কভার", "চাইনিজ পর্দা"];

export function SearchDialog() {
  const { searchOpen, closeSearch, recentSearches, pushRecentSearch } = useShop();
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!searchOpen) setQ("");
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    if (searchOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, closeSearch]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(t) ||
        p.categoryName.toLowerCase().includes(t) ||
        p.fabric.toLowerCase().includes(t),
    ).slice(0, 8);
  }, [q]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-dark/60 backdrop-blur-sm"
          onClick={closeSearch}
        >
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mt-16 w-full max-w-2xl overflow-hidden rounded-[22px] border border-border/60 bg-background shadow-luxury"
          >
            <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4">
              <Search size={18} className="text-primary" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="পণ্য, ক্যাটাগরি বা ফেব্রিক খুঁজুন..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={closeSearch}
                aria-label="বন্ধ"
                className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <X size={15} />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-auto p-4">
              {q.trim() === "" ? (
                <div className="space-y-5">
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        <Clock size={12} /> সাম্প্রতিক
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((r) => (
                          <button
                            key={r}
                            onClick={() => setQ(r)}
                            className="rounded-full border border-border bg-background px-3 py-1.5 text-xs transition hover:border-primary hover:text-primary"
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      <TrendingUp size={12} /> জনপ্রিয়
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {POPULAR.map((r) => (
                        <button
                          key={r}
                          onClick={() => setQ(r)}
                          className="rounded-full bg-primary-soft px-3 py-1.5 text-xs text-primary transition hover:bg-primary hover:text-primary-foreground"
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-muted text-muted-foreground">
                    <Search size={20} />
                  </div>
                  <p className="text-sm font-medium">কিছু পাওয়া যায়নি</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    অন্য কিওয়ার্ড দিয়ে চেষ্টা করুন।
                  </p>
                </div>
              ) : (
                <ul className="space-y-1">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        to="/product/$slug"
                        params={{ slug: p.slug }}
                        onClick={() => {
                          pushRecentSearch(q);
                          closeSearch();
                        }}
                        className="flex items-center gap-3 rounded-[14px] p-2 transition hover:bg-primary-soft/50"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="h-14 w-14 rounded-[12px] object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="line-clamp-1 text-sm font-semibold">
                            {p.name}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {p.categoryName}
                          </div>
                        </div>
                        <span className="font-display text-sm font-bold text-primary">
                          {bnPrice(p.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      to="/search"
                      search={{ q }}
                      onClick={() => {
                        pushRecentSearch(q);
                        closeSearch();
                      }}
                      className="flex h-11 items-center justify-center rounded-[14px] bg-primary text-xs font-medium text-primary-foreground"
                    >
                      "{q}" — সব ফলাফল দেখুন
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
