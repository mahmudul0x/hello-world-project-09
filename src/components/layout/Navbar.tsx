import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook, GitCompare, Heart, Menu, MessageCircle, Phone, Search,
  ShoppingBag, User, X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MiniCart } from "@/components/shop/MiniCart";
import { useShop } from "@/lib/shop/store";
import { useAuth } from "@/lib/shop/auth";
import { bnNum } from "@/lib/products";

const navLinks = [
  { label: "হোম", to: "/" },
  { label: "সব পণ্য", to: "/shop" },
  { label: "নতুন কালেকশন", to: "/new-collection" },
  { label: "বেস্ট সেলার", to: "/best-sellers" },
  { label: "অফার", to: "/offers" },
  { label: "নতুন আগমন", to: "/new-arrivals" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cartCount, wishlistCount, compare, openSearch, hydrated } = useShop();
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-500",
          scrolled
            ? "border-border/60 bg-background/95 shadow-luxury backdrop-blur-xl"
            : "border-transparent bg-background/90 shadow-soft-lux backdrop-blur",
        )}
      >
        <div className="container-luxury flex h-20 items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-primary text-primary-foreground">
              <span className="font-display text-lg font-bold">C</span>
              <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-gold" />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-display text-lg font-bold tracking-tight text-foreground">
                ChayaLux
              </div>
              <div className="text-[11px] text-muted-foreground">ছায়ালাক্স</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="story-link relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={openSearch}
              aria-label="খুঁজুন"
              className="relative grid h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary"
            >
              <Search size={18} />
            </button>

            {compare.length > 0 && (
              <Link
                to="/compare"
                aria-label="তুলনা"
                className="relative hidden h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary sm:grid"
              >
                <GitCompare size={17} />
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-dark px-1 text-[10px] font-semibold text-background">
                  {bnNum(compare.length)}
                </span>
              </Link>
            )}

            <Link
              to="/wishlist"
              aria-label="উইশলিস্ট"
              className="relative hidden h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary sm:grid"
            >
              <Heart size={18} />
              {hydrated && wishlistCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-semibold text-dark">
                  {bnNum(wishlistCount)}
                </span>
              )}
            </Link>

            <MiniCart>
              <span className="relative grid h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary">
                <ShoppingBag size={18} />
                <AnimatePresence>
                  {hydrated && cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground"
                    >
                      {bnNum(cartCount)}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </MiniCart>

            <Link
              to={user ? "/account" : "/login"}
              aria-label="অ্যাকাউন্ট"
              className="relative hidden h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary sm:grid"
            >
              <User size={18} />
            </Link>

            <div className="mx-1 hidden h-6 w-px bg-border md:block" />
            <a
              href="https://facebook.com/chayalux"
              target="_blank"
              rel="noreferrer"
              aria-label="ফেসবুক"
              className="hidden h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:text-primary md:grid"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://wa.me/8801885901184"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:text-primary md:grid"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="tel:01885901184"
              className="ripple-btn ml-2 hidden h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:bg-dark md:inline-flex"
            >
              <Phone size={14} /> 01885-901184
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="মেনু"
              className="ml-1 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 text-foreground transition hover:bg-primary hover:text-primary-foreground lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-background p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-xl font-bold">মেনু</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-muted"
                  aria-label="বন্ধ"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-primary-soft hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-border" />
                <Link to="/wishlist" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary">উইশলিস্ট</Link>
                <Link to="/compare" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary">তুলনা</Link>
                <Link to={user ? "/account" : "/login"} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary">
                  {user ? "আমার অ্যাকাউন্ট" : "লগইন / রেজিস্টার"}
                </Link>
                <Link to="/order-tracking" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary">অর্ডার ট্র্যাকিং</Link>
              </nav>
              <div className="mt-auto rounded-3xl bg-primary p-5 text-primary-foreground">
                <div className="text-xs opacity-70">যোগাযোগ করুন</div>
                <div className="mt-1 font-display text-lg font-semibold">01885-901184</div>
                <div className="mt-1 text-xs opacity-80">সারা বাংলাদেশে ডেলিভারি</div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
