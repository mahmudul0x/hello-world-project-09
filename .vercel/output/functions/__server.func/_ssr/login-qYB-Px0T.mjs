import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { J as init_room_drawing, tt as room_drawing_default } from "./store-CteU02vO.mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { I as Lock, J as EyeOff, P as Mail, p as ShieldCheck, q as Eye } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-qYB-Px0T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_room_drawing();
function LoginPage() {
	const { login, user } = useAuth();
	const navigate = useNavigate();
	const [id, setId] = (0, import_react.useState)("");
	const [pass, setPass] = (0, import_react.useState)("");
	const [show, setShow] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	if (user) {
		navigate({ to: "/account" });
		return null;
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		if (!id.trim() || !pass) {
			setError("ইমেইল/মোবাইল ও পাসওয়ার্ড দিন।");
			return;
		}
		setLoading(true);
		await new Promise((r) => setTimeout(r, 400));
		const res = login(id, pass);
		setLoading(false);
		if (!res.ok) setError(res.msg);
		else navigate({ to: "/account" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-10 md:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-luxury md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative hidden min-h-[560px] md:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: room_drawing_default,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-dark/60 via-primary/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-end p-10 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-[11px] uppercase tracking-widest backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 12 }), " নিরাপদ লগইন"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl font-bold leading-tight",
								children: [
									"আপনার ChayaLux ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" অ্যাকাউন্ট"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-sm text-sm opacity-90",
								children: "অর্ডার ট্র্যাক, উইশলিস্ট, ঠিকানা ও অফার — সব এক জায়গায়।"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				className: "p-8 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-widest text-gold",
							children: "Welcome Back"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 heading-display text-3xl",
							children: "লগইন করুন"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"অ্যাকাউন্ট নেই?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/register",
									className: "font-semibold text-primary underline-offset-4 hover:underline",
									children: "রেজিস্টার করুন"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ইমেইল বা মোবাইল",
							icon: Mail,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: id,
								onChange: (e) => setId(e.target.value),
								placeholder: "email@example.com অথবা 01XXXXXXXXX",
								className: "input-lux pl-11"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "পাসওয়ার্ড",
							icon: Lock,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: show ? "text" : "password",
								value: pass,
								onChange: (e) => setPass(e.target.value),
								placeholder: "আপনার পাসওয়ার্ড",
								className: "input-lux pl-11 pr-11"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShow((s) => !s),
								className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary",
								"aria-label": show ? "লুকান" : "দেখান",
								children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 16 })
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-[12px] border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
							type: "submit",
							variant: "primary",
							size: "lg",
							disabled: loading,
							className: "w-full",
							children: loading ? "প্রবেশ করছি..." : "লগইন করুন"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								size: 11,
								className: "mr-1 inline"
							}), " আপনার তথ্য নিরাপদ ও এনক্রিপ্টেড"]
						})
					]
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .input-lux { width: 100%; height: 48px; padding: 0 14px; border-radius: 14px; border: 1px solid var(--border); background: var(--background); font-size: 14px; outline: none; transition: border-color .2s, box-shadow .2s; }
        .input-lux:focus { border-color: var(--primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 12%, transparent); }
      ` })] });
}
function Field({ label, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-semibold text-foreground/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 16,
				className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
			}), children]
		})]
	});
}
//#endregion
export { LoginPage as component };
