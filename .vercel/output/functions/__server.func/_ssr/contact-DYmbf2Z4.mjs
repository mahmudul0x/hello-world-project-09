import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as IMG } from "./content-DZlQVS3P.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { K as Facebook, N as MapPin, P as Mail, Q as Clock, T as Phone, V as Instagram, g as Send, j as MessageCircle, n as Youtube } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as PageHero } from "./PageHero-DxeBJMjt.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DYmbf2Z4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var contactSchema = objectType({
	name: stringType().trim().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে").max(80, "নাম অনেক বড়"),
	phone: stringType().trim().min(11, "সঠিক মোবাইল নম্বর দিন").max(15, "মোবাইল নম্বর ভুল"),
	email: stringType().trim().email("সঠিক ইমেইল ঠিকানা দিন").max(120),
	subject: stringType().trim().min(3, "বিষয় দিন").max(120),
	message: stringType().trim().min(10, "বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে").max(800, "বার্তা অনেক বড়")
});
var INFO = [
	{
		icon: Phone,
		label: "ফোন",
		value: "01885-901184",
		href: "tel:01885901184"
	},
	{
		icon: Mail,
		label: "ইমেইল",
		value: "mdjahedhasanfb@gmail.com",
		href: "mailto:mdjahedhasanfb@gmail.com"
	},
	{
		icon: MessageCircle,
		label: "WhatsApp",
		value: "01885-901184",
		href: "https://wa.me/8801885901184"
	},
	{
		icon: Clock,
		label: "কর্মঘণ্টা",
		value: "শনি — বৃহঃ, ১০:০০ — ৯:০০ টা"
	}
];
var SOCIALS = [
	{
		icon: Facebook,
		href: "https://facebook.com/chayalux",
		label: "Facebook",
		color: "bg-[#1877F2]"
	},
	{
		icon: MessageCircle,
		href: "https://m.me/chayalux",
		label: "Messenger",
		color: "bg-[#006AFF]"
	},
	{
		icon: Instagram,
		href: "https://instagram.com/chayalux",
		label: "Instagram",
		color: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"
	},
	{
		icon: Youtube,
		href: "https://youtube.com/@chayalux",
		label: "YouTube",
		color: "bg-[#FF0000]"
	}
];
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		subject: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = (e) => {
		e.preventDefault();
		const res = contactSchema.safeParse(form);
		if (!res.success) {
			const errs = {};
			res.error.issues.forEach((i) => {
				errs[i.path[0]] = i.message;
			});
			setErrors(errs);
			toast.error("অনুগ্রহ করে ফর্মের ত্রুটিগুলো ঠিক করুন");
			return;
		}
		setErrors({});
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("আপনার বার্তা পাঠানো হয়েছে!", { description: "আমরা দ্রুত আপনার সাথে যোগাযোগ করব।" });
			setForm({
				name: "",
				phone: "",
				email: "",
				subject: "",
				message: ""
			});
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "যোগাযোগ",
		title: "আপনার প্রশ্ন — আমাদের অগ্রাধিকার",
		description: "যেকোনো পরামর্শ, কাস্টম অর্ডার বা প্রজেক্ট ইনকোয়ারির জন্য আমরা সবসময় প্রস্তুত।",
		image: IMG.roomOffice
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				onSubmit: submit,
				className: "rounded-[28px] bg-card p-6 shadow-luxury md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-gold",
						children: "বার্তা পাঠান"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "heading-display mt-2 text-2xl md:text-3xl",
						children: "আমাদের লিখুন"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "ফর্মটি পূরণ করুন — আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "নাম",
								error: errors.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									placeholder: "আপনার পূর্ণ নাম",
									className: input(errors.name)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "মোবাইল",
								error: errors.phone,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.phone,
									onChange: (e) => setForm({
										...form,
										phone: e.target.value
									}),
									placeholder: "01XXX-XXXXXX",
									className: input(errors.phone)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "ইমেইল",
								error: errors.email,
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									placeholder: "you@example.com",
									className: input(errors.email)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "বিষয়",
								error: errors.subject,
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.subject,
									onChange: (e) => setForm({
										...form,
										subject: e.target.value
									}),
									placeholder: "যেমন: কাস্টম পর্দার অর্ডার",
									className: input(errors.subject)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "বার্তা",
								error: errors.message,
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									value: form.message,
									onChange: (e) => setForm({
										...form,
										message: e.target.value
									}),
									placeholder: "আপনার বার্তা বিস্তারিত লিখুন...",
									className: `${input(errors.message)} min-h-[130px] py-3 resize-none`
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
						type: "submit",
						variant: "primary",
						size: "lg",
						className: "mt-6 w-full sm:w-auto",
						disabled: loading,
						children: loading ? "পাঠানো হচ্ছে..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), " বার্তা পাঠান"] })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: .1
					},
					className: "rounded-[28px] bg-primary p-8 text-primary-foreground shadow-luxury",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-gold",
							children: "যোগাযোগ তথ্য"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "heading-display mt-2 text-2xl",
							children: "সরাসরি কথা বলুন"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4",
							children: [INFO.map((i) => {
								const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-dark shadow-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { size: 17 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-widest text-primary-foreground/60",
										children: i.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium",
										children: i.value
									})] })]
								});
								return i.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: i.href,
									target: i.href.startsWith("http") ? "_blank" : void 0,
									rel: "noreferrer",
									className: "block transition hover:opacity-90",
									children: inner
								}, i.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: inner }, i.label);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 border-t border-primary-foreground/15 pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-dark shadow-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 17 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-widest text-primary-foreground/60",
									children: "ঠিকানা"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm leading-relaxed",
									children: [
										"Karim Mansion, Solstice Home Collection",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Islampur, Old Dhaka, Bangladesh"
									]
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-primary-foreground/15 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-widest text-primary-foreground/60",
								children: "সোশ্যাল মিডিয়া"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-3",
								children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": s.label,
									className: `group grid h-11 w-11 place-items-center rounded-full ${s.color} text-white shadow-soft-lux transition hover:-translate-y-1 hover:scale-110`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 17 })
								}, s.label))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						delay: .15
					},
					className: "overflow-hidden rounded-[28px] shadow-luxury",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "ChayaLux Location",
						src: "https://www.google.com/maps?q=Islampur+Old+Dhaka+Bangladesh&output=embed",
						className: "h-[320px] w-full border-0",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})]
			})]
		})
	})] });
}
function Field({ label, error, children, className }) {
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
var input = (err) => `h-12 rounded-[14px] border bg-background px-4 text-sm outline-none transition focus:border-primary ${err ? "border-destructive" : "border-border"}`;
//#endregion
export { ContactPage as component };
