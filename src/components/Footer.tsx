import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, location, nav, promo } from "@/content/site";
import { families } from "@/lib/catalog";
import FacetMark from "./FacetMark";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-linen">
      <div aria-hidden className="glow absolute -left-40 -top-40 h-[32rem] w-[32rem] animate-breathe opacity-40" />
      <FacetMark className="pointer-events-none absolute -right-24 -bottom-28 h-[30rem] w-[30rem] text-linen/[0.04]" />

      <div className="container-calm relative grid gap-14 py-20 sm:grid-cols-2 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-amber-soft">{brand.tagline}</p>
          <p className="mt-6 font-display text-[clamp(2.25rem,1.6rem+2.4vw,3.75rem)] font-light leading-[1.05]">
            {brand.slogan}
          </p>
          <p className="mt-6 max-w-sm text-linen/65">{brand.descriptor}</p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-2 md:col-start-6">
          <p className="eyebrow text-linen/50">Navegação</p>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-underline text-linen/85 hover:text-linen">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="eyebrow text-linen/50">Produtos</p>
          <ul className="mt-5 space-y-3">
            {families.map((f) => (
              <li key={f.slug}>
                <Link href={`/products/family/${f.slug}/`} className="link-underline text-linen/85 hover:text-linen">
                  {f.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-linen/50">Onde estamos?</p>
          <address className="mt-5 not-italic leading-relaxed text-linen/85">
            {location.street}
            <br />
            {location.postalCode} {location.city}
          </address>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-amber-soft hover:text-linen"
          >
            Abrir no Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>

      <div className="container-calm relative flex flex-col gap-3 border-t border-linen/10 py-8 text-xs text-linen/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.name} · {location.city}
        </p>
        <Link href="/promocoes/" className="hover:text-linen/80">
          {promo.title}
        </Link>
      </div>
    </footer>
  );
}
