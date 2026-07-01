import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Brand loading veil — shows once per session on first paint,
 * fades out after the window `load` event. Additive; no layout impact.
 */
export function PageLoader() {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    // Skip if already shown this session
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("cx_loaded") === "1") {
      setShown(false);
      return;
    }
    const done = () => {
      sessionStorage.setItem("cx_loaded", "1");
      // small settle delay for luxury feel
      setTimeout(() => setShown(false), 480);
    };
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
    // hard fallback
    const t = setTimeout(done, 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] grid place-items-center bg-[radial-gradient(circle_at_center,var(--background),var(--secondary))]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="grid h-20 w-20 place-items-center rounded-[22px] bg-primary text-primary-foreground shadow-[0_25px_60px_-20px_rgba(123,30,30,0.55)]">
                <span className="font-display text-2xl font-bold tracking-tight">CL</span>
              </div>
              <span className="pointer-events-none absolute -inset-2 rounded-[26px] border border-gold/40" />
            </motion.div>

            <div className="text-center">
              <div className="font-display text-lg font-bold tracking-[0.35em] text-primary">
                CHAYALUX
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
                Luxury Home Decor
              </div>
            </div>

            <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-border">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
