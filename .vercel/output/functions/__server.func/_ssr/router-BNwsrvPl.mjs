import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { A as hero_living_room_default, G as init_products, W as init_hero_living_room, a as CATEGORIES, c as PRODUCTS, d as ShopProvider, g as bnPrice, h as bnNum, it as useShop, o as IMAGES } from "./store-CteU02vO.mjs";
import { a as IMG, t as BLOGS } from "./content-DZlQVS3P.mjs";
import { t as AuthProvider } from "./auth-aNe0GWOG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { F as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { H as Heart, Q as Clock, Z as Cookie, _ as Search, f as ShoppingBag, i as User, j as MessageCircle, o as TrendingUp, pt as House, r as X, st as ArrowUp, t as Zap } from "../_libs/lucide-react.mjs";
import { t as Route$32 } from "./blog._slug-DHCmK7rH.mjs";
import { t as Route$33 } from "./collections._slug-CE-E3xmO.mjs";
import { t as Route$34 } from "./order-success._id-DAcTuQlx.mjs";
import { t as Route$35 } from "./order-tracking._id-BIBrsTQU.mjs";
import { t as Route$36 } from "./product._slug-Bj1qHv4s.mjs";
import { t as Route$37 } from "./search-BYIsmocB.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BNwsrvPl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CYqXhAPU.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function FloatingActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed bottom-24 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6",
		children: [{
			label: "WhatsApp",
			href: "https://wa.me/8801885901184",
			icon: MessageCircle,
			bg: "bg-emerald-500 hover:bg-emerald-600",
			delay: 0
		}].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
			href: a.href,
			target: a.href.startsWith("http") ? "_blank" : void 0,
			rel: "noreferrer",
			"aria-label": a.label,
			initial: {
				opacity: 0,
				scale: .6,
				x: 20
			},
			animate: {
				opacity: 1,
				scale: 1,
				x: 0
			},
			transition: {
				delay: a.delay,
				type: "spring",
				damping: 14
			},
			className: `pointer-events-auto relative grid h-12 w-12 place-items-center rounded-full text-white shadow-luxury transition ${a.bg}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-0 -z-10 animate-ping rounded-full opacity-40 ${a.bg}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { size: 18 })]
		}, a.label))
	});
}
init_products();
function QuickViewDialog() {
	const { quickView, closeQuickView, addToCart, toggleWishlist, isWished } = useShop();
	const [color, setColor] = (0, import_react.useState)(void 0);
	const [size, setSize] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		if (quickView) {
			setColor(quickView.colors[0]?.name);
			setSize(quickView.sizes[0]);
		}
	}, [quickView]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && closeQuickView();
		if (quickView) window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [quickView, closeQuickView]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: quickView && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[85] grid place-items-center bg-dark/70 backdrop-blur-sm p-4",
		onClick: closeQuickView,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .94,
				opacity: 0,
				y: 20
			},
			animate: {
				scale: 1,
				opacity: 1,
				y: 0
			},
			exit: {
				scale: .94,
				opacity: 0,
				y: 20
			},
			transition: {
				duration: .28,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			onClick: (e) => e.stopPropagation(),
			className: "grid w-full max-w-4xl overflow-hidden rounded-[24px] bg-background shadow-luxury md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-square bg-muted md:aspect-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: quickView.images[0],
					alt: quickView.name,
					className: "h-full w-full object-cover"
				}), quickView.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground",
					children: [
						"-",
						Math.round((quickView.oldPrice - quickView.price) / quickView.oldPrice * 100),
						"%"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col gap-4 p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: closeQuickView,
						"aria-label": "বন্ধ",
						className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-muted transition hover:bg-primary hover:text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-semibold uppercase tracking-widest text-gold",
						children: quickView.categoryName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-bold leading-tight",
						children: quickView.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-bold text-primary",
							children: bnPrice(quickView.price)
						}), quickView.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground line-through",
							children: bnPrice(quickView.oldPrice)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "line-clamp-3 text-sm text-muted-foreground",
						children: quickView.shortDesc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: ["রঙ: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: color
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: quickView.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setColor(c.name),
							title: c.name,
							className: cn("h-8 w-8 rounded-full border-2 transition", color === c.name ? "border-primary" : "border-border hover:border-gold"),
							style: { background: c.hex }
						}, c.name))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: "সাইজ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: quickView.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSize(s),
							className: cn("rounded-[10px] border px-3 py-1.5 text-xs transition", size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"),
							children: s
						}, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								addToCart(quickView, {
									color,
									size
								});
							},
							className: "ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-dark text-xs font-medium text-background transition hover:bg-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 14 }), " কার্টে যোগ"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/checkout",
							onClick: () => {
								addToCart(quickView, {
									color,
									size,
									silent: true
								});
								closeQuickView();
							},
							className: "ripple-btn flex h-12 items-center justify-center gap-2 rounded-[14px] bg-primary text-xs font-medium text-primary-foreground transition hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { size: 14 }), " এখনই কিনুন"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => toggleWishlist(quickView.id),
							className: cn("flex h-11 items-center justify-center gap-2 rounded-[14px] border text-xs font-medium transition", isWished(quickView.id) ? "border-primary bg-primary-soft text-primary" : "border-border hover:border-primary hover:text-primary"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 14,
								fill: isWished(quickView.id) ? "currentColor" : "none"
							}), "উইশলিস্ট"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: quickView.slug },
							onClick: closeQuickView,
							className: "flex h-11 items-center justify-center rounded-[14px] border border-border text-xs font-medium transition hover:border-gold hover:text-gold",
							children: "বিস্তারিত দেখুন"
						})]
					})
				]
			})]
		})
	}) });
}
init_hero_living_room();
init_products();
var POPULAR = [
	"ভেলভেট পর্দা",
	"ব্ল্যাকআউট",
	"কুশন সেট",
	"সোফা কভার",
	"চাইনিজ পর্দা"
];
function SearchDialog() {
	const { searchOpen, closeSearch, recentSearches, pushRecentSearch } = useShop();
	const [q, setQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!searchOpen) setQ("");
	}, [searchOpen]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") closeSearch();
		};
		if (searchOpen) window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [searchOpen, closeSearch]);
	const results = (0, import_react.useMemo)(() => {
		const t = q.trim().toLowerCase();
		if (!t) return [];
		return PRODUCTS.filter((p) => p.name.toLowerCase().includes(t) || p.categoryName.toLowerCase().includes(t) || p.fabric.toLowerCase().includes(t)).slice(0, 8);
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[80] flex items-start justify-center bg-dark/60 backdrop-blur-sm",
		onClick: closeSearch,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			transition: {
				duration: .22,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			onClick: (e) => e.stopPropagation(),
			className: "mt-16 w-full max-w-2xl overflow-hidden rounded-[22px] border border-border/60 bg-background shadow-luxury",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-border/60 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 18,
						className: "text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "পণ্য, ক্যাটাগরি বা ফেব্রিক খুঁজুন...",
						className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: closeSearch,
						"aria-label": "বন্ধ",
						className: "grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[65vh] overflow-auto p-4",
				children: q.trim() === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [recentSearches.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 12 }), " সাম্প্রতিক"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: recentSearches.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setQ(r),
							className: "rounded-full border border-border bg-background px-3 py-1.5 text-xs transition hover:border-primary hover:text-primary",
							children: r
						}, r))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 12 }), " জনপ্রিয়"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: POPULAR.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setQ(r),
							className: "rounded-full bg-primary-soft px-3 py-1.5 text-xs text-primary transition hover:bg-primary hover:text-primary-foreground",
							children: r
						}, r))
					})] })]
				}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-muted text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 20 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "কিছু পাওয়া যায়নি"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "অন্য কিওয়ার্ড দিয়ে চেষ্টা করুন।"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1",
					children: [results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						onClick: () => {
							pushRecentSearch(q);
							closeSearch();
						},
						className: "flex items-center gap-3 rounded-[14px] p-2 transition hover:bg-primary-soft/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[0],
								alt: p.name,
								className: "h-14 w-14 rounded-[12px] object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "line-clamp-1 text-sm font-semibold",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground",
									children: p.categoryName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-bold text-primary",
								children: bnPrice(p.price)
							})
						]
					}) }, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/search",
							search: { q },
							onClick: () => {
								pushRecentSearch(q);
								closeSearch();
							},
							className: "flex h-11 items-center justify-center rounded-[14px] bg-primary text-xs font-medium text-primary-foreground",
							children: [
								"\"",
								q,
								"\" — সব ফলাফল দেখুন"
							]
						})
					})]
				})
			})]
		})
	}) });
}
init_products();
function MobileBottomBar() {
	const { cartCount, wishlistCount, openSearch } = useShop();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const items = [
		{
			to: "/",
			icon: House,
			label: "হোম"
		},
		{
			to: "/shop",
			icon: ShoppingBag,
			label: "শপ"
		},
		{
			to: "/wishlist",
			icon: Heart,
			label: "উইশ",
			badge: wishlistCount
		},
		{
			to: "/cart",
			icon: ShoppingBag,
			label: "কার্ট",
			badge: cartCount
		},
		{
			to: "/account",
			icon: User,
			label: "অ্যাকাউন্ট"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_30px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "grid grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openSearch,
					className: cn("flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] text-muted-foreground transition hover:text-primary"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 19 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "খুঁজুন" })]
				}),
				items.slice(0, 1).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLink, {
					...i,
					active: pathname === i.to
				}, i.to)),
				items.slice(2).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLink, {
					...i,
					active: pathname.startsWith(i.to) && (i.to !== "/" || pathname === "/")
				}, i.to))
			]
		})
	});
}
function BarLink({ to, icon: Icon, label, badge, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("relative flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] transition", active ? "text-primary" : "text-muted-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 19 }), badge !== void 0 && badge > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -right-2 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[9px] font-semibold text-primary-foreground",
				children: bnNum(badge)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
/**
* Slim luxury scroll-progress bar pinned to the very top of the viewport.
* Purely visual — does not modify any existing layout.
*/
function PageProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const max = h.scrollHeight - h.clientHeight;
			setProgress(max > 0 ? h.scrollTop / max * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left bg-gradient-to-r from-primary via-gold to-primary shadow-[0_0_18px_rgba(212,175,55,0.55)] transition-[width] duration-150 ease-out",
			style: { width: `${progress}%` }
		})
	});
}
/**
* Floating scroll-to-top button with a circular progress ring.
* Appears after ~600px scroll. Additive global chrome.
*/
function ScrollToTop() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const max = h.scrollHeight - h.clientHeight;
			setProgress(max > 0 ? h.scrollTop / max : 0);
			setVisible(h.scrollTop > 600);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const R = 22;
	const C = 2 * Math.PI * R;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		initial: {
			opacity: 0,
			scale: .6,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .6,
			y: 20
		},
		transition: {
			type: "spring",
			stiffness: 320,
			damping: 22
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "উপরে যান",
		className: "group fixed bottom-24 right-5 z-[95] grid h-14 w-14 place-items-center rounded-full bg-background/85 text-primary shadow-[0_18px_45px_-15px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:text-dark md:bottom-8 md:right-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "absolute inset-0 h-full w-full -rotate-90",
			viewBox: "0 0 52 52",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "26",
					cy: "26",
					r: R,
					strokeWidth: "2.5",
					className: "fill-none stroke-border/60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "26",
					cy: "26",
					r: R,
					strokeWidth: "2.5",
					strokeLinecap: "round",
					className: "fill-none stroke-[url(#stt-grad)] transition-[stroke-dashoffset] duration-150 ease-out",
					style: {
						strokeDasharray: C,
						strokeDashoffset: C * (1 - progress)
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "stt-grad",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "var(--primary)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "var(--gold)"
					})]
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
			size: 16,
			strokeWidth: 2.5,
			className: "relative transition-transform group-hover:-translate-y-0.5"
		})]
	}) });
}
/**
* Brand loading veil — shows once per session on first paint,
* fades out after the window `load` event. Additive; no layout impact.
*/
function PageLoader() {
	const [shown, setShown] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (sessionStorage.getItem("cx_loaded") === "1") {
			setShown(false);
			return;
		}
		const done = () => {
			sessionStorage.setItem("cx_loaded", "1");
			setTimeout(() => setShown(false), 480);
		};
		if (document.readyState === "complete") done();
		else window.addEventListener("load", done, { once: true });
		const t = setTimeout(done, 2200);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: shown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
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
		className: "fixed inset-0 z-[200] grid place-items-center bg-[radial-gradient(circle_at_center,var(--background),var(--secondary))]",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-20 w-20 place-items-center rounded-[22px] bg-primary text-primary-foreground shadow-[0_25px_60px_-20px_rgba(123,30,30,0.55)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-bold tracking-tight",
							children: "CL"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -inset-2 rounded-[26px] border border-gold/40" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg font-bold tracking-[0.35em] text-primary",
						children: "CHAYALUX"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground",
						children: "Luxury Home Decor"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-[2px] w-40 overflow-hidden rounded-full bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { x: "-100%" },
						animate: { x: "100%" },
						transition: {
							duration: 1.1,
							ease: "easeInOut",
							repeat: Infinity
						},
						className: "absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
					})
				})
			]
		})
	}) });
}
var STORAGE_KEY = "chayalux_cookie_consent_v1";
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const t = setTimeout(() => {
			try {
				if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
			} catch {}
		}, 1200);
		return () => clearTimeout(t);
	}, []);
	const decide = (value) => {
		try {
			localStorage.setItem(STORAGE_KEY, value);
		} catch {}
		setVisible(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		role: "dialog",
		"aria-live": "polite",
		"aria-label": "কুকি সম্মতি",
		initial: {
			opacity: 0,
			y: 40
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: 40
		},
		transition: {
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-card rounded-[22px] p-5 shadow-float",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, {
							size: 20,
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-sm font-semibold text-foreground",
								children: "আমরা কুকি ব্যবহার করি"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted-foreground",
								children: [
									"আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে ও পছন্দ মনে রাখতে আমরা কুকি ব্যবহার করি। বিস্তারিত জানতে",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/privacy-policy",
										className: "text-primary underline underline-offset-2",
										children: "প্রাইভেসি পলিসি"
									}),
									" ",
									"দেখুন।"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => decide("accepted"),
									className: "ripple-btn inline-flex items-center justify-center rounded-[14px] bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft-lux transition hover:bg-dark",
									children: "সম্মত আছি"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => decide("declined"),
									className: "inline-flex items-center justify-center rounded-[14px] border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-secondary",
									children: "শুধু জরুরি"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => decide("declined"),
						"aria-label": "বন্ধ করুন",
						className: "grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
					})
				]
			})
		})
	}) });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$31 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর" },
			{
				name: "description",
				content: "ChayaLux — বাংলাদেশের প্রিমিয়াম পর্দা, ভেলভেট, ব্ল্যাকআউট, চাইনিজ কার্টেন ও হোম ডেকোর ব্র্যান্ড।"
			},
			{
				name: "author",
				content: "ChayaLux"
			},
			{
				property: "og:title",
				content: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর"
			},
			{
				property: "og:description",
				content: "লাক্সারি ইন্টেরিয়র, প্রিমিয়াম কার্টেন — সারা বাংলাদেশে হোম ডেলিভারি।"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "ChayaLux",
				alternateName: "ছায়ালাক্স",
				description: "ChayaLux — বাংলাদেশের প্রিমিয়াম পর্দা, ভেলভেট, ব্ল্যাকআউট, চাইনিজ কার্টেন ও হোম ডেকোর ব্র্যান্ড।",
				url: "/",
				logo: "/favicon.ico",
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "+8801885901184",
					contactType: "customer service",
					areaServed: "BD",
					availableLanguage: ["Bengali", "English"]
				},
				sameAs: ["https://www.facebook.com/chayalux", "https://www.instagram.com/chayalux"]
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "ChayaLux",
				url: "/",
				potentialAction: {
					"@type": "SearchAction",
					target: "/search?q={search_term_string}",
					"query-input": "required name=search_term_string"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$31.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ShopProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBottomBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLoader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				richColors: true,
				closeButton: true
			})
		] }) })
	});
}
var $$splitComponentImporter$29 = () => import("./wishlist-BpfSjQeV.mjs");
var Route$30 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "উইশলিস্ট — ChayaLux" }, {
		name: "description",
		content: "আপনার সংরক্ষিত পছন্দের পণ্য।"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./terms-oF5VRnB9.mjs");
var Route$29 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "শর্তাবলী — ChayaLux ছায়ালাক্স" }, {
		name: "description",
		content: "ChayaLux ব্যবহারের শর্তাবলী — অর্ডার, পেমেন্ট, ডেলিভারি ও দায়বদ্ধতার নীতিমালা।"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
init_products();
var BASE_URL = "";
var Route$28 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/shop",
			changefreq: "daily",
			priority: "0.9"
		},
		{
			path: "/new-collection",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/new-arrivals",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/best-sellers",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/offers",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/gallery",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/blog",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/reviews",
			changefreq: "weekly",
			priority: "0.6"
		},
		{
			path: "/faq",
			changefreq: "monthly",
			priority: "0.5"
		},
		{
			path: "/privacy-policy",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/terms",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/return-policy",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/delivery-policy",
			changefreq: "yearly",
			priority: "0.3"
		}
	];
	const dynamic = [
		...(CATEGORIES ?? []).map((c) => ({
			path: `/collections/${c.slug}`,
			changefreq: "weekly",
			priority: "0.7"
		})),
		...(PRODUCTS ?? []).map((p) => ({
			path: `/product/${p.slug}`,
			changefreq: "weekly",
			priority: "0.8"
		})),
		...(BLOGS ?? []).map((b) => ({
			path: `/blog/${b.slug}`,
			changefreq: "monthly",
			priority: "0.6"
		}))
	];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPaths, ...dynamic].map((e) => [
		`  <url>`,
		`    <loc>${BASE_URL}${e.path}</loc>`,
		e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
		e.priority ? `    <priority>${e.priority}</priority>` : null,
		`  </url>`
	].filter(Boolean).join("\n")).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
init_products();
var $$splitComponentImporter$27 = () => import("./shop-D2Xe99fz.mjs");
var Route$27 = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "সব পণ্য — ChayaLux" },
		{
			name: "description",
			content: "ChayaLux-এর সম্পূর্ণ প্রিমিয়াম কালেকশন — পর্দা, কুশন, বেডশিট, সোফা কভার ও হোম ডেকোর।"
		},
		{
			property: "og:title",
			content: "সব পণ্য — ChayaLux"
		},
		{
			property: "og:description",
			content: "প্রিমিয়াম কার্টেন ও হোম ডেকোরের সম্পূর্ণ কালেকশন।"
		},
		{
			property: "og:image",
			content: IMAGES.heroImg
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./reviews-ClKKIMuK.mjs");
var Route$26 = createFileRoute("/reviews")({
	head: () => ({ meta: [
		{ title: "গ্রাহকদের মতামত — ChayaLux ছায়ালাক্স" },
		{
			name: "description",
			content: "হাজারো সন্তুষ্ট গ্রাহকের অভিজ্ঞতা — ChayaLux-এর প্রিমিয়াম পণ্য ও সার্ভিস সম্পর্কে বাস্তব রিভিউ।"
		},
		{
			property: "og:title",
			content: "গ্রাহকদের মতামত — ChayaLux"
		},
		{
			property: "og:image",
			content: IMG.hero3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./return-policy-Dxiet3pV.mjs");
var Route$25 = createFileRoute("/return-policy")({
	head: () => ({ meta: [{ title: "রিটার্ন নীতি — ChayaLux ছায়ালাক্স" }, {
		name: "description",
		content: "ChayaLux রিটার্ন ও পরিবর্তন নীতি — ৭ দিনের মধ্যে সহজ রিটার্ন প্রক্রিয়া।"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./register-DWJdp49-.mjs");
var Route$24 = createFileRoute("/register")({
	head: () => ({ meta: [{ title: "রেজিস্টার — ChayaLux" }] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./privacy-policy-DETML8lW.mjs");
var Route$23 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [
		{ title: "গোপনীয়তা নীতি — ChayaLux ছায়ালাক্স" },
		{
			name: "description",
			content: "ChayaLux গোপনীয়তা নীতি — আপনার তথ্যের নিরাপত্তা ও ব্যবহারের নীতিমালা।"
		},
		{
			property: "og:title",
			content: "গোপনীয়তা নীতি — ChayaLux"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
init_products();
var $$splitComponentImporter$22 = () => import("./offers-DsFirRiy.mjs");
var Route$22 = createFileRoute("/offers")({
	head: () => ({ meta: [
		{ title: "অফার ও ছাড় — ChayaLux" },
		{
			name: "description",
			content: "৩০%+ পর্যন্ত ছাড়ে ChayaLux-এর প্রিমিয়াম পণ্য।"
		},
		{
			property: "og:title",
			content: "অফার ও ছাড় — ChayaLux"
		},
		{
			property: "og:image",
			content: IMAGES.promoBanner
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
init_products();
var $$splitComponentImporter$21 = () => import("./new-collection-mTYo_QqN.mjs");
var Route$21 = createFileRoute("/new-collection")({
	head: () => ({ meta: [
		{ title: "নতুন কালেকশন ২০২৬ — ChayaLux" },
		{
			name: "description",
			content: "ChayaLux-এর ২০২৬ সিজনের এক্সক্লুসিভ নতুন কালেকশন।"
		},
		{
			property: "og:title",
			content: "নতুন কালেকশন ২০২৬ — ChayaLux"
		},
		{
			property: "og:image",
			content: IMAGES.hero2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
init_products();
var $$splitComponentImporter$20 = () => import("./new-arrivals-C_9efrxm.mjs");
var Route$20 = createFileRoute("/new-arrivals")({
	head: () => ({ meta: [
		{ title: "নতুন আগমন — ChayaLux" },
		{
			name: "description",
			content: "এইমাত্র এসেছে — ChayaLux-এর সর্বশেষ পণ্যসমূহ।"
		},
		{
			property: "og:title",
			content: "নতুন আগমন — ChayaLux"
		},
		{
			property: "og:image",
			content: IMAGES.hero5
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./login-C4dWm2F1.mjs");
var Route$19 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "লগইন — ChayaLux" }] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./gallery-BwIJ4SM_.mjs");
var Route$18 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "গ্যালারি — ChayaLux ছায়ালাক্স" },
		{
			name: "description",
			content: "ChayaLux-এর প্রিমিয়াম প্রজেক্ট গ্যালারি — লিভিং রুম, বেডরুম, অফিস, হসপিটাল ও আরও অনেক লাক্সারি ইন্টেরিয়র।"
		},
		{
			property: "og:title",
			content: "প্রজেক্ট গ্যালারি — ChayaLux"
		},
		{
			property: "og:image",
			content: IMG.heroLiving
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./faq-lFhOXNf2.mjs");
var Route$17 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "সচরাচর জিজ্ঞাসা — ChayaLux ছায়ালাক্স" },
		{
			name: "description",
			content: "ChayaLux সম্পর্কে সাধারণ প্রশ্নের উত্তর — অর্ডার, ডেলিভারি, রিটার্ন, কাস্টম সাইজ এবং আরও অনেক কিছু।"
		},
		{
			property: "og:title",
			content: "প্রশ্নোত্তর — ChayaLux"
		},
		{
			property: "og:image",
			content: IMG.hero4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./delivery-policy-DvpwSIge.mjs");
var Route$16 = createFileRoute("/delivery-policy")({
	head: () => ({ meta: [{ title: "ডেলিভারি নীতি — ChayaLux ছায়ালাক্স" }, {
		name: "description",
		content: "ChayaLux ডেলিভারি নীতি — সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি সেবা।"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./contact-lcEgsHy4.mjs");
var Route$15 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "যোগাযোগ — ChayaLux ছায়ালাক্স" },
		{
			name: "description",
			content: "ChayaLux-এর সাথে যোগাযোগ করুন — ফোন, ইমেইল, WhatsApp, Messenger অথবা সরাসরি শোরুম ভিজিট।"
		},
		{
			property: "og:title",
			content: "যোগাযোগ — ChayaLux"
		},
		{
			property: "og:image",
			content: IMG.roomOffice
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./compare-Dnw1MjtL.mjs");
var Route$14 = createFileRoute("/compare")({
	head: () => ({ meta: [{ title: "পণ্য তুলনা — ChayaLux" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./checkout-B6yPR73S.mjs");
var Route$13 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "চেকআউট — ChayaLux" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./cart-Cnnhuz8S.mjs");
var Route$12 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "আপনার কার্ট — ChayaLux" }, {
		name: "description",
		content: "আপনার নির্বাচিত পণ্যসমূহ দেখুন ও চেকআউট করুন।"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
init_products();
var $$splitComponentImporter$11 = () => import("./best-sellers-MKx2diiz.mjs");
var Route$11 = createFileRoute("/best-sellers")({
	head: () => ({ meta: [
		{ title: "বেস্ট সেলার — ChayaLux" },
		{
			name: "description",
			content: "গ্রাহকদের সবচেয়ে পছন্দের প্রিমিয়াম কালেকশন।"
		},
		{
			property: "og:title",
			content: "বেস্ট সেলার — ChayaLux"
		},
		{
			property: "og:image",
			content: IMAGES.curtainImg
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./account-C15qms9W.mjs");
var Route$10 = createFileRoute("/account")({
	head: () => ({ meta: [{ title: "আমার অ্যাকাউন্ট — ChayaLux" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about--oqtUU09.mjs");
var Route$9 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "আমাদের সম্পর্কে — ChayaLux ছায়ালাক্স" },
		{
			name: "description",
			content: "ChayaLux বাংলাদেশের প্রিমিয়াম হোম ডেকোর ও পর্দার ব্র্যান্ড — আমাদের গল্প, লক্ষ্য, ভিশন ও মূল্যবোধ জানুন।"
		},
		{
			property: "og:title",
			content: "আমাদের সম্পর্কে — ChayaLux"
		},
		{
			property: "og:description",
			content: "ChayaLux — আন্তর্জাতিক মানের লাক্সারি হোম ডেকোর ব্র্যান্ড।"
		},
		{
			property: "og:image",
			content: IMG.heroLiving
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./routes-CUkpPWvZ.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর" },
		{
			name: "description",
			content: "ছায়ালাক্স — বাংলাদেশের প্রিমিয়াম লাক্সারি কার্টেন, ভেলভেট, ব্ল্যাকআউট, চাইনিজ পর্দা ও হোম ডেকোর ব্র্যান্ড।"
		},
		{
			property: "og:title",
			content: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর"
		},
		{
			property: "og:description",
			content: "লাক্সারি ইন্টেরিয়র, প্রিমিয়াম কার্টেন — সারা বাংলাদেশে হোম ডেলিভারি।"
		},
		{
			property: "og:image",
			content: hero_living_room_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./order-tracking.index-d3Gy50Gf.mjs");
var Route$7 = createFileRoute("/order-tracking/")({
	head: () => ({ meta: [{ title: "অর্ডার ট্র্যাকিং — ChayaLux" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./blog.index-CfUNWyC0.mjs");
var Route$6 = createFileRoute("/blog/")({
	head: () => ({ meta: [
		{ title: "ব্লগ — ChayaLux ছায়ালাক্স" },
		{
			name: "description",
			content: "হোম ডেকোর, ইন্টেরিয়র ডিজাইন এবং পর্দা নির্বাচনের গাইড — ChayaLux ব্লগে পড়ুন এক্সপার্টদের পরামর্শ।"
		},
		{
			property: "og:title",
			content: "ChayaLux ব্লগ"
		},
		{
			property: "og:image",
			content: IMG.hero2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./account.index-C1LMfvNl.mjs");
var Route$5 = createFileRoute("/account/")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./account.wishlist-BzD5XigJ.mjs");
var Route$4 = createFileRoute("/account/wishlist")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./account.profile-Cq9L-8G5.mjs");
var Route$3 = createFileRoute("/account/profile")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./account.password-COs9U3Vi.mjs");
var Route$2 = createFileRoute("/account/password")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./account.orders-DkBy8S1m.mjs");
var Route$1 = createFileRoute("/account/orders")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./account.addresses-BtKt2vEO.mjs");
var Route = createFileRoute("/account/addresses")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WishlistRoute = Route$30.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$31
});
var TermsRoute = Route$29.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$31
});
var SitemapDotxmlRoute = Route$28.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$31
});
var ShopRoute = Route$27.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$31
});
var SearchRoute = Route$37.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$31
});
var ReviewsRoute = Route$26.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => Route$31
});
var ReturnPolicyRoute = Route$25.update({
	id: "/return-policy",
	path: "/return-policy",
	getParentRoute: () => Route$31
});
var RegisterRoute = Route$24.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$31
});
var PrivacyPolicyRoute = Route$23.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$31
});
var OffersRoute = Route$22.update({
	id: "/offers",
	path: "/offers",
	getParentRoute: () => Route$31
});
var NewCollectionRoute = Route$21.update({
	id: "/new-collection",
	path: "/new-collection",
	getParentRoute: () => Route$31
});
var NewArrivalsRoute = Route$20.update({
	id: "/new-arrivals",
	path: "/new-arrivals",
	getParentRoute: () => Route$31
});
var LoginRoute = Route$19.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$31
});
var GalleryRoute = Route$18.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$31
});
var FaqRoute = Route$17.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$31
});
var DeliveryPolicyRoute = Route$16.update({
	id: "/delivery-policy",
	path: "/delivery-policy",
	getParentRoute: () => Route$31
});
var ContactRoute = Route$15.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$31
});
var CompareRoute = Route$14.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$31
});
var CheckoutRoute = Route$13.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$31
});
var CartRoute = Route$12.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$31
});
var BestSellersRoute = Route$11.update({
	id: "/best-sellers",
	path: "/best-sellers",
	getParentRoute: () => Route$31
});
var AccountRoute = Route$10.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$31
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$31
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$31
});
var OrderTrackingIndexRoute = Route$7.update({
	id: "/order-tracking/",
	path: "/order-tracking/",
	getParentRoute: () => Route$31
});
var BlogIndexRoute = Route$6.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$31
});
var AccountIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AccountRoute
});
var ProductSlugRoute = Route$36.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$31
});
var OrderTrackingIdRoute = Route$35.update({
	id: "/order-tracking/$id",
	path: "/order-tracking/$id",
	getParentRoute: () => Route$31
});
var OrderSuccessIdRoute = Route$34.update({
	id: "/order-success/$id",
	path: "/order-success/$id",
	getParentRoute: () => Route$31
});
var CollectionsSlugRoute = Route$33.update({
	id: "/collections/$slug",
	path: "/collections/$slug",
	getParentRoute: () => Route$31
});
var BlogSlugRoute = Route$32.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$31
});
var AccountWishlistRoute = Route$4.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => AccountRoute
});
var AccountProfileRoute = Route$3.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AccountRoute
});
var AccountPasswordRoute = Route$2.update({
	id: "/password",
	path: "/password",
	getParentRoute: () => AccountRoute
});
var AccountOrdersRoute = Route$1.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AccountRoute
});
var AccountRouteChildren = {
	AccountAddressesRoute: Route.update({
		id: "/addresses",
		path: "/addresses",
		getParentRoute: () => AccountRoute
	}),
	AccountOrdersRoute,
	AccountPasswordRoute,
	AccountProfileRoute,
	AccountWishlistRoute,
	AccountIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccountRoute: AccountRoute._addFileChildren(AccountRouteChildren),
	BestSellersRoute,
	CartRoute,
	CheckoutRoute,
	CompareRoute,
	ContactRoute,
	DeliveryPolicyRoute,
	FaqRoute,
	GalleryRoute,
	LoginRoute,
	NewArrivalsRoute,
	NewCollectionRoute,
	OffersRoute,
	PrivacyPolicyRoute,
	RegisterRoute,
	ReturnPolicyRoute,
	ReviewsRoute,
	SearchRoute,
	ShopRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	WishlistRoute,
	BlogSlugRoute,
	CollectionsSlugRoute,
	OrderSuccessIdRoute,
	OrderTrackingIdRoute,
	ProductSlugRoute,
	BlogIndexRoute,
	OrderTrackingIndexRoute
};
var routeTree = Route$31._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
