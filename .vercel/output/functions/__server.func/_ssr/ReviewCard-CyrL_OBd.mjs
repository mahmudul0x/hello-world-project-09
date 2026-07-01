import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { C as Quote, u as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ReviewCard-CyrL_OBd.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewCard({ review, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .5,
			delay: index * .08
		},
		className: "relative flex h-full flex-col gap-5 rounded-[22px] bg-card p-8 shadow-soft-lux hover-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
				className: "absolute right-6 top-6 text-gold/25",
				size: 40
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-0.5 text-gold",
				children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					size: 15,
					fill: i < review.rating ? "currentColor" : "none",
					strokeWidth: 1.5
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base leading-relaxed text-foreground/85",
				children: [
					"\"",
					review.text,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center gap-3 border-t border-border pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-display font-semibold text-primary",
					children: review.name.charAt(0)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium text-foreground",
					children: review.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: review.location
				})] })]
			})
		]
	});
}
//#endregion
export { ReviewCard as t };
