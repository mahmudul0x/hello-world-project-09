import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as IMG, t as BLOGS } from "./content-DZlQVS3P.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { Q as Clock, _ as Search, i as User, it as Calendar, lt as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as PageHero } from "./PageHero-DxeBJMjt.mjs";
import { t as SectionHeading } from "./section-heading-BkOnLybf.mjs";
import { t as Newsletter } from "./Newsletter-DHdYZfvS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-CfUNWyC0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogIndexPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("সব");
	const cats = (0, import_react.useMemo)(() => ["সব", ...new Set(BLOGS.map((b) => b.category))], []);
	const featured = BLOGS[0];
	const filtered = (0, import_react.useMemo)(() => {
		return BLOGS.filter((b) => (cat === "সব" || b.category === cat) && (!q || b.title.includes(q) || b.excerpt.includes(q)));
	}, [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "ব্লগ",
			title: "হোম ডেকোরের ভেতরের গল্প ও গাইড",
			description: "প্রিমিয়াম হোম ডেকোর নিয়ে বিশেষজ্ঞদের বিশ্লেষণ, ডিজাইন টিপস এবং প্রোডাক্ট গাইড।",
			image: IMG.hero2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog/$slug",
				params: { slug: featured.slug },
				className: "group grid gap-8 overflow-hidden rounded-[28px] bg-card shadow-luxury lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "image-zoom relative aspect-[16/10] overflow-hidden lg:aspect-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: featured.image,
						alt: featured.title,
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-5 top-5 rounded-full bg-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-dark shadow-gold",
						children: "ফিচার্ড"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center gap-4 p-8 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-primary",
							children: featured.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "heading-display text-3xl group-hover:text-primary md:text-4xl",
							children: featured.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] leading-relaxed text-muted-foreground",
							children: featured.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 12 }),
										" ",
										featured.author
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 12 }),
										" ",
										featured.date
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 12 }),
										" ",
										featured.readMinutes,
										" মিনিট"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft-lux transition group-hover:bg-dark",
							children: ["সম্পূর্ণ পড়ুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury pb-16 md:pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "সর্বশেষ",
						title: "নতুন আর্টিকেল",
						align: "left"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-1 items-center justify-end gap-2 sm:max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-11 flex-1 items-center gap-2 rounded-full border border-border bg-background px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								size: 15,
								className: "text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "আর্টিকেল খুঁজুন...",
								className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex flex-wrap gap-2",
					children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: cn("rounded-full border px-4 py-1.5 text-xs font-medium transition", cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:border-primary/60"),
						children: c
					}, c))
				}),
				filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[22px] border border-border bg-card p-12 text-center text-muted-foreground",
					children: "কোনো আর্টিকেল পাওয়া যায়নি"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
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
							delay: i % 3 * .08
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: b.slug },
							className: "group flex h-full flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "image-zoom relative aspect-[16/10] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: b.image,
									alt: b.title,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur",
									children: b.category
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-3 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 11 }),
												" ",
												b.date
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 11 }),
												" ",
												b.readMinutes,
												" মিনিট"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold leading-snug transition group-hover:text-primary",
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "line-clamp-3 text-sm leading-relaxed text-muted-foreground",
										children: b.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary",
										children: ["পড়ুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 13,
											className: "transition-transform group-hover:translate-x-1"
										})]
									})
								]
							})]
						})
					}, b.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-16 md:pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
		})
	] });
}
//#endregion
export { BlogIndexPage as component };
