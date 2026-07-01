/**
 * ChayaLux Shopping Store — client-side (localStorage) providers for
 * cart, wishlist, compare, orders, and quick-view/search modal state.
 *
 * SSR-safe: no localStorage access during render — state hydrates in useEffect.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { PRODUCTS, type Product, getProduct, bnPrice } from "@/lib/products";

// ---------------- Types ----------------
export interface CartItem {
  key: string; // productId + color + size
  productId: string;
  color?: string;
  size?: string;
  qty: number;
  savedForLater?: boolean;
}

export interface Address {
  name: string;
  phone: string;
  altPhone?: string;
  district: string;
  upazila: string;
  address: string;
  note?: string;
}

export type PaymentMethod = "cod" | "bkash" | "nagad" | "rocket" | "bank";

export interface Order {
  id: string;
  createdAt: number;
  items: CartItem[];
  subtotal: number;
  delivery: number;
  discount: number;
  couponCode?: string;
  total: number;
  address: Address;
  payment: PaymentMethod;
  status: "received" | "confirmed" | "processing" | "shipped" | "out_for_delivery" | "delivered";
}

export interface Coupon {
  code: string;
  label: string;
  type: "percent" | "flat";
  value: number;
  minSubtotal?: number;
}

export const COUPONS: Coupon[] = [
  { code: "CHAYA10", label: "১০% ছাড় (সর্বোচ্চ)", type: "percent", value: 10, minSubtotal: 3000 },
  { code: "LUX500", label: "৳৫০০ ছাড়", type: "flat", value: 500, minSubtotal: 5000 },
  { code: "NEW200", label: "নতুন কাস্টমার ৳২০০ ছাড়", type: "flat", value: 200 },
];

// ---------------- Storage helpers ----------------
const KEY_CART = "chayalux.cart.v1";
const KEY_WISH = "chayalux.wish.v1";
const KEY_COMPARE = "chayalux.compare.v1";
const KEY_ORDERS = "chayalux.orders.v1";
const KEY_RECENT_SEARCHES = "chayalux.searches.v1";

function readJSON<T>(k: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = window.localStorage.getItem(k);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
function writeJSON(k: string, v: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(k, JSON.stringify(v));
  } catch {}
}

// ---------------- Context shape ----------------
interface ShopContextValue {
  hydrated: boolean;

  // Cart
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (p: Product | string, opts?: { color?: string; size?: string; qty?: number; silent?: boolean }) => void;
  updateQty: (key: string, qty: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  saveForLater: (key: string) => void;
  moveToCart: (key: string) => void;

  // Coupon
  couponCode: string | null;
  couponDiscount: number;
  applyCoupon: (code: string) => { ok: boolean; msg: string };
  removeCoupon: () => void;

  // Delivery
  deliveryZone: "inside" | "outside";
  setDeliveryZone: (z: "inside" | "outside") => void;
  deliveryCharge: number;
  cartTotal: number;

  // Wishlist
  wishlist: string[];
  wishlistCount: number;
  toggleWishlist: (id: string) => void;
  isWished: (id: string) => boolean;
  clearWishlist: () => void;

  // Compare
  compare: string[];
  toggleCompare: (id: string) => void;
  isCompared: (id: string) => boolean;
  clearCompare: () => void;

  // Orders
  orders: Order[];
  placeOrder: (data: {
    address: Address;
    payment: PaymentMethod;
  }) => Order;
  getOrder: (id: string) => Order | undefined;

  // Quick view
  quickView: Product | null;
  openQuickView: (p: Product) => void;
  closeQuickView: () => void;

  // Search modal
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  recentSearches: string[];
  pushRecentSearch: (q: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

// ---------------- Provider ----------------
export function ShopProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [deliveryZone, setDeliveryZone] = useState<"inside" | "outside">("inside");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Hydrate
  useEffect(() => {
    setCart(readJSON(KEY_CART, []));
    setWishlist(readJSON(KEY_WISH, []));
    setCompare(readJSON(KEY_COMPARE, []));
    setOrders(readJSON(KEY_ORDERS, []));
    setRecentSearches(readJSON(KEY_RECENT_SEARCHES, []));
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => { if (hydrated) writeJSON(KEY_CART, cart); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) writeJSON(KEY_WISH, wishlist); }, [wishlist, hydrated]);
  useEffect(() => { if (hydrated) writeJSON(KEY_COMPARE, compare); }, [compare, hydrated]);
  useEffect(() => { if (hydrated) writeJSON(KEY_ORDERS, orders); }, [orders, hydrated]);
  useEffect(() => { if (hydrated) writeJSON(KEY_RECENT_SEARCHES, recentSearches); }, [recentSearches, hydrated]);

  // ---- Cart ----
  const activeCart = useMemo(() => cart.filter((c) => !c.savedForLater), [cart]);

  const cartCount = useMemo(
    () => activeCart.reduce((n, i) => n + i.qty, 0),
    [activeCart],
  );

  const cartSubtotal = useMemo(() => {
    let total = 0;
    for (const it of activeCart) {
      const p = getProduct(findSlugById(it.productId));
      if (p) total += p.price * it.qty;
    }
    return total;
  }, [activeCart]);

  const addToCart: ShopContextValue["addToCart"] = useCallback((p, opts = {}) => {
    const prod = typeof p === "string" ? getProduct(p) : p;
    if (!prod) return;
    const color = opts.color ?? prod.colors[0]?.name;
    const size = opts.size ?? prod.sizes[0];
    const qty = Math.max(1, opts.qty ?? 1);
    const key = `${prod.id}::${color ?? ""}::${size ?? ""}`;
    setCart((prev) => {
      const idx = prev.findIndex((x) => x.key === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty, savedForLater: false };
        return next;
      }
      return [...prev, { key, productId: prod.id, color, size, qty }];
    });
    if (!opts.silent) {
      toast.success("কার্টে যোগ হয়েছে", {
        description: `${prod.name} — ${bnPrice(prod.price * qty)}`,
      });
    }
  }, []);

  const updateQty = useCallback((key: string, qty: number) => {
    setCart((prev) =>
      prev.map((x) => (x.key === key ? { ...x, qty: Math.max(1, qty) } : x)),
    );
  }, []);
  const removeFromCart = useCallback((key: string) => {
    setCart((prev) => prev.filter((x) => x.key !== key));
    toast("পণ্যটি সরানো হয়েছে");
  }, []);
  const clearCart = useCallback(() => setCart([]), []);
  const saveForLater = useCallback((key: string) => {
    setCart((prev) => prev.map((x) => (x.key === key ? { ...x, savedForLater: true } : x)));
    toast("পরে কেনার জন্য সংরক্ষণ করা হয়েছে");
  }, []);
  const moveToCart = useCallback((key: string) => {
    setCart((prev) => prev.map((x) => (x.key === key ? { ...x, savedForLater: false } : x)));
  }, []);

  // ---- Coupon ----
  const couponDiscount = useMemo(() => {
    if (!couponCode) return 0;
    const c = COUPONS.find((x) => x.code === couponCode);
    if (!c) return 0;
    if (c.minSubtotal && cartSubtotal < c.minSubtotal) return 0;
    return c.type === "percent"
      ? Math.round((cartSubtotal * c.value) / 100)
      : c.value;
  }, [couponCode, cartSubtotal]);

  const applyCoupon = useCallback((code: string) => {
    const c = COUPONS.find((x) => x.code.toUpperCase() === code.trim().toUpperCase());
    if (!c) return { ok: false, msg: "কুপনটি বৈধ নয়।" };
    if (c.minSubtotal && cartSubtotal < c.minSubtotal) {
      return { ok: false, msg: `এই কুপনের জন্য সর্বনিম্ন ${bnPrice(c.minSubtotal)} প্রয়োজন।` };
    }
    setCouponCode(c.code);
    return { ok: true, msg: `${c.label} প্রয়োগ হয়েছে!` };
  }, [cartSubtotal]);

  const removeCoupon = useCallback(() => setCouponCode(null), []);

  // ---- Delivery ----
  const deliveryCharge = useMemo(() => {
    if (activeCart.length === 0) return 0;
    if (cartSubtotal >= 10000) return 0;
    return deliveryZone === "inside" ? 80 : 150;
  }, [deliveryZone, cartSubtotal, activeCart.length]);

  const cartTotal = Math.max(0, cartSubtotal + deliveryCharge - couponDiscount);

  // ---- Wishlist ----
  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        toast("উইশলিস্ট থেকে সরানো হয়েছে");
        return prev.filter((x) => x !== id);
      }
      toast.success("উইশলিস্টে যোগ হয়েছে");
      return [...prev, id];
    });
  }, []);
  const isWished = useCallback((id: string) => wishlist.includes(id), [wishlist]);
  const clearWishlist = useCallback(() => setWishlist([]), []);

  // ---- Compare ----
  const toggleCompare = useCallback((id: string) => {
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) {
        toast.error("সর্বোচ্চ ৩টি পণ্য তুলনা করা যাবে");
        return prev;
      }
      toast.success("তুলনায় যোগ হয়েছে");
      return [...prev, id];
    });
  }, []);
  const isCompared = useCallback((id: string) => compare.includes(id), [compare]);
  const clearCompare = useCallback(() => setCompare([]), []);

  // ---- Orders ----
  const placeOrder: ShopContextValue["placeOrder"] = useCallback(
    ({ address, payment }) => {
      const id = `CL-${Date.now().toString(36).toUpperCase()}`;
      const order: Order = {
        id,
        createdAt: Date.now(),
        items: activeCart,
        subtotal: cartSubtotal,
        delivery: deliveryCharge,
        discount: couponDiscount,
        couponCode: couponCode ?? undefined,
        total: cartTotal,
        address,
        payment,
        status: "received",
      };
      setOrders((prev) => [order, ...prev]);
      setCart((prev) => prev.filter((x) => x.savedForLater));
      setCouponCode(null);
      return order;
    },
    [activeCart, cartSubtotal, deliveryCharge, couponDiscount, couponCode, cartTotal],
  );

  const getOrder = useCallback(
    (id: string) => orders.find((o) => o.id === id),
    [orders],
  );

  // ---- Search ----
  const pushRecentSearch = useCallback((q: string) => {
    const t = q.trim();
    if (!t) return;
    setRecentSearches((prev) => [t, ...prev.filter((x) => x !== t)].slice(0, 6));
  }, []);

  // ---- Quick view ----
  const openQuickView = useCallback((p: Product) => setQuickView(p), []);
  const closeQuickView = useCallback(() => setQuickView(null), []);

  const value = useMemo<ShopContextValue>(
    () => ({
      hydrated,
      cart: activeCart,
      cartCount,
      cartSubtotal,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      saveForLater,
      moveToCart,
      couponCode,
      couponDiscount,
      applyCoupon,
      removeCoupon,
      deliveryZone,
      setDeliveryZone,
      deliveryCharge,
      cartTotal,
      wishlist,
      wishlistCount: wishlist.length,
      toggleWishlist,
      isWished,
      clearWishlist,
      compare,
      toggleCompare,
      isCompared,
      clearCompare,
      orders,
      placeOrder,
      getOrder,
      quickView,
      openQuickView,
      closeQuickView,
      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      recentSearches,
      pushRecentSearch,
    }),
    [
      hydrated, activeCart, cartCount, cartSubtotal, addToCart, updateQty,
      removeFromCart, clearCart, saveForLater, moveToCart, couponCode,
      couponDiscount, applyCoupon, removeCoupon, deliveryZone, deliveryCharge,
      cartTotal, wishlist, toggleWishlist, isWished, clearWishlist, compare,
      toggleCompare, isCompared, clearCompare, orders, placeOrder, getOrder,
      quickView, openQuickView, closeQuickView, searchOpen, recentSearches,
      pushRecentSearch,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

// Utility: reverse-lookup slug from product id (products are seed data)
function findSlugById(id: string): string {
  const p = PRODUCTS.find((x) => x.id === id);
  return p?.slug ?? "";
}

// Helper for saved-for-later
export function useSavedForLater() {
  const { hydrated } = useShop();
  const [items, setItems] = useState<CartItem[]>([]);
  const ref = useRef<CartItem[]>([]);
  useEffect(() => {
    if (!hydrated) return;
    const all = readJSON<CartItem[]>(KEY_CART, []);
    ref.current = all;
    setItems(all.filter((c) => c.savedForLater));
  }, [hydrated]);
  return items;
}

export const PAYMENT_METHODS: { id: PaymentMethod; label: string; hint: string }[] = [
  { id: "cod", label: "ক্যাশ অন ডেলিভারি", hint: "পণ্য হাতে পেয়ে পেমেন্ট" },
  { id: "bkash", label: "বিকাশ", hint: "01885-901184" },
  { id: "nagad", label: "নগদ", hint: "01885-901184" },
  { id: "rocket", label: "রকেট", hint: "01885-901184-8" },
  { id: "bank", label: "ব্যাংক ট্রান্সফার", hint: "Islami Bank / DBBL" },
];
