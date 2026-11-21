// Verifies that the site data matches the spreadsheet exactly, and (if out/ exists)
// that every product and family page was exported.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readRows } from "./extract-catalog.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "src/data/catalog.json"), "utf8"));
const { rows } = readRows();
const errors = [];
const fail = (m) => errors.push(m);

if (catalog.products.length !== rows.length) fail(`count: catalog ${catalog.products.length} vs sheet ${rows.length}`);
const ids = new Set(catalog.products.map((p) => p.id));
if (ids.size !== catalog.products.length) fail("duplicate ids in catalog");

const byId = new Map(catalog.products.map((p) => [p.id, p]));
for (const r of rows) {
  const p = byId.get(r.id);
  if (!p) { fail(`missing product ${r.id}`); continue; }
  if (p.price !== r.price) fail(`${r.id}: price ${p.price} != ${r.price}`);
  if (p.ean !== r.ean) fail(`${r.id}: ean ${p.ean} != ${r.ean}`);
  if (p.name !== r.name) fail(`${r.id}: name "${p.name}" != "${r.name}"`);
  if (p.family !== (r.family ?? "Outros")) fail(`${r.id}: family ${p.family} != ${r.family}`);
}

const out = path.join(root, "out");
let pages = 0;
if (fs.existsSync(out)) {
  for (const p of catalog.products) {
    const f = path.join(out, "products/item", p.id, "index.html");
    if (!fs.existsSync(f)) fail(`missing page ${path.relative(root, f)}`);
    else {
      pages++;
      const html = fs.readFileSync(f, "utf8");
      if (!html.includes(`Ref. ${p.id}`) && !html.includes(p.id)) fail(`page ${p.id} does not show its code`);
    }
  }
  for (const f of catalog.families) {
    const file = path.join(out, "products/family", f.slug, "index.html");
    if (!fs.existsSync(file)) fail(`missing page ${path.relative(root, file)}`);
    else pages++;
  }
  for (const route of ["index.html", "services/index.html", "products/index.html", "promocoes/index.html", "about/index.html", "informacao-legal/index.html", "politica-de-privacidade/index.html", "politica-de-cookies/index.html", "404.html"]) {
    if (!fs.existsSync(path.join(out, route))) fail(`missing page out/${route}`);
    else pages++;
  }
  if (fs.existsSync(path.join(out, "api"))) fail("out/api should not exist");
  if (fs.existsSync(path.join(out, "exelTest.xlsx"))) fail("raw spreadsheet must not be published");
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  ` + errors.join("\n  "));
  process.exit(1);
}
console.log(`✓ ${rows.length} produtos e ${catalog.families.length} famílias coincidem com a folha` + (pages ? `; ${pages} páginas exportadas verificadas` : " (out/ ainda não existe)"));
