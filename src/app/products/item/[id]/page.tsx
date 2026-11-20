import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import LabelArt from "@/components/LabelArt";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { location } from "@/content/site";
import { formatPrice, getProduct, products, productsOf } from "@/lib/catalog";

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ id: p.id }));

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).id);
  if (!p) return {};
  return { title: p.name, description: `${p.name} · ${p.family} · ${formatPrice(p.price)} · Ref. ${p.id}` };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).id);
  if (!product) notFound();

  const siblings = productsOf(product.familySlug);
  const idx = siblings.findIndex((p) => p.id === product.id);
  // A gentle "more from this family" row: the next few products, wrapping around.
  const related = Array.from({ length: Math.min(4, siblings.length - 1) }, (_, k) => siblings[(idx + 1 + k) % siblings.length]);

  const details: [string, string][] = [
    ["Família", product.family],
    ["Ref.", product.id],
    ...(product.ean ? ([["EAN", product.ean]] as [string, string][]) : []),
  ];

  return (
    <>
      <section className="pt-[calc(var(--header-h)+clamp(2rem,5vw,4rem))] pb-[clamp(4rem,8vw,7rem)]">
        <div className="container-calm">
          <Reveal>
            <Link href={`/products/family/${product.familySlug}/`} className="btn btn-ghost">
              <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6" y={40}>
              <LabelArt
                id={product.id}
                family={product.family}
                familySlug={product.familySlug}
                size="hero"
                className="aspect-[4/5] rounded-[2rem] shadow-[0_50px_100px_-50px_rgba(42,34,30,0.45)] sm:aspect-square lg:aspect-[4/5]"
              />
            </Reveal>

            <div className="flex flex-col lg:col-span-6 lg:py-6">
              <Reveal delay={0.1}>
                <Link href={`/products/family/${product.familySlug}/`} className="eyebrow link-underline text-mocha-deep">
                  {product.family}
                </Link>
              </Reveal>
              <Reveal delay={0.15}>
                <h1 className="mt-5 text-[clamp(2.5rem,1.8rem+3vw,4.75rem)] font-light leading-[1.02]">{product.name}</h1>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-8 flex items-baseline gap-4">
                  <span className="font-display text-5xl font-light">{formatPrice(product.price)}</span>
                  {product.vatIncluded && <span className="eyebrow !text-[0.62rem] text-muted">IVA incluído</span>}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <dl className="mt-10 divide-y divide-mocha/15 border-y border-mocha/15">
                  {details.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between gap-6 py-4">
                      <dt className="eyebrow !text-[0.64rem] text-muted">{k}</dt>
                      <dd className="text-right font-sans tabular-nums tracking-wide">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-10 flex items-start gap-4 rounded-[1.25rem] bg-stone/60 p-6">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-mocha" aria-hidden />
                  <div>
                    <p className="eyebrow !text-[0.64rem] text-mocha-deep">Onde estamos?</p>
                    <p className="mt-2 text-muted">{location.full}</p>
                    <Link href="/about/#onde-estamos" className="link-underline mt-3 inline-flex items-center gap-2 text-sm">
                      Ver no mapa <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {related.length > 0 && (
            <section aria-labelledby="mais-titulo" className="mt-[clamp(5rem,10vw,8rem)] border-t border-mocha/15 pt-12">
              <div className="flex items-end justify-between gap-6">
                <h2 id="mais-titulo" className="text-[clamp(2rem,1.6rem+1.6vw,3rem)] font-light">
                  Mais de <em>{product.family}</em>
                </h2>
                <Link href={`/products/family/${product.familySlug}/`} className="link-underline hidden text-sm sm:inline">
                  Ver todos
                </Link>
              </div>
              <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-4">
                {related.map((p, i) => (
                  <Reveal as="li" key={p.id} delay={i * 0.06}>
                    <ProductCard product={p} short />
                  </Reveal>
                ))}
              </ul>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
