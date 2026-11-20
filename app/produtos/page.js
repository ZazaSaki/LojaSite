import Reveal from '../../components/Reveal';
import FamilyCard from '../../components/FamilyCard';
import { getFamilies } from '../../lib/catalog';

export const metadata = { title: 'Produtos — Simple Pure' };

export default function Produtos() {
  const families = getFamilies();

  return (
    <>
      <section className="pt-32 pb-14 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Produtos</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Produtos</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {families.map((family) => (
                <FamilyCard key={family.slug} family={family} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
