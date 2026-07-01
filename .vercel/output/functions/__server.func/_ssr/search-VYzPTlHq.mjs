import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS } from "./store-CteU02vO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Search } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as EmptyState } from "./EmptyState-dtZSkf-p.mjs";
import { t as ProductCardPro } from "./ProductCardPro-B_KEyEQD.mjs";
import { t as Route } from "./search-DXXrm9FX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-VYzPTlHq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_products();
function SearchPage() {
	const { q: qParam } = Route.useSearch();
	const [q, setQ] = (0, import_react.useState)(qParam ?? "");
	const results = (0, import_react.useMemo)(() => {
		const t = q.trim().toLowerCase();
		if (!t) return PRODUCTS;
		return PRODUCTS.filter((p) => p.name.toLowerCase().includes(t) || p.categoryName.toLowerCase().includes(t) || p.fabric.toLowerCase().includes(t) || p.description.toLowerCase().includes(t));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxury py-10 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "heading-display text-3xl sm:text-4xl",
						children: "সার্চ ফলাফল"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2 rounded-[18px] border border-border/60 bg-card p-2 shadow-soft-lux",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 items-center gap-2 px-3 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "পণ্য খুঁজুন...",
								className: "h-11 flex-1 bg-transparent text-sm outline-none",
								autoFocus: true
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							results.length,
							"টি পণ্য পাওয়া গেছে ",
							q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"“",
								q,
								"” এর জন্য"
							] })
						]
					})
				]
			}),
			results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Search,
				title: "কিছু পাওয়া যায়নি",
				description: "অন্য কিওয়ার্ড দিয়ে চেষ্টা করুন বা সব পণ্য ঘুরে দেখুন।",
				action: {
					label: "সব পণ্য দেখুন",
					to: "/shop"
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4",
				children: results.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardPro, {
					product: p,
					index: i
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: "জনপ্রিয় ক্যাটাগরি"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						"ভেলভেট",
						"ব্ল্যাকআউট",
						"কুশন",
						"সোফা কভার",
						"চাইনিজ",
						"শাটিন",
						"বেডশিট",
						"উইন্ডো ব্লাইন্ড"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setQ(c),
						className: "rounded-full bg-primary-soft px-4 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-primary-foreground",
						children: c
					}, c))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "text-primary underline",
					children: "← সব পণ্যে ফিরুন"
				})
			})
		]
	}) });
}
//#endregion
export { SearchPage as component };
