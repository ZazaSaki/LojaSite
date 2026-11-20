import { ExternalLink } from 'lucide-react';
import { location, legal } from '../../lib/site';

export const metadata = { title: 'Informação Legal — Simple Pure' };

const identification = [
  { label: 'Denominação', value: legal.name },
  { label: 'NIF/NIPC', value: legal.nif },
  { label: 'Endereço', value: location.address },
  { label: 'Telefone', value: legal.phone },
  { label: 'Email', value: legal.email },
  { label: 'Horário', value: legal.hours },
];

export default function InformacaoLegal() {
  return (
    <>
      <section className="pt-32 pb-14 sm:pt-36">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Informação legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Informação legal</h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-14 px-5 sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Identificação do prestador de serviços
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Nos termos do artigo 10.º do Decreto-Lei n.º 7/2004, de 7 de janeiro, que transpõe a
              Diretiva 2000/31/CE sobre o comércio eletrónico.
            </p>
            <dl className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
              {identification.map((item) => (
                <div key={item.label} className="flex gap-4 px-6 py-4 text-sm">
                  <dt className="w-32 shrink-0 font-medium text-muted">{item.label}</dt>
                  <dd className="break-words text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Livro de Reclamações Eletrónico</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Nos termos do Decreto-Lei n.º 156/2005, de 15 de setembro, na redação dada pelo
              Decreto-Lei n.º 74/2017, de 21 de junho, disponibilizamos o acesso à Plataforma Digital
              do Livro de Reclamações Eletrónico:
            </p>
            <a
              href={legal.livroReclamacoesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-bronze px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-mocha"
            >
              Livro de Reclamações Eletrónico
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Resolução Alternativa de Litígios de Consumo (RAL)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Em caso de litígio de consumo, nos termos do artigo 18.º da Lei n.º 144/2015, de 8 de
              setembro, o consumidor pode recorrer ao {legal.ral.name}, entidade de Resolução
              Alternativa de Litígios de Consumo com competência territorial no distrito de Castelo
              Branco:
            </p>
            <a
              href={legal.ral.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-bronze underline decoration-bronze/40 underline-offset-2 transition-colors hover:text-mocha"
            >
              www.cniacc.pt
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-6 rounded-2xl border border-line bg-surface p-5 text-xs leading-relaxed text-muted">
              Nota: a Plataforma Europeia de Resolução de Litígios em Linha (ODR) foi descontinuada
              em 20 de julho de 2025, na sequência da adoção do Regulamento (UE) 2024/3228, pelo que
              deixou de ser aplicável a referência a essa plataforma.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
