import catalog from "@/data/catalog.json";

export type Product = (typeof catalog.products)[number];
export type Family = (typeof catalog.families)[number];

export const products: Product[] = catalog.products;
export const families: Family[] = catalog.families;
export const totalProducts = catalog.total;
export const allVatIncluded = catalog.allVatIncluded;

const byId = new Map(products.map((p) => [p.id, p]));
const bySlug = new Map(families.map((f) => [f.slug, f]));

export const getProduct = (id: string) => byId.get(id);
export const getFamily = (slug: string) => bySlug.get(slug);
export const productsOf = (slug: string) => products.filter((p) => p.familySlug === slug);

const eur = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" });
export const formatPrice = (n: number) => eur.format(n);
export const formatRange = (f: Pick<Family, "min" | "max">) =>
  f.min === f.max ? formatPrice(f.min) : `${formatPrice(f.min)} – ${formatPrice(f.max)}`;

export const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** Lowercase + strip accents, for accent-insensitive search. */
export const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Visual identity per family (pure design tokens, no business data). */
export const familyTone: Record<string, { from: string; to: string; ink: string; facet: string }> = {
  gehwol: { from: "#E9E3D6", to: "#D5DACB", ink: "#3E4636", facet: "#8C987C" },
  gemology: { from: "#EDE2D6", to: "#D9C2B0", ink: "#4A3329", facet: "#A9826B" },
  skinclinic: { from: "#EEEAE4", to: "#D9D9D6", ink: "#33363A", facet: "#8D9196" },
  "mossi-epil": { from: "#EFE6DC", to: "#E2CDBD", ink: "#4B3528", facet: "#B48C70" },
  "yellow-rose": { from: "#F2E7D0", to: "#E6CFA2", ink: "#4D3B1F", facet: "#C49A55" },
  maquilhagem: { from: "#EFE1DD", to: "#D9BDB5", ink: "#4A2D2A", facet: "#A9786F" },
  outros: { from: "#ECE6DD", to: "#D8CFC2", ink: "#3B322B", facet: "#8A7266" },
};
export const toneOf = (slug: string) => familyTone[slug] ?? familyTone.outros;
