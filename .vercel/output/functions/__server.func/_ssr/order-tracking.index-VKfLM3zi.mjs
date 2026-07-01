import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Package, _ as Search } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-tracking.index-VKfLM3zi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackingEntry() {
	const [id, setId] = (0, import_react.useState)("");
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-luxury",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 26 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "heading-display text-3xl sm:text-4xl",
					children: "অর্ডার ট্র্যাক করুন"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "আপনার অর্ডার নম্বর দিয়ে বর্তমান স্ট্যাটাস দেখুন।"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						if (id.trim()) navigate({
							to: "/order-tracking/$id",
							params: { id: id.trim() }
						});
					},
					className: "mt-8 flex gap-2 rounded-[18px] border border-border/60 bg-card p-2 shadow-soft-lux",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 items-center gap-2 px-3 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: id,
							onChange: (e) => setId(e.target.value),
							placeholder: "যেমন: CL-XXXXX",
							className: "h-11 flex-1 bg-transparent text-sm outline-none"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
						variant: "primary",
						size: "md",
						type: "submit",
						children: "ট্র্যাক করুন"
					})]
				})
			]
		})
	}) });
}
//#endregion
export { TrackingEntry as component };
