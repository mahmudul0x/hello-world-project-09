import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, o as IMAGES } from "./store-CteU02vO.mjs";
import { t as ShopListing } from "./ShopListing-_sDOODmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/best-sellers-MKx2diiz.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopListing, {
	eyebrow: "বেস্ট সেলার",
	title: "সবচেয়ে জনপ্রিয় পণ্য",
	description: "৫০০০+ পরিবারের বাড়িতে জায়গা করে নেওয়া ChayaLux-এর টপ পিকস।",
	bannerImage: IMAGES.curtainImg,
	products: PRODUCTS.filter((p) => p.isBestSeller)
});
//#endregion
export { SplitComponent as component };
