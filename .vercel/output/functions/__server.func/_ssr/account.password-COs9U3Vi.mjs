import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { B as Key } from "../_libs/lucide-react.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.password-COs9U3Vi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PasswordPage() {
	const { changePassword } = useAuth();
	const [oldP, setOldP] = (0, import_react.useState)("");
	const [newP, setNewP] = (0, import_react.useState)("");
	const [confirmP, setConfirmP] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)(null);
	const onSubmit = (e) => {
		e.preventDefault();
		if (newP.length < 6) return setMsg({
			ok: false,
			text: "নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে।"
		});
		if (newP !== confirmP) return setMsg({
			ok: false,
			text: "পাসওয়ার্ড মিলছে না।"
		});
		const res = changePassword(oldP, newP);
		setMsg({
			ok: res.ok,
			text: res.msg
		});
		if (res.ok) {
			setOldP("");
			setNewP("");
			setConfirmP("");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "heading-display mb-6 text-2xl",
		children: "পাসওয়ার্ড পরিবর্তন"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "max-w-md space-y-4 rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "পুরনো পাসওয়ার্ড",
				value: oldP,
				onChange: setOldP
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "নতুন পাসওয়ার্ড",
				value: newP,
				onChange: setNewP
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "নতুন পাসওয়ার্ড নিশ্চিত করুন",
				value: confirmP,
				onChange: setConfirmP
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `rounded-[10px] px-3 py-2 text-xs ${msg.ok ? "bg-emerald-100 text-emerald-800" : "bg-destructive/10 text-destructive"}`,
				children: msg.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
				type: "submit",
				variant: "primary",
				size: "lg",
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { size: 16 }), " পরিবর্তন করুন"]
			})
		]
	})] });
}
function Input({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-semibold text-foreground/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "password",
			value,
			onChange: (e) => onChange(e.target.value),
			className: "h-11 w-full rounded-[12px] border border-border bg-background px-3 text-sm outline-none focus:border-primary"
		})]
	});
}
//#endregion
export { PasswordPage as component };
