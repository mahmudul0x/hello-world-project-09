import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { y as Save } from "../_libs/lucide-react.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.profile-Cq9L-8G5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { user, updateProfile } = useAuth();
	const [form, setForm] = (0, import_react.useState)({
		name: user?.name ?? "",
		phone: user?.phone ?? "",
		email: user?.email ?? ""
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "heading-display mb-6 text-2xl",
		children: "প্রোফাইল"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-primary to-dark font-display text-2xl font-bold text-primary-foreground shadow-luxury",
					children: user?.name?.charAt(0) ?? "?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-lg font-semibold",
					children: user?.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: ["সদস্য হয়েছেন ", new Date(user?.createdAt ?? Date.now()).toLocaleDateString("en-GB")]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "নাম",
						value: form.name,
						onChange: (v) => setForm({
							...form,
							name: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "মোবাইল",
						value: form.phone,
						onChange: (v) => setForm({
							...form,
							phone: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "ইমেইল",
						value: form.email,
						onChange: (v) => setForm({
							...form,
							email: v
						}),
						className: "sm:col-span-2"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
				variant: "primary",
				size: "lg",
				className: "mt-6",
				onClick: () => updateProfile(form),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 16 }), " আপডেট করুন"]
			})
		]
	})] });
}
function Input({ label, value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `flex flex-col gap-1.5 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold text-foreground/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "h-11 rounded-[12px] border border-border bg-background px-3 text-sm outline-none focus:border-primary"
		})]
	});
}
//#endregion
export { ProfilePage as component };
