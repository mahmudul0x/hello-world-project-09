import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, T as getRelated, c as PRODUCTS, g as bnPrice, h as bnNum, it as useShop, l as REVIEWS_SEED, u as ROOM_PREVIEWS, w as getProduct } from "./store-CteU02vO.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as Minus, D as Package, E as Palette, H as Heart, K as Facebook, T as Phone, a as Truck, at as Banknote, et as ChevronRight, f as ShoppingBag, j as MessageCircle, ot as Award, p as ShieldCheck, rt as Check, u as Star, w as Plus, x as RotateCcw } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as SectionHeading } from "./section-heading-BkOnLybf.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as ProductCardPro } from "./ProductCardPro-B_KEyEQD.mjs";
import { t as Route } from "./product._slug-Bj1qHv4s.mjs";
import { t as ReviewCard } from "./ReviewCard-CyrL_OBd.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-Cv99nKxd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductGallery({ images, alt }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const [zoom, setZoom] = (0, import_react.useState)(null);
	const onMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setZoom({
			x: (e.clientX - rect.left) / rect.width * 100,
			y: (e.clientY - rect.top) / rect.height * 100
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 lg:sticky lg:top-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-muted shadow-luxury",
			onMouseMove: onMove,
			onMouseLeave: () => setZoom(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: images[active],
					alt,
					initial: {
						opacity: 0,
						scale: 1.02
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: { duration: .4 },
					style: zoom ? {
						transformOrigin: `${zoom.x}% ${zoom.y}%`,
						transform: "scale(1.6)"
					} : void 0,
					className: "absolute inset-0 h-full w-full object-cover transition-transform duration-300"
				}, active)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-4 gap-3",
			children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setActive(i),
				className: cn("aspect-square overflow-hidden rounded-[14px] border-2 transition", active === i ? "border-primary shadow-soft-lux" : "border-border hover:border-gold"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "h-full w-full object-cover"
				})
			}, i))
		})]
	});
}
init_products();
function RoomPreview() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxury py-16 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "রুম প্রিভিউ",
			title: "এই পর্দাটি আপনার ঘরে কেমন দেখাবে",
			description: "বিভিন্ন রুমে প্রিমিয়াম পর্দার লাইভ ভিউ — ঠিক ChayaLux শোরুমের মতো অভিজ্ঞতা।"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-6 lg:grid-cols-[1fr_280px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/10] overflow-hidden rounded-[24px] bg-muted shadow-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: ROOM_PREVIEWS[active].image,
						alt: ROOM_PREVIEWS[active].name,
						initial: {
							opacity: 0,
							scale: 1.04
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: { opacity: 0 },
						transition: {
							duration: .6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "absolute inset-0 h-full w-full object-cover"
					}, active)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-medium shadow-soft-lux backdrop-blur",
					children: ROOM_PREVIEWS[active].name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2 lg:grid-cols-2",
				children: ROOM_PREVIEWS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActive(i),
					className: cn("group relative aspect-square overflow-hidden rounded-[16px] border-2 transition", active === i ? "border-primary shadow-soft-lux" : "border-border hover:border-gold"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: r.image,
						alt: r.name,
						className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,color-mix(in_oklab,var(--dark)_75%,transparent),transparent)] px-2 py-1.5 text-[10px] font-medium text-background",
						children: r.name
					})]
				}, r.name))
			})]
		})]
	});
}
var KEY = "chayalux:recently-viewed";
var MAX = 8;
function useRecentlyViewed() {
	const [slugs, setSlugs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) setSlugs(JSON.parse(raw));
		} catch {}
	}, []);
	return {
		slugs,
		add: (0, import_react.useCallback)((slug) => {
			setSlugs((prev) => {
				const next = [slug, ...prev.filter((s) => s !== slug)].slice(0, MAX);
				try {
					localStorage.setItem(KEY, JSON.stringify(next));
				} catch {}
				return next;
			});
		}, [])
	};
}
init_products();
function RecentlyViewed({ excludeSlug }) {
	const { slugs } = useRecentlyViewed();
	const products = (0, import_react.useMemo)(() => slugs.filter((s) => s !== excludeSlug).map((s) => PRODUCTS.find((p) => p.slug === s)).filter((p) => Boolean(p)).slice(0, 4), [slugs, excludeSlug]);
	if (products.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxury py-16 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "সাম্প্রতিক দেখা",
			title: "আপনি সম্প্রতি দেখেছেন"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4",
			children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardPro, {
				product: p,
				index: i
			}, p.id))
		})]
	});
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
init_products();
function ProductDetailPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	const related = (0, import_react.useMemo)(() => getRelated(product), [product]);
	const [color, setColor] = (0, import_react.useState)(product.colors[0]?.name);
	const [size, setSize] = (0, import_react.useState)(product.sizes[0]);
	const [qty, setQty] = (0, import_react.useState)(1);
	const { add } = useRecentlyViewed();
	const { addToCart, toggleWishlist, isWished } = useShop();
	const navigate = useNavigate();
	const wish = isWished(product.id);
	(0, import_react.useEffect)(() => {
		add(slug);
	}, [slug, add]);
	const handleAdd = () => addToCart(product, {
		color,
		size,
		qty
	});
	const handleBuyNow = () => {
		addToCart(product, {
			color,
			size,
			qty,
			silent: true
		});
		navigate({ to: "/checkout" });
	};
	const discount = product.oldPrice ? Math.round((product.oldPrice - product.price) / product.oldPrice * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxury pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "transition hover:text-primary",
						children: "হোম"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 12 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "transition hover:text-primary",
						children: "সব পণ্য"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 12 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections/$slug",
						params: { slug: product.category },
						className: "transition hover:text-primary",
						children: product.categoryName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 12 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-foreground",
						children: product.name
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury py-8 md:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] xl:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGallery, {
					images: product.images,
					alt: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary",
									children: product.categoryName
								}),
								product.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-background",
									children: "নতুন"
								}),
								product.isBestSeller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-dark",
									children: "বেস্ট সেলার"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .5 },
							className: "heading-display text-3xl sm:text-4xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									[
										0,
										1,
										2,
										3,
										4
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 15,
										className: cn("text-gold", i < Math.round(product.rating) && "fill-gold")
									}, i)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1.5 font-semibold",
										children: product.rating.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											"(",
											product.reviews,
											" রিভিউ)"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("flex items-center gap-1 text-xs font-medium", product.inStock ? "text-emerald-700" : "text-destructive"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 13 }),
									" ",
									product.inStock ? "স্টকে আছে" : "স্টক নেই"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-bold text-primary",
								children: bnPrice(product.price)
							}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base text-muted-foreground line-through",
								children: bnPrice(product.oldPrice)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground",
								children: [
									"-",
									discount,
									"% ছাড়"
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: product.shortDesc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] bg-primary-soft/60 px-4 py-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-primary",
									children: "ফেব্রিক:"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/80",
									children: product.fabric
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 text-xs font-semibold uppercase tracking-widest text-foreground/70",
							children: ["রঙ: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: color
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2.5",
							children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setColor(c.name),
								title: c.name,
								className: cn("grid h-10 w-10 place-items-center rounded-full border-2 transition", color === c.name ? "border-primary shadow-soft-lux" : "border-border hover:border-gold"),
								style: { background: c.hex },
								children: color === c.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 14,
									className: "text-background"
								})
							}, c.name))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-xs font-semibold uppercase tracking-widest text-foreground/70",
							children: "সাইজ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSize(s),
								className: cn("rounded-[14px] border px-4 py-2.5 text-xs font-medium transition", size === s ? "border-primary bg-primary text-primary-foreground shadow-soft-lux" : "border-border bg-background text-foreground hover:border-primary"),
								children: s
							}, s))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-14 items-center gap-1 rounded-[18px] border border-border bg-background px-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty((q) => Math.max(1, q - 1)),
											className: "grid h-10 w-10 place-items-center rounded-[12px] text-foreground transition hover:bg-primary-soft hover:text-primary",
											"aria-label": "কমান",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid w-10 place-items-center font-display text-base font-semibold",
											children: bnNum(qty)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty((q) => q + 1),
											className: "grid h-10 w-10 place-items-center rounded-[12px] text-foreground transition hover:bg-primary-soft hover:text-primary",
											"aria-label": "বাড়ান",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
									variant: "primary",
									size: "lg",
									className: "flex-1 min-w-[180px]",
									onClick: handleAdd,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 16 }), " কার্টে যোগ করুন"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
									variant: "gold",
									size: "lg",
									className: "flex-1 min-w-[180px]",
									onClick: handleBuyNow,
									children: "এখনই অর্ডার করুন"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => toggleWishlist(product.id),
									"aria-label": "উইশলিস্ট",
									className: cn("grid h-14 w-14 place-items-center rounded-[18px] border transition", wish ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary hover:text-primary"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										size: 18,
										fill: wish ? "currentColor" : "none"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/8801885901184",
									target: "_blank",
									rel: "noreferrer",
									className: "ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-emerald-600 text-xs font-medium text-white transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }), " WhatsApp"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://m.me/chayalux",
									target: "_blank",
									rel: "noreferrer",
									className: "ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-blue-600 text-xs font-medium text-white transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 14 }), " Messenger"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:01885901184",
									className: "ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-dark text-xs font-medium text-background transition hover:-translate-y-0.5 hover:bg-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), " কল করুন"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {
									icon: Truck,
									title: "দ্রুত ডেলিভারি",
									sub: "সারা বাংলাদেশে"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {
									icon: Banknote,
									title: "ক্যাশ অন ডেলিভারি",
									sub: "হাতে পেয়ে পেমেন্ট"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {
									icon: Palette,
									title: "১০০% কালার গ্যারান্টি",
									sub: "রং জ্বলবে না"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {
									icon: Award,
									title: "প্রিমিয়াম কোয়ালিটি",
									sub: "আন্তর্জাতিক মান"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {
									icon: RotateCcw,
									title: "সহজ রিটার্ন",
									sub: "৭ দিনের মধ্যে"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {
									icon: ShieldCheck,
									title: "জেনুইন প্রোডাক্ট",
									sub: "ব্র্যান্ড ওয়ারেন্টি"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[24px] border border-border/60 bg-card p-6 shadow-soft-lux md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "desc",
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "mb-6 flex w-full flex-wrap gap-2 bg-transparent p-0",
							children: [
								{
									v: "desc",
									l: "বিস্তারিত"
								},
								{
									v: "features",
									l: "ফিচার"
								},
								{
									v: "specs",
									l: "স্পেসিফিকেশন"
								},
								{
									v: "delivery",
									l: "ডেলিভারি ও রিটার্ন"
								}
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: t.v,
								className: "rounded-full border border-border bg-background px-5 py-2 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
								children: t.l
							}, t.v))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "desc",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base",
								children: product.description
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "features",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid gap-3 sm:grid-cols-2",
								children: product.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 rounded-[14px] bg-primary-soft/50 px-4 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })
									}), f]
								}, f))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "specs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-[16px] border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
									className: "w-full text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: product.specs.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: i % 2 ? "bg-muted/40" : "bg-background",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-semibold text-foreground/80 sm:w-1/3",
											children: s.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 text-foreground/70",
											children: s.value
										})]
									}, s.label)) })
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "delivery",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryCard, {
										icon: Truck,
										title: "ঢাকার ভিতরে",
										text: "১-২ কর্মদিবসে হোম ডেলিভারি।"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryCard, {
										icon: Package,
										title: "ঢাকার বাইরে",
										text: "২-৪ কর্মদিবসে সারা বাংলাদেশে।"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryCard, {
										icon: Banknote,
										title: "ক্যাশ অন ডেলিভারি",
										text: "পণ্য হাতে পেয়ে পেমেন্ট করুন।"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryCard, {
										icon: RotateCcw,
										title: "রিটার্ন পলিসি",
										text: "ম্যানুফ্যাকচারিং ত্রুটি থাকলে ৭ দিনের মধ্যে রিটার্ন।"
									})
								]
							})
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "কাস্টমার রিভিউ",
				title: "ক্রেতাদের অভিজ্ঞতা",
				description: "ChayaLux ব্যবহারকারী বাস্তব গ্রাহকদের অভিজ্ঞতা।"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: REVIEWS_SEED.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
					review: r,
					index: i
				}, r.name))
			})]
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "সম্পর্কিত পণ্য",
				title: "আপনার পছন্দ হতে পারে"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4",
				children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardPro, {
					product: p,
					index: i
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyViewed, { excludeSlug: slug })
	] });
}
function TrustBadge({ icon: Icon, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5 rounded-[14px] border border-border/60 bg-card px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate text-xs font-semibold text-foreground",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate text-[10px] text-muted-foreground",
				children: sub
			})]
		})]
	});
}
function DeliveryCard({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-[16px] border border-border/60 bg-background p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-xs text-muted-foreground",
			children: text
		})] })]
	});
}
//#endregion
export { ProductDetailPage as component };
