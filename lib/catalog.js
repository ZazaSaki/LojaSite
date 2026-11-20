import * as xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';
import { slugify } from './format.js';

const XLSX_PATH = path.join(process.cwd(), 'public', 'exelTest.xlsx');

let productsCache = null;

function readProducts() {
  if (productsCache) return productsCache;
  const buf = fs.readFileSync(XLSX_PATH);
  const wb = xlsx.read(buf, { type: 'buffer' });
  const ws = wb.Sheets['Produtos'];
  const cell = (letter, i) => (ws[letter + i] ? ws[letter + i].v : null);

  const products = [];
  let i = 5;
  for (;;) {
    const id = cell('A', i);
    if (id == null || String(id).trim() === '') break;
    const name = String(cell('C', i) ?? '').trim();
    const rawFamily = String(cell('B', i) ?? '').trim();
    const ean = cell('E', i);
    products.push({
      id: String(id),
      family: rawFamily || 'Outros',
      name,
      unit: String(cell('D', i) ?? '').trim(),
      ean: ean != null && String(ean).trim() !== '' ? String(ean) : null,
      price: Number(cell('L', i)),
    });
    i += 1;
  }
  productsCache = products;
  return products;
}

export function getProducts() {
  return readProducts();
}

export function getFamilies() {
  const counts = new Map();
  for (const p of getProducts()) {
    counts.set(p.family, (counts.get(p.family) || 0) + 1);
  }
  const families = [...counts.entries()].map(([name, count]) => ({
    name,
    count,
    slug: slugify(name),
  }));
  families.sort((a, b) => {
    if (a.name === 'Outros') return 1;
    if (b.name === 'Outros') return -1;
    return b.count - a.count;
  });
  return families;
}

export function getFamilyBySlug(slug) {
  return getFamilies().find((f) => f.slug === slug) || null;
}

export function getProductsByFamily(slug) {
  const family = getFamilyBySlug(slug);
  if (!family) return [];
  return getProducts()
    .filter((p) => slugify(p.family) === slug)
    .sort((a, b) => a.name.localeCompare(b.name, 'pt'));
}

export function getProductById(id) {
  return getProducts().find((p) => p.id === String(id)) || null;
}
