import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/blocks/PolicyPage";
import { IMG } from "@/lib/content";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "গোপনীয়তা নীতি — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux গোপনীয়তা নীতি — আপনার তথ্যের নিরাপত্তা ও ব্যবহারের নীতিমালা।" },
      { property: "og:title", content: "গোপনীয়তা নীতি — ChayaLux" },
    ],
  }),
  component: () => (
    <PolicyPage
      eyebrow="গোপনীয়তা"
      title="গোপনীয়তা নীতি"
      description="আপনার ব্যক্তিগত তথ্যের নিরাপত্তা এবং গোপনীয়তা রক্ষা আমাদের সর্বোচ্চ অগ্রাধিকার।"
      image={IMG.roomApartment}
      updated="১ জানুয়ারি, ২০২৫"
    >
      <p>ChayaLux (এরপর "আমরা"/"ছায়ালাক্স") আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই নীতিমালা ব্যাখ্যা করে যে আপনি যখন আমাদের ওয়েবসাইট বা সেবা ব্যবহার করেন, তখন কীভাবে আমরা আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি।</p>

      <h2 className="heading-display pt-4 text-2xl">১. আমরা কী তথ্য সংগ্রহ করি</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>আপনার নাম, মোবাইল নম্বর, ইমেইল ঠিকানা এবং ডেলিভারি ঠিকানা</li>
        <li>অর্ডার ইতিহাস এবং কেনাকাটার প্রাসঙ্গিক তথ্য</li>
        <li>পেমেন্টের জন্য প্রয়োজনীয় সীমিত তথ্য (আমরা কার্ড বা মোবাইল ব্যাংকিং পিন সংরক্ষণ করি না)</li>
        <li>ওয়েবসাইট ব্যবহারের সাধারণ পরিসংখ্যান (কুকিজ ও অ্যানালিটিক্স-এর মাধ্যমে)</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">২. তথ্য কীভাবে ব্যবহার হয়</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>অর্ডার প্রসেস ও ডেলিভারি সম্পন্ন করতে</li>
        <li>কাস্টমার সাপোর্ট প্রদান করতে</li>
        <li>নতুন অফার ও প্রোডাক্ট সম্পর্কে আপডেট পাঠাতে (আপনি সম্মতি দিলে)</li>
        <li>আমাদের সেবা উন্নত করতে</li>
      </ul>

      <h2 className="heading-display pt-4 text-2xl">৩. তথ্য শেয়ারিং</h2>
      <p>আমরা কখনো আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা ভাড়া দিই না। শুধুমাত্র ডেলিভারি সম্পন্ন করার প্রয়োজনে কুরিয়ার সার্ভিসের সাথে ন্যূনতম প্রয়োজনীয় তথ্য শেয়ার করা হয়।</p>

      <h2 className="heading-display pt-4 text-2xl">৪. পেমেন্ট সুরক্ষা</h2>
      <p>বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফার পেমেন্ট সরাসরি সংশ্লিষ্ট প্রোভাইডারের নিরাপদ চ্যানেলে হয়। ChayaLux আপনার পিন, পাসওয়ার্ড বা OTP সংরক্ষণ করে না।</p>

      <h2 className="heading-display pt-4 text-2xl">৫. কুকিজ</h2>
      <p>আমরা ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করি। আপনি ব্রাউজার সেটিংস থেকে যেকোনো সময় কুকিজ নিষ্ক্রিয় করতে পারেন।</p>

      <h2 className="heading-display pt-4 text-2xl">৬. আপনার অধিকার</h2>
      <p>আপনার তথ্য দেখা, সংশোধন বা মুছে ফেলার অনুরোধ করতে চাইলে <a href="mailto:mdjahedhasanfb@gmail.com" className="text-primary underline">mdjahedhasanfb@gmail.com</a>-এ যোগাযোগ করুন।</p>

      <h2 className="heading-display pt-4 text-2xl">৭. পরিবর্তন</h2>
      <p>এই নীতিমালা সময়ে সময়ে আপডেট হতে পারে। যেকোনো গুরুত্বপূর্ণ পরিবর্তন এই পেজে প্রকাশ করা হবে।</p>
    </PolicyPage>
  ),
});
