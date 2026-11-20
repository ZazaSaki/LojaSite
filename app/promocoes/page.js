import Reveal from '../../components/Reveal';
import { promotion } from '../../lib/site';

export const metadata = { title: 'Promoções — Simple Pure' };

export default function Promocoes() {
  return (
    <>
      <section className="pt-32 pb-14 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Promoções</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Promoções</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm md:grid md:grid-cols-2">
              <img
                src={promotion.image}
                alt={`Banner da promoção — ${promotion.title}`}
                className="h-64 w-full object-cover md:h-full"
                loading="lazy"
              />
              <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
                <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  {promotion.title}
                </h2>
                <ul className="space-y-3 text-muted">
                  {promotion.terms.map((term) => (
                    <li key={term} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                      <span className="text-base leading-relaxed">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
