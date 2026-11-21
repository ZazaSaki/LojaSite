import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, location, nav } from "@/content/site";
import { company, legalNav, ral } from "@/content/legal";
import { LegalValue, LivroReclamacoesBadge } from "./Legal";
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

      {/* Legal information: DL 7/2004 art. 10.º, DL 156/2005 art. 5.º-B, Lei 144/2015 art. 18.º */}
      <div className="container-calm relative grid gap-10 border-t border-linen/10 py-12 text-sm text-linen/70 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-linen/50">Identificação</p>
          <dl className="mt-4 space-y-1.5">
            {[
              ["Nome comercial", company.tradeName],
              ["Denominação social", company.legalName],
              ["NIF/NIPC", company.nif],
              ["Morada", company.address],
              ["Email", company.email],
              ["Telefone", company.phone],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-wrap gap-x-2">
                <dt className="text-linen/45">{k}:</dt>
                <dd>
                  <LegalValue value={v} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-linen/50">Reclamações</p>
          <div className="mt-4">
            <LivroReclamacoesBadge />
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-linen/50">Resolução alternativa de litígios</p>
          <p className="mt-4 leading-relaxed">
            Em caso de litígio de consumo, o consumidor pode recorrer ao{" "}
            <a href={ral.url} target="_blank" rel="noopener noreferrer" className="text-amber-soft underline-offset-4 hover:underline">
              CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo
            </a>{" "}
            (www.cniacc.pt). Mais informações no{" "}
            <a href={ral.consumerPortal} target="_blank" rel="noopener noreferrer" className="text-amber-soft underline-offset-4 hover:underline">
              Portal do Consumidor
            </a>
            .
          </p>
        </div>
      </div>

      <div className="container-calm relative flex flex-col gap-4 border-t border-linen/10 py-8 text-xs text-linen/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.name} · {location.city}
        </p>
        <nav aria-label="Informação legal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-linen/85">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
