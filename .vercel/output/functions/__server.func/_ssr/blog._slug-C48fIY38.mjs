import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as IMG, t as BLOGS } from "./content-DZlQVS3P.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { C as Quote, K as Facebook, L as Link$1, Q as Clock, et as ChevronRight, h as Share2, i as User, it as Calendar, j as MessageCircle, lt as ArrowRight, ut as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as Route } from "./blog._slug-acbVSeZe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-C48fIY38.js
var import_jsx_runtime = require_jsx_runtime();
function BlogDetailPage() {
	const { slug } = Route.useParams();
	const post = BLOGS.find((x) => x.slug === slug);
	const related = BLOGS.filter((x) => x.slug !== slug).slice(0, 3);
	const shareUrl = typeof window !== "undefined" ? window.location.href : `https://chayalux.com/blog/${slug}`;
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl);
			toast.success("লিংক কপি হয়েছে");
		} catch {
			toast.error("কপি করা যায়নি");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative isolate overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[62vh] min-h-[440px] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						initial: { scale: 1.1 },
						animate: { scale: 1 },
						transition: { duration: 2.2 },
						src: post.image,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/70 to-dark/95" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-luxury relative z-10 flex h-full flex-col justify-end pb-14 md:pb-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "mb-4 flex flex-wrap items-center gap-1.5 text-[11px] text-background/75",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "hover:text-gold",
										children: "হোম"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 11 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog",
										className: "hover:text-gold",
										children: "ব্লগ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 11 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: post.category
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold",
								children: post.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "heading-display mt-4 max-w-4xl text-3xl text-background sm:text-4xl md:text-5xl",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center gap-4 text-xs text-background/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 12 }),
											" ",
											post.author
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 12 }),
											" ",
											post.date
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 12 }),
											" ",
											post.readMinutes,
											" মিনিট পড়া"
										]
									})
								]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose-luxury space-y-6 text-[16px] leading-[1.85] text-foreground/85",
						children: post.content.map((block, i) => {
							if (block.type === "h2") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "heading-display pt-4 text-2xl md:text-3xl",
								children: block.text
							}, i);
							if (block.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text }, i);
							if (block.type === "quote") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "relative rounded-[22px] bg-primary-soft/60 p-8 pl-16 shadow-soft-lux",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									className: "absolute left-5 top-6 text-gold/60",
									size: 28
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg italic text-primary md:text-xl",
									children: block.text
								})]
							}, i);
							if (block.type === "img") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-[22px] shadow-soft-lux",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: block.src,
									alt: block.caption ?? "",
									className: "w-full object-cover"
								}), block.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "bg-card p-3 text-center text-xs text-muted-foreground",
									children: block.caption
								})]
							}, i);
							return null;
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 flex flex-wrap items-center gap-4 rounded-[22px] border border-border bg-card p-6 shadow-soft-lux",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-dark font-display text-xl font-bold text-primary-foreground shadow-luxury",
							children: post.author.charAt(0)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-gold",
									children: "লেখক"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-base font-bold",
									children: post.author
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "ChayaLux কনটেন্ট টিম"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-primary-soft/50 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { size: 16 }), " এই আর্টিকেলটি শেয়ার করুন"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
									target: "_blank",
									rel: "noreferrer",
									className: "ripple-btn flex h-10 items-center gap-2 rounded-full bg-[#1877F2] px-4 text-xs font-medium text-white transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 13 }), " Facebook"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/?text=${encodeURIComponent(`${post.title} — ${shareUrl}`)}`,
									target: "_blank",
									rel: "noreferrer",
									className: "ripple-btn flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-4 text-xs font-medium text-white transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 13 }), " WhatsApp"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: copy,
									className: "ripple-btn flex h-10 items-center gap-2 rounded-full bg-dark px-4 text-xs font-medium text-background transition hover:-translate-y-0.5 hover:bg-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { size: 13 }), " লিংক কপি"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-dark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " সব ব্লগে ফিরুন"]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-primary-soft/30 py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-gold",
						children: "আরও পড়ুন"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "heading-display mt-2 text-2xl md:text-3xl",
						children: "সম্পর্কিত আর্টিকেল"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "hidden text-sm font-medium text-primary hover:text-dark sm:inline-flex sm:items-center sm:gap-1",
						children: ["সব দেখুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: related.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: b.slug },
						className: "group flex flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux transition hover:-translate-y-1 hover:shadow-float",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "image-zoom aspect-[16/10] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.image,
								alt: b.title,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-widest text-primary",
								children: b.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-base font-semibold group-hover:text-primary",
								children: b.title
							})]
						})]
					}, b.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden",
			children: IMG.hero3 ? "" : ""
		})
	] });
}
//#endregion
export { BlogDetailPage as component };
