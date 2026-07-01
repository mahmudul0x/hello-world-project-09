import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EmptyState-dtZSkf-p.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ icon: Icon, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "mx-auto flex max-w-md flex-col items-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .6,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: {
					delay: .1,
					type: "spring",
					damping: 12
				},
				className: "relative mb-6 grid h-28 w-28 place-items-center rounded-full bg-primary-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-pulse rounded-full bg-primary-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 44,
					className: "relative text-primary"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "heading-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-muted-foreground",
				children: description
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: action.to,
				className: "ripple-btn mt-6 inline-flex h-12 items-center justify-center rounded-[16px] bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:bg-dark",
				children: action.label
			})
		]
	});
}
//#endregion
export { EmptyState as t };
