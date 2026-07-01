import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, o as IMAGES } from "./store-CteU02vO.mjs";
import { t as ShopListing } from "./ShopListing-_sDOODmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-D2Xe99fz.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopListing, {
	eyebrow: "সব পণ্য",
	title: "সম্পূর্ণ কালেকশন",
	description: "ChayaLux-এর সবগুলো প্রিমিয়াম পণ্য এক জায়গায় — কার্টেন থেকে হোম ডেকোর, সবকিছুতে আন্তর্জাতিক মান।",
	bannerImage: IMAGES.heroImg,
	products: PRODUCTS
});
//#endregion
export { SplitComponent as component };
