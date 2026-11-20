import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Logo from './Logo';
import { brand, location } from '../lib/site';

const LINKS = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/promocoes', label: 'Promoções' },
  { href: '/sobre', label: 'Sobre' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo className="text-bronze" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{brand.positioning}</p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Ligações rápidas</h2>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-bronze">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Localização</h2>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-muted transition-colors hover:text-bronze"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" />
            <span>{location.address}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-6 sm:px-8">
          <p className="text-xs tracking-wide text-muted">© {year} Simple Pure</p>
        </div>
      </div>
    </footer>
  );
}
