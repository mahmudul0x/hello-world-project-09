import { Search, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { LuxButton } from "@/components/ui/lux-button";
import {
  ALL_COLORS,
  ALL_FABRICS,
  ALL_PATTERNS,
  ALL_ROOMS,
  CATEGORIES,
} from "@/lib/products";
import { cn } from "@/lib/utils";

export interface FilterState {
  search: string;
  categories: string[];
  price: [number, number];
  fabrics: string[];
  colors: string[];
  patterns: string[];
  rooms: string[];
  inStockOnly: boolean;
  discountOnly: boolean;
}

export const defaultFilters: FilterState = {
  search: "",
  categories: [],
  price: [1000, 8000],
  fabrics: [],
  colors: [],
  patterns: [],
  rooms: [],
  inStockOnly: false,
  discountOnly: false,
};

interface Props {
  value: FilterState;
  onChange: (next: FilterState) => void;
  onReset: () => void;
  className?: string;
}

function toggle<T>(arr: T[], v: T): T[] {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}

export function FilterSidebar({ value, onChange, onReset, className }: Props) {
  const set = (patch: Partial<FilterState>) => onChange({ ...value, ...patch });

  return (
    <aside
      className={cn(
        "flex flex-col gap-5 rounded-[22px] border border-border/60 bg-card p-5 shadow-soft-lux",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold">ফিল্টার</h3>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs text-muted-foreground transition hover:text-primary"
        >
          <X size={13} /> রিসেট
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          size={15}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          placeholder="পণ্য খুঁজুন..."
          value={value.search}
          onChange={(e) => set({ search: e.target.value })}
          className="h-11 rounded-[14px] border-border bg-background pl-9 text-sm"
        />
      </div>

      <Accordion
        type="multiple"
        defaultValue={["category", "price", "fabric", "color"]}
        className="flex flex-col gap-1"
      >
        {/* Category */}
        <FilterAccordion value="category" label="ক্যাটাগরি">
          <div className="flex flex-col gap-2.5 pt-1">
            {CATEGORIES.map((c) => (
              <CheckRow
                key={c.slug}
                label={c.name}
                checked={value.categories.includes(c.slug)}
                onChange={() => set({ categories: toggle(value.categories, c.slug) })}
              />
            ))}
          </div>
        </FilterAccordion>

        {/* Price */}
        <FilterAccordion value="price" label="দাম">
          <div className="flex flex-col gap-4 pt-2">
            <Slider
              min={500}
              max={10000}
              step={100}
              value={value.price}
              onValueChange={(v) => set({ price: [v[0], v[1]] as [number, number] })}
            />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>৳{value.price[0].toLocaleString("bn-BD")}</span>
              <span>৳{value.price[1].toLocaleString("bn-BD")}</span>
            </div>
          </div>
        </FilterAccordion>

        {/* Fabric */}
        <FilterAccordion value="fabric" label="ফেব্রিক">
          <div className="flex flex-col gap-2.5 pt-1">
            {ALL_FABRICS.map((f) => (
              <CheckRow
                key={f}
                label={f}
                checked={value.fabrics.includes(f)}
                onChange={() => set({ fabrics: toggle(value.fabrics, f) })}
              />
            ))}
          </div>
        </FilterAccordion>

        {/* Color */}
        <FilterAccordion value="color" label="রঙ">
          <div className="grid grid-cols-4 gap-2.5 pt-1">
            {ALL_COLORS.map((c) => {
              const active = value.colors.includes(c.name);
              return (
                <button
                  key={c.name}
                  onClick={() => set({ colors: toggle(value.colors, c.name) })}
                  title={c.name}
                  className={cn(
                    "group relative aspect-square rounded-full border-2 transition",
                    active ? "border-primary shadow-soft-lux" : "border-border hover:border-gold",
                  )}
                  style={{ background: c.hex }}
                  aria-label={c.name}
                >
                  {active && (
                    <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[9px] text-primary-foreground">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </FilterAccordion>

        {/* Pattern */}
        <FilterAccordion value="pattern" label="প্যাটার্ন">
          <div className="flex flex-col gap-2.5 pt-1">
            {ALL_PATTERNS.map((p) => (
              <CheckRow
                key={p}
                label={p}
                checked={value.patterns.includes(p)}
                onChange={() => set({ patterns: toggle(value.patterns, p) })}
              />
            ))}
          </div>
        </FilterAccordion>

        {/* Room */}
        <FilterAccordion value="room" label="রুম টাইপ">
          <div className="flex flex-col gap-2.5 pt-1">
            {ALL_ROOMS.map((r) => (
              <CheckRow
                key={r}
                label={r}
                checked={value.rooms.includes(r)}
                onChange={() => set({ rooms: toggle(value.rooms, r) })}
              />
            ))}
          </div>
        </FilterAccordion>

        {/* Availability + Discount */}
        <FilterAccordion value="avail" label="অ্যাভেইলেবিলিটি">
          <div className="flex flex-col gap-2.5 pt-1">
            <CheckRow
              label="শুধু স্টকে থাকা"
              checked={value.inStockOnly}
              onChange={() => set({ inStockOnly: !value.inStockOnly })}
            />
            <CheckRow
              label="শুধু ছাড় থাকা পণ্য"
              checked={value.discountOnly}
              onChange={() => set({ discountOnly: !value.discountOnly })}
            />
          </div>
        </FilterAccordion>
      </Accordion>

      <LuxButton variant="primary" size="md" className="w-full" onClick={onReset}>
        ফিল্টার রিসেট করুন
      </LuxButton>
    </aside>
  );
}

function FilterAccordion({
  value,
  label,
  children,
}: {
  value: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem value={value} className="border-b border-border/60 last:border-b-0">
      <AccordionTrigger className="py-3 text-sm font-semibold text-foreground hover:no-underline">
        {label}
      </AccordionTrigger>
      <AccordionContent className="pb-4">{children}</AccordionContent>
    </AccordionItem>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground/85 transition hover:text-primary">
      <Checkbox checked={checked} onCheckedChange={onChange} className="rounded-md" />
      <span>{label}</span>
    </label>
  );
}
