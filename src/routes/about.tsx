import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award, CheckCircle2, Gem, HeartHandshake, Home, Layers, Palette,
  Ruler, ShieldCheck, Sparkles, Target, Truck,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxButton } from "@/components/ui/lux-button";
import { AnimatedCounter } from "@/components/blocks/AnimatedCounter";
import { ContactBanner } from "@/components/blocks/ContactBanner";
import { IMG, STATS } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "আমাদের সম্পর্কে — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux বাংলাদেশের প্রিমিয়াম হোম ডেকোর ও পর্দার ব্র্যান্ড — আমাদের গল্প, লক্ষ্য, ভিশন ও মূল্যবোধ জানুন।" },
      { property: "og:title", content: "আমাদের সম্পর্কে — ChayaLux" },
      { property: "og:description", content: "ChayaLux — আন্তর্জাতিক মানের লাক্সারি হোম ডেকোর ব্র্যান্ড।" },
      { property: "og:image", content: IMG.heroLiving },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Gem, title: "কোয়ালিটি", desc: "প্রিমিয়াম আমদানিকৃত ফেব্রিক ও নিখুঁত ফিনিশিং।" },
  { icon: ShieldCheck, title: "বিশ্বাস", desc: "১০ হাজারেরও বেশি গ্রাহকের আস্থার প্রতিফলন।" },
  { icon: HeartHandshake, title: "গ্রাহক সন্তুষ্টি", desc: "প্রতিটি অর্ডারই আমাদের কাছে সর্বোচ্চ অগ্রাধিকার।" },
  { icon: Sparkles, title: "ইনোভেশন", desc: "নতুন ডিজাইন ও কালেকশন প্রতিনিয়ত যোগ করা হয়।" },
  { icon: Palette, title: "প্রিমিয়াম ডিজাইন", desc: "আন্তর্জাতিক মানের নান্দনিক ডিজাইন কালেকশন।" },
];

const WHY = [
  { icon: Layers, title: "প্রিমিয়াম ফেব্রিক", desc: "সরাসরি আমদানিকৃত উচ্চমানের ভেলভেট, সাটিন ও ব্ল্যাকআউট ফেব্রিক।" },
  { icon: Palette, title: "লাইফটাইম কালার গ্যারান্টি", desc: "রঙ ফিকে হবে না — লেখা প্রতিশ্রুতি সহ।" },
  { icon: Ruler, title: "লাক্সারি স্টিচিং", desc: "প্রতিটি সেলাই হাতের কাজের মতো নিখুঁত।" },
  { icon: Award, title: "সাশ্রয়ী মূল্য", desc: "প্রিমিয়াম মান, কিন্তু সবার সামর্থ্যের মধ্যে।" },
  { icon: Truck, title: "দ্রুত ডেলিভারি", desc: "সারা বাংলাদেশে ২-৪ দিনের মধ্যে ডেলিভারি।" },
  { icon: HeartHandshake, title: "এক্সপার্ট সাপোর্ট", desc: "যেকোনো পরামর্শের জন্য প্রফেশনাল টিম সবসময় প্রস্তুত।" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="আমাদের সম্পর্কে"
        title="ChayaLux — বাংলাদেশের প্রিমিয়াম হোম ডেকোর গন্তব্য"
        description="আমরা বিশ্বাস করি প্রতিটি ঘরই একটি গল্প বলে। ChayaLux সেই গল্পকে করে তোলে আরও লাক্সারি, আরও অর্থবহ।"
        image={IMG.heroLiving}
      />

      {/* Our Story */}
      <section className="container-luxury py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] shadow-luxury">
              <img src={IMG.hero2} alt="ChayaLux showroom" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-[22px] bg-gold p-6 text-dark shadow-luxury md:block">
              <div className="font-display text-3xl font-bold">১০+</div>
              <div className="text-xs uppercase tracking-widest">বছরের অভিজ্ঞতা</div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="আমাদের গল্প"
              title="ছায়ার প্রতিটি ভাঁজে লুকানো লাক্সারির গল্প"
              align="left"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
              <p>
                ChayaLux যাত্রা শুরু করেছিল একটি সহজ বিশ্বাস থেকে — বাংলাদেশের প্রতিটি পরিবারই দাবি করে আন্তর্জাতিক মানের হোম ডেকোর, সেটাও যেন সাশ্রয়ী মূল্যে হয়। পুরান ঢাকার ইসলামপুরে ছোট্ট একটি শোরুম থেকে শুরু করে আজ আমরা সারা বাংলাদেশে হাজারো গ্রাহকের আস্থার নাম।
              </p>
              <p>
                আমরা কখনো কোয়ালিটির সাথে আপস করি না। প্রতিটি ফেব্রিক নির্বাচনে, প্রতিটি সেলাইয়ে, প্রতিটি প্যাকেজিংয়ে — শুধু একটাই মন্ত্র: <strong className="text-primary">গ্রাহক যেন প্রতিবার মুগ্ধ হন</strong>।
              </p>
              <p>
                আজ ChayaLux শুধু একটি ব্র্যান্ড নয় — এটি বাংলাদেশের লাক্সারি ইন্টেরিয়র সংস্কৃতির অংশ। এবং এই যাত্রায় আপনার সঙ্গী হতে আমরা গর্বিত।
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop">
                <LuxButton variant="primary" size="lg">সব পণ্য দেখুন</LuxButton>
              </Link>
              <Link to="/contact">
                <LuxButton variant="outline" size="lg">যোগাযোগ করুন</LuxButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-primary-soft/40 py-16 md:py-24">
        <div className="container-luxury grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, eyebrow: "আমাদের লক্ষ্য", title: "প্রিমিয়াম হোম ডেকোর সবার নাগালে", desc: "উচ্চমানের হোম ডেকোর পণ্য সাশ্রয়ী মূল্যে বাংলাদেশের প্রতিটি ঘরে পৌঁছে দেওয়া — যাতে প্রতিটি পরিবারই দাবি করতে পারে লাক্সারি লিভিং।" },
            { icon: Sparkles, eyebrow: "আমাদের ভিশন", title: "বাংলাদেশের সবচেয়ে বিশ্বস্ত লাক্সারি ব্র্যান্ড", desc: "আগামী এক দশকে ChayaLux হবে বাংলাদেশের সবচেয়ে বিশ্বস্ত লাক্সারি কার্টেন ও হোম ডেকোর ব্র্যান্ড — যেখানে গুণগত মান এবং গ্রাহকসেবাই মূল পরিচয়।" },
          ].map((b, i) => (
            <motion.div
              key={b.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[28px] bg-card p-8 shadow-soft-lux hover-lift md:p-10"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft-lux">
                <b.icon size={22} />
              </span>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{b.eyebrow}</div>
              <h3 className="heading-display mt-2 text-2xl">{b.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-luxury py-16 md:py-24">
        <SectionHeading eyebrow="মূল্যবোধ" title="যে পাঁচটি স্তম্ভে দাঁড়িয়ে ChayaLux" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-[22px] border border-border/70 bg-card p-6 text-center shadow-soft-lux transition hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <v.icon size={20} />
              </span>
              <div className="font-display text-base font-bold">{v.title}</div>
              <p className="text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why ChayaLux */}
      <section className="bg-dark py-16 text-background md:py-24">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="কেন ChayaLux"
            title="৬টি কারণ যা আমাদের আলাদা করে"
            description="আমরা প্রতিটি বিস্তারিতে বিশ্বাস করি — কারণ প্রিমিয়াম অভিজ্ঞতা তৈরি হয় ছোট ছোট নিখুঁত কাজের সমন্বয়ে।"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-4 rounded-[22px] border border-background/10 bg-background/5 p-6 backdrop-blur transition hover:border-gold/40 hover:bg-background/10"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-dark shadow-gold">
                  <w.icon size={20} />
                </span>
                <div>
                  <div className="font-display text-base font-bold">{w.title}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-background/70">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container-luxury py-16 md:py-24">
        <SectionHeading
          eyebrow="পরিসংখ্যান"
          title="সংখ্যায় ChayaLux"
          description="আমাদের যাত্রায় প্রতিটি সংখ্যাই একটি গল্প বলে — বিশ্বাস, ভালোবাসা এবং প্রতিশ্রুতির।"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => <AnimatedCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* Trust strip */}
      <section className="container-luxury pb-16 md:pb-24">
        <div className="grid gap-3 rounded-[28px] bg-primary-soft/60 p-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "১০০% অথেন্টিক পণ্য" },
            { icon: Truck, t: "দ্রুত হোম ডেলিভারি" },
            { icon: CheckCircle2, t: "লাইফটাইম কালার গ্যারান্টি" },
            { icon: Home, t: "সারা বাংলাদেশে সেবা" },
          ].map((x) => (
            <div key={x.t} className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft-lux">
                <x.icon size={18} />
              </span>
              <span className="text-sm font-semibold text-foreground">{x.t}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-16 md:pb-24">
        <ContactBanner />
      </div>
    </SiteLayout>
  );
}
