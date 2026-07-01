import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, o as IMAGES } from "./store-CteU02vO.mjs";
import { t as ShopListing } from "./ShopListing-BfCSTSrn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-arrivals-Cmdk1bD5.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopListing, {
	eyebrow: "নতুন আগমন",
	title: "এইমাত্র এসেছে",
	description: "ChayaLux-এর সর্বশেষ যোগ হওয়া প্রিমিয়াম কালেকশন — নতুন ডিজাইন, নতুন অনুভূতি।",
	bannerImage: IMAGES.hero5,
	products: PRODUCTS.filter((p) => p.isNew)
});
//#endregion
export { SplitComponent as component };
