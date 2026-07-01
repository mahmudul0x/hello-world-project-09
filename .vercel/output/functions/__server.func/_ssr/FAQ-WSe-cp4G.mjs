import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { w as Plus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQ-WSe-cp4G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FAQ({ items }) {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto flex max-w-3xl flex-col gap-3",
		children: items.map((item, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `overflow-hidden rounded-[22px] border transition ${isOpen ? "border-primary/40 bg-card shadow-soft-lux" : "border-border bg-card/60"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(isOpen ? null : i),
					className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base font-semibold text-foreground sm:text-lg",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-muted text-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					initial: false,
					children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						transition: {
							duration: .3,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-6 pb-6 text-sm leading-relaxed text-muted-foreground",
							children: item.a
						})
					})
				})]
			}, i);
		})
	});
}
//#endregion
export { FAQ as t };
