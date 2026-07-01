import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { MouseEvent } from "react";

import { PRODUCTS } from "@/lib/products";
import { useShop } from "@/lib/shop/store";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished } = useShop();
  const catalogProduct = PRODUCTS.find((p) => p.id === product.id);
  const slug = catalogProduct?.slug ?? "";
  const wished = catalogProduct ? isWished(catalogProduct.id) : false;
  const detailTarget = slug ? "/product/$slug" : "/shop";
  const detailParams = slug ? { slug } : undefined;

  const handleAddToCart = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (catalogProduct) addToCart(catalogProduct);
  };

  const handleWishlist = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (catalogProduct) toggleWishlist(catalogProduct.id);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux transition-shadow duration-500 hover:shadow-float"
    >
      <Link
        to={detailTarget}
        params={detailParams}
        className="image-zoom relative block aspect-[4/5] overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
            {product.badge}
          </span>
        )}
        <button
          aria-label="উইশলিস্ট"
          onClick={handleWishlist}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground shadow-soft-lux backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
        >
          <Heart size={16} fill={wished ? "currentColor" : "none"} />
        </button>
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleAddToCart}
            className="ripple-btn flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-dark text-sm font-medium text-background hover:bg-primary"
          >
            <ShoppingBag size={16} /> কার্টে যোগ করুন
          </button>
        </div>
      </Link>
      <div className="flex flex-col gap-2 p-5">
        <span className="text-[11px] font-medium uppercase tracking-widest text-gold">
          {product.category}
        </span>
        <Link
          to={detailTarget}
          params={detailParams}
          className="line-clamp-2 font-display text-base font-semibold text-foreground transition hover:text-primary"
        >
          {product.name}
        </Link>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-primary">
            ৳{product.price.toLocaleString("bn-BD")}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ৳{product.oldPrice.toLocaleString("bn-BD")}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
