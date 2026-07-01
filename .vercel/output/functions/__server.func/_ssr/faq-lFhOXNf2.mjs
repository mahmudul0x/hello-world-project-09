import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as IMG, n as FAQS } from "./content-DZlQVS3P.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Phone, j as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-DT7KZ3Zi.mjs";
import { t as PageHero } from "./PageHero-DxeBJMjt.mjs";
import { t as SectionHeading } from "./section-heading-BkOnLybf.mjs";
import { t as LuxButton } from "./lux-button-DAekneph.mjs";
import { t as FAQ } from "./FAQ-WSe-cp4G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-lFhOXNf2.js
var import_jsx_runtime = require_jsx_runtime();
function FAQPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "প্রশ্নোত্তর",
			title: "সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ",
			description: "আপনার প্রশ্নের দ্রুত উত্তর — না পেলে সরাসরি আমাদের সাথে যোগাযোগ করুন।",
			image: IMG.hero4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxury py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "FAQ",
				title: "আপনার প্রশ্নের উত্তর"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: FAQS })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxury pb-16 md:pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl rounded-[28px] bg-gradient-to-br from-primary via-primary to-dark p-10 text-center text-primary-foreground shadow-luxury",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-gold",
						children: "আরও প্রশ্ন?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "heading-display mt-2 text-3xl",
						children: "আমরা সাহায্যের জন্য প্রস্তুত"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-primary-foreground/80",
						children: "যেকোনো প্রশ্নে সরাসরি ফোন, WhatsApp অথবা Messenger-এ যোগাযোগ করুন।"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:01885901184",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
									variant: "gold",
									size: "lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 15 }), " কল করুন"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/8801885901184",
								target: "_blank",
								rel: "noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
									variant: "outline",
									size: "lg",
									className: "border-background/40 text-background hover:bg-background/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 15 }), " WhatsApp"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
									variant: "outline",
									size: "lg",
									className: "border-background/40 text-background hover:bg-background/10",
									children: "যোগাযোগ ফর্ম"
								})
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { FAQPage as component };
