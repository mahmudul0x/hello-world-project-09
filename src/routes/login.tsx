import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { useAuth } from "@/lib/shop/auth";
import roomImg from "@/assets/room-drawing.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "লগইন — ChayaLux" }] }),
  component: LoginPage,
});

function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (user) {
    navigate({ to: "/account" });
    return null;
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!id.trim() || !pass) {
      setError("ইমেইল/মোবাইল ও পাসওয়ার্ড দিন।");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    const res = login(id, pass);
    setLoading(false);
    if (!res.ok) setError(res.msg);
    else navigate({ to: "/account" });
  };

  return (
    <SiteLayout>
      <section className="container-luxury py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-luxury md:grid-cols-2">
          {/* Left visual */}
          <div className="relative hidden min-h-[560px] md:block">
            <img src={roomImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-dark/60 via-primary/30 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-10 text-primary-foreground">
              <span className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-[11px] uppercase tracking-widest backdrop-blur">
                <ShieldCheck size={12} /> নিরাপদ লগইন
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight">
                আপনার ChayaLux <br /> অ্যাকাউন্ট
              </h2>
              <p className="mt-2 max-w-sm text-sm opacity-90">
                অর্ডার ট্র্যাক, উইশলিস্ট, ঠিকানা ও অফার — সব এক জায়গায়।
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12"
          >
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">
                Welcome Back
              </div>
              <h1 className="mt-1 heading-display text-3xl">লগইন করুন</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                অ্যাকাউন্ট নেই?{" "}
                <Link to="/register" className="font-semibold text-primary underline-offset-4 hover:underline">
                  রেজিস্টার করুন
                </Link>
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <Field label="ইমেইল বা মোবাইল" icon={Mail}>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="email@example.com অথবা 01XXXXXXXXX"
                  className="input-lux pl-11"
                />
              </Field>
              <Field label="পাসওয়ার্ড" icon={Lock}>
                <input
                  type={show ? "text" : "password"}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="আপনার পাসওয়ার্ড"
                  className="input-lux pl-11 pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  aria-label={show ? "লুকান" : "দেখান"}
                >
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </Field>

              {error && (
                <div className="rounded-[12px] border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  {error}
                </div>
              )}

              <LuxButton type="submit" variant="primary" size="lg" disabled={loading} className="w-full">
                {loading ? "প্রবেশ করছি..." : "লগইন করুন"}
              </LuxButton>

              <div className="text-center text-[11px] text-muted-foreground">
                <ShieldCheck size={11} className="mr-1 inline" /> আপনার তথ্য নিরাপদ ও এনক্রিপ্টেড
              </div>
            </form>
          </motion.div>
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
  label, icon: Icon, children,
}: {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{label}</span>
      <span className="relative block">
        <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        {children}
      </span>
    </label>
  );
}
