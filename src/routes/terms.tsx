import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/blocks/PolicyPage";
import { IMG } from "@/lib/content";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "শর্তাবলী — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux ব্যবহারের শর্তাবলী — অর্ডার, পেমেন্ট, ডেলিভারি ও দায়বদ্ধতার নীতিমালা।" },
    ],
  }),
  component: () => (
    <PolicyPage
      eyebrow="আইনি"
      title="শর্তাবলী"
      description="ChayaLux ওয়েবসাইট ও সেবা ব্যবহার করে আপনি নিম্নলিখিত শর্তাবলীর সাথে সম্মত হন।"
      image={IMG.hero5}
      updated="১ জানুয়ারি, ২০২৫"
    >
      <h2 className="heading-display pt-4 text-2xl">১. সাধারণ শর্ত</h2>
      <p>এই ওয়েবসাইটে প্রবেশ করে আপনি এই শর্তাবলী পড়েছেন এবং মেনে চলতে সম্মত হয়েছেন বলে গণ্য হবে। যেকোনো সময় ChayaLux এই শর্তাবলী পরিবর্তনের অধিকার সংরক্ষণ করে।</p>

      <h2 className="heading-display pt-4 text-2xl">২. অ্যাকাউন্ট</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>অ্যাকাউন্টে সঠিক ও হালনাগাদ তথ্য প্রদান বাধ্যতামূলক।</li>
        <li>আপনার অ্যাকাউন্ট ও পাসওয়ার্ডের গোপনীয়তা রক্ষার দায়িত্ব আপনার।</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">৩. অর্ডার ও পেমেন্ট</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>অর্ডার নিশ্চিতকরণ ChayaLux-এর সম্পূর্ণ বিবেচনার উপর নির্ভরশীল।</li>
        <li>পণ্যের মূল্য পূর্ব ঘোষণা ছাড়াই পরিবর্তিত হতে পারে।</li>
        <li>পেমেন্ট সম্পন্ন হওয়ার পর অর্ডার প্রসেসিং শুরু হয় (COD ব্যতিক্রম)।</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">৪. পণ্যের বিবরণ ও ছবি</h2>
      <p>আমরা প্রতিটি পণ্যের যথাসম্ভব নিখুঁত ছবি ও বিবরণ প্রদানে সচেষ্ট। তবে ডিসপ্লে সেটিংসের কারণে রঙে সামান্য ভিন্নতা দেখা যেতে পারে যা প্রাকৃতিক।</p>

      <h2 className="heading-display pt-4 text-2xl">৫. মেধাসম্পদ</h2>
      <p>এই ওয়েবসাইটের সব কনটেন্ট, লোগো, ছবি এবং ডিজাইন ChayaLux-এর মেধাসম্পদ। অনুমতি ছাড়া বাণিজ্যিক উদ্দেশ্যে ব্যবহার নিষিদ্ধ।</p>

      <h2 className="heading-display pt-4 text-2xl">৬. দায়সীমা</h2>
      <p>পণ্যের ভুল ব্যবহারজনিত ক্ষতি, প্রাকৃতিক দুর্যোগ বা অন্য কোনো অনিয়ন্ত্রণীয় ঘটনার জন্য ChayaLux দায়ী থাকবে না।</p>

      <h2 className="heading-display pt-4 text-2xl">৭. আইনগত এখতিয়ার</h2>
      <p>এই শর্তাবলী বাংলাদেশের আইন অনুযায়ী পরিচালিত হবে। যেকোনো বিরোধের নিষ্পত্তি ঢাকার আদালতের এখতিয়ারে থাকবে।</p>

      <h2 className="heading-display pt-4 text-2xl">৮. যোগাযোগ</h2>
      <p>যেকোনো প্রশ্নে যোগাযোগ: <a href="tel:01885901184" className="text-primary underline">01885-901184</a> অথবা <a href="mailto:mdjahedhasanfb@gmail.com" className="text-primary underline">mdjahedhasanfb@gmail.com</a></p>
    </PolicyPage>
  ),
});
