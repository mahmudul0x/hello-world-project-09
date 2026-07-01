import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lux-button-DAekneph.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var luxButton = cva("ripple-btn inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground shadow-soft-lux hover:shadow-luxury hover:-translate-y-0.5",
			gold: "bg-[image:var(--gradient-gold)] text-dark shadow-gold hover:-translate-y-0.5",
			outline: "border border-foreground/15 bg-transparent text-foreground hover:border-primary hover:text-primary",
			ghost: "bg-transparent text-foreground hover:bg-primary-soft hover:text-primary",
			dark: "bg-dark text-background hover:bg-primary"
		},
		size: {
			sm: "h-10 rounded-[14px] px-4 text-sm",
			md: "h-12 rounded-[18px] px-6 text-sm",
			lg: "h-14 rounded-[18px] px-8 text-base",
			icon: "h-11 w-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var LuxButton = (0, import_react.forwardRef)(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(luxButton({
		variant,
		size
	}), className),
	...props
}));
LuxButton.displayName = "LuxButton";
//#endregion
export { LuxButton as t };
