import Link from 'next/link';

export const metadata = { title: 'Política de Cookies — Simple Pure' };

export default function PoliticaCookies() {
  return (
    <>
      <section className="pt-32 pb-14 sm:pt-36">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Política de cookies</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Política de cookies</h1>
          <p className="mt-4 text-xs text-muted">Última atualização: 20 de novembro de 2026</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Utilizamos cookies?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Não. Este sítio é estático e informativo e não utiliza cookies nem tecnologias
              equivalentes de armazenamento ou acesso a informação no seu equipamento.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Serviços de terceiros</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Este sítio não integra conteúdos de terceiros que instalem cookies ou recolham dados:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                <span>
                  O mapa de localização é apresentado como imagem estática, com uma ligação externa
                  para o Google Maps — não é incorporado um iframe interativo.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                <span>As fontes tipográficas são alojadas no próprio servidor (não são carregadas de servidores externos).</span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                <span>Não utilizamos ferramentas de análise/estatística, publicidade nem redes sociais incorporadas.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Consentimento</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Como não utilizamos cookies não essenciais nem tecnologias de rastreio, não é
              necessário um banner de consentimento neste sítio.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">O que são cookies</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Cookies são pequenos ficheiros de texto que os sítios na Internet podem guardar no seu
              equipamento para memorizar preferências ou para fins analíticos e de publicidade. A sua
              utilização está sujeita às regras da Lei n.º 41/2004, de 18 de agosto, na redação dada
              pela Lei n.º 46/2012, de 29 de agosto, e do RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Como gerir cookies no seu navegador</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Pode configurar o seu navegador para bloquear ou eliminar cookies, através das
              definições de privacidade do mesmo. Consulte a ajuda do seu navegador para obter
              instruções.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Ligações para sítios de terceiros</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Este sítio contém ligações para sítios externos (por exemplo, Google Maps, Livro de
              Reclamações Eletrónico e CNIACC). Esses sítios têm as suas próprias políticas de
              privacidade e de cookies, pelas quais não somos responsáveis. Recomendamos a consulta
              das mesmas antes de os utilizar.
            </p>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-muted">
              Para mais informação sobre o tratamento de dados pessoais, consulte a{' '}
              <Link href="/politica-de-privacidade" className="text-bronze underline decoration-bronze/40 underline-offset-2 hover:text-mocha">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
