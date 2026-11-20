'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';

function normalize(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default function FamilyBrowser({ products }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('name');

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    let list = products;
    if (q) {
      list = list.filter((p) => normalize(p.name).includes(q));
    }
    const sorted = [...list];
    if (sort === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name, 'pt'));
    } else if (sort === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [products, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar…"
            className="w-full rounded-full border border-line bg-cream py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-bronze"
          />
        </label>

        <label className="flex items-center gap-2 text-sm text-muted">
          <span>Ordenar</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-line bg-cream py-2.5 pl-3 pr-9 text-sm text-ink outline-none transition-colors focus:border-bronze"
          >
            <option value="name">Nome A–Z</option>
            <option value="price-asc">Preço: menor primeiro</option>
            <option value="price-desc">Preço: maior primeiro</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted">Sem resultados</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
