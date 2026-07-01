import { motion } from "framer-motion";
import { Expand } from "lucide-react";

export function GalleryCard({
  image,
  title,
  index = 0,
  className = "",
}: {
  image: string;
  title?: string;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group image-zoom relative overflow-hidden rounded-[22px] shadow-soft-lux ${className}`}
    >
      <img src={image} alt={title ?? "gallery"} loading="lazy" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-dark/0 transition group-hover:bg-dark/40" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-background/95 text-primary shadow-luxury">
          <Expand size={20} />
        </div>
      </div>
      {title && (
        <div className="absolute bottom-4 left-4 rounded-full bg-background/95 px-4 py-1.5 text-xs font-medium text-foreground opacity-0 backdrop-blur transition group-hover:opacity-100">
          {title}
        </div>
      )}
    </motion.div>
  );
}
