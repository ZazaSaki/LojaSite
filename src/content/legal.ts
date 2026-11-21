/**
 * Legal information (Portugal). Everything the business owner must still provide
 * is a visible "[INSERIR …]" placeholder: nothing here was invented.
 * `npm run audit` lists every placeholder still present in the exported site.
 *
 * Legal bases (verified November 2026):
 *  - DL n.º 7/2004, art. 10.º: permanent online identification of the provider
 *    (name, geographic address, e-mail, public registrations, NIF).
 *  - DL n.º 156/2005 (as amended by DL n.º 74/2017), art. 5.º-B n.º 2: link to the
 *    Livro de Reclamações Eletrónico "em local visível e de forma destacada".
 *  - Lei n.º 144/2015, art. 18.º + Lei n.º 63/2019: inform consumers of the competent
 *    consumer arbitration entity (necessary arbitration up to €5.000 at the
 *    consumer's choice). The EU ODR platform was discontinued on 20 July 2025
 *    (Regulation (EU) 2024/3228), so it is intentionally NOT linked.
 *  - RGPD (Reg. (UE) 2016/679) + Lei n.º 58/2019: privacy notice.
 *  - Lei n.º 41/2004 (as amended by Lei n.º 46/2012), art. 5.º: prior consent
 *    for non-essential storage/access on the terminal (cookies).
 */
import { brand, location } from "./site";

export const PLACEHOLDER = "[INSERIR";
export const isPlaceholder = (v: string) => v.startsWith(PLACEHOLDER);

export const company = {
  tradeName: brand.name,
  legalName: "[INSERIR DENOMINAÇÃO SOCIAL / NOME DO EMPRESÁRIO]",
  nif: "[INSERIR NIF/NIPC]",
  registry: "[INSERIR CONSERVATÓRIA E N.º DE MATRÍCULA, se aplicável]",
  address: location.full,
  country: location.country,
  email: "[INSERIR EMAIL]",
  phone: "[INSERIR TELEFONE]",
  hosting: "[INSERIR FORNECEDOR DE ALOJAMENTO DO SÍTIO]",
  logRetention: "[INSERIR PRAZO DE CONSERVAÇÃO DOS REGISTOS DO SERVIDOR]",
} as const;

export const livroReclamacoes = {
  url: "https://www.livroreclamacoes.pt",
  label: "Livro de Reclamações",
};

export const ral = {
  name: "CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo",
  url: "https://www.cniacc.pt",
  address: "Rua D. Afonso Henriques, n.º 1, 4700-030 Braga",
  consumerPortal: "https://www.consumidor.gov.pt",
};

export const cnpd = { name: "Comissão Nacional de Proteção de Dados (CNPD)", url: "https://www.cnpd.pt" };

export const lastUpdated = "21 de novembro de 2026";

export const legalNav = [
  { href: "/informacao-legal/", label: "Informação legal" },
  { href: "/politica-de-privacidade/", label: "Política de Privacidade" },
  { href: "/politica-de-cookies/", label: "Política de Cookies" },
] as const;
