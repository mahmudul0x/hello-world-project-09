import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as IMG, o as STATS, s as TESTIMONIALS } from "./content-DZlQVS3P.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { C as Quote, gt as BadgeCheck, mt as CirclePlay, u as Star } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as PageHero } from "./PageHero-DxeBJMjt.mjs";
import { t as SectionHeading } from "./section-heading-BkOnLybf.mjs";
import { t as AnimatedCounter } from "./AnimatedCounter-CVWQVSNR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-CEAertAK.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsPage() {
	const videos = TESTIMONIALS.filter((t) => t.hasVideo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "গ্রাহকদের মতামত",
			title: "হাজারো পরিবারের ভালোবাসায় গড়া বিশ্বাস",
			description: "যাদের ঘরে ChayaLux পৌঁছেছে — তাদের অভিজ্ঞতাই আমাদের সবচেয়ে বড় সম্পদ।",
			image: IMG.hero3
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, { ...s }, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury pb-16 md:pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "ভেরিফায়েড রিভিউ",
				title: "যা বলছেন আমাদের গ্রাহকরা",
				description: "প্রতিটি রিভিউ আসল ক্রেতা থেকে সংগৃহীত — কোনো এডিট ছাড়াই প্রকাশিত।"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "relative flex h-full flex-col gap-5 rounded-[22px] bg-card p-8 shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
							className: "absolute right-6 top-6 text-gold/25",
							size: 40
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 text-gold",
							children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 15,
								fill: j < t.rating ? "currentColor" : "none",
								strokeWidth: 1.5
							}, j))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[15px] leading-relaxed text-foreground/85",
							children: [
								"\"",
								t.text,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-widest text-primary",
							children: t.product
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-center gap-3 border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-display font-bold text-primary",
								children: t.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-medium text-foreground",
									children: [t.name, t.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-4 w-4 place-items-center rounded-full bg-emerald-500 text-white",
										title: "ভেরিফায়েড ক্রেতা",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { size: 11 })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: t.location
								})]
							})]
						})
					]
				}, t.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-dark py-14 text-background md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "ভিডিও রিভিউ",
					title: "গ্রাহকদের কণ্ঠে ChayaLux",
					description: "আমাদের প্রকৃত গ্রাহকদের নিজেদের কথায় শেয়ার করা অভিজ্ঞতা।"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: videos.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: i * .08
						},
						className: "group relative overflow-hidden rounded-[22px] shadow-luxury",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: [
									IMG.hero2,
									IMG.hero3,
									IMG.hero4
								][i % 3],
								alt: v.name,
								className: "aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-20 w-20 place-items-center rounded-full bg-gold text-dark shadow-gold transition group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {
										size: 40,
										strokeWidth: 1.5
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-semibold uppercase tracking-widest text-gold",
										children: "ভিডিও রিভিউ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-display text-lg font-bold text-background",
										children: v.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-background/75",
										children: v.location
									})
								]
							})
						]
					}, v.name))
				})]
			})
		})
	] });
}
//#endregion
export { ReviewsPage as component };
