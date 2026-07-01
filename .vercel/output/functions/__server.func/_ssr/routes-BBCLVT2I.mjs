import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as promo_banner_default, A as hero_living_room_default, B as init_hero_2, C as cushions_default, D as hero_3_default, E as hero_2_default, F as init_cat_hospital, G as init_products, H as init_hero_4, I as init_cat_satin, J as init_room_drawing, K as init_promo_banner, L as init_cat_sofa_cover, M as init_blinds, N as init_cat_bedsheet, O as hero_4_default, P as init_cat_chinese, R as init_curtain_detail, S as curtain_detail_default, U as init_hero_5, V as init_hero_3, W as init_hero_living_room, X as init_room_office, Y as init_room_hotel, _ as cat_bedsheet_default, b as cat_satin_default, c as PRODUCTS, et as room_apartment_default, it as useShop, j as init_bedroom, k as hero_5_default, m as blinds_default, nt as room_hotel_default, p as bedroom_default, q as init_room_apartment, rt as room_office_default, tt as room_drawing_default, v as cat_chinese_default, x as cat_sofa_cover_default, y as cat_hospital_default, z as init_cushions } from "./store-CteU02vO.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { D as Package, E as Palette, H as Heart, Y as Expand, a as Truck, at as Banknote, b as Ruler, ct as ArrowUpRight, et as ChevronRight, f as ShoppingBag, ft as Layers, it as Calendar, lt as ArrowRight, ot as Award, tt as ChevronLeft, v as Scissors } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as SectionHeading } from "./section-heading-BkOnLybf.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as ContactBanner } from "./ContactBanner-DYTYhcfw.mjs";
import { t as Newsletter } from "./Newsletter-DHdYZfvS.mjs";
import { t as FAQ } from "./FAQ-WSe-cp4G.mjs";
import { t as ReviewCard } from "./ReviewCard-CyrL_OBd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BBCLVT2I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_hero_living_room();
init_hero_2();
init_hero_3();
init_hero_4();
init_hero_5();
init_curtain_detail();
init_bedroom();
init_cushions();
init_blinds();
init_cat_chinese();
init_cat_satin();
init_cat_hospital();
init_cat_sofa_cover();
init_cat_bedsheet();
init_room_drawing();
init_room_hotel();
init_room_office();
init_room_apartment();
init_promo_banner();
init_products();
function ProductCard({ product }) {
	const { addToCart, toggleWishlist, isWished } = useShop();
	const catalogProduct = PRODUCTS.find((p) => p.id === product.id);
	const slug = catalogProduct?.slug ?? "";
	const wished = catalogProduct ? isWished(catalogProduct.id) : false;
	const detailTarget = slug ? "/product/$slug" : "/shop";
	const detailParams = slug ? { slug } : void 0;
	const handleAddToCart = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (catalogProduct) addToCart(catalogProduct);
	};
	const handleWishlist = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (catalogProduct) toggleWishlist(catalogProduct.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "group flex flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux transition-shadow duration-500 hover:shadow-float",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: detailTarget,
			params: detailParams,
			className: "image-zoom relative block aspect-[4/5] overflow-hidden bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					loading: "lazy",
					className: "h-full w-full object-cover"
				}),
				product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground",
					children: product.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "উইশলিস্ট",
					onClick: handleWishlist,
					className: "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground shadow-soft-lux backdrop-blur transition hover:bg-primary hover:text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						size: 16,
						fill: wished ? "currentColor" : "none"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleAddToCart,
						className: "ripple-btn flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-dark text-sm font-medium text-background hover:bg-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 16 }), " কার্টে যোগ করুন"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-medium uppercase tracking-widest text-gold",
					children: product.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: detailTarget,
					params: detailParams,
					className: "line-clamp-2 font-display text-base font-semibold text-foreground transition hover:text-primary",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold text-primary",
						children: ["৳", product.price.toLocaleString("bn-BD")]
					}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted-foreground line-through",
						children: ["৳", product.oldPrice.toLocaleString("bn-BD")]
					})]
				})
			]
		})]
	});
}
function CategoryCard({ category, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
			delay: index * .06,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/collections/$slug",
			params: { slug: category.slug },
			className: "group image-zoom relative flex aspect-[3/4] h-full flex-col justify-end overflow-hidden rounded-[22px] shadow-soft-lux hover-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: category.image,
					alt: category.name,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[image:var(--gradient-hero)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex items-end justify-between gap-3 p-6 text-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold leading-tight",
						children: category.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-background/75",
						children: [category.count, "টি পণ্য"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-background/95 text-primary transition group-hover:bg-gold group-hover:text-dark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })
					})]
				})
			]
		})
	});
}
function FeatureCard({ feature, index = 0 }) {
	const Icon = feature.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
			delay: index * .06
		},
		className: "group flex flex-col gap-4 rounded-[22px] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-luxury",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 22,
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold text-foreground",
				children: feature.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: feature.description
			})
		]
	});
}
function BlogCard({ post, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: "#",
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
			delay: index * .08
		},
		className: "group flex flex-col overflow-hidden rounded-[22px] bg-card shadow-soft-lux hover-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "image-zoom relative aspect-[16/10] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image,
				alt: post.title,
				loading: "lazy",
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur",
				children: post.category
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 13 }),
						" ",
						post.date
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold leading-snug text-foreground transition group-hover:text-primary",
					children: post.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-sm leading-relaxed text-muted-foreground",
					children: post.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary",
					children: ["পড়ুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 14,
						className: "transition-transform group-hover:translate-x-1"
					})]
				})
			]
		})]
	});
}
function GalleryCard({ image, title, index = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .96
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .5,
			delay: index * .05
		},
		className: `group image-zoom relative overflow-hidden rounded-[22px] shadow-soft-lux ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: title ?? "gallery",
				loading: "lazy",
				className: "h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-dark/0 transition group-hover:bg-dark/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-14 w-14 place-items-center rounded-full bg-background/95 text-primary shadow-luxury",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { size: 20 })
				})
			}),
			title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-4 rounded-full bg-background/95 px-4 py-1.5 text-xs font-medium text-foreground opacity-0 backdrop-blur transition group-hover:opacity-100",
				children: title
			})
		]
	});
}
function HeroSlider({ slides }) {
	const [i, setI] = (0, import_react.useState)(0);
	const navigate = useNavigate();
	const total = slides.length;
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % total), 6500);
		return () => clearInterval(t);
	}, [total]);
	const go = (n) => setI((n + total) % total);
	const slide = slides[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative w-full overflow-hidden bg-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[500px] w-full sm:h-[600px] lg:h-[700px] xl:h-[750px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "sync",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: 1.08
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: {
							opacity: 0,
							scale: 1.02
						},
						transition: {
							duration: 1.4,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "absolute inset-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: slide.image,
								alt: slide.title,
								className: "h-full w-full object-cover",
								initial: { scale: 1 },
								animate: { scale: 1.1 },
								transition: {
									duration: 8,
									ease: "linear"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" })
						]
					}, i)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-luxury relative z-10 flex h-full items-center justify-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								y: -20
							},
							transition: {
								duration: .8,
								ease: [
									.22,
									1,
									.36,
									1
								],
								delay: .3
							},
							className: "flex max-w-3xl flex-col items-center gap-5 text-background",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-gold backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold" }), slide.eyebrow]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "heading-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl",
									children: [
										slide.title,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold-gradient",
											children: slide.highlight
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-lg text-base leading-relaxed text-background/85 sm:text-lg",
									children: slide.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
										variant: "gold",
										size: "lg",
										onClick: () => navigate({ to: "/shop" }),
										children: ["এখনই অর্ডার করুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
										variant: "outline",
										size: "lg",
										onClick: () => navigate({ to: "/new-collection" }),
										className: "border-background/40 text-background hover:border-gold hover:text-gold",
										children: "সব কালেকশন দেখুন"
									})]
								})
							]
						}, i)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => go(i - 1),
					"aria-label": "আগের স্লাইড",
					className: "absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 bg-background/10 text-background backdrop-blur-md transition hover:bg-gold hover:text-dark md:flex lg:left-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => go(i + 1),
					"aria-label": "পরের স্লাইড",
					className: "absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 bg-background/10 text-background backdrop-blur-md transition hover:bg-gold hover:text-dark md:flex lg:right-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2",
					children: slides.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(idx),
						"aria-label": `স্লাইড ${idx + 1}`,
						className: `h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-10 bg-gold" : "w-4 bg-background/40"}`
					}, idx))
				})
			]
		})
	});
}
function TrustCard({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury relative z-20 -mt-16 md:-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .8,
				delay: .4,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-border shadow-float md:grid-cols-4",
			children: items.map((it, idx) => {
				const Icon = it.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex items-center gap-4 bg-card px-5 py-6 transition-colors hover:bg-primary-soft sm:px-6 sm:py-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground sm:h-14 sm:w-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 22,
							strokeWidth: 1.75
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-sm font-semibold text-foreground sm:text-base",
							children: it.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: it.subtitle
						})]
					})]
				}, idx);
			})
		})
	});
}
function FeaturedCollection({ collections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxury flex flex-col gap-6",
		children: collections.map((c, i) => {
			const reverse = i % 2 === 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: `grid overflow-hidden rounded-[28px] bg-card shadow-luxury md:grid-cols-[1.1fr_1fr] ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "image-zoom relative aspect-[5/4] md:aspect-auto md:min-h-[420px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.image,
						alt: c.title,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-6 top-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur",
							children: ["কালেকশন ", String(i + 1).padStart(2, "0")]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
							children: c.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "heading-display text-3xl text-foreground sm:text-4xl lg:text-[42px]",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-relaxed text-muted-foreground",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
								variant: "primary",
								size: "lg",
								children: [
									c.cta,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
								]
							})
						})
					]
				})]
			}, c.title);
		})
	});
}
var heroSlides = [
	{
		image: hero_living_room_default,
		eyebrow: "নতুন কালেকশন ২০২৬",
		title: "আপনার ঘরে",
		highlight: "লাক্সারির ছোঁয়া",
		description: "ChayaLux — প্রিমিয়াম কার্টেন, ভেলভেট ড্রেপ ও হোম ডেকোরের এক্সক্লুসিভ কালেকশন। আন্তর্জাতিক মানের ইন্টেরিয়র, বাংলার হৃদয়ে।"
	},
	{
		image: hero_2_default,
		eyebrow: "গোল্ডেন কালেকশন",
		title: "সোনালী আভায়",
		highlight: "উষ্ণ সন্ধ্যা",
		description: "সাটিন গোল্ডের রাজকীয় পর্দায় সাজান আপনার ড্রয়িং রুম — প্রতিটি মুহূর্ত হয়ে উঠুক বিশেষ।"
	},
	{
		image: hero_3_default,
		eyebrow: "মিনিমাল লিভিং",
		title: "স্নিগ্ধ সকাল,",
		highlight: "কোমল আলো",
		description: "লিনেন ও শিয়ার পর্দার কম্বিনেশনে নরম প্রাকৃতিক আলোয় ভরে উঠুক আপনার শোবার ঘর।"
	},
	{
		image: hero_4_default,
		eyebrow: "ভেলভেট সিরিজ",
		title: "রাজকীয় বার্গান্ডি,",
		highlight: "চিরস্মরণীয়",
		description: "রয়্যাল ভেলভেট কার্টেনে আপনার লিভিং রুম হয়ে উঠবে ৫-স্টার হোটেলের মতো বিলাসবহুল।"
	},
	{
		image: hero_5_default,
		eyebrow: "কাস্টম টেইলরিং",
		title: "প্রতিটি জানালার জন্য",
		highlight: "পার্ফেক্ট ফিট",
		description: "আপনার জানালার মাপে হাতে তৈরি প্রিমিয়াম কার্টেন — বিনামূল্যে ফিটিং সার্ভিস সহ।"
	}
];
var trustItems = [
	{
		icon: Truck,
		title: "দ্রুত ডেলিভারি",
		subtitle: "সারা বাংলাদেশে"
	},
	{
		icon: Banknote,
		title: "ক্যাশ অন ডেলিভারি",
		subtitle: "হাতে পেয়ে পেমেন্ট"
	},
	{
		icon: Palette,
		title: "১০০% কালার গ্যারান্টি",
		subtitle: "রং জ্বলবে না"
	},
	{
		icon: Award,
		title: "প্রিমিয়াম কোয়ালিটি",
		subtitle: "আন্তর্জাতিক মান"
	}
];
var categories = [
	{
		name: "লাক্সারি কার্টেন",
		count: 48,
		image: hero_living_room_default,
		slug: "home-tex"
	},
	{
		name: "ব্ল্যাকআউট পর্দা",
		count: 36,
		image: bedroom_default,
		slug: "blackout"
	},
	{
		name: "ভেলভেট পর্দা",
		count: 42,
		image: curtain_detail_default,
		slug: "velvet"
	},
	{
		name: "চাইনিজ পর্দা",
		count: 28,
		image: cat_chinese_default,
		slug: "chinese"
	},
	{
		name: "উইন্ডো ব্লাইন্ড",
		count: 24,
		image: blinds_default,
		slug: "window-blinds"
	},
	{
		name: "হসপিটাল পর্দা",
		count: 18,
		image: cat_hospital_default,
		slug: "hospital"
	},
	{
		name: "সোফা কভার",
		count: 32,
		image: cat_sofa_cover_default,
		slug: "sofa-cover"
	},
	{
		name: "ফোম ও লুজ কভার",
		count: 22,
		image: cushions_default,
		slug: "foam-cover"
	},
	{
		name: "কুশন কালেকশন",
		count: 62,
		image: cushions_default,
		slug: "cushion"
	},
	{
		name: "বিছানার চাদর",
		count: 45,
		image: cat_bedsheet_default,
		slug: "bedsheet"
	}
];
var collections = [
	{
		eyebrow: "এক্সক্লুসিভ",
		title: "চাইনিজ প্রিমিয়াম পর্দা",
		description: "নিখুঁত এমব্রয়ডারি ও সিল্ক টাচ ফিনিশিং — ঐতিহ্যবাহী চাইনিজ ডিজাইন আধুনিক টুইস্টে।",
		image: cat_chinese_default,
		cta: "কালেকশন দেখুন"
	},
	{
		eyebrow: "সিগনেচার",
		title: "ভেলভেট কালেকশন",
		description: "রয়্যাল বার্গান্ডি থেকে ডীপ এমারাল্ড — প্রিমিয়াম ভেলভেটে ঘরকে দিন হোটেল স্যুইটের অনুভূতি।",
		image: curtain_detail_default,
		cta: "এক্সপ্লোর করুন"
	},
	{
		eyebrow: "নতুন",
		title: "লাক্সারি সাটিন কার্টেন",
		description: "চকচকে সাটিন ফেব্রিকে সোনালী আভা — ড্রয়িং রুমের জন্য পার্ফেক্ট চয়েস।",
		image: cat_satin_default,
		cta: "শপ করুন"
	}
];
var bestSellers = [
	{
		id: "1",
		name: "রয়্যাল ভেলভেট বার্গান্ডি পর্দা",
		category: "ভেলভেট",
		price: 4850,
		oldPrice: 6200,
		image: curtain_detail_default,
		badge: "৩০% ছাড়"
	},
	{
		id: "2",
		name: "মডার্ন ব্ল্যাকআউট ড্রেপ",
		category: "ব্ল্যাকআউট",
		price: 3950,
		image: bedroom_default,
		badge: "বেস্ট"
	},
	{
		id: "3",
		name: "সিল্ক টাচ কুশন সেট",
		category: "কুশন",
		price: 1850,
		oldPrice: 2400,
		image: cushions_default,
		badge: "সেল"
	},
	{
		id: "4",
		name: "প্রিমিয়াম উইন্ডো ব্লাইন্ড",
		category: "ব্লাইন্ড",
		price: 5200,
		image: blinds_default
	}
];
var newArrivals = [
	{
		id: "5",
		name: "গোল্ডেন সাটিন লাক্সারি পর্দা",
		category: "সাটিন",
		price: 5450,
		image: cat_satin_default,
		badge: "নতুন"
	},
	{
		id: "6",
		name: "চাইনিজ এমব্রয়ডারি কার্টেন",
		category: "চাইনিজ",
		price: 4250,
		oldPrice: 5500,
		image: cat_chinese_default,
		badge: "নতুন"
	},
	{
		id: "7",
		name: "প্রিমিয়াম সিল্ক বেডশিট",
		category: "বেডশিট",
		price: 2850,
		image: cat_bedsheet_default,
		badge: "নতুন"
	},
	{
		id: "8",
		name: "ইউনিভার্সাল সোফা কভার",
		category: "সোফা কভার",
		price: 3150,
		oldPrice: 3900,
		image: cat_sofa_cover_default
	}
];
var features = [
	{
		icon: Layers,
		title: "প্রিমিয়াম ফেব্রিক",
		description: "আন্তর্জাতিক মানের বেছে নেওয়া কাপড় — নরম, টেকসই ও বিলাসবহুল।"
	},
	{
		icon: Palette,
		title: "দীর্ঘস্থায়ী রঙ",
		description: "১০০% কালার গ্যারান্টি — বছরের পর বছর একই উজ্জ্বলতা।"
	},
	{
		icon: Ruler,
		title: "কাস্টম সাইজ",
		description: "আপনার জানালার মাপে পার্ফেক্ট ফিটিং — বিনামূল্যে টেইলরিং।"
	},
	{
		icon: Scissors,
		title: "উন্নত স্টিচিং",
		description: "ডাবল-লাইন স্টিচিং — শক্তিশালী, পরিপাটি ও দীর্ঘস্থায়ী।"
	},
	{
		icon: Truck,
		title: "দ্রুত ডেলিভারি",
		description: "ঢাকায় ১-২ দিন, সারা দেশে ৩-৫ দিনে হোম ডেলিভারি।"
	},
	{
		icon: Package,
		title: "বিশেষ প্যাকেজিং",
		description: "প্রিমিয়াম প্যাকেজিং — উপহার হিসেবেও পার্ফেক্ট।"
	}
];
var inspirations = [
	{
		image: hero_living_room_default,
		title: "লিভিং রুম"
	},
	{
		image: bedroom_default,
		title: "বেডরুম"
	},
	{
		image: room_drawing_default,
		title: "ড্রয়িং রুম"
	},
	{
		image: room_office_default,
		title: "অফিস"
	},
	{
		image: cat_hospital_default,
		title: "হসপিটাল"
	},
	{
		image: room_hotel_default,
		title: "হোটেল"
	},
	{
		image: room_apartment_default,
		title: "মডার্ন অ্যাপার্টমেন্ট"
	}
];
var reviews = [
	{
		name: "সাদিয়া রহমান",
		location: "ধানমন্ডি, ঢাকা",
		rating: 5,
		text: "কাপড়ের কোয়ালিটি অসাধারণ! ঘরের লুক পুরোপুরি বদলে গেছে। ডেলিভারিও দ্রুত ছিল।"
	},
	{
		name: "তানভীর আহমেদ",
		location: "গুলশান, ঢাকা",
		rating: 5,
		text: "প্রিমিয়াম ফিনিশিং, দাম ন্যায্য। ChayaLux-এর সার্ভিস সত্যিই লাক্সারি ব্র্যান্ডের মতো।"
	},
	{
		name: "নুসরাত জাহান",
		location: "চট্টগ্রাম",
		rating: 5,
		text: "ভেলভেট কার্টেনটি ছবির চেয়েও সুন্দর। বন্ধুরা এখন সবাই জিজ্ঞেস করে কোথা থেকে নিয়েছি।"
	}
];
var posts = [
	{
		title: "২০২৬ সালের সেরা কার্টেন ট্রেন্ড",
		excerpt: "এই বছর কোন রঙ ও ডিজাইন আপনার ঘরকে করবে আরও আকর্ষণীয়।",
		image: hero_living_room_default,
		date: "১০ জুন, ২০২৬",
		category: "ট্রেন্ড"
	},
	{
		title: "ছোট ঘরকে বড় দেখানোর ৫টি টিপস",
		excerpt: "সঠিক পর্দা ও রঙের কম্বিনেশনে ছোট ঘরও দেখাবে প্রশস্ত।",
		image: bedroom_default,
		date: "৫ জুন, ২০২৬",
		category: "টিপস"
	},
	{
		title: "ব্ল্যাকআউট পর্দার সুবিধা",
		excerpt: "ঘুমের মান বাড়াতে ও গরম কমাতে ব্ল্যাকআউট পর্দার ভূমিকা।",
		image: blinds_default,
		date: "১ জুন, ২০২৬",
		category: "গাইড"
	}
];
var faqs = [
	{
		q: "সারা বাংলাদেশে কি ডেলিভারি হয়?",
		a: "হ্যাঁ, আমরা সারা বাংলাদেশে হোম ডেলিভারি প্রদান করি। ঢাকার ভিতরে ১-২ দিন এবং বাইরে ৩-৫ দিন সময় লাগে।"
	},
	{
		q: "পেমেন্ট মেথড কী কী?",
		a: "আপাতত আমরা ক্যাশ অন ডেলিভারি (COD) সুবিধা দিচ্ছি — পণ্য হাতে পেয়ে পরিশোধ করুন।"
	},
	{
		q: "কাস্টম সাইজে পর্দা তৈরি হয়?",
		a: "অবশ্যই। আপনার জানালার মাপ অনুযায়ী আমরা কাস্টম টেইলরিং করে দিই — কোনো অতিরিক্ত চার্জ নেই।"
	},
	{
		q: "রিটার্ন পলিসি কী?",
		a: "পণ্য পাওয়ার ৭ দিনের মধ্যে ম্যানুফ্যাকচারিং ত্রুটি থাকলে বিনামূল্যে রিটার্ন/এক্সচেঞ্জ করা হয়।"
	},
	{
		q: "কালার গ্যারান্টি কতদিনের?",
		a: "আমাদের সব প্রিমিয়াম পর্দায় ১০০% কালার গ্যারান্টি — সঠিক যত্নে বছরের পর বছর একই রং থাকবে।"
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, { slides: heroSlides }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustCard, { items: trustItems }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-20 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "ক্যাটাগরি",
				title: "ক্যাটাগরি অনুযায়ী শপ করুন",
				description: "প্রতিটি ঘরের জন্য পার্ফেক্ট চয়েস — কার্টেন থেকে হোম ডেকোর, সবকিছু এক জায়গায়।"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
					category: c,
					index: i
				}, c.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "ফিচার্ড কালেকশন",
					title: "সিগনেচার কালেকশনসমূহ",
					description: "আমাদের সবচেয়ে জনপ্রিয় ও এক্সক্লুসিভ কালেকশন — প্রতিটি ঘরের জন্য বিশেষ।"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCollection, { collections })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid overflow-hidden rounded-[28px] bg-[linear-gradient(115deg,oklch(0.94_0.03_75)_0%,oklch(0.36_0.13_25)_100%)] shadow-luxury md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-fit rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-dark",
							children: "বিশেষ অফার"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h3, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { duration: .7 },
							className: "heading-display text-3xl text-primary-foreground sm:text-4xl lg:text-5xl",
							children: [
								"আপনার ঘরের সৌন্দর্য বাড়ুক",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold-gradient",
									children: "ChayaLux-এর সাথে"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-relaxed text-primary-foreground/85",
							children: "আন্তর্জাতিক মানের ইন্টেরিয়র ডিজাইন — এখন সহজলভ্য বাংলাদেশে। প্রিমিয়াম কালেকশনে পাচ্ছেন ৩০% পর্যন্ত ছাড়।"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
								variant: "gold",
								size: "lg",
								children: ["অফার দেখুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
								variant: "outline",
								size: "lg",
								className: "border-primary-foreground/40 text-primary-foreground hover:border-gold hover:text-gold",
								children: "আরও জানুন"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "image-zoom relative aspect-[4/3] md:aspect-auto md:min-h-[440px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: promo_banner_default,
						alt: "Luxury interior",
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent md:from-primary/30" })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "বেস্ট সেলার",
					title: "সবচেয়ে জনপ্রিয় পণ্য",
					description: "গ্রাহকদের সবচেয়ে পছন্দের কালেকশন — সীমিত স্টক।",
					align: "left",
					className: "mx-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
					variant: "outline",
					size: "md",
					children: ["সব দেখুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
				children: bestSellers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft/40 py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "কেন ChayaLux",
					title: "যে কারণে গ্রাহকরা আমাদের বেছে নেন",
					description: "৫০০০+ সন্তুষ্ট পরিবারের পছন্দের কারণ — কোয়ালিটি, সার্ভিস, বিশ্বাস।"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
						feature: f,
						index: i
					}, f.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "নতুন আগমন",
					title: "নতুন কালেকশন ২০২৬",
					description: "এইমাত্র এসেছে আমাদের নতুন সিজনের এক্সক্লুসিভ ডিজাইন।",
					align: "left",
					className: "mx-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
					variant: "outline",
					size: "md",
					children: ["সব দেখুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
				children: newArrivals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "ইন্সপিরেশন",
				title: "রুম ইন্সপিরেশন গ্যালারি",
				description: "আসল ঘরে আমাদের কাজের ঝলক — ইন্সপায়ার হোন, তারপর আপনার ঘরও সাজান।"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						image: inspirations[0].image,
						title: inspirations[0].title,
						index: 0,
						className: "col-span-2 row-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						image: inspirations[1].image,
						title: inspirations[1].title,
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						image: inspirations[2].image,
						title: inspirations[2].title,
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						image: inspirations[3].image,
						title: inspirations[3].title,
						index: 3,
						className: "col-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						image: inspirations[4].image,
						title: inspirations[4].title,
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						image: inspirations[5].image,
						title: inspirations[5].title,
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						image: inspirations[6].image,
						title: inspirations[6].title,
						index: 6,
						className: "col-span-2 md:col-span-2"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft/40 py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "গ্রাহক রিভিউ",
					title: "আমাদের গ্রাহকরা যা বলছেন",
					description: "৫০০০+ সন্তুষ্ট গ্রাহকের মধ্যে কিছু ভালোবাসার গল্প।"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						review: r,
						index: i
					}, r.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "ব্লগ",
					title: "ইন্টেরিয়র ইন্সপিরেশন",
					align: "left",
					className: "mx-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
					variant: "outline",
					size: "md",
					children: ["সব ব্লগ পড়ুন ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: posts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, {
					post: p,
					index: i
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "প্রশ্নোত্তর",
				title: "সাধারণ জিজ্ঞাসা",
				description: "আপনার প্রশ্নের উত্তর — না পেলে আমাদের কল করুন।"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: faqs })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-10 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBanner, {})
		})
	] });
}
//#endregion
export { HomePage as component };
