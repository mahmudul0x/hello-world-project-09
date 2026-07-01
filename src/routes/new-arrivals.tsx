import { createFileRoute } from "@tanstack/react-router";
import { ShopListing } from "@/components/product/ShopListing";
import { IMAGES, PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/new-arrivals")({
  head: () => ({
    meta: [
      { title: "নতুন আগমন — ChayaLux" },
      { name: "description", content: "এইমাত্র এসেছে — ChayaLux-এর সর্বশেষ পণ্যসমূহ।" },
      { property: "og:title", content: "নতুন আগমন — ChayaLux" },
      { property: "og:image", content: IMAGES.hero5 },
    ],
  }),
  component: () => (
    <ShopListing
      eyebrow="নতুন আগমন"
      title="এইমাত্র এসেছে"
      description="ChayaLux-এর সর্বশেষ যোগ হওয়া প্রিমিয়াম কালেকশন — নতুন ডিজাইন, নতুন অনুভূতি।"
      bannerImage={IMAGES.hero5}
      products={PRODUCTS.filter((p) => p.isNew)}
    />
  ),
});
