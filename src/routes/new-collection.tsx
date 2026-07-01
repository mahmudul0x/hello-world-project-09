import { createFileRoute } from "@tanstack/react-router";
import { ShopListing } from "@/components/product/ShopListing";
import { IMAGES, PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/new-collection")({
  head: () => ({
    meta: [
      { title: "নতুন কালেকশন ২০২৬ — ChayaLux" },
      { name: "description", content: "ChayaLux-এর ২০২৬ সিজনের এক্সক্লুসিভ নতুন কালেকশন।" },
      { property: "og:title", content: "নতুন কালেকশন ২০২৬ — ChayaLux" },
      { property: "og:image", content: IMAGES.hero2 },
    ],
  }),
  component: () => (
    <ShopListing
      eyebrow="নতুন কালেকশন ২০২৬"
      title="নতুন সিজনের এক্সক্লুসিভ ডিজাইন"
      description="এইমাত্র লঞ্চ হওয়া প্রিমিয়াম কালেকশন — সীমিত স্টক, আন্তর্জাতিক ডিজাইন।"
      bannerImage={IMAGES.hero2}
      products={PRODUCTS.filter((p) => p.isNew || p.isFeatured)}
    />
  ),
});
