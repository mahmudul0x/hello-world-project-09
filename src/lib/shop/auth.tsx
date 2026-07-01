/**
 * Local mock auth for ChayaLux. Passwords are stored client-side only —
 * this is a UI/demo layer, not a security boundary. Replace with Lovable Cloud
 * later without changing consumers.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: number;
}

interface AuthDB {
  users: (User & { password: string })[];
  currentId: string | null;
}

const KEY = "chayalux.auth.v1";

function readDB(): AuthDB {
  if (typeof window === "undefined") return { users: [], currentId: null };
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { users: [], currentId: null };
  } catch {
    return { users: [], currentId: null };
  }
}
function writeDB(db: AuthDB) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(db));
}

interface AuthCtx {
  hydrated: boolean;
  user: User | null;
  login: (identifier: string, password: string) => { ok: boolean; msg: string };
  register: (data: { name: string; phone: string; email: string; password: string }) => { ok: boolean; msg: string };
  logout: () => void;
  updateProfile: (data: Partial<Pick<User, "name" | "phone" | "email">>) => void;
  changePassword: (oldP: string, newP: string) => { ok: boolean; msg: string };
}

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [db, setDB] = useState<AuthDB>({ users: [], currentId: null });

  useEffect(() => {
    setDB(readDB());
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (hydrated) writeDB(db);
  }, [db, hydrated]);

  const user = useMemo<User | null>(() => {
    if (!db.currentId) return null;
    const u = db.users.find((x) => x.id === db.currentId);
    if (!u) return null;
    const { password: _pw, ...rest } = u;
    return rest;
  }, [db]);

  const login: AuthCtx["login"] = useCallback((identifier, password) => {
    const id = identifier.trim().toLowerCase();
    const found = db.users.find(
      (u) => u.email.toLowerCase() === id || u.phone === identifier.trim(),
    );
    if (!found) return { ok: false, msg: "কোনো অ্যাকাউন্ট পাওয়া যায়নি।" };
    if (found.password !== password) return { ok: false, msg: "পাসওয়ার্ড ভুল।" };
    setDB((d) => ({ ...d, currentId: found.id }));
    toast.success("সফলভাবে লগইন হয়েছে");
    return { ok: true, msg: "সফল" };
  }, [db]);

  const register: AuthCtx["register"] = useCallback((data) => {
    const email = data.email.trim().toLowerCase();
    if (db.users.some((u) => u.email.toLowerCase() === email)) {
      return { ok: false, msg: "এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে।" };
    }
    if (db.users.some((u) => u.phone === data.phone.trim())) {
      return { ok: false, msg: "এই মোবাইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে।" };
    }
    const newUser = {
      id: `U-${Date.now().toString(36)}`,
      name: data.name.trim(),
      phone: data.phone.trim(),
      email,
      password: data.password,
      createdAt: Date.now(),
    };
    setDB((d) => ({ users: [...d.users, newUser], currentId: newUser.id }));
    toast.success("অ্যাকাউন্ট তৈরি হয়েছে");
    return { ok: true, msg: "সফল" };
  }, [db]);

  const logout = useCallback(() => {
    setDB((d) => ({ ...d, currentId: null }));
    toast("লগআউট হয়েছে");
  }, []);

  const updateProfile: AuthCtx["updateProfile"] = useCallback((data) => {
    setDB((d) => ({
      ...d,
      users: d.users.map((u) => (u.id === d.currentId ? { ...u, ...data } : u)),
    }));
    toast.success("প্রোফাইল আপডেট হয়েছে");
  }, []);

  const changePassword: AuthCtx["changePassword"] = useCallback((oldP, newP) => {
    const u = db.users.find((x) => x.id === db.currentId);
    if (!u) return { ok: false, msg: "লগইন করুন।" };
    if (u.password !== oldP) return { ok: false, msg: "পুরনো পাসওয়ার্ড ভুল।" };
    setDB((d) => ({
      ...d,
      users: d.users.map((x) => (x.id === d.currentId ? { ...x, password: newP } : x)),
    }));
    toast.success("পাসওয়ার্ড পরিবর্তন হয়েছে");
    return { ok: true, msg: "সফল" };
  }, [db]);

  const value = useMemo<AuthCtx>(
    () => ({ hydrated, user, login, register, logout, updateProfile, changePassword }),
    [hydrated, user, login, register, logout, updateProfile, changePassword],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth inside AuthProvider");
  return c;
}
