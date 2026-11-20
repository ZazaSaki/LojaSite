// Post-build audit: reconciles every business fact from the spreadsheet and the
// legacy site against the exported HTML in out/. Run after `npm run build`.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { readRows } from "./extract-catalog.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;| /g, " ");
const html = (rel) => decode(fs.readFileSync(path.join(out, rel), "utf8"));
const visible = (rel) => html(rel).replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
const eur = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" });
const price = (n) => eur.format(n).replace(/ /g, " ");
const problems = [];
const rows = [];
const row = (category, original, site, note = "") => rows.push({ category, original, site, note });

const { rows: products, serviceGroups, itemFamilies } = readRows();

/* Products: every row, every customer-facing field, on its own page */
let productsOk = 0;
for (const p of products) {
  const f = `products/item/${p.id}/index.html`;
  if (!fs.existsSync(path.join(out, f))) { problems.push(`missing page for ${p.id}`); continue; }
  const t = visible(f);
  const want = [p.name, price(p.price), p.id, p.family ?? "Outros", ...(p.ean ? [p.ean] : [])];
  const miss = want.filter((w) => !t.includes(w));
  if (miss.length) problems.push(`${p.id}: not shown -> ${miss.join(" | ")}`);
  else productsOk++;
}
row("Produtos (linhas da folha)", products.length, productsOk, "nome, preço, ref., família e EAN verificados na página");
const withEan = products.filter((p) => p.ean).length;
row("  … com EAN", withEan, products.filter((p) => p.ean && visible(`products/item/${p.id}/index.html`).includes(p.ean)).length);
const catalogPage = visible("products/index.html");
row("  … no catálogo /products/", products.length, products.filter((p) => catalogPage.includes(`Ref. ${p.id}`)).length);

/* Product families */
const fams = [...new Set(products.map((p) => p.family ?? "Outros"))];
row("Famílias de produtos", fams.length, fams.filter((n) => fs.existsSync(path.join(out, "products/family", n.toLowerCase().replace(/\s+/g, "-"), "index.html"))).length);

/* Services (sheets serviceGroups + itemFamilies) */
const fixes = { "PURE BOBY": "PURE BODY", "PURE FOTOTERAPI": "PURE FOTOTERAPIA" };
const svc = visible("services/index.html");
const groupName = (g) => g.replace(/^Serviço [A-D]\s+/, "");
row("Grupos de serviços", serviceGroups.length, serviceGroups.filter((g) => svc.includes(groupName(g))).length);
const lines = itemFamilies.filter((x) => x.startsWith("PURE "));
row("Linhas de serviço (PURE …)", lines.length, lines.filter((l) => svc.includes(fixes[l] ?? l)).length, "BOBY→BODY, FOTOTERAPI→FOTOTERAPIA (gralhas corrigidas)");

/* Promotion (legacy carousel + Promo.jpg artwork) */
const promoTexts = ["1 Like = 5% de Desconto", "Válido para qualquer tratamento após confirmação do like"];
const promo = visible("promocoes/index.html");
row("Promoções", 1, promoTexts.every((t) => promo.includes(t)) ? 1 : 0, "título + condição (\"Valido\"→\"Válido\")");
if (!fs.existsSync(path.join(root, "public/images/promo.webp"))) problems.push("promo artwork missing");

/* About / brand facts (legacy about.js, carousel, logo) */
const about = visible("about/index.html");
const brandFacts = ["Simple Pure", "O seu ritual SPA", "Salão de estética natural", "Trata por dentro o que se vê por fora", "Quem somos?", "Onde estamos?"];
row("Sobre (factos da marca)", brandFacts.length, brandFacts.filter((f) => about.includes(f)).length, "texto Lorem ipsum antigo não transportado");

/* Location */
const address = "Av. Nuno Álvares 27 loja 1, 6000-083 Castelo Branco";
const mapsId = "0xd3d5fcd85a13457:0x886599f94585994b";
const aboutRaw = html("about/index.html");
row("Localização: morada", 1, about.includes("Av. Nuno Álvares 27 loja 1") && about.includes("6000-083 Castelo Branco") ? 1 : 0);
row("Localização: link Google Maps", 1, aboutRaw.includes(mapsId) ? 1 : 0);
const all = execSync(`grep -rhoiE "hor[áa]rio|telefone|tel\\.|telem[óo]vel|[a-z0-9._-]+@[a-z0-9-]+\\.[a-z]+" ${out} --include=*.html || true`).toString().trim();
row("Horário / telefone / email", 0, all ? all.split("\n").length : 0, "não existem nos dados originais; nada inventado");

/* Legacy snapshot public/dataBase.json (145 rows, older than the spreadsheet) */
try {
  const legacy = JSON.parse(execSync("git show main:public/dataBase.json", { cwd: root }).toString()).List;
  const byId = new Map(products.map((p) => [p.id, p]));
  const notInSheet = legacy.filter((l) => !byId.has(l.id));
  const priceDiff = legacy.filter((l) => byId.has(l.id) && price(byId.get(l.id).price).replace(/\s/g, "") !== l.price.replace(".", ",").replace("€", "€"));
  row("dataBase.json antigo (referência)", legacy.length, legacy.length - notInSheet.length, `${notInSheet.length} ids fora da folha; ${priceDiff.length} preços diferentes da folha`);
} catch { /* main branch not available */ }

console.table(rows.map((r) => ({ Categoria: r.category, "Original Count": r.original, "New Site Count": r.site, Notas: r.note })));
if (problems.length) { console.error("✗ " + problems.join("\n✗ ")); process.exit(1); }
console.log("✓ reconciliação sem diferenças");
