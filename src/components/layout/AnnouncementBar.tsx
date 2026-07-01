import { motion } from "framer-motion";
import { Sparkles, Truck, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, text: "সারা বাংলাদেশে ক্যাশ অন ডেলিভারির সুবিধা" },
  { icon: ShieldCheck, text: "১০০% কালার গ্যারান্টি" },
  { icon: Sparkles, text: "প্রিমিয়াম হোম ডেকোর কালেকশন" },
  { icon: Truck, text: "৩-৫ দিনে হোম ডেলিভারি" },
];

export function AnnouncementBar() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="flex overflow-hidden py-2.5">
        <motion.div
          className="flex shrink-0 items-center gap-12 whitespace-nowrap pr-12 text-xs font-medium tracking-wide sm:text-sm"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {loop.map((it, i) => {
            const Icon = it.icon;
            return (
              <span key={i} className="flex items-center gap-2.5">
                <Icon size={14} className="text-gold" />
                {it.text}
                <span className="ml-12 h-1 w-1 rounded-full bg-gold/60" />
              </span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
