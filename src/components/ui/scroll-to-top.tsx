import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Floating scroll-to-top button with a circular progress ring.
 * Appears after ~600px scroll. Additive global chrome.
 */
export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      setProgress(p);
      setVisible(h.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const R = 22;
  const C = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="উপরে যান"
          className="group fixed bottom-24 right-5 z-[95] grid h-14 w-14 place-items-center rounded-full bg-background/85 text-primary shadow-[0_18px_45px_-15px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:text-dark md:bottom-8 md:right-8"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r={R} strokeWidth="2.5" className="fill-none stroke-border/60" />
            <circle
              cx="26"
              cy="26"
              r={R}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="fill-none stroke-[url(#stt-grad)] transition-[stroke-dashoffset] duration-150 ease-out"
              style={{ strokeDasharray: C, strokeDashoffset: C * (1 - progress) }}
            />
            <defs>
              <linearGradient id="stt-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--gold)" />
              </linearGradient>
            </defs>
          </svg>
          <ArrowUp size={16} strokeWidth={2.5} className="relative transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
