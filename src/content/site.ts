/**
 * Hand-authored site content (pt-PT).
 *
 * FACTS come from the repository: the spreadsheet (data/exelTest.xlsx), the logo,
 * the original carousel texts, the promotion artwork (Promo.jpg) and the old About page.
 *
 * Everything marked `review: true` was NOT in the original material:
 *  - `mood` lines are atmospheric copy written for the redesign. They make no claims
 *    about treatments, prices, durations or contacts. Please review or replace.
 *  - the service line -> group mapping is inferred from the names.
 */

export type Reviewable = { text: string; review: true };
const mood = (text: string): Reviewable => ({ text, review: true });

export const brand = {
  name: "Simple Pure",
  tagline: "O seu ritual SPA", // from the logo
  descriptor: "Salão de estética natural", // original carousel: "Salão de estica Natural" (typo fixed)
  slogan: "Trata por dentro o que se vê por fora", // Painel1 artwork + carousel
} as const;

export const location = {
  street: "Av. Nuno Álvares 27 loja 1",
  postalCode: "6000-083",
  city: "Castelo Branco",
  country: "Portugal",
  full: "Av. Nuno Álvares 27 loja 1, 6000-083 Castelo Branco",
  lat: 39.8213621,
  lng: -7.4923087,
  mapsUrl:
    "https://www.google.pt/maps/place/Simple+Pure+-+Spa/@39.8213652,-7.4945025,17z/data=!3m1!4b1!4m5!3m4!1s0xd3d5fcd85a13457:0x886599f94585994b!8m2!3d39.8213621!4d-7.4923087",
  embedUrl: "https://maps.google.com/maps?q=39.8213621,-7.4923087&z=17&output=embed",
} as const;

export const promo = {
  title: "1 Like = 5% de Desconto",
  detail: "Válido para qualquer tratamento após confirmação do like", // Promo.jpg ("Valido" typo fixed)
} as const;

export const nav = [
  { href: "/", label: "Início" },
  { href: "/promocoes/", label: "Promoções" },
  { href: "/services/", label: "Serviços" },
  { href: "/products/", label: "Produtos" },
  { href: "/about/", label: "Sobre" },
] as const;

/* ------------------------------------------------------------------ */
/* Services: names from the sheets `serviceGroups` and `itemFamilies`.  */
/* ------------------------------------------------------------------ */

export type ServiceGroup = {
  letter: string;
  sheetLabel: string; // verbatim from the spreadsheet
  name: string;
  slug: string;
  lines: string[];
  mood: Reviewable;
};

export const servicesMappingReview = true as const; // line -> group mapping is inferred

export const serviceGroups: ServiceGroup[] = [
  {
    letter: "A",
    sheetLabel: "Serviço A PURE BEM ESTAR",
    name: "PURE BEM ESTAR",
    slug: "bem-estar",
    lines: ["PURE RITUAL", "PURE MASSAGE", "PURE THERAPYS"],
    mood: mood("Um tempo só seu, para abrandar e respirar."),
  },
  {
    letter: "B",
    sheetLabel: "Serviço B PURE ESTÉTICA",
    name: "PURE ESTÉTICA",
    slug: "estetica",
    lines: ["PURE FACE", "PURE BODY", "PURE FOTOTERAPIA", "PURE BELL"],
    mood: mood("Cuidar do rosto e do corpo, com calma e atenção ao detalhe."),
  },
  {
    letter: "C",
    sheetLabel: "Serviço C PURE EPIL",
    name: "PURE EPIL",
    slug: "epil",
    lines: ["PURE EPIL"],
    mood: mood("Pele lisa, num ambiente tranquilo."),
  },
  {
    letter: "D",
    sheetLabel: "Serviço D PURE PEDI/ MANI",
    name: "PURE PEDI/ MANI",
    slug: "pedi-mani",
    lines: ["PURE MANICURE", "PURE MEDPEDICURE"],
    mood: mood("Mãos e pés tratados com o cuidado que merecem."),
  },
];

export const otherServices = {
  name: "Outros Serviços",
  mood: mood("Pergunte-nos na loja."),
};

/* ------------------------------------------------------------------ */
/* Mood copy (review: true)                                             */
/* ------------------------------------------------------------------ */

export const copy = {
  heroIntro: mood("Um lugar para abrandar, respirar e voltar a si."),
  homeIntroTitle: mood("O tempo abranda aqui."),
  homeIntroBody: mood(
    "Luz suave, texturas naturais e silêncio. Na Simple Pure, cada visita é um pequeno ritual de cuidado: por dentro e por fora.",
  ),
  servicesIntro: mood("Rituais pensados para o corpo, o rosto e o bem-estar."),
  productsIntro: mood("As marcas que escolhemos para continuar o ritual em casa."),
  aboutBody: mood(
    "A Simple Pure é um espaço de estética natural em Castelo Branco. Acreditamos que o bem-estar começa no interior e se reflete no exterior.",
  ),
  visitInvite: mood("Venha visitar-nos."),
  promoMood: mood("Partilhe o seu carinho por nós e receba um pequeno mimo."),
};
