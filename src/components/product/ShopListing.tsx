import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FilterSidebar, defaultFilters, type FilterState } from "@/components/product/FilterSidebar";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductToolbar, type SortKey } from "@/components/product/ProductToolbar";
import { CollectionBanner } from "@/components/product/CollectionBanner";
import type { Product } from "@/lib/products";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface Props {
  title: string;
  description: string;
  bannerImage: string;
  eyebrow?: string;
  products: Product[];
  lockedFilter?: Partial<FilterState>;
}

export function ShopListing({
  title,
  description,
  bannerImage,
  eyebrow,
  products,
  lockedFilter,
}: Props) {
  const [filters, setFilters] = useState<FilterState>({ ...defaultFilters, ...lockedFilter });
  const [sort, setSort] = useState<SortKey>("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.slice();
    const s = filters.search.trim().toLowerCase();
    if (s) list = list.filter((p) => p.name.toLowerCase().includes(s) || p.shortDesc.toLowerCase().includes(s));
    if (filters.categories.length) list = list.filter((p) => filters.categories.includes(p.category));
    list = list.filter((p) => p.price >= filters.price[0] && p.price <= filters.price[1]);
    if (filters.fabrics.length)
      list = list.filter((p) => filters.fabrics.some((f) => p.fabric.includes(f)));
    if (filters.colors.length)
      list = list.filter((p) => p.colors.some((c) => filters.colors.includes(c.name)));
    if (filters.patterns.length)
      list = list.filter((p) => p.patterns.some((pt) => filters.patterns.includes(pt)));
    if (filters.rooms.length)
      list = list.filter((p) => p.rooms.some((r) => filters.rooms.includes(r)));
    if (filters.inStockOnly) list = list.filter((p) => p.inStock);
    if (filters.discountOnly) list = list.filter((p) => p.oldPrice && p.oldPrice > p.price);

    switch (sort) {
      case "new":
        list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort(
          (a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured) || b.rating - a.rating,
        );
    }
    return list;
  }, [products, filters, sort]);

  return (
    <SiteLayout>
      <CollectionBanner
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={bannerImage}
      />

      <section className="container-luxury py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <FilterSidebar
              value={filters}
              onChange={setFilters}
              onReset={() => setFilters({ ...defaultFilters, ...lockedFilter })}
            />
          </div>

          {/* Mobile filter sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="left" className="w-[92%] max-w-sm overflow-y-auto p-4">
              <FilterSidebar
                value={filters}
                onChange={setFilters}
                onReset={() => setFilters({ ...defaultFilters, ...lockedFilter })}
              />
            </SheetContent>
          </Sheet>

          <div className="flex flex-col gap-5">
            <ProductToolbar
              count={filtered.length}
              total={products.length}
              sort={sort}
              onSort={setSort}
              onOpenFilters={() => setMobileOpen(true)}
            />
            <ProductGrid products={filtered} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
