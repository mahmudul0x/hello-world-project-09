import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux hover-lift"
    >
      <div className="image-zoom relative aspect-[16/10] overflow-hidden">
        <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar size={13} /> {post.date}
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground transition group-hover:text-primary">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          পড়ুন <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  );
}
