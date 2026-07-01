import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AccountSidebar } from "@/components/shop/AccountSidebar";
import { useAuth } from "@/lib/shop/auth";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "আমার অ্যাকাউন্ট — ChayaLux" }, { name: "robots", content: "noindex" }] }),
  component: AccountLayout,
});

function AccountLayout() {
  const { user, hydrated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (hydrated && !user) navigate({ to: "/login" });
  }, [hydrated, user, navigate]);

  if (!hydrated) return <SiteLayout><div className="container-luxury py-20" /></SiteLayout>;
  if (!user) return null;

  return (
    <SiteLayout>
      <section className="container-luxury py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <AccountSidebar />
          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
