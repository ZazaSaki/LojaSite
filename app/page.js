import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import FamilyCard from '../components/FamilyCard';
import ServiceIcon from '../components/ServiceIcon';
import { getFamilies } from '../lib/catalog';
import { brand, services, promotion, location } from '../lib/site';

export const metadata = { title: 'Simple Pure — O seu ritual SPA' };

export default function Home() {
  const families = getFamilies();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/backGround.jpg)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-cream">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-cream/80">{brand.tagline}</p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
              {brand.motto}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              {brand.positioning}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 rounded-full bg-bronze px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-mocha"
              >
                Explorar serviços
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream/10"
              >
                Ver produtos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marca */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">A marca</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {brand.name} — {brand.tagline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{brand.positioning}</p>
            <div className="mt-8 flex items-center gap-3 border-l-2 border-bronze pl-4">
              <p className="font-display text-xl font-medium italic text-mocha">{brand.motto}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/Painel1.png"
              alt={`Painel da marca ${brand.name}`}
              className="w-full rounded-2xl border border-line shadow-lg"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Serviços (teaser) */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Serviços</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Tratamentos</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {services.treatments.map((name) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-cream px-4 py-8 text-center transition-colors hover:border-bronze/40"
                >
                  <ServiceIcon name={name} className="h-7 w-7 text-bronze" />
                  <span className="text-sm font-medium tracking-wide text-ink">{name}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-bronze transition-colors hover:text-mocha"
            >
              Ver todos os serviços
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Produtos (teaser) */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Produtos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              As nossas famílias
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {families.map((family) => (
                <FamilyCard key={family.slug} family={family} />
              ))}
            </div>
            <img src="/ornament.svg" alt="" aria-hidden="true" className="mx-auto mt-16 h-10 w-auto" />
          </Reveal>
        </div>
      </section>

      {/* Promoção */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line bg-cream shadow-sm md:grid md:grid-cols-2">
              <img
                src={promotion.image}
                alt="Banner da promoção"
                className="h-56 w-full object-cover md:h-full"
                loading="lazy"
              />
              <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Promoção</p>
                <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  {promotion.title}
                </h2>
                <ul className="space-y-2 text-muted">
                  {promotion.terms.map((term) => (
                    <li key={term} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/promocoes"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-bronze px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-mocha"
                >
                  Ver promoção
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Localização (teaser) */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Localização</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Onde estamos</h2>
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-start gap-2.5 text-lg leading-relaxed text-muted transition-colors hover:text-bronze"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-bronze" aria-hidden="true" />
              <span>{location.address}</span>
            </a>
            <div className="mt-8">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-sm font-medium text-bronze transition-colors hover:text-mocha"
              >
                Saber mais sobre nós
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src="/map.png"
                alt={`Mapa — ${location.address}`}
                className="w-full rounded-2xl border border-line shadow-lg"
                loading="lazy"
              />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
