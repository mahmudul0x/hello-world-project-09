import { G as init_products, w as getProduct } from "./store-CteU02vO.mjs";
import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-DYBh6GLG.js
init_products();
var $$splitComponentImporter = () => import("./product._slug-Cb-r2rd2.mjs");
var $$splitNotFoundComponentImporter = () => import("./product._slug-DQG1-bNd.mjs");
var Route = createFileRoute("/product/$slug")({
	head: ({ params }) => {
		const p = getProduct(params.slug);
		const title = p ? `${p.name} — ChayaLux` : "পণ্য — ChayaLux";
		return { meta: [
			{ title },
			{
				name: "description",
				content: p?.shortDesc ?? "ChayaLux প্রিমিয়াম পণ্য।"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: p?.shortDesc ?? ""
			},
			...p?.images[0] ? [{
				property: "og:image",
				content: p.images[0]
			}] : []
		] };
	},
	loader: ({ params }) => {
		if (!getProduct(params.slug)) throw notFound();
		return null;
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
