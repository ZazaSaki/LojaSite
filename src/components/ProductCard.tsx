import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/catalog";
import LabelArt from "./LabelArt";

export default function ProductCard({ product, short = false }: { product: Product; short?: boolean }) {
  const title = short ? product.shortName : product.name;
  return (
    <Link
      href={`/products/item/${product.id}/`}
      className="group flex h-full flex-col rounded-[1.25rem] outline-offset-8"
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <LabelArt
        id={product.id}
        family={product.family}
        familySlug={product.familySlug}
        className="aspect-[4/5] rounded-[1.25rem] shadow-[0_1px_0_rgba(42,34,30,0.04)] transition-shadow duration-700 group-hover:shadow-[0_30px_60px_-30px_rgba(42,34,30,0.35)]"
      />
      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="eyebrow !text-[0.62rem] text-mocha-deep">
          {product.family} <span className="opacity-50">· Ref. {product.id}</span>
        </p>
        <h3 className="mt-2 font-display text-[1.45rem] leading-[1.15] font-normal">{title}</h3>
        <p className="mt-auto pt-3 font-sans text-[0.95rem] tracking-wide text-espresso/80">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
