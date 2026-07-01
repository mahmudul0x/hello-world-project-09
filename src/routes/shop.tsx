import { createFileRoute } from "@tanstack/react-router";
import { ShopListing } from "@/components/product/ShopListing";
import { IMAGES, PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "সব পণ্য — ChayaLux" },
      { name: "description", content: "ChayaLux-এর সম্পূর্ণ প্রিমিয়াম কালেকশন — পর্দা, কুশন, বেডশিট, সোফা কভার ও হোম ডেকোর।" },
      { property: "og:title", content: "সব পণ্য — ChayaLux" },
      { property: "og:description", content: "প্রিমিয়াম কার্টেন ও হোম ডেকোরের সম্পূর্ণ কালেকশন।" },
      { property: "og:image", content: IMAGES.heroImg },
    ],
  }),
  component: () => (
    <ShopListing
      eyebrow="সব পণ্য"
      title="সম্পূর্ণ কালেকশন"
      description="ChayaLux-এর সবগুলো প্রিমিয়াম পণ্য এক জায়গায় — কার্টেন থেকে হোম ডেকোর, সবকিছুতে আন্তর্জাতিক মান।"
      bannerImage={IMAGES.heroImg}
      products={PRODUCTS}
    />
  ),
});
