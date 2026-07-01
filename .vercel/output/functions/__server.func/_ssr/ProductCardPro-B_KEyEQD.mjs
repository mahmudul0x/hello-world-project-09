import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, g as bnPrice, it as useShop } from "./store-CteU02vO.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { H as Heart, W as GitCompare, f as ShoppingBag, q as Eye, u as Star } from "../_libs/lucide-react.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCardPro-B_KEyEQD.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function ProductCardPro({ product, onQuickView, index = 0 }) {
	const { addToCart, toggleWishlist, isWished, toggleCompare, isCompared, openQuickView } = useShop();
	const wish = isWished(product.id);
	const comparing = isCompared(product.id);
	const handleQuickView = onQuickView ?? openQuickView;
	const discount = product.oldPrice ? Math.round((product.oldPrice - product.price) / product.oldPrice * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
			delay: index % 8 * .05,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-border/60 bg-card shadow-soft-lux transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-float",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "image-zoom relative block aspect-[4/5] overflow-hidden bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.images[0],
					alt: product.name,
					loading: "lazy",
					className: "h-full w-full object-cover"
				}),
				product.images[1] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.images[1],
					alt: "",
					"aria-hidden": true,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-3 top-3 flex flex-col gap-1.5",
					children: [
						discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft-lux",
							children: [
								"-",
								discount,
								"%"
							]
						}),
						product.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-dark px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background",
							children: "নতুন"
						}),
						product.isBestSeller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-dark",
							children: "বেস্ট"
						}),
						!product.inStock && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
							children: "স্টক আউট"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-3 top-3 flex flex-col gap-2 opacity-100 transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "উইশলিস্ট",
							onClick: (e) => {
								e.preventDefault();
								toggleWishlist(product.id);
							},
							className: cn("grid h-9 w-9 place-items-center rounded-full bg-background/95 shadow-soft-lux backdrop-blur transition hover:bg-primary hover:text-primary-foreground", wish && "bg-primary text-primary-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 15,
								fill: wish ? "currentColor" : "none"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "কুইক ভিউ",
							onClick: (e) => {
								e.preventDefault();
								handleQuickView(product);
							},
							className: "grid h-9 w-9 place-items-center rounded-full bg-background/95 text-foreground shadow-soft-lux backdrop-blur transition hover:bg-dark hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "তুলনা",
							onClick: (e) => {
								e.preventDefault();
								toggleCompare(product.id);
							},
							className: cn("grid h-9 w-9 place-items-center rounded-full bg-background/95 text-foreground shadow-soft-lux backdrop-blur transition hover:bg-gold hover:text-dark", comparing && "bg-gold text-dark"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { size: 14 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: (e) => {
							e.preventDefault();
							addToCart(product);
						},
						className: "ripple-btn flex h-11 w-full items-center justify-center gap-2 rounded-[14px] bg-dark text-xs font-medium text-background transition hover:bg-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 14 }), " কার্টে যোগ করুন"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-medium uppercase tracking-widest text-gold",
						children: product.categoryName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-0.5 text-[11px] font-medium text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 11,
								className: "fill-gold text-gold"
							}),
							product.rating.toFixed(1),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "opacity-60",
								children: [
									"(",
									product.reviews,
									")"
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "line-clamp-2 min-h-[2.6rem] font-display text-[15px] font-semibold leading-tight text-foreground transition hover:text-primary",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 min-h-[2.4rem] text-xs leading-relaxed text-muted-foreground",
					children: product.shortDesc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 pt-0.5",
					children: [product.colors.slice(0, 4).map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						title: col.name,
						className: "h-3.5 w-3.5 rounded-full border border-border shadow-soft-lux",
						style: { background: col.hex }
					}, col.name)), product.colors.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] text-muted-foreground",
						children: ["+", product.colors.length - 4]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto flex items-end justify-between gap-2 pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold text-primary",
							children: bnPrice(product.price)
						}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 text-xs text-muted-foreground line-through",
							children: bnPrice(product.oldPrice)
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
						variant: "outline",
						size: "sm",
						className: "w-full text-xs",
						onClick: (e) => {
							e.preventDefault();
							addToCart(product);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 13 }), " কার্ট"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
						variant: "primary",
						size: "sm",
						className: "w-full text-xs",
						onClick: (e) => {
							e.preventDefault();
							addToCart(product);
							window.location.href = "/checkout";
						},
						children: "অর্ডার করুন"
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCardPro as t };
