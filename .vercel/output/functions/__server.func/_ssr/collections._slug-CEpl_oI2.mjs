import { G as init_products, a as CATEGORIES, o as IMAGES } from "./store-CteU02vO.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-CEpl_oI2.js
init_products();
var $$splitComponentImporter = () => import("./collections._slug-CC0w488Y.mjs");
var Route = createFileRoute("/collections/$slug")({
	head: ({ params }) => {
		const cat = CATEGORIES.find((c) => c.slug === params.slug);
		const title = cat ? `${cat.name} — ChayaLux` : "কালেকশন — ChayaLux";
		return { meta: [
			{ title },
			{
				name: "description",
				content: cat?.description ?? "ChayaLux প্রিমিয়াম কালেকশন।"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: cat?.description ?? ""
			},
			{
				property: "og:image",
				content: cat?.banner ?? IMAGES.heroImg
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
