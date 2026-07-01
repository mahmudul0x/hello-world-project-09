import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-CteU02vO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var hero_living_room_default;
var init_hero_living_room = __esmMin((() => {
	hero_living_room_default = "/assets/hero-living-room-DE-Jigy1.jpg";
}));
var hero_2_default;
var init_hero_2 = __esmMin((() => {
	hero_2_default = "/assets/hero-2-CiNpdvew.jpg";
}));
var hero_3_default;
var init_hero_3 = __esmMin((() => {
	hero_3_default = "/assets/hero-3-BURyUf4j.jpg";
}));
var hero_4_default;
var init_hero_4 = __esmMin((() => {
	hero_4_default = "/assets/hero-4-BeblRKBk.jpg";
}));
var hero_5_default;
var init_hero_5 = __esmMin((() => {
	hero_5_default = "/assets/hero-5-C1UpjUAw.jpg";
}));
var curtain_detail_default;
var init_curtain_detail = __esmMin((() => {
	curtain_detail_default = "/assets/curtain-detail-CScHUfsI.jpg";
}));
var bedroom_default;
var init_bedroom = __esmMin((() => {
	bedroom_default = "/assets/bedroom-CbKUVvwr.jpg";
}));
var cushions_default;
var init_cushions = __esmMin((() => {
	cushions_default = "/assets/cushions-CzZGEJCd.jpg";
}));
var blinds_default;
var init_blinds = __esmMin((() => {
	blinds_default = "/assets/blinds-CBFPD3t3.jpg";
}));
var cat_chinese_default;
var init_cat_chinese = __esmMin((() => {
	cat_chinese_default = "/assets/cat-chinese-C2nkNYZh.jpg";
}));
var cat_satin_default;
var init_cat_satin = __esmMin((() => {
	cat_satin_default = "/assets/cat-satin-CanlVNq1.jpg";
}));
var cat_hospital_default;
var init_cat_hospital = __esmMin((() => {
	cat_hospital_default = "/assets/cat-hospital-fyr_Pl2o.jpg";
}));
var cat_sofa_cover_default;
var init_cat_sofa_cover = __esmMin((() => {
	cat_sofa_cover_default = "/assets/cat-sofa-cover-DolqaCGn.jpg";
}));
var cat_bedsheet_default;
var init_cat_bedsheet = __esmMin((() => {
	cat_bedsheet_default = "/assets/cat-bedsheet-ChAD1G4Q.jpg";
}));
var room_drawing_default;
var init_room_drawing = __esmMin((() => {
	room_drawing_default = "/assets/room-drawing-fjnQjN7c.jpg";
}));
var room_hotel_default;
var init_room_hotel = __esmMin((() => {
	room_hotel_default = "/assets/room-hotel-DKx7xihE.jpg";
}));
var room_office_default;
var init_room_office = __esmMin((() => {
	room_office_default = "/assets/room-office-CmM_S_fu.jpg";
}));
var room_apartment_default;
var init_room_apartment = __esmMin((() => {
	room_apartment_default = "/assets/room-apartment-D_C7Tyvv.jpg";
}));
var promo_banner_default;
var init_promo_banner = __esmMin((() => {
	promo_banner_default = "/assets/promo-banner-CgXYtCmv.jpg";
}));
var products_exports = /* @__PURE__ */ __exportAll({
	ALL_COLORS: () => ALL_COLORS,
	ALL_FABRICS: () => ALL_FABRICS,
	ALL_PATTERNS: () => ALL_PATTERNS,
	ALL_ROOMS: () => ALL_ROOMS,
	CATEGORIES: () => CATEGORIES,
	IMAGES: () => IMAGES,
	PRODUCTS: () => PRODUCTS,
	REVIEWS_SEED: () => REVIEWS_SEED,
	ROOM_PREVIEWS: () => ROOM_PREVIEWS,
	bnNum: () => bnNum,
	bnPrice: () => bnPrice,
	getCategory: () => getCategory,
	getProduct: () => getProduct,
	getRelated: () => getRelated,
	productsIn: () => productsIn,
	toBn: () => toBn
});
function make(id, slug, name, cat, shortDesc, price, oldPrice, images, fabric, cols, patterns, rms, flags = {}) {
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
		reviews: flags.reviews ?? 40 + id * 37 % 180,
		inStock: flags.inStock ?? true,
		isNew: flags.isNew,
		isBestSeller: flags.isBestSeller,
		isFeatured: flags.isFeatured,
		features: baseFeatures,
		specs: baseSpecs(fabric)
	};
}
function toBn(n) {
	return String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}
function bnNum(n) {
	return toBn(n.toLocaleString("en-US"));
}
function bnPrice(n) {
	return `৳${bnNum(n)}`;
}
var IMAGES, CATEGORIES, c, baseFeatures, baseSpecs, COLORS, SIZES, rooms, PRODUCTS, ROOM_PREVIEWS, ALL_COLORS, ALL_FABRICS, ALL_PATTERNS, ALL_ROOMS, getProduct, getRelated, getCategory, productsIn, REVIEWS_SEED, BN_DIGITS;
var init_products = __esmMin((() => {
	init_hero_living_room();
	init_hero_2();
	init_hero_3();
	init_hero_4();
	init_hero_5();
	init_curtain_detail();
	init_bedroom();
	init_cushions();
	init_blinds();
	init_cat_chinese();
	init_cat_satin();
	init_cat_hospital();
	init_cat_sofa_cover();
	init_cat_bedsheet();
	init_room_drawing();
	init_room_hotel();
	init_room_office();
	init_room_apartment();
	init_promo_banner();
	IMAGES = {
		heroImg: hero_living_room_default,
		hero2: hero_2_default,
		hero3: hero_3_default,
		hero4: hero_4_default,
		hero5: hero_5_default,
		curtainImg: curtain_detail_default,
		bedroomImg: bedroom_default,
		cushionsImg: cushions_default,
		blindsImg: blinds_default,
		catChinese: cat_chinese_default,
		catSatin: cat_satin_default,
		catHospital: cat_hospital_default,
		catSofaCover: cat_sofa_cover_default,
		catBedsheet: cat_bedsheet_default,
		roomDrawing: room_drawing_default,
		roomHotel: room_hotel_default,
		roomOffice: room_office_default,
		roomApartment: room_apartment_default,
		promoBanner: promo_banner_default
	};
	CATEGORIES = [
		{
			slug: "blackout",
			name: "ব্ল্যাকআউট পর্দা",
			description: "১০০% আলোরোধী ও শব্দ কমানো ফ্যাব্রিকে নিখুঁত ঘুম ও প্রিমিয়াম ফিনিশিং।",
			image: bedroom_default,
			banner: bedroom_default
		},
		{
			slug: "velvet",
			name: "ভেলভেট পর্দা",
			description: "রাজকীয় ভেলভেটে হোটেল-গ্রেড উষ্ণতা ও গভীর রঙের বিলাসবহুল ছোঁয়া।",
			image: curtain_detail_default,
			banner: curtain_detail_default
		},
		{
			slug: "chinese",
			name: "চাইনিজ পর্দা",
			description: "নিখুঁত এমব্রয়ডারি ও সিল্ক টাচ ফিনিশিং — ঐতিহ্য মিশে আধুনিকতায়।",
			image: cat_chinese_default,
			banner: cat_chinese_default
		},
		{
			slug: "satin",
			name: "শাটিন পর্দা",
			description: "সোনালী আভার শাটিন ফেব্রিকে ড্রয়িং রুমের জন্য পার্ফেক্ট চয়েস।",
			image: cat_satin_default,
			banner: cat_satin_default
		},
		{
			slug: "home-tex",
			name: "হোম টেক্স পর্দা",
			description: "দৈনন্দিন ব্যবহারের জন্য টেকসই, নরম ও প্রিমিয়াম হোম টেক্সটাইল কালেকশন।",
			image: hero_living_room_default,
			banner: hero_living_room_default
		},
		{
			slug: "hospital",
			name: "হসপিটাল পর্দা",
			description: "মেডিকেল-গ্রেড অ্যান্টি-ব্যাকটেরিয়াল ফেব্রিক — হাসপাতাল ও ক্লিনিকের জন্য।",
			image: cat_hospital_default,
			banner: cat_hospital_default
		},
		{
			slug: "window-blinds",
			name: "উইন্ডো ব্লাইন্ড",
			description: "অফিস ও মডার্ন এপার্টমেন্টের জন্য প্রিমিয়াম উইন্ডো ব্লাইন্ড কালেকশন।",
			image: blinds_default,
			banner: blinds_default
		},
		{
			slug: "sofa-cover",
			name: "সোফা কভার",
			description: "ইউনিভার্সাল ফিটিং সোফা কভারে পুরনো সোফা হয়ে উঠবে নতুন।",
			image: cat_sofa_cover_default,
			banner: cat_sofa_cover_default
		},
		{
			slug: "loose-cover",
			name: "লুজ কভার",
			description: "সহজে খোলা-লাগানো যায় এমন প্রিমিয়াম লুজ কভার — সহজ যত্ন।",
			image: cat_sofa_cover_default,
			banner: room_apartment_default
		},
		{
			slug: "foam-cover",
			name: "ফোম কভার",
			description: "মেমরি ফোম কুশন কভার — নরম, টেকসই ও আকর্ষণীয়।",
			image: cushions_default,
			banner: cushions_default
		},
		{
			slug: "cushion",
			name: "কুশন কালেকশন",
			description: "সিল্ক টাচ ও ভেলভেট কুশন সেট — ঘরের প্রতিটি কোণে বিলাসিতা।",
			image: cushions_default,
			banner: room_hotel_default
		},
		{
			slug: "bedsheet",
			name: "বিছানার চাদর",
			description: "প্রিমিয়াম কটন ও সিল্ক বেডশিট — শোবার ঘরের জন্য নরম উষ্ণতা।",
			image: cat_bedsheet_default,
			banner: cat_bedsheet_default
		}
	];
	c = (slug) => CATEGORIES.find((x) => x.slug === slug).name;
	baseFeatures = [
		"হেভি ফেব্রিক",
		"প্রিমিয়াম ফিনিশিং",
		"ডাবল সাইড ব্যবহারযোগ্য",
		"কালার গ্যারান্টি",
		"ব্ল্যাকআউট টেকনোলজি",
		"নয়েজ রিডাকশন",
		"লাক্সারি স্টিচিং"
	];
	baseSpecs = (fabric) => [
		{
			label: "ফেব্রিক",
			value: fabric
		},
		{
			label: "ওজন",
			value: "৩২০ GSM"
		},
		{
			label: "উইড্থ",
			value: "৫৪ ইঞ্চি (কাস্টম উপলব্ধ)"
		},
		{
			label: "স্টিচিং",
			value: "ডাবল-লাইন লাক্সারি স্টিচ"
		},
		{
			label: "ওয়াশ কেয়ার",
			value: "ড্রাই ক্লিন / জেন্টল হ্যান্ড ওয়াশ"
		},
		{
			label: "অরিজিন",
			value: "ChayaLux — Bangladesh"
		}
	];
	COLORS = {
		burgundy: {
			name: "বার্গান্ডি",
			hex: "#7B1E1E"
		},
		gold: {
			name: "গোল্ড",
			hex: "#D4AF37"
		},
		ivory: {
			name: "আইভরি",
			hex: "#F5EFE2"
		},
		charcoal: {
			name: "চারকোল",
			hex: "#2A2A2A"
		},
		emerald: {
			name: "এমারাল্ড",
			hex: "#0F5132"
		},
		blush: {
			name: "ব্লাশ পিংক",
			hex: "#E5B8B0"
		},
		navy: {
			name: "নেভি",
			hex: "#1B2A49"
		},
		silver: {
			name: "সিলভার",
			hex: "#C0C0C0"
		}
	};
	SIZES = [
		"৫৪ x ৮৪ ইঞ্চি",
		"৫৪ x ৯৬ ইঞ্চি",
		"৫৪ x ১০৮ ইঞ্চি",
		"কাস্টম সাইজ"
	];
	rooms = {
		living: "লিভিং রুম",
		bedroom: "বেডরুম",
		drawing: "ড্রয়িং রুম",
		dining: "ডাইনিং",
		office: "অফিস",
		hotel: "হোটেল",
		hospital: "হসপিটাল"
	};
	PRODUCTS = [
		make(1, "royal-velvet-burgundy", "রয়্যাল ভেলভেট বার্গান্ডি পর্দা", "velvet", "গভীর বার্গান্ডি রঙে রাজকীয় ভেলভেট ড্রেপ — লিভিং রুমকে দেবে ৫-স্টার লুক।", 4850, 6200, [
			curtain_detail_default,
			hero_4_default,
			room_drawing_default,
			hero_living_room_default
		], "প্রিমিয়াম বেলজিয়ান ভেলভেট", [
			"burgundy",
			"emerald",
			"charcoal",
			"navy"
		], ["সলিড", "টেক্সচার্ড"], [
			"living",
			"drawing",
			"hotel"
		], {
			isBestSeller: true,
			isFeatured: true,
			rating: 4.9
		}),
		make(2, "modern-blackout-drape", "মডার্ন ব্ল্যাকআউট ড্রেপ", "blackout", "১০০% আলোরোধী — বেডরুমে নিখুঁত ঘুমের জন্য প্রিমিয়াম চয়েস।", 3950, 4800, [
			bedroom_default,
			hero_3_default,
			hero_5_default,
			room_apartment_default
		], "ট্রিপল-লেয়ার ব্ল্যাকআউট", [
			"charcoal",
			"burgundy",
			"ivory",
			"navy"
		], ["সলিড"], ["bedroom", "hotel"], { isBestSeller: true }),
		make(3, "silk-touch-cushion-set", "সিল্ক টাচ কুশন সেট (৫টি)", "cushion", "সিল্ক ফিনিশিং কুশন কভারের ৫টির সেট — গোল্ড ও বার্গান্ডি টোন।", 1850, 2400, [
			cushions_default,
			room_hotel_default,
			hero_3_default
		], "সিল্ক ব্লেন্ড", [
			"gold",
			"burgundy",
			"ivory",
			"blush"
		], ["এমব্রয়ডারি", "সলিড"], [
			"living",
			"bedroom",
			"drawing"
		], { isBestSeller: true }),
		make(4, "premium-window-blind", "প্রিমিয়াম উইন্ডো ব্লাইন্ড", "window-blinds", "মডার্ন অফিস ও এপার্টমেন্টের জন্য প্রিমিয়াম ভেনেশিয়ান ব্লাইন্ড।", 5200, void 0, [
			blinds_default,
			room_office_default,
			room_apartment_default
		], "প্রিমিয়াম অ্যালুমিনিয়াম", [
			"ivory",
			"charcoal",
			"silver"
		], ["হরাইজন্টাল"], ["office", "living"], { isFeatured: true }),
		make(5, "golden-satin-luxury", "গোল্ডেন সাটিন লাক্সারি পর্দা", "satin", "সোনালী শাটিনের চকচকে ফিনিশে ড্রয়িং রুমের রাজকীয় সৌন্দর্য।", 5450, 6800, [
			cat_satin_default,
			hero_2_default,
			room_hotel_default,
			room_drawing_default
		], "প্রিমিয়াম শাটিন সিল্ক", [
			"gold",
			"ivory",
			"blush"
		], ["সলিড"], ["drawing", "hotel"], {
			isNew: true,
			isFeatured: true,
			rating: 4.9
		}),
		make(6, "chinese-embroidery-curtain", "চাইনিজ এমব্রয়ডারি কার্টেন", "chinese", "নিখুঁত হাতে করা এমব্রয়ডারি — ঐতিহ্যবাহী চাইনিজ ডিজাইন।", 4250, 5500, [
			cat_chinese_default,
			hero_2_default,
			hero_5_default
		], "সিল্ক ব্লেন্ড এমব্রয়ডারি", [
			"ivory",
			"gold",
			"blush",
			"emerald"
		], ["এমব্রয়ডারি", "ফ্লোরাল"], ["drawing", "living"], { isNew: true }),
		make(7, "premium-silk-bedsheet", "প্রিমিয়াম সিল্ক বেডশিট", "bedsheet", "সিল্ক ব্লেন্ড বেডশিট সেট — নরম, উষ্ণ ও বিলাসবহুল ঘুমের অভিজ্ঞতা।", 2850, void 0, [
			cat_bedsheet_default,
			bedroom_default,
			hero_3_default
		], "১০০% কটন সিল্ক ব্লেন্ড", [
			"ivory",
			"blush",
			"gold",
			"burgundy"
		], ["সলিড", "প্যাটার্ন"], ["bedroom", "hotel"], { isNew: true }),
		make(8, "universal-sofa-cover", "ইউনিভার্সাল সোফা কভার", "sofa-cover", "যেকোনো সোফায় ফিট করে — প্রিমিয়াম ফেব্রিক ও ইলাস্টিক ফিটিং।", 3150, 3900, [
			cat_sofa_cover_default,
			room_apartment_default,
			hero_3_default
		], "স্ট্রেচেবল প্রিমিয়াম নিট", [
			"charcoal",
			"ivory",
			"burgundy",
			"navy"
		], ["সলিড"], ["living", "drawing"], {}),
		make(9, "emerald-velvet-drape", "এমারাল্ড ভেলভেট ড্রেপ", "velvet", "গভীর এমারাল্ড রঙের ভেলভেট — মডার্ন লাক্সারি ইন্টেরিয়রের জন্য।", 5150, 6500, [
			hero_4_default,
			curtain_detail_default,
			room_hotel_default
		], "প্রিমিয়াম ভেলভেট", [
			"emerald",
			"burgundy",
			"navy"
		], ["সলিড"], [
			"living",
			"drawing",
			"hotel"
		], { isFeatured: true }),
		make(10, "hospital-medical-curtain", "মেডিকেল-গ্রেড হসপিটাল পর্দা", "hospital", "অ্যান্টি-ব্যাকটেরিয়াল ফেব্রিক — হাসপাতাল, ক্লিনিক ও চেম্বারের জন্য।", 2650, void 0, [
			cat_hospital_default,
			room_office_default,
			blinds_default
		], "মেডিকেল-গ্রেড পলিয়েস্টার", [
			"ivory",
			"silver",
			"blush"
		], ["সলিড"], ["hospital", "office"], {}),
		make(11, "ivory-linen-sheer", "আইভরি লিনেন শিয়ার কার্টেন", "home-tex", "নরম লিনেন শিয়ারে প্রাকৃতিক আলোর নরম ছোঁয়া — মিনিমাল ইন্টেরিয়র।", 2450, 3200, [
			hero_3_default,
			hero_5_default,
			hero_living_room_default
		], "ন্যাচারাল লিনেন", [
			"ivory",
			"blush",
			"silver"
		], ["সলিড", "টেক্সচার্ড"], ["living", "bedroom"], { isNew: true }),
		make(12, "foam-memory-cushion", "মেমরি ফোম কুশন কভার সেট", "foam-cover", "মেমরি ফোম কুশন — নরম কিন্তু আকৃতি ধরে রাখে দীর্ঘদিন।", 1450, 1850, [cushions_default, room_apartment_default], "মেমরি ফোম + সিল্ক কভার", [
			"gold",
			"ivory",
			"burgundy",
			"charcoal"
		], ["সলিড", "টেক্সচার্ড"], ["living", "bedroom"], {}),
		make(13, "loose-cover-premium", "প্রিমিয়াম লুজ সোফা কভার", "loose-cover", "সহজে খোলা-লাগানো যায় — ওয়াশেবল প্রিমিয়াম লুজ ফিটিং কভার।", 2950, void 0, [cat_sofa_cover_default, room_drawing_default], "কটন-পলি ব্লেন্ড", [
			"ivory",
			"charcoal",
			"burgundy"
		], ["সলিড"], ["living", "drawing"], {}),
		make(14, "gold-satin-signature", "গোল্ড সাটিন সিগনেচার পর্দা", "satin", "সিগনেচার গোল্ড শাটিন — লাক্সারি ইন্টেরিয়রের আইকনিক পিস।", 5850, 7200, [
			cat_satin_default,
			hero_2_default,
			room_hotel_default
		], "সিগনেচার শাটিন", ["gold", "ivory"], ["সলিড"], ["drawing", "hotel"], {
			isFeatured: true,
			rating: 5
		}),
		make(15, "blackout-charcoal", "চারকোল ব্ল্যাকআউট পর্দা", "blackout", "চারকোল টোনে মডার্ন ব্ল্যাকআউট — হোম থিয়েটার ও বেডরুমের জন্য।", 3650, void 0, [
			bedroom_default,
			hero_3_default,
			room_apartment_default
		], "ট্রিপল-লেয়ার ব্ল্যাকআউট", [
			"charcoal",
			"navy",
			"burgundy"
		], ["সলিড"], ["bedroom", "living"], {}),
		make(16, "chinese-jacquard", "চাইনিজ জ্যাকার্ড কার্টেন", "chinese", "জ্যাকার্ড উইভে ঐতিহ্যবাহী চাইনিজ প্যাটার্ন — প্রিমিয়াম টেক্সচার।", 4650, 5900, [cat_chinese_default, hero_2_default], "জ্যাকার্ড সিল্ক ব্লেন্ড", [
			"gold",
			"burgundy",
			"emerald"
		], ["জ্যাকার্ড", "ফ্লোরাল"], ["drawing", "hotel"], {}),
		make(17, "office-vertical-blind", "অফিস ভার্টিক্যাল ব্লাইন্ড", "window-blinds", "প্রফেশনাল অফিসের জন্য প্রিমিয়াম ভার্টিক্যাল ব্লাইন্ড কালেকশন।", 4850, void 0, [blinds_default, room_office_default], "PVC + ফেব্রিক ব্লেন্ড", [
			"ivory",
			"silver",
			"charcoal"
		], ["ভার্টিক্যাল"], ["office"], {}),
		make(18, "cushion-royal-set", "রয়্যাল ভেলভেট কুশন সেট (৬টি)", "cushion", "৬টি ভেলভেট কুশনের সিগনেচার সেট — গোল্ডেন এমব্রয়ডারি সহ।", 2450, 3200, [
			cushions_default,
			hero_4_default,
			room_drawing_default
		], "ভেলভেট + সিল্ক এমব্রয়ডারি", [
			"burgundy",
			"gold",
			"emerald"
		], ["এমব্রয়ডারি"], [
			"drawing",
			"living",
			"hotel"
		], {
			isFeatured: true,
			isNew: true
		}),
		make(19, "bedsheet-cotton-luxe", "লাক্সারি কটন বেডশিট সেট", "bedsheet", "৪০০ থ্রেড কাউন্ট প্রিমিয়াম কটন — হোটেল-গ্রেড আরাম।", 3250, 4100, [cat_bedsheet_default, bedroom_default], "৪০০ TC ইজিপ্শিয়ান কটন", [
			"ivory",
			"blush",
			"silver"
		], ["সলিড", "প্যাটার্ন"], ["bedroom"], { isBestSeller: true }),
		make(20, "home-tex-modern", "মডার্ন হোম টেক্স পর্দা", "home-tex", "দৈনন্দিন ব্যবহারের জন্য টেকসই ও নরম হোম টেক্সটাইল পর্দা।", 1950, 2500, [
			hero_living_room_default,
			hero_3_default,
			room_apartment_default
		], "হোম টেক্স ব্লেন্ড", [
			"ivory",
			"charcoal",
			"blush",
			"gold"
		], ["সলিড", "টেক্সচার্ড"], ["living", "bedroom"], {}),
		make(21, "velvet-navy-luxury", "নেভি ব্লু ভেলভেট লাক্সারি", "velvet", "গভীর নেভি ব্লু ভেলভেটে কর্পোরেট লাক্সারির অনুভূতি।", 4950, void 0, [hero_4_default, curtain_detail_default], "প্রিমিয়াম ভেলভেট", [
			"navy",
			"charcoal",
			"burgundy"
		], ["সলিড"], ["office", "drawing"], { isNew: true }),
		make(22, "hospital-partition-curtain", "হসপিটাল পার্টিশন পর্দা", "hospital", "হাসপাতাল ওয়ার্ডের পার্টিশনের জন্য ফ্লেম-রিটার্ডেন্ট পর্দা।", 2950, void 0, [cat_hospital_default, room_office_default], "ফ্লেম-রিটার্ডেন্ট পলিয়েস্টার", ["ivory", "silver"], ["সলিড"], ["hospital"], {}),
		make(23, "sofa-cover-stretch", "স্ট্রেচেবল প্রিমিয়াম সোফা কভার", "sofa-cover", "স্ট্রেচেবল ফেব্রিকে ৩+১+১ সোফা সেটের ইউনিভার্সাল ফিট।", 3850, 4900, [cat_sofa_cover_default, room_apartment_default], "স্ট্রেচ নিট", [
			"burgundy",
			"charcoal",
			"ivory",
			"navy"
		], ["সলিড"], ["living"], { isBestSeller: true }),
		make(24, "foam-luxury-cover", "লাক্সারি ফোম কভার সেট", "foam-cover", "মেমরি ফোম ও সিল্ক টাচ — প্রিমিয়াম লাক্সারি কুশন কভার।", 1650, 2200, [cushions_default, hero_3_default], "মেমরি ফোম + সিল্ক", [
			"gold",
			"ivory",
			"blush"
		], ["সলিড", "এমব্রয়ডারি"], ["living", "drawing"], { isNew: true })
	];
	ROOM_PREVIEWS = [
		{
			name: "লিভিং রুম",
			image: room_drawing_default
		},
		{
			name: "বেডরুম",
			image: bedroom_default
		},
		{
			name: "ডাইনিং",
			image: room_apartment_default
		},
		{
			name: "অফিস",
			image: room_office_default
		},
		{
			name: "হোটেল",
			image: room_hotel_default
		},
		{
			name: "হসপিটাল",
			image: cat_hospital_default
		}
	];
	ALL_COLORS = Object.values(COLORS);
	ALL_FABRICS = [
		"ভেলভেট",
		"শাটিন",
		"সিল্ক ব্লেন্ড",
		"কটন",
		"লিনেন",
		"জ্যাকার্ড",
		"ব্ল্যাকআউট",
		"পলিয়েস্টার"
	];
	ALL_PATTERNS = [
		"সলিড",
		"টেক্সচার্ড",
		"এমব্রয়ডারি",
		"ফ্লোরাল",
		"জ্যাকার্ড",
		"প্যাটার্ন"
	];
	ALL_ROOMS = Object.values(rooms);
	getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
	getRelated = (p, n = 4) => PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, n);
	getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);
	productsIn = (slug) => PRODUCTS.filter((p) => p.category === slug);
	REVIEWS_SEED = [
		{
			name: "সাদিয়া রহমান",
			location: "ধানমন্ডি, ঢাকা",
			rating: 5,
			text: "কাপড়ের কোয়ালিটি অসাধারণ! ঘরের লুক পুরোপুরি বদলে গেছে। ডেলিভারিও দ্রুত ছিল।"
		},
		{
			name: "তানভীর আহমেদ",
			location: "গুলশান, ঢাকা",
			rating: 5,
			text: "প্রিমিয়াম ফিনিশিং, দাম ন্যায্য। ChayaLux-এর সার্ভিস সত্যিই লাক্সারি ব্র্যান্ডের মতো।"
		},
		{
			name: "নুসরাত জাহান",
			location: "চট্টগ্রাম",
			rating: 5,
			text: "ভেলভেট কার্টেনটি ছবির চেয়েও সুন্দর। বন্ধুরা এখন সবাই জিজ্ঞেস করে কোথা থেকে নিয়েছি।"
		},
		{
			name: "মাহমুদ হাসান",
			location: "উত্তরা, ঢাকা",
			rating: 5,
			text: "কাস্টম সাইজে বানিয়ে দিয়েছে ঠিক মাপে। ফিটিং একদম পার্ফেক্ট।"
		}
	];
	BN_DIGITS = [
		"০",
		"১",
		"২",
		"৩",
		"৪",
		"৫",
		"৬",
		"৭",
		"৮",
		"৯"
	];
}));
/**
* ChayaLux Shopping Store — client-side (localStorage) providers for
* cart, wishlist, compare, orders, and quick-view/search modal state.
*
* SSR-safe: no localStorage access during render — state hydrates in useEffect.
*/
init_products();
var COUPONS = [
	{
		code: "CHAYA10",
		label: "১০% ছাড় (সর্বোচ্চ)",
		type: "percent",
		value: 10,
		minSubtotal: 3e3
	},
	{
		code: "LUX500",
		label: "৳৫০০ ছাড়",
		type: "flat",
		value: 500,
		minSubtotal: 5e3
	},
	{
		code: "NEW200",
		label: "নতুন কাস্টমার ৳২০০ ছাড়",
		type: "flat",
		value: 200
	}
];
var KEY_CART = "chayalux.cart.v1";
var KEY_WISH = "chayalux.wish.v1";
var KEY_COMPARE = "chayalux.compare.v1";
var KEY_ORDERS = "chayalux.orders.v1";
var KEY_RECENT_SEARCHES = "chayalux.searches.v1";
function readJSON(k, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const v = window.localStorage.getItem(k);
		return v ? JSON.parse(v) : fallback;
	} catch {
		return fallback;
	}
}
function writeJSON(k, v) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(k, JSON.stringify(v));
	} catch {}
}
var ShopContext = (0, import_react.createContext)(null);
function ShopProvider({ children }) {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [cart, setCart] = (0, import_react.useState)([]);
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [compare, setCompare] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [couponCode, setCouponCode] = (0, import_react.useState)(null);
	const [deliveryZone, setDeliveryZone] = (0, import_react.useState)("inside");
	const [quickView, setQuickView] = (0, import_react.useState)(null);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [recentSearches, setRecentSearches] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setCart(readJSON(KEY_CART, []));
		setWishlist(readJSON(KEY_WISH, []));
		setCompare(readJSON(KEY_COMPARE, []));
		setOrders(readJSON(KEY_ORDERS, []));
		setRecentSearches(readJSON(KEY_RECENT_SEARCHES, []));
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeJSON(KEY_CART, cart);
	}, [cart, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeJSON(KEY_WISH, wishlist);
	}, [wishlist, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeJSON(KEY_COMPARE, compare);
	}, [compare, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeJSON(KEY_ORDERS, orders);
	}, [orders, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeJSON(KEY_RECENT_SEARCHES, recentSearches);
	}, [recentSearches, hydrated]);
	const activeCart = (0, import_react.useMemo)(() => cart.filter((c) => !c.savedForLater), [cart]);
	const cartCount = (0, import_react.useMemo)(() => activeCart.reduce((n, i) => n + i.qty, 0), [activeCart]);
	const cartSubtotal = (0, import_react.useMemo)(() => {
		let total = 0;
		for (const it of activeCart) {
			const p = getProduct(findSlugById(it.productId));
			if (p) total += p.price * it.qty;
		}
		return total;
	}, [activeCart]);
	const addToCart = (0, import_react.useCallback)((p, opts = {}) => {
		const prod = typeof p === "string" ? getProduct(p) : p;
		if (!prod) return;
		const color = opts.color ?? prod.colors[0]?.name;
		const size = opts.size ?? prod.sizes[0];
		const qty = Math.max(1, opts.qty ?? 1);
		const key = `${prod.id}::${color ?? ""}::${size ?? ""}`;
		setCart((prev) => {
			const idx = prev.findIndex((x) => x.key === key);
			if (idx >= 0) {
				const next = [...prev];
				next[idx] = {
					...next[idx],
					qty: next[idx].qty + qty,
					savedForLater: false
				};
				return next;
			}
			return [...prev, {
				key,
				productId: prod.id,
				color,
				size,
				qty
			}];
		});
		if (!opts.silent) toast.success("কার্টে যোগ হয়েছে", { description: `${prod.name} — ${bnPrice(prod.price * qty)}` });
	}, []);
	const updateQty = (0, import_react.useCallback)((key, qty) => {
		setCart((prev) => prev.map((x) => x.key === key ? {
			...x,
			qty: Math.max(1, qty)
		} : x));
	}, []);
	const removeFromCart = (0, import_react.useCallback)((key) => {
		setCart((prev) => prev.filter((x) => x.key !== key));
		toast("পণ্যটি সরানো হয়েছে");
	}, []);
	const clearCart = (0, import_react.useCallback)(() => setCart([]), []);
	const saveForLater = (0, import_react.useCallback)((key) => {
		setCart((prev) => prev.map((x) => x.key === key ? {
			...x,
			savedForLater: true
		} : x));
		toast("পরে কেনার জন্য সংরক্ষণ করা হয়েছে");
	}, []);
	const moveToCart = (0, import_react.useCallback)((key) => {
		setCart((prev) => prev.map((x) => x.key === key ? {
			...x,
			savedForLater: false
		} : x));
	}, []);
	const couponDiscount = (0, import_react.useMemo)(() => {
		if (!couponCode) return 0;
		const c = COUPONS.find((x) => x.code === couponCode);
		if (!c) return 0;
		if (c.minSubtotal && cartSubtotal < c.minSubtotal) return 0;
		return c.type === "percent" ? Math.round(cartSubtotal * c.value / 100) : c.value;
	}, [couponCode, cartSubtotal]);
	const applyCoupon = (0, import_react.useCallback)((code) => {
		const c = COUPONS.find((x) => x.code.toUpperCase() === code.trim().toUpperCase());
		if (!c) return {
			ok: false,
			msg: "কুপনটি বৈধ নয়।"
		};
		if (c.minSubtotal && cartSubtotal < c.minSubtotal) return {
			ok: false,
			msg: `এই কুপনের জন্য সর্বনিম্ন ${bnPrice(c.minSubtotal)} প্রয়োজন।`
		};
		setCouponCode(c.code);
		return {
			ok: true,
			msg: `${c.label} প্রয়োগ হয়েছে!`
		};
	}, [cartSubtotal]);
	const removeCoupon = (0, import_react.useCallback)(() => setCouponCode(null), []);
	const deliveryCharge = (0, import_react.useMemo)(() => {
		if (activeCart.length === 0) return 0;
		if (cartSubtotal >= 1e4) return 0;
		return deliveryZone === "inside" ? 80 : 150;
	}, [
		deliveryZone,
		cartSubtotal,
		activeCart.length
	]);
	const cartTotal = Math.max(0, cartSubtotal + deliveryCharge - couponDiscount);
	const toggleWishlist = (0, import_react.useCallback)((id) => {
		setWishlist((prev) => {
			if (prev.includes(id)) {
				toast("উইশলিস্ট থেকে সরানো হয়েছে");
				return prev.filter((x) => x !== id);
			}
			toast.success("উইশলিস্টে যোগ হয়েছে");
			return [...prev, id];
		});
	}, []);
	const isWished = (0, import_react.useCallback)((id) => wishlist.includes(id), [wishlist]);
	const clearWishlist = (0, import_react.useCallback)(() => setWishlist([]), []);
	const toggleCompare = (0, import_react.useCallback)((id) => {
		setCompare((prev) => {
			if (prev.includes(id)) return prev.filter((x) => x !== id);
			if (prev.length >= 3) {
				toast.error("সর্বোচ্চ ৩টি পণ্য তুলনা করা যাবে");
				return prev;
			}
			toast.success("তুলনায় যোগ হয়েছে");
			return [...prev, id];
		});
	}, []);
	const isCompared = (0, import_react.useCallback)((id) => compare.includes(id), [compare]);
	const clearCompare = (0, import_react.useCallback)(() => setCompare([]), []);
	const placeOrder = (0, import_react.useCallback)(({ address, payment }) => {
		const order = {
			id: `CL-${Date.now().toString(36).toUpperCase()}`,
			createdAt: Date.now(),
			items: activeCart,
			subtotal: cartSubtotal,
			delivery: deliveryCharge,
			discount: couponDiscount,
			couponCode: couponCode ?? void 0,
			total: cartTotal,
			address,
			payment,
			status: "received"
		};
		setOrders((prev) => [order, ...prev]);
		setCart((prev) => prev.filter((x) => x.savedForLater));
		setCouponCode(null);
		return order;
	}, [
		activeCart,
		cartSubtotal,
		deliveryCharge,
		couponDiscount,
		couponCode,
		cartTotal
	]);
	const getOrder = (0, import_react.useCallback)((id) => orders.find((o) => o.id === id), [orders]);
	const pushRecentSearch = (0, import_react.useCallback)((q) => {
		const t = q.trim();
		if (!t) return;
		setRecentSearches((prev) => [t, ...prev.filter((x) => x !== t)].slice(0, 6));
	}, []);
	const openQuickView = (0, import_react.useCallback)((p) => setQuickView(p), []);
	const closeQuickView = (0, import_react.useCallback)(() => setQuickView(null), []);
	const value = (0, import_react.useMemo)(() => ({
		hydrated,
		cart: activeCart,
		cartCount,
		cartSubtotal,
		addToCart,
		updateQty,
		removeFromCart,
		clearCart,
		saveForLater,
		moveToCart,
		couponCode,
		couponDiscount,
		applyCoupon,
		removeCoupon,
		deliveryZone,
		setDeliveryZone,
		deliveryCharge,
		cartTotal,
		wishlist,
		wishlistCount: wishlist.length,
		toggleWishlist,
		isWished,
		clearWishlist,
		compare,
		toggleCompare,
		isCompared,
		clearCompare,
		orders,
		placeOrder,
		getOrder,
		quickView,
		openQuickView,
		closeQuickView,
		searchOpen,
		openSearch: () => setSearchOpen(true),
		closeSearch: () => setSearchOpen(false),
		recentSearches,
		pushRecentSearch
	}), [
		hydrated,
		activeCart,
		cartCount,
		cartSubtotal,
		addToCart,
		updateQty,
		removeFromCart,
		clearCart,
		saveForLater,
		moveToCart,
		couponCode,
		couponDiscount,
		applyCoupon,
		removeCoupon,
		deliveryZone,
		deliveryCharge,
		cartTotal,
		wishlist,
		toggleWishlist,
		isWished,
		clearWishlist,
		compare,
		toggleCompare,
		isCompared,
		clearCompare,
		orders,
		placeOrder,
		getOrder,
		quickView,
		openQuickView,
		closeQuickView,
		searchOpen,
		recentSearches,
		pushRecentSearch
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopContext.Provider, {
		value,
		children
	});
}
function useShop() {
	const ctx = (0, import_react.useContext)(ShopContext);
	if (!ctx) throw new Error("useShop must be used inside ShopProvider");
	return ctx;
}
function findSlugById(id) {
	return PRODUCTS.find((x) => x.id === id)?.slug ?? "";
}
var PAYMENT_METHODS = [
	{
		id: "cod",
		label: "ক্যাশ অন ডেলিভারি",
		hint: "পণ্য হাতে পেয়ে পেমেন্ট"
	},
	{
		id: "bkash",
		label: "বিকাশ",
		hint: "01885-901184"
	},
	{
		id: "nagad",
		label: "নগদ",
		hint: "01885-901184"
	},
	{
		id: "rocket",
		label: "রকেট",
		hint: "01885-901184-8"
	},
	{
		id: "bank",
		label: "ব্যাংক ট্রান্সফার",
		hint: "Islami Bank / DBBL"
	}
];
//#endregion
export { promo_banner_default as $, hero_living_room_default as A, init_hero_2 as B, cushions_default as C, hero_3_default as D, hero_2_default as E, init_cat_hospital as F, init_products as G, init_hero_4 as H, init_cat_satin as I, init_room_drawing as J, init_promo_banner as K, init_cat_sofa_cover as L, init_blinds as M, init_cat_bedsheet as N, hero_4_default as O, init_cat_chinese as P, products_exports as Q, init_curtain_detail as R, curtain_detail_default as S, getRelated as T, init_hero_5 as U, init_hero_3 as V, init_hero_living_room as W, init_room_office as X, init_room_hotel as Y, productsIn as Z, cat_bedsheet_default as _, CATEGORIES as a, cat_satin_default as b, PRODUCTS as c, ShopProvider as d, room_apartment_default as et, __toCommonJS as f, bnPrice as g, bnNum as h, ALL_ROOMS as i, useShop as it, init_bedroom as j, hero_5_default as k, REVIEWS_SEED as l, blinds_default as m, ALL_FABRICS as n, room_hotel_default as nt, IMAGES as o, bedroom_default as p, init_room_apartment as q, ALL_PATTERNS as r, room_office_default as rt, PAYMENT_METHODS as s, ALL_COLORS as t, room_drawing_default as tt, ROOM_PREVIEWS as u, cat_chinese_default as v, getProduct as w, cat_sofa_cover_default as x, cat_hospital_default as y, init_cushions as z };
