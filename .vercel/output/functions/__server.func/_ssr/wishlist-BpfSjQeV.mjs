import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, g as bnPrice, it as useShop } from "./store-CteU02vO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { H as Heart, f as ShoppingBag, s as Trash2 } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as EmptyState } from "./EmptyState-dtZSkf-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-BpfSjQeV.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function WishlistPage() {
	const { wishlist, hydrated, toggleWishlist, addToCart, clearWishlist } = useShop();
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container-luxury py-20" }) });
	const items = wishlist.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxury py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Heart,
			title: "উইশলিস্ট এখনো খালি",
			description: "পছন্দের পণ্যে ❤️ চাপুন — এখানে সংরক্ষণ হয়ে থাকবে।",
			action: {
				label: "শপ ঘুরে দেখুন",
				to: "/shop"
			}
		})
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxury py-10 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "heading-display text-3xl sm:text-4xl",
				children: "আমার উইশলিস্ট"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [items.length, "টি পণ্য সংরক্ষিত।"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: clearWishlist,
				className: "hidden text-xs text-muted-foreground underline-offset-4 hover:text-destructive hover:underline sm:inline-block",
				children: "সব মুছুন"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4",
			children: items.map((p, i) => p && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .4,
					delay: i * .04
				},
				className: "group flex flex-col overflow-hidden rounded-[22px] border border-border/60 bg-card shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: p.slug },
					className: "relative block aspect-[4/5] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.images[0],
						alt: p.name,
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.preventDefault();
							toggleWishlist(p.id);
						},
						"aria-label": "সরান",
						className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/95 text-destructive shadow-soft-lux transition hover:bg-destructive hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 14 })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col gap-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold uppercase tracking-widest text-gold",
							children: p.categoryName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: p.slug },
							className: "line-clamp-2 min-h-[2.6rem] font-display text-sm font-semibold hover:text-primary",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-bold text-primary",
							children: bnPrice(p.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
							variant: "primary",
							size: "sm",
							className: "mt-2 w-full text-xs",
							onClick: () => addToCart(p),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 13 }), " কার্টে যোগ করুন"]
						})
					]
				})]
			}, p.id))
		})]
	}) });
}
//#endregion
export { WishlistPage as component };
