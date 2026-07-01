import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { N as MapPin, y as Save } from "../_libs/lucide-react.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as BD_DISTRICTS } from "./bd-locations-CBzC0YoW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.addresses-BtKt2vEO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "chayalux.address.v1";
function AddressesPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		district: "",
		upazila: "",
		address: ""
	});
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) setForm(JSON.parse(raw));
		} catch {}
	}, []);
	const save = () => {
		localStorage.setItem(KEY, JSON.stringify(form));
		toast.success("ঠিকানা সংরক্ষণ হয়েছে");
	};
	const upazilas = BD_DISTRICTS.find((d) => d.name === form.district)?.upazilas ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "heading-display mb-6 text-2xl",
		children: "সংরক্ষিত ঠিকানা"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[22px] border border-border/60 bg-card p-6 shadow-soft-lux",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold",
					children: "প্রাইমারি ঠিকানা"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "চেকআউটে স্বয়ংক্রিয়ভাবে ব্যবহার হবে"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "জেলা",
						value: form.district,
						onChange: (v) => setForm({
							...form,
							district: v,
							upazila: ""
						}),
						options: BD_DISTRICTS.map((d) => d.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "উপজেলা",
						value: form.upazila,
						onChange: (v) => setForm({
							...form,
							upazila: v
						}),
						options: upazilas,
						disabled: !form.district
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "পূর্ণ ঠিকানা",
						value: form.address,
						onChange: (v) => setForm({
							...form,
							address: v
						}),
						className: "sm:col-span-2"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
				variant: "primary",
				size: "lg",
				className: "mt-6",
				onClick: save,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 16 }), " সংরক্ষণ করুন"]
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
function Select({ label, value, onChange, options, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold text-foreground/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			disabled,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "h-11 rounded-[12px] border border-border bg-background px-3 text-sm outline-none focus:border-primary disabled:opacity-50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "— নির্বাচন —"
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		})]
	});
}
//#endregion
export { AddressesPage as component };
