import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, g as bnPrice, h as bnNum, it as useShop, w as getProduct } from "./store-CteU02vO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { A as Minus, a as Truck, f as ShoppingBag, l as Tag, lt as ArrowRight, rt as Check, s as Trash2, w as Plus } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as EmptyState } from "./EmptyState-dtZSkf-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-Dom-bThu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_products();
function slugOf(id) {
	return PRODUCTS.find((p) => p.id === id)?.slug ?? "";
}
function CartPage() {
	const { cart, hydrated, updateQty, removeFromCart, saveForLater, cartSubtotal, cartTotal, couponCode, couponDiscount, applyCoupon, removeCoupon, deliveryZone, setDeliveryZone, deliveryCharge, cartCount } = useShop();
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [couponMsg, setCouponMsg] = (0, import_react.useState)(null);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container-luxury py-20" }) });
	if (cart.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxury py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: ShoppingBag,
			title: "আপনার কার্ট এখনো খালি",
			description: "ChayaLux-এর প্রিমিয়াম পর্দা, কুশন ও হোম ডেকোর কালেকশন থেকে পছন্দের পণ্য যোগ করুন।",
			action: {
				label: "শপিং শুরু করুন",
				to: "/shop"
			}
		})
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxury py-10 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "heading-display text-3xl sm:text-4xl",
				children: "আপনার কার্ট"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [
					"মোট ",
					bnNum(cartCount),
					"টি পণ্য কার্টে আছে।"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1fr_380px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [cart.map((it, i) => {
					const p = getProduct(slugOf(it.productId));
					if (!p) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							delay: i * .04
						},
						className: "grid grid-cols-[100px_1fr] gap-4 rounded-[22px] border border-border/60 bg-card p-4 shadow-soft-lux sm:grid-cols-[140px_1fr] md:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: p.slug },
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[0],
								alt: p.name,
								className: "aspect-square h-full w-full rounded-[16px] object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-semibold uppercase tracking-widest text-gold",
												children: p.categoryName
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/product/$slug",
												params: { slug: p.slug },
												className: "line-clamp-2 font-display text-base font-semibold hover:text-primary",
												children: p.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 text-[11px] text-muted-foreground",
												children: ["ফেব্রিক: ", p.fabric]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => removeFromCart(it.key),
										"aria-label": "সরান",
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
									children: [it.color && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-muted px-2.5 py-1",
										children: ["রঙ: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: it.color
										})]
									}), it.size && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-muted px-2.5 py-1",
										children: ["সাইজ: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: it.size
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex items-center justify-between gap-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex h-11 items-center gap-1 rounded-[14px] border border-border bg-background px-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => updateQty(it.key, it.qty - 1),
												className: "grid h-8 w-8 place-items-center rounded-[10px] hover:bg-primary-soft hover:text-primary",
												"aria-label": "কমান",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid w-8 place-items-center text-sm font-semibold",
												children: bnNum(it.qty)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => updateQty(it.key, it.qty + 1),
												className: "grid h-8 w-8 place-items-center rounded-[10px] hover:bg-primary-soft hover:text-primary",
												"aria-label": "বাড়ান",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-lg font-bold text-primary",
											children: bnPrice(p.price * it.qty)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => saveForLater(it.key),
											className: "mt-0.5 text-[11px] text-muted-foreground underline-offset-4 hover:text-primary hover:underline",
											children: "পরে কেনার জন্য রাখুন"
										})]
									})]
								})
							]
						})]
					}, it.key);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline",
					children: "← আরো পণ্য দেখুন"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:sticky lg:top-28 h-fit space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "অর্ডার সামারি"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "সাবটোটাল",
									value: bnPrice(cartSubtotal)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1.5 flex items-center gap-2 text-xs font-semibold text-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { size: 13 }), " ডেলিভারি এলাকা"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-2",
									children: ["inside", "outside"].map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setDeliveryZone(z),
										className: `rounded-[12px] border px-3 py-2 text-xs font-medium transition ${deliveryZone === z ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`,
										children: z === "inside" ? "ঢাকার ভিতরে" : "ঢাকার বাইরে"
									}, z))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "ডেলিভারি চার্জ",
									value: deliveryCharge === 0 ? "ফ্রি" : bnPrice(deliveryCharge)
								}),
								couponDiscount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: `ছাড় (${couponCode})`,
									value: `-${bnPrice(couponDiscount)}`,
									accent: "text-emerald-700"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-[14px] border border-dashed border-primary/30 bg-primary-soft/40 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center gap-2 text-xs font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { size: 13 }), " কুপন কোড"]
								}),
								couponCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-[10px] bg-background px-3 py-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 font-semibold text-emerald-700",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 13 }),
											" ",
											couponCode,
											" প্রয়োগ হয়েছে"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											removeCoupon();
											setCouponMsg(null);
										},
										className: "text-muted-foreground hover:text-destructive",
										children: "সরান"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: coupon,
										onChange: (e) => setCoupon(e.target.value.toUpperCase()),
										placeholder: "CHAYA10",
										className: "flex-1 rounded-[10px] border border-border bg-background px-3 py-2 text-xs uppercase outline-none focus:border-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setCouponMsg(applyCoupon(coupon)),
										className: "rounded-[10px] bg-primary px-4 text-xs font-medium text-primary-foreground hover:bg-dark",
										children: "প্রয়োগ"
									})]
								}),
								couponMsg && !couponCode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-2 text-[11px] ${couponMsg.ok ? "text-emerald-700" : "text-destructive"}`,
									children: couponMsg.msg
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[10px] text-muted-foreground",
									children: "চেষ্টা করুন: CHAYA10, LUX500, NEW200"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: "সর্বমোট"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-bold text-primary",
								children: bnPrice(cartTotal)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							className: "mt-4 block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
								variant: "primary",
								size: "lg",
								className: "w-full",
								children: ["চেকআউটে যান ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[16px] bg-primary-soft/40 p-4 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ ১০০% কালার গ্যারান্টি — রং জ্বলবে না" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ ক্যাশ অন ডেলিভারি সারা বাংলাদেশে" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ প্রয়োজন হলে ৭ দিনের মধ্যে সহজ রিটার্ন" })
					]
				})]
			})]
		})]
	}) });
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-medium ${accent ?? "text-foreground"}`,
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
