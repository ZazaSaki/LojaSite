import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, BookOpen } from 'lucide-react';
import Logo from './Logo';
import { brand, location, legal } from '../lib/site';

const LINKS = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/promocoes', label: 'Promoções' },
  { href: '/sobre', label: 'Sobre' },
];

const LEGAL_LINKS = [
  { href: '/informacao-legal', label: 'Informação legal' },
  { href: '/politica-de-privacidade', label: 'Política de privacidade' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
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
          <h2 className="mt-8 font-display text-lg font-semibold text-ink">Informações legais</h2>
          <ul className="mt-4 space-y-2.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-bronze">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Contactos</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" />
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-bronze"
              >
                {location.address}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" />
              <span>{legal.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" />
              <span>{legal.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" />
              <span>{legal.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-xs leading-relaxed text-muted">
              <p>
                <span className="font-medium text-ink">{legal.name}</span> · NIF/NIPC {legal.nif}
              </p>
              <p className="mt-1">{location.address}</p>
            </div>
            <a
              href={legal.livroReclamacoesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-bronze/40 bg-cream px-4 py-2.5 text-xs font-medium text-mocha transition-colors hover:border-bronze hover:text-bronze"
            >
              <BookOpen className="h-4 w-4 text-bronze" aria-hidden="true" />
              Livro de Reclamações Eletrónico
            </a>
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
            Em caso de litígio de consumo, o consumidor pode recorrer ao {legal.ral.name}, entidade
            de Resolução Alternativa de Litígios de Consumo com competência territorial no distrito
            de Castelo Branco —{' '}
            <a
              href={legal.ral.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-bronze/40 underline-offset-2 transition-colors hover:text-bronze"
            >
              www.cniacc.pt
            </a>
            .
          </p>
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
