import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-DXXrm9FX.js
var $$splitComponentImporter = () => import("./search-VYzPTlHq.mjs");
var searchSchema = objectType({ q: stringType().optional() });
var Route = createFileRoute("/search")({
	validateSearch: (s) => searchSchema.parse(s),
	head: () => ({ meta: [{ title: "খুঁজুন — ChayaLux" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
