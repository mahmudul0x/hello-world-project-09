import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
}

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex h-full flex-col gap-5 rounded-[22px] bg-card p-8 shadow-soft-lux hover-lift"
    >
      <Quote className="absolute right-6 top-6 text-gold/25" size={40} />
      <div className="flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={1.5} />
        ))}
      </div>
      <p className="text-base leading-relaxed text-foreground/85">"{review.text}"</p>
      <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-display font-semibold text-primary">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-foreground">{review.name}</div>
          <div className="text-xs text-muted-foreground">{review.location}</div>
        </div>
      </div>
    </motion.div>
  );
}
