import Link from 'next/link';
import { location, legal } from '../../lib/site';

export const metadata = { title: 'Política de Privacidade — Simple Pure' };

export default function PoliticaPrivacidade() {
  return (
    <>
      <section className="pt-32 pb-14 sm:pt-36">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-bronze">Política de privacidade</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Política de privacidade</h1>
          <p className="mt-4 text-xs text-muted">Última atualização: 20 de novembro de 2026</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">1. Âmbito e responsável pelo tratamento</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Esta Política de Privacidade descreve a forma como este sítio na Internet trata os
              dados pessoais, em conformidade com o Regulamento (UE) 2016/679 (Regulamento Geral
              sobre a Proteção de Dados — RGPD) e com a Lei n.º 58/2019, de 8 de agosto.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              O responsável pelo tratamento é {legal.name}, com morada em {location.address} e
              contacto de correio eletrónico {legal.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">2. Que dados recolhemos</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Este sítio é uma montra informativa e estática. Não dispõe de contas de utilizador,
              carrinho de compras, pagamentos online, formulários de contacto nem subscrição de
              newsletter. Por esse motivo, o sítio não recolhe, trata nem armazena dados pessoais dos
              visitantes através do seu próprio funcionamento.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">3. Cookies e tecnologias de rastreio</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Este sítio não utiliza cookies nem tecnologias equivalentes de rastreio ou análise.
              Para mais informação, consulte a{' '}
              <Link href="/politica-de-cookies" className="text-bronze underline decoration-bronze/40 underline-offset-2 hover:text-mocha">
                Política de Cookies
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">4. Contactos diretos</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Se optar por nos contactar diretamente por correio eletrónico ou telefone (meios
              externos a este sítio), trataremos apenas os dados que nos fornecer, na medida do
              necessário para responder ao seu pedido, com fundamento no interesse legítimo ou em
              diligências pré-contratuais (artigo 6.º do RGPD).
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">5. Partilha de dados</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Não partilhamos dados pessoais com terceiros, salvo se tal for exigido por lei.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">6. Prazo de conservação</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Os dados que nos fornecer no âmbito de um contacto são conservados apenas durante o
              período necessário para responder e cumprir as obrigações legais aplicáveis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">7. Direitos dos titulares dos dados</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Nos termos do RGPD, o titular dos dados tem o direito de acesso, retificação,
              apagamento, limitação do tratamento, portabilidade e oposição. Para exercer qualquer
              um destes direitos, contacte-nos através de {legal.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">8. Autoridade de controlo</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Sem prejuízo de qualquer outra via de recurso, tem o direito de apresentar reclamação à
              Comissão Nacional de Proteção de Dados (CNPD), em{' '}
              <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-bronze underline decoration-bronze/40 underline-offset-2 hover:text-mocha">
                www.cnpd.pt
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
