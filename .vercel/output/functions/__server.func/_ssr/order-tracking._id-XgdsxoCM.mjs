import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, g as bnPrice, h as bnNum, it as useShop, s as PAYMENT_METHODS, w as getProduct } from "./store-CteU02vO.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { D as Package, N as MapPin, Q as Clock, T as Phone, _ as Search, a as Truck, ht as CircleCheck, k as PackageCheck, pt as House } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as Route } from "./order-tracking._id-CmmbpQ3d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-tracking._id-XgdsxoCM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_products();
var STEPS = [
	{
		key: "received",
		label: "অর্ডার গৃহীত",
		icon: Package
	},
	{
		key: "confirmed",
		label: "নিশ্চিত হয়েছে",
		icon: CircleCheck
	},
	{
		key: "processing",
		label: "প্রস্তুত হচ্ছে",
		icon: Clock
	},
	{
		key: "shipped",
		label: "শিপ করা হয়েছে",
		icon: Truck
	},
	{
		key: "out_for_delivery",
		label: "ডেলিভারিতে বেরিয়েছে",
		icon: MapPin
	},
	{
		key: "delivered",
		label: "ডেলিভার হয়েছে",
		icon: PackageCheck
	}
];
function slugOf(id) {
	return PRODUCTS.find((p) => p.id === id)?.slug ?? "";
}
function TrackingPage() {
	const { id } = Route.useParams();
	const { getOrder, hydrated } = useShop();
	const [search, setSearch] = (0, import_react.useState)(id);
	const order = getOrder(search);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container-luxury py-20" }) });
	const elapsedH = order ? (Date.now() - order.createdAt) / 36e5 : 0;
	const stepIdx = !order ? -1 : Math.min(STEPS.length - 1, Math.max(STEPS.findIndex((s) => s.key === order.status), elapsedH > 96 ? 5 : elapsedH > 48 ? 4 : elapsedH > 24 ? 3 : elapsedH > 6 ? 2 : elapsedH > 1 ? 1 : 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxury py-10 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "heading-display text-3xl sm:text-4xl",
					children: "অর্ডার ট্র্যাকিং"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "আপনার অর্ডারের বর্তমান অবস্থা।"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex max-w-xl gap-2 rounded-[18px] border border-border/60 bg-card p-2 shadow-soft-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center gap-2 px-3 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value.trim()),
						placeholder: "অর্ডার নম্বর দিন (যেমন: CL-XXXXX)",
						className: "h-11 flex-1 bg-transparent text-sm outline-none"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
					variant: "primary",
					size: "md",
					type: "button",
					children: "খুঁজুন"
				})]
			}),
			!order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[22px] border border-border/60 bg-card p-10 text-center shadow-soft-lux",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-muted text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 22 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: "অর্ডার পাওয়া যায়নি"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "অর্ডার নম্বরটি সঠিক আছে কিনা যাচাই করুন।"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-4 inline-block text-primary underline",
						children: "হোমে ফিরুন"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: "অর্ডার নম্বর"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-bold text-primary",
							children: order.id
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary",
							children: STEPS[stepIdx]?.label ?? "প্রক্রিয়াধীন"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative space-y-6 pl-1",
						children: STEPS.map((s, i) => {
							const done = i <= stepIdx;
							const current = i === stepIdx;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									x: -12
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: {
									delay: i * .08,
									duration: .4
								},
								className: "relative flex items-start gap-4",
								children: [
									i < STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-[22px] top-11 h-[calc(100%-8px)] w-0.5", done ? "bg-primary" : "bg-border") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("relative grid h-11 w-11 shrink-0 place-items-center rounded-full transition", done ? "bg-primary text-primary-foreground shadow-soft-lux" : "bg-muted text-muted-foreground"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 17 }), current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-primary/50" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 pt-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("text-sm font-semibold", done ? "text-foreground" : "text-muted-foreground"),
											children: s.label
										}), current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 text-[11px] text-primary",
											children: "চলমান"
										})]
									})
								]
							}, s.key);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-bold",
									children: "অর্ডার সামারি"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-3",
									children: order.items.map((it) => {
										const p = getProduct(slugOf(it.productId));
										if (!p) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: p.images[0],
													alt: p.name,
													className: "h-12 w-12 rounded-[10px] object-cover"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "line-clamp-1 text-xs font-semibold",
														children: p.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-[10px] text-muted-foreground",
														children: ["× ", bnNum(it.qty)]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold text-primary",
													children: bnPrice(p.price * it.qty)
												})
											]
										}, it.key);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between border-t border-border pt-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "সর্বমোট"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-bold text-primary",
										children: bnPrice(order.total)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-card p-4 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 font-semibold text-foreground/80",
									children: "ডেলিভারি ঠিকানা"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: order.address.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: order.address.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-muted-foreground",
									children: [
										order.address.address,
										", ",
										order.address.upazila,
										", ",
										order.address.district
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center gap-2 text-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 12 }),
										" পেমেন্ট: ",
										PAYMENT_METHODS.find((p) => p.id === order.payment)?.label
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex h-11 items-center justify-center gap-2 rounded-[14px] border border-border bg-background text-xs font-medium hover:border-primary hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 14 }), " হোমে ফিরুন"]
						})
					]
				})]
			})
		]
	}) });
}
//#endregion
export { TrackingPage as component };
