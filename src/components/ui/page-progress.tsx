import { useEffect, useState } from "react";

/**
 * Slim luxury scroll-progress bar pinned to the very top of the viewport.
 * Purely visual — does not modify any existing layout.
 */
export function PageProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-primary via-gold to-primary shadow-[0_0_18px_rgba(212,175,55,0.55)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
