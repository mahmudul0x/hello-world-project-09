import { MessageCircle, Phone } from "lucide-react";

export function ContactBanner() {
  return (
    <section className="container-luxury">
      <div className="relative overflow-hidden rounded-[28px] bg-dark p-10 text-background shadow-luxury sm:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-gold/20" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              যোগাযোগ করুন
            </span>
            <h3 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
              আপনার স্বপ্নের ইন্টেরিয়র <br className="hidden sm:block" /> এক ক্লিক দূরে
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-background/75">
              কল করুন, WhatsApp-এ মেসেজ পাঠান — আমাদের ইন্টেরিয়র এক্সপার্ট
              আপনাকে গাইড করবে বিনামূল্যে।
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="tel:01885901184"
              className="ripple-btn group flex items-center justify-between gap-4 rounded-2xl bg-background/95 px-6 py-4 text-dark transition hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Phone size={16} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">
                    কল করুন
                  </span>
                  <span className="block font-display text-base font-semibold">01885-901184</span>
                </span>
              </span>
              <span className="text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </a>
            <a
              href="https://wa.me/8801885901184"
              target="_blank"
              rel="noreferrer"
              className="ripple-btn group flex items-center justify-between gap-4 rounded-2xl bg-gold px-6 py-4 text-dark transition hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-dark text-gold">
                  <MessageCircle size={16} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-widest opacity-70">
                    WhatsApp
                  </span>
                  <span className="block font-display text-base font-semibold">
                    দ্রুত মেসেজ পাঠান
                  </span>
                </span>
              </span>
              <span className="text-xs font-medium opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </a>
            <a
              href="https://m.me/chayalux"
              target="_blank"
              rel="noreferrer"
              className="ripple-btn group flex items-center justify-between gap-4 rounded-2xl border border-background/25 bg-background/5 px-6 py-4 text-background backdrop-blur transition hover:-translate-y-0.5 hover:border-gold"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-background/15 text-background">
                  <MessageCircle size={16} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-widest text-background/60">
                    Messenger
                  </span>
                  <span className="block font-display text-base font-semibold">চ্যাট শুরু করুন</span>
                </span>
              </span>
              <span className="text-xs font-medium text-gold opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
