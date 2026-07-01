/**
 * ChayaLux corporate content — blogs, testimonials, gallery, values, stats.
 * Bengali copy; production-ready seed content.
 */
import heroLiving from "@/assets/hero-living-room.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import bedroom from "@/assets/bedroom.jpg";
import blinds from "@/assets/blinds.jpg";
import cushions from "@/assets/cushions.jpg";
import curtainDetail from "@/assets/curtain-detail.jpg";
import promoBanner from "@/assets/promo-banner.jpg";
import roomDrawing from "@/assets/room-drawing.jpg";
import roomHotel from "@/assets/room-hotel.jpg";
import roomOffice from "@/assets/room-office.jpg";
import roomApartment from "@/assets/room-apartment.jpg";
import catBedsheet from "@/assets/cat-bedsheet.jpg";
import catSofaCover from "@/assets/cat-sofa-cover.jpg";
import catChinese from "@/assets/cat-chinese.jpg";
import catSatin from "@/assets/cat-satin.jpg";
import catHospital from "@/assets/cat-hospital.jpg";

export const IMG = {
  heroLiving, hero2, hero3, hero4, hero5, bedroom, blinds, cushions,
  curtainDetail, promoBanner, roomDrawing, roomHotel, roomOffice, roomApartment,
  catBedsheet, catSofaCover, catChinese, catSatin, catHospital,
};

// ---------------- Blogs ----------------
export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readMinutes: number;
  content: { type: "p" | "h2" | "quote" | "img"; text?: string; src?: string; caption?: string }[];
}

export const BLOGS: BlogArticle[] = [
  {
    slug: "premium-curtain-selection-guide",
    title: "প্রিমিয়াম পর্দা নির্বাচনের সম্পূর্ণ গাইড",
    excerpt: "কোন ফেব্রিক, কোন রঙ এবং কোন ডিজাইন আপনার ঘরের সৌন্দর্য বহুগুণ বাড়িয়ে তুলবে — বিশেষজ্ঞদের পরামর্শে সম্পূর্ণ গাইড।",
    image: heroLiving,
    date: "১৫ জানুয়ারি, ২০২৫",
    category: "গাইড",
    author: "মোঃ জাহেদ হাসান",
    readMinutes: 7,
    content: [
      { type: "p", text: "একটি ঘরের পরিপূর্ণ সৌন্দর্য নির্ভর করে সঠিক পর্দা নির্বাচনের উপর। ChayaLux-এ আমরা বিশ্বাস করি — পর্দা শুধু আলো নিয়ন্ত্রণের বিষয় নয়, এটি আপনার রুচির প্রতিফলন।" },
      { type: "h2", text: "ফেব্রিক নির্বাচন" },
      { type: "p", text: "ভেলভেট পর্দা তৈরি করে রাজকীয় আবহ, যা ড্রয়িং রুম বা বেডরুমের জন্য উপযুক্ত। ব্ল্যাকআউট পর্দা সম্পূর্ণ আলো আটকাতে চমৎকার, যা বেডরুমে দিন-রাত আরামদায়ক পরিবেশ তৈরি করে। চাইনিজ পর্দা হালকা এবং স্বচ্ছ — লিভিং রুমের জন্য পারফেক্ট।" },
      { type: "img", src: hero2, caption: "প্রিমিয়াম ভেলভেট পর্দা — লাক্সারি ড্রয়িং রুম সেটআপ" },
      { type: "h2", text: "রঙের সমন্বয়" },
      { type: "p", text: "দেয়ালের রঙের সাথে মানানসই পর্দা বেছে নিন। উষ্ণ টোনের সাথে বার্গান্ডি বা গোল্ডেন, শীতল টোনের সাথে নেভি বা এমারল্ড — এই মেলবন্ধন তৈরি করবে ভিজ্যুয়াল হারমনি।" },
      { type: "quote", text: "সঠিক পর্দা একটি সাধারণ ঘরকেও পাঁচ তারকা হোটেলের মতো অনুভূতি দিতে পারে।" },
      { type: "h2", text: "সঠিক মাপ" },
      { type: "p", text: "পর্দার প্রস্থ জানালার প্রস্থের চেয়ে ২ থেকে ২.৫ গুণ বেশি হওয়া উচিত — এতে সুন্দর ফোল্ড তৈরি হয়। উচ্চতা মেঝে থেকে ১ ইঞ্চি উপরে রাখলে সবচেয়ে পরিষ্কার লুক পাওয়া যায়।" },
    ],
  },
  {
    slug: "5-luxury-bedroom-ideas",
    title: "৫টি লাক্সারি বেডরুম ডেকোর আইডিয়া",
    excerpt: "ছোট বাজেটেও আপনার বেডরুমকে পাঁচ তারকা হোটেলের মতো সাজাতে পারেন — জেনে নিন সহজ কিছু কৌশল।",
    image: bedroom,
    date: "১০ জানুয়ারি, ২০২৫",
    category: "ডিজাইন",
    author: "ChayaLux টিম",
    readMinutes: 5,
    content: [
      { type: "p", text: "বেডরুম হলো আরাম ও প্রশান্তির জায়গা। কিছু ছোট পরিবর্তন এটিকে বিলাসবহুল করে তুলতে পারে।" },
      { type: "h2", text: "১. স্তরিত পর্দা" },
      { type: "p", text: "একটি স্বচ্ছ পর্দা এবং একটি ব্ল্যাকআউট পর্দা একসাথে ব্যবহার করুন — এতে দিনের আলো ও রাতের অন্ধকার দুটোই নিয়ন্ত্রণে থাকবে।" },
      { type: "img", src: hero3, caption: "স্তরিত পর্দা সহ প্রিমিয়াম বেডরুম" },
      { type: "h2", text: "২. প্রিমিয়াম বেড শিট" },
      { type: "p", text: "উচ্চ থ্রেড কাউন্টের কটন বা সাটিন বেড শিট ব্যবহার করুন — এটি আরামদায়ক এবং সৌন্দর্যেও অসাধারণ।" },
      { type: "h2", text: "৩. কুশনের ব্যবহার" },
      { type: "p", text: "বিভিন্ন সাইজের কুশন বিছিয়ে দিন — এতে বিছানায় গভীরতা ও বিলাসিতা যোগ হবে।" },
      { type: "h2", text: "৪. উষ্ণ আলো" },
      { type: "p", text: "সাদা আলোর পরিবর্তে উষ্ণ হলুদ আলো ব্যবহার করুন — এটি রুমকে হোটেলের মতো আন্তরিক করে তুলবে।" },
      { type: "h2", text: "৫. কোয়ালিটি ওয়ালপেপার বা টেক্সচার" },
      { type: "p", text: "একটি অ্যাকসেন্ট ওয়াল তৈরি করুন — এটি রুমে সাথে সাথেই লাক্সারি ফিল যোগ করবে।" },
    ],
  },
  {
    slug: "curtain-care-tips",
    title: "পর্দার যত্ন নেওয়ার সহজ ৭টি টিপস",
    excerpt: "পর্দার দীর্ঘস্থায়িত্ব ও উজ্জ্বলতা বজায় রাখতে প্রতিদিনের কিছু সহজ যত্ন অনুসরণ করুন।",
    image: curtainDetail,
    date: "৫ জানুয়ারি, ২০২৫",
    category: "যত্ন",
    author: "ChayaLux টিম",
    readMinutes: 4,
    content: [
      { type: "p", text: "প্রিমিয়াম পর্দা দীর্ঘদিন নতুনের মতো রাখতে সঠিক যত্ন অপরিহার্য।" },
      { type: "h2", text: "নিয়মিত পরিষ্কার" },
      { type: "p", text: "সপ্তাহে একবার পর্দা ঝেড়ে ধুলো পরিষ্কার করুন। ভ্যাকিউম ক্লিনার হালকা সেটিংসে ব্যবহার করা যেতে পারে।" },
      { type: "h2", text: "স্পট ক্লিনিং" },
      { type: "p", text: "দাগ লাগলে সাথে সাথে ঠাণ্ডা পানি ও হালকা সাবান দিয়ে হালকা করে মুছুন — কখনো ঘষবেন না।" },
      { type: "quote", text: "সঠিক যত্নে একটি প্রিমিয়াম পর্দা বহু বছর নতুনের মতো থাকতে পারে।" },
      { type: "h2", text: "রোদে শুকানো" },
      { type: "p", text: "ধোয়ার পর সরাসরি প্রখর রোদে শুকাবেন না — এতে রঙ ফিকে হতে পারে। ছায়ায় শুকান।" },
    ],
  },
  {
    slug: "office-interior-with-blinds",
    title: "অফিস ইন্টেরিয়রে উইন্ডো ব্লাইন্ডের ব্যবহার",
    excerpt: "মডার্ন অফিসের জন্য উইন্ডো ব্লাইন্ড কেন সবচেয়ে কার্যকর সমাধান — জেনে নিন কর্পোরেট ডেকোর গাইডে।",
    image: roomOffice,
    date: "২৮ ডিসেম্বর, ২০২৪",
    category: "কর্পোরেট",
    author: "মোঃ জাহেদ হাসান",
    readMinutes: 6,
    content: [
      { type: "p", text: "কর্পোরেট পরিবেশে প্রফেশনালিজম, কার্যকারিতা এবং নান্দনিকতা — তিনটির সমন্বয় জরুরি। উইন্ডো ব্লাইন্ড এই তিনটি চাহিদাই পূরণ করে।" },
      { type: "h2", text: "কেন ব্লাইন্ড?" },
      { type: "p", text: "সহজ আলো নিয়ন্ত্রণ, মিনিমাল ডিজাইন এবং সহজ পরিচ্ছন্নতা — সব দিক থেকেই ব্লাইন্ড আধুনিক অফিসের প্রথম পছন্দ।" },
      { type: "img", src: blinds, caption: "মডার্ন অফিসে ভার্টিকাল ব্লাইন্ড" },
      { type: "h2", text: "ডিজাইন বৈচিত্র্য" },
      { type: "p", text: "ভার্টিকাল, হরাইজন্টাল, রোলার — প্রতিটি ধরন ভিন্ন অ্যাসথেটিক এনে দেয়। মিটিং রুমে ভার্টিকাল, ওপেন ওয়ার্কস্পেসে রোলার সবচেয়ে কার্যকর।" },
    ],
  },
  {
    slug: "sofa-cover-transformation",
    title: "সোফা কভার দিয়ে পুরো ড্রয়িং রুম বদলে ফেলুন",
    excerpt: "বাজেটে থেকে ড্রয়িং রুমে নতুন লুক দিতে চান? প্রিমিয়াম সোফা কভারই সেরা সমাধান।",
    image: catSofaCover,
    date: "২০ ডিসেম্বর, ২০২৪",
    category: "টিপস",
    author: "ChayaLux টিম",
    readMinutes: 4,
    content: [
      { type: "p", text: "পুরনো সোফা ফেলে দেওয়ার আগে একবার চিন্তা করুন — একটি প্রিমিয়াম কভার পুরো লুকই বদলে দিতে পারে।" },
      { type: "h2", text: "ফেব্রিক নির্বাচন" },
      { type: "p", text: "স্ট্রেচেবল প্রিমিয়াম ফেব্রিক সোফার আকৃতি অনুযায়ী বসে যায়। ভেলভেট বা সাটিন ফিনিশ লাক্সারি ফিল দেয়।" },
      { type: "img", src: roomDrawing, caption: "ভেলভেট সোফা কভার সহ ড্রয়িং রুম" },
      { type: "h2", text: "রঙের গুরুত্ব" },
      { type: "p", text: "নিউট্রাল টোন বেছে নিলে বিভিন্ন কুশন ও পর্দার সাথে সহজে মানিয়ে যাবে।" },
    ],
  },
  {
    slug: "hotel-quality-bedsheets",
    title: "হোটেল কোয়ালিটি বেড শিট চিনবেন যেভাবে",
    excerpt: "থ্রেড কাউন্ট, ফ্যাব্রিক এবং ফিনিশিং — একটি প্রিমিয়াম বেড শিট চেনার সব সূত্র।",
    image: catBedsheet,
    date: "১৫ ডিসেম্বর, ২০২৪",
    category: "গাইড",
    author: "মোঃ জাহেদ হাসান",
    readMinutes: 5,
    content: [
      { type: "p", text: "একটি ভালো বেড শিট শুধু ঘুমের মান নয়, পুরো রুমের চেহারাই বদলে দেয়।" },
      { type: "h2", text: "থ্রেড কাউন্ট" },
      { type: "p", text: "৩০০ থেকে ৬০০ থ্রেড কাউন্টের কটন সবচেয়ে আরামদায়ক ও টেকসই।" },
      { type: "h2", text: "ফেব্রিক" },
      { type: "p", text: "মিসরীয় কটন, পিমা কটন বা সাটিন — এগুলো হোটেলের বেড শিটে ব্যবহৃত প্রিমিয়াম ফেব্রিক।" },
      { type: "quote", text: "ঘুমের মান নির্ভর করে বিছানার মানের উপর।" },
    ],
  },
];

// ---------------- Testimonials ----------------
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  verified?: boolean;
  hasVideo?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "সাবরিনা আক্তার", location: "গুলশান, ঢাকা", rating: 5, text: "ChayaLux-এর ভেলভেট পর্দা কিনে সত্যিই মুগ্ধ। ফেব্রিক, স্টিচিং এবং ফিনিশিং সব দিকেই প্রিমিয়াম। ঘরের চেহারা পাল্টে গেছে।", product: "প্রিমিয়াম ভেলভেট পর্দা", verified: true, hasVideo: true },
  { name: "মোঃ রফিকুল ইসলাম", location: "উত্তরা, ঢাকা", rating: 5, text: "অফিসের সব রুমে ChayaLux-এর ব্লাইন্ড লাগিয়েছি। কোয়ালিটি এবং ফিটিং দুটোই এক্সেলেন্ট। ডেলিভারিও দ্রুত ছিল।", product: "প্রিমিয়াম ভার্টিকাল ব্লাইন্ড", verified: true },
  { name: "নুসরাত জাহান", location: "ধানমন্ডি, ঢাকা", rating: 5, text: "কাস্টম সাইজে অর্ডার করেছিলাম, একদম পারফেক্ট এসেছে। কাস্টমার সাপোর্ট টিমও অসাধারণ। সবাইকে সাজেস্ট করবো।", product: "ব্ল্যাকআউট পর্দা", verified: true, hasVideo: true },
  { name: "ইঞ্জিনিয়ার তানভীর হাসান", location: "চট্টগ্রাম", rating: 5, text: "চট্টগ্রামে ৩ দিনেই ডেলিভারি পেয়েছি। প্যাকেজিং প্রিমিয়াম, প্রোডাক্ট আরও প্রিমিয়াম। ধন্যবাদ ChayaLux।", product: "সাটিন বেড শিট সেট", verified: true },
  { name: "ডাঃ সাদিয়া রহমান", location: "বনানী, ঢাকা", rating: 5, text: "চেম্বারের জন্য হসপিটাল গ্রেড পর্দা কিনেছি। ফেব্রিক অসাধারণ, দেখতেও এলিগেন্ট। রোগীরাও প্রশংসা করেছেন।", product: "হসপিটাল গ্রেড পর্দা", verified: true },
  { name: "ফারহানা খান", location: "সিলেট", rating: 5, text: "কুশন কভার ও সোফা কভার একসাথে অর্ডার করেছিলাম। রঙ ঠিক ছবির মতোই এসেছে, কোনো পার্থক্য নেই।", product: "লাক্সারি কুশন কভার", verified: true },
  { name: "ইমরান হোসেন", location: "মিরপুর, ঢাকা", rating: 4, text: "প্রথম অর্ডারেই সন্তুষ্ট। দাম অনুযায়ী কোয়ালিটি অনেক ভালো। পরিবারের সবাই পছন্দ করেছে।", product: "চাইনিজ পর্দা", verified: true },
  { name: "তাহমিনা আক্তার", location: "রাজশাহী", rating: 5, text: "অনলাইনে এত ভালো সার্ভিস আশা করিনি। বিকাশে পে করার পর ২ দিনের মধ্যেই ডেলিভারি। প্রোডাক্ট এক্সেলেন্ট।", product: "সাটিন পর্দা", verified: true, hasVideo: true },
];

// ---------------- Gallery ----------------
export const GALLERY_CATS = [
  "সব",
  "লিভিং রুম",
  "বেডরুম",
  "অফিস",
  "হসপিটাল",
  "পর্দা",
  "ব্লাইন্ড",
  "সোফা কভার",
  "বেড শিট",
] as const;

export type GalleryCategory = (typeof GALLERY_CATS)[number];

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: GalleryCategory;
  span?: "wide" | "tall" | "big";
}

export const GALLERY: GalleryItem[] = [
  { id: "g1", image: heroLiving, title: "লাক্সারি লিভিং রুম — বার্গান্ডি ভেলভেট", category: "লিভিং রুম", span: "big" },
  { id: "g2", image: bedroom, title: "রাজকীয় বেডরুম সেটআপ", category: "বেডরুম", span: "tall" },
  { id: "g3", image: roomOffice, title: "মডার্ন অফিস ব্লাইন্ড", category: "অফিস" },
  { id: "g4", image: catHospital, title: "হসপিটাল প্রিমিয়াম কার্টেন", category: "হসপিটাল" },
  { id: "g5", image: hero2, title: "গোল্ডেন হুয়ে পর্দা", category: "পর্দা", span: "wide" },
  { id: "g6", image: blinds, title: "ভার্টিকাল ব্লাইন্ড কালেকশন", category: "ব্লাইন্ড" },
  { id: "g7", image: catSofaCover, title: "ভেলভেট সোফা কভার", category: "সোফা কভার" },
  { id: "g8", image: catBedsheet, title: "সাটিন বেড শিট সেট", category: "বেড শিট", span: "tall" },
  { id: "g9", image: hero3, title: "লাক্সারি হোটেল লবি", category: "লিভিং রুম" },
  { id: "g10", image: roomDrawing, title: "ক্লাসিক ড্রয়িং রুম", category: "লিভিং রুম" },
  { id: "g11", image: roomHotel, title: "ফাইভ স্টার হোটেল স্যুইট", category: "বেডরুম", span: "wide" },
  { id: "g12", image: hero4, title: "নেভি ব্ল্যাকআউট পর্দা", category: "পর্দা" },
  { id: "g13", image: catChinese, title: "স্বচ্ছ চাইনিজ পর্দা", category: "পর্দা" },
  { id: "g14", image: catSatin, title: "সাটিন কার্টেন সেট", category: "পর্দা", span: "tall" },
  { id: "g15", image: cushions, title: "প্রিমিয়াম কুশন কালেকশন", category: "সোফা কভার" },
  { id: "g16", image: roomApartment, title: "মডার্ন অ্যাপার্টমেন্ট", category: "লিভিং রুম" },
  { id: "g17", image: hero5, title: "ইমারল্ড টোন বেডরুম", category: "বেডরুম" },
  { id: "g18", image: curtainDetail, title: "প্রিমিয়াম ফেব্রিক ডিটেইল", category: "পর্দা" },
  { id: "g19", image: promoBanner, title: "লিমিটেড এডিশন কালেকশন", category: "লিভিং রুম", span: "wide" },
];

// ---------------- FAQ ----------------
export const FAQS = [
  { q: "আমি কীভাবে অর্ডার করতে পারি?", a: "ওয়েবসাইট থেকে সরাসরি অর্ডার করতে পারেন, অথবা আমাদের WhatsApp (01885-901184) বা Messenger-এ যোগাযোগ করে অর্ডার নিশ্চিত করতে পারেন।" },
  { q: "ডেলিভারিতে কত সময় লাগে?", a: "ঢাকার ভিতরে ১-২ কর্মদিবস এবং ঢাকার বাইরে ২-৪ কর্মদিবসের মধ্যে ডেলিভারি সম্পন্ন হয়।" },
  { q: "ক্যাশ অন ডেলিভারি কি আছে?", a: "হ্যাঁ, সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা রয়েছে। বিকাশ, নগদ ও রকেটেও পেমেন্ট করতে পারেন।" },
  { q: "প্রোডাক্ট পরিবর্তন বা রিটার্ন করা যাবে?", a: "প্রোডাক্ট পাওয়ার ৭ দিনের মধ্যে ব্যবহার না করা প্রোডাক্ট পরিবর্তন করা যাবে। ক্ষতিগ্রস্ত হলে সাথে সাথেই যোগাযোগ করুন — বিনামূল্যে পরিবর্তন।" },
  { q: "কাস্টম সাইজে অর্ডার নেওয়া হয়?", a: "অবশ্যই। জানালা বা দরজার সঠিক মাপ পাঠান — আমরা কাস্টম সাইজে সেলাই করে ডেলিভারি করি।" },
  { q: "ফেব্রিকের কোয়ালিটি কেমন?", a: "আমরা সরাসরি প্রিমিয়াম ফেব্রিক আমদানি করি এবং লাইফটাইম কালার গ্যারান্টি প্রদান করি। প্রতিটি প্রোডাক্ট QC পরীক্ষার পর ডেলিভারি হয়।" },
  { q: "ডেলিভারি চার্জ কত?", a: "ঢাকার ভিতরে ৳৮০ এবং ঢাকার বাইরে ৳১৫০। ৳১০,০০০ টাকার উপরে অর্ডারে ডেলিভারি সম্পূর্ণ ফ্রি।" },
  { q: "ওয়ারেন্টি কি আছে?", a: "সব প্রিমিয়াম প্রোডাক্টে ১ বছরের ম্যানুফ্যাকচারিং ওয়ারেন্টি এবং লাইফটাইম কালার গ্যারান্টি রয়েছে।" },
  { q: "কোথায় আপনাদের শোরুম?", a: "করিম ম্যানশন, সলস্টিস হোম কালেকশন, ইসলামপুর, পুরান ঢাকা — সরাসরি এসে প্রোডাক্ট দেখতে পারেন।" },
  { q: "একাধিক ইউনিটে ডিসকাউন্ট আছে?", a: "হ্যাঁ, ৫ পিসের উপরে অর্ডারে বিশেষ পাইকারি রেট প্রযোজ্য। কর্পোরেট বা প্রজেক্ট অর্ডারের জন্য সরাসরি যোগাযোগ করুন।" },
];

// ---------------- Company values / stats ----------------
export const STATS = [
  { value: 10000, suffix: "+", label: "সন্তুষ্ট গ্রাহক" },
  { value: 5000, suffix: "+", label: "সফল ডেলিভারি" },
  { value: 500, suffix: "+", label: "পর্দার ডিজাইন" },
  { value: 99, suffix: "%", label: "কাস্টমার স্যাটিসফ্যাকশন" },
];
