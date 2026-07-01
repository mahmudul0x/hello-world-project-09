import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Clock, Facebook, Instagram, Mail, MapPin, MessageCircle,
  Phone, Send, Youtube,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/blocks/PageHero";
import { LuxButton } from "@/components/ui/lux-button";
import { IMG } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "যোগাযোগ — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux-এর সাথে যোগাযোগ করুন — ফোন, ইমেইল, WhatsApp, Messenger অথবা সরাসরি শোরুম ভিজিট।" },
      { property: "og:title", content: "যোগাযোগ — ChayaLux" },
      { property: "og:image", content: IMG.roomOffice },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে").max(80, "নাম অনেক বড়"),
  phone: z.string().trim().min(11, "সঠিক মোবাইল নম্বর দিন").max(15, "মোবাইল নম্বর ভুল"),
  email: z.string().trim().email("সঠিক ইমেইল ঠিকানা দিন").max(120),
  subject: z.string().trim().min(3, "বিষয় দিন").max(120),
  message: z.string().trim().min(10, "বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে").max(800, "বার্তা অনেক বড়"),
});

const INFO = [
  { icon: Phone, label: "ফোন", value: "01885-901184", href: "tel:01885901184" },
  { icon: Mail, label: "ইমেইল", value: "mdjahedhasanfb@gmail.com", href: "mailto:mdjahedhasanfb@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "01885-901184", href: "https://wa.me/8801885901184" },
  { icon: Clock, label: "কর্মঘণ্টা", value: "শনি — বৃহঃ, ১০:০০ — ৯:০০ টা" },
];

const SOCIALS = [
  { icon: Facebook, href: "https://facebook.com/chayalux", label: "Facebook", color: "bg-[#1877F2]" },
  { icon: MessageCircle, href: "https://m.me/chayalux", label: "Messenger", color: "bg-[#006AFF]" },
  { icon: Instagram, href: "https://instagram.com/chayalux", label: "Instagram", color: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]" },
  { icon: Youtube, href: "https://youtube.com/@chayalux", label: "YouTube", color: "bg-[#FF0000]" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = contactSchema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("অনুগ্রহ করে ফর্মের ত্রুটিগুলো ঠিক করুন");
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulated submission — replace with server integration when backend is enabled
    setTimeout(() => {
      setLoading(false);
      toast.success("আপনার বার্তা পাঠানো হয়েছে!", {
        description: "আমরা দ্রুত আপনার সাথে যোগাযোগ করব।",
      });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="যোগাযোগ"
        title="আপনার প্রশ্ন — আমাদের অগ্রাধিকার"
        description="যেকোনো পরামর্শ, কাস্টম অর্ডার বা প্রজেক্ট ইনকোয়ারির জন্য আমরা সবসময় প্রস্তুত।"
        image={IMG.roomOffice}
      />

      <section className="container-luxury py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={submit}
            className="rounded-[28px] bg-card p-6 shadow-luxury md:p-10"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">বার্তা পাঠান</div>
            <h2 className="heading-display mt-2 text-2xl md:text-3xl">আমাদের লিখুন</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              ফর্মটি পূরণ করুন — আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="নাম" error={errors.name}>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="আপনার পূর্ণ নাম" className={input(errors.name)} />
              </Field>
              <Field label="মোবাইল" error={errors.phone}>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="01XXX-XXXXXX" className={input(errors.phone)} />
              </Field>
              <Field label="ইমেইল" error={errors.email} className="sm:col-span-2">
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className={input(errors.email)} />
              </Field>
              <Field label="বিষয়" error={errors.subject} className="sm:col-span-2">
                <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="যেমন: কাস্টম পর্দার অর্ডার" className={input(errors.subject)} />
              </Field>
              <Field label="বার্তা" error={errors.message} className="sm:col-span-2">
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="আপনার বার্তা বিস্তারিত লিখুন..." className={`${input(errors.message)} min-h-[130px] py-3 resize-none`} />
              </Field>
            </div>

            <LuxButton type="submit" variant="primary" size="lg" className="mt-6 w-full sm:w-auto" disabled={loading}>
              {loading ? "পাঠানো হচ্ছে..." : (<><Send size={16} /> বার্তা পাঠান</>)}
            </LuxButton>
          </motion.form>

          {/* Info + Map */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[28px] bg-primary p-8 text-primary-foreground shadow-luxury"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">যোগাযোগ তথ্য</div>
              <h3 className="heading-display mt-2 text-2xl">সরাসরি কথা বলুন</h3>

              <div className="mt-6 space-y-4">
                {INFO.map((i) => {
                  const inner = (
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-dark shadow-gold">
                        <i.icon size={17} />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-primary-foreground/60">{i.label}</div>
                        <div className="text-sm font-medium">{i.value}</div>
                      </div>
                    </div>
                  );
                  return i.href ? (
                    <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition hover:opacity-90">
                      {inner}
                    </a>
                  ) : <div key={i.label}>{inner}</div>;
                })}

                <div className="flex items-start gap-3 border-t border-primary-foreground/15 pt-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-dark shadow-gold">
                    <MapPin size={17} />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-primary-foreground/60">ঠিকানা</div>
                    <div className="text-sm leading-relaxed">
                      Karim Mansion, Solstice Home Collection<br />
                      Islampur, Old Dhaka, Bangladesh
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-primary-foreground/15 pt-6">
                <div className="text-[11px] uppercase tracking-widest text-primary-foreground/60">সোশ্যাল মিডিয়া</div>
                <div className="mt-3 flex gap-3">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                      className={`group grid h-11 w-11 place-items-center rounded-full ${s.color} text-white shadow-soft-lux transition hover:-translate-y-1 hover:scale-110`}>
                      <s.icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="overflow-hidden rounded-[28px] shadow-luxury"
            >
              <iframe
                title="ChayaLux Location"
                src="https://www.google.com/maps?q=Islampur+Old+Dhaka+Bangladesh&output=embed"
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
      {children}
      {error && <span className="text-[11px] text-destructive">{error}</span>}
    </label>
  );
}
const input = (err?: string) =>
  `h-12 rounded-[14px] border bg-background px-4 text-sm outline-none transition focus:border-primary ${err ? "border-destructive" : "border-border"}`;
