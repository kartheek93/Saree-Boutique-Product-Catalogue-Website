"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { sarees, COLLECTIONS, FABRICS } from "@/data/sarees";
import { SareeCard } from "@/components/saree/saree-card";

type SortKey = "newest" | "price-asc" | "price-desc";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
];

export function Catalogue() {
  const [collection, setCollection] = useState<string | null>(null);
  const [fabric, setFabric] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("newest");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    let list = sarees.filter((s) => {
      if (collection && s.collection !== collection) return false;
      if (fabric && s.fabric !== fabric) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      // newest
      return new Date(b.addedOn).getTime() - new Date(a.addedOn).getTime();
    });
    return list;
  }, [collection, fabric, sort]);

  const hasFilters = collection !== null || fabric !== null;

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* ---------- Filters ---------- */}
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setFiltersOpen((v) => !v)}
          aria-expanded={filtersOpen}
          className="mb-4 flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium lg:hidden"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="size-4" />
            Filters {hasFilters && <span className="text-primary">· active</span>}
          </span>
          <span className="text-muted-foreground">{filtersOpen ? "Hide" : "Show"}</span>
        </button>

        <div className={cn("space-y-6", filtersOpen ? "block" : "hidden lg:block")}>
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold">Filters</h2>
            {hasFilters && (
              <button
                onClick={() => {
                  setCollection(null);
                  setFabric(null);
                }}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                <X className="size-3" /> Clear all
              </button>
            )}
          </div>

          <FilterGroup
            title="Collection"
            options={[...COLLECTIONS]}
            value={collection}
            onChange={setCollection}
          />
          <FilterGroup
            title="Fabric"
            options={[...FABRICS]}
            value={fabric}
            onChange={setFabric}
          />
        </div>
      </aside>

      {/* ---------- Results ---------- */}
      <div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{results.length}</span>{" "}
            {results.length === 1 ? "saree" : "sarees"}
          </p>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-input bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {results.map((saree, i) => (
              <SareeCard key={saree.id} saree={saree} index={i} />
            ))}
          </div>
        ) : (
          <div className="grid place-items-center rounded-2xl border border-dashed border-border py-20 text-center">
            <p className="font-heading text-xl font-semibold">No sarees match these filters</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try clearing a filter to see more of the collection.
            </p>
            <button
              onClick={() => {
                setCollection(null);
                setFabric(null);
              }}
              className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              onClick={() => onChange(active ? null : opt)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
