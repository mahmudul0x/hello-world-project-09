import { createFileRoute } from "@tanstack/react-router";
import { Key } from "lucide-react";
import { useState } from "react";
import { LuxButton } from "@/components/ui/lux-button";
import { useAuth } from "@/lib/shop/auth";

export const Route = createFileRoute("/account/password")({
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
  component: PasswordPage,
});

function PasswordPage() {
  const { changePassword } = useAuth();
  const [oldP, setOldP] = useState("");
  const [newP, setNewP] = useState("");
  const [confirmP, setConfirmP] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newP.length < 6) return setMsg({ ok: false, text: "নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে।" });
    if (newP !== confirmP) return setMsg({ ok: false, text: "পাসওয়ার্ড মিলছে না।" });
    const res = changePassword(oldP, newP);
    setMsg({ ok: res.ok, text: res.msg });
    if (res.ok) {
      setOldP(""); setNewP(""); setConfirmP("");
    }
  };

  return (
    <div>
      <h2 className="heading-display mb-6 text-2xl">পাসওয়ার্ড পরিবর্তন</h2>
      <form onSubmit={onSubmit} className="max-w-md space-y-4 rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux">
        <Input label="পুরনো পাসওয়ার্ড" value={oldP} onChange={setOldP} />
        <Input label="নতুন পাসওয়ার্ড" value={newP} onChange={setNewP} />
        <Input label="নতুন পাসওয়ার্ড নিশ্চিত করুন" value={confirmP} onChange={setConfirmP} />
        {msg && (
          <div className={`rounded-[10px] px-3 py-2 text-xs ${msg.ok ? "bg-emerald-100 text-emerald-800" : "bg-destructive/10 text-destructive"}`}>
            {msg.text}
          </div>
        )}
        <LuxButton type="submit" variant="primary" size="lg" className="w-full">
          <Key size={16} /> পরিবর্তন করুন
        </LuxButton>
      </form>
    </div>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{label}</span>
      <input type="password" value={value} onChange={(e) => onChange(e.target.value)} className="h-11 w-full rounded-[12px] border border-border bg-background px-3 text-sm outline-none focus:border-primary" />
    </label>
  );
}
