import { Link, useRouterState } from "@tanstack/react-router";
import {
  Heart, Key, LayoutDashboard, LogOut, MapPin, Package, User,
} from "lucide-react";
import { useAuth } from "@/lib/shop/auth";
import { cn } from "@/lib/utils";

const items: { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean }[] = [
  { to: "/account", label: "ড্যাশবোর্ড", icon: LayoutDashboard, exact: true },
  { to: "/account/orders", label: "আমার অর্ডার", icon: Package },
  { to: "/account/wishlist", label: "উইশলিস্ট", icon: Heart },
  { to: "/account/addresses", label: "ঠিকানা", icon: MapPin },
  { to: "/account/profile", label: "প্রোফাইল", icon: User },
  { to: "/account/password", label: "পাসওয়ার্ড", icon: Key },
];

export function AccountSidebar() {
  const { user, logout } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="lg:sticky lg:top-28 h-fit rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux">
      <div className="mb-5 flex items-center gap-3 rounded-[16px] bg-primary-soft/60 p-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
          {(user?.name ?? "গ").charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="truncate font-display text-sm font-semibold">
            {user?.name ?? "গেস্ট"}
          </div>
          <div className="truncate text-[11px] text-muted-foreground">
            {user?.phone ?? user?.email ?? ""}
          </div>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((it) => {
          const active = it.exact
            ? pathname === it.to
            : pathname === it.to || pathname.startsWith(it.to + "/");
          return (
            <Link
              key={it.to}
              to={it.to}
              className={cn(
                "flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm transition",
                active
                  ? "bg-primary text-primary-foreground shadow-soft-lux"
                  : "text-foreground/80 hover:bg-primary-soft hover:text-primary",
              )}
            >
              <it.icon size={16} /> {it.label}
            </Link>
          );
        })}
        <button
          onClick={logout}
          className="mt-2 flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm text-destructive transition hover:bg-destructive/10"
        >
          <LogOut size={16} /> লগআউট
        </button>
      </nav>
    </aside>
  );
}
