import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, Z as productsIn, a as CATEGORIES, o as IMAGES } from "./store-CteU02vO.mjs";
import { t as ShopListing } from "./ShopListing-BfCSTSrn.mjs";
import { t as Route } from "./collections._slug-CEpl_oI2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-CC0w488Y.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function CollectionPage() {
	const { slug } = Route.useParams();
	const cat = CATEGORIES.find((c) => c.slug === slug);
	if (!cat) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopListing, {
		title: "কালেকশন পাওয়া যায়নি",
		description: "আপনি যে কালেকশন খুঁজছেন সেটি আর নেই — নিচে আমাদের সব পণ্য দেখুন।",
		bannerImage: IMAGES.heroImg,
		products: []
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopListing, {
		eyebrow: "কালেকশন",
		title: cat.name,
		description: cat.description,
		bannerImage: cat.banner,
		products: productsIn(slug),
		lockedFilter: { categories: [slug] }
	});
}
//#endregion
export { CollectionPage as component };
