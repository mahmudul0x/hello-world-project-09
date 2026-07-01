import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const cols = [
  {
    title: "শপ",
    links: ["ভেলভেট পর্দা", "চাইনিজ পর্দা", "ব্ল্যাকআউট", "উইন্ডো ব্লাইন্ড", "কুশন", "বিছানার চাদর"],
  },
  {
    title: "সাহায্য",
    links: ["ডেলিভারি তথ্য", "রিটার্ন পলিসি", "সাইজ গাইড", "প্রশ্নোত্তর", "অর্ডার ট্র্যাক"],
  },
  {
    title: "কোম্পানি",
    links: ["আমাদের সম্পর্কে", "ব্লগ", "গ্যালারি", "ক্যারিয়ার", "যোগাযোগ"],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-dark text-background">
      <div className="container-luxury grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary">
              <span className="font-display text-lg font-bold text-primary-foreground">C</span>
            </div>
            <div>
              <div className="font-display text-xl font-bold">ChayaLux</div>
              <div className="text-xs text-background/60">ছায়ালাক্স</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
            প্রিমিয়াম কার্টেন ও হোম ডেকোর — আপনার ঘরে নিয়ে আসুন আন্তর্জাতিক মানের
            লাক্সারি ইন্টেরিয়র।
          </p>
          <div className="mt-6 space-y-3 text-sm text-background/80">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>করিম ম্যানশন, সলস্টিস হোম কালেকশন, ইসলামপুর, পুরান ঢাকা</span>
            </div>
            <a href="tel:01885901184" className="flex items-center gap-3 hover:text-gold">
              <Phone size={16} className="text-gold" /> 01885-901184
            </a>
            <a href="mailto:mdjahedhasanfb@gmail.com" className="flex items-center gap-3 hover:text-gold">
              <Mail size={16} className="text-gold" /> mdjahedhasanfb@gmail.com
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-gold">
              {col.title}
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              {col.links.map((l) => (
                <li key={l}>
                  <Link to="/" className="transition hover:text-background">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-background/10">
        <div className="container-luxury flex flex-col items-start justify-between gap-4 py-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} ChayaLux. সমস্ত অধিকার সংরক্ষিত।</span>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-background/15 transition hover:border-gold hover:text-gold"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
