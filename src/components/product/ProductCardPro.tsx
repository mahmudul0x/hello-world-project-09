import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, GitCompare, Heart, ShoppingBag, Star } from "lucide-react";
import { LuxButton } from "@/components/ui/lux-button";
import { bnPrice, type Product } from "@/lib/products";
import { useShop } from "@/lib/shop/store";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  onQuickView?: (p: Product) => void;
  index?: number;
}

export function ProductCardPro({ product, onQuickView, index = 0 }: Props) {
  const { addToCart, toggleWishlist, isWished, toggleCompare, isCompared, openQuickView } = useShop();
  const wish = isWished(product.id);
  const comparing = isCompared(product.id);
  const handleQuickView = onQuickView ?? openQuickView;
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-border/60 bg-card shadow-soft-lux transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-float"
    >
      {/* Image */}
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="image-zoom relative block aspect-[4/5] overflow-hidden bg-muted"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft-lux">
              -{discount}%
            </span>
          )}
          {product.isNew && (
            <span className="rounded-full bg-dark px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
              নতুন
            </span>
          )}
          {product.isBestSeller && (
            <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-dark">
              বেস্ট
            </span>
          )}
          {!product.inStock && (
            <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              স্টক আউট
            </span>
          )}
        </div>

        {/* Wishlist + Quick view + Compare */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-100 transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100">
          <button
            aria-label="উইশলিস্ট"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full bg-background/95 shadow-soft-lux backdrop-blur transition hover:bg-primary hover:text-primary-foreground",
              wish && "bg-primary text-primary-foreground",
            )}
          >
            <Heart size={15} fill={wish ? "currentColor" : "none"} />
          </button>
          <button
            aria-label="কুইক ভিউ"
            onClick={(e) => {
              e.preventDefault();
              handleQuickView(product);
            }}
            className="grid h-9 w-9 place-items-center rounded-full bg-background/95 text-foreground shadow-soft-lux backdrop-blur transition hover:bg-dark hover:text-background"
          >
            <Eye size={15} />
          </button>
          <button
            aria-label="তুলনা"
            onClick={(e) => {
              e.preventDefault();
              toggleCompare(product.id);
            }}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full bg-background/95 text-foreground shadow-soft-lux backdrop-blur transition hover:bg-gold hover:text-dark",
              comparing && "bg-gold text-dark",
            )}
          >
            <GitCompare size={14} />
          </button>
        </div>

        {/* Bottom add-to-cart */}
        <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            className="ripple-btn flex h-11 w-full items-center justify-center gap-2 rounded-[14px] bg-dark text-xs font-medium text-background transition hover:bg-primary"
          >
            <ShoppingBag size={14} /> কার্টে যোগ করুন
          </button>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-gold">
            {product.categoryName}
          </span>
          <span className="flex items-center gap-0.5 text-[11px] font-medium text-muted-foreground">
            <Star size={11} className="fill-gold text-gold" />
            {product.rating.toFixed(1)}
            <span className="opacity-60">({product.reviews})</span>
          </span>
        </div>

        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="line-clamp-2 min-h-[2.6rem] font-display text-[15px] font-semibold leading-tight text-foreground transition hover:text-primary"
        >
          {product.name}
        </Link>

        <p className="line-clamp-2 min-h-[2.4rem] text-xs leading-relaxed text-muted-foreground">
          {product.shortDesc}
        </p>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5 pt-0.5">
          {product.colors.slice(0, 4).map((col) => (
            <span
              key={col.name}
              title={col.name}
              className="h-3.5 w-3.5 rounded-full border border-border shadow-soft-lux"
              style={{ background: col.hex }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-[10px] text-muted-foreground">+{product.colors.length - 4}</span>
          )}
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-primary">
              {bnPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="mt-1 text-xs text-muted-foreground line-through">
                {bnPrice(product.oldPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <LuxButton
            variant="outline"
            size="sm"
            className="w-full text-xs"
            onClick={(e) => e.preventDefault()}
          >
            <ShoppingBag size={13} /> কার্ট
          </LuxButton>
          <LuxButton variant="primary" size="sm" className="w-full text-xs">
            অর্ডার করুন
          </LuxButton>
        </div>
      </div>
    </motion.article>
  );
}
