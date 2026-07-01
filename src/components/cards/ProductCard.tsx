import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux transition-shadow duration-500 hover:shadow-float"
    >
      <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-muted">
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
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground shadow-soft-lux backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
        >
          <Heart size={16} />
        </button>
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="ripple-btn flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-dark text-sm font-medium text-background hover:bg-primary">
            <ShoppingBag size={16} /> কার্টে যোগ করুন
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <span className="text-[11px] font-medium uppercase tracking-widest text-gold">
          {product.category}
        </span>
        <h3 className="line-clamp-2 font-display text-base font-semibold text-foreground">
          {product.name}
        </h3>
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
