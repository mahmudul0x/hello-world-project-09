// ChayaLux product catalog — production seed data
// Images are reused from the existing brand photoshoot in src/assets

import heroImg from "@/assets/hero-living-room.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import curtainImg from "@/assets/curtain-detail.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import cushionsImg from "@/assets/cushions.jpg";
import blindsImg from "@/assets/blinds.jpg";
import catChinese from "@/assets/cat-chinese.jpg";
import catSatin from "@/assets/cat-satin.jpg";
import catHospital from "@/assets/cat-hospital.jpg";
import catSofaCover from "@/assets/cat-sofa-cover.jpg";
import catBedsheet from "@/assets/cat-bedsheet.jpg";
import roomDrawing from "@/assets/room-drawing.jpg";
import roomHotel from "@/assets/room-hotel.jpg";
import roomOffice from "@/assets/room-office.jpg";
import roomApartment from "@/assets/room-apartment.jpg";
import promoBanner from "@/assets/promo-banner.jpg";

export const IMAGES = {
  heroImg, hero2, hero3, hero4, hero5,
  curtainImg, bedroomImg, cushionsImg, blindsImg,
  catChinese, catSatin, catHospital, catSofaCover, catBedsheet,
  roomDrawing, roomHotel, roomOffice, roomApartment, promoBanner,
};

export type ProductCategorySlug =
  | "blackout"
  | "velvet"
  | "chinese"
  | "satin"
  | "home-tex"
  | "hospital"
  | "window-blinds"
  | "sofa-cover"
  | "loose-cover"
  | "foam-cover"
  | "cushion"
  | "bedsheet";

export interface Category {
  slug: ProductCategorySlug;
  name: string;
  description: string;
  image: string;
  banner: string;
}

export const CATEGORIES: Category[] = [
  { slug: "blackout", name: "ব্ল্যাকআউট পর্দা", description: "১০০% আলোরোধী ও শব্দ কমানো ফ্যাব্রিকে নিখুঁত ঘুম ও প্রিমিয়াম ফিনিশিং।", image: bedroomImg, banner: bedroomImg },
  { slug: "velvet", name: "ভেলভেট পর্দা", description: "রাজকীয় ভেলভেটে হোটেল-গ্রেড উষ্ণতা ও গভীর রঙের বিলাসবহুল ছোঁয়া।", image: curtainImg, banner: curtainImg },
  { slug: "chinese", name: "চাইনিজ পর্দা", description: "নিখুঁত এমব্রয়ডারি ও সিল্ক টাচ ফিনিশিং — ঐতিহ্য মিশে আধুনিকতায়।", image: catChinese, banner: catChinese },
  { slug: "satin", name: "শাটিন পর্দা", description: "সোনালী আভার শাটিন ফেব্রিকে ড্রয়িং রুমের জন্য পার্ফেক্ট চয়েস।", image: catSatin, banner: catSatin },
  { slug: "home-tex", name: "হোম টেক্স পর্দা", description: "দৈনন্দিন ব্যবহারের জন্য টেকসই, নরম ও প্রিমিয়াম হোম টেক্সটাইল কালেকশন।", image: heroImg, banner: heroImg },
  { slug: "hospital", name: "হসপিটাল পর্দা", description: "মেডিকেল-গ্রেড অ্যান্টি-ব্যাকটেরিয়াল ফেব্রিক — হাসপাতাল ও ক্লিনিকের জন্য।", image: catHospital, banner: catHospital },
  { slug: "window-blinds", name: "উইন্ডো ব্লাইন্ড", description: "অফিস ও মডার্ন এপার্টমেন্টের জন্য প্রিমিয়াম উইন্ডো ব্লাইন্ড কালেকশন।", image: blindsImg, banner: blindsImg },
  { slug: "sofa-cover", name: "সোফা কভার", description: "ইউনিভার্সাল ফিটিং সোফা কভারে পুরনো সোফা হয়ে উঠবে নতুন।", image: catSofaCover, banner: catSofaCover },
  { slug: "loose-cover", name: "লুজ কভার", description: "সহজে খোলা-লাগানো যায় এমন প্রিমিয়াম লুজ কভার — সহজ যত্ন।", image: catSofaCover, banner: roomApartment },
  { slug: "foam-cover", name: "ফোম কভার", description: "মেমরি ফোম কুশন কভার — নরম, টেকসই ও আকর্ষণীয়।", image: cushionsImg, banner: cushionsImg },
  { slug: "cushion", name: "কুশন কালেকশন", description: "সিল্ক টাচ ও ভেলভেট কুশন সেট — ঘরের প্রতিটি কোণে বিলাসিতা।", image: cushionsImg, banner: roomHotel },
  { slug: "bedsheet", name: "বিছানার চাদর", description: "প্রিমিয়াম কটন ও সিল্ক বেডশিট — শোবার ঘরের জন্য নরম উষ্ণতা।", image: catBedsheet, banner: catBedsheet },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategorySlug;
  categoryName: string;
  shortDesc: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
  fabric: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  patterns: string[];
  rooms: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  features: string[];
  specs: { label: string; value: string }[];
}

const c = (slug: ProductCategorySlug) => CATEGORIES.find((x) => x.slug === slug)!.name;

const baseFeatures = [
  "হেভি ফেব্রিক",
  "প্রিমিয়াম ফিনিশিং",
  "ডাবল সাইড ব্যবহারযোগ্য",
  "কালার গ্যারান্টি",
  "ব্ল্যাকআউট টেকনোলজি",
  "নয়েজ রিডাকশন",
  "লাক্সারি স্টিচিং",
];

const baseSpecs = (fabric: string): { label: string; value: string }[] => [
  { label: "ফেব্রিক", value: fabric },
  { label: "ওজন", value: "৩২০ GSM" },
  { label: "উইড্থ", value: "৫৪ ইঞ্চি (কাস্টম উপলব্ধ)" },
  { label: "স্টিচিং", value: "ডাবল-লাইন লাক্সারি স্টিচ" },
  { label: "ওয়াশ কেয়ার", value: "ড্রাই ক্লিন / জেন্টল হ্যান্ড ওয়াশ" },
  { label: "অরিজিন", value: "ChayaLux — Bangladesh" },
];

const COLORS = {
  burgundy: { name: "বার্গান্ডি", hex: "#7B1E1E" },
  gold: { name: "গোল্ড", hex: "#D4AF37" },
  ivory: { name: "আইভরি", hex: "#F5EFE2" },
  charcoal: { name: "চারকোল", hex: "#2A2A2A" },
  emerald: { name: "এমারাল্ড", hex: "#0F5132" },
  blush: { name: "ব্লাশ পিংক", hex: "#E5B8B0" },
  navy: { name: "নেভি", hex: "#1B2A49" },
  silver: { name: "সিলভার", hex: "#C0C0C0" },
};

const SIZES = ["৫৪ x ৮৪ ইঞ্চি", "৫৪ x ৯৬ ইঞ্চি", "৫৪ x ১০৮ ইঞ্চি", "কাস্টম সাইজ"];

const rooms = {
  living: "লিভিং রুম",
  bedroom: "বেডরুম",
  drawing: "ড্রয়িং রুম",
  dining: "ডাইনিং",
  office: "অফিস",
  hotel: "হোটেল",
  hospital: "হসপিটাল",
};

function make(
  id: number,
  slug: string,
  name: string,
  cat: ProductCategorySlug,
  shortDesc: string,
  price: number,
  oldPrice: number | undefined,
  images: string[],
  fabric: string,
  cols: (keyof typeof COLORS)[],
  patterns: string[],
  rms: (keyof typeof rooms)[],
  flags: Partial<Pick<Product, "isNew" | "isBestSeller" | "isFeatured" | "inStock" | "rating" | "reviews">> = {},
): Product {
  return {
    id: String(id),
    slug,
    name,
    category: cat,
    categoryName: c(cat),
    shortDesc,
    description: `${shortDesc} ChayaLux-এর ${c(cat)} কালেকশনের এই এক্সক্লুসিভ পণ্যটি আন্তর্জাতিক মানের ${fabric} ফেব্রিকে তৈরি — বাংলাদেশের প্রতিটি ঘরের জন্য পার্ফেক্ট। প্রিমিয়াম ফিনিশিং, দীর্ঘস্থায়ী রঙ ও লাক্সারি স্টিচিং একসাথে।`,
    price,
    oldPrice,
    images,
    fabric,
    colors: cols.map((k) => COLORS[k]),
    sizes: SIZES,
    patterns,
    rooms: rms.map((r) => rooms[r]),
    rating: flags.rating ?? 4.8,
    reviews: flags.reviews ?? 40 + ((id * 37) % 180),
    inStock: flags.inStock ?? true,
    isNew: flags.isNew,
    isBestSeller: flags.isBestSeller,
    isFeatured: flags.isFeatured,
    features: baseFeatures,
    specs: baseSpecs(fabric),
  };
}

export const PRODUCTS: Product[] = [
  make(1, "royal-velvet-burgundy", "রয়্যাল ভেলভেট বার্গান্ডি পর্দা", "velvet",
    "গভীর বার্গান্ডি রঙে রাজকীয় ভেলভেট ড্রেপ — লিভিং রুমকে দেবে ৫-স্টার লুক।",
    4850, 6200, [curtainImg, hero4, roomDrawing, heroImg], "প্রিমিয়াম বেলজিয়ান ভেলভেট",
    ["burgundy", "emerald", "charcoal", "navy"], ["সলিড", "টেক্সচার্ড"],
    ["living", "drawing", "hotel"], { isBestSeller: true, isFeatured: true, rating: 4.9 }),

  make(2, "modern-blackout-drape", "মডার্ন ব্ল্যাকআউট ড্রেপ", "blackout",
    "১০০% আলোরোধী — বেডরুমে নিখুঁত ঘুমের জন্য প্রিমিয়াম চয়েস।",
    3950, 4800, [bedroomImg, hero3, hero5, roomApartment], "ট্রিপল-লেয়ার ব্ল্যাকআউট",
    ["charcoal", "burgundy", "ivory", "navy"], ["সলিড"],
    ["bedroom", "hotel"], { isBestSeller: true }),

  make(3, "silk-touch-cushion-set", "সিল্ক টাচ কুশন সেট (৫টি)", "cushion",
    "সিল্ক ফিনিশিং কুশন কভারের ৫টির সেট — গোল্ড ও বার্গান্ডি টোন।",
    1850, 2400, [cushionsImg, roomHotel, hero3], "সিল্ক ব্লেন্ড",
    ["gold", "burgundy", "ivory", "blush"], ["এমব্রয়ডারি", "সলিড"],
    ["living", "bedroom", "drawing"], { isBestSeller: true }),

  make(4, "premium-window-blind", "প্রিমিয়াম উইন্ডো ব্লাইন্ড", "window-blinds",
    "মডার্ন অফিস ও এপার্টমেন্টের জন্য প্রিমিয়াম ভেনেশিয়ান ব্লাইন্ড।",
    5200, undefined, [blindsImg, roomOffice, roomApartment], "প্রিমিয়াম অ্যালুমিনিয়াম",
    ["ivory", "charcoal", "silver"], ["হরাইজন্টাল"],
    ["office", "living"], { isFeatured: true }),

  make(5, "golden-satin-luxury", "গোল্ডেন সাটিন লাক্সারি পর্দা", "satin",
    "সোনালী শাটিনের চকচকে ফিনিশে ড্রয়িং রুমের রাজকীয় সৌন্দর্য।",
    5450, 6800, [catSatin, hero2, roomHotel, roomDrawing], "প্রিমিয়াম শাটিন সিল্ক",
    ["gold", "ivory", "blush"], ["সলিড"],
    ["drawing", "hotel"], { isNew: true, isFeatured: true, rating: 4.9 }),

  make(6, "chinese-embroidery-curtain", "চাইনিজ এমব্রয়ডারি কার্টেন", "chinese",
    "নিখুঁত হাতে করা এমব্রয়ডারি — ঐতিহ্যবাহী চাইনিজ ডিজাইন।",
    4250, 5500, [catChinese, hero2, hero5], "সিল্ক ব্লেন্ড এমব্রয়ডারি",
    ["ivory", "gold", "blush", "emerald"], ["এমব্রয়ডারি", "ফ্লোরাল"],
    ["drawing", "living"], { isNew: true }),

  make(7, "premium-silk-bedsheet", "প্রিমিয়াম সিল্ক বেডশিট", "bedsheet",
    "সিল্ক ব্লেন্ড বেডশিট সেট — নরম, উষ্ণ ও বিলাসবহুল ঘুমের অভিজ্ঞতা।",
    2850, undefined, [catBedsheet, bedroomImg, hero3], "১০০% কটন সিল্ক ব্লেন্ড",
    ["ivory", "blush", "gold", "burgundy"], ["সলিড", "প্যাটার্ন"],
    ["bedroom", "hotel"], { isNew: true }),

  make(8, "universal-sofa-cover", "ইউনিভার্সাল সোফা কভার", "sofa-cover",
    "যেকোনো সোফায় ফিট করে — প্রিমিয়াম ফেব্রিক ও ইলাস্টিক ফিটিং।",
    3150, 3900, [catSofaCover, roomApartment, hero3], "স্ট্রেচেবল প্রিমিয়াম নিট",
    ["charcoal", "ivory", "burgundy", "navy"], ["সলিড"],
    ["living", "drawing"], {}),

  make(9, "emerald-velvet-drape", "এমারাল্ড ভেলভেট ড্রেপ", "velvet",
    "গভীর এমারাল্ড রঙের ভেলভেট — মডার্ন লাক্সারি ইন্টেরিয়রের জন্য।",
    5150, 6500, [hero4, curtainImg, roomHotel], "প্রিমিয়াম ভেলভেট",
    ["emerald", "burgundy", "navy"], ["সলিড"],
    ["living", "drawing", "hotel"], { isFeatured: true }),

  make(10, "hospital-medical-curtain", "মেডিকেল-গ্রেড হসপিটাল পর্দা", "hospital",
    "অ্যান্টি-ব্যাকটেরিয়াল ফেব্রিক — হাসপাতাল, ক্লিনিক ও চেম্বারের জন্য।",
    2650, undefined, [catHospital, roomOffice, blindsImg], "মেডিকেল-গ্রেড পলিয়েস্টার",
    ["ivory", "silver", "blush"], ["সলিড"],
    ["hospital", "office"], {}),

  make(11, "ivory-linen-sheer", "আইভরি লিনেন শিয়ার কার্টেন", "home-tex",
    "নরম লিনেন শিয়ারে প্রাকৃতিক আলোর নরম ছোঁয়া — মিনিমাল ইন্টেরিয়র।",
    2450, 3200, [hero3, hero5, heroImg], "ন্যাচারাল লিনেন",
    ["ivory", "blush", "silver"], ["সলিড", "টেক্সচার্ড"],
    ["living", "bedroom"], { isNew: true }),

  make(12, "foam-memory-cushion", "মেমরি ফোম কুশন কভার সেট", "foam-cover",
    "মেমরি ফোম কুশন — নরম কিন্তু আকৃতি ধরে রাখে দীর্ঘদিন।",
    1450, 1850, [cushionsImg, roomApartment], "মেমরি ফোম + সিল্ক কভার",
    ["gold", "ivory", "burgundy", "charcoal"], ["সলিড", "টেক্সচার্ড"],
    ["living", "bedroom"], {}),

  make(13, "loose-cover-premium", "প্রিমিয়াম লুজ সোফা কভার", "loose-cover",
    "সহজে খোলা-লাগানো যায় — ওয়াশেবল প্রিমিয়াম লুজ ফিটিং কভার।",
    2950, undefined, [catSofaCover, roomDrawing], "কটন-পলি ব্লেন্ড",
    ["ivory", "charcoal", "burgundy"], ["সলিড"],
    ["living", "drawing"], {}),

  make(14, "gold-satin-signature", "গোল্ড সাটিন সিগনেচার পর্দা", "satin",
    "সিগনেচার গোল্ড শাটিন — লাক্সারি ইন্টেরিয়রের আইকনিক পিস।",
    5850, 7200, [catSatin, hero2, roomHotel], "সিগনেচার শাটিন",
    ["gold", "ivory"], ["সলিড"],
    ["drawing", "hotel"], { isFeatured: true, rating: 5 }),

  make(15, "blackout-charcoal", "চারকোল ব্ল্যাকআউট পর্দা", "blackout",
    "চারকোল টোনে মডার্ন ব্ল্যাকআউট — হোম থিয়েটার ও বেডরুমের জন্য।",
    3650, undefined, [bedroomImg, hero3, roomApartment], "ট্রিপল-লেয়ার ব্ল্যাকআউট",
    ["charcoal", "navy", "burgundy"], ["সলিড"],
    ["bedroom", "living"], {}),

  make(16, "chinese-jacquard", "চাইনিজ জ্যাকার্ড কার্টেন", "chinese",
    "জ্যাকার্ড উইভে ঐতিহ্যবাহী চাইনিজ প্যাটার্ন — প্রিমিয়াম টেক্সচার।",
    4650, 5900, [catChinese, hero2], "জ্যাকার্ড সিল্ক ব্লেন্ড",
    ["gold", "burgundy", "emerald"], ["জ্যাকার্ড", "ফ্লোরাল"],
    ["drawing", "hotel"], {}),

  make(17, "office-vertical-blind", "অফিস ভার্টিক্যাল ব্লাইন্ড", "window-blinds",
    "প্রফেশনাল অফিসের জন্য প্রিমিয়াম ভার্টিক্যাল ব্লাইন্ড কালেকশন।",
    4850, undefined, [blindsImg, roomOffice], "PVC + ফেব্রিক ব্লেন্ড",
    ["ivory", "silver", "charcoal"], ["ভার্টিক্যাল"],
    ["office"], {}),

  make(18, "cushion-royal-set", "রয়্যাল ভেলভেট কুশন সেট (৬টি)", "cushion",
    "৬টি ভেলভেট কুশনের সিগনেচার সেট — গোল্ডেন এমব্রয়ডারি সহ।",
    2450, 3200, [cushionsImg, hero4, roomDrawing], "ভেলভেট + সিল্ক এমব্রয়ডারি",
    ["burgundy", "gold", "emerald"], ["এমব্রয়ডারি"],
    ["drawing", "living", "hotel"], { isFeatured: true, isNew: true }),

  make(19, "bedsheet-cotton-luxe", "লাক্সারি কটন বেডশিট সেট", "bedsheet",
    "৪০০ থ্রেড কাউন্ট প্রিমিয়াম কটন — হোটেল-গ্রেড আরাম।",
    3250, 4100, [catBedsheet, bedroomImg], "৪০০ TC ইজিপ্শিয়ান কটন",
    ["ivory", "blush", "silver"], ["সলিড", "প্যাটার্ন"],
    ["bedroom"], { isBestSeller: true }),

  make(20, "home-tex-modern", "মডার্ন হোম টেক্স পর্দা", "home-tex",
    "দৈনন্দিন ব্যবহারের জন্য টেকসই ও নরম হোম টেক্সটাইল পর্দা।",
    1950, 2500, [heroImg, hero3, roomApartment], "হোম টেক্স ব্লেন্ড",
    ["ivory", "charcoal", "blush", "gold"], ["সলিড", "টেক্সচার্ড"],
    ["living", "bedroom"], {}),

  make(21, "velvet-navy-luxury", "নেভি ব্লু ভেলভেট লাক্সারি", "velvet",
    "গভীর নেভি ব্লু ভেলভেটে কর্পোরেট লাক্সারির অনুভূতি।",
    4950, undefined, [hero4, curtainImg], "প্রিমিয়াম ভেলভেট",
    ["navy", "charcoal", "burgundy"], ["সলিড"],
    ["office", "drawing"], { isNew: true }),

  make(22, "hospital-partition-curtain", "হসপিটাল পার্টিশন পর্দা", "hospital",
    "হাসপাতাল ওয়ার্ডের পার্টিশনের জন্য ফ্লেম-রিটার্ডেন্ট পর্দা।",
    2950, undefined, [catHospital, roomOffice], "ফ্লেম-রিটার্ডেন্ট পলিয়েস্টার",
    ["ivory", "silver"], ["সলিড"],
    ["hospital"], {}),

  make(23, "sofa-cover-stretch", "স্ট্রেচেবল প্রিমিয়াম সোফা কভার", "sofa-cover",
    "স্ট্রেচেবল ফেব্রিকে ৩+১+১ সোফা সেটের ইউনিভার্সাল ফিট।",
    3850, 4900, [catSofaCover, roomApartment], "স্ট্রেচ নিট",
    ["burgundy", "charcoal", "ivory", "navy"], ["সলিড"],
    ["living"], { isBestSeller: true }),

  make(24, "foam-luxury-cover", "লাক্সারি ফোম কভার সেট", "foam-cover",
    "মেমরি ফোম ও সিল্ক টাচ — প্রিমিয়াম লাক্সারি কুশন কভার।",
    1650, 2200, [cushionsImg, hero3], "মেমরি ফোম + সিল্ক",
    ["gold", "ivory", "blush"], ["সলিড", "এমব্রয়ডারি"],
    ["living", "drawing"], { isNew: true }),
];

// Room preview images — same product-in-context photography set
export const ROOM_PREVIEWS = [
  { name: "লিভিং রুম", image: roomDrawing },
  { name: "বেডরুম", image: bedroomImg },
  { name: "ডাইনিং", image: roomApartment },
  { name: "অফিস", image: roomOffice },
  { name: "হোটেল", image: roomHotel },
  { name: "হসপিটাল", image: catHospital },
];

// Filter option catalogs (derived + curated)
export const ALL_COLORS = Object.values(COLORS);
export const ALL_FABRICS = [
  "ভেলভেট", "শাটিন", "সিল্ক ব্লেন্ড", "কটন", "লিনেন", "জ্যাকার্ড", "ব্ল্যাকআউট", "পলিয়েস্টার",
];
export const ALL_PATTERNS = ["সলিড", "টেক্সচার্ড", "এমব্রয়ডারি", "ফ্লোরাল", "জ্যাকার্ড", "প্যাটার্ন"];
export const ALL_ROOMS = Object.values(rooms);

// Helpers
export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const getRelated = (p: Product, n = 4) =>
  PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, n);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const productsIn = (slug: ProductCategorySlug) =>
  PRODUCTS.filter((p) => p.category === slug);

export const REVIEWS_SEED = [
  { name: "সাদিয়া রহমান", location: "ধানমন্ডি, ঢাকা", rating: 5, text: "কাপড়ের কোয়ালিটি অসাধারণ! ঘরের লুক পুরোপুরি বদলে গেছে। ডেলিভারিও দ্রুত ছিল।" },
  { name: "তানভীর আহমেদ", location: "গুলশান, ঢাকা", rating: 5, text: "প্রিমিয়াম ফিনিশিং, দাম ন্যায্য। ChayaLux-এর সার্ভিস সত্যিই লাক্সারি ব্র্যান্ডের মতো।" },
  { name: "নুসরাত জাহান", location: "চট্টগ্রাম", rating: 5, text: "ভেলভেট কার্টেনটি ছবির চেয়েও সুন্দর। বন্ধুরা এখন সবাই জিজ্ঞেস করে কোথা থেকে নিয়েছি।" },
  { name: "মাহমুদ হাসান", location: "উত্তরা, ঢাকা", rating: 5, text: "কাস্টম সাইজে বানিয়ে দিয়েছে ঠিক মাপে। ফিটিং একদম পার্ফেক্ট।" },
];

export function bnPrice(n: number) {
  return `৳${n.toLocaleString("bn-BD")}`;
}
