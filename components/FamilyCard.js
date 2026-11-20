import Link from 'next/link';
import ProductArt from './ProductArt';

export default function FamilyCard({ family }) {
  return (
    <Link href={`/produtos/${family.slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <ProductArt slug={family.slug} className="aspect-[4/3] w-full" />
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">{family.name}</h3>
          <span className="shrink-0 text-sm text-muted">
            {family.count} {family.count === 1 ? 'produto' : 'produtos'}
          </span>
        </div>
      </article>
    </Link>
  );
}
