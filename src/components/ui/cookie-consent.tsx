import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "chayalux_cookie_consent_v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = setTimeout(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
      } catch {
        // ignore
      }
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="কুকি সম্মতি"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
        >
          <div className="glass-card rounded-[22px] p-5 shadow-float">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-soft text-primary">
                <Cookie size={20} strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-semibold text-foreground">
                  আমরা কুকি ব্যবহার করি
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে ও পছন্দ মনে রাখতে আমরা কুকি ব্যবহার করি।
                  বিস্তারিত জানতে{" "}
                  <a href="/privacy-policy" className="text-primary underline underline-offset-2">
                    প্রাইভেসি পলিসি
                  </a>{" "}
                  দেখুন।
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => decide("accepted")}
                    className="ripple-btn inline-flex items-center justify-center rounded-[14px] bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft-lux transition hover:bg-dark"
                  >
                    সম্মত আছি
                  </button>
                  <button
                    onClick={() => decide("declined")}
                    className="inline-flex items-center justify-center rounded-[14px] border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-secondary"
                  >
                    শুধু জরুরি
                  </button>
                </div>
              </div>
              <button
                onClick={() => decide("declined")}
                aria-label="বন্ধ করুন"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
