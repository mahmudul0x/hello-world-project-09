import { createFileRoute } from "@tanstack/react-router";
import { ShopListing } from "@/components/product/ShopListing";
import { CATEGORIES, IMAGES, productsIn, type ProductCategorySlug } from "@/lib/products";

export const Route = createFileRoute("/collections/$slug")({
  head: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    const title = cat ? `${cat.name} — ChayaLux` : "কালেকশন — ChayaLux";
    return {
      meta: [
        { title },
        { name: "description", content: cat?.description ?? "ChayaLux প্রিমিয়াম কালেকশন।" },
        { property: "og:title", content: title },
        { property: "og:description", content: cat?.description ?? "" },
        { property: "og:image", content: cat?.banner ?? IMAGES.heroImg },
      ],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const { slug } = Route.useParams();
  const cat = CATEGORIES.find((c) => c.slug === slug);

  if (!cat) {
    return (
      <ShopListing
        title="কালেকশন পাওয়া যায়নি"
        description="আপনি যে কালেকশন খুঁজছেন সেটি আর নেই — নিচে আমাদের সব পণ্য দেখুন।"
        bannerImage={IMAGES.heroImg}
        products={[]}
      />
    );
  }

  return (
    <ShopListing
      eyebrow="কালেকশন"
      title={cat.name}
      description={cat.description}
      bannerImage={cat.banner}
      products={productsIn(slug as ProductCategorySlug)}
      lockedFilter={{ categories: [slug] }}
    />
  );
}
