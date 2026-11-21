import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { LegalSection } from "@/components/Legal";
import { lastUpdated } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Este sítio não usa cookies próprios. O mapa da Google só é carregado com o seu consentimento.",
};

export default function PoliticaDeCookies() {
  return (
    <>
      <PageHero
        eyebrow="Informação legal"
        title="Política de Cookies"
        intro={<p>Este sítio não usa cookies próprios nem ferramentas de análise ou de publicidade.</p>}
      />
      <div className="container-calm pb-[clamp(4rem,8vw,7rem)]">
        <LegalSection title="O que são cookies">
          <p>
            Cookies são pequenos ficheiros que um sítio guarda no seu dispositivo. A Lei n.º 41/2004, de 18 de agosto, na
            redação da Lei n.º 46/2012, de 29 de agosto, exige o consentimento prévio para guardar ou aceder a informação no
            seu dispositivo, salvo quando seja estritamente necessário ao serviço que pediu.
          </p>
        </LegalSection>

        <LegalSection title="Cookies deste sítio">
          <ul>
            <li>Este sítio não define cookies próprios e não guarda informação no seu navegador (como armazenamento local).</li>
            <li>
              Os tipos de letra, as imagens e o restante conteúdo são servidos a partir do nosso próprio alojamento. Ao abrir
              uma página, não é feito qualquer pedido a serviços de terceiros.
            </li>
            <li>Não usamos ferramentas de estatística, publicidade ou redes sociais.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Mapa interativo da Google">
          <p>
            Nas secções “Onde estamos?”, mostramos uma imagem estática do mapa. O mapa interativo da Google só é carregado
            depois de clicar em “Carregar mapa interativo” e confirmar em “Aceitar e carregar mapa”. A partir desse momento, a
            Google pode definir cookies no seu dispositivo e tratar dados como o endereço IP, nos termos da{" "}
            <a href="https://policies.google.com/technologies/cookies?hl=pt-PT" target="_blank" rel="noopener noreferrer">
              política de cookies da Google
            </a>
            .
          </p>
          <p>
            O consentimento vale apenas para a página em que o deu e não é memorizado. Para o retirar, basta recarregar a
            página. Pode também apagar os cookies da Google nas definições do seu navegador.
          </p>
          <p>
            Em alternativa, pode usar a ligação “Abrir no Google Maps”, que abre o mapa no sítio da Google, fora deste sítio.
          </p>
        </LegalSection>

        <LegalSection title="Mais informação">
          <p>
            Consulte a <Link href="/politica-de-privacidade/">Política de Privacidade</Link> e a{" "}
            <Link href="/informacao-legal/">Informação legal</Link>.
          </p>
          <p className="text-sm text-muted">Última atualização: {lastUpdated}.</p>
        </LegalSection>
      </div>
    </>
  );
}
