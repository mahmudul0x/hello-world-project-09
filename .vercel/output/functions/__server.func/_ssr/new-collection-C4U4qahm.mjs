import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, o as IMAGES } from "./store-CteU02vO.mjs";
import { t as ShopListing } from "./ShopListing-BfCSTSrn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-collection-C4U4qahm.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopListing, {
	eyebrow: "নতুন কালেকশন ২০২৬",
	title: "নতুন সিজনের এক্সক্লুসিভ ডিজাইন",
	description: "এইমাত্র লঞ্চ হওয়া প্রিমিয়াম কালেকশন — সীমিত স্টক, আন্তর্জাতিক ডিজাইন।",
	bannerImage: IMAGES.hero2,
	products: PRODUCTS.filter((p) => p.isNew || p.isFeatured)
});
//#endregion
export { SplitComponent as component };
