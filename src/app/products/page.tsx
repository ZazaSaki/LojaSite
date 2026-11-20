import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CatalogBrowser from "@/components/CatalogBrowser";
import { copy } from "@/content/site";
import { allVatIncluded, families, plural, products, totalProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Produtos",
  description: `${plural(totalProducts, "produto", "produtos")}: ${families.map((f) => f.name).join(", ")}.`,
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title={copy.productsIntro.text}
        intro={
          <p>
            {plural(totalProducts, "produto", "produtos")}, organizados em {families.length} famílias.
            {allVatIncluded && <span className="mt-2 block text-base text-mocha-deep">Preços com IVA incluído.</span>}
          </p>
        }
      />
      <div className="container-calm pb-[clamp(5rem,10vw,8rem)]">
        <CatalogBrowser products={products} families={families} />
      </div>
    </>
  );
}
