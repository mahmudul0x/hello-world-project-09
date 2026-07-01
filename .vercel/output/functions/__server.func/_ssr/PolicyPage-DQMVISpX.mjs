import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as IMG } from "./content-DZlQVS3P.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as PageHero } from "./PageHero-DxeBJMjt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PolicyPage-DQMVISpX.js
var import_jsx_runtime = require_jsx_runtime();
function PolicyPage({ eyebrow, title, description, image, updated, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow,
		title,
		description,
		image: image ?? IMG.hero4
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [updated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 rounded-[14px] border border-gold/30 bg-gold-soft/60 px-4 py-3 text-xs text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-semibold",
						children: "সর্বশেষ আপডেট:"
					}),
					" ",
					updated
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "policy-prose space-y-6 text-[15px] leading-relaxed text-foreground/85",
				children
			})]
		})
	})] });
}
//#endregion
export { PolicyPage as t };
