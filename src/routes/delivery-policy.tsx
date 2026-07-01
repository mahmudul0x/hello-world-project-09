import { createFileRoute } from "@tanstack/react-router";
import { Banknote, Clock, MapPin, Truck } from "lucide-react";
import { PolicyPage } from "@/components/blocks/PolicyPage";
import { IMG } from "@/lib/content";

export const Route = createFileRoute("/delivery-policy")({
  head: () => ({
    meta: [
      { title: "ডেলিভারি নীতি — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux ডেলিভারি নীতি — সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি সেবা।" },
    ],
  }),
  component: () => (
    <PolicyPage
      eyebrow="ডেলিভারি"
      title="ডেলিভারি নীতি"
      description="সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি — প্রতিটি প্যাকেজে থাকে প্রিমিয়াম প্যাকেজিং।"
      image={IMG.roomHotel}
      updated="১ জানুয়ারি, ২০২৫"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: MapPin, t: "ঢাকার ভিতরে", v: "১-২ কর্মদিবস", n: "ডেলিভারি চার্জ ৳৮০" },
          { icon: Truck, t: "ঢাকার বাইরে", v: "২-৪ কর্মদিবস", n: "ডেলিভারি চার্জ ৳১৫০" },
          { icon: Banknote, t: "COD উপলব্ধ", v: "সারা বাংলাদেশে", n: "পণ্য হাতে পেয়ে পেমেন্ট" },
          { icon: Clock, t: "ফ্রি শিপিং", v: "৳১০,০০০+ অর্ডারে", n: "সম্পূর্ণ বাংলাদেশে" },
        ].map((c) => (
          <div key={c.t} className="rounded-[18px] border border-gold/25 bg-gold-soft/40 p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                <c.icon size={17} />
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">{c.t}</div>
                <div className="font-display text-lg font-bold">{c.v}</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">{c.n}</div>
          </div>
        ))}
      </div>

      <h2 className="heading-display pt-4 text-2xl">১. ডেলিভারি সময়সীমা</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li><strong>ঢাকার ভিতরে:</strong> অর্ডার নিশ্চিতকরণের পর ১-২ কর্মদিবসের মধ্যে।</li>
        <li><strong>ঢাকার বাইরে:</strong> ২-৪ কর্মদিবসের মধ্যে (দূরবর্তী অঞ্চলে সামান্য বেশি হতে পারে)।</li>
        <li><strong>কাস্টম অর্ডার:</strong> সেলাইয়ের সময় সহ ৫-৭ কর্মদিবস।</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">২. ডেলিভারি চার্জ</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>ঢাকার ভিতরে: ৳৮০ ফ্ল্যাট।</li>
        <li>ঢাকার বাইরে: ৳১৫০ ফ্ল্যাট।</li>
        <li>৳১০,০০০ টাকার উপরে অর্ডারে সারা বাংলাদেশে ফ্রি ডেলিভারি।</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">৩. পেমেন্ট অপশন</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>ক্যাশ অন ডেলিভারি (COD) — সারা বাংলাদেশে।</li>
        <li>বিকাশ, নগদ, রকেট।</li>
        <li>ব্যাংক ট্রান্সফার (Islami Bank, DBBL)।</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">৪. অর্ডার ট্র্যাকিং</h2>
      <p>প্রতিটি অর্ডারের জন্য একটি ইউনিক অর্ডার নম্বর দেওয়া হয়। আমাদের ওয়েবসাইটের ট্র্যাকিং পেজ থেকে অর্ডারের অবস্থা যেকোনো সময় দেখতে পারবেন।</p>

      <h2 className="heading-display pt-4 text-2xl">৫. ডেলিভারির সময় করণীয়</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>ডেলিভারি এজেন্টের সামনে প্যাকেজ চেক করুন।</li>
        <li>ক্ষতি বা অসঙ্গতি থাকলে সাথে সাথেই জানান — পরে অভিযোগ গ্রহণযোগ্য নয়।</li>
        <li>ইনভয়েস সংরক্ষণ করুন — রিটার্ন বা ওয়ারেন্টির প্রয়োজনে লাগবে।</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">৬. যোগাযোগ</h2>
      <p>ডেলিভারি সংক্রান্ত যেকোনো প্রশ্নে: <a href="tel:01885901184" className="text-primary underline">01885-901184</a></p>
    </PolicyPage>
  ),
});
