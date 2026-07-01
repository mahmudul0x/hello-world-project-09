import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, o as IMAGES } from "./store-CteU02vO.mjs";
import { t as ShopListing } from "./ShopListing-_sDOODmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offers-DsFirRiy.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopListing, {
	eyebrow: "বিশেষ অফার",
	title: "সেরা ডিল ও ছাড়",
	description: "সীমিত সময়ের জন্য প্রিমিয়াম কালেকশনে ৩০% পর্যন্ত ছাড় — স্টক থাকতে অর্ডার করুন।",
	bannerImage: IMAGES.promoBanner,
	products: PRODUCTS.filter((p) => p.oldPrice && p.oldPrice > p.price),
	lockedFilter: { discountOnly: true }
});
//#endregion
export { SplitComponent as component };
