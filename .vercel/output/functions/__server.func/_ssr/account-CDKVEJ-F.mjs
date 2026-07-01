import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./auth-aNe0GWOG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { P as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Key, D as Package, F as LogOut, H as Heart, N as MapPin, i as User, z as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BDlEErBq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-CDKVEJ-F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		to: "/account",
		label: "ড্যাশবোর্ড",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/account/orders",
		label: "আমার অর্ডার",
		icon: Package
	},
	{
		to: "/account/wishlist",
		label: "উইশলিস্ট",
		icon: Heart
	},
	{
		to: "/account/addresses",
		label: "ঠিকানা",
		icon: MapPin
	},
	{
		to: "/account/profile",
		label: "প্রোফাইল",
		icon: User
	},
	{
		to: "/account/password",
		label: "পাসওয়ার্ড",
		icon: Key
	}
];
function AccountSidebar() {
	const { user, logout } = useAuth();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "lg:sticky lg:top-28 h-fit rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3 rounded-[16px] bg-primary-soft/60 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground",
				children: (user?.name ?? "গ").charAt(0)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate font-display text-sm font-semibold",
					children: user?.name ?? "গেস্ট"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[11px] text-muted-foreground",
					children: user?.phone ?? user?.email ?? ""
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex flex-col gap-1",
			children: [items.map((it) => {
				const active = it.exact ? pathname === it.to : pathname === it.to || pathname.startsWith(it.to + "/");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: it.to,
					className: cn("flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm transition", active ? "bg-primary text-primary-foreground shadow-soft-lux" : "text-foreground/80 hover:bg-primary-soft hover:text-primary"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { size: 16 }),
						" ",
						it.label
					]
				}, it.to);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: logout,
				className: "mt-2 flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm text-destructive transition hover:bg-destructive/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), " লগআউট"]
			})]
		})]
	});
}
function AccountLayout() {
	const { user, hydrated } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (hydrated && !user) navigate({ to: "/login" });
	}, [
		hydrated,
		user,
		navigate
	]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container-luxury py-20" }) });
	if (!user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxury py-8 md:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[280px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})
	}) });
}
//#endregion
export { AccountLayout as component };
