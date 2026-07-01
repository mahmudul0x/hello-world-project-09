import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as IMG, i as GALLERY_CATS, r as GALLERY } from "./content-DZlQVS3P.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { Y as Expand, r as X } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as PageHero } from "./PageHero-DxeBJMjt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-C26X9J2g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const [cat, setCat] = (0, import_react.useState)("সব");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const items = (0, import_react.useMemo)(() => cat === "সব" ? GALLERY : GALLERY.filter((g) => g.category === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "গ্যালারি",
			title: "আমাদের সম্পন্ন করা লাক্সারি প্রজেক্ট",
			description: "প্রতিটি প্রজেক্টই একটি নতুন গল্প — বাস্তব গ্রাহকদের বাড়ি, অফিস ও হসপিটাল থেকে সংগৃহীত মুহূর্তগুলো।",
			image: IMG.heroLiving
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury pt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-x -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: GALLERY_CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: cn("whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition", cat === c ? "border-primary bg-primary text-primary-foreground shadow-soft-lux" : "border-border bg-background text-foreground hover:border-primary/60 hover:text-primary"),
					children: c
				}, c))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layout: true,
				className: "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					layout: true,
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .96
					},
					transition: {
						duration: .4,
						delay: i % 8 * .04
					},
					onClick: () => setLightbox(g.image),
					className: cn("group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[22px] shadow-soft-lux transition hover:shadow-float", g.span === "tall" && "row-span-2"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.image,
							alt: g.title,
							loading: "lazy",
							className: "h-auto w-full object-cover transition duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent opacity-0 transition group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition group-hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-gold",
									children: g.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold text-background",
									children: g.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-full bg-gold text-dark shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { size: 14 })
							})]
						})
					]
				}, g.id)) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setLightbox(null),
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-dark/90 p-4 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				initial: {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .9,
					opacity: 0
				},
				src: lightbox,
				alt: "",
				className: "max-h-[90vh] max-w-6xl rounded-[22px] object-contain shadow-luxury"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setLightbox(null),
				className: "absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-background/95 text-dark shadow-luxury transition hover:bg-gold",
				"aria-label": "বন্ধ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
			})]
		}) })
	] });
}
//#endregion
export { GalleryPage as component };
