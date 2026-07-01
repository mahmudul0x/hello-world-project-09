import { createFileRoute } from "@tanstack/react-router";
import { ShopListing } from "@/components/product/ShopListing";
import { IMAGES, PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/best-sellers")({
  head: () => ({
    meta: [
      { title: "বেস্ট সেলার — ChayaLux" },
      { name: "description", content: "গ্রাহকদের সবচেয়ে পছন্দের প্রিমিয়াম কালেকশন।" },
      { property: "og:title", content: "বেস্ট সেলার — ChayaLux" },
      { property: "og:image", content: IMAGES.curtainImg },
    ],
  }),
  component: () => (
    <ShopListing
      eyebrow="বেস্ট সেলার"
      title="সবচেয়ে জনপ্রিয় পণ্য"
      description="৫০০০+ পরিবারের বাড়িতে জায়গা করে নেওয়া ChayaLux-এর টপ পিকস।"
      bannerImage={IMAGES.curtainImg}
      products={PRODUCTS.filter((p) => p.isBestSeller)}
    />
  ),
});
