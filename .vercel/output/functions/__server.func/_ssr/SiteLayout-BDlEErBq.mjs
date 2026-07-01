import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, Q as products_exports, f as __toCommonJS, g as bnPrice, h as bnNum, it as useShop, w as getProduct } from "./store-CteU02vO.mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { H as Heart, K as Facebook, M as Menu, N as MapPin, P as Mail, T as Phone, V as Instagram, W as GitCompare, _ as Search, a as Truck, dt as Sparkles, f as ShoppingBag, i as User, j as MessageCircle, n as Youtube, p as ShieldCheck, r as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-BDlEErBq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Truck,
		text: "সারা বাংলাদেশে ক্যাশ অন ডেলিভারির সুবিধা"
	},
	{
		icon: ShieldCheck,
		text: "১০০% কালার গ্যারান্টি"
	},
	{
		icon: Sparkles,
		text: "প্রিমিয়াম হোম ডেকোর কালেকশন"
	},
	{
		icon: Truck,
		text: "৩-৫ দিনে হোম ডেলিভারি"
	}
];
function AnnouncementBar() {
	const loop = [
		...items,
		...items,
		...items
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex overflow-hidden py-2.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "flex shrink-0 items-center gap-12 whitespace-nowrap pr-12 text-xs font-medium tracking-wide sm:text-sm",
				animate: { x: ["0%", "-50%"] },
				transition: {
					duration: 32,
					ease: "linear",
					repeat: Infinity
				},
				children: loop.map((it, i) => {
					const Icon = it.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 14,
								className: "text-gold"
							}),
							it.text,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-12 h-1 w-1 rounded-full bg-gold/60" })
						]
					}, i);
				})
			})
		})
	});
}
init_products();
function MiniCart({ children }) {
	const { cart, cartCount, cartSubtotal, removeFromCart } = useShop();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/cart",
			onClick: () => setOpen(false),
			className: "block",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: 8
			},
			transition: { duration: .18 },
			className: "absolute right-0 top-full z-[70] mt-2 hidden w-[380px] overflow-hidden rounded-[22px] border border-border/60 bg-background shadow-luxury lg:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border/60 bg-primary-soft/40 px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-display font-semibold text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 16 }), " আপনার কার্ট"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [bnNum(cartCount), "টি পণ্য"]
				})]
			}), cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 22 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: "কার্ট এখনো খালি"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "পছন্দের পণ্য কার্টে যোগ করুন।"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-4 inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground",
						children: "শপিং শুরু করুন"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "max-h-[340px] overflow-auto p-3",
				children: cart.slice(0, 5).map((it) => {
					const p = getProduct(slugFor(it.productId));
					if (!p) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-[14px] p-2 transition hover:bg-primary-soft/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								onClick: () => setOpen(false),
								className: "shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: p.name,
									className: "h-16 w-16 rounded-[12px] object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "line-clamp-1 text-xs font-semibold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-0.5 line-clamp-1 text-[10px] text-muted-foreground",
										children: [
											it.color,
											" • ",
											it.size
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-primary",
											children: bnPrice(p.price * it.qty)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] text-muted-foreground",
											children: ["× ", bnNum(it.qty)]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => removeFromCart(it.key),
								"aria-label": "সরান",
								className: "grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 })
							})
						]
					}, it.key);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 bg-muted/30 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "সাবটোটাল"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-bold text-primary",
						children: bnPrice(cartSubtotal)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cart",
						onClick: () => setOpen(false),
						className: "flex h-10 items-center justify-center rounded-[12px] border border-border bg-background text-xs font-medium transition hover:border-primary hover:text-primary",
						children: "কার্ট দেখুন"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						onClick: () => setOpen(false),
						className: "flex h-10 items-center justify-center rounded-[12px] bg-primary text-xs font-medium text-primary-foreground transition hover:bg-dark",
						children: "চেকআউট"
					})]
				})]
			})] })]
		}) })]
	});
}
function slugFor(id) {
	const { PRODUCTS } = (init_products(), __toCommonJS(products_exports));
	return PRODUCTS.find((p) => p.id === id)?.slug ?? "";
}
init_products();
var navLinks = [
	{
		label: "হোম",
		to: "/"
	},
	{
		label: "সব পণ্য",
		to: "/shop"
	},
	{
		label: "নতুন কালেকশন",
		to: "/new-collection"
	},
	{
		label: "বেস্ট সেলার",
		to: "/best-sellers"
	},
	{
		label: "অফার",
		to: "/offers"
	},
	{
		label: "নতুন আগমন",
		to: "/new-arrivals"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { cartCount, wishlistCount, compare, openSearch, hydrated } = useShop();
	const { user } = useAuth();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: cn("relative w-full border-b transition-all duration-500", scrolled ? "border-border/60 bg-background/95 shadow-luxury backdrop-blur-xl" : "border-transparent bg-background/90 shadow-soft-lux backdrop-blur"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury flex h-20 items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-primary text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold",
							children: "C"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-gold" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-bold tracking-tight text-foreground",
							children: "ChayaLux"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground",
							children: "ছায়ালাক্স"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "story-link relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary",
						children: l.label
					}, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: openSearch,
							"aria-label": "খুঁজুন",
							className: "relative grid h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 })
						}),
						compare.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/compare",
							"aria-label": "তুলনা",
							className: "relative hidden h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary sm:grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-dark px-1 text-[10px] font-semibold text-background",
								children: bnNum(compare.length)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wishlist",
							"aria-label": "উইশলিস্ট",
							className: "relative hidden h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary sm:grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 }), hydrated && wishlistCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-semibold text-dark",
								children: bnNum(wishlistCount)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniCart, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative grid h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: hydrated && cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									scale: 0,
									opacity: 0
								},
								animate: {
									scale: 1,
									opacity: 1
								},
								exit: {
									scale: 0,
									opacity: 0
								},
								transition: {
									type: "spring",
									damping: 12
								},
								className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground",
								children: bnNum(cartCount)
							}, cartCount) })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: user ? "/account" : "/login",
							"aria-label": "অ্যাকাউন্ট",
							className: "relative hidden h-11 w-11 place-items-center rounded-full text-foreground transition hover:bg-primary-soft hover:text-primary sm:grid",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 hidden h-6 w-px bg-border md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://facebook.com/chayalux",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "ফেসবুক",
							className: "hidden h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:text-primary md:grid",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/8801885901184",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "WhatsApp",
							className: "hidden h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:text-primary md:grid",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:01885901184",
							className: "ripple-btn ml-2 hidden h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:bg-dark md:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), " 01885-901184"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(true),
							"aria-label": "মেনু",
							className: "ml-1 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 text-foreground transition hover:bg-primary hover:text-primary-foreground lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[60] bg-dark/60 backdrop-blur-sm lg:hidden",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "spring",
				damping: 28,
				stiffness: 220
			},
			onClick: (e) => e.stopPropagation(),
			className: "ml-auto flex h-full w-[86%] max-w-sm flex-col bg-background p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-bold",
						children: "মেনু"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						className: "grid h-10 w-10 place-items-center rounded-full bg-muted",
						"aria-label": "বন্ধ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1",
					children: [
						navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							onClick: () => setOpen(false),
							className: "rounded-2xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-primary-soft hover:text-primary",
							children: l.label
						}, l.label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 border-t border-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wishlist",
							onClick: () => setOpen(false),
							className: "rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary",
							children: "উইশলিস্ট"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/compare",
							onClick: () => setOpen(false),
							className: "rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary",
							children: "তুলনা"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: user ? "/account" : "/login",
							onClick: () => setOpen(false),
							className: "rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary",
							children: user ? "আমার অ্যাকাউন্ট" : "লগইন / রেজিস্টার"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/order-tracking",
							onClick: () => setOpen(false),
							className: "rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary",
							children: "অর্ডার ট্র্যাকিং"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto rounded-3xl bg-primary p-5 text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs opacity-70",
							children: "যোগাযোগ করুন"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-lg font-semibold",
							children: "01885-901184"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs opacity-80",
							children: "সারা বাংলাদেশে ডেলিভারি"
						})
					]
				})
			]
		})
	}) })] });
}
var cols = [
	{
		title: "শপ",
		links: [
			"ভেলভেট পর্দা",
			"চাইনিজ পর্দা",
			"ব্ল্যাকআউট",
			"উইন্ডো ব্লাইন্ড",
			"কুশন",
			"বিছানার চাদর"
		]
	},
	{
		title: "সাহায্য",
		links: [
			"ডেলিভারি তথ্য",
			"রিটার্ন পলিসি",
			"সাইজ গাইড",
			"প্রশ্নোত্তর",
			"অর্ডার ট্র্যাক"
		]
	},
	{
		title: "কোম্পানি",
		links: [
			"আমাদের সম্পর্কে",
			"ব্লগ",
			"গ্যালারি",
			"ক্যারিয়ার",
			"যোগাযোগ"
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-dark text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 place-items-center rounded-2xl bg-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold text-primary-foreground",
							children: "C"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl font-bold",
						children: "ChayaLux"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-background/60",
						children: "ছায়ালাক্স"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-sm text-sm leading-relaxed text-background/70",
					children: "প্রিমিয়াম কার্টেন ও হোম ডেকোর — আপনার ঘরে নিয়ে আসুন আন্তর্জাতিক মানের লাক্সারি ইন্টেরিয়র।"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-3 text-sm text-background/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 16,
								className: "mt-0.5 shrink-0 text-gold"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "করিম ম্যানশন, সলস্টিস হোম কালেকশন, ইসলামপুর, পুরান ঢাকা" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:01885901184",
							className: "flex items-center gap-3 hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 16,
								className: "text-gold"
							}), " 01885-901184"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:mdjahedhasanfb@gmail.com",
							className: "flex items-center gap-3 hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								className: "text-gold"
							}), " mdjahedhasanfb@gmail.com"]
						})
					]
				})
			] }), cols.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mb-5 font-display text-sm font-semibold uppercase tracking-widest text-gold",
				children: col.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3 text-sm text-background/70",
				children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "transition hover:text-background",
					children: l
				}) }, l))
			})] }, col.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-background/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxury flex flex-col items-start justify-between gap-4 py-6 text-xs text-background/60 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ChayaLux. সমস্ত অধিকার সংরক্ষিত।"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: [
						Facebook,
						Instagram,
						Youtube
					].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "grid h-9 w-9 place-items-center rounded-full border border-background/15 transition hover:border-gold hover:text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 15 })
					}, i))
				})]
			})
		})]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-50 w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SiteLayout as t };
