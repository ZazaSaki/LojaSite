import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Dl, LegalSection, LegalValue, LivroReclamacoesBadge } from "@/components/Legal";
import { company, lastUpdated, livroReclamacoes, ral } from "@/content/legal";

export const metadata: Metadata = {
  title: "Informação legal",
  description: "Identificação do prestador, Livro de Reclamações Eletrónico e resolução alternativa de litígios de consumo.",
};

export default function InformacaoLegal() {
  return (
    <>
      <PageHero
        eyebrow="Informação legal"
        title="Informação legal"
        intro={<p>Identificação do prestador, Livro de Reclamações e resolução alternativa de litígios de consumo.</p>}
      />
      <div className="container-calm pb-[clamp(4rem,8vw,7rem)]">
        <LegalSection id="identificacao" title="Identificação do prestador">
          <p>
            Em cumprimento do artigo 10.º do Decreto-Lei n.º 7/2004, de 7 de janeiro, disponibilizam-se os seguintes elementos de
            identificação:
          </p>
          <Dl
            rows={[
              ["Nome comercial", company.tradeName],
              ["Denominação social", <LegalValue key="n" value={company.legalName} />],
              ["NIF/NIPC", <LegalValue key="nif" value={company.nif} />],
              ["Registo", <LegalValue key="r" value={company.registry} />],
              ["Morada", company.address],
              ["Email", <LegalValue key="e" value={company.email} />],
              ["Telefone", <LegalValue key="t" value={company.phone} />],
            ]}
          />
          <p>
            Este sítio tem caráter meramente informativo. Não permite compras, reservas nem pagamentos em linha: os preços
            indicados são os praticados na loja e incluem IVA à taxa legal em vigor.
          </p>
        </LegalSection>

        <LegalSection id="livro-de-reclamacoes" title="Livro de Reclamações">
          <p>
            Nos termos da lei, pode apresentar reclamação no Livro de Reclamações no nosso estabelecimento ou, em formato
            eletrónico, através da plataforma oficial:
          </p>
          <LivroReclamacoesBadge tone="light" />
          <p className="text-sm text-muted">
            Decreto-Lei n.º 156/2005, de 15 de setembro, na redação dada pelo Decreto-Lei n.º 74/2017, de 21 de junho.{" "}
            <a href={livroReclamacoes.url} target="_blank" rel="noopener noreferrer">
              www.livroreclamacoes.pt
            </a>
          </p>
        </LegalSection>

        <LegalSection id="ral" title="Resolução alternativa de litígios">
          <p>
            Em caso de litígio de consumo, o consumidor pode recorrer a uma entidade de resolução alternativa de litígios de
            consumo (RAL). A entidade competente para a área de Castelo Branco é:
          </p>
          <p>
            <strong className="font-medium">{ral.name}</strong>
            <br />
            {ral.address}
            <br />
            <a href={ral.url} target="_blank" rel="noopener noreferrer">
              www.cniacc.pt
            </a>
          </p>
          <p>
            Nos termos da Lei n.º 63/2019, de 16 de agosto, os conflitos de consumo de valor não superior a 5.000 € estão
            sujeitos a arbitragem necessária ou mediação, quando o consumidor opte por submetê-los a um centro de arbitragem
            de conflitos de consumo legalmente autorizado.
          </p>
          <p>
            Mais informações no Portal do Consumidor:{" "}
            <a href={ral.consumerPortal} target="_blank" rel="noopener noreferrer">
              www.consumidor.gov.pt
            </a>
            . A plataforma europeia de resolução de litígios em linha (RLL) foi descontinuada a 20 de julho de 2025, nos termos
            do Regulamento (UE) 2024/3228.
          </p>
          <p className="text-sm text-muted">Lei n.º 144/2015, de 8 de setembro, artigo 18.º.</p>
        </LegalSection>

        <LegalSection title="Privacidade e cookies">
          <p>
            Consulte a nossa <Link href="/politica-de-privacidade/">Política de Privacidade</Link> e a nossa{" "}
            <Link href="/politica-de-cookies/">Política de Cookies</Link>.
          </p>
          <p className="text-sm text-muted">Última atualização: {lastUpdated}.</p>
        </LegalSection>
      </div>
    </>
  );
}
