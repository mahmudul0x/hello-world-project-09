import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as Mail, g as Send } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Newsletter-DHdYZfvS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[28px] bg-primary p-10 text-primary-foreground shadow-luxury sm:p-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
							children: "নিউজলেটার"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "heading-display mt-3 text-3xl sm:text-4xl",
							children: "নতুন কালেকশন ও অফারের খবর সবার আগে পান"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80",
							children: "সাবস্ক্রাইব করুন — এক্সক্লুসিভ ডিসকাউন্ট, নতুন কার্টেন ও হোম ডেকোর কালেকশন সম্পর্কে সবার আগে জানুন।"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setEmail("");
						},
						className: "flex flex-col gap-3 rounded-[18px] bg-background/10 p-2 backdrop-blur sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 items-center gap-3 rounded-2xl bg-background/95 px-4 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								className: "text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "আপনার ইমেইল লিখুন",
								className: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "ripple-btn inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gold px-6 text-sm font-semibold text-dark shadow-gold transition hover:-translate-y-0.5",
							children: ["সাবস্ক্রাইব ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 15 })]
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { Newsletter as t };
