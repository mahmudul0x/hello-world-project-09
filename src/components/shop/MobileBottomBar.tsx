import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Home, Search, ShoppingBag, User } from "lucide-react";
import { useShop } from "@/lib/shop/store";
import { cn } from "@/lib/utils";
import { bnNum } from "@/lib/products";

export function MobileBottomBar() {
  const { cartCount, wishlistCount, openSearch } = useShop();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const items = [
    { to: "/", icon: Home, label: "হোম" },
    { to: "/shop", icon: ShoppingBag, label: "শপ" },
    { to: "/wishlist", icon: Heart, label: "উইশ", badge: wishlistCount },
    { to: "/cart", icon: ShoppingBag, label: "কার্ট", badge: cartCount },
    { to: "/account", icon: User, label: "অ্যাকাউন্ট" },
  ] as const;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_30px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl md:hidden">
      <nav className="grid grid-cols-5">
        <button
          onClick={openSearch}
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] text-muted-foreground transition hover:text-primary",
          )}
        >
          <Search size={19} />
          <span>খুঁজুন</span>
        </button>
        {items.slice(0, 1).map((i) => (
          <BarLink key={i.to} {...i} active={pathname === i.to} />
        ))}
        {items.slice(2).map((i) => (
          <BarLink
            key={i.to}
            {...i}
            active={pathname.startsWith(i.to) && (i.to !== "/" || pathname === "/")}
          />
        ))}
      </nav>
    </div>
  );
}

function BarLink({
  to,
  icon: Icon,
  label,
  badge,
  active,
}: {
  to: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  badge?: number;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "relative flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] transition",
        active ? "text-primary" : "text-muted-foreground",
      )}
    >
      <div className="relative">
        <Icon size={19} />
        {badge !== undefined && badge > 0 && (
          <span className="absolute -right-2 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[9px] font-semibold text-primary-foreground">
            {bnNum(badge)}
          </span>
        )}
      </div>
      <span>{label}</span>
    </Link>
  );
}
