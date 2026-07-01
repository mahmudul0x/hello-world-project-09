import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Sparkles, Truck, ShieldCheck, Headphones, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-living-room.jpg";
import curtainImg from "@/assets/curtain-detail.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import cushionsImg from "@/assets/cushions.jpg";
import blindsImg from "@/assets/blinds.jpg";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/cards/ProductCard";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { Banner } from "@/components/blocks/Banner";
import { FAQ } from "@/components/blocks/FAQ";
import { Newsletter } from "@/components/blocks/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর" },
      { name: "description", content: "ছায়ালাক্স — বাংলাদেশের প্রিমিয়াম লাক্সারি কার্টেন, ভেলভেট, ব্ল্যাকআউট, চাইনিজ পর্দা ও হোম ডেকোর ব্র্যান্ড।" },
      { property: "og:title", content: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর" },
      { property: "og:description", content: "লাক্সারি ইন্টেরিয়র, প্রিমিয়াম কার্টেন — সারা বাংলাদেশে হোম ডেলিভারি।" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const products = [
  { id: "1", name: "রয়্যাল ভেলভেট বার্গান্ডি পর্দা", category: "ভেলভেট", price: 4850, oldPrice: 6200, image: curtainImg, badge: "নতুন" },
  { id: "2", name: "মডার্ন ব্ল্যাকআউট ড্রেপ", category: "ব্ল্যাকআউট", price: 3950, image: bedroomImg, badge: "বেস্ট" },
  { id: "3", name: "সিল্ক টাচ কুশন সেট", category: "কুশন", price: 1850, oldPrice: 2400, image: cushionsImg },
  { id: "4", name: "প্রিমিয়াম উইন্ডো ব্লাইন্ড", category: "ব্লাইন্ড", price: 5200, image: blindsImg, badge: "সেল" },
];

const categories = [
  { name: "ভেলভেট পর্দা", count: 48, image: curtainImg },
  { name: "ব্ল্যাকআউট পর্দা", count: 36, image: bedroomImg },
  { name: "উইন্ডো ব্লাইন্ড", count: 24, image: blindsImg },
  { name: "কুশন কালেকশন", count: 62, image: cushionsImg },
];

const features = [
  { icon: Truck, title: "ফ্রি হোম ডেলিভারি", description: "সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি সেবা।" },
  { icon: ShieldCheck, title: "প্রিমিয়াম কোয়ালিটি", description: "প্রতিটি পণ্য আন্তর্জাতিক মানের কাপড় ও ফিনিশিং।" },
  { icon: Award, title: "লাক্সারি ডিজাইন", description: "এক্সক্লুসিভ ডিজাইন — শুধু আপনার ঘরের জন্য।" },
  { icon: Headphones, title: "২৪/৭ কাস্টমার কেয়ার", description: "যেকোনো প্রশ্নে আমরা সর্বদা পাশে আছি।" },
  { icon: Leaf, title: "ইকো-ফ্রেন্ডলি ফেব্রিক", description: "পরিবেশবান্ধব ও নিরাপদ উপাদানে তৈরি।" },
  { icon: Sparkles, title: "কাস্টম টেইলরিং", description: "আপনার জানালার মাপে পার্ফেক্ট ফিটিং।" },
];

const reviews = [
  { name: "সাদিয়া রহমান", location: "ধানমন্ডি, ঢাকা", rating: 5, text: "কাপড়ের কোয়ালিটি অসাধারণ! ঘরের লুক পুরোপুরি বদলে গেছে। ডেলিভারিও দ্রুত ছিল।" },
  { name: "তানভীর আহমেদ", location: "গুলশান, ঢাকা", rating: 5, text: "প্রিমিয়াম ফিনিশিং, দাম ন্যায্য। ChayaLux-এর সার্ভিস সত্যিই লাক্সারি ব্র্যান্ডের মতো।" },
  { name: "নুসরাত জাহান", location: "চট্টগ্রাম", rating: 5, text: "ভেলভেট কার্টেনটি ছবির চেয়েও সুন্দর। বন্ধুরা এখন সবাই জিজ্ঞেস করে কোথা থেকে নিয়েছি।" },
];

const posts = [
  { title: "২০২৬ সালের সেরা কার্টেন ট্রেন্ড", excerpt: "এই বছর কোন রঙ ও ডিজাইন আপনার ঘরকে করবে আরও আকর্ষণীয়।", image: heroImg, date: "১০ জুন, ২০২৬", category: "ট্রেন্ড" },
  { title: "ছোট ঘরকে বড় দেখানোর ৫টি টিপস", excerpt: "সঠিক পর্দা ও রঙের কম্বিনেশনে ছোট ঘরও দেখাবে প্রশস্ত।", image: bedroomImg, date: "৫ জুন, ২০২৬", category: "টিপস" },
  { title: "ব্ল্যাকআউট পর্দার সুবিধা", excerpt: "ঘুমের মান বাড়াতে ও গরম কমাতে ব্ল্যাকআউট পর্দার ভূমিকা।", image: blindsImg, date: "১ জুন, ২০২৬", category: "গাইড" },
];

const faqs = [
  { q: "সারা বাংলাদেশে কি ডেলিভারি হয়?", a: "হ্যাঁ, আমরা সারা বাংলাদেশে হোম ডেলিভারি প্রদান করি। ঢাকার ভিতরে ১-২ দিন এবং বাইরে ৩-৫ দিন সময় লাগে।" },
  { q: "পেমেন্ট মেথড কী কী?", a: "আপাতত আমরা ক্যাশ অন ডেলিভারি (COD) সুবিধা দিচ্ছি — পণ্য হাতে পেয়ে পরিশোধ করুন।" },
  { q: "কাস্টম সাইজে পর্দা তৈরি হয়?", a: "অবশ্যই। আপনার জানালার মাপ অনুযায়ী আমরা কাস্টম টেইলরিং করে দিই — কোনো অতিরিক্ত চার্জ নেই।" },
  { q: "রিটার্ন পলিসি কী?", a: "পণ্য পাওয়ার ৭ দিনের মধ্যে ম্যানুফ্যাকচারিং ত্রুটি থাকলে বিনামূল্যে রিটার্ন/এক্সচেঞ্জ করা হয়।" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative -mt-20 overflow-hidden pt-20">
        <div className="container-luxury grid gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <Sparkles size={12} className="text-gold" /> নতুন কালেকশন ২০২৬
            </span>
            <h1 className="heading-display text-4xl text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              আপনার ঘরে <span className="text-gold-gradient">লাক্সারি</span> এর ছোঁয়া
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              ChayaLux — প্রিমিয়াম কার্টেন, ভেলভেট ড্রেপ, ব্ল্যাকআউট ও হোম ডেকোরের
              এক্সক্লুসিভ কালেকশন। আন্তর্জাতিক মানের ইন্টেরিয়র, বাংলার হৃদয়ে।
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <LuxButton variant="primary" size="lg">
                কালেকশন দেখুন <ArrowRight size={16} />
              </LuxButton>
              <LuxButton variant="outline" size="lg">
                কাস্টম অর্ডার
              </LuxButton>
            </div>
            <div className="mt-6 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { n: "১০+", l: "বছর অভিজ্ঞতা" },
                { n: "৫০০০+", l: "সন্তুষ্ট গ্রাহক" },
                { n: "৬৪", l: "জেলায় ডেলিভারি" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-primary sm:text-3xl">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="image-zoom aspect-[4/5] overflow-hidden rounded-[28px] shadow-float">
              <img src={heroImg} alt="Luxury living room" width={1920} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-[22px] bg-background/95 p-5 shadow-luxury backdrop-blur sm:block">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                <Award size={14} /> প্রিমিয়াম
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">
                হ্যান্ডপিকড ফেব্রিক, নিখুঁত ফিনিশিং
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-luxury py-20">
        <SectionHeading
          eyebrow="ক্যাটাগরি"
          title="আমাদের কালেকশন"
          description="প্রতিটি ঘরের জন্য পার্ফেক্ট চয়েস — কার্টেন থেকে হোম ডেকোর, সবকিছু এক জায়গায়।"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.name} category={c} index={i} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container-luxury py-20">
        <SectionHeading
          eyebrow="কেন ChayaLux"
          title="যে কারণে গ্রাহকরা আমাদের বেছে নেন"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="container-luxury py-20">
        <SectionHeading
          eyebrow="বেস্ট সেলার"
          title="জনপ্রিয় পণ্যসমূহ"
          description="গ্রাহকদের সবচেয়ে পছন্দের কালেকশন — সীমিত স্টক।"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <div className="py-10">
        <Banner
          eyebrow="এক্সক্লুসিভ অফার"
          title="নতুন কালেকশনে পাচ্ছেন ৩০% পর্যন্ত ছাড়"
          description="সীমিত সময়ের জন্য আমাদের লাক্সারি ভেলভেট ও ব্ল্যাকআউট কালেকশনে বিশেষ অফার — আপনার পছন্দের পর্দা এখনই সংগ্রহ করুন।"
          image={curtainImg}
          cta={{ label: "অফার দেখুন" }}
        />
      </div>

      {/* Gallery */}
      <section className="container-luxury py-20">
        <SectionHeading eyebrow="গ্যালারি" title="আমাদের কাজের ঝলক" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          <GalleryCard image={heroImg} title="লিভিং রুম" index={0} className="col-span-2 row-span-2 aspect-square md:aspect-auto" />
          <GalleryCard image={bedroomImg} title="বেডরুম" index={1} className="aspect-square" />
          <GalleryCard image={curtainImg} title="ভেলভেট" index={2} className="aspect-square" />
          <GalleryCard image={cushionsImg} title="কুশন" index={3} className="aspect-square" />
          <GalleryCard image={blindsImg} title="ব্লাইন্ড" index={4} className="aspect-square" />
        </div>
      </section>

      {/* Reviews */}
      <section className="container-luxury py-20">
        <SectionHeading eyebrow="গ্রাহক রিভিউ" title="আমাদের গ্রাহকরা যা বলছেন" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="container-luxury py-20">
        <SectionHeading eyebrow="ব্লগ" title="ইন্টেরিয়র ইন্সপিরেশন" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <BlogCard key={p.title} post={p} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-luxury py-20">
        <SectionHeading eyebrow="প্রশ্নোত্তর" title="সাধারণ জিজ্ঞাসা" />
        <div className="mt-14">
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Newsletter */}
      <div className="py-10 pb-24">
        <Newsletter />
      </div>
    </SiteLayout>
  );
}
