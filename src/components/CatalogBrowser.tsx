"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import clsx from "clsx";
import type { Family, Product } from "@/lib/catalog";
import { normalize, plural } from "@/lib/catalog";
import ProductCard from "./ProductCard";

type Sort = "ref" | "nome" | "preco-asc" | "preco-desc";
const SORTS: { value: Sort; label: string }[] = [
  { value: "ref", label: "Referência" },
  { value: "nome", label: "Nome" },
  { value: "preco-asc", label: "Preço ↑" },
  { value: "preco-desc", label: "Preço ↓" },
];

export default function CatalogBrowser({ products, families }: { products: Product[]; families: Family[] }) {
  // Static HTML renders the full catalogue; the URL query is applied after hydration.
  const [family, setFamily] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("ref");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const f = sp.get("familia");
    const o = sp.get("ordem") as Sort | null;
    if (f && families.some((x) => x.slug === f)) setFamily(f);
    if (sp.get("q")) setQuery(sp.get("q")!);
    if (o && SORTS.some((s) => s.value === o)) setSort(o);
    setReady(true);
  }, [families]);

  // Keep the URL shareable without triggering navigation.
  useEffect(() => {
    if (!ready) return;
    const sp = new URLSearchParams();
    if (family) sp.set("familia", family);
    if (query.trim()) sp.set("q", query.trim());
    if (sort !== "ref") sp.set("ordem", sort);
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [family, query, sort, ready]);

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const list = products.filter(
      (p) =>
        (!family || p.familySlug === family) &&
        terms.every((t) => normalize(`${p.name} ${p.family} ${p.id}`).includes(t)),
    );
    const sorted = [...list];
    if (sort === "nome") sorted.sort((a, b) => a.name.localeCompare(b.name, "pt"));
    if (sort === "preco-asc") sorted.sort((a, b) => a.price - b.price || Number(a.id) - Number(b.id));
    if (sort === "preco-desc") sorted.sort((a, b) => b.price - a.price || Number(a.id) - Number(b.id));
    return sorted;
  }, [products, family, query, sort]);

  const counts = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const m = new Map<string, number>();
    for (const p of products) {
      if (!terms.every((t) => normalize(`${p.name} ${p.family} ${p.id}`).includes(t))) continue;
      m.set(p.familySlug, (m.get(p.familySlug) ?? 0) + 1);
    }
    return m;
  }, [products, query]);

  const clear = () => {
    setFamily("");
    setQuery("");
    setSort("ref");
  };

  const pill = (active: boolean) =>
    clsx(
      "shrink-0 rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-500",
      active
        ? "border-espresso bg-espresso text-linen"
        : "border-mocha/25 text-espresso/75 hover:border-mocha hover:text-espresso",
    );

  return (
    <div>
      <div className="sticky top-[var(--header-h)] z-30 -mx-[clamp(1rem,4vw,3.5rem)] border-y border-mocha/15 bg-linen/85 px-[clamp(1rem,4vw,3.5rem)] py-4 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filtrar por família"
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible lg:pb-0"
          >
            <button type="button" className={pill(!family)} aria-pressed={!family} onClick={() => setFamily("")}>
              Todos <span className="opacity-60">{[...counts.values()].reduce((a, b) => a + b, 0)}</span>
            </button>
            {families.map((f) => (
              <button
                key={f.slug}
                type="button"
                className={pill(family === f.slug)}
                aria-pressed={family === f.slug}
                onClick={() => setFamily(family === f.slug ? "" : f.slug)}
              >
                {f.name} <span className="opacity-60">{counts.get(f.slug) ?? 0}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label className="relative flex min-w-0 flex-1 items-center lg:w-72 lg:flex-none">
              <span className="sr-only">Procurar</span>
              <Search className="pointer-events-none absolute left-4 h-4 w-4 text-mocha" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Procurar"
                className="w-full rounded-full border border-mocha/25 bg-linen-deep/70 py-2.5 pl-11 pr-10 text-sm placeholder:text-muted/80 focus:border-mocha focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 rounded-full p-1 text-mocha hover:text-espresso"
                  aria-label="Limpar pesquisa"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>
            <label className="relative">
              <span className="sr-only">Ordenar</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="appearance-none rounded-full border border-mocha/25 bg-linen-deep/70 py-2.5 pl-4 pr-9 text-sm focus:border-mocha focus:outline-none"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-mocha">
                ▾
              </span>
            </label>
          </div>
        </div>
      </div>

      <p className="mt-10 text-sm text-muted" aria-live="polite">
        {plural(results.length, "produto", "produtos")}
        {family && <> em <span className="text-espresso">{families.find((f) => f.slug === family)?.name}</span></>}
        {query.trim() && <> para “{query.trim()}”</>}
      </p>

      {results.length > 0 ? (
        <ul
          key={`${family}|${sort}`}
          className="mt-8 grid animate-[fadeUp_0.9s_var(--ease-calm)_both] grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4"
        >
          {results.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} short={!!family} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-16 flex flex-col items-start gap-6 rounded-[1.5rem] border border-dashed border-mocha/30 p-10">
          <p className="font-display text-3xl font-light">Nenhum produto encontrado.</p>
          <button type="button" className="btn btn-ghost" onClick={clear}>
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}
