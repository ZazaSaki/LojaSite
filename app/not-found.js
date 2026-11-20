import Link from 'next/link';

export const metadata = { title: 'Página não encontrada — Simple Pure' };

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-7xl font-semibold text-bronze">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Página não encontrada</h1>
      <p className="mt-3 max-w-md leading-relaxed text-muted">
        A página que procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-bronze px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-mocha"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
