import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, g as bnPrice, h as bnNum, it as useShop, s as PAYMENT_METHODS } from "./store-CteU02vO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { D as Package, N as MapPin, T as Phone, dt as Sparkles, lt as ArrowRight, rt as Check } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as Route } from "./order-success._id-DbduzYis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-success._id-DrYQUQg_.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function SuccessPage() {
	const { id } = Route.useParams();
	const { getOrder, hydrated } = useShop();
	const order = getOrder(id);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container-luxury py-20" }) });
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxury py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "heading-display text-3xl",
			children: "অর্ডার পাওয়া যায়নি"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-4 inline-block text-primary underline",
			children: "হোমে ফিরুন"
		})]
	}) });
	const paymentLabel = PAYMENT_METHODS.find((p) => p.id === order.payment)?.label ?? order.payment;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .7,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto mb-8 h-40 w-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { scale: 0 },
							animate: { scale: 1 },
							transition: {
								delay: .2,
								type: "spring",
								damping: 12
							},
							className: "absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary to-dark shadow-luxury"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								scale: 0,
								rotate: -180
							},
							animate: {
								scale: 1,
								rotate: 0
							},
							transition: {
								delay: .5,
								type: "spring",
								damping: 10
							},
							className: "absolute inset-0 grid place-items-center text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 64,
								strokeWidth: 3
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							animate: { rotate: 360 },
							transition: {
								duration: 8,
								repeat: Infinity,
								ease: "linear"
							},
							className: "absolute -inset-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 24,
									className: "absolute left-0 top-1/2 -translate-y-1/2 text-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 20,
									className: "absolute right-0 top-1/4 text-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 18,
									className: "absolute bottom-0 left-1/3 text-gold"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .7 },
					className: "heading-display text-4xl sm:text-5xl",
					children: "ধন্যবাদ!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base text-muted-foreground",
					children: "আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-[22px] border border-border/60 bg-card p-6 text-left shadow-soft-lux",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center justify-between border-b border-border pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: "অর্ডার নম্বর"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-bold text-primary",
							children: order.id
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
								children: "মোট"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-bold",
								children: bnPrice(order.total)
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 text-sm sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoRow, {
								icon: MapPin,
								label: "ডেলিভারি ঠিকানা",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									order.address.name,
									" — ",
									order.address.phone
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-muted-foreground",
									children: [
										order.address.address,
										", ",
										order.address.upazila,
										", ",
										order.address.district
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoRow, {
								icon: Package,
								label: "পণ্য সংখ্যা",
								children: [bnNum(order.items.reduce((n, i) => n + i.qty, 0)), "টি পণ্য"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: Phone,
								label: "পেমেন্ট মেথড",
								children: paymentLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: Sparkles,
								label: "ডেলিভারি সময়",
								children: "৩-৫ কর্মদিবস"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/order-tracking/$id",
						params: { id: order.id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
							variant: "primary",
							size: "lg",
							className: "w-full sm:w-auto",
							children: ["অর্ডার ট্র্যাক করুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
							variant: "outline",
							size: "lg",
							className: "w-full sm:w-auto",
							children: "শপিং চালিয়ে যান"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xs text-muted-foreground",
					children: [
						"যেকোনো প্রশ্নে আমাদের কল করুন:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:01885901184",
							className: "font-semibold text-primary",
							children: "01885-901184"
						})
					]
				})
			]
		})
	}) });
}
function InfoRow({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 15 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs",
				children
			})]
		})]
	});
}
//#endregion
export { SuccessPage as component };
