import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, g as bnPrice, it as useShop } from "./store-CteU02vO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Heart, f as ShoppingBag, s as Trash2 } from "../_libs/lucide-react.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as EmptyState } from "./EmptyState-dtZSkf-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.wishlist-BzD5XigJ.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function AccountWishlist() {
	const { wishlist, toggleWishlist, addToCart } = useShop();
	const items = wishlist.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: Heart,
		title: "উইশলিস্ট এখনো খালি",
		description: "পছন্দের পণ্য সংরক্ষণ করুন — পরে সহজে কার্টে যোগ করতে পারবেন।",
		action: {
			label: "শপে যান",
			to: "/shop"
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "heading-display mb-6 text-2xl",
		children: [
			"উইশলিস্ট (",
			items.length,
			")"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-4 sm:grid-cols-3",
		children: items.map((p) => p && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group flex flex-col overflow-hidden rounded-[18px] border border-border/60 bg-card shadow-soft-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$slug",
				params: { slug: p.slug },
				className: "relative block aspect-[4/5] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.images[0],
					alt: p.name,
					className: "h-full w-full object-cover transition group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.preventDefault();
						toggleWishlist(p.id);
					},
					className: "absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-background/95 text-destructive shadow-soft-lux hover:bg-destructive hover:text-white",
					"aria-label": "সরান",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 13 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col gap-1.5 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						className: "line-clamp-2 text-xs font-semibold hover:text-primary",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-sm font-bold text-primary",
						children: bnPrice(p.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
						variant: "primary",
						size: "sm",
						className: "mt-1 w-full text-[11px]",
						onClick: () => addToCart(p),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 12 }), " কার্টে"]
					})
				]
			})]
		}, p.id))
	})] });
}
//#endregion
export { AccountWishlist as component };
