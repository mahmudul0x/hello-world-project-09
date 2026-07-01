import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-tracking._id-BIBrsTQU.js
var $$splitComponentImporter = () => import("./order-tracking._id-DedTl3Hl.mjs");
var Route = createFileRoute("/order-tracking/$id")({
	head: ({ params }) => ({ meta: [{ title: `অর্ডার ট্র্যাকিং ${params.id} — ChayaLux` }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
