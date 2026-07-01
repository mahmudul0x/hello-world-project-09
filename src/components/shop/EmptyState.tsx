import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: { label: string; to: string };
}

export function EmptyState({ icon: Icon, title, description, action }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex max-w-md flex-col items-center py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", damping: 12 }}
        className="relative mb-6 grid h-28 w-28 place-items-center rounded-full bg-primary-soft"
      >
        <div className="absolute inset-0 animate-pulse rounded-full bg-primary-soft" />
        <Icon size={44} className="relative text-primary" />
      </motion.div>
      <h3 className="heading-display text-2xl">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && (
        <Link
          to={action.to}
          className="ripple-btn mt-6 inline-flex h-12 items-center justify-center rounded-[16px] bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:bg-dark"
        >
          {action.label}
        </Link>
      )}
    </motion.div>
  );
}
