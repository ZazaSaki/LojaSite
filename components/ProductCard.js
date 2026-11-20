import Link from 'next/link';
import ProductArt from './ProductArt';
import { formatPrice, slugify } from '../lib/format';

export default function ProductCard({ product }) {
  const familySlug = slugify(product.family);
  return (
    <Link href={`/produtos/${familySlug}/${product.id}`} className="group block">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <ProductArt slug={familySlug} className="aspect-[4/3] w-full" />
        <div className="flex flex-1 flex-col px-5 py-4">
          <h3 className="line-clamp-2 text-sm font-medium leading-snug text-ink">{product.name}</h3>
          <p className="mt-2 font-display text-lg font-semibold text-bronze">{formatPrice(product.price)}</p>
        </div>
      </article>
    </Link>
  );
}
