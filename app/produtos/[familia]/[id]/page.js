import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import ProductArt from '../../../../components/ProductArt';
import { getProducts, getProductById } from '../../../../lib/catalog';
import { formatPrice, formatEan, slugify } from '../../../../lib/format';

export function generateStaticParams() {
  return getProducts().map((p) => ({ familia: slugify(p.family), id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  return { title: `${product ? product.name : 'Produto'} — Simple Pure` };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const familySlug = slugify(product.family);
  const ean = formatEan(product.ean);

  const details = [
    { label: 'Família', value: product.family },
    { label: 'Código', value: product.id },
    { label: 'Unidade', value: product.unit },
    ...(ean ? [{ label: 'EAN', value: ean }] : []),
  ];

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href={`/produtos/${familySlug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-bronze"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {product.family}
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <ProductArt slug={familySlug} className="aspect-[4/3] w-full rounded-3xl border border-line shadow-sm" />
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 font-display text-3xl font-semibold text-bronze">{formatPrice(product.price)}</p>
            <dl className="mt-8 space-y-3">
              {details.map((d) => (
                <div key={d.label} className="flex gap-3 text-sm">
                  <dt className="w-24 shrink-0 font-medium uppercase tracking-wide text-muted">{d.label}</dt>
                  <dd className="text-ink">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
