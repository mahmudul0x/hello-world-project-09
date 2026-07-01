import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, g as bnPrice, h as bnNum, it as useShop } from "./store-CteU02vO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Package } from "../_libs/lucide-react.mjs";
import { t as EmptyState } from "./EmptyState-dtZSkf-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.orders-DkBy8S1m.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function OrdersPage() {
	const { orders } = useShop();
	if (orders.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: Package,
		title: "কোনো অর্ডার নেই",
		description: "আপনার প্রথম অর্ডার দিয়ে ChayaLux পরিবারে স্বাগত হন।",
		action: {
			label: "শপে যান",
			to: "/shop"
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "heading-display text-2xl",
			children: "আমার অর্ডার"
		}), orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[18px] border border-border/60 bg-card p-5 shadow-soft-lux",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: "অর্ডার"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-bold text-primary",
						children: o.id
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: new Date(o.createdAt).toLocaleString("en-GB") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-emerald-700",
							children: o.status
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-center gap-3",
					children: [o.items.slice(0, 4).map((it) => {
						const p = PRODUCTS.find((x) => x.id === it.productId);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-[10px] bg-muted/40 p-2 pr-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[0],
								alt: "",
								className: "h-10 w-10 rounded-[8px] object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "line-clamp-1 font-semibold",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-muted-foreground",
									children: ["× ", bnNum(it.qty)]
								})]
							})]
						}, it.key);
					}), o.items.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground",
						children: [
							"+",
							bnNum(o.items.length - 4),
							" আরো"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between border-t border-border pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg font-bold text-primary",
						children: bnPrice(o.total)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/order-tracking/$id",
						params: { id: o.id },
						className: "rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-dark",
						children: "ট্র্যাক করুন"
					})]
				})
			]
		}, o.id))]
	});
}
//#endregion
export { OrdersPage as component };
