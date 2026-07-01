import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, g as bnPrice, h as bnNum, it as useShop } from "./store-CteU02vO.mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Package, H as Heart, N as MapPin, f as ShoppingBag, o as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.index-C1LMfvNl.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function DashboardPage() {
	const { user } = useAuth();
	const { orders, wishlistCount, cartCount } = useShop();
	const totalSpent = orders.reduce((s, o) => s + o.total, 0);
	const stats = [
		{
			label: "মোট অর্ডার",
			value: bnNum(orders.length),
			icon: Package,
			to: "/account/orders"
		},
		{
			label: "কার্টে",
			value: bnNum(cartCount),
			icon: ShoppingBag,
			to: "/cart"
		},
		{
			label: "উইশলিস্ট",
			value: bnNum(wishlistCount),
			icon: Heart,
			to: "/account/wishlist"
		},
		{
			label: "মোট খরচ",
			value: bnPrice(totalSpent),
			icon: TrendingUp,
			to: "/account/orders"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-[22px] bg-gradient-to-br from-primary via-primary to-dark p-6 text-primary-foreground shadow-luxury md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-semibold uppercase tracking-widest opacity-70",
						children: "স্বাগতম"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-1 font-display text-3xl font-bold",
						children: [
							"সালাম, ",
							user?.name,
							" 👋"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm opacity-80",
						children: "আপনার সাম্প্রতিক অর্ডার, উইশলিস্ট ও প্রোফাইল এক জায়গায়।"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: s.to,
					className: "group flex items-center gap-3 rounded-[18px] border border-border/60 bg-card p-4 shadow-soft-lux transition hover:-translate-y-0.5 hover:border-primary/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 17 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-bold",
							children: s.value
						})]
					})]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-bold",
							children: "সাম্প্রতিক অর্ডার"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account/orders",
							className: "text-[11px] text-primary underline",
							children: "সব দেখুন"
						})]
					}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[14px] bg-muted/40 p-6 text-center text-xs text-muted-foreground",
						children: ["কোনো অর্ডার নেই। ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "text-primary underline",
							children: "শপে যান"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: orders.slice(0, 3).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/order-tracking/$id",
							params: { id: o.id },
							className: "flex items-center justify-between rounded-[12px] px-3 py-2.5 text-sm transition hover:bg-primary-soft/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-primary",
								children: o.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: new Date(o.createdAt).toLocaleDateString("en-GB")
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display font-bold",
									children: bnPrice(o.total)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-emerald-700",
									children: o.status
								})]
							})]
						}) }, o.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-bold",
							children: "দ্রুত অ্যাকশন"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								className: "flex items-center justify-between rounded-[12px] bg-primary-soft/40 px-4 py-3 text-sm transition hover:bg-primary-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 14 }), " শপিং শুরু করুন"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "→"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/order-tracking",
								className: "flex items-center justify-between rounded-[12px] bg-primary-soft/40 px-4 py-3 text-sm transition hover:bg-primary-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 14 }), " অর্ডার ট্র্যাক করুন"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "→"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/account/addresses",
								className: "flex items-center justify-between rounded-[12px] bg-primary-soft/40 px-4 py-3 text-sm transition hover:bg-primary-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), " ঠিকানা যুক্ত করুন"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "→"
								})]
							})
						]
					})]
				})]
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
