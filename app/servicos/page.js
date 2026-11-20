import Reveal from '../../components/Reveal';
import ServiceIcon from '../../components/ServiceIcon';
import { services, normalizeGroupName } from '../../lib/site';

export const metadata = { title: 'Serviços — Simple Pure' };

export default function Servicos() {
  return (
    <>
      <section className="pt-32 pb-14 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Serviços</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Serviços</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Tratamentos</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {services.treatments.map((name) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface px-4 py-10 text-center transition-colors hover:border-bronze/40"
                >
                  <ServiceIcon name={name} className="h-8 w-8 text-bronze" />
                  <span className="text-sm font-medium tracking-wide text-ink">{name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Categorias de serviço</h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {services.groups.map((group) => {
                const label = normalizeGroupName(group);
                return (
                  <li
                    key={group}
                    className="rounded-full border border-line bg-cream px-5 py-2.5 text-sm font-medium tracking-wide text-mocha"
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
