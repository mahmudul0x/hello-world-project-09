import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, a as CATEGORIES, h as bnNum, i as ALL_ROOMS, n as ALL_FABRICS, r as ALL_PATTERNS, t as ALL_COLORS } from "./store-CteU02vO.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { $ as ChevronUp, R as LayoutGrid, _ as Search, d as SlidersHorizontal, lt as ArrowRight, nt as ChevronDown, r as X, rt as Check } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as ProductCardPro } from "./ProductCardPro-B_KEyEQD.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ShopListing-_sDOODmO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
init_products();
var defaultFilters = {
	search: "",
	categories: [],
	price: [1e3, 8e3],
	fabrics: [],
	colors: [],
	patterns: [],
	rooms: [],
	inStockOnly: false,
	discountOnly: false
};
function toggle(arr, v) {
	return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}
function FilterSidebar({ value, onChange, onReset, className }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("flex flex-col gap-5 rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-semibold",
					children: "ফিল্টার"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onReset,
					className: "flex items-center gap-1 text-xs text-muted-foreground transition hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 }), " রিসেট"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					size: 15,
					className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "পণ্য খুঁজুন...",
					value: value.search,
					onChange: (e) => set({ search: e.target.value }),
					className: "h-11 rounded-[14px] border-border bg-background pl-9 text-sm"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
				type: "multiple",
				defaultValue: [
					"category",
					"price",
					"fabric",
					"color"
				],
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterAccordion, {
						value: "category",
						label: "ক্যাটাগরি",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2.5 pt-1",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: c.name,
								checked: value.categories.includes(c.slug),
								onChange: () => set({ categories: toggle(value.categories, c.slug) })
							}, c.slug))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterAccordion, {
						value: "price",
						label: "দাম",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 500,
								max: 1e4,
								step: 100,
								value: value.price,
								onValueChange: (v) => set({ price: [v[0], v[1]] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["৳", bnNum(value.price[0])] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["৳", bnNum(value.price[1])] })]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterAccordion, {
						value: "fabric",
						label: "ফেব্রিক",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2.5 pt-1",
							children: ALL_FABRICS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: f,
								checked: value.fabrics.includes(f),
								onChange: () => set({ fabrics: toggle(value.fabrics, f) })
							}, f))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterAccordion, {
						value: "color",
						label: "রঙ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2.5 pt-1",
							children: ALL_COLORS.map((c) => {
								const active = value.colors.includes(c.name);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => set({ colors: toggle(value.colors, c.name) }),
									title: c.name,
									className: cn("group relative aspect-square rounded-full border-2 transition", active ? "border-primary shadow-soft-lux" : "border-border hover:border-gold"),
									style: { background: c.hex },
									"aria-label": c.name,
									children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[9px] text-primary-foreground",
										children: "✓"
									})
								}, c.name);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterAccordion, {
						value: "pattern",
						label: "প্যাটার্ন",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2.5 pt-1",
							children: ALL_PATTERNS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: p,
								checked: value.patterns.includes(p),
								onChange: () => set({ patterns: toggle(value.patterns, p) })
							}, p))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterAccordion, {
						value: "room",
						label: "রুম টাইপ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2.5 pt-1",
							children: ALL_ROOMS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: r,
								checked: value.rooms.includes(r),
								onChange: () => set({ rooms: toggle(value.rooms, r) })
							}, r))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterAccordion, {
						value: "avail",
						label: "অ্যাভেইলেবিলিটি",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2.5 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: "শুধু স্টকে থাকা",
								checked: value.inStockOnly,
								onChange: () => set({ inStockOnly: !value.inStockOnly })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: "শুধু ছাড় থাকা পণ্য",
								checked: value.discountOnly,
								onChange: () => set({ discountOnly: !value.discountOnly })
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
				variant: "primary",
				size: "md",
				className: "w-full",
				onClick: onReset,
				children: "ফিল্টার রিসেট করুন"
			})
		]
	});
}
function FilterAccordion({ value, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
		value,
		className: "border-b border-border/60 last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
			className: "py-3 text-sm font-semibold text-foreground hover:no-underline",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
			className: "pb-4",
			children
		})]
	});
}
function CheckRow({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex cursor-pointer items-center gap-2.5 text-sm text-foreground/85 transition hover:text-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
			checked,
			onCheckedChange: onChange,
			className: "rounded-md"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function ProductGrid({ products }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid place-items-center rounded-[22px] border border-dashed border-border/70 bg-card/60 px-6 py-24 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-semibold",
				children: "কোনো পণ্য পাওয়া যায়নি"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "আপনার ফিল্টার একটু পরিবর্তন করে আবার চেষ্টা করুন — আমাদের কালেকশনে ১০০+ প্রিমিয়াম পণ্য রয়েছে।"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4",
		children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardPro, {
			product: p,
			index: i
		}, p.id))
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
init_products();
function ProductToolbar({ count, total, sort, onSort, onOpenFilters }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-border/60 bg-card px-4 py-3 shadow-soft-lux",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [onOpenFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onOpenFilters,
				className: "flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 14 }), " ফিল্টার"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
					size: 14,
					className: "text-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: bnNum(count)
					}),
					" ",
					"/ ",
					bnNum(total),
					" পণ্য"
				] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: "সাজান:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: sort,
				onValueChange: (v) => onSort(v),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-10 w-[180px] rounded-[14px] border-border bg-background text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "featured",
						children: "ফিচার্ড"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "new",
						children: "নতুন আগে"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "price-asc",
						children: "দাম: কম থেকে বেশি"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "price-desc",
						children: "দাম: বেশি থেকে কম"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "rating",
						children: "রেটিং"
					})
				] })]
			})]
		})]
	});
}
function CollectionBanner({ eyebrow, title, description, image, ctaLabel = "শপ করুন", onCta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury pt-6 md:pt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[28px] shadow-luxury",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "image-zoom relative aspect-[16/8] w-full sm:aspect-[16/6]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: title,
					loading: "eager",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--dark)_75%,transparent)_0%,color-mix(in_oklab,var(--dark)_35%,transparent)_50%,transparent_100%)]" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-luxury",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "max-w-xl text-primary-foreground",
						children: [
							eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-4 inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-dark",
								children: eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "heading-display text-3xl leading-tight sm:text-4xl lg:text-5xl",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-base",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
									variant: "gold",
									size: "lg",
									onClick: onCta,
									children: [
										ctaLabel,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
									]
								})
							})
						]
					})
				})
			})]
		})
	});
}
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function ShopListing({ title, description, bannerImage, eyebrow, products, lockedFilter }) {
	const [filters, setFilters] = (0, import_react.useState)({
		...defaultFilters,
		...lockedFilter
	});
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		let list = products.slice();
		const s = filters.search.trim().toLowerCase();
		if (s) list = list.filter((p) => p.name.toLowerCase().includes(s) || p.shortDesc.toLowerCase().includes(s));
		if (filters.categories.length) list = list.filter((p) => filters.categories.includes(p.category));
		list = list.filter((p) => p.price >= filters.price[0] && p.price <= filters.price[1]);
		if (filters.fabrics.length) list = list.filter((p) => filters.fabrics.some((f) => p.fabric.includes(f)));
		if (filters.colors.length) list = list.filter((p) => p.colors.some((c) => filters.colors.includes(c.name)));
		if (filters.patterns.length) list = list.filter((p) => p.patterns.some((pt) => filters.patterns.includes(pt)));
		if (filters.rooms.length) list = list.filter((p) => p.rooms.some((r) => filters.rooms.includes(r)));
		if (filters.inStockOnly) list = list.filter((p) => p.inStock);
		if (filters.discountOnly) list = list.filter((p) => p.oldPrice && p.oldPrice > p.price);
		switch (sort) {
			case "new":
				list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
				break;
			case "price-asc":
				list.sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				list.sort((a, b) => b.price - a.price);
				break;
			case "rating":
				list.sort((a, b) => b.rating - a.rating);
				break;
			default: list.sort((a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured) || b.rating - a.rating);
		}
		return list;
	}, [
		products,
		filters,
		sort
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionBanner, {
		eyebrow,
		title,
		description,
		image: bannerImage
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-10 md:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSidebar, {
						value: filters,
						onChange: setFilters,
						onReset: () => setFilters({
							...defaultFilters,
							...lockedFilter
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
					open: mobileOpen,
					onOpenChange: setMobileOpen,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
						side: "left",
						className: "w-[92%] max-w-sm overflow-y-auto p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSidebar, {
							value: filters,
							onChange: setFilters,
							onReset: () => setFilters({
								...defaultFilters,
								...lockedFilter
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductToolbar, {
						count: filtered.length,
						total: products.length,
						sort,
						onSort: setSort,
						onOpenFilters: () => setMobileOpen(true)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: filtered })]
				})
			]
		})
	})] });
}
//#endregion
export { ShopListing as t };
