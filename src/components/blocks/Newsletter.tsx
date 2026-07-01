import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="container-luxury">
      <div className="relative overflow-hidden rounded-[28px] bg-primary p-10 text-primary-foreground shadow-luxury sm:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              নিউজলেটার
            </span>
            <h3 className="heading-display mt-3 text-3xl sm:text-4xl">
              নতুন কালেকশন ও অফারের খবর সবার আগে পান
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
              সাবস্ক্রাইব করুন — এক্সক্লুসিভ ডিসকাউন্ট, নতুন কার্টেন ও হোম ডেকোর
              কালেকশন সম্পর্কে সবার আগে জানুন।
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="flex flex-col gap-3 rounded-[18px] bg-background/10 p-2 backdrop-blur sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-background/95 px-4 text-foreground">
              <Mail size={16} className="text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল লিখুন"
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="ripple-btn inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gold px-6 text-sm font-semibold text-dark shadow-gold transition hover:-translate-y-0.5"
            >
              সাবস্ক্রাইব <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
