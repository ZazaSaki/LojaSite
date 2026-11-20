import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { allVatIncluded, families, formatRange, getFamily, plural, productsOf } from "@/lib/catalog";

export const dynamicParams = false;
export const generateStaticParams = () => families.map((f) => ({ family: f.slug }));

type Props = { params: Promise<{ family: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const f = getFamily((await params).family);
  if (!f) return {};
  return { title: f.name, description: `${f.name}: ${plural(f.count, "produto", "produtos")}, ${formatRange(f)}.` };
}

export default async function FamilyPage({ params }: Props) {
  const family = getFamily((await params).family);
  if (!family) notFound();
  const list = productsOf(family.slug);
  const others = families.filter((f) => f.slug !== family.slug);

  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title={family.name}
        intro={
          <p>
            {plural(family.count, "produto", "produtos")} · {formatRange(family)}
            {allVatIncluded && <span className="mt-2 block text-base text-mocha-deep">Preços com IVA incluído.</span>}
          </p>
        }
      >
        <Link href="/products/" className="btn btn-ghost mt-10">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar
        </Link>
      </PageHero>

      <div className="container-calm pb-[clamp(4rem,8vw,7rem)]">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-12 border-t border-mocha/15 pt-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          {list.map((p, i) => (
            <Reveal as="li" key={p.id} delay={(i % 4) * 0.06}>
              <ProductCard product={p} short />
            </Reveal>
          ))}
        </ul>

        <nav aria-label="Outras famílias" className="mt-[clamp(4rem,8vw,7rem)] border-t border-mocha/15 pt-10">
          <p className="eyebrow text-mocha-deep">Outras famílias</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((f) => (
              <li key={f.slug}>
                <Link href={`/products/family/${f.slug}/`} className="link-underline font-display text-3xl font-light">
                  {f.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
