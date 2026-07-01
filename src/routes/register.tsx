import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Phone, ShieldCheck, User } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { useAuth } from "@/lib/shop/auth";
import roomImg from "@/assets/room-hotel.jpg";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "রেজিস্টার — ChayaLux" }] }),
  component: RegisterPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "নাম দিন"),
  phone: z.string().trim().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল দিন"),
  email: z.string().trim().email("সঠিক ইমেইল দিন"),
  password: z.string().min(6, "কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড"),
});

function RegisterPage() {
  const { register, user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (user) {
    navigate({ to: "/account" });
    return null;
  }

  const set = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const iss of parsed.error.issues) errs[String(iss.path[0])] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    const res = register(form);
    setLoading(false);
    if (!res.ok) setMsg(res.msg);
    else navigate({ to: "/account" });
  };

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-luxury md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 p-8 md:order-1 md:p-12"
          >
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">
                Join ChayaLux
              </div>
              <h1 className="mt-1 heading-display text-3xl">নতুন অ্যাকাউন্ট</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                <Link to="/login" className="font-semibold text-primary underline-offset-4 hover:underline">
                  লগইন করুন
                </Link>
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <Field label="নাম" icon={User} error={errors.name}>
                <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="আপনার নাম" className="input-lux pl-11" />
              </Field>
              <Field label="মোবাইল নম্বর" icon={Phone} error={errors.phone}>
                <input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="01XXXXXXXXX" className="input-lux pl-11" />
              </Field>
              <Field label="ইমেইল" icon={Mail} error={errors.email}>
                <input value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="email@example.com" className="input-lux pl-11" />
              </Field>
              <Field label="পাসওয়ার্ড" icon={Lock} error={errors.password}>
                <input
                  type={show ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => set("password", e.target.value)}
                  placeholder="কমপক্ষে ৬ অক্ষর"
                  className="input-lux pl-11 pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </Field>

              {msg && (
                <div className="rounded-[12px] border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  {msg}
                </div>
              )}

              <LuxButton type="submit" variant="primary" size="lg" disabled={loading} className="w-full">
                {loading ? "প্রক্রিয়া চলছে..." : "অ্যাকাউন্ট তৈরি করুন"}
              </LuxButton>

              <div className="text-center text-[11px] text-muted-foreground">
                রেজিস্টার করলে আপনি আমাদের সেবার শর্তাবলী মেনে নিচ্ছেন।
              </div>
            </form>
          </motion.div>

          <div className="relative order-1 hidden min-h-[560px] md:order-2 md:block">
            <img src={roomImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-bl from-dark/60 via-primary/30 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-10 text-primary-foreground">
              <span className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-[11px] uppercase tracking-widest backdrop-blur">
                <ShieldCheck size={12} /> লাক্সারি এক্সপেরিয়েন্স
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight">
                বিলাসবহুল হোম <br /> এক্সপেরিয়েন্স
              </h2>
              <p className="mt-2 max-w-sm text-sm opacity-90">
                প্রিমিয়াম পর্দা, কুশন ও হোম ডেকোর — সরাসরি আপনার দরজায়।
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .input-lux { width: 100%; height: 48px; padding: 0 14px; border-radius: 14px; border: 1px solid var(--border); background: var(--background); font-size: 14px; outline: none; transition: border-color .2s, box-shadow .2s; }
        .input-lux:focus { border-color: var(--primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 12%, transparent); }
      `}</style>
    </SiteLayout>
  );
}

function Field({
  label, icon: Icon, children, error,
}: {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{label}</span>
      <span className="relative block">
        <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        {children}
      </span>
      {error && <span className="mt-1 block text-[11px] text-destructive">{error}</span>}
    </label>
  );
}
