import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Award, Banknote, Layers, Package, Palette,
  Ruler, Scissors, Truck,
} from "lucide-react";

import heroImg from "@/assets/hero-living-room.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import curtainImg from "@/assets/curtain-detail.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import cushionsImg from "@/assets/cushions.jpg";
import blindsImg from "@/assets/blinds.jpg";
import catChinese from "@/assets/cat-chinese.jpg";
import catSatin from "@/assets/cat-satin.jpg";
import catHospital from "@/assets/cat-hospital.jpg";
import catSofaCover from "@/assets/cat-sofa-cover.jpg";
import catBedsheet from "@/assets/cat-bedsheet.jpg";
import roomOffice from "@/assets/room-office.jpg";
import roomHotel from "@/assets/room-hotel.jpg";
import roomDrawing from "@/assets/room-drawing.jpg";
import roomApartment from "@/assets/room-apartment.jpg";
import promoBanner from "@/assets/promo-banner.jpg";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { LuxButton } from "@/components/ui/lux-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/cards/ProductCard";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { FAQ } from "@/components/blocks/FAQ";
import { Newsletter } from "@/components/blocks/Newsletter";
import { HeroSlider } from "@/components/blocks/HeroSlider";
import { TrustCard } from "@/components/blocks/TrustCard";
import { FeaturedCollection } from "@/components/blocks/FeaturedCollection";
import { ContactBanner } from "@/components/blocks/ContactBanner";

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

const heroSlides = [
  { image: heroImg, eyebrow: "নতুন কালেকশন ২০২৬", title: "আপনার ঘরে", highlight: "লাক্সারির ছোঁয়া", description: "ChayaLux — প্রিমিয়াম কার্টেন, ভেলভেট ড্রেপ ও হোম ডেকোরের এক্সক্লুসিভ কালেকশন। আন্তর্জাতিক মানের ইন্টেরিয়র, বাংলার হৃদয়ে।" },
  { image: hero2, eyebrow: "গোল্ডেন কালেকশন", title: "সোনালী আভায়", highlight: "উষ্ণ সন্ধ্যা", description: "সাটিন গোল্ডের রাজকীয় পর্দায় সাজান আপনার ড্রয়িং রুম — প্রতিটি মুহূর্ত হয়ে উঠুক বিশেষ।" },
  { image: hero3, eyebrow: "মিনিমাল লিভিং", title: "স্নিগ্ধ সকাল,", highlight: "কোমল আলো", description: "লিনেন ও শিয়ার পর্দার কম্বিনেশনে নরম প্রাকৃতিক আলোয় ভরে উঠুক আপনার শোবার ঘর।" },
  { image: hero4, eyebrow: "ভেলভেট সিরিজ", title: "রাজকীয় বার্গান্ডি,", highlight: "চিরস্মরণীয়", description: "রয়্যাল ভেলভেট কার্টেনে আপনার লিভিং রুম হয়ে উঠবে ৫-স্টার হোটেলের মতো বিলাসবহুল।" },
  { image: hero5, eyebrow: "কাস্টম টেইলরিং", title: "প্রতিটি জানালার জন্য", highlight: "পার্ফেক্ট ফিট", description: "আপনার জানালার মাপে হাতে তৈরি প্রিমিয়াম কার্টেন — বিনামূল্যে ফিটিং সার্ভিস সহ।" },
];

const trustItems = [
  { icon: Truck, title: "দ্রুত ডেলিভারি", subtitle: "সারা বাংলাদেশে" },
  { icon: Banknote, title: "ক্যাশ অন ডেলিভারি", subtitle: "হাতে পেয়ে পেমেন্ট" },
  { icon: Palette, title: "১০০% কালার গ্যারান্টি", subtitle: "রং জ্বলবে না" },
  { icon: Award, title: "প্রিমিয়াম কোয়ালিটি", subtitle: "আন্তর্জাতিক মান" },
];

const categories = [
  { name: "লাক্সারি কার্টেন", count: 48, image: heroImg },
  { name: "ব্ল্যাকআউট পর্দা", count: 36, image: bedroomImg },
  { name: "ভেলভেট পর্দা", count: 42, image: curtainImg },
  { name: "চাইনিজ পর্দা", count: 28, image: catChinese },
  { name: "উইন্ডো ব্লাইন্ড", count: 24, image: blindsImg },
  { name: "হসপিটাল পর্দা", count: 18, image: catHospital },
  { name: "সোফা কভার", count: 32, image: catSofaCover },
  { name: "ফোম ও লুজ কভার", count: 22, image: cushionsImg },
  { name: "কুশন কালেকশন", count: 62, image: cushionsImg },
  { name: "বিছানার চাদর", count: 45, image: catBedsheet },
];

const collections = [
  { eyebrow: "এক্সক্লুসিভ", title: "চাইনিজ প্রিমিয়াম পর্দা", description: "নিখুঁত এমব্রয়ডারি ও সিল্ক টাচ ফিনিশিং — ঐতিহ্যবাহী চাইনিজ ডিজাইন আধুনিক টুইস্টে।", image: catChinese, cta: "কালেকশন দেখুন" },
  { eyebrow: "সিগনেচার", title: "ভেলভেট কালেকশন", description: "রয়্যাল বার্গান্ডি থেকে ডীপ এমারাল্ড — প্রিমিয়াম ভেলভেটে ঘরকে দিন হোটেল স্যুইটের অনুভূতি।", image: curtainImg, cta: "এক্সপ্লোর করুন" },
  { eyebrow: "নতুন", title: "লাক্সারি সাটিন কার্টেন", description: "চকচকে সাটিন ফেব্রিকে সোনালী আভা — ড্রয়িং রুমের জন্য পার্ফেক্ট চয়েস।", image: catSatin, cta: "শপ করুন" },
];

const bestSellers = [
  { id: "1", name: "রয়্যাল ভেলভেট বার্গান্ডি পর্দা", category: "ভেলভেট", price: 4850, oldPrice: 6200, image: curtainImg, badge: "৩০% ছাড়" },
  { id: "2", name: "মডার্ন ব্ল্যাকআউট ড্রেপ", category: "ব্ল্যাকআউট", price: 3950, image: bedroomImg, badge: "বেস্ট" },
  { id: "3", name: "সিল্ক টাচ কুশন সেট", category: "কুশন", price: 1850, oldPrice: 2400, image: cushionsImg, badge: "সেল" },
  { id: "4", name: "প্রিমিয়াম উইন্ডো ব্লাইন্ড", category: "ব্লাইন্ড", price: 5200, image: blindsImg },
];

const newArrivals = [
  { id: "5", name: "গোল্ডেন সাটিন লাক্সারি পর্দা", category: "সাটিন", price: 5450, image: catSatin, badge: "নতুন" },
  { id: "6", name: "চাইনিজ এমব্রয়ডারি কার্টেন", category: "চাইনিজ", price: 4250, oldPrice: 5500, image: catChinese, badge: "নতুন" },
  { id: "7", name: "প্রিমিয়াম সিল্ক বেডশিট", category: "বেডশিট", price: 2850, image: catBedsheet, badge: "নতুন" },
  { id: "8", name: "ইউনিভার্সাল সোফা কভার", category: "সোফা কভার", price: 3150, oldPrice: 3900, image: catSofaCover },
];

const features = [
  { icon: Layers, title: "প্রিমিয়াম ফেব্রিক", description: "আন্তর্জাতিক মানের বেছে নেওয়া কাপড় — নরম, টেকসই ও বিলাসবহুল।" },
  { icon: Palette, title: "দীর্ঘস্থায়ী রঙ", description: "১০০% কালার গ্যারান্টি — বছরের পর বছর একই উজ্জ্বলতা।" },
  { icon: Ruler, title: "কাস্টম সাইজ", description: "আপনার জানালার মাপে পার্ফেক্ট ফিটিং — বিনামূল্যে টেইলরিং।" },
  { icon: Scissors, title: "উন্নত স্টিচিং", description: "ডাবল-লাইন স্টিচিং — শক্তিশালী, পরিপাটি ও দীর্ঘস্থায়ী।" },
  { icon: Truck, title: "দ্রুত ডেলিভারি", description: "ঢাকায় ১-২ দিন, সারা দেশে ৩-৫ দিনে হোম ডেলিভারি।" },
  { icon: Package, title: "বিশেষ প্যাকেজিং", description: "প্রিমিয়াম প্যাকেজিং — উপহার হিসেবেও পার্ফেক্ট।" },
];

const inspirations = [
  { image: heroImg, title: "লিভিং রুম" },
  { image: bedroomImg, title: "বেডরুম" },
  { image: roomDrawing, title: "ড্রয়িং রুম" },
  { image: roomOffice, title: "অফিস" },
  { image: catHospital, title: "হসপিটাল" },
  { image: roomHotel, title: "হোটেল" },
  { image: roomApartment, title: "মডার্ন অ্যাপার্টমেন্ট" },
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
  { q: "কালার গ্যারান্টি কতদিনের?", a: "আমাদের সব প্রিমিয়াম পর্দায় ১০০% কালার গ্যারান্টি — সঠিক যত্নে বছরের পর বছর একই রং থাকবে।" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* 3. Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* 4. Floating Trust Card */}
      <TrustCard items={trustItems} />

      {/* 5. Shop By Category */}
      <section className="container-luxury py-20 md:py-24">
        <SectionHeading
          eyebrow="ক্যাটাগরি"
          title="ক্যাটাগরি অনুযায়ী শপ করুন"
          description="প্রতিটি ঘরের জন্য পার্ফেক্ট চয়েস — কার্টেন থেকে হোম ডেকোর, সবকিছু এক জায়গায়।"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((c, i) => (
            <CategoryCard key={c.name} category={c} index={i} />
          ))}
        </div>
      </section>

      {/* 6. Featured Collection */}
      <section className="py-16 md:py-20">
        <div className="mb-14">
          <SectionHeading
            eyebrow="ফিচার্ড কালেকশন"
            title="সিগনেচার কালেকশনসমূহ"
            description="আমাদের সবচেয়ে জনপ্রিয় ও এক্সক্লুসিভ কালেকশন — প্রতিটি ঘরের জন্য বিশেষ।"
          />
        </div>
        <FeaturedCollection collections={collections} />
      </section>

      {/* 7. Promotional Banner */}
      <section className="container-luxury py-16 md:py-20">
        <div className="relative grid overflow-hidden rounded-[28px] bg-[linear-gradient(115deg,oklch(0.94_0.03_75)_0%,oklch(0.36_0.13_25)_100%)] shadow-luxury md:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-16">
            <span className="w-fit rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-dark">
              বিশেষ অফার
            </span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="heading-display text-3xl text-primary-foreground sm:text-4xl lg:text-5xl"
            >
              আপনার ঘরের সৌন্দর্য বাড়ুক{" "}
              <span className="text-gold-gradient">ChayaLux-এর সাথে</span>
            </motion.h3>
            <p className="max-w-md text-base leading-relaxed text-primary-foreground/85">
              আন্তর্জাতিক মানের ইন্টেরিয়র ডিজাইন — এখন সহজলভ্য বাংলাদেশে।
              প্রিমিয়াম কালেকশনে পাচ্ছেন ৩০% পর্যন্ত ছাড়।
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <LuxButton variant="gold" size="lg">
                অফার দেখুন <ArrowRight size={16} />
              </LuxButton>
              <LuxButton
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 text-primary-foreground hover:border-gold hover:text-gold"
              >
                আরও জানুন
              </LuxButton>
            </div>
          </div>
          <div className="image-zoom relative aspect-[4/3] md:aspect-auto md:min-h-[440px]">
            <img
              src={promoBanner}
              alt="Luxury interior"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent md:from-primary/30" />
          </div>
        </div>
      </section>

      {/* 8. Best Selling Products */}
      <section className="container-luxury py-16 md:py-20">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="বেস্ট সেলার"
            title="সবচেয়ে জনপ্রিয় পণ্য"
            description="গ্রাহকদের সবচেয়ে পছন্দের কালেকশন — সীমিত স্টক।"
            align="left"
            className="mx-0"
          />
          <LuxButton variant="outline" size="md">
            সব দেখুন <ArrowRight size={14} />
          </LuxButton>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 9. Why Choose ChayaLux */}
      <section className="bg-primary-soft/40 py-20 md:py-24">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="কেন ChayaLux"
            title="যে কারণে গ্রাহকরা আমাদের বেছে নেন"
            description="৫০০০+ সন্তুষ্ট পরিবারের পছন্দের কারণ — কোয়ালিটি, সার্ভিস, বিশ্বাস।"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. New Arrivals */}
      <section className="container-luxury py-16 md:py-20">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="নতুন আগমন"
            title="নতুন কালেকশন ২০২৬"
            description="এইমাত্র এসেছে আমাদের নতুন সিজনের এক্সক্লুসিভ ডিজাইন।"
            align="left"
            className="mx-0"
          />
          <LuxButton variant="outline" size="md">
            সব দেখুন <ArrowRight size={14} />
          </LuxButton>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 11. Room Inspiration Gallery */}
      <section className="container-luxury py-16 md:py-20">
        <SectionHeading
          eyebrow="ইন্সপিরেশন"
          title="রুম ইন্সপিরেশন গ্যালারি"
          description="আসল ঘরে আমাদের কাজের ঝলক — ইন্সপায়ার হোন, তারপর আপনার ঘরও সাজান।"
        />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          <GalleryCard image={inspirations[0].image} title={inspirations[0].title} index={0} className="col-span-2 row-span-2" />
          <GalleryCard image={inspirations[1].image} title={inspirations[1].title} index={1} />
          <GalleryCard image={inspirations[2].image} title={inspirations[2].title} index={2} />
          <GalleryCard image={inspirations[3].image} title={inspirations[3].title} index={3} className="col-span-2" />
          <GalleryCard image={inspirations[4].image} title={inspirations[4].title} index={4} />
          <GalleryCard image={inspirations[5].image} title={inspirations[5].title} index={5} />
          <GalleryCard image={inspirations[6].image} title={inspirations[6].title} index={6} className="col-span-2 md:col-span-2" />
        </div>
      </section>

      {/* 12. Customer Reviews */}
      <section className="bg-primary-soft/40 py-20 md:py-24">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="গ্রাহক রিভিউ"
            title="আমাদের গ্রাহকরা যা বলছেন"
            description="৫০০০+ সন্তুষ্ট গ্রাহকের মধ্যে কিছু ভালোবাসার গল্প।"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 13. Latest Blog */}
      <section className="container-luxury py-16 md:py-20">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="ব্লগ"
            title="ইন্টেরিয়র ইন্সপিরেশন"
            align="left"
            className="mx-0"
          />
          <LuxButton variant="outline" size="md">
            সব ব্লগ পড়ুন <ArrowRight size={14} />
          </LuxButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <BlogCard key={p.title} post={p} index={i} />
          ))}
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="container-luxury py-16 md:py-20">
        <SectionHeading
          eyebrow="প্রশ্নোত্তর"
          title="সাধারণ জিজ্ঞাসা"
          description="আপনার প্রশ্নের উত্তর — না পেলে আমাদের কল করুন।"
        />
        <div className="mt-14">
          <FAQ items={faqs} />
        </div>
      </section>

      {/* 15. Newsletter */}
      <div className="py-10">
        <Newsletter />
      </div>

      {/* 16. Contact Banner */}
      <div className="py-10 pb-24">
        <ContactBanner />
      </div>
    </SiteLayout>
  );
}
