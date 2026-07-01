import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as init_products, c as PRODUCTS, g as bnPrice, h as bnNum, it as useShop, s as PAYMENT_METHODS, w as getProduct } from "./store-CteU02vO.mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { I as Lock, N as MapPin, T as Phone, X as CreditCard, at as Banknote, f as ShoppingBag, i as User, p as ShieldCheck, rt as Check } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as BD_DISTRICTS } from "./bd-locations-CBzC0YoW.mjs";
import { t as EmptyState } from "./EmptyState-dtZSkf-p.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-D6mjRYOJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_products();
var schema = objectType({
	name: stringType().trim().min(2, "নাম দিন"),
	phone: stringType().trim().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন"),
	altPhone: stringType().trim().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর").or(literalType("")).optional(),
	district: stringType().min(1, "জেলা নির্বাচন করুন"),
	upazila: stringType().min(1, "উপজেলা নির্বাচন করুন"),
	address: stringType().trim().min(6, "পূর্ণ ঠিকানা দিন"),
	note: stringType().max(300).optional()
});
function CheckoutPage() {
	const navigate = useNavigate();
	const { cart, hydrated, cartSubtotal, cartTotal, couponCode, couponDiscount, deliveryCharge, placeOrder } = useShop();
	const { user } = useAuth();
	const [form, setForm] = (0, import_react.useState)({
		name: user?.name ?? "",
		phone: user?.phone ?? "",
		altPhone: "",
		district: "",
		upazila: "",
		address: "",
		note: ""
	});
	const [payment, setPayment] = (0, import_react.useState)("cod");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const upazilas = (0, import_react.useMemo)(() => BD_DISTRICTS.find((d) => d.name === form.district)?.upazilas ?? [], [form.district]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container-luxury py-20" }) });
	if (cart.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxury py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: ShoppingBag,
			title: "কার্ট খালি",
			description: "চেকআউট করতে হলে আগে পণ্য কার্টে যোগ করুন।",
			action: {
				label: "শপে যান",
				to: "/shop"
			}
		})
	}) });
	const set = (k, v) => setForm((s) => ({
		...s,
		[k]: v
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			const errs = {};
			for (const iss of parsed.error.issues) errs[String(iss.path[0])] = iss.message;
			setErrors(errs);
			return;
		}
		setErrors({});
		setSubmitting(true);
		await new Promise((r) => setTimeout(r, 700));
		navigate({
			to: "/order-success/$id",
			params: { id: placeOrder({
				address: {
					name: form.name,
					phone: form.phone,
					altPhone: form.altPhone || void 0,
					district: form.district,
					upazila: form.upazila,
					address: form.address,
					note: form.note || void 0
				},
				payment
			}).id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxury py-10 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "heading-display text-3xl sm:text-4xl",
				children: "চেকআউট"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { size: 12 }), " আপনার তথ্য নিরাপদ ও এনক্রিপ্টেড"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid gap-8 lg:grid-cols-[1fr_420px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					icon: User,
					title: "কাস্টমার তথ্য",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "নাম *",
								error: errors.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.name,
									onChange: (e) => set("name", e.target.value),
									placeholder: "আপনার পূর্ণ নাম",
									className: "input-lux"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "মোবাইল নম্বর *",
								error: errors.phone,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.phone,
									onChange: (e) => set("phone", e.target.value),
									placeholder: "01XXXXXXXXX",
									className: "input-lux"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "বিকল্প মোবাইল",
								error: errors.altPhone,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.altPhone,
									onChange: (e) => set("altPhone", e.target.value),
									placeholder: "01XXXXXXXXX (ঐচ্ছিক)",
									className: "input-lux"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "জেলা *",
								error: errors.district,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: form.district,
									onChange: (e) => {
										set("district", e.target.value);
										set("upazila", "");
									},
									className: "input-lux",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "— জেলা নির্বাচন —"
									}), BD_DISTRICTS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: d.name,
										children: d.name
									}, d.name))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "উপজেলা *",
								error: errors.upazila,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: form.upazila,
									onChange: (e) => set("upazila", e.target.value),
									disabled: !form.district,
									className: "input-lux disabled:opacity-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "— উপজেলা নির্বাচন —"
									}), upazilas.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: u,
										children: u
									}, u))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "পূর্ণ ঠিকানা *",
								error: errors.address,
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.address,
									onChange: (e) => set("address", e.target.value),
									placeholder: "বাসা/রোড/এলাকা",
									className: "input-lux"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "ডেলিভারি নোট",
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.note,
									onChange: (e) => set("note", e.target.value),
									rows: 3,
									placeholder: "বিশেষ কোনো নির্দেশনা থাকলে লিখুন...",
									className: "input-lux resize-none"
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					icon: CreditCard,
					title: "পেমেন্ট মেথড",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: PAYMENT_METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPayment(m.id),
							className: `flex items-start gap-3 rounded-[16px] border-2 p-4 text-left transition ${payment === m.id ? "border-primary bg-primary-soft/40 shadow-soft-lux" : "border-border hover:border-primary/60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-10 w-10 shrink-0 place-items-center rounded-full ${payment === m.id ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/70"}`,
								children: m.id === "cod" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banknote, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-semibold",
										children: m.label
									}), payment === m.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 14,
										className: "text-primary"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-[11px] text-muted-foreground",
									children: m.hint
								})]
							})]
						}, m.id))
					}), payment !== "cod" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-[14px] bg-gold-soft/60 p-3 text-xs text-foreground/80",
						children: [
							"পেমেন্ট শেষে ট্রানজেকশন আইডি আমাদের WhatsApp ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "01885-901184" }),
							"-এ পাঠান।"
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:sticky lg:top-28 h-fit space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "আপনার অর্ডার"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 max-h-[280px] space-y-3 overflow-auto pr-1",
							children: cart.map((it) => {
								const p = getProduct(PRODUCTS.find((x) => x.id === it.productId)?.slug ?? "");
								if (!p) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.images[0],
												alt: p.name,
												className: "h-14 w-14 rounded-[12px] object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground",
												children: bnNum(it.qty)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "line-clamp-1 text-xs font-semibold",
												children: p.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] text-muted-foreground",
												children: [
													it.color,
													" • ",
													it.size
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-primary",
											children: bnPrice(p.price * it.qty)
										})
									]
								}, it.key);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-2 border-t border-border pt-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SumRow, {
									label: "সাবটোটাল",
									value: bnPrice(cartSubtotal)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SumRow, {
									label: "ডেলিভারি",
									value: deliveryCharge === 0 ? "ফ্রি" : bnPrice(deliveryCharge)
								}),
								couponDiscount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SumRow, {
									label: `ছাড় (${couponCode})`,
									value: `-${bnPrice(couponDiscount)}`,
									accent: "text-emerald-700"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between border-t border-border pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "সর্বমোট"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl font-bold text-primary",
										children: bnPrice(cartTotal)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
							type: "submit",
							variant: "primary",
							size: "lg",
							disabled: submitting,
							className: "mt-4 w-full",
							children: submitting ? "প্রক্রিয়া চলছে..." : "অর্ডার নিশ্চিত করুন"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-center gap-4 text-[10px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 11 }), " সিকিউর"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 11 }), " ২৪/৭ সাপোর্ট"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 11 }), " সারা বাংলাদেশ"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[16px] bg-primary-soft/40 p-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-primary",
							children: "অ্যাকাউন্ট নেই?"
						}),
						" চেকআউট শেষে আপনার তথ্য দিয়ে অ্যাকাউন্ট তৈরি করা যাবে বা",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "underline hover:text-primary",
							children: "লগইন করুন"
						}),
						"।"
					]
				})]
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .input-lux {
          width: 100%;
          height: 46px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--background);
          font-size: 14px;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input-lux:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 12%, transparent);
        }
        textarea.input-lux { height: auto; padding: 12px 14px; }
      ` })] });
}
function Card({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .4 },
		className: "rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-bold",
				children: title
			})]
		}), children]
	});
}
function Field({ label, children, error, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `flex flex-col gap-1.5 ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold text-foreground/80",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-destructive",
				children: error
			})
		]
	});
}
function SumRow({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-medium ${accent ?? "text-foreground"}`,
			children: value
		})]
	});
}
//#endregion
export { CheckoutPage as component };
