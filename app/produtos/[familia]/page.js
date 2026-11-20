import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import FamilyBrowser from '../../../components/FamilyBrowser';
import { getFamilies, getFamilyBySlug, getProductsByFamily } from '../../../lib/catalog';

export function generateStaticParams() {
  return getFamilies().map((f) => ({ familia: f.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { familia } = await params;
  const family = getFamilyBySlug(familia);
  return { title: `${family ? family.name : 'Produtos'} — Simple Pure` };
}

export default async function FamiliaPage({ params }) {
  const { familia } = await params;
  const family = getFamilyBySlug(familia);
  if (!family) notFound();
  const products = getProductsByFamily(familia);

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-bronze"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Todos os produtos
          </Link>
          <h1 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">{family.name}</h1>
          <p className="mt-3 text-muted">
            {family.count} {family.count === 1 ? 'produto' : 'produtos'}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FamilyBrowser products={products} />
        </div>
      </section>
    </>
  );
}
