import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Heart, Menu, MessageCircle, Phone, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "হোম", to: "/" },
  { label: "পণ্যসমূহ", to: "/" },
  { label: "ক্যাটাগরি", to: "/" },
  { label: "গ্যালারি", to: "/" },
  { label: "ব্লগ", to: "/" },
  { label: "আমাদের সম্পর্কে", to: "/" },
  { label: "যোগাযোগ", to: "/" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-border/60 bg-background/85 shadow-soft-lux backdrop-blur-xl"
            : "bg-transparent",
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
            <IconBtn label="খুঁজুন"><Search size={18} /></IconBtn>
            <IconBtn label="অ্যাকাউন্ট" className="hidden sm:inline-flex"><User size={18} /></IconBtn>
            <IconBtn label="কার্ট">
              <ShoppingBag size={18} />
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                2
              </span>
            </IconBtn>
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

function IconBtn({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <button
      aria-label={label}
      className={cn(
        "relative grid h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary",
        className,
      )}
    >
      {children}
    </button>
  );
}
