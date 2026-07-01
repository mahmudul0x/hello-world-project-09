import { LayoutGrid, SlidersHorizontal } from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export type SortKey = "featured" | "new" | "price-asc" | "price-desc" | "rating";

interface Props {
  count: number;
  total: number;
  sort: SortKey;
  onSort: (s: SortKey) => void;
  onOpenFilters?: () => void;
}

export function ProductToolbar({ count, total, sort, onSort, onOpenFilters }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-border/60 bg-card px-4 py-3 shadow-soft-lux">
      <div className="flex items-center gap-3">
        {onOpenFilters && (
          <button
            onClick={onOpenFilters}
            className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary lg:hidden"
          >
            <SlidersHorizontal size={14} /> ফিল্টার
          </button>
        )}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <LayoutGrid size={14} className="text-primary" />
          <span>
            <span className="font-semibold text-foreground">{bnNum(count)}</span>{" "}
            / {bnNum(total)} পণ্য
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">সাজান:</span>
        <Select value={sort} onValueChange={(v) => onSort(v as SortKey)}>
          <SelectTrigger className="h-10 w-[180px] rounded-[14px] border-border bg-background text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">ফিচার্ড</SelectItem>
            <SelectItem value="new">নতুন আগে</SelectItem>
            <SelectItem value="price-asc">দাম: কম থেকে বেশি</SelectItem>
            <SelectItem value="price-desc">দাম: বেশি থেকে কম</SelectItem>
            <SelectItem value="rating">রেটিং</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
