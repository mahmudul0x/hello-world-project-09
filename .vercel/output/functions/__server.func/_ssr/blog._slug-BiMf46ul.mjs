import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BiMf46ul.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-luxury py-32 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "heading-display text-4xl",
		children: "আর্টিকেল পাওয়া যায়নি"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/blog",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
				variant: "primary",
				size: "lg",
				children: "সব ব্লগ দেখুন"
			})
		})
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
