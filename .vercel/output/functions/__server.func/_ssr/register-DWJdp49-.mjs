import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Y as init_room_hotel, nt as room_hotel_default } from "./store-CteU02vO.mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { I as Lock, J as EyeOff, P as Mail, T as Phone, i as User, p as ShieldCheck, q as Eye } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-DWJdp49-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_room_hotel();
var schema = objectType({
	name: stringType().trim().min(2, "নাম দিন"),
	phone: stringType().trim().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল দিন"),
	email: stringType().trim().email("সঠিক ইমেইল দিন"),
	password: stringType().min(6, "কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড")
});
function RegisterPage() {
	const { register, user } = useAuth();
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		password: ""
	});
	const [show, setShow] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	if (user) {
		navigate({ to: "/account" });
		return null;
	}
	const set = (k, v) => setForm((s) => ({
		...s,
		[k]: v
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		setMsg(null);
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			const errs = {};
			for (const iss of parsed.error.issues) errs[String(iss.path[0])] = iss.message;
			setErrors(errs);
			return;
		}
		setErrors({});
		setLoading(true);
		await new Promise((r) => setTimeout(r, 400));
		const res = register(form);
		setLoading(false);
		if (!res.ok) setMsg(res.msg);
		else navigate({ to: "/account" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-10 md:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-luxury md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				className: "order-2 p-8 md:order-1 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-widest text-gold",
							children: "Join ChayaLux"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 heading-display text-3xl",
							children: "নতুন অ্যাকাউন্ট"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"ইতিমধ্যে অ্যাকাউন্ট আছে?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "font-semibold text-primary underline-offset-4 hover:underline",
									children: "লগইন করুন"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "নাম",
							icon: User,
							error: errors.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.name,
								onChange: (e) => set("name", e.target.value),
								placeholder: "আপনার নাম",
								className: "input-lux pl-11"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "মোবাইল নম্বর",
							icon: Phone,
							error: errors.phone,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.phone,
								onChange: (e) => set("phone", e.target.value),
								placeholder: "01XXXXXXXXX",
								className: "input-lux pl-11"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ইমেইল",
							icon: Mail,
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.email,
								onChange: (e) => set("email", e.target.value),
								placeholder: "email@example.com",
								className: "input-lux pl-11"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "পাসওয়ার্ড",
							icon: Lock,
							error: errors.password,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: show ? "text" : "password",
								value: form.password,
								onChange: (e) => set("password", e.target.value),
								placeholder: "কমপক্ষে ৬ অক্ষর",
								className: "input-lux pl-11 pr-11"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShow((s) => !s),
								className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary",
								children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 16 })
							})]
						}),
						msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-[12px] border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive",
							children: msg
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
							type: "submit",
							variant: "primary",
							size: "lg",
							disabled: loading,
							className: "w-full",
							children: loading ? "প্রক্রিয়া চলছে..." : "অ্যাকাউন্ট তৈরি করুন"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center text-[11px] text-muted-foreground",
							children: "রেজিস্টার করলে আপনি আমাদের সেবার শর্তাবলী মেনে নিচ্ছেন।"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-1 hidden min-h-[560px] md:order-2 md:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: room_hotel_default,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-bl from-dark/60 via-primary/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-end p-10 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-[11px] uppercase tracking-widest backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 12 }), " লাক্সারি এক্সপেরিয়েন্স"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl font-bold leading-tight",
								children: [
									"বিলাসবহুল হোম ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" এক্সপেরিয়েন্স"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-sm text-sm opacity-90",
								children: "প্রিমিয়াম পর্দা, কুশন ও হোম ডেকোর — সরাসরি আপনার দরজায়।"
							})
						]
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .input-lux { width: 100%; height: 48px; padding: 0 14px; border-radius: 14px; border: 1px solid var(--border); background: var(--background); font-size: 14px; outline: none; transition: border-color .2s, box-shadow .2s; }
        .input-lux:focus { border-color: var(--primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 12%, transparent); }
      ` })] });
}
function Field({ label, icon: Icon, children, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1.5 block text-xs font-semibold text-foreground/80",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 16,
					className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
				}), children]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-[11px] text-destructive",
				children: error
			})
		]
	});
}
//#endregion
export { RegisterPage as component };
