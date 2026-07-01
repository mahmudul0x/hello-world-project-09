import { createFileRoute } from "@tanstack/react-router";
import { Save } from "lucide-react";
import { useState } from "react";
import { LuxButton } from "@/components/ui/lux-button";
import { useAuth } from "@/lib/shop/auth";

export const Route = createFileRoute("/account/profile")({
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({
    name: user?.name ?? "",
    phone: user?.phone ?? "",
    email: user?.email ?? "",
  });

  return (
    <div>
      <h2 className="heading-display mb-6 text-2xl">প্রোফাইল</h2>
      <div className="rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux">
        <div className="mb-6 flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-primary to-dark font-display text-2xl font-bold text-primary-foreground shadow-luxury">
            {user?.name?.charAt(0) ?? "?"}
          </div>
          <div>
            <div className="font-display text-lg font-semibold">{user?.name}</div>
            <div className="text-xs text-muted-foreground">
              সদস্য হয়েছেন {new Date(user?.createdAt ?? Date.now()).toLocaleDateString("en-GB")}
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="নাম" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Input label="মোবাইল" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          <Input label="ইমেইল" value={form.email} onChange={(v) => setForm({ ...form, email: v })} className="sm:col-span-2" />
        </div>
        <LuxButton variant="primary" size="lg" className="mt-6" onClick={() => updateProfile(form)}>
          <Save size={16} /> আপডেট করুন
        </LuxButton>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, className }: { label: string; value: string; onChange: (v: string) => void; className?: string }) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="h-11 rounded-[12px] border border-border bg-background px-3 text-sm outline-none focus:border-primary" />
    </label>
  );
}
