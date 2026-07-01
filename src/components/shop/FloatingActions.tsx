import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingActions() {
  const actions = [
    {
      label: "WhatsApp",
      href: "https://wa.me/8801885901184",
      icon: MessageCircle,
      bg: "bg-emerald-500 hover:bg-emerald-600",
      delay: 0,
    },
  ];

  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
      {actions.map((a) => (
        <motion.a
          key={a.label}
          href={a.href}
          target={a.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={a.label}
          initial={{ opacity: 0, scale: 0.6, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: a.delay, type: "spring", damping: 14 }}
          className={`pointer-events-auto relative grid h-12 w-12 place-items-center rounded-full text-white shadow-luxury transition ${a.bg}`}
        >
          <span
            className={`absolute inset-0 -z-10 animate-ping rounded-full opacity-40 ${a.bg}`}
          />
          <a.icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}
