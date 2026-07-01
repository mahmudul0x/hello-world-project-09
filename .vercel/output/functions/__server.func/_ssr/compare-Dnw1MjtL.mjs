import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, g as bnPrice, it as useShop } from "./store-CteU02vO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { W as GitCompare, f as ShoppingBag, r as X, rt as Check } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as EmptyState } from "./EmptyState-dtZSkf-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-Dnw1MjtL.js
var import_jsx_runtime = require_jsx_runtime();
init_products();
function ComparePage() {
	const { compare, hydrated, toggleCompare, addToCart, clearCompare } = useShop();
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container-luxury py-20" }) });
	const items = compare.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxury py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: GitCompare,
			title: "তুলনায় কোনো পণ্য নেই",
			description: "প্রোডাক্ট কার্ডের তুলনা বাটন থেকে সর্বোচ্চ ৩টি পণ্য যোগ করুন।",
			action: {
				label: "শপে যান",
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
				children: "পণ্য তুলনা"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [items.length, "টি পণ্য তুলনা করছেন (সর্বোচ্চ ৩টি)।"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: clearCompare,
				className: "text-xs text-muted-foreground hover:text-destructive",
				children: "সব সরান"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-[22px] border border-border/60 bg-card shadow-soft-lux",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[560px] text-center text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "sticky left-0 bg-primary-soft/70 px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-primary",
					children: "বৈশিষ্ট্য"
				}), items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "relative px-4 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggleCompare(p.id),
						"aria-label": "সরান",
						className: "absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 12 })
					})
				}, p.id))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					{
						label: "ছবি",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.images[0],
							alt: p.name,
							className: "mx-auto h-32 w-32 rounded-[14px] object-cover"
						})
					},
					{
						label: "নাম",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: p.name
						})
					},
					{
						label: "ক্যাটাগরি",
						render: (p) => p.categoryName
					},
					{
						label: "দাম",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-primary",
							children: bnPrice(p.price)
						})
					},
					{
						label: "ফেব্রিক",
						render: (p) => p.fabric
					},
					{
						label: "রঙ",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-1",
							children: p.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								title: c.name,
								className: "h-4 w-4 rounded-full border border-border",
								style: { background: c.hex }
							}, c.name))
						})
					},
					{
						label: "সাইজ",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: p.sizes.join(", ")
						})
					},
					{
						label: "গ্যারান্টি",
						render: () => "১০০% কালার গ্যারান্টি"
					},
					{
						label: "ডেলিভারি",
						render: () => "৩-৫ কর্মদিবস"
					},
					{
						label: "স্টক",
						render: (p) => p.inStock ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-emerald-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 13 }), " আছে"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-destructive",
							children: "নেই"
						})
					},
					{
						label: "অ্যাকশন",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
								variant: "primary",
								size: "sm",
								className: "w-full text-xs",
								onClick: () => addToCart(p),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 13 }), " কার্ট"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								className: "text-xs text-primary underline",
								children: "বিস্তারিত"
							})]
						})
					}
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: i % 2 ? "bg-muted/30" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "sticky left-0 bg-inherit px-4 py-3 text-left text-xs font-semibold text-foreground/80",
						children: r.label
					}), items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 align-middle",
						children: r.render(p)
					}, p.id))]
				}, r.label)) })]
			})
		})]
	}) });
}
//#endregion
export { ComparePage as component };
