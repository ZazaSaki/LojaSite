import { MapPin } from 'lucide-react';
import Reveal from '../../components/Reveal';
import { brand, location } from '../../lib/site';

export const metadata = { title: 'Sobre — Simple Pure' };

export default function Sobre() {
  return (
    <>
      <section className="pt-32 pb-14 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Sobre</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Quem somos</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">{brand.name}</h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-bronze">{brand.tagline}</p>
              <p className="mt-6 text-lg leading-relaxed text-muted">{brand.positioning}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-surface p-8 sm:p-10">
              <p className="font-display text-2xl font-medium italic leading-relaxed text-mocha">
                «{brand.motto}»
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Onde estamos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Localização</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 text-lg leading-relaxed text-muted transition-colors hover:text-bronze"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-bronze" aria-hidden="true" />
                <span>{location.address}</span>
              </a>
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl border border-line shadow-lg"
              >
                <img
                  src="/map.png"
                  alt={`Mapa — ${location.address}`}
                  className="w-full"
                  loading="lazy"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
