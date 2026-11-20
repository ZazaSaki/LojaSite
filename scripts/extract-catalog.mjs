// Build-time extraction: data/exelTest.xlsx  ->  src/data/catalog.json
// Business data is copied verbatim. The only normalisation is trimming and
// collapsing repeated whitespace inside names.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

XLSX.set_fs(fs);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(root, "data", "exelTest.xlsx");
const TARGET = path.join(root, "src", "data", "catalog.json");
const OTHERS = "Outros"; // existing label for products without a family

export const clean = (v) => String(v ?? "").replace(/\s+/g, " ").trim();
export const slugify = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Read the raw product rows exactly as the legacy parser did (row 5 until column A is empty). */
export function readRows(file = SOURCE) {
  const wb = XLSX.readFile(file);
  const ws = wb.Sheets["Produtos"];
  const rows = [];
  for (let r = 5; ws["A" + r]; r++) {
    const v = (c) => (ws[c + r] ? ws[c + r].v : null);
    rows.push({
      row: r,
      id: String(v("A")),
      family: v("B") == null || clean(v("B")) === "" ? null : clean(v("B")),
      name: clean(v("C")),
      ean: v("E") == null || clean(v("E")) === "" ? null : String(v("E")).trim(),
      vatIncluded: clean(v("K")) === "Sim",
      price: v("L"),
      active: clean(v("H")) !== "Não",
    });
  }
  const col = (name) => {
    const s = wb.Sheets[name];
    if (!s || !s["!ref"]) return [];
    return XLSX.utils.sheet_to_json(s, { header: 1, blankrows: false }).map((r) => clean(r[0])).filter(Boolean);
  };
  return { rows, serviceGroups: col("serviceGroups"), itemFamilies: col("itemFamilies") };
}

function build() {
  const { rows, serviceGroups, itemFamilies } = readRows();

  const products = rows
    .map((r) => {
      if (typeof r.price !== "number") throw new Error(`Row ${r.row} (${r.id}) has no numeric price`);
      const family = r.family ?? OTHERS;
      const prefix = r.family ? r.family + " " : null;
      const shortName = prefix && r.name.startsWith(prefix) ? r.name.slice(prefix.length) : r.name;
      return {
        id: r.id,
        name: r.name,
        shortName,
        family,
        familySlug: slugify(family),
        price: r.price,
        ean: r.ean,
        vatIncluded: r.vatIncluded,
      };
    })
    .sort((a, b) => Number(a.id) - Number(b.id));

  const famMap = new Map();
  for (const p of products) {
    const f = famMap.get(p.family) ?? { name: p.family, slug: p.familySlug, count: 0, min: Infinity, max: -Infinity, firstId: Number(p.id) };
    f.count++;
    f.min = Math.min(f.min, p.price);
    f.max = Math.max(f.max, p.price);
    f.firstId = Math.min(f.firstId, Number(p.id));
    famMap.set(p.family, f);
  }
  // Keep the spreadsheet's own code order (2010x Gehwol, 2030x Gemology, ...), "Outros" last.
  const families = [...famMap.values()]
    .sort((a, b) => (a.name === OTHERS) - (b.name === OTHERS) || a.firstId - b.firstId)
    .map(({ firstId, ...f }) => f);

  const catalog = {
    source: "data/exelTest.xlsx — folha Produtos",
    total: products.length,
    allVatIncluded: products.every((p) => p.vatIncluded),
    families,
    products,
    sheets: { serviceGroups, itemFamilies },
  };

  fs.mkdirSync(path.dirname(TARGET), { recursive: true });
  fs.writeFileSync(TARGET, JSON.stringify(catalog, null, 2) + "\n");
  console.log(`catalog: ${products.length} produtos, ${families.length} famílias -> ${path.relative(root, TARGET)}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) build();
