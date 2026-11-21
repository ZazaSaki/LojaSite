import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Dl, LegalSection, LegalValue } from "@/components/Legal";
import { cnpd, company, lastUpdated } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como este sítio trata dados pessoais, nos termos do RGPD e da Lei n.º 58/2019.",
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <PageHero
        eyebrow="Informação legal"
        title="Política de Privacidade"
        intro={
          <p>
            Este sítio é uma montra informativa: não tem formulários, contas de utilizador, newsletter, pagamentos nem
            ferramentas de análise de tráfego.
          </p>
        }
      />
      <div className="container-calm pb-[clamp(4rem,8vw,7rem)]">
        <LegalSection title="Responsável pelo tratamento">
          <Dl
            rows={[
              ["Responsável", <LegalValue key="n" value={company.legalName} />],
              ["Nome comercial", company.tradeName],
              ["NIF/NIPC", <LegalValue key="nif" value={company.nif} />],
              ["Morada", company.address],
              ["Contacto", <LegalValue key="e" value={company.email} />],
            ]}
          />
          <p>
            Esta política é prestada nos termos dos artigos 13.º e 14.º do Regulamento (UE) 2016/679 (Regulamento Geral sobre
            a Proteção de Dados, RGPD) e da Lei n.º 58/2019, de 8 de agosto.
          </p>
        </LegalSection>

        <LegalSection title="Que dados tratamos">
          <ul>
            <li>
              <strong className="font-medium">Navegação no sítio.</strong> Não pedimos nem recolhemos dados pessoais através
              deste sítio. Como em qualquer sítio na Internet, o servidor de alojamento (<LegalValue value={company.hosting} />)
              regista dados técnicos de cada pedido, como o endereço IP, a data e hora, a página pedida e o tipo de navegador.
              Estes registos servem apenas para garantir o funcionamento e a segurança do sítio (interesse legítimo, artigo
              6.º, n.º 1, alínea f), do RGPD) e são conservados durante <LegalValue value={company.logRetention} />.
            </li>
            <li>
              <strong className="font-medium">Contactos que nos dirigir.</strong> Se nos contactar por email ou telefone,
              usamos os dados que nos fornecer apenas para responder ao seu pedido (artigo 6.º, n.º 1, alíneas b) e f), do
              RGPD) e conservamo-los pelo tempo necessário para esse fim.
            </li>
            <li>
              <strong className="font-medium">Mapa interativo (opcional).</strong> O mapa da Google só é carregado se clicar
              em “Aceitar e carregar mapa”. Nesse momento, o seu navegador liga-se aos servidores da Google, que passa a tratar
              dados como o endereço IP e pode definir cookies, enquanto responsável autónomo e de acordo com a{" "}
              <a href="https://policies.google.com/privacy?hl=pt-PT" target="_blank" rel="noopener noreferrer">
                política de privacidade da Google
              </a>
              . A base legal é o seu consentimento (artigo 6.º, n.º 1, alínea a), do RGPD). Veja a{" "}
              <Link href="/politica-de-cookies/">Política de Cookies</Link>.
            </li>
          </ul>
          <p>Não vendemos dados pessoais nem os usamos para publicidade ou definição de perfis.</p>
        </LegalSection>

        <LegalSection title="Ligações externas">
          <p>
            O sítio contém ligações para serviços de terceiros (Livro de Reclamações Eletrónico, Google Maps, CNIACC e Portal
            do Consumidor). Ao segui-las, passa a aplicar-se a política de privacidade da respetiva entidade.
          </p>
        </LegalSection>

        <LegalSection title="Os seus direitos">
          <p>
            Nos termos do RGPD, pode exercer os direitos de acesso, retificação, apagamento, limitação do tratamento,
            portabilidade e oposição, bem como retirar o consentimento a qualquer momento, sem comprometer a licitude do
            tratamento anterior. Para tal, contacte-nos através de <LegalValue value={company.email} /> ou da morada indicada
            acima.
          </p>
          <p>
            Tem ainda o direito de apresentar reclamação à autoridade de controlo, a{" "}
            <a href={cnpd.url} target="_blank" rel="noopener noreferrer">
              {cnpd.name}
            </a>
            .
          </p>
          <p className="text-sm text-muted">Última atualização: {lastUpdated}.</p>
        </LegalSection>
      </div>
    </>
  );
}
