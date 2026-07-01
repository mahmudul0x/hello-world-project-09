import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, PackageOpen, RefreshCw, ShieldAlert } from "lucide-react";
import { PolicyPage } from "@/components/blocks/PolicyPage";
import { IMG } from "@/lib/content";

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      { title: "রিটার্ন নীতি — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux রিটার্ন ও পরিবর্তন নীতি — ৭ দিনের মধ্যে সহজ রিটার্ন প্রক্রিয়া।" },
    ],
  }),
  component: () => (
    <PolicyPage
      eyebrow="রিটার্ন"
      title="রিটার্ন ও পরিবর্তন নীতি"
      description="আপনার সন্তুষ্টি আমাদের সবচেয়ে বড় অগ্রাধিকার — তাই আমরা প্রদান করি সহজ ও স্বচ্ছ রিটার্ন প্রক্রিয়া।"
      image={IMG.hero3}
      updated="১ জানুয়ারি, ২০২৫"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: RefreshCw, title: "৭ দিনের রিটার্ন", desc: "ডেলিভারির ৭ দিনের মধ্যে পরিবর্তন বা রিটার্ন" },
          { icon: ShieldAlert, title: "ক্ষতিগ্রস্ত পণ্য", desc: "বিনামূল্যে পরিবর্তন করে দেওয়া হবে" },
          { icon: PackageOpen, title: "সহজ প্রক্রিয়া", desc: "একটি কল বা মেসেজেই রিটার্ন শুরু হয়" },
          { icon: CheckCircle2, title: "দ্রুত রিফান্ড", desc: "যাচাইয়ের পর ৩-৫ দিনে রিফান্ড" },
        ].map((c) => (
          <div key={c.title} className="flex gap-3 rounded-[18px] border border-gold/25 bg-gold-soft/40 p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <c.icon size={17} />
            </span>
            <div>
              <div className="font-display text-sm font-bold">{c.title}</div>
              <div className="text-xs text-muted-foreground">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="heading-display pt-4 text-2xl">১. রিটার্ন যোগ্যতা</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>ডেলিভারি গ্রহণের ৭ দিনের মধ্যে অনুরোধ করতে হবে।</li>
        <li>পণ্য অব্যবহৃত, অক্ষত এবং মূল প্যাকেজিং সহ থাকতে হবে।</li>
        <li>কাস্টম সাইজে তৈরি পণ্য রিটার্নযোগ্য নয় (ক্ষতিগ্রস্ত ব্যতিক্রম)।</li>
        <li>অন্তর্বাস, বেড শিটের মতো ব্যক্তিগত পণ্য প্যাকেজ খোলার পর রিটার্ন করা যায় না।</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">২. ক্ষতিগ্রস্ত/ভুল পণ্য</h2>
      <p>পণ্য ক্ষতিগ্রস্ত অথবা ভুল ডেলিভারি হলে ডেলিভারির ২৪ ঘণ্টার মধ্যে ছবি সহ আমাদের জানান। সম্পূর্ণ বিনামূল্যে পরিবর্তন করে দেওয়া হবে।</p>

      <h2 className="heading-display pt-4 text-2xl">৩. রিটার্ন প্রক্রিয়া</h2>
      <ol className="list-decimal space-y-2 pl-6">
        <li>WhatsApp (01885-901184) অথবা কল করে অনুরোধ জানান।</li>
        <li>অর্ডার নম্বর এবং সমস্যার ছবি প্রদান করুন।</li>
        <li>আমাদের টিম যাচাই করে পিকআপ ব্যবস্থা করবে।</li>
        <li>পণ্য যাচাইয়ের পর রিফান্ড বা পরিবর্তন সম্পন্ন হবে।</li>
      </ol>

      <h2 className="heading-display pt-4 text-2xl">৪. রিফান্ডের সময়</h2>
      <p>রিফান্ড অনুমোদিত হওয়ার ৩-৫ কর্মদিবসের মধ্যে বিকাশ, নগদ, রকেট অথবা ব্যাংক অ্যাকাউন্টে ফেরত পাঠানো হবে।</p>

      <h2 className="heading-display pt-4 text-2xl">৫. যোগাযোগ</h2>
      <p>রিটার্ন সংক্রান্ত যেকোনো প্রশ্নে: <a href="tel:01885901184" className="text-primary underline">01885-901184</a></p>
    </PolicyPage>
  ),
});
