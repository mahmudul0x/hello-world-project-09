import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-aNe0GWOG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Local mock auth for ChayaLux. Passwords are stored client-side only —
* this is a UI/demo layer, not a security boundary. Replace with Lovable Cloud
* later without changing consumers.
*/
var KEY = "chayalux.auth.v1";
function readDB() {
	if (typeof window === "undefined") return {
		users: [],
		currentId: null
	};
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : {
			users: [],
			currentId: null
		};
	} catch {
		return {
			users: [],
			currentId: null
		};
	}
}
function writeDB(db) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(KEY, JSON.stringify(db));
}
var Ctx = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [db, setDB] = (0, import_react.useState)({
		users: [],
		currentId: null
	});
	(0, import_react.useEffect)(() => {
		setDB(readDB());
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeDB(db);
	}, [db, hydrated]);
	const user = (0, import_react.useMemo)(() => {
		if (!db.currentId) return null;
		const u = db.users.find((x) => x.id === db.currentId);
		if (!u) return null;
		const { password: _pw, ...rest } = u;
		return rest;
	}, [db]);
	const login = (0, import_react.useCallback)((identifier, password) => {
		const id = identifier.trim().toLowerCase();
		const found = db.users.find((u) => u.email.toLowerCase() === id || u.phone === identifier.trim());
		if (!found) return {
			ok: false,
			msg: "কোনো অ্যাকাউন্ট পাওয়া যায়নি।"
		};
		if (found.password !== password) return {
			ok: false,
			msg: "পাসওয়ার্ড ভুল।"
		};
		setDB((d) => ({
			...d,
			currentId: found.id
		}));
		toast.success("সফলভাবে লগইন হয়েছে");
		return {
			ok: true,
			msg: "সফল"
		};
	}, [db]);
	const register = (0, import_react.useCallback)((data) => {
		const email = data.email.trim().toLowerCase();
		if (db.users.some((u) => u.email.toLowerCase() === email)) return {
			ok: false,
			msg: "এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে।"
		};
		if (db.users.some((u) => u.phone === data.phone.trim())) return {
			ok: false,
			msg: "এই মোবাইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে।"
		};
		const newUser = {
			id: `U-${Date.now().toString(36)}`,
			name: data.name.trim(),
			phone: data.phone.trim(),
			email,
			password: data.password,
			createdAt: Date.now()
		};
		setDB((d) => ({
			users: [...d.users, newUser],
			currentId: newUser.id
		}));
		toast.success("অ্যাকাউন্ট তৈরি হয়েছে");
		return {
			ok: true,
			msg: "সফল"
		};
	}, [db]);
	const logout = (0, import_react.useCallback)(() => {
		setDB((d) => ({
			...d,
			currentId: null
		}));
		toast("লগআউট হয়েছে");
	}, []);
	const updateProfile = (0, import_react.useCallback)((data) => {
		setDB((d) => ({
			...d,
			users: d.users.map((u) => u.id === d.currentId ? {
				...u,
				...data
			} : u)
		}));
		toast.success("প্রোফাইল আপডেট হয়েছে");
	}, []);
	const changePassword = (0, import_react.useCallback)((oldP, newP) => {
		const u = db.users.find((x) => x.id === db.currentId);
		if (!u) return {
			ok: false,
			msg: "লগইন করুন।"
		};
		if (u.password !== oldP) return {
			ok: false,
			msg: "পুরনো পাসওয়ার্ড ভুল।"
		};
		setDB((d) => ({
			...d,
			users: d.users.map((x) => x.id === d.currentId ? {
				...x,
				password: newP
			} : x)
		}));
		toast.success("পাসওয়ার্ড পরিবর্তন হয়েছে");
		return {
			ok: true,
			msg: "সফল"
		};
	}, [db]);
	const value = (0, import_react.useMemo)(() => ({
		hydrated,
		user,
		login,
		register,
		logout,
		updateProfile,
		changePassword
	}), [
		hydrated,
		user,
		login,
		register,
		logout,
		updateProfile,
		changePassword
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
function useAuth() {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useAuth inside AuthProvider");
	return c;
}
//#endregion
export { useAuth as n, AuthProvider as t };
