import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { LuxButton } from "@/components/ui/lux-button";
import { BD_DISTRICTS } from "@/lib/bd-locations";
import { toast } from "sonner";

export const Route = createFileRoute("/account/addresses")({
  component: AddressesPage,
});

const KEY = "chayalux.address.v1";

function AddressesPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "",
    upazila: "",
    address: "",
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setForm(JSON.parse(raw));
    } catch {}
  }, []);

  const save = () => {
    localStorage.setItem(KEY, JSON.stringify(form));
    toast.success("ঠিকানা সংরক্ষণ হয়েছে");
  };

  const upazilas = BD_DISTRICTS.find((d) => d.name === form.district)?.upazilas ?? [];

  return (
    <div>
      <h2 className="heading-display mb-6 text-2xl">সংরক্ষিত ঠিকানা</h2>
      <div className="rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <MapPin size={16} />
          </span>
          <div>
            <div className="font-display text-sm font-semibold">প্রাইমারি ঠিকানা</div>
            <div className="text-xs text-muted-foreground">চেকআউটে স্বয়ংক্রিয়ভাবে ব্যবহার হবে</div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="নাম" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Input label="মোবাইল" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          <Select label="জেলা" value={form.district} onChange={(v) => setForm({ ...form, district: v, upazila: "" })} options={BD_DISTRICTS.map((d) => d.name)} />
          <Select label="উপজেলা" value={form.upazila} onChange={(v) => setForm({ ...form, upazila: v })} options={upazilas} disabled={!form.district} />
          <Input label="পূর্ণ ঠিকানা" value={form.address} onChange={(v) => setForm({ ...form, address: v })} className="sm:col-span-2" />
        </div>
        <LuxButton variant="primary" size="lg" className="mt-6" onClick={save}>
          <Save size={16} /> সংরক্ষণ করুন
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
function Select({ label, value, onChange, options, disabled }: { label: string; value: string; onChange: (v: string) => void; options: string[]; disabled?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
      <select disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} className="h-11 rounded-[12px] border border-border bg-background px-3 text-sm outline-none focus:border-primary disabled:opacity-50">
        <option value="">— নির্বাচন —</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
