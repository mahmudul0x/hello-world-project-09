import { createFileRoute } from "@tanstack/react-router";
import { ShopListing } from "@/components/product/ShopListing";
import { IMAGES, PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "অফার ও ছাড় — ChayaLux" },
      { name: "description", content: "৩০%+ পর্যন্ত ছাড়ে ChayaLux-এর প্রিমিয়াম পণ্য।" },
      { property: "og:title", content: "অফার ও ছাড় — ChayaLux" },
      { property: "og:image", content: IMAGES.promoBanner },
    ],
  }),
  component: () => (
    <ShopListing
      eyebrow="বিশেষ অফার"
      title="সেরা ডিল ও ছাড়"
      description="সীমিত সময়ের জন্য প্রিমিয়াম কালেকশনে ৩০% পর্যন্ত ছাড় — স্টক থাকতে অর্ডার করুন।"
      bannerImage={IMAGES.promoBanner}
      products={PRODUCTS.filter((p) => p.oldPrice && p.oldPrice > p.price)}
      lockedFilter={{ discountOnly: true }}
    />
  ),
});
