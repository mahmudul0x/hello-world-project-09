import { t as BLOGS } from "./content-DZlQVS3P.mjs";
import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DHCmK7rH.js
var $$splitComponentImporter = () => import("./blog._slug-CKEnG6ir.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-Dr7jlcst.mjs");
var Route = createFileRoute("/blog/$slug")({
	head: ({ params }) => {
		const b = BLOGS.find((x) => x.slug === params.slug);
		return { meta: [
			{ title: b ? `${b.title} — ChayaLux ব্লগ` : "ব্লগ — ChayaLux" },
			{
				name: "description",
				content: b?.excerpt ?? "ChayaLux ব্লগ"
			},
			{
				property: "og:title",
				content: b?.title ?? "ChayaLux ব্লগ"
			},
			{
				property: "og:description",
				content: b?.excerpt ?? ""
			},
			...b?.image ? [{
				property: "og:image",
				content: b.image
			}] : []
		] };
	},
	loader: ({ params }) => {
		if (!BLOGS.find((x) => x.slug === params.slug)) throw notFound();
		return null;
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
