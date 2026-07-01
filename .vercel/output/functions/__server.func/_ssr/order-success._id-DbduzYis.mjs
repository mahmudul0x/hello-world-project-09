import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-success._id-DbduzYis.js
var $$splitComponentImporter = () => import("./order-success._id-DrYQUQg_.mjs");
var Route = createFileRoute("/order-success/$id")({
	head: ({ params }) => ({ meta: [{ title: `অর্ডার ${params.id} — সফল — ChayaLux` }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
