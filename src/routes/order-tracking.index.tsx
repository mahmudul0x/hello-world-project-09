import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Package, Search } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";

export const Route = createFileRoute("/order-tracking/")({
  head: () => ({
    meta: [{ title: "অর্ডার ট্র্যাকিং — ChayaLux" }],
  }),
  component: TrackingEntry,
});

function TrackingEntry() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  return (
    <SiteLayout>
      <section className="container-luxury py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-luxury">
            <Package size={26} />
          </div>
          <h1 className="heading-display text-3xl sm:text-4xl">অর্ডার ট্র্যাক করুন</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            আপনার অর্ডার নম্বর দিয়ে বর্তমান স্ট্যাটাস দেখুন।
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (id.trim()) navigate({ to: "/order-tracking/$id", params: { id: id.trim() } });
            }}
            className="mt-8 flex gap-2 rounded-[18px] border border-border/60 bg-card p-2 shadow-soft-lux"
          >
            <div className="flex flex-1 items-center gap-2 px-3 text-muted-foreground">
              <Search size={16} />
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="যেমন: CL-XXXXX"
                className="h-11 flex-1 bg-transparent text-sm outline-none"
              />
            </div>
            <LuxButton variant="primary" size="md" type="submit">ট্র্যাক করুন</LuxButton>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
