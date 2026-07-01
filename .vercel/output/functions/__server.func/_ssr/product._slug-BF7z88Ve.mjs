import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BF7z88Ve.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-luxury py-32 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "heading-display text-4xl",
			children: "পণ্যটি পাওয়া যায়নি"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted-foreground",
			children: "এই পণ্যটি আর নেই বা লিংকটি ভুল।"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
					variant: "primary",
					size: "lg",
					children: "সব পণ্য দেখুন"
				})
			})
		})
	]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
